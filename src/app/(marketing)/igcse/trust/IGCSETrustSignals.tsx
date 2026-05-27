import { BookOpenCheck, ClipboardCheck, Globe2, ShieldCheck } from "lucide-react";
import { igcseTrustSignals } from "../content";

const icons = [BookOpenCheck, ClipboardCheck, Globe2, ShieldCheck];

export function IGCSETrustSignals() {
  return (
    <section className="border-y border-border/10 bg-background py-6 md:py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <p className="mb-5 text-center text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground/60">
          Practical IGCSE support for board routes, subjects and exams
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {igcseTrustSignals.map((signal, index) => {
            const Icon = icons[index] ?? ShieldCheck;

            return (
              <div
                key={signal.value}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.06]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/40 text-primary">
                  <Icon className="size-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-sm font-black leading-tight text-foreground md:text-base">{signal.value}</h2>
                  <p className="mt-1 text-xs font-semibold leading-snug text-muted-foreground">{signal.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

