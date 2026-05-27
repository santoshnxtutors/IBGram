import type { RequestHandler } from "express";
import { ROLE_PERMISSION_MAP, type PermissionName, type RoleName } from "@ibgram/shared";
import type { AuthContext } from "./auth.types";

export function expandRolePermissions(roles: readonly RoleName[]): PermissionName[] {
  return Array.from(new Set(roles.flatMap((role) => ROLE_PERMISSION_MAP[role] ?? [])));
}

export function hasPermission(subject: Pick<AuthContext, "permissions">, permission: PermissionName): boolean {
  return subject.permissions.includes(permission);
}

export function hasAnyPermission(subject: Pick<AuthContext, "permissions">, permissions: readonly PermissionName[]): boolean {
  return permissions.some((permission) => hasPermission(subject, permission));
}

export function hasAllPermissions(subject: Pick<AuthContext, "permissions">, permissions: readonly PermissionName[]): boolean {
  return permissions.every((permission) => hasPermission(subject, permission));
}

export function hasRole(subject: Pick<AuthContext, "roles">, role: RoleName): boolean {
  return subject.roles.includes(role);
}

function unauthorized(requestId = "") {
  return {
    success: false,
    data: null,
    error: { code: "AUTHENTICATION_REQUIRED", message: "Authentication required." },
    requestId,
  };
}

function forbidden(requestId = "") {
  return {
    success: false,
    data: null,
    error: { code: "FORBIDDEN", message: "Insufficient permissions." },
    requestId,
  };
}

export function requireAuth(): RequestHandler {
  return (req, res, next) => {
    if (!req.auth) {
      res.status(401).json(unauthorized(req.requestId ?? ""));
      return;
    }

    next();
  };
}

export function requirePermission(permission: PermissionName): RequestHandler {
  return (req, res, next) => {
    if (!req.auth) {
      res.status(401).json(unauthorized(req.requestId ?? ""));
      return;
    }

    if (!hasPermission(req.auth, permission)) {
      res.status(403).json(forbidden(req.requestId ?? ""));
      return;
    }

    next();
  };
}

export function requireAnyPermission(permissions: readonly PermissionName[]): RequestHandler {
  return (req, res, next) => {
    if (!req.auth) {
      res.status(401).json(unauthorized(req.requestId ?? ""));
      return;
    }

    if (!hasAnyPermission(req.auth, permissions)) {
      res.status(403).json(forbidden(req.requestId ?? ""));
      return;
    }

    next();
  };
}

export function requireRole(role: RoleName): RequestHandler {
  return (req, res, next) => {
    if (!req.auth) {
      res.status(401).json(unauthorized(req.requestId ?? ""));
      return;
    }

    if (!hasRole(req.auth, role)) {
      res.status(403).json(forbidden(req.requestId ?? ""));
      return;
    }

    next();
  };
}

export type PermissionLoader = (userId: string) => Promise<PermissionName[]>;

export async function getUserPermissions(userId: string, loader: PermissionLoader): Promise<PermissionName[]> {
  return loader(userId);
}

export async function userHasPermission(userId: string, permission: PermissionName, loader: PermissionLoader): Promise<boolean> {
  const permissions = await getUserPermissions(userId, loader);
  return permissions.includes(permission);
}

export { userHasPermission as hasUserPermission };

export function canAccessPage(user: Pick<AuthContext, "permissions">, action: "read" | "create" | "update" | "delete" | "publish" | "archive"): boolean {
  return hasPermission(user, `pages.${action}` as PermissionName);
}

export function canManageTutor(user: Pick<AuthContext, "permissions">, action: "read" | "create" | "update" | "delete"): boolean {
  return hasPermission(user, `tutors.${action}` as PermissionName);
}

export function canPublishPage(user: Pick<AuthContext, "permissions">): boolean {
  return hasPermission(user, "pages.publish");
}
