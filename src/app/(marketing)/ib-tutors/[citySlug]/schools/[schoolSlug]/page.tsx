import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, ShieldAlert } from "lucide-react";
import { getCitySeoPageBySlug, getLiveCitySeoPages, getSchoolPageBySlug } from "@/lib/seo/city-pages";
import { getNoindexSubpageDecision } from "@/lib/seo/indexing";
import { buildNoindexMetadata } from "@/lib/seo/metadata";
import { buildCityPath } from "@/lib/seo/slug-utils";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForSchool } from "@/lib/tutors/tutor-location-matching";

type SchoolPageProps = {
  params: Promise<{ citySlug: string; schoolSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    ...getLiveCitySeoPages().flatMap((page) =>
    page.ibSchoolsCity
      .filter((school) => school.pageEnabled)
      .map((school) => ({
        citySlug: page.citySlug,
        schoolSlug: school.slug,
      })),
    ),
    ...getGeneratedStaticParamsForTypes(["school"]).map(({ citySlug, schoolSlug }) => ({ citySlug, schoolSlug })),
  ];
}

export async function generateMetadata({ params }: SchoolPageProps): Promise<Metadata> {
  const { citySlug, schoolSlug } = await params;
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/schools/${schoolSlug}/`, ["school"]);
  if (generatedPage) return buildGeneratedMetadata(generatedPage);

  const page = getCitySeoPageBySlug(citySlug);
  const school = getSchoolPageBySlug(citySlug, schoolSlug);

  if (!page || page.status !== "live" || !school) {
    notFound();
  }

  const decision = getNoindexSubpageDecision(page.canonicalUrl, "School support page is noindex until unique school-specific guidance is expanded.");

  return buildNoindexMetadata({
    title: `IB tutor support for ${school.name} students`,
    description: `${school.description} ${page.schoolDisclaimer}`,
    canonicalUrl: decision.canonicalUrl,
    ogImage: page.ogImage,
  });
}

export default async function CitySchoolPage({ params }: SchoolPageProps) {
  const { citySlug, schoolSlug } = await params;
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/schools/${schoolSlug}/`, ["school"]);
  if (generatedPage) return <GeneratedPageRenderer page={generatedPage} />;

  const page = getCitySeoPageBySlug(citySlug);
  const school = getSchoolPageBySlug(citySlug, schoolSlug);

  if (!page || page.status !== "live" || !school) {
    notFound();
  }

  const context = { curriculum: "IB" as const, pageType: "school" as const, citySlug: page.citySlug, schoolSlug: school.slug };
  const result = getTutorsForSchool(page.citySlug, school.slug, { curriculum: "IB", limit: 6 });

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Link href={buildCityPath(page.citySlug)} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80">
          <ArrowLeft className="size-4" />
          Back to IB tutors in {page.cityName}
        </Link>

        <section className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
              <Building2 className="size-3.5" />
              School support page
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground md:text-6xl">
              IB tutor support for {school.name} students
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground">{school.description}</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <ShieldAlert className="size-5" />
                <h2 className="text-sm font-black uppercase tracking-[0.18em]">Independent platform</h2>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">{page.schoolDisclaimer}</p>
            </div>
          </aside>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {school.typicalNeeds.map((need) => (
            <div key={need} className="rounded-2xl border border-border/50 bg-muted/10 p-5">
              <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">{need}</h2>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                IB Gram can review this need as part of the wider {page.cityName} matching process and recommend home,
                online or hybrid support where appropriate.
              </p>
            </div>
          ))}
        </section>

        <TutorAvailabilitySection
          title={`IB tutor support near ${school.name}`}
          description={buildTutorAvailabilityIntro({
            curriculum: "IB",
            cityName: page.cityName,
            placeName: school.name,
            pageType: "school",
            matchSummary: result.matchSummary,
          })}
          result={result}
          context={context}
        />

        <div className="mt-10 rounded-2xl border border-border/50 bg-[#0B0F19]/60 p-6">
          <h2 className="text-2xl font-black tracking-tight text-foreground">Why this page is noindex today</h2>
          <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground">
            School-focused pages should not be thin pages or imply partnerships. This route is available for future
            content expansion but currently canonicalizes to the main {page.cityName} page.
          </p>
          <Link
            href={buildCityPath(page.citySlug)}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground"
          >
            View IB tutors in {page.cityName}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
