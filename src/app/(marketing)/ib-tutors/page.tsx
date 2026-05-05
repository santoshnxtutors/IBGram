import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPinned, Network, ShieldCheck } from "lucide-react";
import { CityHubLocationPrompt, type CityHubSummary } from "@/components/seo-city/CityHubLocationPrompt";
import { getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { absoluteUrl, buildCityPath } from "@/lib/seo/slug-utils";

const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");

export const metadata: Metadata = {
  title: "IB Tutor Pages by City",
  description:
    "Explore IB Gram city pages for verified IB tutors in Gurugram, Delhi, Noida, Mumbai and Bangalore with PYP, MYP, DP, subject and local tutoring context.",
  alternates: {
    canonical: absoluteUrl("/ib-tutors/"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/ib-tutors/"),
    title: "IB Tutor Pages by City | IB Gram",
    description:
      "Browse city-wise IB tutor pages for PYP, MYP, DP and subject support across priority IB Gram service locations.",
    siteName: "IB Gram",
    images: [
      {
        url: ogImage,
        alt: "IB Gram city-wise IB tutor pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IB Tutor Pages by City | IB Gram",
    description:
      "Find city-wise IB tutor pages for Gurugram, Delhi, Noida, Mumbai and Bangalore.",
    images: [ogImage],
  },
};

export default function IbTutorsHubPage() {
  const cities = getLiveCitySeoPages();
  const citySummaries: CityHubSummary[] = cities.map((city) => ({
    cityName: city.cityName,
    citySlug: city.citySlug,
    stateName: city.stateName,
    latitude: city.latitude,
    longitude: city.longitude,
    canonicalPath: buildCityPath(city.citySlug),
  }));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-background pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary glassmorphism">
                <span className="mr-2 flex size-2 rounded-full bg-primary" />
                City pages
              </div>
              <div className="space-y-5">
                <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                  IB Tutor Pages by City
                </h1>
                <p className="max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                  Explore city-wise IB tutoring guidance for families comparing verified IB tutors in Gurugram, Delhi,
                  Noida, Mumbai and Bangalore. Each page covers local areas, school ecosystem context, PYP, MYP and DP
                  support, subject availability, tutoring modes, FAQs and safe school disclaimers.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-[#0B0F19]/60 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Network className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-foreground">What these pages include</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Local SEO, kept useful</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm font-semibold leading-relaxed text-foreground/90">
                  <li className="flex gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    IB PYP, MYP and DP support with subject-level context.
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    Area, school ecosystem and tutoring-mode notes without affiliation claims.
                  </li>
                  <li className="flex gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    Crawlable links to programme, subject, area and nearby city routes.
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/35 py-12 md:py-16">
        <div className="container mx-auto space-y-8 px-4 md:px-6">
          <CityHubLocationPrompt cities={citySummaries} />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.pageId}
                href={buildCityPath(city.citySlug)}
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
                  IB tutors in {city.cityName}
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{city.introSummary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {city.ibProgramsAvailable.map((program) => (
                    <span
                      key={program.slug}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-primary"
                    >
                      {program.slug.toUpperCase()}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
