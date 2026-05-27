import { z } from "zod";

export const loginValidator = z.object({
  usernameOrEmail: z.string().trim().min(3).max(255),
  password: z.string().min(8).max(256),
});

export const createUserValidator = z.object({
  email: z.email(),
  username: z.string().trim().min(3).max(64).regex(/^[a-zA-Z0-9._-]+$/),
  password: z.string().min(10).max(256),
  firstName: z.string().trim().max(80).optional(),
  lastName: z.string().trim().max(80).optional(),
  roleNames: z.array(z.string()).min(1).optional(),
});

export const refreshTokenValidator = z.object({
  refreshToken: z.string().min(32),
});

export const changePasswordValidator = z.object({
  currentPassword: z.string().min(1).max(256),
  newPassword: z.string().min(10).max(256),
});

export const requestPasswordResetValidator = z.object({
  usernameOrEmail: z.string().trim().min(3).max(255),
});

export const resetPasswordValidator = z.object({
  token: z.string().min(32),
  newPassword: z.string().min(10).max(256),
});

export const updateUserValidator = z.object({
  email: z.email().optional(),
  username: z.string().trim().min(3).max(64).regex(/^[a-zA-Z0-9._-]+$/).optional(),
  firstName: z.string().trim().max(80).nullable().optional(),
  lastName: z.string().trim().max(80).nullable().optional(),
  avatarUrl: z.url().nullable().optional(),
});

export const updateUserStatusValidator = z.object({
  status: z.enum(["active", "invited", "suspended", "deleted"]),
});

export const assignUserRoleValidator = z.object({
  roleId: z.string().min(1),
});
