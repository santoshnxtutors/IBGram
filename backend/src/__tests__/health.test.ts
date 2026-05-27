// @vitest-environment node
import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";

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
    ACCESS_TOKEN_TTL: "15m",
    REFRESH_TOKEN_TTL: "30d",
    COOKIE_DOMAIN: "",
    COOKIE_SECURE: "false",
    ADMIN_EMAIL: "admin@ibgram.local",
    ADMIN_USERNAME: "admin",
    ADMIN_PASSWORD: "ChangeThisPassword1!",
    UPLOAD_PROVIDER: "local",
    LOG_LEVEL: "silent",
  });
}

describe("health routes", () => {
  beforeEach(() => {
    vi.resetModules();
    setTestEnv();
  });

  it("returns root health response", async () => {
    const { createApp } = await import("../app");
    const response = await request(createApp()).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data.status).toBe("ok");
    expect(response.body.requestId).toEqual(expect.any(String));
  });

  it("returns API health and version responses", async () => {
    const { createApp } = await import("../app");
    const app = createApp();

    await request(app).get("/api/health").expect(200);
    const versionResponse = await request(app).get("/api/version").expect(200);

    expect(versionResponse.body.data.name).toBe("ibgram-backend");
  });
});
