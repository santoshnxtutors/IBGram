import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpenCheck, CheckCircle2 } from "lucide-react";
import { getCitySeoPageBySlug, getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { CITY_CONTENT_PAGE_SLUGS, isCityContentPageSlug } from "@/lib/seo/internal-links";
import { buildIndexableMetadata } from "@/lib/seo/metadata";
import { buildTutorLandingPageSchema } from "@/lib/seo/schema";
import { absoluteUrl, buildCityPath, buildCitySubpagePath } from "@/lib/seo/slug-utils";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForGeneratedPage, type TutorPageContext } from "@/lib/tutors/tutor-location-matching";
import { JsonLd } from "@/components/generated-pages/JsonLd";

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

  const canonicalUrl = absoluteUrl(buildCitySubpagePath(page.citySlug, pageSlug));

  return buildIndexableMetadata({
    title: `${focus.title} in ${page.cityName}`,
    description: `${focus.description} Find focused IB ${focus.title} tutoring support in ${page.cityName} with home, online and hybrid matching.`,
    canonicalUrl,
    ogImage: page.ogImage,
    keywords: [`${focus.title} tutor in ${page.cityName}`, `IB ${focus.title} ${page.cityName}`, page.primaryKeyword],
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
  const canonicalUrl = absoluteUrl(buildCitySubpagePath(page.citySlug, pageSlug));
  const faqs = buildFocusFaqs(page.cityName, focus.title, pageType, page.schoolDisclaimer);
  const schema = buildTutorLandingPageSchema({
    canonicalUrl,
    title: `${focus.title} in ${page.cityName}`,
    description: `${focus.description} IB Gram helps families compare focused IB tutor support in ${page.cityName}.`,
    breadcrumbItems: [
      { name: "Home", url: absoluteUrl("/") },
      { name: "IB Tutors", url: absoluteUrl("/ib-tutors/") },
      { name: page.cityName, url: page.canonicalUrl },
      { name: focus.title, url: canonicalUrl },
    ],
    serviceName: `${focus.title} tutoring in ${page.cityName}`,
    serviceType: pageType === "programme" ? "IB programme tutoring" : "IB subject tutoring",
    areaServed: [page.cityName, ...page.premiumAreas.filter((area) => area.pageEnabled).slice(0, 4).map((area) => area.name)],
    subjects: pageType === "programme" ? page.ibSubjectsAvailable.map((subject) => subject.name) : [focus.title],
    educationalLevel: page.gradeRange,
    faqs,
    dateModified: page.lastUpdated,
  });

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <JsonLd data={schema} />
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
                <CheckCircle2 className="size-5" />
                <h2 className="text-sm font-black uppercase tracking-[0.18em]">Indexable focus page</h2>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                This page now uses a self-canonical URL, index/follow robots, focused content, tutor availability,
                crawlable internal links and FAQ schema instead of canonicalizing back to the city hub.
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

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border/50 bg-[#0B0F19]/60 p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-foreground">Focused tutoring plan</h2>
            <div className="mt-3 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
              <p>
                A focused {focus.title} page is useful when it goes beyond a city keyword. Parents can use this page to
                explain the student&apos;s grade, current unit, school timeline, target exam session, preferred mode and
                whether the need is concept repair, assignment support, IA guidance or timed exam practice.
              </p>
              <p>
                IB Gram keeps {page.cityName} context visible through areas, school ecosystem references, tutor
                availability and internal links, while the tutor match stays tied to subject depth and programme fit.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-border/50 bg-[#0B0F19]/60 p-6 md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-foreground">Related indexable pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={buildCityPath(page.citySlug)} className="rounded-full border border-primary/20 px-3 py-2 text-sm font-bold text-primary">
                IB tutors in {page.cityName}
              </Link>
              {page.ibSubjectsAvailable.filter((subject) => subject.slug !== pageSlug).slice(0, 5).map((subject) => (
                <Link key={subject.slug} href={buildCitySubpagePath(page.citySlug, subject.slug)} className="rounded-full border border-border px-3 py-2 text-sm font-bold text-foreground hover:border-primary/40">
                  {subject.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-border/50 bg-[#0B0F19]/60 p-6 md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-foreground">FAQs for {focus.title} in {page.cityName}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-border/50 bg-background/60 p-4">
                <h3 className="font-black text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
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

function buildFocusFaqs(cityName: string, focusTitle: string, pageType: "programme" | "subject", disclaimer: string) {
  return [
    {
      question: `Can I find ${focusTitle} tutors in ${cityName}?`,
      answer: `Yes. IB Gram can review ${focusTitle} tutor availability in ${cityName} across home, online and hybrid modes, depending on subject level, schedule and tutor fit.`,
    },
    {
      question: pageType === "programme" ? "What support does this IB programme include?" : `What does ${focusTitle} tutoring usually include?`,
      answer:
        pageType === "programme"
          ? "Programme support can include foundations, assignment structure, assessment criteria, study routines, parent updates and subject-level support where needed."
          : "Subject tutoring can include concept repair, topic sequencing, exam-style practice, command-term language, IA direction where relevant and weekly progress planning.",
    },
    {
      question: `Is online tutoring useful for ${focusTitle}?`,
      answer: "Yes. Online tutoring can be strongest when the best-fit IB specialist is not nearby or the student needs urgent revision, IA feedback or a rare subject combination.",
    },
    {
      question: `Is IB Gram affiliated with ${cityName} schools?`,
      answer: disclaimer,
    },
  ];
}
