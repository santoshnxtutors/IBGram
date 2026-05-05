import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityFinalCTA({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="container mx-auto rounded-[2rem] border border-primary/20 bg-primary/10 p-6 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <MessageSquare className="size-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em]">Next step</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Need an IB tutor in {page.cityName}?
            </h2>
            <p className="mt-4 text-base font-semibold leading-relaxed text-foreground/85 md:text-lg">{page.bottomCtaText}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              href="/contact-us/"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-7 text-sm font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {page.primaryCtaText}
              <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href="/tutors/"
              className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background/60 px-7 text-sm font-black text-foreground transition-all hover:border-secondary/50"
            >
              View tutors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
