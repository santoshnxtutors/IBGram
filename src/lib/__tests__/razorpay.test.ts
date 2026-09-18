import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { isValidWebhookSignature, paymentStatus } from "@/lib/razorpay";
import { minorUnitFactor } from "@/lib/payment-options";

vi.mock("@/lib/db", () => ({ prisma: {} }));

type Attempt = Parameters<typeof paymentStatus>[1][number]["status"];
const attempts = (...statuses: Attempt[]) => statuses.map((status) => ({ status }));

describe("paymentStatus", () => {
  it("is paid when the order is paid or a payment was captured", () => {
    expect(paymentStatus("paid", attempts("failed", "captured"))).toBe("paid");
    expect(paymentStatus("attempted", attempts("captured"))).toBe("paid");
    expect(paymentStatus("paid", attempts("refunded"))).toBe("paid");
  });

  it("stays pending while nothing was attempted or a payment is only authorized", () => {
    expect(paymentStatus("created", [])).toBe("pending");
    expect(paymentStatus("attempted", attempts("failed", "authorized"))).toBe("pending");
    expect(paymentStatus("attempted", attempts("created"))).toBe("pending");
  });

  it("fails orders where every attempt failed", () => {
    expect(paymentStatus("attempted", attempts("failed"))).toBe("failed");
    expect(paymentStatus("attempted", attempts("failed", "failed"))).toBe("failed");
  });
});

describe("minorUnitFactor", () => {
  it("uses the currency's smallest unit", () => {
    expect(minorUnitFactor("INR")).toBe(100);
    expect(minorUnitFactor("JPY")).toBe(1);
    expect(minorUnitFactor("KWD")).toBe(1000);
  });
});

describe("isValidWebhookSignature", () => {
  const secret = "test-secret";
  const body = '{"payload":{"payment":{"entity":{"order_id":"order_ABC123"}}}}';
  const signature = createHmac("sha256", secret).update(body).digest("hex");

  it("accepts a correctly signed Razorpay webhook", () => {
    expect(isValidWebhookSignature(body, signature, secret)).toBe(true);
  });

  it("rejects tampered bodies, bad signatures and a missing secret", () => {
    expect(isValidWebhookSignature(body.replace("ABC123", "XYZ789"), signature, secret)).toBe(false);
    expect(isValidWebhookSignature(body, "short", secret)).toBe(false);
    expect(isValidWebhookSignature(body, signature, undefined)).toBe(false);
  });
});
