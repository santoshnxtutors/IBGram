import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  GraduationCap,
  Headphones,
  Home as HomeIcon,
  Layers,
  Lightbulb,
  MapPinned,
  MessageSquare,
  Quote,
  Sparkles,
} from "lucide-react";
import { CityHubLocationPrompt, type CityHubSummary } from "@/components/seo-city/CityHubLocationPrompt";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { getLiveCitySeoPages } from "@/lib/seo/city-pages";
import { absoluteUrl, buildCityPath } from "@/lib/seo/slug-utils";
import {
  ibTutorsBlogs,
  ibTutorsCityNotes,
  ibTutorsFaqs,
  ibTutorsIntroParagraphs,
  ibTutorsMatchingSteps,
  ibTutorsMetaKeywords,
  ibTutorsModeComparison,
  ibTutorsPricingNotes,
  ibTutorsProgrammeBreakdown,
  ibTutorsReviews,
  ibTutorsTrustSignals,
} from "./content";

const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");
const pageUrl = absoluteUrl("/ib-tutors/");

export const metadata: Metadata = {
  title: "IB Tutors in India: PYP, MYP & Diploma Programme Help by City | IB Gram",
  description:
    "Find verified IB tutors across Gurugram, Delhi, Noida, Mumbai and Bangalore for PYP, MYP and Diploma Programme support. Home, online and hybrid tutoring with parent-led shortlists and no fixed contracts.",
  keywords: ibTutorsMetaKeywords,
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "IB Tutors in India: PYP, MYP & Diploma Help by City | IB Gram",
    description:
      "Compare IB tutor pages by city, programme and subject. Built for families who want a calm, well-matched IB tutor instead of a generic search result.",
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
    title: "IB Tutors in India by City — PYP, MYP, DP",
    description:
      "Browse city-wise IB tutor pages for Gurugram, Delhi, Noida, Mumbai and Bangalore with honest, parent-friendly context.",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "IB Tutors", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ibTutorsFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: pageUrl,
    description:
      "Independent IB tutoring platform supporting PYP, MYP and Diploma Programme families across Indian cities with verified tutor profiles.",
    areaServed: cities.map((c) => ({ "@type": "City", name: c.cityName })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, faqSchema, orgSchema],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <JsonLd data={graphSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-background pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-primary glassmorphism">
              <span className="mr-2 flex size-2 rounded-full bg-primary" />
              IB tutor pages by city
            </div>
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-6xl">
              IB Tutors in India — PYP, MYP and Diploma Help by City
            </h1>
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Verified IB tutor support for families in Gurugram, Delhi, Noida, Mumbai, Bangalore and other priority
              cities. Each city page covers local school context, area-level availability, PYP, MYP and Diploma
              Programme support, subject coverage, tutoring modes and clear FAQs — so the right tutor decision is a
              calmer one.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link
                href="/contact-us/"
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                Speak with an Academic Advisor
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/tutors/"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                Browse Tutor Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="border-y border-border/20 bg-background py-6">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 md:grid-cols-4 md:px-6">
          {ibTutorsTrustSignals.map((stat) => (
            <div key={stat.value} className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/20 text-primary">
                <Sparkles className="size-4" />
              </div>
              <div className="min-w-0">
                <div className="text-base font-black leading-tight text-foreground sm:text-lg md:text-xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CITY GRID */}
      <section className="bg-[#0B0F19]/35 py-12 md:py-16">
        <div className="container mx-auto space-y-8 px-4 md:px-6">
          <CityHubLocationPrompt cities={citySummaries} />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.pageId}
                href={buildCityPath(city.citySlug)}
                className="group rounded-[1.75rem] border border-border/50 bg-background/50 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5 sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                    <MapPinned className="size-4 text-secondary" />
                    {city.stateName}
                  </div>
                  <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                </div>
                <h2 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary sm:text-2xl">
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

      {/* LONG-FORM INTRO */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Compass className="size-4" />
              Choosing an IB tutor
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              The right IB tutor decision is usually a programme decision first
            </h2>
            {ibTutorsIntroParagraphs.map((para, idx) => (
              <p key={idx} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PYP / MYP / DP BREAKDOWN */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Layers className="size-4" />
              Programme-aware support
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              How tutoring changes between PYP, MYP and the Diploma Programme
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Each IB stage rewards a slightly different teaching rhythm. The shortlist for an MYP4 learner is rarely
              the same as the shortlist for a DP1 Higher Level Physics student, even when the city and timing look
              similar.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {ibTutorsProgrammeBreakdown.map((stage) => (
              <article
                key={stage.title}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6 transition-all hover:border-primary/40"
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-primary">
                  <GraduationCap className="size-4" />
                  {stage.title}
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{stage.body}</p>
                <ul className="mt-5 space-y-2">
                  {stage.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-semibold text-foreground/90">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATCHING WORKFLOW */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                <BookOpenCheck className="size-4" />
                How matching works
              </div>
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                A small, honest shortlist beats a long generic list
              </h2>
              <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                Families consistently say the same thing — they wanted fewer options, better described. So the IB Gram
                workflow is built around two or three tutor profiles per request, with clear notes on subject fit,
                programme experience and current availability.
              </p>
            </div>
            <ol className="grid gap-4 lg:col-span-7">
              {ibTutorsMatchingSteps.map((step, idx) => (
                <li
                  key={step.step}
                  className="rounded-2xl border border-border/50 bg-muted/10 p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-black text-primary">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-black text-foreground sm:text-lg">{step.step}</h3>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MODE COMPARISON */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <HomeIcon className="size-4" />
              Home, online or hybrid
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Choosing how IB tutoring is delivered
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              The honest answer is that the right mode usually depends on the subject and the city, not on family
              preference alone. Higher Level subject specialists are often easiest to reach online, while younger
              learners benefit from in-person calm.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {ibTutorsModeComparison.map((mode) => (
              <div
                key={mode.title}
                className="rounded-3xl border border-border/50 bg-background/60 p-6 transition-all hover:border-secondary/40"
              >
                <h3 className="text-lg font-black text-foreground">{mode.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITY NOTES */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <MapPinned className="size-4" />
              City availability notes
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Where IB tutor inventory tends to be strongest
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              IB tutor density is uneven, which is why the city page matters. These notes describe the active pockets
              today — they are not promises that every tutor lives within the area, simply that matching usually finds
              someone calmly without depending on long commutes.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ibTutorsCityNotes.map((note) => (
              <article
                key={note.city}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <h3 className="text-lg font-black text-foreground">{note.city}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING NOTES */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Lightbulb className="size-4" />
              Fees & engagement
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              How IB tutor pricing usually works
            </h2>
            {ibTutorsPricingNotes.map((note, idx) => (
              <p key={idx} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT REVIEWS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Quote className="size-4" />
              Parent voices
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What families say after their first month
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Quotes shared with permission from families using IB Gram. Names are anonymised; locations are kept so
              readers can match context to their own city.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {ibTutorsReviews.map((review, idx) => (
              <figure
                key={idx}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <Quote className="size-6 text-primary/70" />
                <blockquote className="mt-4 text-sm font-medium leading-relaxed text-foreground/90">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-border/40 pt-4 text-xs font-black uppercase tracking-[0.14em] text-muted-foreground">
                  {review.label} · {review.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TEASERS */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <BookOpenCheck className="size-4" />
              From the IB Gram blog
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Reading worth keeping for the next report-card week
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {ibTutorsBlogs.map((blog) => (
              <article
                key={blog.title}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-secondary">
                  {blog.category}
                </span>
                <h3 className="mt-4 text-lg font-black leading-snug text-foreground">{blog.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{blog.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <MessageSquare className="size-4" />
              Frequently asked questions
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              IB tutor questions parents ask most often
            </h2>
            <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
              {ibTutorsFaqs.map((faq) => (
                <details key={faq.question} className="group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-black text-foreground sm:text-lg">
                    {faq.question}
                    <ArrowRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
            <SchoolDisclaimer />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/20 bg-background/70 p-8 text-center md:p-12">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Headphones className="size-4" />
              Speak with an advisor
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Share the brief — we will send a small, honest shortlist
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              City, programme stage, subjects, current concerns and your preferred tutoring mode is enough to start.
              No long forms, no pressure — just two or three profiles to review.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact-us/"
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                Book an Advisor Call
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/igcse-pages/"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                Explore IGCSE Pages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
