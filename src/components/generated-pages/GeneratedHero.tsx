import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { HeroHighlights } from "@/components/shared/HeroHighlights";
import { BookDemoButton } from "@/components/booking/BookDemoButton";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

/**
 * National pages (/courses/*, /programmes/*) carry a country as their cityName, so the
 * location chip rendered a bare "India" on pages that are not about India at all. Only
 * show the chip when it points at an actual place.
 */
const NON_LOCAL_CITY_NAMES = new Set(["india", "global", "worldwide", "international"]);


export function GeneratedHero({ page }: { page: GeneratedSeoPage }) {
  const cityName = NON_LOCAL_CITY_NAMES.has((page.cityName ?? "").trim().toLowerCase()) ? "" : page.cityName;
  const locationLabel = [page.microLocationName, cityName].filter(Boolean).join(", ");


  return (
    <section className="relative overflow-hidden bg-background pt-6 pb-10 md:pt-8 md:pb-12">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      {/* Two-column, left-aligned: same shape as the homepage and IGCSE heroes. */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

          <div className="space-y-6 lg:col-span-7">
            <div>
              {locationLabel && (
                <p className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                  <MapPin className="size-4 text-secondary" />
                  {locationLabel}
                </p>
              )}
              <h1 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {page.h1}
              </h1>
              {page.heroSubtitle && (
                <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                  {page.heroSubtitle}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
              <BookDemoButton
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
                label={
                  <>
                    Book a Demo
                    <ArrowRight className="size-5" />
                  </>
                }
              />
              <Link
                href="/tutors/"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                View Tutors
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroHighlights />
          </div>

        </div>
      </div>
    </section>
  );
}
