import { UserRole } from "@prisma/client";

export const ADMIN_ROLES = [UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.EDITOR] as const;
export const WRITE_ROLES = [UserRole.SUPER_ADMIN, UserRole.ADMIN] as const;
