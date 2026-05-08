import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse, type NextRequest } from "next/server";

import { adminLoginSchema } from "../_validators/admin-validators";
import { ROLE_PERMISSIONS, verifyLocalAdminUser } from "./admin-users";
import type { AdminPermission, AdminUserRole } from "../_types/admin";

const COOKIE_NAME = "ibgram_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;
const REMEMBER_TTL_SECONDS = 60 * 60 * 24 * 14;
const LOGIN_ATTEMPTS = new Map<string, { count: number; resetAt: number }>();

export type AdminSession = {
  username: string;
  role: AdminUserRole;
  permissions: AdminPermission[];
  issuedAt: number;
  expiresAt: number;
};

export function getAdminCookieName() {
  return COOKIE_NAME;
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(COOKIE_NAME)?.value);
}

export async function requireAdminSession(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}

export async function redirectIfAdminSession() {
  const session = await getAdminSession();
  if (session) redirect("/admin/dashboard");
}

export function requireAdminRequest(request: NextRequest): AdminSession | Response {
  const session = verifySessionToken(request.cookies.get(COOKIE_NAME)?.value);
  if (!session) {
    return Response.json({ error: "Admin session required." }, { status: 401 });
  }
  return session;
}

export async function handleAdminLogin(request: NextRequest): Promise<Response> {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const rate = checkRateLimit(ip);
  if (!rate.ok) {
    return Response.json({ error: "Too many login attempts. Try again shortly." }, { status: 429 });
  }

  const parsed = adminLoginSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    recordFailedAttempt(ip);
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid login request." }, { status: 400 });
  }

  if (!isAuthConfigured()) {
    recordFailedAttempt(ip);
    return Response.json({ error: "Admin auth is not configured." }, { status: 503 });
  }

  const { username, password, remember } = parsed.data;
  const credentialUser = await verifyAdminCredentials(username, password);
  if (!credentialUser) {
    recordFailedAttempt(ip);
    return Response.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  LOGIN_ATTEMPTS.delete(ip);
  const ttl = remember ? REMEMBER_TTL_SECONDS : SESSION_TTL_SECONDS;
  const token = signSession({
    username: credentialUser.username,
    role: credentialUser.role,
    permissions: credentialUser.permissions,
    issuedAt: Date.now(),
    expiresAt: Date.now() + ttl * 1000,
  });

  const response = NextResponse.json({ ok: true, redirectTo: "/admin/dashboard" });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: ttl,
  });
  return response;
}

export function handleAdminLogout(): Response {
  const response = NextResponse.json({ ok: true, redirectTo: "/admin/login" });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 0,
  });
  return response;
}

export function isAuthConfigured(): boolean {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_SESSION_SECRET && (process.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD_HASH));
}

export function signSession(session: AdminSession): string {
  const payload = Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
  const signature = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function verifySessionToken(token?: string): AdminSession | null {
  if (!process.env.ADMIN_SESSION_SECRET) return null;
  if (!token || !token.includes(".")) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  if (!safeCompare(signature, expected)) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AdminSession;
    if (!session.username || !session.role || Date.now() > session.expiresAt) return null;
    return {
      ...session,
      permissions: Array.isArray(session.permissions) ? session.permissions : ROLE_PERMISSIONS[session.role] ?? [],
    };
  } catch {
    return null;
  }
}

async function verifyAdminCredentials(username: string, password: string): Promise<Pick<AdminSession, "username" | "role" | "permissions"> | null> {
  const envUsername = process.env.ADMIN_USERNAME ?? "";
  const validEnvUsername = safeCompare(username, envUsername);
  const validEnvPassword = await verifyPassword(password);
  if (validEnvUsername && validEnvPassword) {
    return {
      username: envUsername,
      role: "owner",
      permissions: ROLE_PERMISSIONS.owner,
    };
  }

  return verifyLocalAdminUser(username, password);
}

async function verifyPassword(password: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH?.trim();
  if (hash) {
    const digest = createHash("sha256").update(password).digest("hex");
    const normalizedHash = hash.startsWith("sha256:") ? hash.slice("sha256:".length) : hash;
    return safeCompare(digest, normalizedHash);
  }
  return safeCompare(password, process.env.ADMIN_PASSWORD ?? "");
}

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is required for admin sessions.");
  return secret;
}

function checkRateLimit(ip: string): { ok: boolean } {
  const now = Date.now();
  const attempt = LOGIN_ATTEMPTS.get(ip);
  if (!attempt || now > attempt.resetAt) return { ok: true };
  return { ok: attempt.count < 6 };
}

function recordFailedAttempt(ip: string) {
  const now = Date.now();
  const attempt = LOGIN_ATTEMPTS.get(ip);
  if (!attempt || now > attempt.resetAt) {
    LOGIN_ATTEMPTS.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return;
  }
  LOGIN_ATTEMPTS.set(ip, { ...attempt, count: attempt.count + 1 });
}

function safeCompare(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
