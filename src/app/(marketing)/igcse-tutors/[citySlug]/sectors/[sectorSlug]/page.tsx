import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcsePlaceName, getIgcseTutorCityPage, getIgcseTutorSectorStaticParams } from "@/lib/tutors/igcse-route-helpers";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";

type IgcseTutorSectorProps = {
  params: Promise<{ citySlug: string; sectorSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getIgcseTutorSectorStaticParams();
}

export async function generateMetadata({ params }: IgcseTutorSectorProps): Promise<Metadata> {
  const { citySlug, sectorSlug } = await params;
  const dbPath = `/igcse-tutors/${citySlug}/sectors/${sectorSlug}/`;
  const dbPage = await getDbGeneratedSeoPageByPath(dbPath, ["sector"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);

  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();
  const placeName = getIgcsePlaceName(page.citySlug, sectorSlug, "sector");

  return {
    title: buildIgcseTutorMetadataTitle(page.cityName, placeName),
    description: `Review IGCSE tutors near ${placeName}, ${page.cityName}, with exact local matches first and online fallback after local options.`,
    alternates: { canonical: `/igcse-tutors/${page.citySlug}/sectors/${sectorSlug}/` },
  };
}

export default async function IgcseTutorSectorPage({ params }: IgcseTutorSectorProps) {
  const { citySlug, sectorSlug } = await params;
  const dbPath = `/igcse-tutors/${citySlug}/sectors/${sectorSlug}/`;
  const dbPage = await getDbGeneratedSeoPageByPath(dbPath, ["sector"]);
  if (dbPage) return <GeneratedPageRenderer page={dbPage} />;

  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return <IgcseTutorAvailabilityPage page={page} pageType="sector" placeName={getIgcsePlaceName(page.citySlug, sectorSlug, "sector")} sectorSlug={sectorSlug} />;
}
