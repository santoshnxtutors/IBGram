/**
 * Bot protection for public registration.
 *
 * On 23 Oct 2026, 16 automated accounts registered inside a single day and 21 of the 22 tutor
 * accounts without a profile were bots - random consonant names, Gmail dot-obfuscated
 * addresses, not one of them ever logging in. The existing protection did not stop it because
 * `/register` shared the login rate limit of 10 requests per 15 minutes, which permits roughly
 * 960 registrations a day from one address. That is a sensible budget for someone mistyping a
 * password; it is far too generous for an action a real person performs once.
 *
 * Three independent layers, cheapest first, so no single bypass is enough:
 *
 *   1. A honeypot field a human never sees and never fills.
 *   2. A registration-specific rate limit, far tighter than the login one.
 *   3. Cloudflare Turnstile, verified server-side - active only once keys are configured.
 *
 * Each layer fails open on its own terms: no Turnstile keys means that check is skipped rather
 * than locking everybody out, which matters because this sits in front of the signup form.
 */
import rateLimit from "express-rate-limit";
import type { NextFunction, Request, Response } from "express";

/**
 * Registration is a once-per-person action, so the budget is small. Login keeps its own,
 * looser limit: people genuinely do mistype passwords several times.
 */
export const registerRateLimit = rateLimit({
  windowMs: Number(process.env.REGISTER_RATE_LIMIT_WINDOW_MS ?? 60 * 60 * 1000),
  limit: Number(process.env.REGISTER_RATE_LIMIT_MAX ?? 3),
  standardHeaders: true,
  legacyHeaders: false,
  // Counting only successful registrations would let a script probe freely; every attempt counts.
  message: {
    success: false,
    data: null,
    error: {
      code: "RATE_LIMITED",
      message: "Too many sign-up attempts from this network. Please try again in an hour, or sign up with Google.",
    },
    requestId: "",
  },
});

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Not configured: skip the check rather than block every signup.
  if (!secret) return true;
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set("remoteip", ip);
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) {
      console.warn("[signup-guard] turnstile rejected:", data["error-codes"]?.join(", ") ?? "unknown");
    }
    return data.success === true;
  } catch (error) {
    // A Cloudflare outage must not take signup down with it. Log loudly and let it through -
    // the honeypot and rate limit are still in force.
    console.error("[signup-guard] turnstile verification failed, allowing through:", (error as Error).message);
    return true;
  }
}

/**
 * Rejects obvious automation before the account is created. Runs after validation, so the body
 * is already shaped, and returns the same generic message in every case - telling a script
 * which layer caught it just teaches it what to change.
 */
export async function signupGuard(req: Request, res: Response, next: NextFunction): Promise<void> {
  const body = (req.body ?? {}) as { company?: string; captchaToken?: string; email?: string };

  const reject = (reason: string) => {
    console.warn(`[signup-guard] blocked registration (${reason}) email=${body.email ?? "?"} ip=${req.ip ?? "?"}`);
    res.status(400).json({
      success: false,
      data: null,
      error: { code: "SIGNUP_REJECTED", message: "We could not verify this sign-up. Please try again, or sign up with Google." },
      requestId: (req as Request & { requestId?: string }).requestId ?? "",
    });
  };

  if (body.company && body.company.trim() !== "") return reject("honeypot filled");

  const ok = await verifyTurnstile(body.captchaToken ?? "", req.ip);
  if (!ok) return reject("captcha failed");

  next();
}
