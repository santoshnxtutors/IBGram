import Link from "next/link";
import { ArrowUpRight, Network } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";
import { groupInternalLinksByContext } from "@/lib/seo/internal-links";

const preferredContexts = [
  "IB programmes",
  "IB subjects",
  "Areas covered",
  "School ecosystem",
  "Nearby city links",
  "Platform links",
  "Tutor discovery",
  "Programmes",
  "CTA",
];

export function CityInternalLinks({ page }: { page: CitySeoPage }) {
  const groupedLinks = groupInternalLinksByContext(page.internalLinksOut);

  return (
    <section className="bg-[#0B0F19]/35 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            <Network className="size-3.5" />
            Explore next
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            Useful IB tutor links for {page.cityName}
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
            These links are crawlable and descriptive so parents can move from city context into programme, subject,
            area and nearby city pages.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {preferredContexts
            .filter((context) => groupedLinks[context]?.length)
            .map((context) => (
              <div key={context} className="rounded-2xl border border-border/50 bg-background/50 p-5">
                <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-primary">{context}</h3>
                <ul className="space-y-3">
                  {groupedLinks[context].map((link) => (
                    <li key={link.linkId}>
                      <Link
                        href={link.targetUrl}
                        className="group inline-flex items-start gap-2 text-sm font-semibold leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span>{link.anchorText}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
