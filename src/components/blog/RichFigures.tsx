import React from "react";

/**
 * The richer half of the blog figure set: charts that draw themselves.
 *
 * Same contract as the four in Figures.tsx — real DOM and CSS animation, no
 * images, no JS, no dependencies, every motion wrapped in `motion-reduce`. Kept
 * in their own file because each is substantially more markup than a bar row,
 * and Figures.tsx was already long.
 *
 * Referenced from a blog body exactly like the others:
 *
 *   :::line Dubai IB fee trend
 *   2022 | 40 | AED 180
 *   2024 | 65 | AED 240
 *   :::
 */

const stagger = (i: number) => ({ animationDelay: `${i * 0.15}s` });

export const RICH_FIGURE_KINDS = ["line", "donut", "compare", "calendar"] as const;
export type RichFigureKind = (typeof RICH_FIGURE_KINDS)[number];

export function isRichFigureKind(kind: string): kind is RichFigureKind {
  return (RICH_FIGURE_KINDS as readonly string[]).includes(kind);
}

/** `label | value | optional display tag` */
type Rows = string[][];

/** Line chart whose stroke draws left to right, so a trend is watched, not just seen. */
function LineChart({ rows, title }: { rows: Rows; title: string }) {
  const pts = rows.map(([label, value], i) => ({ label, v: Number.parseFloat(value) || 0, i }));
  const max = Math.max(...pts.map((p) => p.v), 1);
  const min = Math.min(...pts.map((p) => p.v), 0);
  const span = max - min || 1;
  const x = (i: number) => (pts.length === 1 ? 50 : (i / (pts.length - 1)) * 100);
  const y = (v: number) => 92 - ((v - min) / span) * 78;
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(2)} ${y(p.v).toFixed(2)}`).join(" ");

  return (
    <div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-52 w-full" role="img" aria-label={title}>
        {[0, 25, 50, 75, 100].map((g) => (
          <line key={g} x1="0" y1={g} x2="100" y2={g} className="stroke-border/40" strokeWidth="0.4" />
        ))}
        <path d={`${d} L 100 100 L 0 100 Z`} className="fill-primary/10" />
        <path
          d={d}
          fill="none"
          strokeWidth="1.6"
          pathLength={1}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ibg-draw stroke-primary motion-reduce:!animate-none"
        />
        {pts.map((p, i) => (
          <circle
            key={`${p.label}-${i}`}
            cx={x(i)}
            cy={y(p.v)}
            r="1.6"
            className="ibg-rise fill-primary motion-reduce:!animate-none"
            style={stagger(i + 2)}
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between gap-2">
        {pts.map((p, i) => (
          <span key={`${p.label}-lbl-${i}`} className="flex-1 text-center text-[11px] font-bold leading-tight text-muted-foreground">
            <span className="block text-xs font-black text-primary">{rows[i][2] ?? p.v}</span>
            {p.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Ring chart whose arcs appear in sequence: for "where the hour actually goes". */
function Donut({ rows, title }: { rows: Rows; title: string }) {
  const parsed = rows.map(([label, value, tag]) => ({ label, v: Math.max(0, Number.parseFloat(value) || 0), tag }));
  const total = parsed.reduce((a, b) => a + b.v, 0) || 1;
  const circumference = 2 * Math.PI * 38;
  // Offsets computed up front rather than accumulated inside the map: mutating a
  // variable while rendering is exactly what react-hooks flags, and it would also
  // give the wrong arcs if React ever re-ran the map.
  const vals = parsed.map((s, i) => ({
    ...s,
    len: (s.v / total) * circumference,
    offset: parsed.slice(0, i).reduce((a, b) => a + (b.v / total) * circumference, 0),
  }));

  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
      <svg viewBox="0 0 100 100" className="size-44 -rotate-90" role="img" aria-label={title}>
        <circle cx="50" cy="50" r="38" fill="none" strokeWidth="14" className="stroke-muted/30" />
        {vals.map((s, i) => (
          <circle
            key={`${s.label}-${i}`}
            cx="50"
            cy="50"
            r="38"
            fill="none"
            strokeWidth="14"
            strokeDasharray={`${s.len} ${circumference - s.len}`}
            strokeDashoffset={-s.offset}
            className="ibg-rise stroke-primary motion-reduce:!animate-none"
            style={{ opacity: 1 - i * 0.16, ...stagger(i) }}
          />
        ))}
      </svg>
      <ul className="space-y-2">
        {vals.map((s, i) => (
          <li key={`${s.label}-key-${i}`} className="flex items-center gap-2.5 text-sm">
            <span aria-hidden className="size-3 shrink-0 rounded-sm bg-primary" style={{ opacity: 1 - i * 0.16 }} />
            <span className="font-bold text-foreground">{s.label}</span>
            <span className="font-black text-primary">{s.tag ?? `${Math.round((s.v / total) * 100)}%`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Head to head. First row is the two column headings; each later row is one question. */
function Compare({ rows }: { rows: Rows }) {
  const [heading, ...body] = rows;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.14em]">
        <span className="text-primary">{heading?.[1] ?? "Option A"}</span>
        <span className="text-muted-foreground">{heading?.[2] ?? "Option B"}</span>
      </div>
      {body.map(([label, a, b], i) => (
        <div key={`${label}-${i}`} className="ibg-rise motion-reduce:!animate-none" style={stagger(i)}>
          <span className="mb-1.5 block text-center text-xs font-bold text-foreground">{label}</span>
          <div className="flex items-center gap-2">
            <span className="flex flex-1 justify-end">
              <span className="rounded-lg bg-primary/15 px-3 py-2 text-right text-xs font-bold leading-snug text-foreground">{a}</span>
            </span>
            <span aria-hidden className="ibg-pulse text-sm font-black text-primary motion-reduce:!animate-none">
              vs
            </span>
            <span className="flex flex-1">
              <span className="rounded-lg bg-muted/40 px-3 py-2 text-xs font-bold leading-snug text-muted-foreground">{b}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

/** A twelve-month strip with the named months lit: an exam year at a glance. */
function Calendar({ rows }: { rows: Rows }) {
  return (
    <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-12">
      {MONTHS.map((m, i) => {
        const hit = rows.find((r) => r[0]?.trim().slice(0, 3).toLowerCase() === m.toLowerCase());
        return (
          <div
            key={m}
            className={`ibg-rise rounded-xl border p-2 text-center motion-reduce:!animate-none ${
              hit ? "border-primary/40 bg-primary/10" : "border-border/50 bg-muted/20"
            }`}
            style={stagger(i)}
          >
            <span className={`block text-[11px] font-black ${hit ? "text-primary" : "text-muted-foreground"}`}>{m}</span>
            {hit?.[1] ? <span className="mt-1 block text-[10px] font-bold leading-tight text-foreground">{hit[1]}</span> : null}
          </div>
        );
      })}
    </div>
  );
}

export function RichFigure({ kind, title, rows }: { kind: RichFigureKind; title: string; rows: Rows }) {
  if (!rows.length) return null;
  if (kind === "line") return <LineChart rows={rows} title={title} />;
  if (kind === "donut") return <Donut rows={rows} title={title} />;
  if (kind === "compare") return <Compare rows={rows} />;
  return <Calendar rows={rows} />;
}
