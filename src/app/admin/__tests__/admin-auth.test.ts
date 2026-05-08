import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { signSession, verifySessionToken, isAuthConfigured } from "../_lib/admin-auth";

describe("admin auth", () => {
  beforeEach(() => {
    process.env.ADMIN_USERNAME = "admin";
    process.env.ADMIN_PASSWORD = "secret";
    process.env.ADMIN_SESSION_SECRET = "test-secret-with-enough-length";
    process.env.ADMIN_PASSWORD_HASH = "";
  });

  it("creates and verifies a signed session cookie payload", () => {
    const token = signSession({
      username: "admin",
      role: "admin",
      issuedAt: Date.now(),
      expiresAt: Date.now() + 60_000,
    });

    const session = verifySessionToken(token);
    expect(session?.username).toBe("admin");
    expect(session?.role).toBe("admin");
  });

  it("rejects expired or tampered sessions", () => {
    const expired = signSession({
      username: "admin",
      role: "admin",
      issuedAt: Date.now() - 120_000,
      expiresAt: Date.now() - 60_000,
    });

    expect(verifySessionToken(expired)).toBeNull();
    expect(verifySessionToken(`${expired}x`)).toBeNull();
  });

  it("detects required admin environment variables", () => {
    expect(isAuthConfigured()).toBe(true);
  });
});
