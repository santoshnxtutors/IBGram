import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Archive,
  BadgeCheck,
  CheckCircle2,
  CircleDot,
  Database,
  FileText,
  Globe2,
  Link2,
  Loader2,
  Lock,
  MapPin,
  Search,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { AdminIndexFlag, AdminStatus } from "../_types/admin";

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>}
        <h1 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">{title}</h1>
        {description && <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-slate-400">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function AdminCard({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/20 backdrop-blur", className)}>{children}</section>;
}

export function AdminMetricCard({
  label,
  value,
  detail,
  tone = "emerald",
  icon,
}: {
  label: string;
  value: string | number;
  detail?: string;
  tone?: "emerald" | "amber" | "sky" | "rose" | "slate";
  icon?: ReactNode;
}) {
  const tones = {
    emerald: "text-emerald-300 bg-emerald-300/10",
    amber: "text-amber-300 bg-amber-300/10",
    sky: "text-sky-300 bg-sky-300/10",
    rose: "text-rose-300 bg-rose-300/10",
    slate: "text-slate-300 bg-slate-300/10",
  };
  return (
    <AdminCard>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-black text-white">{value}</p>
        </div>
        <div className={cn("grid size-10 place-items-center rounded-lg", tones[tone])}>{icon ?? <CircleDot className="size-5" />}</div>
      </div>
      {detail && <p className="mt-3 text-sm font-semibold text-slate-400">{detail}</p>}
    </AdminCard>
  );
}

export function AdminDataTable({
  columns,
  rows,
  empty,
}: {
  columns: string[];
  rows: Array<Array<ReactNode>>;
  empty?: string;
}) {
  if (!rows.length) return <AdminEmptyState title={empty ?? "No records found"} />;
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
          <thead className="bg-white/[0.06] text-xs font-black uppercase tracking-[0.16em] text-slate-400">
            <tr>{columns.map((column) => <th key={column} className="px-4 py-3">{column}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row, index) => (
              <tr key={index} className="bg-white/[0.02] align-top hover:bg-white/[0.05]">
                {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 text-slate-300">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminStatusBadge({ status, indexFlag }: { status?: AdminStatus; indexFlag?: AdminIndexFlag }) {
  const label = status ?? indexFlag ?? "unknown";
  const tone =
    label === "published" || label === "index"
      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
      : label === "review" || label === "draft"
        ? "border-amber-300/30 bg-amber-300/10 text-amber-200"
        : "border-slate-300/20 bg-slate-300/10 text-slate-300";
  return <span className={cn("inline-flex rounded-md border px-2 py-1 text-xs font-black uppercase tracking-[0.12em]", tone)}>{label}</span>;
}

export function AdminScoreBadge({ score }: { score: number }) {
  const tone = score >= 80 ? "text-emerald-300" : score >= 65 ? "text-amber-300" : "text-rose-300";
  return <span className={cn("font-black", tone)}>{score}</span>;
}

export function AdminSearchInput({ placeholder = "Search" }: { placeholder?: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">{placeholder}</span>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
      <input className="h-10 w-full rounded-lg border border-white/10 bg-white/[0.04] pl-9 pr-3 text-sm font-semibold text-white outline-none ring-emerald-300/30 placeholder:text-slate-500 focus:ring-2" placeholder={placeholder} />
    </label>
  );
}

export function AdminFilterBar({ children }: { children?: ReactNode }) {
  return (
    <div className="mb-4 grid gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 md:grid-cols-[1fr_auto]">
      <AdminSearchInput placeholder="Search pages, tutors, locations, keywords" />
      <div className="flex flex-wrap gap-2">{children ?? <AdminPill>All filters ready</AdminPill>}</div>
    </div>
  );
}

export function AdminTabs({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <button key={item} className={cn("rounded-lg border px-3 py-2 text-sm font-bold", index === 0 ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100" : "border-white/10 bg-white/[0.03] text-slate-300")}>
          {item}
        </button>
      ))}
    </div>
  );
}

export function AdminModal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <AdminCard className="border-amber-300/20">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Modal pattern</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-3 text-sm text-slate-400">{children}</div>
    </AdminCard>
  );
}

export function AdminDrawer({ title, children }: { title: string; children: ReactNode }) {
  return (
    <AdminCard>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-300">Drawer pattern</p>
      <h3 className="mt-2 text-lg font-black text-white">{title}</h3>
      <div className="mt-3">{children}</div>
    </AdminCard>
  );
}

export function AdminToast({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 p-3 text-sm font-bold text-emerald-100">{children}</div>;
}

export function AdminConfirmDialog({ action = "Confirm action" }: { action?: string }) {
  return (
    <div className="rounded-lg border border-rose-300/20 bg-rose-300/10 p-3 text-sm font-semibold text-rose-100">
      <AlertTriangle className="mr-2 inline size-4" />
      {action} requires a second confirmation in the connected mutation flow.
    </div>
  );
}

export function AdminEmptyState({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.025] p-8 text-center">
      <Archive className="mx-auto size-8 text-slate-500" />
      <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
      {detail && <p className="mt-2 text-sm font-medium text-slate-400">{detail}</p>}
    </div>
  );
}

export function AdminLoadingState({ label = "Loading admin data" }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-300">
      <Loader2 className="size-4 animate-spin text-emerald-300" />
      {label}
    </div>
  );
}

export function AdminJsonViewer({ value }: { value: unknown }) {
  return <pre className="max-h-[420px] overflow-auto rounded-lg border border-white/10 bg-black/30 p-4 text-xs leading-5 text-emerald-100">{JSON.stringify(value, null, 2)}</pre>;
}

export function AdminSeoScoreCard({ score, warnings }: { score: number; warnings?: string[] }) {
  return (
    <AdminCard>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">SEO score</p>
          <p className="mt-2 text-4xl font-black text-white">{score}</p>
        </div>
        <AdminQualityScoreRing score={score} />
      </div>
      {!!warnings?.length && <p className="mt-3 text-sm font-semibold text-amber-200">{warnings[0]}</p>}
    </AdminCard>
  );
}

export function AdminQualityScoreRing({ score }: { score: number }) {
  const angle = Math.max(0, Math.min(100, score)) * 3.6;
  return (
    <div className="grid size-20 place-items-center rounded-full" style={{ background: `conic-gradient(#34d399 ${angle}deg, rgba(255,255,255,0.12) 0deg)` }}>
      <div className="grid size-14 place-items-center rounded-full bg-[#080d16] text-lg font-black text-white">{score}</div>
    </div>
  );
}

export function AdminQualityChecklist({ errors, warnings }: { errors: string[]; warnings: string[] }) {
  return (
    <div className="space-y-2">
      {[...errors.map((item) => ({ item, ok: false })), ...warnings.map((item) => ({ item, ok: null }))].map(({ item, ok }) => (
        <div key={item} className="flex gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm font-semibold text-slate-300">
          {ok === false ? <XCircle className="size-4 text-rose-300" /> : ok === null ? <AlertTriangle className="size-4 text-amber-300" /> : <CheckCircle2 className="size-4 text-emerald-300" />}
          <span>{item}</span>
        </div>
      ))}
      {!errors.length && !warnings.length && (
        <div className="flex gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-3 text-sm font-bold text-emerald-100">
          <CheckCircle2 className="size-4" />
          Publish checklist passed.
        </div>
      )}
    </div>
  );
}

export function AdminButtonLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-300 px-3 text-sm font-black text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-emerald-200">
      {children}
    </Link>
  );
}

export function AdminSecondaryButton({ children }: { children: ReactNode }) {
  return <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-black text-white hover:bg-white/[0.08]">{children}</button>;
}

export function AdminPill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-300">{children}</span>;
}

export const AdminIcons = {
  AlertTriangle,
  BadgeCheck,
  Database,
  FileText,
  Globe2,
  Link2,
  Lock,
  MapPin,
  Sparkles,
  Users,
};
