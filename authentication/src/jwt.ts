import jwt, { type SignOptions } from "jsonwebtoken";
import type { AuthTokenPayload } from "./auth.types";

export function signAccessToken(payload: AuthTokenPayload, secret: string, expiresIn: string): string {
  return jwt.sign(payload, secret, {
    expiresIn,
    audience: "ibgram-admin",
    issuer: "ibgram-backend",
  } as SignOptions);
}

export function verifyAccessToken(token: string, secret: string): AuthTokenPayload {
  return jwt.verify(token, secret, {
    audience: "ibgram-admin",
    issuer: "ibgram-backend",
  }) as AuthTokenPayload;
}

export function signRefreshJwt(payload: Pick<AuthTokenPayload, "sub" | "sessionId">, secret: string, expiresIn: string): string {
  return jwt.sign(payload, secret, {
    expiresIn,
    audience: "ibgram-admin-refresh",
    issuer: "ibgram-backend",
  } as SignOptions);
}

export function verifyRefreshJwt(token: string, secret: string): Pick<AuthTokenPayload, "sub" | "sessionId"> {
  return jwt.verify(token, secret, {
    audience: "ibgram-admin-refresh",
    issuer: "ibgram-backend",
  }) as Pick<AuthTokenPayload, "sub" | "sessionId">;
}
