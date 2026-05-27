import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { changePassword, login, logout } from "./auth.service";

export const loginController: RequestHandler = asyncHandler(async (req, res) => {
  const result = await login(req.body, req, res);
  res.json(successResponse({ user: result.user }, req.requestId ?? ""));
});

export const logoutController: RequestHandler = asyncHandler(async (req, res) => {
  await logout(req, res);
  res.json(successResponse({ loggedOut: true }, req.requestId ?? ""));
});

export const meController: RequestHandler = (req, res) => {
  res.json(successResponse({ user: { id: req.auth!.userId, ...req.auth } }, req.requestId ?? ""));
};

export const changePasswordController: RequestHandler = asyncHandler(async (req, res) => {
  await changePassword(req.auth!.userId, req.body.currentPassword, req.body.newPassword, req);
  res.json(successResponse({ changed: true }, req.requestId ?? ""));
});

export const passwordResetStubController: RequestHandler = (_req, res) => {
  res.status(202).json(successResponse({ accepted: true }, res.locals.requestId ?? ""));
};
