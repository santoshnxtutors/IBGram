import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { listPermissions, listRoles } from "./roles.service";

export const listRolesController: RequestHandler = asyncHandler(async (req, res) => {
  const roles = await listRoles();
  res.json(
    successResponse(
      {
        roles: roles.map((role) => ({
          id: role.id,
          name: role.name,
          description: role.description,
          isSystem: role.isSystem,
          permissions: role.permissions.map((rolePermission) => rolePermission.permission.name),
        })),
      },
      req.requestId ?? "",
    ),
  );
});

export const listPermissionsController: RequestHandler = asyncHandler(async (req, res) => {
  res.json(successResponse({ permissions: await listPermissions() }, req.requestId ?? ""));
});
