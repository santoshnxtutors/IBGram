import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { GurgaonSeoLanding } from "@/components/gurgaon-seo/GurgaonSeoLanding";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getGurgaonHubKeywordPage, gurgaonHubKeywordSlugs } from "@/lib/gurgaon-keywords";
import {
  buildGurgaonSeoMetadata,
  getGurgaonSeoPage,
  getGurgaonSeoRelated,
  getGurgaonHubStaticParams,
} from "@/lib/gurgaon-seo";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";

// Everything under the /gurgaon/ hub: the IB/IGCSE keyword pages (/gurgaon/ib-maths-home-tutor/)
// and the 500-page locality expansion (/gurgaon/ib-dp-physics-home-tutor-in-ardee-city-gurgaon/).
// Only known slugs render.
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return [...gurgaonHubKeywordSlugs.map((slug) => ({ slug })), ...getGurgaonHubStaticParams()];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const keywordPage = getGurgaonHubKeywordPage(slug);
  if (keywordPage) return buildGeneratedMetadata(keywordPage);
  const page = getGurgaonSeoPage(slug);
  return page?.path.startsWith("/gurgaon/") ? buildGurgaonSeoMetadata(page) : {};
}

/**
 * Same tutors as the board's homepage: IB pages mirror "/", IGCSE pages mirror "/igcse/" filtered
 * to IGCSE tutors. Mirrors the Gurgaon keyword pages in the root [gurgaonSlug] route.
 */
async function tutorSectionFor(isIgcse: boolean) {
  const tutors = (await getVisibleTutorsForPage(isIgcse ? "/igcse/" : "/")) ?? undefined;
  return isIgcse ? (
    <TutorDiscovery
      tutors={tutors?.filter((tutor) => tutor.curriculum === "IGCSE" || tutor.curriculum === "Both")}
      heading="Subject-aware IGCSE Tutors"
      intro="Master the Cambridge and Pearson Edexcel syllabuses with tutors who have achieved exceptional results."
      linkLabel="View All Tutors"
    />
  ) : (
    <TutorDiscovery tutors={tutors} />
  );
}

/**
 * IGCSE-only pages show the /igcse/ tutors. Pages covering both boards ("ib-igcse-...",
 * "international-...") show the homepage tutors, which span IB and IGCSE.
 */
const showsIgcseTutors = (slug: string) =>
  /(^|-)igcse/.test(slug) && !slug.includes("ib-igcse") && !slug.includes("international");

export default async function GurgaonHubChildPage({ params }: PageProps) {
  const { slug } = await params;

  const keywordPage = getGurgaonHubKeywordPage(slug);
  if (keywordPage) {
    const tutorSection = await tutorSectionFor(showsIgcseTutors(slug));
    return <GeneratedPageRenderer page={keywordPage} tutorSection={tutorSection} />;
  }

  const page = getGurgaonSeoPage(slug);
  // Original workbook pages keep their root URLs; serving them here would duplicate them.
  if (!page || !page.path.startsWith("/gurgaon/")) notFound();

  return (
    <GurgaonSeoLanding
      page={page}
      related={getGurgaonSeoRelated(page.slug, page.locality, 4)}
      tutorSection={await tutorSectionFor(page.board === "IGCSE")}
    />
  );
}
