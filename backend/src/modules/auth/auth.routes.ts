import { Router } from "express";
import rateLimit from "express-rate-limit";
import { changePasswordValidator, loginValidator, requestPasswordResetValidator, resetPasswordValidator } from "@ibgram/shared";
import { requireAuth } from "@ibgram/authentication";
import { getEnv } from "../../config/env";
import { validate } from "../../middleware/validate.middleware";
import {
  changePasswordController,
  loginController,
  logoutController,
  meController,
  passwordResetStubController,
} from "./auth.controller";

const env = getEnv();

export const authRoutes = Router();

const authRateLimit = rateLimit({
  windowMs: env.AUTH_RATE_LIMIT_WINDOW_MS,
  limit: env.AUTH_RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    data: null,
    error: {
      code: "RATE_LIMITED",
      message: "Too many authentication attempts. Please try again later.",
    },
    requestId: "",
  },
});

authRoutes.post("/login", authRateLimit, validate({ body: loginValidator }), loginController);
authRoutes.post("/logout", requireAuth(), logoutController);
authRoutes.get("/me", requireAuth(), meController);
authRoutes.post("/change-password", requireAuth(), validate({ body: changePasswordValidator }), changePasswordController);
authRoutes.post("/request-password-reset", authRateLimit, validate({ body: requestPasswordResetValidator }), passwordResetStubController);
authRoutes.post("/reset-password", authRateLimit, validate({ body: resetPasswordValidator }), passwordResetStubController);
