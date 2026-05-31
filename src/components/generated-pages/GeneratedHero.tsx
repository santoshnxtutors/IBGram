import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedHero({ page }: { page: GeneratedSeoPage }) {
  const locationLabel = [page.microLocationName, page.cityName].filter(Boolean).join(", ");

  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-14 md:pt-14 md:pb-16">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-6 text-center md:space-y-7">
          {locationLabel && (
            <p className="flex items-center justify-center gap-2 text-sm font-bold text-muted-foreground">
              <MapPin className="size-4 text-secondary" />
              {locationLabel}
            </p>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {page.h1}
          </h1>
          {page.heroSubtitle && (
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {page.heroSubtitle}
            </p>
          )}
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <Link
              href="/contact-us/"
              className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/tutors/"
              className="inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
            >
              View Tutors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
