import Image from "next/image";
import type { Payment } from "@prisma/client";
import { CONTACT } from "@/lib/contact";
import { formatDateTime, formatMoney } from "@/lib/payment-options";

// Print only the invoice: hide everything that is not the invoice or one of its ancestors.
const PRINT_CSS = `@media print {
  @page { size: A4; margin: 12mm; }
  body :not(#invoice):not(#invoice *):not(:has(#invoice)) { display: none !important; }
  #invoice { box-shadow: none !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}`;

/** IB Gram invoice. "user" is the customer's full invoice; "owner" is IB Gram's short record: name, invoice number, amount. */
export function Invoice({ payment, copy = "user" }: { payment: Payment; copy?: "user" | "owner" }) {
  const owner = copy === "owner";
  const amount = formatMoney(Number(payment.amount), payment.currency);
  const date = formatDateTime(payment.paidAt ?? payment.createdAt);
  const label = "text-[11px] font-bold uppercase tracking-widest text-[#e8780c]";
  const method = payment.paymentMethod
    ?.replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bUpi\b/g, "UPI");
  const details = [
    ["Invoice number", payment.orderId],
    ["Payment date", date],
    ["Payment method", method],
    ["Transaction ID", payment.gatewayPaymentId],
    ["Bank reference", payment.bankReference],
    ["Payment gateway", "Razorpay"],
  ].filter((row): row is [string, string] => Boolean(row[1]));

  return (
    <>
      <style>{PRINT_CSS}</style>
      <article id="invoice" className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-[#0b1530] shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#13254a] px-6 py-6 text-white sm:px-10">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="IB Gram logo" width={56} height={56} loading="eager" className="size-14 rounded-xl bg-white" />
            <div>
              <p className="text-2xl font-black tracking-tight"><span className="text-[#f7941d]">IB</span>Gram</p>
              <p className="text-xs text-white/70">IB &amp; IGCSE Tutoring</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-black uppercase tracking-[0.25em]">Invoice</p>
            {owner && <p className="text-xs font-bold uppercase tracking-widest text-[#f7941d]">Owner copy</p>}
            <p className="mt-1 break-all text-xs text-white/70">#{payment.orderId}</p>
            <span className="mt-2 inline-block rounded-full bg-emerald-400/20 px-3 py-0.5 text-xs font-bold text-emerald-300">PAID</span>
          </div>
        </div>
        <div className="h-1.5 bg-[#f7941d]" />

        {owner ? (
          <div className="px-6 py-8 sm:px-10">
            <dl className="divide-y divide-slate-100 text-sm">
              {[
                ["Invoice number", payment.orderId],
                ["Invoice date", date],
                ["Customer name", payment.customerName],
              ].map(([term, value]) => (
                <div key={term} className="flex justify-between gap-4 py-3">
                  <dt className="shrink-0 text-slate-500">{term}</dt>
                  <dd className="break-all text-right font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl bg-[#f7f9fc] px-5 py-4">
              <span className="font-bold">Amount paid</span>
              <span className="whitespace-nowrap text-2xl font-black text-[#1c47a8]">{amount}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-8 px-6 py-8 sm:px-10">
            <div className="rounded-2xl bg-[#fff4e6] px-5 py-4">
              <p className="text-lg font-black text-[#13254a]">Welcome to the IB Gram family!</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Thank you for trusting IB Gram{payment.tutorName ? ` and choosing ${payment.tutorName} as your tutor` : ""}.
                We are glad to be part of your learning journey and are here whenever you need us.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 sm:flex-row">
              <div>
                <p className={label}>Billed to</p>
                <p className="mt-2 font-bold">{payment.customerName}</p>
                <p className="text-sm text-slate-600">{payment.customerEmail}</p>
                <p className="text-sm text-slate-600">{payment.customerPhone}</p>
              </div>
              <div className="sm:text-right">
                <p className={label}>From</p>
                <p className="mt-2 font-bold">IB Gram</p>
                <p className="text-sm text-slate-600">{CONTACT.addressLine1}, {CONTACT.addressLine2}</p>
                <p className="text-sm text-slate-600">{CONTACT.addressCity}, {CONTACT.addressState} {CONTACT.addressPostal}</p>
                <p className="text-sm text-slate-600">{CONTACT.email} | {CONTACT.phoneDisplay}</p>
              </div>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#13254a] text-left text-[11px] uppercase tracking-widest text-slate-500">
                  <th className="py-2 font-bold">Description</th>
                  <th className="py-2 text-right font-bold">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-4 pr-4">
                    <p className="font-semibold">{payment.note || "IB / IGCSE tutoring services"}</p>
                    {payment.tutorName && <p className="mt-1 text-xs text-slate-500">Tutor: {payment.tutorName}</p>}
                  </td>
                  <td className="whitespace-nowrap py-4 text-right font-semibold">{amount}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="pt-4 text-right font-bold">Total paid</td>
                  <td className="whitespace-nowrap pt-4 text-right text-xl font-black text-[#1c47a8]">{amount}</td>
                </tr>
              </tfoot>
            </table>

            <div>
              <p className={label}>Payment details</p>
              <dl className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                {details.map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="shrink-0 text-slate-500">{term}</dt>
                    <dd className="break-all text-right font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}

        <div className="border-t border-slate-200 bg-[#f7f9fc] px-6 py-4 text-center text-xs text-slate-500 sm:px-10">
          {owner
            ? "IB Gram internal copy. Computer-generated invoice."
            : `This is a computer-generated invoice and does not need a signature. Questions? ${CONTACT.email} | ${CONTACT.phoneDisplay}`}
        </div>
      </article>
    </>
  );
}
