import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";
import { buildCityAreaPath } from "@/lib/seo/slug-utils";

export function CityAreas({ page }: { page: CitySeoPage }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
            <MapPinned className="size-3.5" />
            Areas covered
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.areaSectionTitle}</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{page.serviceAreaText}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {page.premiumAreas.map((area) => {
            const content = (
              <div className="h-full rounded-2xl border border-border/50 bg-muted/10 p-5 transition-all hover:border-primary/40 hover:bg-muted/20">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-black text-foreground">{area.name}</h3>
                  {area.pageEnabled ? <ArrowRight className="size-4 shrink-0 text-primary" /> : null}
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{area.description}</p>
                {area.nearbyLandmarks?.length ? (
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    Near {area.nearbyLandmarks.join(", ")}
                  </p>
                ) : null}
              </div>
            );

            return area.pageEnabled ? (
              <Link key={area.slug} href={buildCityAreaPath(page.citySlug, area.slug)} className="group">
                {content}
              </Link>
            ) : (
              <div key={area.slug}>{content}</div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border/50 bg-[#0B0F19]/50 p-5">
          <h3 className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-primary">Nearby areas parents ask about</h3>
          <div className="flex flex-wrap gap-2">
            {page.nearbyAreas.map((area) => (
              <span key={area} className="rounded-full border border-border/50 bg-background/60 px-3 py-1.5 text-xs font-bold text-muted-foreground">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
