import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * The shared look of the student and tutor dashboards: a gradient header band,
 * stat tiles, section cards and empty states. One file so both roles stay in
 * step instead of drifting apart card by card.
 */

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
  avatar,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  /** Profile photo shown beside the title. */
  avatar?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#132f74_0%,#1c47a8_45%,#2b6fd8_100%)] px-6 py-7 text-white shadow-[0_18px_40px_-24px_rgba(19,47,116,0.8)] sm:px-8 sm:py-9">
      {/* Soft orange bloom in the corner keeps it on-brand without a background image. */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full bg-[#e8780c]/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-28 left-1/3 size-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {avatar && (
            <div className="shrink-0 rounded-full bg-white/10 p-1 ring-1 ring-white/25 shadow-[0_12px_34px_-14px_rgba(0,0,0,0.65)]">
              {avatar}
            </div>
          )}
          <div className="min-w-0">
            {eyebrow && <div className="mb-2.5 flex flex-wrap items-center gap-2 text-xs font-semibold">{eyebrow}</div>}
            <h1 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-[2rem]">{title}</h1>
            {subtitle && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">{subtitle}</p>}
          </div>
        </div>
        {actions && <div className="flex shrink-0 flex-wrap items-center gap-2.5">{actions}</div>}
      </div>

      {children && <div className="relative mt-6">{children}</div>}
    </header>
  );
}

/** Pill for the header band (white-on-navy). */
export function HeaderPill({
  icon: Icon,
  children,
  tone = "default",
}: {
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
  tone?: "default" | "live" | "warn" | "muted";
}) {
  const tones = {
    default: "bg-white/15 text-white ring-white/25",
    live: "bg-emerald-400/20 text-emerald-50 ring-emerald-200/40",
    warn: "bg-[#e8780c]/25 text-orange-50 ring-orange-200/40",
    muted: "bg-white/10 text-white/70 ring-white/15",
  } as const;
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 ring-1 backdrop-blur-sm", tones[tone])}>
      {Icon && <Icon className="size-3.5" />}
      {children}
    </span>
  );
}

const TILE_TONES = {
  primary: "bg-primary/10 text-primary",
  orange: "bg-[#e8780c]/12 text-[#9a4f04]",
  emerald: "bg-emerald-500/12 text-emerald-700",
  violet: "bg-violet-500/12 text-violet-700",
  sky: "bg-sky-500/12 text-sky-700",
  rose: "bg-rose-500/12 text-rose-700",
} as const;

export function StatTile({
  label,
  value,
  unit,
  hint,
  icon: Icon,
  tone = "primary",
  href,
}: {
  label: string;
  value: ReactNode;
  unit?: string;
  hint?: ReactNode;
  icon: ComponentType<{ className?: string }>;
  tone?: keyof typeof TILE_TONES;
  href?: string;
}) {
  const Tag = (href ? "a" : "div") as "a";
  return (
    <Tag
      {...(href ? { href } : {})}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-[0_1px_2px_rgba(11,21,48,0.04)] transition-all",
        href && "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_30px_-20px_rgba(19,47,116,0.55)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[0.8rem] font-semibold leading-snug text-muted-foreground">{label}</p>
        <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", TILE_TONES[tone])}>
          <Icon className="size-4" />
        </span>
      </div>
      <p className="mt-3 text-[1.75rem] font-black leading-none tracking-tight text-foreground">
        {value}
        {unit && <span className="ml-1 text-base font-bold text-muted-foreground">{unit}</span>}
      </p>
      {hint && <p className="mt-2 text-xs font-medium leading-snug text-muted-foreground">{hint}</p>}
    </Tag>
  );
}

export function SectionCard({
  title,
  description,
  icon: Icon,
  action,
  className,
  bodyClassName,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  icon?: ComponentType<{ className?: string }>;
  action?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("rounded-2xl border border-border/60 bg-card shadow-[0_1px_2px_rgba(11,21,48,0.04)]", className)}>
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border/50 px-5 py-4 sm:px-6">
        <div className="min-w-0">
          <h2 className="flex items-center gap-2 text-base font-bold tracking-tight text-foreground">
            {Icon && <Icon className="size-4 shrink-0 text-primary" />}
            {title}
          </h2>
          {description && <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      <div className={cn("px-5 py-5 sm:px-6", bodyClassName)}>{children}</div>
    </section>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  children,
  action,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border px-6 py-10 text-center">
      <span className="grid size-11 place-items-center rounded-2xl bg-muted text-muted-foreground">
        <Icon className="size-5" />
      </span>
      <p className="text-sm font-bold text-foreground">{title}</p>
      {children && <p className="max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm">{children}</p>}
      {action}
    </div>
  );
}

const STATUS_TONES = {
  requested: "bg-amber-400/15 text-amber-800 ring-amber-500/20",
  confirmed: "bg-emerald-400/15 text-emerald-800 ring-emerald-500/20",
  completed: "bg-sky-400/15 text-sky-800 ring-sky-500/20",
  cancelled: "bg-rose-400/15 text-rose-700 ring-rose-500/20",
  published: "bg-emerald-400/15 text-emerald-800 ring-emerald-500/20",
  review: "bg-amber-400/15 text-amber-800 ring-amber-500/20",
  draft: "bg-muted text-muted-foreground ring-border",
  archived: "bg-muted text-muted-foreground ring-border",
} as const;

export function StatusPill({ status, label }: { status: keyof typeof STATUS_TONES | string; label?: string }) {
  const tone = STATUS_TONES[status as keyof typeof STATUS_TONES] ?? STATUS_TONES.draft;
  return (
    <span className={cn("inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ring-1", tone)}>
      {label ?? status}
    </span>
  );
}

/** Rating as filled stars; `size` in Tailwind size-* units. */
export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={cn("size-3.5", i <= Math.round(rating) ? "fill-[#e8780c]" : "fill-border")}>
          <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.65l5.9-.85z" />
        </svg>
      ))}
    </span>
  );
}
