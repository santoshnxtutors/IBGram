import { Router } from "express";
import { ADMIN_ROLES } from "../../common/constants/auth.js";
import { authenticate, authorize } from "../../common/middleware/auth.js";
import { validateRequest } from "../../common/middleware/validate-request.js";
import { asyncHandler } from "../../common/utils/async-handler.js";
import { blogController } from "./blog.controller.js";
import { blogCreateSchema, blogListQuerySchema, blogParamsSchema, blogUpdateSchema } from "./blog.schemas.js";

export const blogPublicRouter = Router();
export const blogAdminRouter = Router();

blogPublicRouter.get("/", validateRequest({ query: blogListQuerySchema }), asyncHandler(blogController.list));
blogPublicRouter.get("/:slug", validateRequest({ params: blogParamsSchema }), asyncHandler(blogController.getBySlug));

blogAdminRouter.use(authenticate, authorize([...ADMIN_ROLES] as any));
blogAdminRouter.get("/", validateRequest({ query: blogListQuerySchema }), asyncHandler(blogController.list));
blogAdminRouter.post("/", validateRequest({ body: blogCreateSchema }), asyncHandler(blogController.create));
blogAdminRouter.get("/:slug", validateRequest({ params: blogParamsSchema }), asyncHandler(blogController.getBySlug));
blogAdminRouter.put("/:slug", validateRequest({ params: blogParamsSchema, body: blogUpdateSchema }), asyncHandler(blogController.update));
blogAdminRouter.delete("/:slug", validateRequest({ params: blogParamsSchema }), asyncHandler(blogController.remove));
