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

function getClientIp(req: Request): string | undefined {
  return req.ip || req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim();
}

function getUserAgent(req: Request): string | undefined {
  return req.headers["user-agent"];
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
