import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2, GraduationCap, MapPinned, Network, ShieldCheck } from "lucide-react";
import { CityHubLocationPrompt, type CityHubSummary } from "@/components/seo-city/CityHubLocationPrompt";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { getLiveIgcseCityPages } from "@/lib/seo/igcse-city-pages";
import { IGCSE_PAGES_HUB } from "@/lib/seo/igcse-pages";
import { buildIgcsePagesHubSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: IGCSE_PAGES_HUB.metaTitle,
  description: IGCSE_PAGES_HUB.metaDescription,
  keywords: IGCSE_PAGES_HUB.keywords,
  alternates: {
    canonical: IGCSE_PAGES_HUB.canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: IGCSE_PAGES_HUB.canonicalUrl,
    title: IGCSE_PAGES_HUB.ogTitle,
    description: IGCSE_PAGES_HUB.ogDescription,
    siteName: "IB Gram",
    images: [
      {
        url: IGCSE_PAGES_HUB.ogImage,
        alt: "IB Gram city-wise IGCSE tutor pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: IGCSE_PAGES_HUB.ogTitle,
    description: IGCSE_PAGES_HUB.ogDescription,
    images: [IGCSE_PAGES_HUB.ogImage],
  },
};

const cityHubHighlights = [
  "City-wise IGCSE tutor pages for Cambridge and Pearson Edexcel students",
  "Local areas, nearby cities, home tutoring and online tutoring context",
  "Maths, Physics, Chemistry, Biology, English, Economics and Business support",
  "Human parent-facing content with safe school and exam-board disclaimers",
];

const parentNeeds = [
  "Confirm board, specification, subject route and exam session before tutor matching.",
  "Separate topic repair from past-paper practice, mock review and full revision planning.",
  "Choose home, online or hybrid tutoring based on subject depth and city travel practicality.",
  "Use city pages to compare nearby IGCSE tutor availability without relying on generic keyword pages.",
];

export default function IgcsePagesHubPage() {
  const cities = getLiveIgcseCityPages();
  const schema = buildIgcsePagesHubSchema(IGCSE_PAGES_HUB);
  const citySummaries: CityHubSummary[] = cities.map((city) => ({
    cityName: city.cityName,
    citySlug: city.citySlug,
    stateName: city.stateName,
    latitude: city.latitude,
    longitude: city.longitude,
    canonicalPath: city.canonicalPath,
  }));

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />

      <section className="relative overflow-hidden bg-background pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary glassmorphism">
                <span className="mr-2 flex size-2 rounded-full bg-primary" />
                IGCSE city pages
              </div>
              <div className="space-y-5">
                <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  {IGCSE_PAGES_HUB.h1}
                </h1>
                <p className="max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                  {IGCSE_PAGES_HUB.heroSummary}
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link
                  href="/contact-us/"
                  className="shimmer-btn inline-flex h-14 items-center justify-center rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Book an IGCSE Consultation
                  <ArrowRight className="ml-2 size-5" />
                </Link>
                <Link
                  href="/igcse/#subjects"
                  className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30"
                >
                  Browse IGCSE Subjects
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-[#0B0F19]/60 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Network className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-foreground">What these city pages include</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Local SEO, written for parents
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm font-semibold leading-relaxed text-foreground/90">
                  {cityHubHighlights.map((highlight) => (
                    <li className="flex gap-2" key={highlight}>
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-border/20 bg-background py-4">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6">
          {[
            ["Cities", `${cities.length} live pages`],
            ["Boards", "Cambridge and Edexcel"],
            ["Mode", "Home, online, hybrid"],
            ["Focus", "Mocks and final papers"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/20 text-primary">
                <GraduationCap className="size-4" />
              </div>
              <div>
                <div className="text-xl font-black leading-none text-foreground md:text-2xl">{label}</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B0F19]/35 py-12 md:py-16">
        <div className="container mx-auto space-y-8 px-4 md:px-6">
          <CityHubLocationPrompt cities={citySummaries} />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.pageId}
                href={city.canonicalPath}
                className="group rounded-[2rem] border border-border/50 bg-background/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                    <MapPinned className="size-4 text-secondary" />
                    {city.stateName}
                  </div>
                  <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                </div>
                <h2 className="text-2xl font-black tracking-tight text-foreground group-hover:text-primary">
                  IGCSE tutors in {city.cityName}
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{city.introSummary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Cambridge", "Edexcel", "Maths", "Sciences"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
              <BookOpenCheck className="size-4" />
              Parent workflow
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
              Use the city page before choosing a tutor
            </h2>
            <p className="text-base font-medium leading-relaxed text-muted-foreground">
              A strong IGCSE match depends on board, subject, paper route, current marks, target grade, exam session and
              whether the family needs home, online or hybrid support.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {parentNeeds.map((need) => (
              <div className="rounded-2xl border border-border/50 bg-muted/10 p-5" key={need}>
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm font-semibold leading-relaxed text-foreground/90">{need}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
