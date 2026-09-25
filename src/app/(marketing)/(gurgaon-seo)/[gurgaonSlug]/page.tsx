import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryLanding } from "@/components/country-seo/CountryLanding";
import { GurgaonSeoLanding } from "@/components/gurgaon-seo/GurgaonSeoLanding";
import {
  buildGurgaonSeoMetadata,
  getGurgaonSeoPage,
  getGurgaonSeoRelated,
  getGurgaonSeoStaticParams,
} from "@/lib/gurgaon-seo";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import { getGurgaonKeywordPage, gurgaonKeywordSlugs } from "@/lib/gurgaon-keywords";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { buildCountrySeoMetadata, countrySeoSlugs, getCountrySeoPage } from "@/lib/country-seo";
import { buildCitySeoMetadata, buildCitySeoSchema, citySeoSlugs, getCitySeoPage } from "@/lib/india-cities";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";

// This is the site's only root-level dynamic segment, so it serves every
// top-level SEO slug: country landing pages (/usa/), Indian city pages (/mumbai/), the Gurgaon keyword pages
// (/ib-tutor-in-gurgaon/) and the original hyperlocal Gurgaon landing pages
// (/ib-igcse-home-tutor-in-golf-course-road-gurgaon/). The 500-page expansion lives
// under /gurgaon/<slug>/ with its own route.
// The param keeps its original name because Next.js requires one slug name per
// dynamic path position.
type PageProps = { params: Promise<{ gurgaonSlug: string }> };

// Only known slugs render; everything else 404s.
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    // "india" is excluded: /india/ has its own static route, which also lists the
    // /india/<slug>/ keyword pages.
    ...countrySeoSlugs.filter((slug) => slug !== "india").map((slug) => ({ gurgaonSlug: slug })),
    ...citySeoSlugs.map((slug) => ({ gurgaonSlug: slug })),
    ...gurgaonKeywordSlugs.map((slug) => ({ gurgaonSlug: slug })),
    ...getGurgaonSeoStaticParams(),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gurgaonSlug } = await params;

  const countryPage = getCountrySeoPage(gurgaonSlug);
  if (countryPage) return buildCountrySeoMetadata(countryPage);

  const cityPage = getCitySeoPage(gurgaonSlug);
  if (cityPage) return buildCitySeoMetadata(cityPage);

  const keywordPage = getGurgaonKeywordPage(gurgaonSlug);
  if (keywordPage) return buildGeneratedMetadata(keywordPage);

  const page = getGurgaonSeoPage(gurgaonSlug);
  return page && !page.path.startsWith("/gurgaon/") ? buildGurgaonSeoMetadata(page) : {};
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

  // Indian city pages (/mumbai/): the /gurgaon/ layout, with tutors based in that city when there
  // are any and the homepage tutors otherwise.
  const cityPage = getCitySeoPage(gurgaonSlug);
  if (cityPage) {
    const [allTutors, homepageTutors, reviews] = await Promise.all([getPublicTutorsFromDb(), getVisibleTutorsForPage("/"), getPublicHomepageReviews()]);
    const localTutors = (allTutors ?? []).filter((tutor) => [tutor.primaryCitySlug, ...tutor.availableCitySlugs].includes(cityPage.slug)).slice(0, 6);
    return (
      <CountryLanding
        page={cityPage}
        tutors={(localTutors.length > 0 ? localTutors : homepageTutors) ?? undefined}
        reviews={reviews ?? undefined}
        schema={buildCitySeoSchema(cityPage)}
        schoolStrip={cityPage.stripSchools.length > 0 ? { schools: cityPage.stripSchools, place: cityPage.countryName } : undefined}
      />
    );
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

  // Original workbook pages only; the 500-page expansion lives under /gurgaon/<slug>/.
  const page = getGurgaonSeoPage(gurgaonSlug);
  if (!page || page.path.startsWith("/gurgaon/")) notFound();

  return <GurgaonSeoLanding page={page} related={getGurgaonSeoRelated(page.slug, page.locality, 4)} />;
}
