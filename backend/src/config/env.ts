import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  FRONTEND_URL: z.string().optional().default("http://localhost:3000"),
  DATABASE_URL: z.string().optional().default("postgresql://localhost:5432/ibgram"),
  DIRECT_URL: z.string().optional(),
  JWT_ACCESS_SECRET: z.string().optional().default("dev-access-secret"),
  JWT_REFRESH_SECRET: z.string().optional().default("dev-refresh-secret"),
  JWT_ACCESS_EXPIRES_IN: z.string().optional().default("15m"),
  JWT_REFRESH_EXPIRES_IN: z.string().optional().default("7d"),
  COOKIE_DOMAIN: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_MODEL: z.string().optional(),
  OPENAI_BASE_URL: z.string().optional(),
  GOOGLE_MAPS_API_KEY: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_S3_BUCKET: z.string().optional(),
  AWS_S3_BASE_URL: z.string().optional(),
  LOG_LEVEL: z.string().optional().default("info"),
  SEED_ADMIN_NAME: z.string().optional(),
  SEED_ADMIN_EMAIL: z.string().optional(),
  SEED_ADMIN_PASSWORD: z.string().optional()
});

export const env = envSchema.parse(process.env);
export type Env = typeof env;
