import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcsePlaceName, getIgcseTutorCityPage } from "@/lib/tutors/igcse-route-helpers";

type IgcseTutorSectorProps = {
  params: Promise<{ citySlug: string; sectorSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: IgcseTutorSectorProps): Promise<Metadata> {
  const { citySlug, sectorSlug } = await params;
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
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return <IgcseTutorAvailabilityPage page={page} pageType="sector" placeName={getIgcsePlaceName(page.citySlug, sectorSlug, "sector")} sectorSlug={sectorSlug} />;
}
