import type { PermissionName, RoleName, UserStatus } from "@ibgram/shared";

export type SafeAuthUser = {
  id: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatarUrl: string | null;
  status: UserStatus;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  roles: RoleName[];
  permissions: PermissionName[];
};

export type AuthResult = {
  user: SafeAuthUser;
  sessionId?: string;
};
