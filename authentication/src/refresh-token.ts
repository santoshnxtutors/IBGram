import { createOpaqueToken, hashToken } from "./session";

export type RefreshTokenPair = {
  token: string;
  tokenHash: string;
  expiresAt: Date;
};

export function createRefreshToken(ttlMs: number): RefreshTokenPair {
  const token = createOpaqueToken(48);
  return {
    token,
    tokenHash: hashToken(token),
    expiresAt: new Date(Date.now() + ttlMs),
  };
}

export function isRefreshTokenExpired(expiresAt: Date): boolean {
  return expiresAt.getTime() <= Date.now();
}
