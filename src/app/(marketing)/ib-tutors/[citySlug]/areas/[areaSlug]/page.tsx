import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPinned } from "lucide-react";
import { getAreaPageBySlug, getCitySeoPageBySlug, getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { buildIndexableMetadata } from "@/lib/seo/metadata";
import { buildTutorLandingPageSchema } from "@/lib/seo/schema";
import { absoluteUrl, buildCityAreaPath, buildCityPath } from "@/lib/seo/slug-utils";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { getGeneratedPageForRoute, getGeneratedStaticParamsForTypes } from "@/lib/generated-pages/routes";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForArea } from "@/lib/tutors/tutor-location-matching";
import { JsonLd } from "@/components/generated-pages/JsonLd";

type AreaPageProps = {
  params: Promise<{ citySlug: string; areaSlug: string }>;
};

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return [
    ...getLiveCitySeoPages().flatMap((page) =>
    page.premiumAreas
      .filter((area) => area.pageEnabled)
      .map((area) => ({
        citySlug: page.citySlug,
        areaSlug: area.slug,
      })),
    ),
    ...getGeneratedStaticParamsForTypes(["area"]).map(({ citySlug, areaSlug }) => ({ citySlug, areaSlug })),
  ];
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { citySlug, areaSlug } = await params;
  // 1. DB-first (Phase 3)
  const dbPage = await getDbGeneratedSeoPageByPath(`/ib-tutors/${citySlug}/areas/${areaSlug}/`, ["area"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);

  // 2. Local generated-pages JSON store
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/areas/${areaSlug}/`, ["area"]);
  if (generatedPage) return buildGeneratedMetadata(generatedPage);

  // 3. Static
  const page = getCitySeoPageBySlug(citySlug);
  const area = getAreaPageBySlug(citySlug, areaSlug);

  if (!page || page.status !== "live" || !area) {
    notFound();
  }

  const canonicalUrl = absoluteUrl(buildCityAreaPath(page.citySlug, area.slug));

  return buildIndexableMetadata({
    title: `IB tutors near ${area.name}, ${page.cityName}`,
    description: `${area.description} Compare IB PYP, MYP and DP home, online and hybrid tutor support near ${area.name}, ${page.cityName}.`,
    canonicalUrl,
    ogImage: page.ogImage,
    keywords: [`IB tutors near ${area.name}`, `IB home tutors ${area.name}`, `IB DP tutor ${page.cityName}`],
  });
}

export default async function CityAreaPage({ params }: AreaPageProps) {
  const { citySlug, areaSlug } = await params;
  // 1. DB-first
  const dbPage = await getDbGeneratedSeoPageByPath(`/ib-tutors/${citySlug}/areas/${areaSlug}/`, ["area"]);
  if (dbPage) return <GeneratedPageRenderer page={dbPage} />;

  // 2. Local generated-pages JSON store
  const generatedPage = getGeneratedPageForRoute(`/ib-tutors/${citySlug}/areas/${areaSlug}/`, ["area"]);
  if (generatedPage) return <GeneratedPageRenderer page={generatedPage} />;

  // 3. Static
  const page = getCitySeoPageBySlug(citySlug);
  const area = getAreaPageBySlug(citySlug, areaSlug);

  if (!page || page.status !== "live" || !area) {
    notFound();
  }

  const context = { curriculum: "IB" as const, pageType: "area" as const, citySlug: page.citySlug, areaSlug: area.slug };
  const result = getTutorsForArea(page.citySlug, area.slug, { curriculum: "IB", limit: 6 });
  const canonicalUrl = absoluteUrl(buildCityAreaPath(page.citySlug, area.slug));
  const faqs = buildAreaFaqs(page.cityName, area.name, page.schoolDisclaimer);
  const schema = buildTutorLandingPageSchema({
    canonicalUrl,
    title: `IB tutors near ${area.name}, ${page.cityName}`,
    description: `${area.description} IB Gram helps families compare IB tutor support near ${area.name} with safe home, online and hybrid matching.`,
    breadcrumbItems: [
      { name: "Home", url: absoluteUrl("/") },
      { name: "IB Tutors", url: absoluteUrl("/ib-tutors/") },
      { name: page.cityName, url: page.canonicalUrl },
      { name: area.name, url: canonicalUrl },
    ],
    serviceName: `IB tutoring near ${area.name}`,
    serviceType: "IB tutoring",
    areaServed: [area.name, page.cityName, ...(area.nearbyLandmarks ?? [])],
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
              <MapPinned className="size-3.5" />
              Area page
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-foreground md:text-6xl">
              IB tutors near {area.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-relaxed text-muted-foreground">{area.description}</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5">
              <div className="mb-3 flex items-center gap-2 text-secondary">
                <CheckCircle2 className="size-5" />
                <h2 className="text-sm font-black uppercase tracking-[0.18em]">Indexable local guide</h2>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-foreground/90">
                This page has its own canonical URL, local tutor availability context, crawlable internal links, FAQ schema
                and a safe independent-platform disclaimer for Google indexing.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-5">
            <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">Service mode</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">{page.teachingModeNotes}</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-5">
            <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">Subjects</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              {page.subjectsWithStrongInventory.join(", ")} are common starting points, with other subjects reviewed by availability.
            </p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-5">
            <h2 className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-primary">Next step</h2>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">{page.localCtaText}</p>
          </div>
        </section>

        <TutorAvailabilitySection
          title={`IB tutors available near ${area.name}`}
          description={buildTutorAvailabilityIntro({
            curriculum: "IB",
            cityName: page.cityName,
            placeName: area.name,
            pageType: "area",
            matchSummary: result.matchSummary,
          })}
          result={result}
          context={context}
        />

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-6">
            <h2 className="text-2xl font-black tracking-tight text-foreground">Why {area.name} needs area-specific IB matching</h2>
            <div className="mt-4 space-y-4 text-sm font-medium leading-relaxed text-muted-foreground">
              <p>
                Families near {area.name} usually compare exact local home tutoring with stronger city-level or online
                IB specialists. A useful match should check the student&apos;s programme, subject level, school timeline,
                preferred lesson mode and realistic travel window before recommending a tutor.
              </p>
              <p>
                For DP students, subject fit often matters more than distance. Math AA, Math AI, Physics, Chemistry,
                Economics and English support should be matched by HL or SL needs, IA deadlines, mock timelines and
                command-term practice rather than only by locality.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border/50 bg-muted/10 p-6">
            <h2 className="text-2xl font-black tracking-tight text-foreground">Crawlable nearby links</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href={page.canonicalUrl.replace(/^https?:\/\/[^/]+/i, "")} className="rounded-full border border-primary/20 px-3 py-2 text-sm font-bold text-primary">
                IB tutors in {page.cityName}
              </Link>
              {page.premiumAreas.filter((item) => item.pageEnabled && item.slug !== area.slug).slice(0, 5).map((item) => (
                <Link key={item.slug} href={buildCityAreaPath(page.citySlug, item.slug)} className="rounded-full border border-border px-3 py-2 text-sm font-bold text-foreground hover:border-primary/40">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-border/50 bg-[#0B0F19]/60 p-6">
          <h2 className="text-2xl font-black tracking-tight text-foreground">FAQs for IB tutoring near {area.name}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-border/50 bg-background/60 p-4">
                <h3 className="font-black text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <Link
          href={buildCityPath(page.citySlug)}
          className="mt-10 inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground"
        >
          View the full {page.cityName} IB tutor page
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>
    </div>
  );
}

function buildAreaFaqs(cityName: string, areaName: string, disclaimer: string) {
  return [
    {
      question: `Can I find IB home tutors near ${areaName}?`,
      answer: `Home tutoring near ${areaName} can be reviewed when tutor travel, subject fit and lesson timing are practical. Online or hybrid support may be recommended when it gives the student a stronger IB specialist.`,
    },
    {
      question: `Which IB programmes are supported near ${areaName}?`,
      answer: `IB Gram can review PYP, MYP and DP needs near ${areaName}, including foundations, criterion-based assignments, HL and SL subject support, IA planning and exam revision.`,
    },
    {
      question: `Do ${cityName} tutors support Math AA, Physics and Chemistry?`,
      answer: `Yes. Common requests include Math AA, Math AI, Physics, Chemistry, Biology, Economics and English. Availability depends on level, schedule and mode.`,
    },
    {
      question: `Is IB Gram affiliated with schools near ${areaName}?`,
      answer: disclaimer,
    },
  ];
}
