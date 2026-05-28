import { Router } from "express";
import { requireAuth } from "@ibgram/authentication";
import { dashboardSummaryController } from "./dashboard.controller";

export const dashboardRoutes = Router();

dashboardRoutes.get("/summary", requireAuth(), dashboardSummaryController);
