import type { Metadata } from "next";
import Link from "next/link";
import { CountryLanding } from "@/components/country-seo/CountryLanding";
import { buildCountrySeoMetadata } from "@/lib/country-seo";
import { india } from "@/lib/country-seo/countries/india";
import { getIndiaKeywordDirectory } from "@/lib/india-keywords";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";

// /india/ - the India country landing page, plus a flat link grid of every /india/<slug>/ keyword
// page. That grid is what gives those 100 pages their internal links; without it Google finds them
// only through the sitemap and leaves them "Discovered - currently not indexed".
// This static route takes precedence over the root [gurgaonSlug] segment, which no longer
// generates "india" as a static param.
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return buildCountrySeoMetadata(india);
}

export default async function IndiaHubPage() {
  const [tutors, reviews] = await Promise.all([getVisibleTutorsForPage("/india/"), getPublicHomepageReviews()]);
  // Flattened: the grid runs as one continuous column flow rather than per-group cards.
  const links = getIndiaKeywordDirectory().flatMap((group) => group.links);

  return (
    <>
      <CountryLanding page={india} tutors={tutors ?? undefined} reviews={reviews ?? undefined} />
      {links.length > 0 && (
        // Sits directly above the footer: one sliding row of keyword links, no cards, no heading.
        <section className="border-t border-border/40 bg-muted/30 py-3 -mb-12 md:-mb-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* One horizontal row, native scroll-snap: drag/swipe right through all of them. */}
            <ul className="flex snap-x gap-2 overflow-x-auto pb-1.5 [scrollbar-width:thin]">
              {links.map((link) => (
                <li key={link.href} className="shrink-0 snap-start">
                  <Link
                    href={link.href}
                    className="block whitespace-nowrap rounded-full border border-border/60 bg-background px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
