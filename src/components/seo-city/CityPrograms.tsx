import Link from "next/link";
import { ArrowRight, Layers3 } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";
import { buildCitySubpagePath } from "@/lib/seo/slug-utils";

export function CityPrograms({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-[#0B0F19]/35 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
            <Layers3 className="size-3.5" />
            PYP, MYP, DP
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.programSectionTitle}</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            IB Gram separates programme needs because PYP, MYP and DP tutoring require different teaching habits,
            different assessment awareness and different parent feedback loops.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {page.ibProgramsAvailable.map((program) => (
            <Link
              key={program.slug}
              href={buildCitySubpagePath(page.citySlug, program.slug)}
              className="group rounded-2xl border border-border/50 bg-background/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-foreground group-hover:text-primary">{program.name}</h3>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{program.ageRange}</p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mb-4 text-sm font-medium leading-relaxed text-muted-foreground">{program.description}</p>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">{program.cityNote}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
