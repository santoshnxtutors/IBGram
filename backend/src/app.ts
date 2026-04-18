import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import pinoHttp from "pino-http";
import swaggerUi from "swagger-ui-express";
import { corsOptions } from "./config/cors.js";
import { logger } from "./config/logger.js";
import { swaggerSpec } from "./config/swagger.js";
import { errorHandler } from "./common/errors/error-handler.js";
import { apiRateLimiter } from "./common/middleware/rate-limit.js";
import { apiRouter } from "./routes/index.js";

export function createApp() {
  const app = express();

  app.use(pinoHttp({ logger }));
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(compression());
  app.use(cookieParser());
  app.use(express.json({ limit: "2mb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(apiRateLimiter);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api/v1", apiRouter);
  app.use(errorHandler);

  return app;
}
