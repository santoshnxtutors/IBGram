import { Router } from "express";
import { z } from "zod";
import { assignUserRoleValidator, createUserValidator, updateUserStatusValidator, updateUserValidator } from "@ibgram/shared";
import { requirePermission } from "@ibgram/authentication";
import { validate } from "../../middleware/validate.middleware";
import {
  assignRoleController,
  createUserController,
  deleteUserController,
  getUserController,
  listUsersController,
  removeRoleController,
  updateUserController,
  updateUserStatusController,
} from "./users.controller";

const idParams = z.object({ id: z.string().min(1) });
const roleParams = z.object({ id: z.string().min(1), roleId: z.string().min(1) });

export const usersRoutes = Router();

usersRoutes.get("/", requirePermission("users.read"), listUsersController);
usersRoutes.get("/:id", requirePermission("users.read"), validate({ params: idParams }), getUserController);
usersRoutes.post("/", requirePermission("users.create"), validate({ body: createUserValidator }), createUserController);
usersRoutes.patch("/:id", requirePermission("users.update"), validate({ params: idParams, body: updateUserValidator }), updateUserController);
usersRoutes.patch("/:id/status", requirePermission("users.update"), validate({ params: idParams, body: updateUserStatusValidator }), updateUserStatusController);
usersRoutes.delete("/:id", requirePermission("users.delete"), validate({ params: idParams }), deleteUserController);
usersRoutes.post("/:id/roles", requirePermission("users.update"), validate({ params: idParams, body: assignUserRoleValidator }), assignRoleController);
usersRoutes.delete("/:id/roles/:roleId", requirePermission("users.update"), validate({ params: roleParams }), removeRoleController);
