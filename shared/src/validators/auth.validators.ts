import { z } from "zod";

export const loginValidator = z.object({
  usernameOrEmail: z.string().trim().min(3).max(255),
  password: z.string().min(8).max(256),
});

export const publicRegisterValidator = z.object({
  email: z.email(),
  password: z.string().min(10).max(256),
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().max(80).optional().default(""),
  role: z.enum(["student", "tutor"]).default("student"),
  /**
   * Honeypot. The signup form renders this hidden and leaves it empty; a human never fills it
   * in, so any value means a script that filled every input it could find. Named "company"
   * rather than anything obvious because bots skip fields called "honeypot".
   *
   * Same trick the contact form already uses. It costs nothing and catches the naive majority;
   * the rate limit and captcha handle the rest.
   */
  company: z.string().max(200).optional().default(""),
  /** Cloudflare Turnstile token, verified server-side when TURNSTILE_SECRET_KEY is configured. */
  captchaToken: z.string().max(4096).optional().default(""),
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
