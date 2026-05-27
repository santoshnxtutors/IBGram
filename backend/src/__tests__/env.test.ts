// @vitest-environment node
import { describe, expect, it } from "vitest";
import { parseEnv } from "../config/env";

const validEnv = {
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
};

describe("backend env validation", () => {
  it("parses a valid backend environment", () => {
    expect(parseEnv(validEnv).BACKEND_PORT).toBe(4000);
    expect(parseEnv(validEnv).COOKIE_SECURE).toBe(false);
  });

  it("rejects missing required values", () => {
    const withoutDatabaseUrl: Partial<typeof validEnv> = { ...validEnv };
    delete withoutDatabaseUrl.DATABASE_URL;
    expect(() => parseEnv(withoutDatabaseUrl)).toThrow(/DATABASE_URL/);
  });
});
