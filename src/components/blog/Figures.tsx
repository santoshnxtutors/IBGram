import React from "react";

/**
 * Inline animated SVG figures for blog bodies, referenced from markdown as
 * `:::figure <name>:::`. Everything is real DOM + CSS animation — no images,
 * no JS, no dependencies — so figures are crawlable, weigh nothing, and carry
 * their own accessible text. Motion is wrapped in a `motion-reduce` guard.
 */

type FigureProps = { caption?: string };

function Frame({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-9 overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-5 md:p-7">
      {children}
      <figcaption className="mt-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {caption ?? title}
      </figcaption>
    </figure>
  );
}

/** Marks earned step-by-step: bars grow to show method marks beat the answer. */
function MarkBreakdown({ caption }: FigureProps) {
  const rows = [
    { label: "Correct formula quoted", marks: 1, pct: 25 },
    { label: "Substitution shown", marks: 1, pct: 50 },
    { label: "Correct manipulation", marks: 1, pct: 75 },
    { label: "Final answer + units", marks: 1, pct: 100 },
  ];
  return (
    <Frame title="How a 4-mark question is actually awarded" caption={caption}>
      <div className="space-y-3.5">
        {rows.map((r, i) => (
          <div key={r.label} className="flex items-center gap-3">
            <span className="w-40 shrink-0 text-xs font-bold text-foreground md:w-56 md:text-sm">{r.label}</span>
            <span className="relative h-7 flex-1 overflow-hidden rounded-lg bg-muted/30">
              <span
                className="ibg-bar absolute inset-y-0 left-0 rounded-lg bg-primary/70 motion-reduce:!animate-none"
                style={{ ["--ibg-w" as string]: `${r.pct}%`, animationDelay: `${i * 0.22}s` }}
              />
            </span>
            <span className="w-10 shrink-0 text-right text-xs font-black text-primary">+{r.marks}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
        Three of the four marks are gone before you ever reach the answer.
      </p>
    </Frame>
  );
}

/** The 3-phase study system, drawn as a cycle rather than a list. */
function ThreePhaseSystem({ caption }: FigureProps) {
  const phases = [
    { n: "1", name: "Foundation", detail: "One topic. Understand, then drill." },
    { n: "2", name: "Integration", detail: "Mix topics. Break the pattern." },
    { n: "3", name: "Simulation", detail: "Full paper. Clock running." },
  ];
  return (
    <Frame title="The 3-phase study cycle" caption={caption}>
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {phases.map((p, i) => (
          <React.Fragment key={p.n}>
            <div
              className="ibg-rise flex-1 rounded-2xl border border-primary/25 bg-primary/5 p-4 text-center motion-reduce:!animate-none"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <span className="mx-auto mb-2 flex size-9 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                {p.n}
              </span>
              <span className="block text-sm font-black text-foreground">{p.name}</span>
              <span className="mt-1 block text-xs font-medium leading-snug text-muted-foreground">{p.detail}</span>
            </div>
            {i < phases.length - 1 && (
              <span aria-hidden className="ibg-pulse self-center text-xl font-black text-primary motion-reduce:!animate-none">
                <span className="hidden md:inline">→</span>
                <span className="md:hidden">↓</span>
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
        It is a loop, not a ladder — every weak topic re-enters at Phase 1.
      </p>
    </Frame>
  );
}

/** Grade-boundary band: where a 6 ends and a 7 begins. */
function GradeBoundary({ caption }: FigureProps) {
  return (
    <Frame title="Where the 7 boundary usually sits" caption={caption}>
      <div className="relative h-14 w-full overflow-hidden rounded-xl bg-muted/30">
        <span className="absolute inset-y-0 left-0 w-[62%] bg-secondary/25" />
        <span
          className="ibg-bar absolute inset-y-0 left-[62%] bg-primary/70 motion-reduce:!animate-none"
          style={{ ["--ibg-w" as string]: "38%" }}
        />
        <span className="absolute inset-y-0 left-[62%] w-0.5 bg-foreground/60" />
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-black text-foreground/70">
          Grade 6 band
        </span>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black text-foreground">
          Grade 7 · ~70–85%
        </span>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
        The gap between a 6 and a 7 is often 6–10 raw marks across three papers — roughly two marks per paper.
      </p>
    </Frame>
  );
}

/** Signature block: the stroke draws itself in. */
function SignatureAjay({ caption }: FigureProps) {
  return (
    <figure className="my-10 rounded-3xl border border-primary/20 bg-card/40 p-7 text-center">
      <svg
        viewBox="0 0 320 90"
        role="img"
        aria-label="Signature of Ajay Vatsyayan, IB Mathematics mentor"
        className="mx-auto h-20 w-full max-w-[320px]"
      >
        <path
          className="ibg-draw motion-reduce:!animate-none"
          d="M14 66 C34 20 44 18 50 40 C55 60 46 70 40 66 C33 61 46 44 70 44 C86 44 84 66 96 66 C110 66 108 28 122 28 C132 28 128 52 138 58 C146 63 156 44 168 44 C178 44 176 62 186 64 C198 66 200 30 214 30 C226 30 220 58 232 62 C244 66 254 46 268 46 C282 46 288 58 306 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          style={{ color: "var(--ibg-sig, currentColor)" }}
        />
      </svg>
      <figcaption className="mt-2">
        <span className="block text-base font-black tracking-tight text-foreground">Ajay Vatsyayan</span>
        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {caption ?? "IB Mathematics Mentor · IB Gram"}
        </span>
      </figcaption>
    </figure>
  );
}

const FIGURES: Record<string, React.ComponentType<FigureProps>> = {
  "mark-breakdown": MarkBreakdown,
  "three-phase-system": ThreePhaseSystem,
  "grade-boundary": GradeBoundary,
  "signature-ajay": SignatureAjay,
};

export function BlogFigure({ name, caption }: { name: string; caption?: string }) {
  const Cmp = FIGURES[name];
  if (!Cmp) return null;
  return <Cmp caption={caption} />;
}

export function isKnownFigure(name: string): boolean {
  return Object.prototype.hasOwnProperty.call(FIGURES, name);
}

/* Data figures: written in the post body as `:::bars <title>` + `label | value` rows + `:::`. */

const DATA_FIGURE_KINDS = ["bars", "steps", "stats", "timeline"] as const;
export type DataFigureKind = (typeof DATA_FIGURE_KINDS)[number];

export function isDataFigureKind(kind: string): kind is DataFigureKind {
  return (DATA_FIGURE_KINDS as readonly string[]).includes(kind);
}

const stagger = (i: number) => ({ animationDelay: `${i * 0.15}s` });

export function DataFigure({
  kind,
  title,
  rows,
  note,
}: {
  kind: DataFigureKind;
  title: string;
  rows: string[][];
  note?: string;
}) {
  if (!rows.length) return null;
  return (
    <Frame title={title}>
      {kind === "bars" && (
        <div className="space-y-3.5">
          {rows.map(([label, value, tag], i) => {
            const pct = Math.min(100, Math.max(4, Number.parseFloat(value) || 0));
            return (
              <div key={label + i} className="flex items-center gap-3">
                <span className="w-32 shrink-0 text-xs font-bold text-foreground sm:w-48 md:w-56 md:text-sm">{label}</span>
                <span className="relative h-7 flex-1 overflow-hidden rounded-lg bg-muted/30">
                  <span
                    className="ibg-bar absolute inset-y-0 left-0 rounded-lg bg-primary/70 motion-reduce:!animate-none"
                    style={{ ["--ibg-w" as string]: `${pct}%`, ...stagger(i) }}
                  />
                </span>
                <span className="w-16 shrink-0 text-right text-xs font-black text-primary">{tag ?? value}</span>
              </div>
            );
          })}
        </div>
      )}
      {kind === "steps" && (
        <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {rows.map(([name, detail], i) => (
            <React.Fragment key={name + i}>
              <div
                className="ibg-rise flex-1 rounded-2xl border border-primary/25 bg-primary/5 p-4 text-center motion-reduce:!animate-none"
                style={stagger(i)}
              >
                <span className="mx-auto mb-2 flex size-9 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                  {i + 1}
                </span>
                <span className="block text-sm font-black text-foreground">{name}</span>
                {detail && <span className="mt-1 block text-xs font-medium leading-snug text-muted-foreground">{detail}</span>}
              </div>
              {i < rows.length - 1 && (
                <span aria-hidden className="ibg-pulse self-center text-xl font-black text-primary motion-reduce:!animate-none">
                  <span className="hidden md:inline">→</span>
                  <span className="md:hidden">↓</span>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
      {kind === "stats" && (
        <dl className={`grid grid-cols-2 gap-3 ${rows.length >= 3 ? "md:grid-cols-3" : ""} ${rows.length >= 4 ? "lg:grid-cols-4" : ""}`}>
          {rows.map(([value, label], i) => (
            <div
              key={value + i}
              className="ibg-rise flex flex-col-reverse rounded-2xl border border-primary/25 bg-primary/5 p-4 text-center motion-reduce:!animate-none"
              style={stagger(i)}
            >
              <dt className="mt-1 text-xs font-bold leading-snug text-muted-foreground">{label}</dt>
              <dd className="text-2xl font-black tracking-tight text-primary md:text-3xl">{value}</dd>
            </div>
          ))}
        </dl>
      )}
      {kind === "timeline" && (
        <ol className="relative ml-2 space-y-5 border-l-2 border-primary/25 pl-6">
          {rows.map(([when, what], i) => (
            <li key={when + i} className="ibg-rise relative motion-reduce:!animate-none" style={stagger(i)}>
              <span
                aria-hidden
                className="ibg-pulse absolute -left-[33px] top-1 size-4 rounded-full border-2 border-background bg-primary motion-reduce:!animate-none"
              />
              <span className="block text-xs font-black uppercase tracking-[0.14em] text-primary">{when}</span>
              {what && <span className="mt-1 block text-sm font-medium leading-relaxed text-foreground">{what}</span>}
            </li>
          ))}
        </ol>
      )}
      {note && <p className="mt-4 text-center text-sm font-medium text-muted-foreground">{note}</p>}
    </Frame>
  );
}
