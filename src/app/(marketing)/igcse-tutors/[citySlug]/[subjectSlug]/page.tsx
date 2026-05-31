import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcsePlaceName, getIgcseTutorCityPage } from "@/lib/tutors/igcse-route-helpers";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";

type IgcseTutorSubjectProps = {
  params: Promise<{ citySlug: string; subjectSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: IgcseTutorSubjectProps): Promise<Metadata> {
  const { citySlug, subjectSlug } = await params;
  const dbPath = `/igcse-tutors/${citySlug}/${subjectSlug}/`;
  const dbPage = await getDbGeneratedSeoPageByPath(dbPath, ["subject"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);

  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();
  const subjectName = getIgcsePlaceName(page.citySlug, subjectSlug, "subject");

  return {
    title: `${subjectName} ${buildIgcseTutorMetadataTitle(page.cityName)}`,
    description: `Find ${subjectName} IGCSE tutors in ${page.cityName} with city, local and online availability reviewed by IB Gram.`,
    alternates: { canonical: `/igcse-tutors/${page.citySlug}/${subjectSlug}/` },
  };
}

export default async function IgcseTutorSubjectPage({ params }: IgcseTutorSubjectProps) {
  const { citySlug, subjectSlug } = await params;
  const dbPath = `/igcse-tutors/${citySlug}/${subjectSlug}/`;
  const dbPage = await getDbGeneratedSeoPageByPath(dbPath, ["subject"]);
  if (dbPage) return <GeneratedPageRenderer page={dbPage} />;

  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  const subjectName = getIgcsePlaceName(page.citySlug, subjectSlug, "subject");
  return <IgcseTutorAvailabilityPage page={page} pageType="subject" placeName={`${subjectName} in ${page.cityName}`} subjectSlug={subjectSlug} />;
}
