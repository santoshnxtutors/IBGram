// @vitest-environment node
import express from "express";
import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { hashPassword, hashToken, requireAuth, requirePermission, SESSION_COOKIE_NAME } from "@ibgram/authentication";
import { PERMISSIONS } from "../../../shared/src";

type FakeUser = {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  status: "active" | "suspended";
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  roles: Array<{
    role: {
      id: string;
      name: string;
      description: string | null;
      permissions: Array<{ permission: { name: string } }>;
    };
  }>;
};

function setTestEnv() {
  Object.assign(process.env, {
    NODE_ENV: "test",
    BACKEND_PORT: "4000",
    BACKEND_URL: "http://localhost:4000",
    CORS_ORIGIN: "http://localhost:3000",
    DATABASE_URL: "postgresql://postgres:postgres@localhost:5432/ibgram?schema=public",
    AUTH_SESSION_SECRET: "test-session-secret-with-length",
    JWT_ACCESS_SECRET: "test-access-secret-with-length",
    JWT_REFRESH_SECRET: "test-refresh-secret-with-length",
    SESSION_TTL: "8h",
    ACCESS_TOKEN_TTL: "15m",
    REFRESH_TOKEN_TTL: "30d",
    COOKIE_DOMAIN: "",
    COOKIE_SECURE: "false",
    ADMIN_EMAIL: "admin@ibgram.local",
    ADMIN_USERNAME: "admin",
    ADMIN_PASSWORD: "ChangeThisPassword1!",
    UPLOAD_PROVIDER: "local",
    LOG_LEVEL: "silent",
    AUTH_RATE_LIMIT_WINDOW_MS: "60000",
    AUTH_RATE_LIMIT_MAX: "2",
  });
}

async function buildFakePrisma() {
  const now = new Date();
  const adminPasswordHash = await hashPassword("ValidPass123!");
  const suspendedPasswordHash = await hashPassword("ValidPass123!");
  const sessions: Array<{
    id: string;
    userId: string;
    tokenHash: string;
    ipAddress?: string;
    userAgent?: string;
    expiresAt: Date;
    revokedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
  }> = [];
  const loginAttempts: unknown[] = [];
  const auditLogs: Array<Record<string, unknown>> = [];

  const superAdminRole = {
    id: "role_super_admin",
    name: "super_admin",
    description: null,
    permissions: PERMISSIONS.map((permission) => ({ permission: { name: permission } })),
  };
  const viewerRole = {
    id: "role_viewer",
    name: "viewer",
    description: null,
    permissions: PERMISSIONS.filter((permission) => permission.endsWith(".read")).map((permission) => ({ permission: { name: permission } })),
  };
  const users: FakeUser[] = [
    {
      id: "user_admin",
      email: "admin@ibgram.local",
      username: "admin",
      passwordHash: adminPasswordHash,
      firstName: "Admin",
      lastName: "User",
      avatarUrl: null,
      status: "active",
      lastLoginAt: null,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      roles: [{ role: superAdminRole }],
    },
    {
      id: "user_suspended",
      email: "suspended@ibgram.local",
      username: "suspended",
      passwordHash: suspendedPasswordHash,
      firstName: "Suspended",
      lastName: "User",
      avatarUrl: null,
      status: "suspended",
      lastLoginAt: null,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      roles: [{ role: viewerRole }],
    },
  ];

  const fakePrisma = {
    user: {
      findFirst: vi.fn(async ({ where }: { where: { id?: string; OR?: Array<{ email?: string; username?: string }> } }) => {
        if (where.id) return users.find((user) => user.id === where.id && !user.deletedAt) ?? null;
        const email = where.OR?.find((item) => item.email)?.email;
        const username = where.OR?.find((item) => item.username)?.username;
        return users.find((user) => !user.deletedAt && (user.email === email || user.username === username)) ?? null;
      }),
      findUnique: vi.fn(async ({ where }: { where: { id: string } }) => users.find((user) => user.id === where.id) ?? null),
      update: vi.fn(async ({ where, data }: { where: { id: string }; data: Partial<FakeUser> }) => {
        const user = users.find((item) => item.id === where.id);
        if (!user) throw new Error("User not found");
        Object.assign(user, data, { updatedAt: new Date() });
        return user;
      }),
    },
    session: {
      create: vi.fn(async ({ data }: { data: { userId: string; tokenHash: string; expiresAt: Date; ipAddress?: string; userAgent?: string } }) => {
        const session = {
          id: `session_${sessions.length + 1}`,
          userId: data.userId,
          tokenHash: data.tokenHash,
          ipAddress: data.ipAddress,
          userAgent: data.userAgent,
          expiresAt: data.expiresAt,
          revokedAt: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        sessions.push(session);
        return session;
      }),
      findUnique: vi.fn(async ({ where }: { where: { tokenHash: string } }) => {
        const session = sessions.find((item) => item.tokenHash === where.tokenHash);
        if (!session) return null;
        const user = users.find((item) => item.id === session.userId);
        return user ? { ...session, user } : null;
      }),
      update: vi.fn(async ({ where, data }: { where: { id: string }; data: { revokedAt?: Date } }) => {
        const session = sessions.find((item) => item.id === where.id);
        if (!session) throw new Error("Session not found");
        Object.assign(session, data, { updatedAt: new Date() });
        return session;
      }),
    },
    loginAttempt: {
      create: vi.fn(async ({ data }: { data: unknown }) => {
        loginAttempts.push(data);
        return data;
      }),
    },
    auditLog: {
      create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
        auditLogs.push(data);
        return { id: `audit_${auditLogs.length}`, ...data };
      }),
    },
  };

  return { fakePrisma, sessions, auditLogs };
}

async function createMockedApp() {
  vi.resetModules();
  setTestEnv();
  const store = await buildFakePrisma();
  vi.doMock("../lib/prisma", () => ({ prisma: store.fakePrisma }));
  const { createApp } = await import("../app");
  return { app: createApp(), ...store };
}

describe("auth endpoints", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("logs in active users and creates an HTTP-only session cookie", async () => {
    const { app, sessions, auditLogs } = await createMockedApp();
    const response = await request(app).post("/api/auth/login").send({ usernameOrEmail: "admin", password: "ValidPass123!" });

    expect(response.status).toBe(200);
    expect(response.body.data.user.email).toBe("admin@ibgram.local");
    expect(response.body.data.user.passwordHash).toBeUndefined();
    expect(response.headers["set-cookie"]?.[0]).toContain(`${SESSION_COOKIE_NAME}=`);
    expect(response.headers["set-cookie"]?.[0]).toContain("HttpOnly");
    expect(sessions).toHaveLength(1);
    expect(sessions[0].tokenHash).toHaveLength(64);
    expect(auditLogs.some((log) => log.action === "login.success")).toBe(true);
  });

  it("rejects invalid passwords without revealing account existence", async () => {
    const { app, auditLogs } = await createMockedApp();
    const response = await request(app).post("/api/auth/login").send({ usernameOrEmail: "admin", password: "wrong-password" });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("INVALID_CREDENTIALS");
    expect(auditLogs.some((log) => log.action === "login.failure")).toBe(true);
  });

  it("rejects suspended users", async () => {
    const { app } = await createMockedApp();
    const response = await request(app).post("/api/auth/login").send({ usernameOrEmail: "suspended", password: "ValidPass123!" });

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("INVALID_CREDENTIALS");
  });

  it("returns /api/auth/me for authenticated sessions", async () => {
    const { app } = await createMockedApp();
    const agent = request.agent(app);

    await agent.post("/api/auth/login").send({ usernameOrEmail: "admin", password: "ValidPass123!" }).expect(200);
    const response = await agent.get("/api/auth/me").expect(200);

    expect(response.body.data.user.userId).toBe("user_admin");
    expect(response.body.data.user.permissions).toContain("pages.publish");
  });

  it("returns 401 from /api/auth/me without a session", async () => {
    const { app } = await createMockedApp();
    const response = await request(app).get("/api/auth/me");

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("AUTHENTICATION_REQUIRED");
  });

  it("logout revokes the active session and writes audit", async () => {
    const { app, sessions, auditLogs } = await createMockedApp();
    const agent = request.agent(app);

    await agent.post("/api/auth/login").send({ usernameOrEmail: "admin", password: "ValidPass123!" }).expect(200);
    await agent.post("/api/auth/logout").expect(200);

    expect(sessions[0].revokedAt).toBeInstanceOf(Date);
    expect(auditLogs.some((log) => log.action === "logout")).toBe(true);
    await agent.get("/api/auth/me").expect(401);
  });

  it("rejects expired sessions", async () => {
    const { app, sessions } = await createMockedApp();
    const token = "expired-token";
    sessions.push({
      id: "expired_session",
      userId: "user_admin",
      tokenHash: hashToken(token),
      expiresAt: new Date(Date.now() - 1000),
      revokedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await request(app).get("/api/auth/me").set("Cookie", [`${SESSION_COOKIE_NAME}=${token}`]).expect(401);
  });

  it("rate-limits repeated login failures", async () => {
    const { app } = await createMockedApp();

    await request(app).post("/api/auth/login").send({ usernameOrEmail: "admin", password: "wrong-password" }).expect(401);
    await request(app).post("/api/auth/login").send({ usernameOrEmail: "admin", password: "wrong-password" }).expect(401);
    await request(app).post("/api/auth/login").send({ usernameOrEmail: "admin", password: "wrong-password" }).expect(429);
  });
});

describe("auth middleware", () => {
  it("requireAuth blocks unauthenticated requests", async () => {
    const app = express();
    app.get("/protected", requireAuth(), (_req, res) => res.json({ ok: true }));

    await request(app).get("/protected").expect(401);
  });

  it("requirePermission allows matching permissions", async () => {
    const app = express();
    app.use((req, _res, next) => {
      req.auth = {
        userId: "user_admin",
        roles: ["super_admin"],
        permissions: [...PERMISSIONS],
      };
      next();
    });
    app.get("/publish", requirePermission("pages.publish"), (_req, res) => res.json({ ok: true }));

    await request(app).get("/publish").expect(200);
  });
});
