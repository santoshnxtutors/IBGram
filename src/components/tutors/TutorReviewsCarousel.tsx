"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { PublicTutorReview } from "@/lib/cms/public-reviews";

export function TutorReviewsCarousel({ reviews, tutorFirstName }: { reviews: PublicTutorReview[]; tutorFirstName: string }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const total = reviews.length;

  // Recompute arrow visibility whenever the scroller moves or resizes.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanPrev(scrollLeft > 4);
      setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [total]);

  if (total === 0) return null;

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-review-card]");
    const cardWidth = first?.offsetWidth ?? 320;
    const gap = 16;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="pt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            What parents and students say about <span className="text-primary">{tutorFirstName}</span>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground font-medium">
            {total} verified review{total === 1 ? "" : "s"}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Previous review"
            className="size-10 rounded-full border border-border bg-card/60 text-foreground flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Next review"
            className="size-10 rounded-full border border-border bg-card/60 text-foreground flex items-center justify-center transition-all hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <article
            key={review.id}
            data-review-card
            className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-auto flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 md:p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/60"
          >
            <div className="flex gap-0.5" aria-label={`${review.rating} star review`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-border"}`}
                />
              ))}
            </div>

            <p className="text-[15px] text-foreground/95 leading-relaxed flex-1 line-clamp-6">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-border/50">
              <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                {(review.name?.[0] ?? "•").toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-foreground truncate">{review.name}</div>
                {(review.role || review.location) && (
                  <div className="text-xs text-muted-foreground truncate">
                    {review.role}
                    {review.role && review.location ? " · " : ""}
                    {review.location}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
