import type { Request, Response } from "express";
import type { PermissionName, RoleName } from "@ibgram/shared";
import { buildHttpOnlyCookieOptions, createOpaqueToken, hashToken, parseTtlToMs, safeCompareTokenHash, SESSION_COOKIE_NAME } from "@ibgram/authentication";
import { hashPassword, validatePasswordPolicy, verifyPassword } from "@ibgram/authentication";
import { AppError } from "../../middleware/error.middleware";
import { getEnv } from "../../config/env";
import { prisma } from "../../lib/prisma";
import { writeAuditLog } from "../audit/audit.service";
import type { AuthResult, SafeAuthUser } from "./auth.types";

type UserWithRoles = Awaited<ReturnType<typeof getUserWithRolesById>>;
const GOOGLE_STATE_COOKIE = "ibgram_google_state";

function getClientIp(req: Request): string | undefined {
  return req.ip || req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim();
}

function getUserAgent(req: Request): string | undefined {
  return req.headers["user-agent"];
}

function slugUsername(value: string): string {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return slug.length >= 3 ? slug : `user-${slug || createOpaqueToken(4).toLowerCase()}`;
}

async function uniqueUsername(email: string): Promise<string> {
  const [localPart] = email.split("@");
  const base = slugUsername(localPart || "user");
  let candidate = base;
  let suffix = 1;

  while (await prisma.user.findUnique({ where: { username: candidate }, select: { id: true } })) {
    suffix += 1;
    candidate = `${base.slice(0, Math.max(3, 58 - String(suffix).length))}${suffix}`;
  }

  return candidate;
}

async function assignDefaultViewerRole(userId: string): Promise<void> {
  const role = await prisma.role.findUnique({ where: { name: "viewer" }, select: { id: true } });
  if (!role) return;

  await prisma.userRole.upsert({
    where: {
      userId_roleId: {
        userId,
        roleId: role.id,
      },
    },
    update: {},
    create: {
      userId,
      roleId: role.id,
    },
  });
}

function mapUser(user: NonNullable<UserWithRoles>): SafeAuthUser {
  const roles = user.roles.map((userRole) => userRole.role.name as RoleName);
  const permissions = Array.from(
    new Set(
      user.roles.flatMap((userRole) =>
        userRole.role.permissions.map((rolePermission) => rolePermission.permission.name as PermissionName),
      ),
    ),
  );

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    avatarUrl: user.avatarUrl,
    status: user.status,
    lastLoginAt: user.lastLoginAt,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    roles,
    permissions,
  };
}

export async function getUserWithRolesById(userId: string) {
  return prisma.user.findFirst({
    where: {
      id: userId,
      deletedAt: null,
    },
    include: {
      roles: {
        include: {
          role: {
            include: {
              permissions: {
                include: {
                  permission: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

export async function getUserPermissions(userId: string): Promise<PermissionName[]> {
  const user = await getUserWithRolesById(userId);
  if (!user || user.status !== "active") return [];
  return mapUser(user).permissions;
}

export async function hasPermission(userId: string, permission: PermissionName): Promise<boolean> {
  const permissions = await getUserPermissions(userId);
  return permissions.includes(permission);
}

export async function createSession(userId: string, req: Request) {
  const env = getEnv();
  const token = createOpaqueToken(48);
  const tokenHash = hashToken(token);
  const ttlMs = parseTtlToMs(env.SESSION_TTL);
  const expiresAt = new Date(Date.now() + ttlMs);

  const session = await prisma.session.create({
    data: {
      userId,
      tokenHash,
      ipAddress: getClientIp(req),
      userAgent: getUserAgent(req),
      expiresAt,
    },
  });

  return { token, session, ttlMs };
}

export function setSessionCookie(res: Response, token: string, maxAgeMs: number): void {
  const env = getEnv();
  res.cookie(
    SESSION_COOKIE_NAME,
    token,
    buildHttpOnlyCookieOptions({
      domain: env.COOKIE_DOMAIN,
      secure: env.NODE_ENV === "production" ? true : env.COOKIE_SECURE,
      maxAgeMs,
      sameSite: "lax",
    }),
  );
}

export function clearSessionCookie(res: Response): void {
  const env = getEnv();
  res.clearCookie(
    SESSION_COOKIE_NAME,
    buildHttpOnlyCookieOptions({
      domain: env.COOKIE_DOMAIN,
      secure: env.NODE_ENV === "production" ? true : env.COOKIE_SECURE,
      maxAgeMs: 0,
      sameSite: "lax",
    }),
  );
}

async function recordLoginAttempt(input: {
  userId?: string | null;
  usernameOrEmail: string;
  success: boolean;
  reason?: string;
  req: Request;
}) {
  await prisma.loginAttempt.create({
    data: {
      userId: input.userId ?? null,
      email: input.usernameOrEmail.toLowerCase(),
      success: input.success,
      reason: input.reason,
      ipAddress: getClientIp(input.req),
      userAgent: getUserAgent(input.req),
    },
  });
}

export async function login(input: { usernameOrEmail: string; password: string }, req: Request, res: Response): Promise<AuthResult> {
  const usernameOrEmail = input.usernameOrEmail.trim();
  const normalized = usernameOrEmail.toLowerCase();
  const genericError = new AppError(401, "INVALID_CREDENTIALS", "Invalid username/email or password.");

  const user = await prisma.user.findFirst({
    where: {
      deletedAt: null,
      OR: [{ email: normalized }, { username: usernameOrEmail }],
    },
  });

  const passwordOk = user ? await verifyPassword(input.password, user.passwordHash) : false;
  if (!user || !passwordOk) {
    await recordLoginAttempt({ userId: user?.id, usernameOrEmail, success: false, reason: "invalid_credentials", req });
    await writeAuditLog({
      actorId: user?.id,
      action: "login.failure",
      entityType: "User",
      entityId: user?.id,
      metadata: { reason: "invalid_credentials", usernameOrEmail },
      req,
    });
    throw genericError;
  }

  if (user.status !== "active") {
    await recordLoginAttempt({ userId: user.id, usernameOrEmail, success: false, reason: "inactive_user", req });
    await writeAuditLog({
      actorId: user.id,
      action: "login.failure",
      entityType: "User",
      entityId: user.id,
      metadata: { reason: "inactive_user", status: user.status },
      req,
    });
    throw genericError;
  }

  const { token, session, ttlMs } = await createSession(user.id, req);
  setSessionCookie(res, token, ttlMs);

  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  await recordLoginAttempt({ userId: user.id, usernameOrEmail, success: true, req });
  await writeAuditLog({
    actorId: user.id,
    action: "login.success",
    entityType: "User",
    entityId: user.id,
    metadata: { sessionId: session.id },
    req,
  });

  const userWithRoles = await getUserWithRolesById(user.id);
  if (!userWithRoles) throw new AppError(401, "INVALID_CREDENTIALS", "Invalid username/email or password.");

  return {
    user: mapUser(userWithRoles),
    sessionId: session.id,
  };
}

export async function register(
  input: { email: string; password: string; firstName: string; lastName?: string; role?: "student" | "tutor" },
  req: Request,
  res: Response,
): Promise<AuthResult> {
  const email = input.email.trim().toLowerCase();
  const existing = await prisma.user.findFirst({
    where: {
      deletedAt: null,
      email,
    },
    select: { id: true },
  });

  if (existing) {
    throw new AppError(409, "EMAIL_ALREADY_REGISTERED", "An account already exists for this email.");
  }

  const policy = validatePasswordPolicy(input.password);
  if (!policy.valid) {
    throw new AppError(400, "WEAK_PASSWORD", policy.errors.join(" "), { warnings: policy.warnings });
  }

  const username = await uniqueUsername(email);
  const passwordHash = await hashPassword(input.password);
  const user = await prisma.user.create({
    data: {
      email,
      username,
      passwordHash,
      firstName: input.firstName.trim(),
      lastName: input.lastName?.trim() || null,
      status: "active",
    },
    select: { id: true },
  });

  await assignDefaultViewerRole(user.id);

  const { token, session, ttlMs } = await createSession(user.id, req);
  setSessionCookie(res, token, ttlMs);

  await writeAuditLog({
    actorId: user.id,
    action: "register.success",
    entityType: "User",
    entityId: user.id,
    metadata: { role: input.role ?? "student" },
    req,
  });

  const userWithRoles = await getUserWithRolesById(user.id);
  if (!userWithRoles) throw new AppError(500, "REGISTRATION_FAILED", "Account was created but could not be loaded.");

  return {
    user: mapUser(userWithRoles),
    sessionId: session.id,
  };
}

function getCookieOptions(maxAgeMs: number) {
  const env = getEnv();
  return buildHttpOnlyCookieOptions({
    domain: env.COOKIE_DOMAIN,
    secure: env.NODE_ENV === "production" ? true : env.COOKIE_SECURE,
    maxAgeMs,
    sameSite: "lax",
  });
}

export function redirectToGoogle(req: Request, res: Response): void {
  const env = getEnv();
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    throw new AppError(503, "GOOGLE_AUTH_NOT_CONFIGURED", "Google authentication is not configured.");
  }

  const state = createOpaqueToken(32);
  const role = req.query.role === "tutor" ? "tutor" : "student";
  const statePayload = Buffer.from(JSON.stringify({ state, role }), "utf8").toString("base64url");

  res.cookie(GOOGLE_STATE_COOKIE, statePayload, getCookieOptions(10 * 60 * 1000));

  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.searchParams.set("client_id", env.GOOGLE_CLIENT_ID);
  url.searchParams.set("redirect_uri", env.GOOGLE_CALLBACK_URL);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid email profile");
  url.searchParams.set("state", statePayload);
  url.searchParams.set("prompt", "select_account");

  res.redirect(url.toString());
}

type GoogleUserInfo = {
  email?: string;
  email_verified?: boolean;
  given_name?: string;
  family_name?: string;
  name?: string;
  picture?: string;
};

async function fetchGoogleUserInfo(code: string): Promise<GoogleUserInfo> {
  const env = getEnv();
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      code,
      grant_type: "authorization_code",
      redirect_uri: env.GOOGLE_CALLBACK_URL,
    }),
  });

  const tokenPayload = (await tokenResponse.json().catch(() => ({}))) as { access_token?: string };
  if (!tokenResponse.ok || !tokenPayload.access_token) {
    throw new AppError(400, "GOOGLE_TOKEN_EXCHANGE_FAILED", "Could not complete Google sign in.");
  }

  const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { authorization: `Bearer ${tokenPayload.access_token}` },
  });

  const userInfo = await userInfoResponse.json().catch(() => ({}));
  if (!userInfoResponse.ok) {
    throw new AppError(400, "GOOGLE_PROFILE_FAILED", "Could not load Google profile.");
  }

  return userInfo as GoogleUserInfo;
}

function parseGoogleState(value: string | undefined): { state: string; role: "student" | "tutor" } | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(Buffer.from(value, "base64url").toString("utf8")) as { state?: string; role?: string };
    if (!parsed.state) return null;
    return { state: parsed.state, role: parsed.role === "tutor" ? "tutor" : "student" };
  } catch {
    return null;
  }
}

export async function handleGoogleCallback(req: Request, res: Response): Promise<void> {
  const env = getEnv();
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) {
    throw new AppError(503, "GOOGLE_AUTH_NOT_CONFIGURED", "Google authentication is not configured.");
  }

  const stateFromQuery = typeof req.query.state === "string" ? req.query.state : "";
  const stateFromCookie = req.cookies?.[GOOGLE_STATE_COOKIE] as string | undefined;
  const parsedState = parseGoogleState(stateFromCookie);

  res.clearCookie(GOOGLE_STATE_COOKIE, getCookieOptions(0));

  if (!parsedState || stateFromQuery !== stateFromCookie) {
    res.redirect(env.AUTH_FAILURE_REDIRECT);
    return;
  }

  const code = typeof req.query.code === "string" ? req.query.code : "";
  if (!code) {
    res.redirect(env.AUTH_FAILURE_REDIRECT);
    return;
  }

  try {
    const googleUser = await fetchGoogleUserInfo(code);
    const email = googleUser.email?.trim().toLowerCase();
    if (!email || googleUser.email_verified === false) {
      res.redirect(env.AUTH_FAILURE_REDIRECT);
      return;
    }

    let user = await prisma.user.findFirst({ where: { email, deletedAt: null }, select: { id: true } });
    if (!user) {
      const generatedPassword = `Google-${createOpaqueToken(32)}aA1!`;
      user = await prisma.user.create({
        data: {
          email,
          username: await uniqueUsername(email),
          passwordHash: await hashPassword(generatedPassword),
          firstName: googleUser.given_name?.trim() || googleUser.name?.trim() || null,
          lastName: googleUser.family_name?.trim() || null,
          avatarUrl: googleUser.picture ?? null,
          status: "active",
        },
        select: { id: true },
      });
      await assignDefaultViewerRole(user.id);
    } else {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          avatarUrl: googleUser.picture ?? undefined,
          lastLoginAt: new Date(),
        },
      });
    }

    const { token, ttlMs } = await createSession(user.id, req);
    setSessionCookie(res, token, ttlMs);

    await writeAuditLog({
      actorId: user.id,
      action: "google.login.success",
      entityType: "User",
      entityId: user.id,
      metadata: { role: parsedState.role },
      req,
    });

    res.redirect(env.AUTH_SUCCESS_REDIRECT);
  } catch {
    res.redirect(env.AUTH_FAILURE_REDIRECT);
  }
}

export async function resolveSession(token: string | undefined): Promise<AuthResult | null> {
  if (!token) return null;

  const tokenHash = hashToken(token);
  const session = await prisma.session.findUnique({
    where: { tokenHash },
    include: {
      user: {
        include: {
          roles: {
            include: {
              role: {
                include: {
                  permissions: {
                    include: {
                      permission: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!session || !safeCompareTokenHash(token, session.tokenHash)) return null;
  if (session.revokedAt || session.expiresAt <= new Date()) return null;
  if (session.user.deletedAt || session.user.status !== "active") return null;

  return {
    user: mapUser(session.user),
    sessionId: session.id,
  };
}

export async function logout(req: Request, res: Response): Promise<void> {
  const token = req.cookies?.[SESSION_COOKIE_NAME] as string | undefined;
  const tokenHash = token ? hashToken(token) : undefined;

  if (tokenHash) {
    const session = await prisma.session.findUnique({ where: { tokenHash } });
    if (session && !session.revokedAt) {
      await prisma.session.update({
        where: { id: session.id },
        data: { revokedAt: new Date() },
      });
      await writeAuditLog({
        actorId: session.userId,
        action: "logout",
        entityType: "Session",
        entityId: session.id,
        req,
      });
    }
  }

  clearSessionCookie(res);
}

export async function changePassword(userId: string, currentPassword: string, newPassword: string, req: Request): Promise<void> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user || user.status !== "active") throw new AppError(401, "AUTHENTICATION_REQUIRED", "Authentication required.");

  const currentPasswordOk = await verifyPassword(currentPassword, user.passwordHash);
  if (!currentPasswordOk) throw new AppError(400, "INVALID_CURRENT_PASSWORD", "Current password is incorrect.");

  const policy = validatePasswordPolicy(newPassword);
  if (!policy.valid) {
    throw new AppError(400, "WEAK_PASSWORD", policy.errors.join(" "), { warnings: policy.warnings });
  }

  const passwordHash = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash },
  });

  await writeAuditLog({
    actorId: user.id,
    action: "password.change",
    entityType: "User",
    entityId: user.id,
    req,
  });
}
