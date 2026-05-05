import Link from "next/link";
import { ArrowRight, FlaskConical, Sigma } from "lucide-react";
import type { CitySeoPage, InventoryStrength } from "@/lib/seo/city-page-types";
import { buildCitySubpagePath } from "@/lib/seo/slug-utils";

export function CitySubjects({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <Sigma className="size-3.5" />
              Subject support
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.subjectSectionTitle}</h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Subject matching looks at course route, level, assessment type and where the student is stuck. A DP
              Math AA HL request is not the same as MYP mathematics or Math AI data modelling.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {page.ibSubjectsAvailable.map((subject) => (
            <Link
              href={buildCitySubpagePath(page.citySlug, subject.slug)}
              key={subject.slug}
              className="group rounded-2xl border border-border/50 bg-muted/10 p-5 transition-all hover:border-primary/40 hover:bg-muted/20"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <FlaskConical className="size-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-foreground group-hover:text-primary">{subject.name}</h3>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">{subject.level}</p>
                  </div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mb-3 text-sm font-medium leading-relaxed text-muted-foreground">{subject.description}</p>
              <p className="mb-4 text-sm font-semibold leading-relaxed text-foreground/90">{subject.cityNote}</p>
              <span className={`inline-flex rounded-lg border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${inventoryClass(subject.inventory)}`}>
                {subject.inventory} inventory
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <CoverageBlock title="Math coverage" text={page.mathCoverage} />
          <CoverageBlock title="Science coverage" text={page.scienceCoverage} />
          <CoverageBlock title="Humanities coverage" text={page.humanitiesCoverage} />
          <CoverageBlock title="Language coverage" text={page.languageCoverage} />
        </div>
      </div>
    </section>
  );
}

function CoverageBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border/50 bg-[#0B0F19]/50 p-5">
      <h3 className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">{title}</h3>
      <p className="text-sm font-medium leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function inventoryClass(inventory: InventoryStrength): string {
  if (inventory === "strong") return "border-primary/30 bg-primary/10 text-primary";
  if (inventory === "moderate") return "border-secondary/30 bg-secondary/10 text-secondary";
  return "border-border bg-muted/30 text-muted-foreground";
}
