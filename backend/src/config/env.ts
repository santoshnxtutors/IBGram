import path from "node:path";
import { config } from "dotenv";
import { z } from "zod";

const projectRoot = path.resolve(__dirname, "../../..");

config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const booleanFromString = z
  .union([z.boolean(), z.enum(["true", "false"])])
  .transform((value) => (typeof value === "boolean" ? value : value === "true"));

const optionalUrlWithDefault = (fallback: string) =>
  z.preprocess((value) => (value === "" ? undefined : value), z.url().optional().default(fallback));

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  BACKEND_PORT: z.coerce.number().int().positive().default(4000),
  BACKEND_URL: z.url(),
  CORS_ORIGIN: z.string().trim().min(1),
  DATABASE_URL: z.string().trim().min(1).startsWith("postgresql://"),
  AUTH_SESSION_SECRET: z.string().min(24),
  JWT_ACCESS_SECRET: z.string().min(24),
  JWT_REFRESH_SECRET: z.string().min(24),
  SESSION_TTL: z.string().trim().min(1).default("8h"),
  ACCESS_TOKEN_TTL: z.string().trim().min(1).default("15m"),
  REFRESH_TOKEN_TTL: z.string().trim().min(1).default("30d"),
  COOKIE_DOMAIN: z.string().optional().default(""),
  COOKIE_SECURE: booleanFromString.default(false),
  AUTH_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(900_000),
  AUTH_RATE_LIMIT_MAX: z.coerce.number().int().positive().default(10),
  ADMIN_EMAIL: z.email(),
  ADMIN_USERNAME: z.string().trim().min(3),
  ADMIN_PASSWORD: z.string().min(12),
  GOOGLE_CLIENT_ID: z.string().optional().default(""),
  GOOGLE_CLIENT_SECRET: z.string().optional().default(""),
  GOOGLE_CALLBACK_URL: optionalUrlWithDefault("http://localhost:3000/api/auth/google/callback"),
  AUTH_SUCCESS_REDIRECT: optionalUrlWithDefault("http://localhost:3000/"),
  AUTH_FAILURE_REDIRECT: optionalUrlWithDefault("http://localhost:3000/login?error=oauth_failed"),
  UPLOAD_PROVIDER: z.enum(["local", "cloudinary", "s3"]).default("local"),
  CLOUDINARY_CLOUD_NAME: z.string().optional().default(""),
  CLOUDINARY_API_KEY: z.string().optional().default(""),
  CLOUDINARY_API_SECRET: z.string().optional().default(""),
  AWS_REGION: z.string().optional().default(""),
  AWS_S3_BUCKET: z.string().optional().default(""),
  AWS_ACCESS_KEY_ID: z.string().optional().default(""),
  AWS_SECRET_ACCESS_KEY: z.string().optional().default(""),
  OPENAI_API_KEY: z.string().optional().default(""),
  SENTRY_DSN: z.string().optional().default(""),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"]).default("info"),
});

export type BackendEnv = z.infer<typeof envSchema>;

let cachedEnv: BackendEnv | undefined;

export function parseEnv(input: NodeJS.ProcessEnv): BackendEnv {
  const parsed = envSchema.safeParse(input);
  if (!parsed.success) {
    const details = parsed.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; ");
    throw new Error(`Invalid backend environment: ${details}`);
  }

  return parsed.data;
}

export function getEnv(): BackendEnv {
  cachedEnv ??= parseEnv(process.env);
  return cachedEnv;
}

export function resetEnvForTests(): void {
  cachedEnv = undefined;
}
