import { Router } from "express";
import { healthRoutes } from "./health.routes";
import { versionController } from "../modules/health/health.controller";
import { authRoutes } from "../modules/auth/auth.routes";
import { usersRoutes } from "../modules/users/users.routes";
import { rolesRoutes } from "../modules/roles/roles.routes";
import { auditRoutes } from "../modules/audit/audit.routes";

export const apiRoutes = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/health", healthRoutes);
apiRoutes.get("/version", versionController);
apiRoutes.use("/", rolesRoutes);
apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/audit-logs", auditRoutes);
