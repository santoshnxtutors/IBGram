"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Cities per slide. One screenful at desktop width, still swipeable on a phone. */
const PER_SLIDE = 100;

/**
 * "Cities we serve in India": every city we cover, 100 per slide, scrolled left and right.
 * A city with no page yet renders as plain text so the list stays complete without dead links.
 */
export function CitiesSlider({ cities }: { cities: Array<{ name: string; href: string | null }> }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  const slides: Array<Array<{ name: string; href: string | null }>> = [];
  for (let i = 0; i < cities.length; i += PER_SLIDE) slides.push(cities.slice(i, i + PER_SLIDE));

  const go = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.min(Math.max(slide + direction, 0), slides.length - 1);
    setSlide(next);
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  // Keep the counter honest when someone swipes or drags instead of using the buttons.
  const onScroll = () => {
    const track = trackRef.current;
    if (track) setSlide(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold text-muted-foreground">
          {slide * PER_SLIDE + 1}-{Math.min((slide + 1) * PER_SLIDE, cities.length)} of {cities.length} cities
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={slide === 0}
            aria-label="Previous cities"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-35"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={slide >= slides.length - 1}
            aria-label="More cities"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-35"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl border border-border/60 bg-card/40 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((group, index) => (
          <ul
            key={index}
            className="grid w-full shrink-0 snap-start grid-cols-2 content-start gap-x-4 gap-y-0.5 p-5 sm:grid-cols-3 md:grid-cols-4 md:p-7 lg:grid-cols-5 xl:grid-cols-6"
          >
            {group.map((city) =>
              city.href ? (
                <li key={city.href}>
                  <Link
                    href={city.href}
                    className="block truncate rounded-md px-2 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary md:text-[15px]"
                    title={city.name}
                  >
                    {city.name}
                  </Link>
                </li>
              ) : (
                <li
                  key={`${city.name}-${index}`}
                  title={city.name}
                  className="truncate px-2 py-1.5 text-sm text-muted-foreground/70 md:text-[15px]"
                >
                  {city.name}
                </li>
              ),
            )}
          </ul>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Cities ${index * PER_SLIDE + 1} onwards`}
            onClick={() => {
              const track = trackRef.current;
              if (!track) return;
              setSlide(index);
              track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
            }}
            className={`h-1.5 rounded-full transition-all ${index === slide ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-primary/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
