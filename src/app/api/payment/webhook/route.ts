import { ORDER_ID_RE, isValidWebhookSignature, syncPayment } from "@/lib/cashfree";

export const dynamic = "force-dynamic";

// Cashfree calls this (order notify_url) when a payment changes, so the DB updates even if the customer closes the tab.
export async function POST(request: Request) {
  const raw = await request.text();
  const valid = isValidWebhookSignature(
    raw,
    request.headers.get("x-webhook-timestamp") ?? "",
    request.headers.get("x-webhook-signature") ?? "",
    process.env.CASHFREE_SECRET_KEY,
  );
  if (!valid) return Response.json({ error: "Invalid signature" }, { status: 401 });

  let orderId: unknown;
  try {
    orderId = JSON.parse(raw)?.data?.order?.order_id;
  } catch {
    return Response.json({ error: "Invalid payload" }, { status: 400 });
  }

  // The payload only says which order changed; the status itself is re-read from Cashfree.
  // If that fails this throws a 500 and Cashfree retries the webhook.
  if (typeof orderId === "string" && ORDER_ID_RE.test(orderId)) await syncPayment(orderId);
  return Response.json({ ok: true });
}
