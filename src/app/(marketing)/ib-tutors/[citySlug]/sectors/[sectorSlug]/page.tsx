import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";

type SectorPageProps = {
  params: Promise<{ citySlug: string; sectorSlug: string }>;
};

export const revalidate = 86400;

export function generateStaticParams() {
  return getGeneratedStaticParamsForTypes(["sector"]).map(({ citySlug, sectorSlug }) => ({ citySlug, sectorSlug }));
}

export async function generateMetadata({ params }: SectorPageProps): Promise<Metadata> {
  const { citySlug, sectorSlug } = await params;
  const page = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/sectors/${sectorSlug}/`, ["sector"]);
  if (!page) notFound();
  return buildGeneratedMetadata(page);
}

export default async function GeneratedSectorPage({ params }: SectorPageProps) {
  const { citySlug, sectorSlug } = await params;
  const page = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/sectors/${sectorSlug}/`, ["sector"]);
  if (!page) notFound();
  return <GeneratedPageRenderer page={page} />;
}
