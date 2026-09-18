import type { NextRequest } from "next/server";
import { randomBytes } from "node:crypto";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { CURRENCIES, DIAL_CODES, ZERO_DECIMAL_CURRENCIES, minorUnitFactor } from "@/lib/payment-options";
import { razorpay } from "@/lib/razorpay";

export const dynamic = "force-dynamic";

const paymentSchema = z
  .object({
    name: z.string().trim().min(3, "Enter your full name").max(100),
    email: z.string().trim().max(100).regex(/^\S+@\S+\.\S+$/, "Enter a valid email"),
    country: z.string().refine((c) => /^[A-Z]{2}$/.test(c) && c in DIAL_CODES, "Choose your country"),
    phone: z.string().max(20),
    currency: z.string().refine((c) => CURRENCIES.includes(c), "Choose a currency"),
    amount: z.coerce.number().min(1, "Amount must be at least 1").max(10_000_000, "Amount is too large"),
    tutorId: z.string().trim().min(1, "Select your tutor").max(40),
    note: z.string().trim().max(200).optional(),
  })
  .refine((d) => !ZERO_DECIMAL_CURRENCIES.has(d.currency) || Number.isInteger(d.amount), {
    message: "This currency does not use decimals",
    path: ["amount"],
  });

// ponytail: in-memory per-IP limit, fine for the single PM2 instance; move to Redis if the app is scaled out.
const attempts = new Map<string, { count: number; resetAt: number }>();
function tooManyAttempts(ip: string) {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt < now) {
    if (attempts.size > 5000) attempts.clear();
    attempts.set(ip, { count: 1, resetAt: now + 10 * 60_000 });
    return false;
  }
  return ++entry.count > 10;
}

export async function POST(request: NextRequest) {
  // nginx sets X-Real-IP / appends the real client as the last X-Forwarded-For entry.
  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",").pop()?.trim() || "unknown";
  if (tooManyAttempts(ip)) {
    return Response.json({ error: "Too many payment attempts. Please wait a few minutes and try again." }, { status: 429 });
  }

  const parsed = paymentSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid payment details" }, { status: 400 });
  }
  const { name, email, country, currency, note, tutorId } = parsed.data;
  const factor = minorUnitFactor(currency);
  const minorAmount = Math.round(parsed.data.amount * factor);
  const amount = minorAmount / factor;
  const dial = DIAL_CODES[country];

  // Accept "09876543210" or "+91 98765 43210" typed into the number box.
  let phone = parsed.data.phone.replace(/\D/g, "").replace(/^0+/, "");
  if (country === "IN" && phone.length === 12 && phone.startsWith("91")) phone = phone.slice(2);
  if (country === "IN" ? phone.length !== 10 : phone.length < 4 || phone.length > 14) {
    return Response.json({ error: "Enter a valid mobile number (10 digits for India)" }, { status: 400 });
  }

  // Only live, approved tutors; the tutor name on the invoice comes from the DB, never from the browser.
  let tutorName: string | null = null;
  if (tutorId !== "other") {
    const tutor = await prisma.tutor
      .findFirst({ where: { id: tutorId, deletedAt: null, status: "active", approved: true }, select: { displayName: true } })
      .catch(() => null);
    if (!tutor) return Response.json({ error: "Please select a tutor from the list" }, { status: 400 });
    tutorName = tutor.displayName;
  }

  // Razorpay's order id becomes our order id, so any status can be re-read from Razorpay later.
  // The receipt is only the human reference shown in the Razorpay dashboard (max 40 chars).
  let orderId: string;
  try {
    const order = await razorpay<{ id: string }>("/orders", {
      amount: minorAmount,
      currency,
      receipt: `IBG-${Date.now()}-${randomBytes(4).toString("base64url")}`,
      notes: {
        customer_name: name,
        customer_email: email,
        customer_phone: `+${dial}${phone}`,
        ...(tutorName ? { tutor: tutorName } : {}),
        ...(note ? { note } : {}),
      },
    });
    orderId = order.id;
  } catch (err) {
    return Response.json({ error: err instanceof Error ? err.message : "Could not start the payment" }, { status: 502 });
  }

  try {
    await prisma.payment.create({
      data: {
        orderId,
        amount,
        currency,
        customerName: name,
        customerEmail: email,
        customerPhone: `+${dial} ${phone}`,
        tutorId: tutorName ? tutorId : null,
        tutorName,
        note: note || null,
        ipAddress: ip,
      },
    });
  } catch {
    return Response.json({ error: "Could not save the payment. Please try again." }, { status: 500 });
  }

  // key_id is public by design - it only identifies the account to Razorpay Checkout.
  return Response.json({ keyId: process.env.RAZORPAY_KEY_ID, orderId, amount: minorAmount, currency });
}
