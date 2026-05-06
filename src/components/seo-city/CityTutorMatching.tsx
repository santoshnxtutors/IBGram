import { ClipboardCheck, Sparkles } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForCity } from "@/lib/tutors/tutor-location-matching";

export function CityTutorMatching({ page }: { page: CitySeoPage }) {
  const context = { curriculum: "IB" as const, pageType: "city" as const, citySlug: page.citySlug };
  const result = getTutorsForCity(page.citySlug, { curriculum: "IB", limit: 6 });

  return (
    <>
      <section className="bg-[#0B0F19]/35 py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <ClipboardCheck className="size-3.5" />
              Matching process
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              How IB Gram matches {page.cityName} students
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground">
              The goal is not to show a long list. The goal is to narrow the search to tutors who fit the student&apos;s
              programme, subject level, timing, location and learning need.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-8">
            {page.matchingProcessSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-border/50 bg-background/50 p-5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                  {index + 1}
                </div>
                <p className="text-base font-semibold leading-relaxed text-foreground/90">{step}</p>
              </div>
            ))}

            <div className="flex items-start gap-3 rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-secondary" />
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                {page.averageMatchingTime} Demo classes are available where the tutor schedule and subject requirement
                permit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TutorAvailabilitySection
        title={`IB tutors currently mapped to ${page.cityName}`}
        description={buildTutorAvailabilityIntro({
          curriculum: "IB",
          cityName: page.cityName,
          areas: page.premiumAreas.map((area) => area.name),
          matchSummary: result.matchSummary,
        })}
        result={result}
        context={context}
      />
    </>
  );
}
