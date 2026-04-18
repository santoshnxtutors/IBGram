import type { CorsOptions } from "cors";
import { env } from "./env.js";

export const corsOptions: CorsOptions = {
  origin: env.FRONTEND_URL ? [env.FRONTEND_URL] : true,
  credentials: true
};
