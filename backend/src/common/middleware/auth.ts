import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserRole } from "@prisma/client";
import { env } from "../../config/env.js";
import { ForbiddenError, UnauthorizedError } from "../errors/app-error.js";

export type AuthUser = {
  userId: string;
  role: UserRole;
};

declare global {
  namespace Express {
    interface Request {
      auth?: AuthUser;
    }
  }
}

export const authenticate: RequestHandler = (req, _res, next) => {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : req.cookies?.accessToken;

  if (!token) {
    return next(new UnauthorizedError("Missing access token"));
  }

  try {
    const payload = jwt.verify(token, env.JWT_ACCESS_SECRET) as AuthUser;
    req.auth = payload;
    next();
  } catch {
    next(new UnauthorizedError("Invalid access token"));
  }
};

export function authorize(roles: UserRole[]): RequestHandler {
  return (req, _res, next) => {
    if (!req.auth) {
      return next(new UnauthorizedError("Missing authenticated user"));
    }

    if (!roles.includes(req.auth.role)) {
      return next(new ForbiddenError("Insufficient permissions"));
    }

    next();
  };
}
