import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPinned, SearchCheck } from "lucide-react";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForGeneratedPage, type TutorPageContext, type TutorPageType } from "@/lib/tutors/tutor-location-matching";
import type { IgcseCitySeoPage } from "@/lib/seo/igcse-city-pages";
import { buildTutorLandingPageSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { JsonLd } from "@/components/generated-pages/JsonLd";

type IgcseTutorAvailabilityPageProps = {
  page: IgcseCitySeoPage;
  pageType: TutorPageType;
  placeName?: string;
  areaSlug?: string;
  sectorSlug?: string;
  societySlug?: string;
  schoolSlug?: string;
  subjectSlug?: string;
};

export function IgcseTutorAvailabilityPage({
  page,
  pageType,
  placeName,
  areaSlug,
  sectorSlug,
  societySlug,
  schoolSlug,
  subjectSlug,
}: IgcseTutorAvailabilityPageProps) {
  const context: TutorPageContext = {
    curriculum: "IGCSE",
    pageType,
    citySlug: page.citySlug,
    areaSlug,
    sectorSlug,
    societySlug,
    schoolSlug,
    subjectSlug,
  };
  const result = getTutorsForGeneratedPage(context, { limit: 6 });
  const locationTitle = placeName ?? page.cityName;
  const canonicalUrl = absoluteUrl(buildCanonicalPath(page.citySlug, pageType, { areaSlug, sectorSlug, societySlug, schoolSlug, subjectSlug }));
  const faqs = buildIgcseTutorFaqs(page.cityName, locationTitle, pageType, page.schoolDisclaimer);
  const schema = buildTutorLandingPageSchema({
    canonicalUrl,
    title: `IGCSE tutors near ${locationTitle}`,
    description: `Compare Cambridge and Pearson Edexcel IGCSE tutors near ${locationTitle} with city, locality, subject and online fallback matching.`,
    breadcrumbItems: [
      { name: "Home", url: absoluteUrl("/") },
      { name: "IGCSE", url: absoluteUrl("/igcse/") },
      { name: page.cityName, url: absoluteUrl(`/igcse-tutors/${page.citySlug}/`) },
      { name: locationTitle, url: canonicalUrl },
    ],
    serviceName: `IGCSE tutoring near ${locationTitle}`,
    serviceType: "IGCSE tutoring",
    areaServed: [locationTitle, page.cityName, ...page.areaNotes.slice(0, 4).map((area) => area.name)],
    subjects: page.subjects.map((subject) => subject.name),
    educationalLevel: "IGCSE, International GCSE, Grades 9-10",
    faqs,
    dateModified: page.lastUpdated,
  });

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-background py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/igcse-pages/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80">
            <ArrowLeft className="size-4" />
            Back to IGCSE pages
          </Link>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                <SearchCheck className="size-3.5" />
                IGCSE tutor availability
              </div>
              <p className="mb-4 flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <MapPinned className="size-4 text-secondary" />
                {page.cityName}, {page.stateName}
              </p>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-foreground md:text-6xl">
                IGCSE tutors near {locationTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground">
                Compare Cambridge and Pearson Edexcel IGCSE tutors by city, locality, subject fit and tutoring mode. Availability is reviewed safely without claiming guaranteed tutor placement.
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
                <h2 className="text-sm font-black uppercase tracking-[0.18em] text-secondary">Matching note</h2>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/90">
                  Exact local matches appear first, then city-level tutors, then online fallback tutors for the same curriculum and subject where available.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <TutorAvailabilitySection
        title={`IGCSE tutors mapped to ${locationTitle}`}
        description={buildTutorAvailabilityIntro({
          curriculum: "IGCSE",
          cityName: page.cityName,
          placeName: placeName === page.cityName ? undefined : placeName,
          pageType,
          areas: page.areaNotes.map((area) => area.name),
          matchSummary: result.matchSummary,
        })}
        result={result}
        context={context}
        tinted
      />

      <section className="bg-muted/10 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-border/50 bg-background p-5">
                <h2 className="text-base font-black text-foreground">{faq.question}</h2>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href={page.canonicalPath} className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground">
            View the full {page.cityName} IGCSE city page
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function buildCanonicalPath(
  citySlug: string,
  pageType: TutorPageType,
  slugs: { areaSlug?: string; sectorSlug?: string; societySlug?: string; schoolSlug?: string; subjectSlug?: string },
): string {
  if (pageType === "area" && slugs.areaSlug) return `/igcse-tutors/${citySlug}/areas/${slugs.areaSlug}/`;
  if (pageType === "sector" && slugs.sectorSlug) return `/igcse-tutors/${citySlug}/sectors/${slugs.sectorSlug}/`;
  if (pageType === "society" && slugs.societySlug) return `/igcse-tutors/${citySlug}/societies/${slugs.societySlug}/`;
  if (pageType === "school" && slugs.schoolSlug) return `/igcse-tutors/${citySlug}/schools/${slugs.schoolSlug}/`;
  if (pageType === "subject" && slugs.subjectSlug) return `/igcse-tutors/${citySlug}/${slugs.subjectSlug}/`;
  return `/igcse-tutors/${citySlug}/`;
}

function buildIgcseTutorFaqs(cityName: string, locationTitle: string, pageType: TutorPageType, disclaimer: string) {
  return [
    {
      question: `Can I find IGCSE tutors near ${locationTitle}?`,
      answer: `Yes. IB Gram reviews IGCSE tutor availability near ${locationTitle} for Cambridge and Pearson Edexcel support, with exact local matches first and online fallback when it is academically stronger.`,
    },
    {
      question: "Which IGCSE subjects are commonly supported?",
      answer: "Common requests include Maths, Physics, Chemistry, Biology, English, Economics and Business. Tutor fit depends on board, syllabus, current grade range and exam session.",
    },
    {
      question: pageType === "school" ? `Is IB Gram affiliated with schools in ${cityName}?` : "Can online IGCSE tutoring work well?",
      answer: pageType === "school" ? disclaimer : "Yes. Online tutoring is often useful for board-specific specialists, mock review, past-paper practice and urgent exam-season doubts.",
    },
    {
      question: `How does matching work in ${cityName}?`,
      answer: "The match starts with board, subject, syllabus route, location, mode, schedule and current learning gap. IB Gram then reviews home, online or hybrid options where available.",
    },
  ];
}
