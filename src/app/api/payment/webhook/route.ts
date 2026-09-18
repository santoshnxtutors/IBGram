import { ORDER_ID_RE, isValidWebhookSignature, syncPayment } from "@/lib/razorpay";

export const dynamic = "force-dynamic";

// Razorpay calls this (dashboard webhook) when a payment changes, so the DB updates even if the customer closes the tab.
export async function POST(request: Request) {
  const raw = await request.text();
  const valid = isValidWebhookSignature(raw, request.headers.get("x-razorpay-signature") ?? "", process.env.RAZORPAY_WEBHOOK_SECRET);
  if (!valid) return Response.json({ error: "Invalid signature" }, { status: 401 });

  let orderId: unknown;
  try {
    const entities = JSON.parse(raw)?.payload ?? {};
    // payment.* events carry the order id on the payment; order.paid carries the order itself.
    orderId = entities.payment?.entity?.order_id ?? entities.order?.entity?.id;
  } catch {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  // The payload only says which order changed; the status itself is re-read from Razorpay.
  // If that fails this throws a 500 and Razorpay retries the webhook.
  if (typeof orderId === "string" && ORDER_ID_RE.test(orderId)) await syncPayment(orderId);
  return Response.json({ ok: true });
}
