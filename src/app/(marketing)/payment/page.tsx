import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, XCircle, type LucideIcon } from "lucide-react";
import { Invoice } from "@/components/payment/Invoice";
import { InvoiceDownloadButton } from "@/components/payment/InvoiceDownloadButton";
import { ORDER_ID_RE, syncPayment } from "@/lib/cashfree";
import { CONTACT } from "@/lib/contact";
import { prisma } from "@/lib/db";
import { PaymentForm } from "./PaymentForm";

export const metadata: Metadata = {
  title: "Payment",
  description: "Pay IB Gram securely online in INR, USD or your own currency.",
  robots: { index: false, follow: false },
};

export default async function PaymentPage({ searchParams }: {
  searchParams: Promise<{ order_id?: string | string[]; tutor?: string | string[] }>;
}) {
  const { order_id, tutor } = await searchParams;

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10 md:py-16 print:p-0">
      {typeof order_id === "string" ? (
        <PaymentResult orderId={order_id} />
      ) : (
        <PaymentStart tutor={typeof tutor === "string" ? tutor : undefined} />
      )}
    </div>
  );
}

/** `tutor` (id or slug) comes from the "Make Payment" link on a tutor profile and preselects that tutor. */
async function PaymentStart({ tutor }: { tutor?: string }) {
  const tutors = await prisma.tutor
    .findMany({
      where: { deletedAt: null, status: "active", approved: true },
      orderBy: { displayName: "asc" },
      select: { id: true, slug: true, displayName: true },
    })
    .catch(() => []);
  const preselected = tutor ? tutors.find((t) => t.id === tutor || t.slug === tutor) : undefined;

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Make a payment</h1>
        <p className="mt-2 text-muted-foreground">
          {preselected
            ? `Paying for sessions with ${preselected.displayName}. Enter any amount in INR, USD or your own currency.`
            : "Enter any amount and pay securely in INR, USD or your own currency."}
        </p>
      </div>
      <PaymentForm tutors={tutors.map((t) => ({ id: t.id, name: t.displayName }))} defaultTutorId={preselected?.id} />
    </>
  );
}

async function PaymentResult({ orderId }: { orderId: string }) {
  // Status is re-checked with Cashfree server-side; the redirect alone is never trusted.
  // If Cashfree is unreachable, fall back to what the DB already knows.
  const payment = ORDER_ID_RE.test(orderId)
    ? await syncPayment(orderId).catch(() => prisma.payment.findUnique({ where: { orderId } }).catch(() => null))
    : null;

  if (!payment) {
    return (
      <Status icon={XCircle} tone="text-rose-600" title="Payment not found" orderId={orderId}
        text="We could not find this payment. If money was deducted, contact us with the order ID below." />
    );
  }
  if (payment.status === "paid") {
    return (
      <>
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <CheckCircle2 className="size-12 text-emerald-600" aria-hidden />
          <h1 className="text-2xl font-black md:text-3xl">Payment successful</h1>
          <p className="text-muted-foreground">Thank you, {payment.customerName}. Your invoice is ready to download.</p>
          <InvoiceDownloadButton fileName={`IBGram-Invoice-${payment.orderId}`} />
        </div>
        <Invoice payment={payment} />
        <p className="mt-6 text-center print:hidden">
          <Link href="/payment/" className="text-sm font-bold text-primary hover:underline">Make another payment</Link>
        </p>
      </>
    );
  }
  if (payment.status === "pending") {
    return (
      <Status icon={Clock} tone="text-amber-600" title="Payment pending" orderId={orderId}
        text="We have not received confirmation yet. If you completed the payment, refresh this page in a minute."
        actionHref={`/payment/?order_id=${orderId}`} actionLabel="Refresh status" />
    );
  }
  return (
    <Status icon={XCircle} tone="text-rose-600" title="Payment not completed" orderId={orderId}
      text="The payment failed or was cancelled. Please try again." />
  );
}

function Status({ icon: Icon, tone, title, text, orderId, actionHref = "/payment/", actionLabel = "Try again" }: {
  icon: LucideIcon; tone: string; title: string; text: string; orderId: string; actionHref?: string; actionLabel?: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
      <Icon className={`mx-auto size-12 ${tone}`} aria-hidden />
      <h1 className="mt-4 text-2xl font-black">{title}</h1>
      <p className="mt-2 text-muted-foreground">{text}</p>
      <p className="mt-3 break-all text-xs text-muted-foreground">Order ID: {orderId}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={actionHref} className="inline-flex h-11 items-center rounded-xl bg-primary px-6 font-bold text-primary-foreground">
          {actionLabel}
        </a>
        <a href={`mailto:${CONTACT.email}?subject=Payment%20${orderId}`} className="inline-flex h-11 items-center rounded-xl border border-border px-6 font-bold">
          Contact support
        </a>
      </div>
    </div>
  );
}
