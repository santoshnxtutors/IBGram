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
  const backendSession = await loginWithBackendAuth(request, username, password, remember);
  if (backendSession) {
    LOGIN_ATTEMPTS.delete(ip);
    return backendSession;
  }

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

export async function handleAdminLogout(request?: NextRequest): Promise<Response> {
  const response = NextResponse.json({ ok: true, redirectTo: "/admin/login" });
  const backendUrl = getBackendUrl();
  if (backendUrl && request) {
    try {
      const backendResponse = await fetch(`${backendUrl}/api/auth/logout`, {
        method: "POST",
        headers: {
          cookie: request.headers.get("cookie") ?? "",
          "x-request-id": request.headers.get("x-request-id") ?? "",
        },
        cache: "no-store",
      });
      const backendSetCookie = backendResponse.headers.get("set-cookie");
      if (backendSetCookie) response.headers.append("set-cookie", backendSetCookie);
    } catch {
      // Local admin cookie is still cleared below if the backend is unavailable.
    }
  }
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 0,
  });
  return response;
}

async function loginWithBackendAuth(request: NextRequest, username: string, password: string, remember: boolean): Promise<Response | null> {
  const backendUrl = getBackendUrl();
  if (!backendUrl) return null;

  try {
    const backendResponse = await fetch(`${backendUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-forwarded-for": request.headers.get("x-forwarded-for") ?? "",
        "user-agent": request.headers.get("user-agent") ?? "",
        "x-request-id": request.headers.get("x-request-id") ?? "",
      },
      body: JSON.stringify({ usernameOrEmail: username, password }),
      cache: "no-store",
    });

    const payload = await backendResponse.json().catch(() => ({}));
    if (!backendResponse.ok || !payload?.success || !payload?.data?.user) return null;

    const session = adminSessionFromBackendUser(payload.data.user, remember);
    const response = NextResponse.json({ ok: true, redirectTo: "/admin/dashboard" });
    const backendSetCookie = backendResponse.headers.get("set-cookie");
    if (backendSetCookie) response.headers.append("set-cookie", backendSetCookie);
    response.cookies.set(COOKIE_NAME, signSession(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/admin",
      maxAge: remember ? REMEMBER_TTL_SECONDS : SESSION_TTL_SECONDS,
    });
    return response;
  } catch {
    return null;
  }
}

function getBackendUrl(): string {
  return (process.env.BACKEND_URL ?? "").replace(/\/$/, "");
}

function adminSessionFromBackendUser(user: { username?: string; roles?: string[]; permissions?: string[] }, remember: boolean): AdminSession {
  const role = mapBackendRole(user.roles ?? []);
  const permissions = mapBackendPermissions(user.permissions ?? [], role);
  const ttl = remember ? REMEMBER_TTL_SECONDS : SESSION_TTL_SECONDS;
  return {
    username: user.username ?? "admin",
    role,
    permissions,
    issuedAt: Date.now(),
    expiresAt: Date.now() + ttl * 1000,
  };
}

function mapBackendRole(roles: string[]): AdminUserRole {
  if (roles.includes("super_admin")) return "owner";
  if (roles.includes("admin")) return "admin";
  if (roles.includes("editor") || roles.includes("content_manager") || roles.includes("seo_manager") || roles.includes("tutor_manager")) return "editor";
  return "viewer";
}

function mapBackendPermissions(permissions: string[], role: AdminUserRole): AdminPermission[] {
  const mapped = new Set<AdminPermission>();
  if (permissions.includes("pages.read")) mapped.add("pages:read");
  if (permissions.includes("pages.update") || permissions.includes("pages.create")) mapped.add("pages:write");
  if (permissions.includes("pages.publish")) mapped.add("pages:publish");
  if (permissions.includes("pages.create")) mapped.add("generator:use");
  if (permissions.includes("tutors.update") || permissions.includes("tutors.create")) mapped.add("tutors:write");
  if (permissions.includes("locations.update") || permissions.includes("locations.create")) mapped.add("locations:write");
  if (permissions.includes("seo.update") || permissions.includes("internal_links.update")) mapped.add("seo:write");
  if (permissions.includes("assets.upload")) mapped.add("assets:write");
  if (permissions.includes("imports.create")) mapped.add("imports:write");
  if (permissions.includes("settings.update")) mapped.add("settings:write");
  if (permissions.includes("users.update") || permissions.includes("users.create")) mapped.add("users:manage");
  if (mapped.size === 0) return ROLE_PERMISSIONS[role] ?? ROLE_PERMISSIONS.viewer;
  mapped.add("dashboard:read");
  return Array.from(mapped);
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
