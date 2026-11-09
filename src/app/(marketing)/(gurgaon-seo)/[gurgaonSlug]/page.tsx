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
import { buildCitySeoMetadata, buildCitySeoSchema, citySeoSlugs, getCitySeoPage, getCitySeoRelated } from "@/lib/india-cities";
import { buildTutorJobSeoMetadata, getTutorJobSeoPage, tutorJobSeoSlugs } from "@/lib/tutor-jobs-seo";
import { TutorJobsLanding } from "@/components/tutor-jobs-seo/TutorJobsLanding";
import { getPublishedJobs } from "@/lib/jobs";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getPublicHomepageReviews } from "@/lib/cms/public-reviews";
import { getBlogPostsByCountry } from "@/lib/cms/blog";
import { blogPath } from "@/lib/cms/blog-path";

// This is the site's only root-level dynamic segment, so it serves every
// top-level SEO slug: country landing pages (/usa/), Indian city pages (/mumbai/), the Gurgaon keyword pages
// (/ib-tutor-in-gurgaon/) and the original hyperlocal Gurgaon landing pages
// (/ib-igcse-home-tutor-in-golf-course-road-gurgaon/). The 500-page expansion lives
// under /gurgaon/<slug>/ with its own route.
// The param keeps its original name because Next.js requires one slug name per
// dynamic path position.
type PageProps = { params: Promise<{ gurgaonSlug: string }> };

// dynamicParams MUST stay true. With it false, only the pages prerendered at
// build time exist and every other slug 404s - and on 2026-10-17 the whole
// route (/usa/, /mumbai/, /ib-tutor-in-gurgaon/, ~2,800 sitemap URLs) 404ed in
// production even though the CI build generated them, so the prebuilt output
// did not survive the artifact round-trip to the VPS. True means a known slug
// renders on demand from the same data instead of depending on a file arriving.
// Unknown slugs still 404: every branch below falls through to notFound().
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    // "india" is excluded: /india/ has its own static route, which also lists the
    // /india/<slug>/ keyword pages.
    ...countrySeoSlugs.filter((slug) => slug !== "india").map((slug) => ({ gurgaonSlug: slug })),
    ...citySeoSlugs.map((slug) => ({ gurgaonSlug: slug })),
    ...tutorJobSeoSlugs.map((slug) => ({ gurgaonSlug: slug })),
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

  const jobPage = getTutorJobSeoPage(gurgaonSlug);
  if (jobPage) return buildTutorJobSeoMetadata(jobPage);

  const keywordPage = getGurgaonKeywordPage(gurgaonSlug);
  if (keywordPage) return buildGeneratedMetadata(keywordPage);

  const page = getGurgaonSeoPage(gurgaonSlug);
  return page && !page.path.startsWith("/gurgaon/") ? buildGurgaonSeoMetadata(page) : {};
}

export default async function RootSeoLandingPage({ params }: PageProps) {
  const { gurgaonSlug } = await params;

  const countryPage = getCountrySeoPage(gurgaonSlug);
  if (countryPage) {
    // The country hub itself is served HERE, not by /uae/[...path] — so the blog
    // strip has to be wired in both places or the hub is the one page missing it.
    const [tutors, reviews, posts] = await Promise.all([
      getVisibleTutorsForPage(`/${countryPage.slug}/`),
      getPublicHomepageReviews(),
      getBlogPostsByCountry(countryPage.slug, 6),
    ]);
    return (
      <CountryLanding
        page={countryPage}
        tutors={tutors ?? undefined}
        reviews={reviews ?? undefined}
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
        // Without this every city page linked only upward, so 652 of 1,207 had no inbound link
        // from anywhere on the site and Search Console filed them as crawled-but-not-indexed.
        directory={{
          eyebrow: "Nearby cities",
          title: `IB and IGCSE tutors near ${cityPage.countryName}`,
          lead: `Online one-to-one IB and IGCSE tuition runs the same way across ${cityPage.state}. These are the nearest cities we have written up.`,
          // The ring is ordered by state, so neighbours are usually in the same one - but a state
          // with a single written city wraps into the next, so the label stays state-agnostic.
          groups: [{ name: "Other cities we cover", links: getCitySeoRelated(cityPage.slug, 12) }],
        }}
      />
    );
  }

  // Tutor-recruitment pages (/ib-tutor-jobs/, /female-ib-igcse-tutor-jobs/). The live vacancy
  // strip reads the Job table, but a DB failure must not 500 an indexable page - without rows
  // the component renders the talent-pool state, which is the correct content either way.
  const jobPage = getTutorJobSeoPage(gurgaonSlug);
  if (jobPage) {
    const vacancies = await getPublishedJobs()
      .then((jobs) =>
        jobs.map((job) => ({
          slug: job.slug,
          title: job.title,
          location: job.location,
          employmentType: job.employmentType,
          workMode: job.workMode,
          summary: job.summary,
        })),
      )
      .catch(() => []);
    return <TutorJobsLanding page={jobPage} vacancies={vacancies} />;
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
