import { Router } from "express";
import { ADMIN_ROLES } from "../../common/constants/auth.js";
import { authenticate, authorize } from "../../common/middleware/auth.js";
import { validateRequest } from "../../common/middleware/validate-request.js";
import { asyncHandler } from "../../common/utils/async-handler.js";
import { tutorController } from "./tutor.controller.js";
import { tutorCreateSchema, tutorListQuerySchema, tutorParamsSchema, tutorUpdateSchema } from "./tutor.schemas.js";

export const tutorPublicRouter = Router();
export const tutorAdminRouter = Router();

tutorPublicRouter.get("/", validateRequest({ query: tutorListQuerySchema }), asyncHandler(tutorController.list));
tutorPublicRouter.get("/:slug", validateRequest({ params: tutorParamsSchema }), asyncHandler(tutorController.getBySlug));

tutorAdminRouter.use(authenticate, authorize([...ADMIN_ROLES] as any));
tutorAdminRouter.get("/", validateRequest({ query: tutorListQuerySchema }), asyncHandler(tutorController.list));
tutorAdminRouter.post("/", validateRequest({ body: tutorCreateSchema }), asyncHandler(tutorController.create));
tutorAdminRouter.get("/:slug", validateRequest({ params: tutorParamsSchema }), asyncHandler(tutorController.getBySlug));
tutorAdminRouter.put("/:slug", validateRequest({ params: tutorParamsSchema, body: tutorUpdateSchema }), asyncHandler(tutorController.update));
tutorAdminRouter.delete("/:slug", validateRequest({ params: tutorParamsSchema }), asyncHandler(tutorController.remove));
