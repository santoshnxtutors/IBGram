import { Router } from "express";
import { requirePermission } from "@ibgram/authentication";
import { listAuditLogsController } from "./audit.controller";

export const auditRoutes = Router();

auditRoutes.get("/", requirePermission("audit.read"), listAuditLogsController);
