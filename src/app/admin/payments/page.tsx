import Link from "next/link";
import { prisma } from "@/lib/db";
import { formatDateTime, formatMoney } from "@/lib/payment-options";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";

export const dynamic = "force-dynamic";

const STATUS_STYLE = {
  paid: "bg-emerald-400/15 text-emerald-300",
  pending: "bg-amber-400/15 text-amber-300",
  failed: "bg-rose-400/15 text-rose-300",
} as const;

const CARDS = [
  { status: "paid", label: "Paid", tone: "emerald" },
  { status: "pending", label: "Pending", tone: "amber" },
  { status: "failed", label: "Failed", tone: "sky" },
] as const;

export default async function AdminPaymentsPage({ searchParams }: { searchParams: Promise<{ status?: string | string[] }> }) {
  const { status } = await searchParams;
  const filter = CARDS.find((card) => card.status === status)?.status;

  let items: Awaited<ReturnType<typeof prisma.payment.findMany>> = [];
  let dbError: string | null = null;

  try {
    items = await prisma.payment.findMany({ orderBy: [{ createdAt: "desc" }], take: 500 });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const shown = filter ? items.filter((p) => p.status === filter) : items;
  const totals = Object.entries(
    items
      .filter((p) => p.status === "paid")
      .reduce<Record<string, number>>((sum, p) => ({ ...sum, [p.currency]: (sum[p.currency] ?? 0) + Number(p.amount) }), {}),
  )
    .map(([currency, total]) => formatMoney(total, currency))
    .join("  |  ");

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Billing"
        title="Payments"
        description="Online payments from the /payment page (Razorpay). Click a card to filter; open an invoice to view or download it."
      />
      <div className="mb-5 grid gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <Link
            key={card.status}
            // Clicking the active card again clears the filter.
            href={filter === card.status ? "/admin/payments/" : `/admin/payments/?status=${card.status}`}
            aria-current={filter === card.status ? "true" : undefined}
            className={`block rounded-xl transition hover:opacity-90 ${filter === card.status ? "ring-2 ring-emerald-300/60" : ""}`}
          >
            <AdminMetricCard label={card.label} value={items.filter((p) => p.status === card.status).length} tone={card.tone} />
          </Link>
        ))}
      </div>
      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Database not reachable" detail={dbError} />
        ) : (
          <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
              <p>
                {filter ? `Showing ${filter} payments only` : "Showing all payments"}
                {filter && (
                  <Link href="/admin/payments/" className="ml-3 font-semibold text-emerald-300 hover:underline">
                    Show all
                  </Link>
                )}
              </p>
              {totals && (
                <p>
                  Total collected: <span className="font-bold text-white">{totals}</span>
                </p>
              )}
            </div>

            {shown.length === 0 ? (
              <AdminEmptyState
                title={filter ? `No ${filter} payments` : "No payments yet"}
                detail="Payments made on the /payment page will appear here."
              />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                    <tr>
                      <th className="px-3 py-2">Date</th>
                      <th className="px-3 py-2">Customer</th>
                      <th className="px-3 py-2">Tutor</th>
                      <th className="px-3 py-2">Amount</th>
                      <th className="px-3 py-2">Status</th>
                      <th className="px-3 py-2">Method</th>
                      <th className="px-3 py-2">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {shown.map((p) => (
                      <tr key={p.id} className="align-top">
                        <td className="whitespace-nowrap px-3 py-3">{formatDateTime(p.paidAt ?? p.createdAt)}</td>
                        <td className="px-3 py-3">
                          <p className="font-semibold text-white">{p.customerName}</p>
                          <p className="text-xs text-slate-400">{p.customerEmail}</p>
                          <p className="text-xs text-slate-400">{p.customerPhone}</p>
                          {p.note && <p className="mt-1 text-xs text-slate-500">{p.note}</p>}
                        </td>
                        <td className="px-3 py-3">{p.tutorName ?? "-"}</td>
                        <td className="whitespace-nowrap px-3 py-3 font-semibold text-white">{formatMoney(Number(p.amount), p.currency)}</td>
                        <td className="px-3 py-3">
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold capitalize ${STATUS_STYLE[p.status]}`}>{p.status}</span>
                        </td>
                        <td className="px-3 py-3 capitalize">{p.paymentMethod?.replace(/_/g, " ") ?? "-"}</td>
                        <td className="px-3 py-3">
                          {p.status === "paid" ? (
                            <div className="flex flex-col gap-1.5 whitespace-nowrap">
                              <Link href={`/admin/payments/${p.orderId}/?copy=user`} className="font-semibold text-emerald-300 hover:underline">
                                User invoice
                              </Link>
                              <Link href={`/admin/payments/${p.orderId}/?copy=owner`} className="font-semibold text-amber-300 hover:underline">
                                Owner invoice
                              </Link>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-1">
                              <Link href={`/admin/payments/${p.orderId}/`} className="font-semibold text-sky-300 hover:underline">
                                Check status
                              </Link>
                              <span className="break-all text-xs text-slate-500">{p.orderId}</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </AdminCard>
    </AdminShell>
  );
}
