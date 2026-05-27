import { Router } from "express";
import { requirePermission } from "@ibgram/authentication";
import { listPermissionsController, listRolesController } from "./roles.controller";

export const rolesRoutes = Router();

rolesRoutes.get("/roles", requirePermission("users.read"), listRolesController);
rolesRoutes.get("/permissions", requirePermission("users.read"), listPermissionsController);
