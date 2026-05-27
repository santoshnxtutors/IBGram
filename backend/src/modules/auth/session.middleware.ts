import type { RequestHandler } from "express";
import { SESSION_COOKIE_NAME } from "@ibgram/authentication";
import { resolveSession } from "./auth.service";

export const sessionAuthMiddleware: RequestHandler = async (req, _res, next) => {
  try {
    const token = req.cookies?.[SESSION_COOKIE_NAME] as string | undefined;
    const result = await resolveSession(token);

    if (result) {
      req.auth = {
        userId: result.user.id,
        sessionId: result.sessionId,
        email: result.user.email,
        username: result.user.username,
        status: result.user.status,
        roles: result.user.roles,
        permissions: result.user.permissions,
      };
    }

    next();
  } catch (error) {
    next(error);
  }
};
