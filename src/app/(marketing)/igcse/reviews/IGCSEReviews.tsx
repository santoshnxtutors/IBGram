import { Quote, ShieldCheck, Star } from "lucide-react";
import { igcseReviews } from "../content";

export function IGCSEReviews() {
  return (
    <section className="bg-background py-16 md:py-24" id="igcse-reviews">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Parent and student context</span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            What realistic IGCSE support feels like
          </h2>
          <p className="mt-4 text-base font-medium leading-7 text-muted-foreground">
            The goal is not to promise grades. It is to make the next study step clearer, measurable and easier to discuss at home.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {igcseReviews.map((review) => (
            <article key={review.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] md:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Quote className="size-5" />
                </div>
                <div className="flex gap-1" aria-label="5 star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-3.5 fill-current text-secondary" />
                  ))}
                </div>
              </div>
              <p className="text-base font-medium leading-relaxed text-foreground/90">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="text-sm font-black text-foreground">{review.name}</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" />
                  <span>{review.location} context</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

