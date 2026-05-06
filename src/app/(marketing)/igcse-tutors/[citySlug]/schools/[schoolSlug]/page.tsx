import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcsePlaceName, getIgcseTutorCityPage } from "@/lib/tutors/igcse-route-helpers";

type IgcseTutorSchoolProps = {
  params: Promise<{ citySlug: string; schoolSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({ params }: IgcseTutorSchoolProps): Promise<Metadata> {
  const { citySlug, schoolSlug } = await params;
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();
  const placeName = getIgcsePlaceName(page.citySlug, schoolSlug, "school");

  return {
    title: buildIgcseTutorMetadataTitle(page.cityName, placeName),
    description: `Review IGCSE tutors near ${placeName}, ${page.cityName}. School names are used only for nearby support context, not affiliation claims.`,
    alternates: { canonical: `/igcse-tutors/${page.citySlug}/schools/${schoolSlug}/` },
  };
}

export default async function IgcseTutorSchoolPage({ params }: IgcseTutorSchoolProps) {
  const { citySlug, schoolSlug } = await params;
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return <IgcseTutorAvailabilityPage page={page} pageType="school" placeName={getIgcsePlaceName(page.citySlug, schoolSlug, "school")} schoolSlug={schoolSlug} />;
}
