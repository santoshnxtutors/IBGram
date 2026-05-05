import { Quote, SignalHigh } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityTestimonials({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
            <SignalHigh className="size-3.5" />
            Local proof
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            What {page.cityName} parents usually need help with
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            These are local request patterns and consultation themes. They are not fabricated named testimonials or
            guaranteed outcomes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {page.localTestimonials.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/50 bg-muted/10 p-6">
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl border border-secondary/20 bg-secondary/10 text-secondary">
                <Quote className="size-5" />
              </div>
              <h3 className="mb-3 text-lg font-black text-foreground">{item.title}</h3>
              <p className="mb-5 text-sm font-medium leading-relaxed text-muted-foreground">{item.detail}</p>
              <span className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-primary">
                {item.sourceLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
