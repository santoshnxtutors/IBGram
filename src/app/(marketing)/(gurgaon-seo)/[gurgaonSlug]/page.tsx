import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GurgaonSeoLanding } from "@/components/gurgaon-seo/GurgaonSeoLanding";
import { CountryLanding } from "@/components/country-seo/CountryLanding";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import {
  buildGurgaonSeoMetadata,
  getGurgaonSeoRelated,
  getGurgaonSeoPage,
  getGurgaonSeoStaticParams,
} from "@/lib/gurgaon-seo";
import { getGurgaonKeywordPage, gurgaonKeywordSlugs } from "@/lib/gurgaon-keywords";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { buildCountrySeoMetadata, countrySeoSlugs, getCountrySeoPage } from "@/lib/country-seo";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";

// This is the site's only root-level dynamic segment, so it serves every
// top-level SEO slug: country landing pages (/usa/), the Gurgaon keyword pages
// (/ib-tutor-in-gurgaon/) and the hyperlocal Gurgaon landing pages
// (/ib-igcse-home-tutor-in-golf-course-road-gurgaon/).
// The param keeps its original name because Next.js requires one slug name per
// dynamic path position.
type PageProps = { params: Promise<{ gurgaonSlug: string }> };

// Only known slugs render; everything else 404s.
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    ...countrySeoSlugs.map((slug) => ({ gurgaonSlug: slug })),
    ...gurgaonKeywordSlugs.map((slug) => ({ gurgaonSlug: slug })),
    ...getGurgaonSeoStaticParams(),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gurgaonSlug } = await params;

  const countryPage = getCountrySeoPage(gurgaonSlug);
  if (countryPage) return buildCountrySeoMetadata(countryPage);

  const keywordPage = getGurgaonKeywordPage(gurgaonSlug);
  if (keywordPage) return buildGeneratedMetadata(keywordPage);

  const page = getGurgaonSeoPage(gurgaonSlug);
  if (!page) return {};
  return buildGurgaonSeoMetadata(page);
}

export default async function RootSeoLandingPage({ params }: PageProps) {
  const { gurgaonSlug } = await params;

  const countryPage = getCountrySeoPage(gurgaonSlug);
  if (countryPage) {
    const [tutors, reviews] = await Promise.all([
      getVisibleTutorsForPage(`/${countryPage.slug}/`),
      getPublicHomepageReviews(),
    ]);
    return <CountryLanding page={countryPage} tutors={tutors ?? undefined} reviews={reviews ?? undefined} />;
  }

  const keywordPage = getGurgaonKeywordPage(gurgaonSlug);
  if (keywordPage) {
    // Same tutors as the board's homepage (IB mirrors "/", IGCSE mirrors "/igcse/"), always in the
    // homepage's full-width card grid: IGCSETutors' narrower max-w-6xl grid sat off the page's left edge.
    const isIgcse = keywordPage.canonicalUrl.includes("igcse");
    const tutors = (await getVisibleTutorsForPage(isIgcse ? "/igcse/" : "/")) ?? undefined;
    const tutorSection = isIgcse ? (
      <TutorDiscovery
        tutors={tutors?.filter((tutor) => tutor.curriculum === "IGCSE" || tutor.curriculum === "Both")}
        heading="Subject-aware IGCSE Tutors"
        intro="Master the Cambridge and Pearson Edexcel syllabuses with tutors who have achieved exceptional results."
        linkLabel="View All Tutors"
      />
    ) : (
      <TutorDiscovery tutors={tutors} />
    );
    return <GeneratedPageRenderer page={keywordPage} tutorSection={tutorSection} />;
  }

  const page = getGurgaonSeoPage(gurgaonSlug);
  if (!page) notFound();

  // Related links: other pages in the same locality (different subject/board), capped at 4.
  const related = getGurgaonSeoRelated(page.slug, page.locality, 4);

  return <GurgaonSeoLanding page={page} related={related} />;
}
