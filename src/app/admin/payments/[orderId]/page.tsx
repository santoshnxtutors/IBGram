import Link from "next/link";
import { Invoice } from "@/components/payment/Invoice";
import { InvoiceDownloadButton } from "@/components/payment/InvoiceDownloadButton";
import { ORDER_ID_RE, syncPayment } from "@/lib/razorpay";
import { prisma } from "@/lib/db";
import { AdminShell } from "../../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminPageHeader } from "../../_components/AdminPrimitives";
import { requireAdminSession } from "../../_lib/admin-auth";

export const dynamic = "force-dynamic";

const tab = "inline-flex h-10 items-center rounded-lg border px-4 text-sm font-semibold transition";
const tabIdle = "border-white/10 text-slate-300 hover:bg-white/5";
const tabActive = "border-emerald-300/40 bg-emerald-400/10 text-emerald-300";

export default async function AdminInvoicePage({ params, searchParams }: {
  params: Promise<{ orderId: string }>;
  searchParams: Promise<{ copy?: string | string[] }>;
}) {
  // Auth first: opening this page also re-checks the payment with Razorpay.
  await requireAdminSession();
  const { orderId } = await params;
  const copy = (await searchParams).copy === "owner" ? "owner" : "user";
  const payment = ORDER_ID_RE.test(orderId)
    ? await syncPayment(orderId).catch(() => prisma.payment.findUnique({ where: { orderId } }).catch(() => null))
    : null;
  const base = `/admin/payments/${orderId}/`;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Billing"
        title={payment?.status === "paid" ? (copy === "owner" ? "Owner invoice" : "User invoice") : "Payment status"}
        description={`Order ${orderId}`}
      />
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <Link href="/admin/payments/" className={`${tab} ${tabIdle}`}>All payments</Link>
        {payment?.status === "paid" && (
          <>
            <Link href={`${base}?copy=user`} className={`${tab} ${copy === "user" ? tabActive : tabIdle}`}>User invoice</Link>
            <Link href={`${base}?copy=owner`} className={`${tab} ${copy === "owner" ? tabActive : tabIdle}`}>Owner invoice</Link>
            <InvoiceDownloadButton fileName={`IBGram-${copy === "owner" ? "Owner" : "User"}-Invoice-${orderId}`} />
          </>
        )}
      </div>

      {payment?.status === "paid" ? (
        <div className="mx-auto max-w-3xl">
          <Invoice payment={payment} copy={copy} />
        </div>
      ) : (
        <AdminCard>
          <AdminEmptyState
            title={payment ? `Payment ${payment.status}` : "Payment not found"}
            detail={
              payment
                ? "Status was just re-checked with Razorpay. The invoice becomes available once the payment is paid."
                : "No payment exists with this order ID."
            }
          />
        </AdminCard>
      )}
    </AdminShell>
  );
}
