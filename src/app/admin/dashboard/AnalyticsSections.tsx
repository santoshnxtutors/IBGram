import type { ReactNode } from "react";
import Link from "next/link";
import { AdminCard, AdminDataTable } from "../_components/AdminPrimitives";
import type { AdminAnalytics, Counter, SeriesPoint } from "@/lib/admin/analytics";

/**
 * The operations half of the admin dashboard: money, demand, people, the
 * queues that need an admin, the 12-week trend and the raw activity logs.
 * Pure server rendering on top of getAdminAnalytics() — no client JS.
 */

export const money = (value: number, currency = "INR") =>
  new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-IN", {
    style: "currency",
    currency: currency || "INR",
    maximumFractionDigits: 0,
    notation: Math.abs(value) >= 100000 ? "compact" : "standard",
  }).format(value || 0);

const stamp = (value: Date | string) => {
  const date = typeof value === "string" ? new Date(value) : value;
  return Number.isNaN(date.getTime()) ? "—" : date.toISOString().slice(0, 16).replace("T", " ");
};

/* ─────────────────────────── shared chrome ─────────────────────────── */

export function SectionHeading({ id, title, hint }: { id?: string; title: string; hint?: string }) {
  return (
    <div id={id} className="mb-4 scroll-mt-24 border-b border-white/[0.07] pb-3">
      <h2 className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">{title}</h2>
      {hint && <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-500">{hint}</p>}
    </div>
  );
}

export function CardHeading({ title, hint, href }: { title: string; hint?: string; href?: string }) {
  return (
    <div className="mb-3.5 flex flex-wrap items-start justify-between gap-2">
      <div className="min-w-0">
        <h3 className="text-base font-black text-white">{title}</h3>
        {hint && <p className="mt-0.5 text-xs font-medium text-slate-500">{hint}</p>}
      </div>
      {href && (
        <Link href={href} className="shrink-0 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 hover:text-emerald-200">
          Open
        </Link>
      )}
    </div>
  );
}

/** Compact KPI tile — denser than AdminMetricCard, for grouped grids. */
export function Stat({
  label,
  value,
  detail,
  tone = "slate",
  href,
  big,
}: {
  label: string;
  value: ReactNode;
  detail?: ReactNode;
  tone?: "emerald" | "amber" | "sky" | "rose" | "violet" | "slate";
  href?: string;
  big?: boolean;
}) {
  const accents = {
    emerald: "text-emerald-300",
    amber: "text-amber-300",
    sky: "text-sky-300",
    rose: "text-rose-300",
    violet: "text-violet-300",
    slate: "text-white",
  } as const;

  const body = (
    <>
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className={`mt-2 font-black leading-none ${big ? "text-3xl" : "text-2xl"} ${accents[tone]}`}>{value}</p>
      {detail && <p className="mt-2 text-[11px] font-semibold leading-snug text-slate-500">{detail}</p>}
    </>
  );

  const className = `rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors ${
    href ? "hover:border-emerald-300/30 hover:bg-white/[0.05]" : ""
  }`;

  return href ? (
    <Link href={href} className={className}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  );
}

/** Horizontal distribution bars for a groupBy result. */
export function Distribution({ rows, tone = "bg-emerald-300", empty }: { rows: Counter[]; tone?: string; empty?: string }) {
  if (!rows.length) return <p className="py-2 text-xs font-semibold text-slate-600">{empty ?? "Nothing recorded yet."}</p>;
  const max = Math.max(...rows.map((r) => r.count), 1);
  return (
    <ul className="space-y-2.5">
      {rows.map((row) => (
        <li key={row.key}>
          <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.12em]">
            <span className="text-slate-400">{row.key.replace(/_/g, " ")}</span>
            <span className="text-white">{row.count}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className={`${tone} h-full rounded-full`} style={{ width: `${Math.round((row.count / max) * 100)}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** 12-week column chart, CSS only. */
function WeeklyChart({
  series,
  valueOf,
  tone,
  format,
}: {
  series: SeriesPoint[];
  valueOf: (p: SeriesPoint) => number;
  tone: string;
  format?: (value: number) => string;
}) {
  const values = series.map(valueOf);
  const max = Math.max(...values, 1);
  const sum = values.reduce((a, b) => a + b, 0);
  return (
    <div>
      <p className="text-2xl font-black leading-none text-white">{format ? format(sum) : sum}</p>
      <div className="mt-3 flex h-20 items-end gap-[3px]">
        {series.map((point) => {
          const value = valueOf(point);
          return (
            <div
              key={point.bucket}
              className={`${tone} flex-1 rounded-sm ${value === 0 ? "opacity-20" : ""}`}
              style={{ height: `${Math.max(3, Math.round((value / max) * 100))}%` }}
              title={`${point.label}: ${format ? format(value) : value}`}
            />
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-[9px] font-bold uppercase tracking-wider text-slate-600">
        <span>{series[0]?.label}</span>
        <span>{series[series.length - 1]?.label}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────── sections ─────────────────────────── */

export function AnalyticsUnavailable({ analytics }: { analytics: AdminAnalytics }) {
  return (
    <AdminCard className="border-amber-300/20">
      <h3 className="text-base font-black text-white">Operations analytics unavailable</h3>
      <p className="mt-2 text-sm font-semibold text-amber-100/80">
        The content metrics loaded, but the business analytics query failed. The rest of the dashboard is unaffected.
      </p>
      {analytics.error && <p className="mt-3 rounded-md bg-black/30 p-3 font-mono text-xs leading-6 text-amber-200">{analytics.error}</p>}
    </AdminCard>
  );
}

/** One line listing anything that could not be read, so zeros are never mistaken for facts. */
export function DegradedNotice({ degraded }: { degraded: string[] }) {
  if (!degraded.length) return null;
  return (
    <div className="mb-5 rounded-xl border border-amber-300/25 bg-amber-300/[0.07] px-4 py-3">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">Partial data</p>
      <p className="mt-1.5 text-xs font-semibold leading-relaxed text-amber-100/80">
        These sections could not be read from the database, so they show as unavailable rather than zero:{" "}
        <span className="font-black text-amber-200">{degraded.join(", ")}</span>. Usually it means the table is not deployed yet —
        run the pending Prisma migration on this database.
      </p>
    </div>
  );
}

export function BusinessPulse({ analytics }: { analytics: AdminAnalytics }) {
  const { revenue, demand, people, engagement } = analytics;
  const momDelta = revenue.lastMonth > 0 ? Math.round(((revenue.thisMonth - revenue.lastMonth) / revenue.lastMonth) * 100) : null;

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <Stat
        big
        label="Revenue this month"
        value={money(revenue.thisMonth, revenue.currency)}
        tone={momDelta !== null && momDelta < 0 ? "amber" : "emerald"}
        href="/admin/payments"
        detail={
          momDelta === null
            ? `${money(revenue.lastMonth, revenue.currency)} last month`
            : `${momDelta >= 0 ? "+" : ""}${momDelta}% vs ${money(revenue.lastMonth, revenue.currency)} last month`
        }
      />
      <Stat
        big
        label="Revenue all time"
        value={money(revenue.paidTotal, revenue.currency)}
        href="/admin/payments"
        detail={`${revenue.paidCount} paid orders · avg ${money(revenue.averageOrder, revenue.currency)}`}
      />
      <Stat
        big
        label="Demo bookings"
        value={demand.bookingsTotal}
        tone="violet"
        href="/admin/demo-bookings"
        detail={`${demand.bookingsNext7Days} scheduled in the next 7 days`}
      />
      <Stat
        big
        label="Students & tutors"
        value={`${people.students} / ${people.tutors}`}
        tone="sky"
        href="/admin/users"
        detail={`${people.newLast7Days} new in 7 days · ${people.newLast30Days} in 30`}
      />
      <Stat
        label="Payments pending"
        value={revenue.pendingCount}
        tone={revenue.pendingCount > 0 ? "amber" : "slate"}
        href="/admin/payments"
        detail={`${money(revenue.pendingValue, revenue.currency)} unpaid · ${revenue.failedCount} failed`}
      />
      <Stat
        label="Enquiries"
        value={demand.leadsTotal}
        href="/admin/leads"
        detail={`${demand.leads.find((l) => l.key === "new")?.count ?? 0} still new`}
      />
      <Stat
        label="Unread messages"
        value={engagement.unreadMessages}
        tone={engagement.unreadMessages > 0 ? "amber" : "slate"}
        detail={`${engagement.conversations} threads · ${engagement.messages} messages`}
      />
      <Stat
        label="Tutors awaiting approval"
        value={people.tutorsAwaitingApproval}
        tone={people.tutorsAwaitingApproval > 0 ? "amber" : "emerald"}
        href="/admin/tutor-signups"
        detail={`${people.activeSessions} active sessions right now`}
      />
    </div>
  );
}

export function NeedsAttention({ analytics }: { analytics: AdminAnalytics }) {
  const queues = analytics.queues;
  const open = queues.filter((q) => q.urgent && !q.unavailable);

  return (
    <AdminCard>
      <CardHeading
        title="Needs your attention"
        hint={open.length ? `${open.length} queue${open.length === 1 ? "" : "s"} with work waiting.` : "All clear — nothing is waiting on an admin."}
      />
      <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
        {queues.map((q) =>
          q.unavailable ? (
            <div key={q.label} className="rounded-xl border border-white/[0.07] bg-black/20 p-4 opacity-60">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-black text-slate-400">{q.label}</p>
                <span className="text-xs font-black uppercase tracking-wider text-slate-600">n/a</span>
              </div>
              <p className="mt-2 text-[11px] font-semibold leading-relaxed text-slate-600">Table not deployed on this database.</p>
            </div>
          ) : (
            <Link
              key={q.label}
              href={q.href}
              className={`group rounded-xl border p-4 transition-colors ${
                q.urgent ? "border-amber-300/30 bg-amber-300/[0.07] hover:border-amber-300/60" : "border-white/10 bg-black/20 hover:border-emerald-300/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-black text-white">{q.label}</p>
                <span className={`text-2xl font-black leading-none ${q.urgent ? "text-amber-200" : "text-slate-600"}`}>{q.count}</span>
              </div>
              <p className="mt-2 text-[11px] font-semibold leading-relaxed text-slate-500">{q.detail}</p>
            </Link>
          ),
        )}
      </div>
    </AdminCard>
  );
}

export function TrendCharts({ analytics }: { analytics: AdminAnalytics }) {
  const { series, revenue } = analytics;
  return (
    <AdminCard>
      <CardHeading title="Last 12 weeks" hint="Weekly buckets from Monday, straight from User, DemoBooking and Payment rows." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Student signups", valueOf: (p: SeriesPoint) => p.students, tone: "bg-emerald-300" },
          { label: "Tutor signups", valueOf: (p: SeriesPoint) => p.tutors, tone: "bg-sky-300" },
          { label: "Demo bookings", valueOf: (p: SeriesPoint) => p.bookings, tone: "bg-violet-300" },
        ].map((chart) => (
          <div key={chart.label} className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{chart.label}</p>
            <WeeklyChart series={series} valueOf={chart.valueOf} tone={chart.tone} />
          </div>
        ))}
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">Paid revenue</p>
          <WeeklyChart series={series} valueOf={(p) => p.revenue} tone="bg-amber-300" format={(v) => money(v, revenue.currency)} />
        </div>
      </div>
    </AdminCard>
  );
}

export function Breakdowns({ analytics }: { analytics: AdminAnalytics }) {
  const { demand, people, engagement, content, logs } = analytics;
  return (
    <>
      <div className="grid gap-4 xl:grid-cols-4">
        <AdminCard>
          <CardHeading title="Demo bookings" href="/admin/demo-bookings" />
          <Distribution rows={demand.bookings} />
        </AdminCard>
        <AdminCard>
          <CardHeading title="Enquiries" href="/admin/leads" />
          <Distribution rows={demand.leads} tone="bg-sky-300" />
        </AdminCard>
        <AdminCard>
          <CardHeading title="Student signups" href="/admin/student-signups" />
          <Distribution rows={people.studentProfiles} tone="bg-violet-300" empty="Not deployed on this database yet." />
        </AdminCard>
        <AdminCard>
          <CardHeading title="Tutor reviews" href="/admin/teacher-reviews" />
          <Distribution rows={engagement.reviews} tone="bg-amber-300" />
        </AdminCard>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-4">
        <AdminCard>
          <CardHeading title="Blog posts" href="/admin/blog" />
          <Distribution rows={content.blogPosts} />
        </AdminCard>
        <AdminCard>
          <CardHeading title="Job applications" href="/admin/job-applications" hint={`${content.jobs} job posts live`} />
          <Distribution rows={content.jobApplications} tone="bg-sky-300" />
        </AdminCard>
        <AdminCard>
          <CardHeading title="CSV imports" href="/admin/imports" />
          <Distribution rows={content.imports} tone="bg-violet-300" />
        </AdminCard>
        <AdminCard>
          <CardHeading title="System health" />
          <ul className="space-y-2.5 text-sm font-bold">
            {[
              ["Analytics query", `${analytics.dbLatencyMs} ms`, analytics.dbLatencyMs > 2500 ? "text-amber-200" : "text-emerald-200"],
              ["Active sessions", String(people.activeSessions), "text-white"],
              ["Failed logins (24h)", String(logs.failedLogins24h), logs.failedLogins24h > 10 ? "text-rose-300" : "text-white"],
              ["Generation jobs", String(content.generationJobs.reduce((a, c) => a + c.count, 0)), "text-white"],
              ["Snapshot", stamp(analytics.generatedAt), "text-slate-400"],
            ].map(([label, value, tone]) => (
              <li key={label} className="flex items-center justify-between gap-3 text-slate-400">
                <span>{label}</span>
                <span className={tone}>{value}</span>
              </li>
            ))}
          </ul>
        </AdminCard>
      </div>
    </>
  );
}

export function ActivityLogs({ analytics }: { analytics: AdminAnalytics }) {
  const { logs } = analytics;
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <AdminCard>
        <CardHeading title="Sign-in log" hint="Every login attempt, successful or not." href="/admin/users" />
        <AdminDataTable
          columns={["Time", "Email", "Result", "IP"]}
          empty="No login attempts recorded yet."
          rows={logs.logins.map((l) => [
            stamp(l.createdAt),
            <span key={`e-${l.id}`} className="font-mono text-xs text-slate-300">{l.email ?? "—"}</span>,
            <span key={`r-${l.id}`} className={l.success ? "font-black text-emerald-300" : "font-black text-rose-300"}>
              {l.success ? "success" : l.reason || "failed"}
            </span>,
            <span key={`i-${l.id}`} className="font-mono text-xs text-slate-500">{l.ipAddress ?? "—"}</span>,
          ])}
        />
      </AdminCard>

      <AdminCard>
        <CardHeading title="New accounts" hint="Student and tutor signups as they arrive." href="/admin/users" />
        <AdminDataTable
          columns={["Time", "Email", "Type", "Status"]}
          empty="No accounts yet."
          rows={logs.signups.map((u) => [
            stamp(u.createdAt),
            <span key={`e-${u.id}`} className="font-mono text-xs text-slate-300">{u.email}</span>,
            <span key={`t-${u.id}`} className="font-black uppercase tracking-wider text-emerald-300">{u.accountType ?? "staff"}</span>,
            u.status,
          ])}
        />
      </AdminCard>

      <AdminCard>
        <CardHeading title="Payment log" hint="Every order, paid or not." href="/admin/payments" />
        <AdminDataTable
          columns={["Time", "Customer", "Tutor", "Amount", "Status"]}
          empty="No payments recorded yet."
          rows={logs.payments.map((p) => [
            stamp(p.createdAt),
            p.customerName,
            p.tutorName ?? "—",
            <span key={`a-${p.id}`} className="font-black text-white">{money(p.amount, p.currency)}</span>,
            <span
              key={`s-${p.id}`}
              className={`font-black uppercase tracking-wider ${
                p.status === "paid" ? "text-emerald-300" : p.status === "failed" ? "text-rose-300" : "text-amber-300"
              }`}
            >
              {p.status}
            </span>,
          ])}
        />
      </AdminCard>

      <AdminCard>
        <CardHeading title="Demo booking log" hint="Who booked whom, and where it got to." href="/admin/demo-bookings" />
        <AdminDataTable
          columns={["Booked", "Student", "Tutor", "Subject", "Status"]}
          empty="No demo bookings yet."
          rows={logs.bookings.map((b) => [
            stamp(b.createdAt),
            b.studentName,
            b.tutorName,
            b.subject,
            <span
              key={`s-${b.id}`}
              className={`font-black uppercase tracking-wider ${
                b.status === "completed" || b.status === "confirmed"
                  ? "text-emerald-300"
                  : b.status === "cancelled"
                    ? "text-rose-300"
                    : "text-amber-300"
              }`}
            >
              {b.status}
            </span>,
          ])}
        />
      </AdminCard>

      <AdminCard>
        <CardHeading title="Enquiry log" hint="Contact form submissions and the page they came from." href="/admin/leads" />
        <AdminDataTable
          columns={["Time", "Name", "Email", "Source", "Status"]}
          empty="No enquiries yet."
          rows={logs.leads.map((l) => [
            stamp(l.createdAt),
            l.name,
            <span key={`e-${l.id}`} className="font-mono text-xs text-slate-300">{l.email}</span>,
            <span key={`s-${l.id}`} className="font-mono text-xs text-slate-500">{l.sourcePage ?? l.inquiryType ?? "—"}</span>,
            <span key={`st-${l.id}`} className={l.status === "new" ? "font-black text-amber-300" : "font-semibold text-slate-400"}>
              {l.status}
            </span>,
          ])}
        />
      </AdminCard>

      <AdminCard>
        <CardHeading title="Review submissions" hint="Reviews students send from a tutor's share link or QR." href="/admin/teacher-reviews" />
        <AdminDataTable
          columns={["Time", "Author", "Tutor", "Rating", "Status"]}
          empty="No tutor reviews submitted yet."
          rows={logs.reviews.map((r) => [
            stamp(r.createdAt),
            r.authorName,
            r.tutorName,
            <span key={`r-${r.id}`} className="font-black text-amber-300">{"★".repeat(Math.max(1, Math.min(5, r.rating)))}</span>,
            <span key={`s-${r.id}`} className={r.status === "published" ? "font-black text-emerald-300" : "font-black text-amber-300"}>
              {r.status === "review" ? "pending" : r.status}
            </span>,
          ])}
        />
      </AdminCard>
    </div>
  );
}
