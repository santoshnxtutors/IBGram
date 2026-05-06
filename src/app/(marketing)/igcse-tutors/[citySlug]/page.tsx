import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IgcseTutorAvailabilityPage } from "@/components/tutors/IgcseTutorAvailabilityPage";
import { buildIgcseTutorMetadataTitle, getIgcseTutorCityPage, getIgcseTutorCityStaticParams } from "@/lib/tutors/igcse-route-helpers";

type IgcseTutorCityProps = {
  params: Promise<{ citySlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return getIgcseTutorCityStaticParams();
}

export async function generateMetadata({ params }: IgcseTutorCityProps): Promise<Metadata> {
  const { citySlug } = await params;
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return {
    title: buildIgcseTutorMetadataTitle(page.cityName),
    description: `Find IGCSE tutors in ${page.cityName} with city, home, online and hybrid availability reviewed by IB Gram.`,
    alternates: { canonical: `/igcse-tutors/${page.citySlug}/` },
  };
}

export default async function IgcseTutorCityPage({ params }: IgcseTutorCityProps) {
  const { citySlug } = await params;
  const page = getIgcseTutorCityPage(citySlug);
  if (!page) notFound();

  return <IgcseTutorAvailabilityPage page={page} pageType="city" />;
}
