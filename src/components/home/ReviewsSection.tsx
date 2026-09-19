"use client";

import { Quote, ShieldCheck, Star } from "lucide-react";

import { useDragCarousel } from "@/components/home/use-drag-carousel";

export type Review = {
  id: number | string;
  name: string;
  location: string;
  rating: number;
  text: string;
};

export const fallbackReviews: Review[] = [
  {
    id: 1,
    name: "Parent of a DP Math AA student",
    location: "Gurugram",
    rating: 5,
    text: "The tutor understood the Math AA HL syllabus and helped us turn revision into a weekly plan. The parent updates were clear and practical.",
  },
  {
    id: 2,
    name: "IGCSE Physics student",
    location: "Dubai",
    rating: 5,
    text: "I liked that sessions started with the topics I was actually stuck on. The practice sets made it easier to ask better questions in class.",
  },
  {
    id: 3,
    name: "Parent of an IB Economics student",
    location: "Online",
    rating: 5,
    text: "IB Gram helped us compare tutor options without pressure. We chose someone who could support essays, case studies and exam timing.",
  },
  {
    id: 4,
    name: "MYP student family",
    location: "Bangalore",
    rating: 5,
    text: "The support felt steady rather than rushed. The tutor focused on foundations first, then moved into school assessments and project work.",
  },
];

export function ReviewsSection({
  items,
  heading,
  intro,
}: {
  items?: Review[];
  /** Single-colour heading override. Country/city pages pass a location-specific one. */
  heading?: string;
  intro?: string;
}) {
  const reviews = items && items.length > 0 ? items : fallbackReviews;
  const { itemsToShow, safeActiveIdx, setActiveIdx, maxIdx, dragHandlers } = useDragCarousel(reviews.length, {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4,
  });
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-2xl text-left mb-8 md:mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">Student and parent reviews</span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
            {heading ?? "Stories from families using IB Gram"}
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            {intro ??
              "Short, practical feedback from students and parents about tutor fit, revision structure and communication."}
          </p>
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          {...dragHandlers}
        >
          <div
            className="flex gap-4 transition-transform duration-300 ease-out md:gap-5"
            style={{ transform: `translate3d(-${safeActiveIdx * (100 / itemsToShow)}%, 0, 0)` }}
          >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] shrink-0 select-none h-auto rounded-3xl border border-border bg-card p-6 md:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="size-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Quote className="size-5" />
                </div>
                <div className="flex gap-1" role="img" aria-label={`${review.rating} star review`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 text-secondary fill-current" aria-hidden />
                  ))}
                </div>
              </div>

              <p className="text-base font-medium text-foreground/90 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-7 border-t border-border pt-5">
                <div className="font-black text-sm text-foreground">{review.name}</div>
                <div className="mt-1 flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" />
                  <span>{review.location} review</span>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>

        <div className="flex justify-start gap-2 mt-8">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`group flex h-6 items-center justify-center rounded-full ${safeActiveIdx === i ? "w-8" : "w-6"}`}
              aria-label={`Reviews page ${i + 1}`}
            >
              <span
                className={`h-1 rounded-full transition-all duration-500 ${
                  safeActiveIdx === i ? "w-8 bg-secondary" : "w-1.5 bg-border group-hover:bg-secondary/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
