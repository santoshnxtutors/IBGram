import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { SessionCookieOptions } from "./auth.types";

export const SESSION_COOKIE_NAME = "ibgram_session";
export const REFRESH_COOKIE_NAME = "ibgram_refresh";

export function createOpaqueToken(byteLength = 32): string {
  return randomBytes(byteLength).toString("base64url");
}

export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function safeCompareTokenHash(token: string, expectedHash: string): boolean {
  const tokenHash = hashToken(token);
  const tokenHashBuffer = Buffer.from(tokenHash, "hex");
  const expectedHashBuffer = Buffer.from(expectedHash, "hex");

  if (tokenHashBuffer.length !== expectedHashBuffer.length) return false;
  return timingSafeEqual(tokenHashBuffer, expectedHashBuffer);
}

export function parseTtlToMs(value: string): number {
  const match = value.trim().match(/^(\d+)(ms|s|m|h|d)$/);
  if (!match) throw new Error(`Invalid TTL value: ${value}`);

  const amount = Number(match[1]);
  const unit = match[2];
  const multipliers: Record<string, number> = {
    ms: 1,
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };

  return amount * multipliers[unit];
}

export function buildHttpOnlyCookieOptions(options: SessionCookieOptions) {
  return {
    httpOnly: true,
    secure: options.secure,
    sameSite: options.sameSite ?? "lax",
    domain: options.domain || undefined,
    maxAge: options.maxAgeMs,
    path: "/",
  } as const;
}
