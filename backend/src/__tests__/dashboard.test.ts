// @vitest-environment node
import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { hashPassword } from "@ibgram/authentication";
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
  roles: Array<{ role: { id: string; name: string; description: string | null; permissions: Array<{ permission: { name: string } }> } }>;
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
    AUTH_RATE_LIMIT_MAX: "50",
  });
}

async function buildFakePrisma(options: { withData: boolean }) {
  const now = new Date();
  const adminPasswordHash = await hashPassword("ValidPass123!");
  const sessions: Array<{ id: string; userId: string; tokenHash: string; expiresAt: Date; revokedAt: Date | null; createdAt: Date; updatedAt: Date }> = [];
  const auditLogs: Array<Record<string, unknown>> = options.withData
    ? [
        { id: "log-1", action: "login.success", entityType: "User", entityId: "user_admin", actor: { id: "user_admin", username: "admin" }, createdAt: new Date(now.getTime() - 1000) },
        { id: "log-2", action: "page.updated", entityType: "GeneratedPage", entityId: "page-1", actor: { id: "user_admin", username: "admin" }, createdAt: new Date(now.getTime() - 2000) },
      ]
    : [];

  const superAdminRole = {
    id: "role_super_admin",
    name: "super_admin",
    description: null,
    permissions: PERMISSIONS.map((permission) => ({ permission: { name: permission } })),
  };
  const users: FakeUser[] = [
    {
      id: "user_admin",
      email: "admin@ibgram.local",
      username: "admin",
      passwordHash: adminPasswordHash,
      firstName: "Admin",
      lastName: null,
      avatarUrl: null,
      status: "active",
      lastLoginAt: null,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      roles: [{ role: superAdminRole }],
    },
  ];

  const generatedPagesData = options.withData
    ? [
        { id: "page-1", title: "Gurugram IB Tutors", fullPath: "/ib-tutors/gurugram/", status: "published", pageType: "city", indexFlag: "index", sitemapIncluded: true, qualityScore: 80, metaTitle: "x", metaDescription: "x", h1: "x", canonicalUrl: "/x", updatedAt: new Date() },
        { id: "page-2", title: "Sector 56 Tutors", fullPath: "/ib-tutors/gurugram/sectors/sector-56/", status: "draft", pageType: "sector", indexFlag: "auto", sitemapIncluded: false, qualityScore: 60, metaTitle: null, metaDescription: null, h1: null, canonicalUrl: null, updatedAt: new Date() },
      ]
    : [];

  const tutorsData = options.withData
    ? [
        { id: "tutor-1", status: "active", verified: true, deletedAt: null, locations: [{ id: "loc-1" }] },
        { id: "tutor-2", status: "active", verified: false, deletedAt: null, locations: [] },
      ]
    : [];

  const internalLinksData = options.withData
    ? [
        { id: "link-1", targetPageId: "page-1" },
        { id: "link-2", targetPageId: null },
      ]
    : [];

  function countWhere<T>(rows: T[], match: (row: T) => boolean) {
    return Promise.resolve(rows.filter(match).length);
  }

  const fakePrisma = {
    user: {
      findFirst: vi.fn(async ({ where }: { where: Record<string, unknown> }) => {
        if (where.id) return users.find((u) => u.id === where.id && !u.deletedAt) ?? null;
        const or = (where.OR ?? []) as Array<{ email?: string; username?: string }>;
        const email = or.find((o) => o.email)?.email;
        const username = or.find((o) => o.username)?.username;
        return users.find((u) => !u.deletedAt && (u.email === email || u.username === username)) ?? null;
      }),
      findUnique: vi.fn(async ({ where }: { where: { id: string } }) => users.find((u) => u.id === where.id) ?? null),
      update: vi.fn(async ({ where, data }: { where: { id: string }; data: Partial<FakeUser> }) => {
        const u = users.find((x) => x.id === where.id);
        Object.assign(u!, data, { updatedAt: new Date() });
        return u!;
      }),
      count: vi.fn(async ({ where }: { where?: { status?: string } } = {}) => {
        if (!where) return users.filter((u) => !u.deletedAt).length;
        if (where.status) return users.filter((u) => !u.deletedAt && u.status === where.status).length;
        return users.filter((u) => !u.deletedAt).length;
      }),
    },
    session: {
      create: vi.fn(async ({ data }: { data: { userId: string; tokenHash: string; expiresAt: Date } }) => {
        const session = { id: `session_${sessions.length + 1}`, userId: data.userId, tokenHash: data.tokenHash, expiresAt: data.expiresAt, revokedAt: null, createdAt: new Date(), updatedAt: new Date() };
        sessions.push(session);
        return session;
      }),
      findUnique: vi.fn(async ({ where }: { where: { tokenHash: string } }) => {
        const s = sessions.find((x) => x.tokenHash === where.tokenHash);
        if (!s) return null;
        const u = users.find((x) => x.id === s.userId);
        return u ? { ...s, user: u } : null;
      }),
      update: vi.fn(),
    },
    loginAttempt: { create: vi.fn(async () => ({})) },
    auditLog: {
      create: vi.fn(async ({ data }: { data: Record<string, unknown> }) => {
        const log = { id: `audit_${auditLogs.length + 1}`, ...data };
        auditLogs.push(log);
        return log;
      }),
      findMany: vi.fn(async () => auditLogs.slice(0, 10)),
      count: vi.fn(async () => auditLogs.length),
    },
    generatedPage: {
      count: vi.fn(async ({ where }: { where?: { status?: string; indexFlag?: string; sitemapIncluded?: boolean; OR?: Array<Record<string, unknown>> } } = {}) => {
        if (where?.OR) {
          return generatedPagesData.filter((p) => where.OR!.some((cond) => Object.entries(cond).every(([k, v]) => (p as Record<string, unknown>)[k] === v))).length;
        }
        return countWhere(generatedPagesData, (p) => {
          if (where?.status && p.status !== where.status) return false;
          if (where?.indexFlag && p.indexFlag !== where.indexFlag) return false;
          if (where?.sitemapIncluded !== undefined && p.sitemapIncluded !== where.sitemapIncluded) return false;
          return true;
        });
      }),
      findMany: vi.fn(async () => generatedPagesData.slice(0, 10)),
      groupBy: vi.fn(async () => {
        const counts = new Map<string, number>();
        for (const p of generatedPagesData) counts.set(p.pageType, (counts.get(p.pageType) ?? 0) + 1);
        return Array.from(counts.entries()).map(([pageType, count]) => ({ pageType, _count: { _all: count } }));
      }),
      aggregate: vi.fn(async () => {
        const scored = generatedPagesData.filter((p) => p.qualityScore !== null);
        const avg = scored.length ? scored.reduce((sum, p) => sum + (p.qualityScore ?? 0), 0) / scored.length : null;
        return { _avg: { qualityScore: avg } };
      }),
    },
    tutor: {
      count: vi.fn(async ({ where }: { where?: { status?: string; verified?: boolean } } = {}) =>
        countWhere(tutorsData, (t) => {
          if (where?.status && t.status !== where.status) return false;
          if (where?.verified !== undefined && t.verified !== where.verified) return false;
          return true;
        }),
      ),
      findMany: vi.fn(async () => tutorsData),
    },
    country: { count: vi.fn(async () => (options.withData ? 1 : 0)) },
    state: { count: vi.fn(async () => (options.withData ? 1 : 0)) },
    city: { count: vi.fn(async () => (options.withData ? 1 : 0)) },
    area: { count: vi.fn(async () => (options.withData ? 4 : 0)) },
    sector: { count: vi.fn(async () => (options.withData ? 4 : 0)) },
    society: { count: vi.fn(async () => (options.withData ? 3 : 0)) },
    school: { count: vi.fn(async () => (options.withData ? 3 : 0)) },
    redirectRule: { count: vi.fn(async () => 0) },
    canonicalRule: { count: vi.fn(async () => 0) },
    sitemapEntry: { count: vi.fn(async () => 0) },
    robotsRule: { count: vi.fn(async () => 0) },
    pageInternalLink: {
      count: vi.fn(async ({ where }: { where?: { targetPageId?: null } } = {}) => {
        if (where?.targetPageId === null) return internalLinksData.filter((l) => l.targetPageId === null).length;
        return internalLinksData.length;
      }),
    },
    pageGenerationJob: { findMany: vi.fn(async () => []) },
  };

  return { fakePrisma };
}

async function createMockedApp(options: { withData: boolean } = { withData: true }) {
  vi.resetModules();
  setTestEnv();
  const { fakePrisma } = await buildFakePrisma(options);
  vi.doMock("../lib/prisma", () => ({ prisma: fakePrisma }));
  const { createApp } = await import("../app");
  return { app: createApp() };
}

describe("dashboard summary endpoint", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns 401 without an authenticated session", async () => {
    const { app } = await createMockedApp();
    const response = await request(app).get("/api/dashboard/summary");

    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("AUTHENTICATION_REQUIRED");
  });

  it("returns a fully shaped summary for an authenticated admin", async () => {
    const { app } = await createMockedApp();
    const agent = request.agent(app);

    await agent.post("/api/auth/login").send({ usernameOrEmail: "admin", password: "ValidPass123!" }).expect(200);
    const response = await agent.get("/api/dashboard/summary").expect(200);

    const summary = response.body.data;
    expect(summary).toHaveProperty("pages");
    expect(summary).toHaveProperty("tutors");
    expect(summary).toHaveProperty("locations");
    expect(summary).toHaveProperty("generatedPages");
    expect(summary).toHaveProperty("seo");
    expect(summary).toHaveProperty("internalLinks");
    expect(summary).toHaveProperty("activity");
    expect(summary).toHaveProperty("users");
    expect(summary.pages.total).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(summary.activity.recentAuditLogs)).toBe(true);
  });

  it("returns zeroed counts on an empty database", async () => {
    const { app } = await createMockedApp({ withData: false });
    const agent = request.agent(app);

    await agent.post("/api/auth/login").send({ usernameOrEmail: "admin", password: "ValidPass123!" }).expect(200);
    const response = await agent.get("/api/dashboard/summary").expect(200);
    const summary = response.body.data;

    expect(summary.pages.total).toBe(0);
    expect(summary.tutors.total).toBe(0);
    expect(summary.locations.cities).toBe(0);
    expect(summary.seo.avgSeoScore).toBe(0);
    expect(summary.generatedPages.areaPages).toBe(0);
    expect(summary.internalLinks.total).toBe(0);
    expect(Array.isArray(summary.activity.recentAuditLogs)).toBe(true);
  });

  it("writes audit log on login and exposes it on the dashboard", async () => {
    const { app } = await createMockedApp();
    const agent = request.agent(app);

    await agent.post("/api/auth/login").send({ usernameOrEmail: "admin", password: "ValidPass123!" }).expect(200);
    const response = await agent.get("/api/dashboard/summary").expect(200);
    const actions = response.body.data.activity.recentAuditLogs.map((log: { action: string }) => log.action);

    expect(actions).toContain("login.success");
  });
});
