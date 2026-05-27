import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { buildCorsOptions } from "./config/cors";
import { logger } from "./config/logger";
import { errorMiddleware } from "./middleware/error.middleware";
import { notFoundMiddleware } from "./middleware/not-found.middleware";
import { requestIdMiddleware } from "./middleware/request-id.middleware";
import { sessionAuthMiddleware } from "./modules/auth/session.middleware";
import { healthRoutes } from "./routes/health.routes";
import { apiRoutes } from "./routes";

export function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(requestIdMiddleware);
  app.use(pinoHttp({ logger, genReqId: (req) => req.requestId ?? "" }));
  app.use(helmet());
  app.use(cors(buildCorsOptions()));
  app.use(compression());
  app.use(cookieParser());
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(sessionAuthMiddleware);

  app.use("/health", healthRoutes);
  app.use("/api", apiRoutes);

  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  return app;
}

export const app = createApp();
