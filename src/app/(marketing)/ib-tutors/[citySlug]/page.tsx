import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityAcademicIntro } from "@/components/seo-city/CityAcademicIntro";
import { CityAreas } from "@/components/seo-city/CityAreas";
import { CityFAQ } from "@/components/seo-city/CityFAQ";
import { CityFinalCTA } from "@/components/seo-city/CityFinalCTA";
import { CityHero } from "@/components/seo-city/CityHero";
import { CityInternalLinks } from "@/components/seo-city/CityInternalLinks";
import { CityPrograms } from "@/components/seo-city/CityPrograms";
import { CitySchools } from "@/components/seo-city/CitySchools";
import { CitySubjects } from "@/components/seo-city/CitySubjects";
import { CityTestimonials } from "@/components/seo-city/CityTestimonials";
import { CityTrustBar } from "@/components/seo-city/CityTrustBar";
import { CityTutorMatching } from "@/components/seo-city/CityTutorMatching";
import { CityTutoringModes } from "@/components/seo-city/CityTutoringModes";
import { CityVerification } from "@/components/seo-city/CityVerification";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { getCitySeoPageBySlug, getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { getIndexingDecision } from "@/lib/seo/indexing";
import { buildCityMetadata } from "@/lib/seo/metadata";
import { buildCitySchema } from "@/lib/seo/schema";

type CityPageProps = {
  params: Promise<{ citySlug: string }>;
};

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return getLiveCitySeoPages().map((page) => ({
    citySlug: page.citySlug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const page = getCitySeoPageBySlug(citySlug);

  if (!page || page.status !== "live") {
    notFound();
  }

  return buildCityMetadata(page, getIndexingDecision(page));
}

export default async function CitySeoPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const page = getCitySeoPageBySlug(citySlug);

  if (!page || page.status !== "live") {
    notFound();
  }

  const schema = buildCitySchema(page);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />
      <CityHero page={page} />
      <CityTrustBar page={page} />
      <CityAcademicIntro page={page} />
      <CityPrograms page={page} />
      <CitySubjects page={page} />
      <CityTutorMatching page={page} />
      <CityAreas page={page} />
      <CitySchools page={page} />
      <CityTutoringModes page={page} />
      <CityVerification page={page} />
      <CityTestimonials page={page} />
      <CityInternalLinks page={page} />
      <CityFAQ page={page} />
      <CityFinalCTA page={page} />
    </div>
  );
}
