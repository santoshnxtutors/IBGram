import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedFinalCTA({ page }: { page: GeneratedSeoPage }) {
  return (
    <section className="bg-[#0B0F19]/60 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-[2rem] border border-primary/20 bg-primary/10 p-6 md:p-10">
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-foreground md:text-5xl">Ready to plan IB support in {page.cityName}?</h2>
          <p className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{page.finalCta}</p>
          <Link href="/contact-us/" className="mt-7 inline-flex h-14 items-center justify-center rounded-xl bg-primary px-7 text-base font-black text-primary-foreground">
            Book a Free Academic Consultation
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
