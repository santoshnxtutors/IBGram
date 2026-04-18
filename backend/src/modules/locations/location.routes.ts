import { Router } from "express";
import { ADMIN_ROLES } from "../../common/constants/auth.js";
import { authenticate, authorize } from "../../common/middleware/auth.js";
import { validateRequest } from "../../common/middleware/validate-request.js";
import { asyncHandler } from "../../common/utils/async-handler.js";
import { locationController } from "./location.controller.js";
import { locationCreateSchema, locationListQuerySchema, locationSearchQuerySchema, locationUpdateSchema } from "./location.schemas.js";
import { z } from "zod";

const idSchema = z.object({ id: z.string().min(1) });

export const locationPublicRouter = Router();
export const locationAdminRouter = Router();

locationPublicRouter.get("/tree", asyncHandler(locationController.tree));
locationPublicRouter.get("/search", validateRequest({ query: locationSearchQuerySchema }), asyncHandler(locationController.search));
locationPublicRouter.get("/", validateRequest({ query: locationListQuerySchema }), asyncHandler(locationController.list));

locationAdminRouter.use(authenticate, authorize([...ADMIN_ROLES] as any));
locationAdminRouter.get("/", validateRequest({ query: locationListQuerySchema }), asyncHandler(locationController.list));
locationAdminRouter.post("/", validateRequest({ body: locationCreateSchema }), asyncHandler(locationController.create));
locationAdminRouter.put("/:id", validateRequest({ params: idSchema, body: locationUpdateSchema }), asyncHandler(locationController.update));
locationAdminRouter.delete("/:id", validateRequest({ params: idSchema }), asyncHandler(locationController.remove));
