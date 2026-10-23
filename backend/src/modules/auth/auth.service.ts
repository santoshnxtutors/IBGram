import type { Request, Response } from "express";
import type { PermissionName, RoleName } from "@ibgram/shared";
import { buildHttpOnlyCookieOptions, createOpaqueToken, hashToken, parseTtlToMs, safeCompareTokenHash, SESSION_COOKIE_NAME } from "@ibgram/authentication";
import { hashPassword, validatePasswordPolicy, verifyPassword } from "@ibgram/authentication";
import { AppError } from "../../middleware/error.middleware";
import { getEnv } from "../../config/env";
import { logger } from "../../config/logger";
import { prisma } from "../../lib/prisma";
import { writeAuditLog } from "../audit/audit.service";
import { sendMail } from "../../lib/mail";
import { passwordResetEmail } from "../../lib/emails";
import type { AuthResult, SafeAuthUser } from "./auth.types";

type UserWithRoles = Awaited<ReturnType<typeof getUserWithRolesById>>;
const GOOGLE_STATE_COOKIE = "ibgram_google_state";

function getClientIp(req: Request): string | undefined {
  return req.ip || req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim();
}

function getUserAgent(req: Request): string | undefined {
  return req.headers["user-agent"];
}

/** The photo on the tutor's public profile, when they have one. */
function tutorPhoto(user: { tutorProfile?: { avatarUrl: string | null; deletedAt: Date | null } | null }): string | null {
  const profile = user.tutorProfile;
  if (!profile || profile.deletedAt || !profile.avatarUrl) return null;
  const value = profile.avatarUrl.trim();
  if (!value) return null;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("/uploads/")) return `/api/media/${value.slice("/uploads/".length)}`;
  if (value.startsWith("uploads/")) return `/api/media/${value.slice("uploads/".length)}`;
  return value.startsWith("/") ? value : `/${value}`;
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
    avatarUrl: tutorPhoto(user) ?? user.avatarUrl,
    status: user.status,
    accountType: user.accountType ?? null,
    lastLoginAt: user.lastLoginAt,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    roles,
    permissions,
  };
}

/** Full, safe (no password) user by id — used by /me so the client gets names + accountType. */
export async function getSafeUserById(userId: string): Promise<SafeAuthUser | null> {
  const user = await getUserWithRolesById(userId);
  return user ? mapUser(user) : null;
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
      // A tutor who signed up with Google has that account picture on `User`,
      // while the photo on their public profile sits on `Tutor` — prefer it.
      tutorProfile: { select: { avatarUrl: true, deletedAt: true } },
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
      accountType: input.role === "tutor" ? "tutor" : "student",
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

  const tokenPayload = (await tokenResponse.json().catch(() => ({}))) as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };
  if (!tokenResponse.ok || !tokenPayload.access_token) {
    // Google names the cause: invalid_client (wrong secret), invalid_grant
    // (code reused or expired), redirect_uri_mismatch. Carry it through to the
    // failure redirect instead of collapsing every cause into one code.
    const googleError = tokenPayload.error ?? `http_${tokenResponse.status}`;
    logger.warn(
      { status: tokenResponse.status, googleError, description: tokenPayload.error_description },
      "Google token exchange rejected",
    );
    throw new AppError(400, `GOOGLE_TOKEN_${googleError.toUpperCase()}`, "Could not complete Google sign in.");
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

  // Every failure here used to redirect silently to the same URL, so a broken
  // sign-in gave no way to tell which step failed - not in the logs, not in the
  // browser. Tag the redirect and log the reason.
  const fail = (reason: string, detail?: Record<string, unknown>): void => {
    logger.warn({ reason, ...detail }, "Google sign-in failed");
    const url = new URL(env.AUTH_FAILURE_REDIRECT);
    url.searchParams.set("reason", reason);
    res.redirect(url.toString());
  };

  const stateFromQuery = typeof req.query.state === "string" ? req.query.state : "";
  const stateFromCookie = req.cookies?.[GOOGLE_STATE_COOKIE] as string | undefined;
  const parsedState = parseGoogleState(stateFromCookie);

  res.clearCookie(GOOGLE_STATE_COOKIE, getCookieOptions(0));

  if (!parsedState || stateFromQuery !== stateFromCookie) {
    fail("state", {
      hasCookie: Boolean(stateFromCookie),
      hasQueryState: Boolean(stateFromQuery),
      matched: stateFromQuery === stateFromCookie,
    });
    return;
  }

  const code = typeof req.query.code === "string" ? req.query.code : "";
  if (!code) {
    fail("code", { googleError: req.query.error ?? null });
    return;
  }

  try {
    const googleUser = await fetchGoogleUserInfo(code);
    const email = googleUser.email?.trim().toLowerCase();
    if (!email || googleUser.email_verified === false) {
      fail("email", { hasEmail: Boolean(email), verified: googleUser.email_verified });
      return;
    }

    let user = await prisma.user.findFirst({ where: { email, deletedAt: null }, select: { id: true, accountType: true } });
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
          accountType: parsedState.role === "tutor" ? "tutor" : "student",
          status: "active",
        },
        select: { id: true, accountType: true },
      });
      await assignDefaultViewerRole(user.id);
    } else {
      // Older accounts have no type; give them the role they chose so they land on a dashboard.
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          avatarUrl: googleUser.picture ?? undefined,
          lastLoginAt: new Date(),
          ...(user.accountType ? {} : { accountType: parsedState.role }),
        },
        select: { id: true, accountType: true },
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

    // Students and tutors land on their dashboard, or on the profile form until they fill it in.
    // Accounts with no type (staff, old signups) go home. The profile check must never
    // fail the login: the user is already signed in at this point.
    const userId = user.id;
    const dashboard = user.accountType === "tutor" ? "/tutor" : user.accountType === "student" ? "/student" : null;
    const hasProfile = !dashboard
      ? true
      : await (user.accountType === "tutor"
          ? prisma.tutor.count({ where: { userId, deletedAt: null } })
          : prisma.studentProfile.count({ where: { userId } })
        ).then((n) => n > 0, () => true);
    const destination = dashboard ? (hasProfile ? dashboard : `${dashboard}/profile`) : "/";
    res.redirect(new URL(destination, env.AUTH_SUCCESS_REDIRECT).toString());
  } catch (error) {
    // Token exchange, Google profile fetch, or a database write.
    fail(error instanceof AppError ? error.code.toLowerCase() : "server", {
      err: error instanceof Error ? error.message : String(error),
    });
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
          tutorProfile: { select: { avatarUrl: true, deletedAt: true } },
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

/**
 * Google sign-ups get a random password nobody knows. The user knows their password
 * only if they registered with email or have set/changed it since.
 */
export async function hasKnownPassword(userId: string): Promise<boolean> {
  const known = await prisma.auditLog.count({
    where: { actorId: userId, action: { in: ["register.success", "password.change", "password.set"] } },
  });
  return known > 0;
}

/** First password for a Google-only account (no current password to check). */
export async function setInitialPassword(userId: string, newPassword: string, req: Request): Promise<void> {
  const user = await prisma.user.findFirst({ where: { id: userId, deletedAt: null }, select: { id: true, accountType: true } });
  if (!user || (user.accountType !== "student" && user.accountType !== "tutor")) {
    throw new AppError(403, "NOT_ALLOWED", "Password cannot be set for this account here.");
  }
  if (await hasKnownPassword(userId)) {
    throw new AppError(400, "PASSWORD_ALREADY_SET", "Your account already has a password. Use change password instead.");
  }

  const policy = validatePasswordPolicy(newPassword);
  if (!policy.valid) throw new AppError(400, "WEAK_PASSWORD", policy.errors.join(" "), { warnings: policy.warnings });

  await prisma.user.update({ where: { id: userId }, data: { passwordHash: await hashPassword(newPassword) } });
  await writeAuditLog({ actorId: userId, action: "password.set", entityType: "User", entityId: userId, req });
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

const PASSWORD_RESET_TTL_MINUTES = 60;

/**
 * Emails a one-time reset link. Returns void regardless of whether the account
 * exists — revealing that would let anyone enumerate registered emails.
 */
export async function requestPasswordReset(usernameOrEmail: string, req: Request): Promise<void> {
  const value = usernameOrEmail.trim().toLowerCase();
  const user = await prisma.user.findFirst({
    where: { OR: [{ email: value }, { username: value }], deletedAt: null },
    select: { id: true, email: true, firstName: true, status: true },
  });

  if (!user || user.status !== "active") {
    logger.info({ usernameOrEmail: value }, "password reset requested for unknown or inactive account");
    return;
  }

  // One live token per user: older ones stop working the moment a new one is issued.
  await prisma.passwordResetToken.updateMany({
    where: { userId: user.id, usedAt: null },
    data: { usedAt: new Date() },
  });

  const token = createOpaqueToken();
  const expiresAt = new Date(Date.now() + PASSWORD_RESET_TTL_MINUTES * 60_000);
  await prisma.passwordResetToken.create({
    data: { userId: user.id, tokenHash: hashToken(token), expiresAt },
  });

  const base = getEnv().NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  await sendMail({
    to: user.email,
    ...passwordResetEmail({
      name: user.firstName,
      link: `${base}/reset-password?token=${encodeURIComponent(token)}`,
      expiresInMinutes: PASSWORD_RESET_TTL_MINUTES,
    }),
  });

  await writeAuditLog({ actorId: user.id, action: "password.reset_requested", entityType: "User", entityId: user.id, req });
}

/** Consumes a reset token and sets the new password, ending all existing sessions. */
export async function resetPassword(token: string, newPassword: string, req: Request): Promise<void> {
  const record = await prisma.passwordResetToken.findUnique({
    where: { tokenHash: hashToken(token) },
    select: { id: true, userId: true, usedAt: true, expiresAt: true },
  });

  if (!record || record.usedAt || record.expiresAt <= new Date()) {
    throw new AppError(400, "INVALID_RESET_TOKEN", "This reset link is invalid or has expired. Please request a new one.");
  }

  const policy = validatePasswordPolicy(newPassword);
  if (!policy.valid) {
    throw new AppError(400, "WEAK_PASSWORD", policy.errors.join(" "), { warnings: policy.warnings });
  }

  const passwordHash = await hashPassword(newPassword);
  const now = new Date();

  await prisma.$transaction([
    prisma.user.update({ where: { id: record.userId }, data: { passwordHash } }),
    prisma.passwordResetToken.update({ where: { id: record.id }, data: { usedAt: now } }),
    // A reset must log out anyone already holding a session for this account.
    prisma.session.updateMany({ where: { userId: record.userId, revokedAt: null }, data: { revokedAt: now } }),
    prisma.refreshToken.updateMany({ where: { userId: record.userId, revokedAt: null }, data: { revokedAt: now } }),
  ]);

  await writeAuditLog({ actorId: record.userId, action: "password.reset", entityType: "User", entityId: record.userId, req });
}
