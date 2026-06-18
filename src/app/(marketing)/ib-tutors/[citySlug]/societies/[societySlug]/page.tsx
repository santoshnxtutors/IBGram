import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";

type SocietyPageProps = {
  params: Promise<{ citySlug: string; societySlug: string }>;
};

export const revalidate = 86400;
export const dynamicParams = true;

export function generateStaticParams() {
  return getGeneratedStaticParamsForTypes(["society"]).map(({ citySlug, societySlug }) => ({ citySlug, societySlug }));
}

export async function generateMetadata({ params }: SocietyPageProps): Promise<Metadata> {
  const { citySlug, societySlug } = await params;
  const dbPage = await getDbGeneratedSeoPageByPath(`/ib-tutors/${citySlug}/societies/${societySlug}/`, ["society"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);

  const page = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/societies/${societySlug}/`, ["society"]);
  if (!page) notFound();
  return buildGeneratedMetadata(page);
}

export default async function GeneratedSocietyPage({ params }: SocietyPageProps) {
  const { citySlug, societySlug } = await params;
  const dbPage = await getDbGeneratedSeoPageByPath(`/ib-tutors/${citySlug}/societies/${societySlug}/`, ["society"]);
  if (dbPage) return <GeneratedPageRenderer page={dbPage} />;

  const page = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/societies/${societySlug}/`, ["society"]);
  if (!page) notFound();
  return <GeneratedPageRenderer page={page} />;
}
