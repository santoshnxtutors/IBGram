import { createHmac, timingSafeEqual } from "node:crypto";
import { prisma } from "@/lib/db";

// Server-only Cashfree PG client. Env names match .env and .github/workflows/deploy.yml.

type OrderStatus = "ACTIVE" | "PAID" | "EXPIRED" | "TERMINATED" | "TERMINATION_REQUESTED";

type CashfreePayment = {
  cf_payment_id: string | number;
  payment_status: "SUCCESS" | "NOT_ATTEMPTED" | "FAILED" | "USER_DROPPED" | "VOID" | "CANCELLED" | "PENDING";
  payment_time?: string | null;
  payment_completion_time?: string | null;
  payment_group?: string | null;
  bank_reference?: string | null;
};

export const ORDER_ID_RE = /^[\w-]{3,45}$/;

export function cashfreeMode() {
  return process.env.CASHFREE_ENV === "production" ? "production" : "sandbox";
}

export async function cashfree<T>(path: string, body?: unknown): Promise<T> {
  const appId = process.env.CASHFREE_APP_ID;
  const secret = process.env.CASHFREE_SECRET_KEY;
  if (!appId || !secret) throw new Error("Payments are not configured yet.");

  const base = cashfreeMode() === "production" ? "https://api.cashfree.com/pg" : "https://sandbox.cashfree.com/pg";
  const res = await fetch(`${base}${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-version": process.env.CASHFREE_API_VERSION || "2025-01-01",
      "x-client-id": appId,
      "x-client-secret": secret,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || `Cashfree request failed (${res.status})`);
  return json as T;
}

/** Maps a Cashfree order and its payment attempts to our PaymentStatus. */
export function paymentStatus(orderStatus: OrderStatus, payments: Pick<CashfreePayment, "payment_status">[]) {
  if (orderStatus === "PAID") return "paid" as const;
  if (payments.some((p) => p.payment_status === "PENDING")) return "pending" as const;
  if (orderStatus === "ACTIVE" && payments.every((p) => p.payment_status === "NOT_ATTEMPTED")) return "pending" as const;
  return "failed" as const;
}

/** Cashfree webhook signature: base64(HMAC-SHA256(timestamp + raw body, client secret)). */
export function isValidWebhookSignature(rawBody: string, timestamp: string, signature: string, secret: string | undefined) {
  if (!secret || !timestamp || !signature) return false;
  const expected = Buffer.from(createHmac("sha256", secret).update(timestamp + rawBody).digest("base64"));
  const received = Buffer.from(signature);
  return received.length === expected.length && timingSafeEqual(received, expected);
}

/** Copies an order's real status from Cashfree into the Payment table. Completed paid rows are final. */
export async function syncPayment(orderId: string) {
  const existing = await prisma.payment.findUnique({ where: { orderId } });
  if (!existing || (existing.status === "paid" && existing.cfPaymentId)) return existing;

  const [order, payments] = await Promise.all([
    cashfree<{ order_status: OrderStatus }>(`/orders/${orderId}`),
    cashfree<CashfreePayment[]>(`/orders/${orderId}/payments`),
  ]);
  const status = paymentStatus(order.order_status, payments);
  const success = payments.find((p) => p.payment_status === "SUCCESS");

  // Guarded write: a slower, older sync can never turn a paid row back into pending/failed.
  await prisma.payment.updateMany({
    where:
      status === "paid"
        ? { orderId, OR: [{ status: { not: "paid" } }, { cfPaymentId: null }] }
        : { orderId, status: { not: "paid" } },
    data: {
      status,
      ...(success && {
        cfPaymentId: String(success.cf_payment_id),
        paymentMethod: success.payment_group ?? null,
        bankReference: success.bank_reference ?? null,
        paidAt: new Date(success.payment_completion_time || success.payment_time || Date.now()),
      }),
    },
  });
  return prisma.payment.findUnique({ where: { orderId } });
}
