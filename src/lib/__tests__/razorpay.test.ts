import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { isValidWebhookSignature, paymentStatus } from "@/lib/razorpay";
import { paymentReceiptEmail } from "@/lib/emails";
import { checkoutDisplayConfig, minorUnitFactor } from "@/lib/payment-options";

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

describe("checkoutDisplayConfig", () => {
  const hidden = (country: string) => checkoutDisplayConfig(country)?.display.hide.map((h) => h.method) ?? [];

  it("leaves the Indian checkout untouched so UPI keeps working", () => {
    expect(checkoutDisplayConfig("IN")).toBeUndefined();
  });

  it("hides the India-only rails everywhere else", () => {
    // The two +966 payments that timed out picked UPI from a Saudi phone - it can never complete.
    for (const country of ["SA", "AE", "US", "GB", "JO"]) {
      expect(hidden(country)).toContain("upi");
      expect(hidden(country)).toContain("netbanking");
    }
    expect(checkoutDisplayConfig("SA")?.display.preferences.show_default_blocks).toBe(true);
  });
});

describe("paymentReceiptEmail", () => {
  const receipt = (over: Partial<Parameters<typeof paymentReceiptEmail>[0]> = {}) =>
    paymentReceiptEmail({
      customerName: "Leen Moayed Barry",
      orderId: "order_TsdsMqRFonkUTu",
      amount: "SAR 569.00",
      paidOn: "26 Oct 2026, 2:03 pm",
      tutorName: "Preeti Malhotra",
      method: "Card",
      transactionId: "pay_TsVNdJW4VcZyXn",
      ...over,
    });

  it("carries the amount, invoice number and a download link", () => {
    const { subject, html, text } = receipt();
    expect(subject).toContain("order_TsdsMqRFonkUTu");
    for (const body of [html, text]) {
      expect(body).toContain("SAR 569.00");
      expect(body).toContain("Preeti Malhotra");
      expect(body).toContain("/payment/?order_id=order_TsdsMqRFonkUTu");
    }
  });

  it("falls back to a generic description and drops the rows it has no data for", () => {
    const { html } = receipt({ tutorName: null, description: null, method: null, transactionId: null });
    expect(html).toContain("IB / IGCSE tutoring services");
    expect(html).not.toContain("Transaction ID");
  });

  it("escapes customer-supplied text instead of injecting it as HTML", () => {
    const { html } = receipt({ customerName: "<script>x</script>", description: 'Maths "HL" & SL' });
    expect(html).not.toContain("<script>");
    expect(html).toContain("Maths &quot;HL&quot; &amp; SL");
  });
});
