import { Router } from "express";
import { asyncHandler } from "../../common/utils/async-handler.js";
import { createApiResponse } from "../../common/utils/api-response.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (_req, res) => {
    res.json(createApiResponse("Service healthy", { status: "ok" }));
  })
);

router.get(
  "/ready",
  asyncHandler(async (_req, res) => {
    res.json(createApiResponse("Service ready", { status: "ready" }));
  })
);

export const healthRouter = router;
