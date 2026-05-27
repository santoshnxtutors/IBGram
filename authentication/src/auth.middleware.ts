import type { RequestHandler } from "express";
import type { PermissionName } from "@ibgram/shared";
import { hasAllPermissions, hasAnyPermission, requireAuth as requireAuthMiddleware, requirePermission as requirePermissionMiddleware, requireRole as requireRoleMiddleware } from "./rbac";

function unauthorized(message = "Authentication required.") {
  return {
    success: false,
    data: null,
    error: { code: "AUTHENTICATION_REQUIRED", message },
  };
}

function forbidden(message = "Insufficient permissions.") {
  return {
    success: false,
    data: null,
    error: { code: "FORBIDDEN", message },
  };
}

export function requireAuthenticated(): RequestHandler {
  return requireAuthMiddleware();
}

export const requireAuth = requireAuthMiddleware;
export const requirePermission = requirePermissionMiddleware;
export const requireRole = requireRoleMiddleware;

export function requireAnyPermission(permissions: readonly PermissionName[]): RequestHandler {
  return (req, res, next) => {
    if (!req.auth) {
      res.status(401).json({ ...unauthorized(), requestId: req.requestId ?? "" });
      return;
    }

    if (!hasAnyPermission(req.auth, permissions)) {
      res.status(403).json({ ...forbidden(), requestId: req.requestId ?? "" });
      return;
    }

    next();
  };
}

export function requireAllPermissions(permissions: readonly PermissionName[]): RequestHandler {
  return (req, res, next) => {
    if (!req.auth) {
      res.status(401).json({ ...unauthorized(), requestId: req.requestId ?? "" });
      return;
    }

    if (!hasAllPermissions(req.auth, permissions)) {
      res.status(403).json({ ...forbidden(), requestId: req.requestId ?? "" });
      return;
    }

    next();
  };
}
