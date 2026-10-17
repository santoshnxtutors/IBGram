"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState, HeaderPill, PageHeader, SectionCard, StatTile } from "@/components/dashboard/ui";
import { fetchTutorOverview, money, type TutorOverview } from "@/lib/tutor/overview";
import { CalendarCheck, Loader2, Receipt, ScrollText, Wallet } from "lucide-react";

const day = (iso: string | null) =>
  iso ? new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "—";

export default function TutorEarningsPage() {
  const [overview, setOverview] = useState<TutorOverview | null>(null);

  useEffect(() => {
    fetchTutorOverview().then(setOverview);
  }, []);

  const e = overview?.earnings;
  const rate = overview?.tutor?.hourlyRate ?? null;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={<HeaderPill icon={Wallet}>Earnings</HeaderPill>}
        title="Your earnings"
        subtitle="Payments students have made for your classes on IB Gram. Payouts and the fee split are covered in the tutor policy."
        actions={
          <Link href="/tutor/policy">
            <Button className="h-11 gap-2 rounded-xl bg-white font-bold text-primary hover:bg-white/90">
              <ScrollText className="size-4" /> Payout policy
            </Button>
          </Link>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatTile
          label="This month"
          value={e ? money(e.thisMonth, e.currency) : "—"}
          icon={CalendarCheck}
          tone="emerald"
          hint="Paid since the 1st"
        />
        <StatTile label="All time" value={e ? money(e.total, e.currency) : "—"} icon={Wallet} tone="primary" />
        <StatTile
          label="Your listed rate"
          value={rate !== null && overview?.tutor ? money(rate, overview.tutor.currency) : "—"}
          icon={Receipt}
          tone="orange"
          href="/tutor/profile"
          hint="Per hour, shown on your profile"
        />
      </div>

      <SectionCard
        title="Payments received"
        description="Each row is a completed payment for your classes, newest first."
        icon={Receipt}
        bodyClassName="space-y-3"
      >
        {!overview ? (
          <p className="flex items-center gap-2 py-4 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Loading your payments…
          </p>
        ) : !e?.payments.length ? (
          <EmptyState icon={Wallet} title="No payments yet">
            When a student pays for your classes, the payment and its invoice number show up here.
          </EmptyState>
        ) : (
          <ul className="divide-y divide-border/50 overflow-hidden rounded-2xl border border-border/60">
            {e.payments.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3.5">
                <div className="min-w-0">
                  <p className="truncate font-bold text-foreground">{p.customerName}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {day(p.paidAt)} · <span className="font-mono">{p.orderId}</span>
                  </p>
                  {p.note && <p className="truncate text-xs text-muted-foreground">{p.note}</p>}
                </div>
                <p className="shrink-0 text-base font-black text-emerald-700">{money(p.amount, p.currency)}</p>
              </li>
            ))}
          </ul>
        )}
      </SectionCard>
    </div>
  );
}
