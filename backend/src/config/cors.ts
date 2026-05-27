import type { CorsOptions } from "cors";
import { getEnv } from "./env";

export function buildCorsOptions(): CorsOptions {
  const { CORS_ORIGIN } = getEnv();
  const allowedOrigins = CORS_ORIGIN.split(",").map((origin) => origin.trim()).filter(Boolean);

  return {
    credentials: true,
    origin(origin, callback) {
      if (!origin) {
        callback(null, true);
        return;
      }

      callback(null, allowedOrigins.includes(origin));
    },
  };
}
