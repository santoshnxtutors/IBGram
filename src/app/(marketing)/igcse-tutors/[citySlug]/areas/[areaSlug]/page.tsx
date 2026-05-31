import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcsePlaceName, getIgcseTutorAreaStaticParams, getIgcseTutorCityPage } from "@/lib/tutors/igcse-route-helpers";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";

type IgcseTutorAreaProps = {
  params: Promise<{ citySlug: string; areaSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getIgcseTutorAreaStaticParams();
}

export async function generateMetadata({ params }: IgcseTutorAreaProps): Promise<Metadata> {
  const { citySlug, areaSlug } = await params;
  const dbPath = `/igcse-tutors/${citySlug}/areas/${areaSlug}/`;
  const dbPage = await getDbGeneratedSeoPageByPath(dbPath, ["area"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);

  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();
  const placeName = getIgcsePlaceName(page.citySlug, areaSlug, "area");

  return {
    title: buildIgcseTutorMetadataTitle(page.cityName, placeName),
    description: `Review IGCSE tutors near ${placeName}, ${page.cityName}, including home, online and hybrid support where available.`,
    alternates: { canonical: `/igcse-tutors/${page.citySlug}/areas/${areaSlug}/` },
  };
}

export default async function IgcseTutorAreaPage({ params }: IgcseTutorAreaProps) {
  const { citySlug, areaSlug } = await params;
  const dbPath = `/igcse-tutors/${citySlug}/areas/${areaSlug}/`;
  const dbPage = await getDbGeneratedSeoPageByPath(dbPath, ["area"]);
  if (dbPage) return <GeneratedPageRenderer page={dbPage} />;

  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return <IgcseTutorAvailabilityPage page={page} pageType="area" placeName={getIgcsePlaceName(page.citySlug, areaSlug, "area")} areaSlug={areaSlug} />;
}
