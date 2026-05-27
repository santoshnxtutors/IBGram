import type { PermissionName } from "../constants/permissions";
import type { RoleName } from "../constants/roles";

export type UserStatus = "active" | "invited" | "suspended" | "deleted";

export type AuthUser = {
  id: string;
  email: string;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
  status: UserStatus;
  roles: RoleName[];
  permissions: PermissionName[];
};

export type SessionPrincipal = {
  userId: string;
  sessionId?: string;
  roles: RoleName[];
  permissions: PermissionName[];
};
