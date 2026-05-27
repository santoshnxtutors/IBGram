import type { RequestHandler } from "express";
import { buildHttpOnlyCookieOptions, REFRESH_COOKIE_NAME, SESSION_COOKIE_NAME } from "./session";
import type { SessionCookieOptions } from "./auth.types";

export function attachSessionCookies(
  accessToken: string,
  refreshToken: string,
  options: SessionCookieOptions,
): RequestHandler {
  return (_req, res, next) => {
    res.cookie(SESSION_COOKIE_NAME, accessToken, buildHttpOnlyCookieOptions(options));
    res.cookie(REFRESH_COOKIE_NAME, refreshToken, buildHttpOnlyCookieOptions(options));
    next();
  };
}

export function clearSessionCookies(options: Pick<SessionCookieOptions, "domain" | "secure" | "sameSite">): RequestHandler {
  return (_req, res, next) => {
    const cookieOptions = buildHttpOnlyCookieOptions({
      domain: options.domain,
      secure: options.secure,
      sameSite: options.sameSite,
      maxAgeMs: 0,
    });
    res.clearCookie(SESSION_COOKIE_NAME, cookieOptions);
    res.clearCookie(REFRESH_COOKIE_NAME, cookieOptions);
    next();
  };
}
