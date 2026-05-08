import "server-only";

import { createHash, randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import type { AdminPermission, AdminUserRecord, AdminUserRole } from "../_types/admin";

type StoredAdminUser = AdminUserRecord & {
  passwordHash: string;
};

export type AdminCredentialUser = {
  username: string;
  role: AdminUserRole;
  permissions: AdminPermission[];
};

const USERS_STORE_PATH = path.join(process.cwd(), "src", "app", "admin", "_data", "admin-users.local.json");

export const ALL_ADMIN_PERMISSIONS: AdminPermission[] = [
  "dashboard:read",
  "pages:read",
  "pages:write",
  "pages:publish",
  "generator:use",
  "tutors:write",
  "locations:write",
  "seo:write",
  "assets:write",
  "imports:write",
  "settings:write",
  "users:manage",
];

export const ROLE_PERMISSIONS: Record<AdminUserRole, AdminPermission[]> = {
  owner: ALL_ADMIN_PERMISSIONS,
  admin: ALL_ADMIN_PERMISSIONS.filter((permission) => permission !== "settings:write"),
  editor: ["dashboard:read", "pages:read", "pages:write", "generator:use", "tutors:write", "locations:write", "seo:write", "assets:write"],
  viewer: ["dashboard:read", "pages:read"],
};

export function getAdminUsers(): AdminUserRecord[] {
  return [getEnvironmentAdminUser(), ...readStoredUsers().map(stripPasswordHash)];
}

export function canManageUsers(user: Pick<AdminCredentialUser, "role" | "permissions">): boolean {
  return user.role === "owner" || user.permissions.includes("users:manage");
}

export function createAdminUser(input: {
  name: string;
  email: string;
  username: string;
  password: string;
  role: Exclude<AdminUserRole, "owner">;
  permissions?: AdminPermission[];
  status?: "active" | "disabled";
}): AdminUserRecord {
  const storedUsers = readStoredUsers();
  const normalizedUsername = input.username.trim().toLowerCase();
  const normalizedEmail = input.email.trim().toLowerCase();

  if (normalizedUsername === getEnvironmentAdminUsername().toLowerCase() || storedUsers.some((user) => user.username.toLowerCase() === normalizedUsername)) {
    throw new Error("A user with this username already exists.");
  }
  if (storedUsers.some((user) => user.email.toLowerCase() === normalizedEmail)) {
    throw new Error("A user with this email already exists.");
  }

  const now = new Date().toISOString();
  const user: StoredAdminUser = {
    id: randomUUID(),
    username: normalizedUsername,
    name: input.name.trim(),
    email: normalizedEmail,
    role: input.role,
    permissions: normalizePermissions(input.role, input.permissions),
    status: input.status ?? "active",
    source: "local",
    passwordHash: hashPassword(input.password),
    createdAt: now,
    updatedAt: now,
  };

  writeStoredUsers([...storedUsers, user]);
  return stripPasswordHash(user);
}

export function updateAdminUser(input: {
  id: string;
  name?: string;
  role?: Exclude<AdminUserRole, "owner">;
  permissions?: AdminPermission[];
  status?: "active" | "disabled";
}): AdminUserRecord {
  const storedUsers = readStoredUsers();
  const existing = storedUsers.find((user) => user.id === input.id);
  if (!existing) throw new Error("User not found.");

  const nextRole = input.role ?? existing.role;
  const nextUser: StoredAdminUser = {
    ...existing,
    name: input.name?.trim() || existing.name,
    role: nextRole,
    permissions: normalizePermissions(nextRole, input.permissions ?? existing.permissions),
    status: input.status ?? existing.status,
    updatedAt: new Date().toISOString(),
  };

  writeStoredUsers(storedUsers.map((user) => (user.id === input.id ? nextUser : user)));
  return stripPasswordHash(nextUser);
}

export function deleteAdminUser(id: string): void {
  const storedUsers = readStoredUsers();
  if (!storedUsers.some((user) => user.id === id)) throw new Error("User not found.");
  writeStoredUsers(storedUsers.filter((user) => user.id !== id));
}

export function verifyLocalAdminUser(username: string, password: string): AdminCredentialUser | null {
  const normalizedUsername = username.trim().toLowerCase();
  const user = readStoredUsers().find((item) => item.username.toLowerCase() === normalizedUsername || item.email.toLowerCase() === normalizedUsername);
  if (!user || user.status !== "active") return null;
  if (user.passwordHash !== hashPassword(password)) return null;
  return {
    username: user.username,
    role: user.role,
    permissions: user.permissions,
  };
}

export function getEnvironmentAdminUser(): AdminUserRecord {
  const now = new Date().toISOString();
  const username = getEnvironmentAdminUsername();
  return {
    id: "env-owner",
    username,
    name: "Primary Admin",
    email: username.includes("@") ? username : "",
    role: "owner",
    permissions: ROLE_PERMISSIONS.owner,
    status: "active",
    source: "environment",
    createdAt: now,
    updatedAt: now,
  };
}

function getEnvironmentAdminUsername(): string {
  return process.env.ADMIN_USERNAME?.trim() || "ADMIN_USERNAME";
}

function normalizePermissions(role: AdminUserRole, permissions?: AdminPermission[]): AdminPermission[] {
  const fallback = ROLE_PERMISSIONS[role];
  const allowed = new Set(ALL_ADMIN_PERMISSIONS);
  const next = permissions?.length ? permissions : fallback;
  return [...new Set(next.filter((permission) => allowed.has(permission)))];
}

function readStoredUsers(): StoredAdminUser[] {
  if (!existsSync(USERS_STORE_PATH)) return [];
  try {
    const parsed = JSON.parse(readFileSync(USERS_STORE_PATH, "utf8"));
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isStoredUser);
  } catch {
    return [];
  }
}

function writeStoredUsers(users: StoredAdminUser[]) {
  mkdirSync(path.dirname(USERS_STORE_PATH), { recursive: true });
  writeFileSync(USERS_STORE_PATH, `${JSON.stringify(users, null, 2)}\n`, "utf8");
}

function stripPasswordHash(user: StoredAdminUser): AdminUserRecord {
  return {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    role: user.role,
    permissions: user.permissions,
    status: user.status,
    source: user.source,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    lastLoginAt: user.lastLoginAt,
  };
}

function hashPassword(password: string): string {
  return `sha256:${createHash("sha256").update(password).digest("hex")}`;
}

function isStoredUser(value: unknown): value is StoredAdminUser {
  const user = value as Partial<StoredAdminUser>;
  return Boolean(user?.id && user.username && user.email && user.passwordHash && user.role && Array.isArray(user.permissions));
}
