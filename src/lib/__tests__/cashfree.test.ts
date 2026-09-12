import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { isValidWebhookSignature, paymentStatus } from "@/lib/cashfree";

vi.mock("@/lib/db", () => ({ prisma: {} }));

type Attempt = Parameters<typeof paymentStatus>[1][number]["payment_status"];
const attempts = (...statuses: Attempt[]) => statuses.map((payment_status) => ({ payment_status }));

describe("paymentStatus", () => {
  it("is paid only when Cashfree marks the order PAID", () => {
    expect(paymentStatus("PAID", attempts("FAILED", "SUCCESS"))).toBe("paid");
    expect(paymentStatus("ACTIVE", attempts("FAILED"))).toBe("failed");
  });

  it("stays pending while nothing was attempted or a bank confirmation is pending", () => {
    expect(paymentStatus("ACTIVE", [])).toBe("pending");
    expect(paymentStatus("ACTIVE", attempts("NOT_ATTEMPTED"))).toBe("pending");
    expect(paymentStatus("ACTIVE", attempts("FAILED", "PENDING"))).toBe("pending");
  });

  it("fails dropped, cancelled and expired orders", () => {
    expect(paymentStatus("ACTIVE", attempts("USER_DROPPED"))).toBe("failed");
    expect(paymentStatus("EXPIRED", [])).toBe("failed");
  });
});

describe("isValidWebhookSignature", () => {
  const secret = "test-secret";
  const body = '{"data":{"order":{"order_id":"IBG-1"}}}';
  const timestamp = "1700000000000";
  const signature = createHmac("sha256", secret).update(timestamp + body).digest("base64");

  it("accepts a correctly signed Cashfree webhook", () => {
    expect(isValidWebhookSignature(body, timestamp, signature, secret)).toBe(true);
  });

  it("rejects tampered bodies, wrong timestamps, bad signatures and a missing secret", () => {
    expect(isValidWebhookSignature(body.replace("IBG-1", "IBG-2"), timestamp, signature, secret)).toBe(false);
    expect(isValidWebhookSignature(body, "1", signature, secret)).toBe(false);
    expect(isValidWebhookSignature(body, timestamp, "short", secret)).toBe(false);
    expect(isValidWebhookSignature(body, timestamp, signature, undefined)).toBe(false);
  });
});
