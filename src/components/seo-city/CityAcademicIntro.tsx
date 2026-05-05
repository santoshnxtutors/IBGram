import { BrainCircuit, CheckCircle2 } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityAcademicIntro({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            <BrainCircuit className="size-3.5" />
            Academic context
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            Why IB tutoring in <span className="text-primary">{page.cityName}</span> needs a local plan
          </h2>
        </div>

        <div className="space-y-5 lg:col-span-7">
          {[...page.cityOverview, ...page.cityAcademicIntro].map((paragraph) => (
            <p key={paragraph} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {paragraph}
            </p>
          ))}

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {[
              page.curriculumNotes,
              page.assessmentSupport,
              page.examSessionFocus,
              page.teachingModeNotes,
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/10 p-4">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-secondary" />
                <p className="text-sm font-semibold leading-relaxed text-foreground/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
