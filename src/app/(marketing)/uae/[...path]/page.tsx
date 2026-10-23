import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryLanding, type LandingDirectory } from "@/components/country-seo/CountryLanding";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";
import {
  buildUaeSeoMetadata,
  buildUaeSeoSchema,
  getUaeChildLinks,
  getUaeParentLink,
  getUaeSeoPage,
  getUaeSeoRelated,
  getUaeStaticParams,
  schoolStripFor,
  toCountrySeoPage,
} from "@/lib/uae-seo";
import { getUaePageTutors, showsIgcseTutors } from "@/lib/uae-seo/tutors";
import type { UaeSeoPage } from "@/lib/uae-seo/types";

// Everything under the /uae/ hub, at both depths:
//   /uae/dubai/                                  emirate hub
//   /uae/ib-home-tutor/                          UAE-wide keyword page
//   /uae/dubai/dubai-marina/                     neighbourhood hub
//   /uae/dubai/ib-dp-physics-hl-tutor/           emirate x keyword
//   /uae/dubai/ib-maths-tutor-in-dubai-marina/   neighbourhood x keyword
//
// One catch-all rather than two routes, because Next allows only one dynamic segment name per
// path position and /uae/[city]/[slug]/ would collide with /uae/[slug]/.
//
// /uae/ itself is NOT served here: it is the hand-written country page and stays on the root
// [gurgaonSlug] route, which keeps the hub's existing URL and content untouched.
type PageProps = { params: Promise<{ path: string[] }> };

// dynamicParams stays on. With it off, only the slugs prerendered in the CI build exist and
// every other one becomes a permanent 404 - the failure that took out ~2,800 URLs in
// production on 2026-10-17. Unknown slugs still 404 through the notFound() below.
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getUaeStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path } = await params;
  const page = getUaeSeoPage(path.join("/"));
  return page ? buildUaeSeoMetadata(page) : {};
}

/**
 * The footer directory. Every page links up to its parent, down to its written children and
 * sideways to its nearest siblings, so no page in this set is ever an orphan - the thing that
 * left earlier batches sitting in "Discovered - currently not indexed".
 */
function directoryFor(page: UaeSeoPage): LandingDirectory | undefined {
  const place = page.area ?? page.city;
  const parent = getUaeParentLink(page.slug);
  const children = getUaeChildLinks(page.slug, 18);
  const related = getUaeSeoRelated(page.slug, 12);

  const groups = [
    parent ? { name: "Up a level", links: [{ label: parent.label, href: parent.href }] } : null,
    children.length > 0 ? { name: `Inside ${place}`, links: children.map((l) => ({ label: l.label, href: l.href })) } : null,
    related.length > 0 ? { name: "Related pages", links: related.map((l) => ({ label: l.label, href: l.href })) } : null,
  ].filter((g): g is { name: string; links: Array<{ label: string; href: string }> } => g !== null);

  if (groups.length === 0) return undefined;
  return {
    eyebrow: "Keep exploring",
    title: `More IB and IGCSE tutoring pages for ${place}`,
    lead: `Every page below covers a different question ${place} families ask about IB and IGCSE support, with its own syllabus detail, costs and tutor availability.`,
    groups,
  };
}

export default async function UaeHubChildPage({ params }: PageProps) {
  const { path } = await params;
  const slug = path.join("/");
  const page = getUaeSeoPage(slug);
  if (!page) notFound();

  const [reviews, { tutors }] = await Promise.all([
    getPublicHomepageReviews(),
    getUaePageTutors(showsIgcseTutors(slug)),
  ]);

  return (
    <CountryLanding
      page={toCountrySeoPage(page)}
      tutors={tutors}
      reviews={reviews ?? undefined}
      schema={buildUaeSeoSchema(page)}
      schoolStrip={schoolStripFor(page)}
      directory={directoryFor(page)}
    />
  );
}
