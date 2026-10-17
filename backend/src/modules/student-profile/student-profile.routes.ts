import { Router } from "express";
import { requireAuth } from "@ibgram/authentication";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { getMyStudentProfile, upsertMyStudentProfile } from "./student-profile.service";

export const studentProfileRoutes = Router();

studentProfileRoutes.get(
  "/me",
  requireAuth(),
  asyncHandler(async (req, res) => {
    res.json(successResponse(await getMyStudentProfile(req.auth!.userId), req.requestId ?? ""));
  }),
);

studentProfileRoutes.put(
  "/",
  requireAuth(),
  asyncHandler(async (req, res) => {
    res.json(successResponse(await upsertMyStudentProfile(req.auth!.userId, req.body ?? {}), req.requestId ?? ""));
  }),
);
