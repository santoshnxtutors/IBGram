import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenCheck, ShieldAlert } from "lucide-react";
import { getCitySeoPageBySlug, getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { CITY_CONTENT_PAGE_SLUGS, isCityContentPageSlug } from "@/lib/seo/internal-links";
import { getNoindexSubpageDecision } from "@/lib/seo/indexing";
import { buildNoindexMetadata } from "@/lib/seo/metadata";
import { buildCityPath } from "@/lib/seo/slug-utils";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForGeneratedPage, type TutorPageContext } from "@/lib/tutors/tutor-location-matching";

type CitySubpageProps = {
  params: Promise<{ citySlug: string; pageSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    ...getLiveCitySeoPages().flatMap((page) =>
    CITY_CONTENT_PAGE_SLUGS.map((pageSlug) => ({
      citySlug: page.citySlug,
      pageSlug,
    })),
    ),
    ...getGeneratedStaticParamsForTypes(["subject", "programme"]).map(({ citySlug, pageSlug }) => ({ citySlug, pageSlug })),
  ];
}

export async function generateMetadata({ params }: CitySubpageProps): Promise<Metadata> {
  const { citySlug, pageSlug } = await params;
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/${pageSlug}/`, ["subject", "programme"]);
  if (generatedPage) return buildGeneratedMetadata(generatedPage);

  const page = getCitySeoPageBySlug(citySlug);

  if (!page || page.status !== "live" || !isCityContentPageSlug(pageSlug)) {
    notFound();
  }

  const focus = getFocusContent(pageSlug, page);
  if (!focus) notFound();

  const decision = getNoindexSubpageDecision(page.canonicalUrl);

  return buildNoindexMetadata({
    title: `${focus.title} in ${page.cityName}`,
    description: `${focus.description} This focused ${page.cityName} page is canonicalized to the main city page until fuller unique content is available.`,
    canonicalUrl: decision.canonicalUrl,
    ogImage: page.ogImage,
  });
}

export default async function CityContentSubpage({ params }: CitySubpageProps) {
  const { citySlug, pageSlug } = await params;
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/${pageSlug}/`, ["subject", "programme"]);
  if (generatedPage) return <GeneratedPageRenderer page={generatedPage} />;

  const page = getCitySeoPageBySlug(citySlug);

  if (!page || page.status !== "live" || !isCityContentPageSlug(pageSlug)) {
    notFound();
  }

  const focus = getFocusContent(pageSlug, page);
  if (!focus) notFound();
  const pageType = page.ibProgramsAvailable.some((program) => program.slug === pageSlug) ? "programme" : "subject";
  const context: TutorPageContext = {
    curriculum: "IB",
    pageType,
    citySlug: page.citySlug,
    subjectSlug: pageType === "subject" ? pageSlug : undefined,
    programmeSlug: pageType === "programme" ? pageSlug : undefined,
  };
  const result = getTutorsForGeneratedPage(context, { limit: 6 });

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
              <BookOpenCheck className="size-3.5" />
              Focus page
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground md:text-6xl">
              {focus.title} in {page.cityName}
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground">
              {focus.description}
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <ShieldAlert className="size-5" />
                <h2 className="text-sm font-black uppercase tracking-[0.18em]">Indexing note</h2>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                This route is implemented for future scale, but it is noindex and canonicalized to the main {page.cityName}
                city page until there is enough unique programme or subject content to index responsibly.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {focus.points.map((point) => (
            <div key={point} className="rounded-2xl border border-border/50 bg-muted/10 p-5">
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">{point}</p>
            </div>
          ))}
        </section>

        <TutorAvailabilitySection
          title={`${focus.title} tutors available in ${page.cityName}`}
          description={buildTutorAvailabilityIntro({
            curriculum: "IB",
            cityName: page.cityName,
            pageType,
            areas: page.premiumAreas.map((area) => area.name),
            matchSummary: result.matchSummary,
          })}
          result={result}
          context={context}
        />

        <section className="mt-12 rounded-[2rem] border border-border/50 bg-[#0B0F19]/60 p-6 md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-foreground">Use the main {page.cityName} page for now</h2>
          <p className="mt-3 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground">
            The city page already includes programme coverage, subject coverage, areas, schools, tutoring modes, FAQs and
            internal links. That page is the indexable canonical page for this topic today.
          </p>
          <Link
            href={buildCityPath(page.citySlug)}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground"
          >
            View IB tutors in {page.cityName}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}

function getFocusContent(pageSlug: string, page: NonNullable<ReturnType<typeof getCitySeoPageBySlug>>) {
  const program = page.ibProgramsAvailable.find((item) => item.slug === pageSlug);
  if (program) {
    return {
      title: program.name,
      description: program.cityNote,
      points: [
        program.description,
        `Grade coverage: ${page.gradeRange}.`,
        `Assessment support: ${page.assessmentSupport}.`,
      ],
    };
  }

  const subject = page.ibSubjectsAvailable.find((item) => item.slug === pageSlug);
  if (subject) {
    return {
      title: subject.name,
      description: subject.cityNote,
      points: [
        subject.description,
        `Subject level: ${subject.level}.`,
        `Related support in ${page.cityName}: ${page.assessmentSupport}.`,
      ],
    };
  }

  return undefined;
}
