import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcsePlaceName, getIgcseTutorCityPage } from "@/lib/tutors/igcse-route-helpers";

type IgcseTutorSocietyProps = {
  params: Promise<{ citySlug: string; societySlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: IgcseTutorSocietyProps): Promise<Metadata> {
  const { citySlug, societySlug } = await params;
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();
  const placeName = getIgcsePlaceName(page.citySlug, societySlug, "society");

  return {
    title: buildIgcseTutorMetadataTitle(page.cityName, placeName),
    description: `Review IGCSE tutors near ${placeName}, ${page.cityName}, with locality, city and online fallback matching.`,
    alternates: { canonical: `/igcse-tutors/${page.citySlug}/societies/${societySlug}/` },
  };
}

export default async function IgcseTutorSocietyPage({ params }: IgcseTutorSocietyProps) {
  const { citySlug, societySlug } = await params;
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return <IgcseTutorAvailabilityPage page={page} pageType="society" placeName={getIgcsePlaceName(page.citySlug, societySlug, "society")} societySlug={societySlug} />;
}
