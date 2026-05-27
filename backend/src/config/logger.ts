import pino from "pino";
import { getEnv } from "./env";

export function createLogger() {
  const env = getEnv();
  return pino({
    level: env.LOG_LEVEL,
    base: {
      service: "ibgram-backend",
      env: env.NODE_ENV,
    },
  });
}

export const logger = createLogger();
