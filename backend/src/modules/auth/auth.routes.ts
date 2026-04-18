import { Router } from "express";
import { UserRole } from "@prisma/client";
import { authenticate, authorize } from "../../common/middleware/auth.js";
import { createApiResponse } from "../../common/utils/api-response.js";
import { asyncHandler } from "../../common/utils/async-handler.js";
import { validateRequest } from "../../common/middleware/validate-request.js";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { env } from "../../config/env.js";
import { prisma } from "../../database/prisma.js";
import { UnauthorizedError } from "../../common/errors/app-error.js";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

const refreshSchema = z.object({
  refreshToken: z.string().min(10).optional()
});

function signAccessToken(userId: string, role: UserRole) {
  return jwt.sign({ userId, role }, env.JWT_ACCESS_SECRET, { expiresIn: env.JWT_ACCESS_EXPIRES_IN });
}

function signRefreshToken(userId: string, role: UserRole) {
  return jwt.sign({ userId, role }, env.JWT_REFRESH_SECRET, { expiresIn: env.JWT_REFRESH_EXPIRES_IN });
}

const router = Router();

router.post(
  "/login",
  validateRequest({ body: loginSchema }),
  asyncHandler(async (req, res) => {
    const user = await prisma.user.findUnique({ where: { email: req.body.email } });
    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const isValid = await bcrypt.compare(req.body.password, user.passwordHash);
    if (!isValid) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const accessToken = signAccessToken(user.id, user.role);
    const refreshToken = signRefreshToken(user.id, user.role);
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

    await prisma.refreshSession.create({
      data: {
        userId: user.id,
        refreshTokenHash,
        userAgent: req.headers["user-agent"],
        ipAddress: req.ip,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      }
    });

    res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "lax", secure: env.NODE_ENV === "production" });
    res.json(createApiResponse("Login successful", { accessToken, refreshToken, user: { id: user.id, name: user.name, email: user.email, role: user.role } }));
  })
);

router.post(
  "/refresh",
  validateRequest({ body: refreshSchema }),
  asyncHandler(async (req, res) => {
    const token = req.body.refreshToken ?? req.cookies?.refreshToken;
    if (!token) {
      throw new UnauthorizedError("Missing refresh token");
    }

    const payload = jwt.verify(token, env.JWT_REFRESH_SECRET) as { userId: string; role: UserRole };
    const sessions = await prisma.refreshSession.findMany({ where: { userId: payload.userId } });
    const matched = await Promise.any(
      sessions.map(async (session) => ((await bcrypt.compare(token, session.refreshTokenHash)) ? session : Promise.reject(null)))
    ).catch(() => null);

    if (!matched) {
      throw new UnauthorizedError("Refresh session not found");
    }

    const accessToken = signAccessToken(payload.userId, payload.role);
    res.json(createApiResponse("Token refreshed", { accessToken }));
  })
);

router.post(
  "/logout",
  asyncHandler(async (req, res) => {
    const token = req.body?.refreshToken ?? req.cookies?.refreshToken;
    if (token) {
      const sessions = await prisma.refreshSession.findMany();
      for (const session of sessions) {
        if (await bcrypt.compare(token, session.refreshTokenHash)) {
          await prisma.refreshSession.delete({ where: { id: session.id } });
        }
      }
    }

    res.clearCookie("refreshToken");
    res.json(createApiResponse("Logged out", { success: true }));
  })
);

router.get(
  "/me",
  authenticate,
  authorize([UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.EDITOR, UserRole.TUTOR, UserRole.STUDENT]),
  asyncHandler(async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: req.auth!.userId } });
    res.json(createApiResponse("Current user fetched", user));
  })
);

export const authRouter = router;
