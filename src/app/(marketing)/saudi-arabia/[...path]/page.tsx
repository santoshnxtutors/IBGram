import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryLanding, type LandingDirectory } from "@/components/country-seo/CountryLanding";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";
import { getBlogPostsByCountry } from "@/lib/cms/blog";
import { blogPath } from "@/lib/cms/blog-path";
import {
  buildSaudiSeoMetadata,
  buildSaudiSeoSchema,
  getSaudiChildLinks,
  getSaudiParentLink,
  getSaudiSeoPage,
  getSaudiSeoRelated,
  getSaudiStaticParams,
  schoolStripFor,
  toCountrySeoPage,
} from "@/lib/saudi-seo";
import { getSaudiPageTutors, showsIgcseTutors } from "@/lib/saudi-seo/tutors";
import type { SaudiSeoPage } from "@/lib/saudi-seo/types";

// Everything under the /saudi-arabia/ hub, at both depths:
//   /saudi-arabia/riyadh/                                  city hub
//   /saudi-arabia/ib-home-tutor/                           Kingdom-wide keyword page
//   /saudi-arabia/riyadh/al-olaya/                         district hub
//   /saudi-arabia/riyadh/ib-dp-physics-hl-tutor/           city x keyword
//   /saudi-arabia/riyadh/ib-maths-tutor-in-al-olaya/       district x keyword
//
// One catch-all rather than two routes, because Next allows only one dynamic segment name per
// path position and /saudi-arabia/[city]/[slug]/ would collide with /saudi-arabia/[slug]/.
//
// /saudi-arabia/ itself is NOT served here: it is the hand-written country page and stays on
// the root [gurgaonSlug] route, which keeps the hub's existing URL and content untouched.
type PageProps = { params: Promise<{ path: string[] }> };

// dynamicParams stays on. With it off, only the slugs prerendered in the CI build exist and
// every other one becomes a permanent 404 - the failure that took out ~2,800 URLs in production
// on 2026-10-17. Unknown slugs still 404 through the notFound() below.
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getSaudiStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path } = await params;
  const page = await getSaudiSeoPage(path.join("/"));
  return page ? buildSaudiSeoMetadata(page) : {};
}

/**
 * The footer directory. Every page links up to its parent, down to its written children and
 * sideways to its nearest siblings, so no page in this set is ever an orphan - the thing that
 * left earlier batches sitting in "Discovered - currently not indexed".
 */
function directoryFor(page: SaudiSeoPage): LandingDirectory | undefined {
  const place = page.area ?? page.city;
  const parent = getSaudiParentLink(page.slug);
  // A city hub is the discovery route into its whole subtree, so it lists far more than a leaf
  // does. Riyadh has 645 descendants; a hub listing only a handful leaves most of them
  // unreachable from /saudi-arabia/ no matter how the sideways links rotate. A hub listing its
  // directory is ordinary for this page type and is what makes the set crawlable.
  const children = getSaudiChildLinks(page.slug, page.kind === "city" ? 240 : 18);
  const related = getSaudiSeoRelated(page.slug, 12);

  const groups = [
    parent ? { name: "Up a level", links: [{ label: parent.label, href: parent.href }] } : null,
    children.length > 0
      ? { name: `Inside ${place}`, links: children.map((l) => ({ label: l.label, href: l.href })) }
      : null,
    related.length > 0
      ? { name: "Related pages", links: related.map((l) => ({ label: l.label, href: l.href })) }
      : null,
  ].filter((g): g is { name: string; links: Array<{ label: string; href: string }> } => g !== null);

  if (groups.length === 0) return undefined;
  return {
    eyebrow: "Keep exploring",
    title: `More IB and IGCSE tutoring pages for ${place}`,
    lead: `Every page below covers a different question ${place} families ask about IB and IGCSE support, with its own syllabus detail, costs and tutor availability.`,
    groups,
  };
}

export default async function SaudiHubChildPage({ params }: PageProps) {
  const { path } = await params;
  const slug = path.join("/");
  const page = await getSaudiSeoPage(slug);
  if (!page) notFound();

  const [reviews, { tutors }, posts] = await Promise.all([
    getPublicHomepageReviews(),
    getSaudiPageTutors(showsIgcseTutors(slug)),
    getBlogPostsByCountry("saudi-arabia", 6),
  ]);

  return (
    <CountryLanding
      page={toCountrySeoPage(page)}
      tutors={tutors}
      reviews={reviews ?? undefined}
      schema={buildSaudiSeoSchema(page)}
      schoolStrip={schoolStripFor(page)}
      directory={directoryFor(page)}
      articles={posts.map((p) => ({
        title: p.title,
        href: blogPath(p),
        excerpt: p.excerpt,
        readingTimeMinutes: p.readingTimeMinutes,
        imageUrl: p.featuredImageUrl,
        categoryName: p.categoryName,
        publishedAt: p.publishedAt,
      }))}
    />
  );
}
