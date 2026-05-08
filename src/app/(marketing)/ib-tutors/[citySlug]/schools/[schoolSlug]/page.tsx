import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { getCitySeoPageBySlug, getLiveCitySeoPages, getSchoolPageBySlug } from "@/lib/seo/city-pages";
import { buildIndexableMetadata } from "@/lib/seo/metadata";
import { buildTutorLandingPageSchema } from "@/lib/seo/schema";
import { absoluteUrl, buildCityPath, buildCitySchoolPath } from "@/lib/seo/slug-utils";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForSchool } from "@/lib/tutors/tutor-location-matching";
import { JsonLd } from "@/components/generated-pages/JsonLd";

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

  const canonicalUrl = absoluteUrl(buildCitySchoolPath(page.citySlug, school.slug));

  return buildIndexableMetadata({
    title: `IB tutor support for ${school.name} students`,
    description: `${school.description} Review independent IB tutoring support near ${school.name} for PYP, MYP and DP students. ${page.schoolDisclaimer}`,
    canonicalUrl,
    ogImage: page.ogImage,
    keywords: [`IB tutors near ${school.name}`, `IB tutor support ${school.name}`, `IB tutors in ${page.cityName}`],
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
  const canonicalUrl = absoluteUrl(buildCitySchoolPath(page.citySlug, school.slug));
  const faqs = buildSchoolFaqs(page.cityName, school.name, page.schoolDisclaimer);
  const schema = buildTutorLandingPageSchema({
    canonicalUrl,
    title: `IB tutor support for ${school.name} students`,
    description: `${school.description} IB Gram uses school names only for nearby academic context and independent tutor matching.`,
    breadcrumbItems: [
      { name: "Home", url: absoluteUrl("/") },
      { name: "IB Tutors", url: absoluteUrl("/ib-tutors/") },
      { name: page.cityName, url: page.canonicalUrl },
      { name: school.name, url: canonicalUrl },
    ],
    serviceName: `Independent IB tutoring near ${school.name}`,
    serviceType: "IB tutoring",
    areaServed: [school.name, school.area, page.cityName],
    subjects: page.ibSubjectsAvailable.map((subject) => subject.name),
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
                <CheckCircle2 className="size-5" />
                <h2 className="text-sm font-black uppercase tracking-[0.18em]">Independent platform</h2>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                {page.schoolDisclaimer} This page is indexable because it contains unique school-nearby context,
                a self-canonical URL, FAQ schema and safe affiliation language.
              </p>
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

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-6">
            <h2 className="text-2xl font-black tracking-tight text-foreground">How tutoring is planned around {school.name}</h2>
            <div className="mt-4 space-y-4 text-sm font-medium leading-relaxed text-muted-foreground">
              <p>
                School-nearby pages are useful when they explain the academic context without implying an official
                relationship. Parents can use this page to describe timetable pressure, current feedback, assessment
                dates, subject level and whether home, online or hybrid support is realistic.
              </p>
              <p>
                Tutors can help with concept clarity, assignment planning, IA direction, mock revision and exam
                practice while keeping assessed work student-owned. The strongest match depends on programme, subject,
                level, learning gap and schedule rather than school name alone.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-6">
            <h2 className="text-2xl font-black tracking-tight text-foreground">Related crawlable pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={buildCityPath(page.citySlug)} className="rounded-full border border-primary/20 px-3 py-2 text-sm font-bold text-primary">
                IB tutors in {page.cityName}
              </Link>
              {page.premiumAreas.filter((area) => area.pageEnabled).slice(0, 5).map((area) => (
                <Link key={area.slug} href={`/ib-tutors/${page.citySlug}/areas/${area.slug}/`} className="rounded-full border border-border px-3 py-2 text-sm font-bold text-foreground hover:border-primary/40">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-[#0B0F19]/60 p-6">
          <h2 className="text-2xl font-black tracking-tight text-foreground">FAQs for IB support near {school.name}</h2>
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

function buildSchoolFaqs(cityName: string, schoolName: string, disclaimer: string) {
  return [
    {
      question: `Can IB Gram help students near ${schoolName}?`,
      answer: `Yes. IB Gram can review independent IB tutoring support near ${schoolName} for PYP, MYP and DP needs, subject to tutor availability, student level and preferred mode.`,
    },
    {
      question: "Can tutors help with IA, EE, TOK and mocks?",
      answer: "Tutors can support planning, concept clarity, feedback, revision and practice. They should not write assessed work or complete school submissions for the student.",
    },
    {
      question: `Is home tutoring available in ${cityName}?`,
      answer: `Home tutoring can be reviewed when location, timing and tutor travel are realistic. Online or hybrid support may be better for specialist DP subjects or urgent revision.`,
    },
    {
      question: `Is IB Gram affiliated with ${schoolName}?`,
      answer: disclaimer,
    },
  ];
}
