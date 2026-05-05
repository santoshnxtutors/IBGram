import Link from "next/link";
import { ArrowRight, MapPin, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityHero({ page }: { page: CitySeoPage }) {
  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-14 md:pt-14 md:pb-16">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="space-y-7 lg:col-span-7">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary glassmorphism">
              <span className="mr-2 flex size-2 rounded-full bg-primary" />
              City-wise IB tutoring
            </div>

            <div className="space-y-5">
              <p className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <MapPin className="size-4 text-secondary" />
                {page.cityName}, {page.stateName}
              </p>
              <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                {page.h1}
              </h1>
              <p className="max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                {page.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/contact-us/"
                className="shimmer-btn inline-flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {page.primaryCtaText}
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/tutors/"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30"
              >
                {page.secondaryCtaText}
              </Link>
            </div>

            <div className="grid gap-3 border-t border-border/50 pt-7 sm:grid-cols-2">
              {page.trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm font-semibold text-foreground/90">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[2rem] border border-white/10 bg-[#0B0F19]/60 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <SearchCheck className="size-5" />
                </div>
                <div>
                  <h2 className="text-xl font-black tracking-tight text-foreground">Match Brief</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">What IB Gram checks</p>
                </div>
              </div>

              <dl className="space-y-4">
                {[
                  ["Programmes", page.ibProgramsAvailable.map((program) => program.slug.toUpperCase()).join(", ")],
                  ["Subjects", page.subjectsWithStrongInventory.join(", ")],
                  ["Modes", modeSummary(page)],
                  ["Review time", page.averageMatchingTime],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-border/50 bg-muted/10 p-4">
                    <dt className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary">{label}</dt>
                    <dd className="text-sm font-semibold leading-relaxed text-foreground/90">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-secondary/20 bg-secondary/10 p-4">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-secondary" />
                <p className="text-sm font-semibold leading-relaxed text-foreground/90">{page.localCtaText}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function modeSummary(page: CitySeoPage): string {
  return [
    page.homeTutorAvailable ? "home" : undefined,
    page.onlineTutorAvailable ? "online" : undefined,
    page.hybridTutorAvailable ? "hybrid" : undefined,
  ]
    .filter(Boolean)
    .join(", ");
}
