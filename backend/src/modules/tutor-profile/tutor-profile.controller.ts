import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { getMyTutorProfile, upsertMyTutorProfile } from "./tutor-profile.service";

export const myTutorProfileController: RequestHandler = asyncHandler(async (req, res) => {
  const result = await getMyTutorProfile(req.auth!.userId);
  res.json(successResponse(result, req.requestId ?? ""));
});

export const upsertTutorProfileController: RequestHandler = asyncHandler(async (req, res) => {
  const result = await upsertMyTutorProfile(req.auth!.userId, req.body ?? {});
  res.json(successResponse(result, req.requestId ?? ""));
});
