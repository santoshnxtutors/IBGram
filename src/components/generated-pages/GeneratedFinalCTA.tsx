import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { localCityLabel } from "./city-label";

export function GeneratedFinalCTA({ page }: { page: GeneratedSeoPage }) {
  const cityLabel = localCityLabel(page.cityName);
  return (
    <section className="bg-card py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        {/* Centred and sized to the copy: full width left a large empty band beside the text. */}
        <div className="mx-auto max-w-4xl rounded-4xl border border-primary/20 bg-primary/10 p-6 text-center md:p-10">
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-foreground md:text-5xl">
            Ready to plan {page.canonicalUrl.includes("igcse") ? "IGCSE" : "IB"} support{cityLabel ? ` in ${cityLabel}` : ""}?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            {page.finalCta}
          </p>
          <Link
            href="/contact-us/"
            className="mt-7 inline-flex h-14 max-w-xs items-center justify-center whitespace-nowrap rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
