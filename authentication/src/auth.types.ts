import type { PermissionName, RoleName, UserStatus } from "@ibgram/shared";

export type AuthTokenPayload = {
  sub: string;
  sessionId?: string;
  roles: RoleName[];
  permissions: PermissionName[];
};

export type AuthContext = {
  userId: string;
  sessionId?: string;
  email?: string;
  username?: string;
  status?: UserStatus;
  roles: RoleName[];
  permissions: PermissionName[];
};

export type SessionCookieOptions = {
  domain?: string;
  secure: boolean;
  maxAgeMs: number;
  sameSite?: "lax" | "strict" | "none";
};

declare global {
  // Express uses namespace augmentation for request-scoped auth context.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      auth?: AuthContext;
      requestId?: string;
    }
  }
}
