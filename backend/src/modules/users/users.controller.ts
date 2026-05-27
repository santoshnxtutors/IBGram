import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { assignRole, createUser, deleteUser, getSafeUserById, listUsers, removeRole, updateUser, updateUserStatus } from "./users.service";

function param(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] : value ?? "";
}

export const listUsersController: RequestHandler = asyncHandler(async (req, res) => {
  res.json(successResponse(await listUsers(req.query as { page?: string; pageSize?: string }), req.requestId ?? ""));
});

export const getUserController: RequestHandler = asyncHandler(async (req, res) => {
  res.json(successResponse({ user: await getSafeUserById(param(req.params.id)) }, req.requestId ?? ""));
});

export const createUserController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await createUser(req.body, req.auth!.userId, req);
  res.status(201).json(successResponse({ user }, req.requestId ?? ""));
});

export const updateUserController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await updateUser(param(req.params.id), req.body, req.auth!.userId, req);
  res.json(successResponse({ user }, req.requestId ?? ""));
});

export const updateUserStatusController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await updateUserStatus(param(req.params.id), req.body.status, req.auth!.userId, req);
  res.json(successResponse({ user }, req.requestId ?? ""));
});

export const deleteUserController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await deleteUser(param(req.params.id), req.auth!.userId, req);
  res.json(successResponse({ user }, req.requestId ?? ""));
});

export const assignRoleController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await assignRole(param(req.params.id), req.body.roleId, req.auth!.userId, req);
  res.json(successResponse({ user }, req.requestId ?? ""));
});

export const removeRoleController: RequestHandler = asyncHandler(async (req, res) => {
  const user = await removeRole(param(req.params.id), param(req.params.roleId), req.auth!.userId, req);
  res.json(successResponse({ user }, req.requestId ?? ""));
});
