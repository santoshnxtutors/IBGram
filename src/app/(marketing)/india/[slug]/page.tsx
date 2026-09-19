import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { getIndiaKeywordPage, indiaKeywordSlugs } from "@/lib/india-keywords";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";

// The 100 India keyword pages: /india/ib-tutors, /india/igcse-home-tuition, and so on.
// Same renderer as the /gurgaon/<slug>/ keyword pages; only known slugs render.
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return indiaKeywordSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndiaKeywordPage(slug);
  return page ? buildGeneratedMetadata(page) : {};
}

/**
 * IGCSE-only pages show the /igcse/ tutors; pages covering the IB, or both boards, show the
 * homepage tutors, which span IB and IGCSE. Mirrors the Gurgaon hub route.
 */
const showsIgcseTutors = (slug: string) => /(^|-)igcse/.test(slug) && !slug.startsWith("ib-igcse");

export default async function IndiaKeywordPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndiaKeywordPage(slug);
  if (!page) notFound();

  const isIgcse = showsIgcseTutors(slug);
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

  return <GeneratedPageRenderer page={page} tutorSection={tutorSection} />;
}
