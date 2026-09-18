import { createHmac, timingSafeEqual } from "node:crypto";
import { prisma } from "@/lib/db";

// Server-only Razorpay PG client. Env names match .env and .github/workflows/deploy.yml.
// Payment.orderId is Razorpay's own order id (order_XXXXXXXXXXXXXX), so status can always be re-read from Razorpay.

type OrderStatus = "created" | "attempted" | "paid";

type RazorpayPayment = {
  id: string;
  status: "created" | "authorized" | "captured" | "refunded" | "failed";
  method?: string | null;
  created_at?: number | null;
  acquirer_data?: { rrn?: string | null; bank_transaction_id?: string | null; upi_transaction_id?: string | null } | null;
};

export const ORDER_ID_RE = /^[\w-]{3,45}$/;

export async function razorpay<T>(path: string, body?: unknown): Promise<T> {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) throw new Error("Payments are not configured yet.");

  const res = await fetch(`https://api.razorpay.com/v1${path}`, {
    method: body ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.error?.description || `Razorpay request failed (${res.status})`);
  return json as T;
}

/** Maps a Razorpay order and its payment attempts to our PaymentStatus. */
export function paymentStatus(orderStatus: OrderStatus, payments: Pick<RazorpayPayment, "status">[]) {
  // A refunded payment was captured first, so the order still reads "paid" and the invoice stays valid.
  if (orderStatus === "paid" || payments.some((p) => p.status === "captured")) return "paid" as const;
  // "authorized" means the money is held but not captured yet - turn on auto-capture in the dashboard.
  if (payments.some((p) => p.status === "authorized" || p.status === "created")) return "pending" as const;
  if (orderStatus === "created" && payments.length === 0) return "pending" as const;
  return "failed" as const;
}

/** Razorpay webhook signature: hex(HMAC-SHA256(raw body, webhook secret)). */
export function isValidWebhookSignature(rawBody: string, signature: string, secret: string | undefined) {
  if (!secret || !signature) return false;
  const expected = Buffer.from(createHmac("sha256", secret).update(rawBody).digest("hex"));
  const received = Buffer.from(signature);
  return received.length === expected.length && timingSafeEqual(received, expected);
}

/** Copies an order's real status from Razorpay into the Payment table. Completed paid rows are final. */
export async function syncPayment(orderId: string) {
  const existing = await prisma.payment.findUnique({ where: { orderId } });
  if (!existing || (existing.status === "paid" && existing.gatewayPaymentId)) return existing;

  const [order, list] = await Promise.all([
    razorpay<{ status: OrderStatus }>(`/orders/${orderId}`),
    razorpay<{ items?: RazorpayPayment[] }>(`/orders/${orderId}/payments`),
  ]);
  const payments = list.items ?? [];
  const status = paymentStatus(order.status, payments);
  const success = payments.find((p) => p.status === "captured" || p.status === "refunded");
  const acquirer = success?.acquirer_data;

  // Guarded write: a slower, older sync can never turn a paid row back into pending/failed.
  await prisma.payment.updateMany({
    where:
      status === "paid"
        ? { orderId, OR: [{ status: { not: "paid" } }, { gatewayPaymentId: null }] }
        : { orderId, status: { not: "paid" } },
    data: {
      status,
      ...(success && {
        gatewayPaymentId: success.id,
        paymentMethod: success.method ?? null,
        bankReference: acquirer?.rrn || acquirer?.bank_transaction_id || acquirer?.upi_transaction_id || null,
        paidAt: new Date(success.created_at ? success.created_at * 1000 : Date.now()),
      }),
    },
  });
  return prisma.payment.findUnique({ where: { orderId } });
}
