import { Router } from "express";
import rateLimit from "express-rate-limit";
import { changePasswordValidator, loginValidator, publicRegisterValidator, requestPasswordResetValidator, resetPasswordValidator } from "@ibgram/shared";
import { requireAuth } from "@ibgram/authentication";
import { getEnv } from "../../config/env";
import { registerRateLimit, signupGuard } from "./signup-guard";
import { validate } from "../../middleware/validate.middleware";
import {
  changePasswordController,
  googleCallbackController,
  googleStartController,
  loginController,
  logoutController,
  meController,
  requestPasswordResetController,
  resetPasswordController,
  registerController,
  setPasswordController,
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

// Registration gets its own, much tighter limit plus the honeypot/captcha guard. It used to
// share the login limit of 10 per 15 minutes, which allowed ~960 signups a day from one IP -
// how 16 bot accounts were created in a single day on 23 Oct 2026.
authRoutes.post("/register", registerRateLimit, validate({ body: publicRegisterValidator }), signupGuard, registerController);
authRoutes.post("/login", authRateLimit, validate({ body: loginValidator }), loginController);
authRoutes.post("/logout", requireAuth(), logoutController);
authRoutes.get("/me", requireAuth(), meController);
authRoutes.get("/google", authRateLimit, googleStartController);
authRoutes.get("/google/callback", googleCallbackController);
authRoutes.post("/change-password", requireAuth(), validate({ body: changePasswordValidator }), changePasswordController);
authRoutes.post("/set-password", authRateLimit, requireAuth(), setPasswordController);
authRoutes.post("/request-password-reset", authRateLimit, validate({ body: requestPasswordResetValidator }), requestPasswordResetController);
authRoutes.post("/reset-password", authRateLimit, validate({ body: resetPasswordValidator }), resetPasswordController);
