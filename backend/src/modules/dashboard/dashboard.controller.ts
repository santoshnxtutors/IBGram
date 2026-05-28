import type { RequestHandler } from "express";
import { successResponse } from "../../utils/api-response";
import { asyncHandler } from "../../utils/async-handler";
import { getDashboardSummary } from "./dashboard.service";

export const dashboardSummaryController: RequestHandler = asyncHandler(async (req, res) => {
  const summary = await getDashboardSummary();
  res.json(successResponse(summary, req.requestId ?? ""));
});
