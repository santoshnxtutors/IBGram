import Link from "next/link";
import { ArrowRight, Building2, ShieldAlert } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";
import { buildCitySchoolPath } from "@/lib/seo/slug-utils";

export function CitySchools({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-[#0B0F19]/35 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            <Building2 className="size-3.5" />
            School ecosystem
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.schoolSectionTitle}</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            School names are included only to explain parent search context and student needs. They are not affiliation
            claims.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {page.ibSchoolsCity.map((school) => {
            const schoolContent = (
              <div className="h-full rounded-2xl border border-border/50 bg-background/50 p-5 transition-all hover:border-primary/40 hover:bg-primary/5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black text-foreground">{school.name}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">{school.area}</p>
                  </div>
                  {school.pageEnabled ? <ArrowRight className="size-4 shrink-0 text-primary" /> : null}
                </div>
                <p className="mb-4 text-sm font-medium leading-relaxed text-muted-foreground">{school.description}</p>
                <div className="flex flex-wrap gap-2">
                  {school.typicalNeeds.map((need) => (
                    <span key={need} className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-primary">
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            );

            return school.pageEnabled ? (
              <Link key={school.slug} href={buildCitySchoolPath(page.citySlug, school.slug)}>
                {schoolContent}
              </Link>
            ) : (
              <div key={school.slug}>{schoolContent}</div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {page.schoolAreaMapping.map((mapping) => (
            <div key={mapping.area} className="rounded-2xl border border-border/50 bg-muted/10 p-5">
              <h3 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-secondary">{mapping.area}</h3>
              <p className="mb-3 text-sm font-semibold text-foreground/90">{mapping.schools.join(", ")}</p>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">{mapping.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
          <ShieldAlert className="mt-0.5 size-5 shrink-0 text-secondary" />
          <p className="text-sm font-semibold leading-relaxed text-foreground/90">{page.schoolDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
