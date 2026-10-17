import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { changePassword, getSafeUserById, handleGoogleCallback, hasKnownPassword, login, logout, redirectToGoogle, register, requestPasswordReset, resetPassword, setInitialPassword } from "./auth.service";

export const loginController: RequestHandler = asyncHandler(async (req, res) => {
  const result = await login(req.body, req, res);
  res.json(successResponse({ user: result.user }, req.requestId ?? ""));
});

export const registerController: RequestHandler = asyncHandler(async (req, res) => {
  const result = await register(req.body, req, res);
  res.status(201).json(successResponse({ user: result.user }, req.requestId ?? ""));
});

export const logoutController: RequestHandler = asyncHandler(async (req, res) => {
  await logout(req, res);
  res.json(successResponse({ loggedOut: true }, req.requestId ?? ""));
});

export const meController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await getSafeUserById(req.auth!.userId);
  // passwordSet=false means a Google sign-up who has never chosen a password (students
  // and tutors only). /me gates every dashboard, so this side lookup must never fail it.
  const passwordSet =
    user?.accountType === "student" || user?.accountType === "tutor"
      ? await hasKnownPassword(req.auth!.userId).catch(() => true)
      : true;
  // Merge session-scoped claims (roles/permissions/sessionId) with the full user record.
  res.json(successResponse({ user: { ...req.auth, ...user, id: req.auth!.userId, passwordSet } }, req.requestId ?? ""));
});

export const changePasswordController: RequestHandler = asyncHandler(async (req, res) => {
  await changePassword(req.auth!.userId, req.body.currentPassword, req.body.newPassword, req);
  res.json(successResponse({ changed: true }, req.requestId ?? ""));
});

export const requestPasswordResetController: RequestHandler = asyncHandler(async (req, res) => {
  await requestPasswordReset(req.body.usernameOrEmail, req);
  // Always 202, even for unknown accounts — see requestPasswordReset().
  res.status(202).json(successResponse({ accepted: true }, req.requestId ?? ""));
});

export const resetPasswordController: RequestHandler = asyncHandler(async (req, res) => {
  await resetPassword(req.body.token, req.body.newPassword, req);
  res.json(successResponse({ reset: true }, req.requestId ?? ""));
});

export const googleStartController: RequestHandler = asyncHandler(async (req, res) => {
  redirectToGoogle(req, res);
});

export const googleCallbackController: RequestHandler = asyncHandler(async (req, res) => {
  await handleGoogleCallback(req, res);
});

export const setPasswordController: RequestHandler = asyncHandler(async (req, res) => {
  const newPassword = typeof req.body?.newPassword === "string" ? req.body.newPassword : "";
  await setInitialPassword(req.auth!.userId, newPassword, req);
  res.json(successResponse({ set: true }, req.requestId ?? ""));
});
