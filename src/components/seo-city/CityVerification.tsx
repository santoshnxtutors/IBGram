import { ShieldCheck } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityVerification({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-[#0B0F19]/35 py-16 md:py-24">
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            <ShieldCheck className="size-3.5" />
            Tutor quality
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            Tutor verification before a {page.cityName} shortlist
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground">
            IB Gram does not treat tutoring as a directory listing. The screening process checks subject fit, teaching
            clarity and practical availability before a tutor is recommended.
          </p>
        </div>

        <div className="grid gap-4 lg:col-span-7">
          {page.tutorVerificationProcess.map((step) => (
            <div key={step} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/50 p-5">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-base font-semibold leading-relaxed text-foreground/90">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
