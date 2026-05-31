import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  Compass,
  GraduationCap,
  Headphones,
  Layers,
  Lightbulb,
  MapPinned,
  MessageSquare,
  Quote,
} from "lucide-react";
import { CityHubLocationPrompt, type CityHubSummary } from "@/components/seo-city/CityHubLocationPrompt";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { getLiveIgcseCityPages } from "@/lib/seo/igcse-city-pages";
import { IGCSE_PAGES_HUB } from "@/lib/seo/igcse-pages";
import { buildIgcsePagesHubSchema } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import {
  igcsePagesAlevelBridge,
  igcsePagesBlogs,
  igcsePagesBoardComparison,
  igcsePagesCityNotes,
  igcsePagesExtraFaqs,
  igcsePagesIntroParagraphs,
  igcsePagesMetaKeywordsExtra,
  igcsePagesMockTimeline,
  igcsePagesParentWorkflow,
  igcsePagesReviews,
  igcsePagesSubjectTracks,
} from "./content";

const combinedKeywords = Array.from(new Set([...IGCSE_PAGES_HUB.keywords, ...igcsePagesMetaKeywordsExtra]));

export const metadata: Metadata = {
  title: IGCSE_PAGES_HUB.metaTitle,
  description: IGCSE_PAGES_HUB.metaDescription,
  keywords: combinedKeywords,
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

export default function IgcsePagesHubPage() {
  const cities = getLiveIgcseCityPages();
  const hubSchema = buildIgcsePagesHubSchema(IGCSE_PAGES_HUB);
  const citySummaries: CityHubSummary[] = cities.map((city) => ({
    cityName: city.cityName,
    citySlug: city.citySlug,
    stateName: city.stateName,
    latitude: city.latitude,
    longitude: city.longitude,
    canonicalPath: city.canonicalPath,
  }));

  const combinedFaqs = [...IGCSE_PAGES_HUB.faqs, ...igcsePagesExtraFaqs];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "IGCSE", item: absoluteUrl("/igcse/") },
      { "@type": "ListItem", position: 3, name: "IGCSE City Pages", item: IGCSE_PAGES_HUB.canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: combinedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [hubSchema, breadcrumbSchema, faqSchema],
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
              IGCSE city pages
            </div>
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {IGCSE_PAGES_HUB.h1}
            </h1>
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {IGCSE_PAGES_HUB.heroSummary}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link
                href="/contact-us/"
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                Book an IGCSE Consultation
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/igcse/#subjects"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                Browse IGCSE Subjects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
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
              <div className="min-w-0">
                <div className="text-lg font-black leading-none text-foreground sm:text-xl md:text-2xl">{label}</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                  {value}
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
                href={city.canonicalPath}
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

      {/* LONG-FORM INTRO */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Compass className="size-4" />
              Choosing an IGCSE tutor
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              A useful IGCSE shortlist starts with the board, not the keyword
            </h2>
            {igcsePagesIntroParagraphs.map((para, idx) => (
              <p key={idx} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD COMPARISON */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Layers className="size-4" />
              Cambridge vs Edexcel
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              The two IGCSE boards families compare most often
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Both Cambridge IGCSE and Pearson Edexcel International GCSE are widely accepted, well-respected
              qualifications. Choosing between them at home is usually a non-issue — the school sets the route. Where
              tutor matching is concerned, the differences below are the ones that actually shape teaching.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            {igcsePagesBoardComparison.map((board) => (
              <article
                key={board.board}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <h3 className="text-lg font-black text-foreground sm:text-xl">{board.board}</h3>
                <ul className="mt-4 space-y-3">
                  {board.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECT TRACKS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <BookOpenCheck className="size-4" />
              Subject coverage
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              IGCSE subjects we shortlist tutors for most often
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2">
            {igcsePagesSubjectTracks.map((track) => (
              <article
                key={track.title}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <h3 className="text-lg font-black text-foreground sm:text-xl">{track.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{track.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MOCK TIMELINE */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <CalendarClock className="size-4" />
              Mock and exam rhythm
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              A realistic IGCSE revision calendar
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Most schools follow a similar mock cycle even when their final exam series differs. The phases below are
              the ones tutors plan their weekly sessions around.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            {igcsePagesMockTimeline.map((item) => (
              <article key={item.label} className="rounded-3xl border border-border/50 bg-background/60 p-6">
                <div className="text-xs font-black uppercase tracking-[0.18em] text-secondary">{item.label}</div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
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
              Where IGCSE tutor inventory is currently strongest
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {igcsePagesCityNotes.map((note) => (
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

      {/* A-LEVEL BRIDGE */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Lightbulb className="size-4" />
              Looking ahead
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Planning the bridge from IGCSE into A-Levels
            </h2>
            {igcsePagesAlevelBridge.map((para, idx) => (
              <p key={idx} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT WORKFLOW */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
              <BookOpenCheck className="size-4" />
              Parent workflow
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Use the city page before choosing a tutor
            </h2>
            <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              A strong IGCSE match depends on board, subject, paper route, current marks, target grade, exam session
              and whether the family needs home, online or hybrid support.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {igcsePagesParentWorkflow.map((need) => (
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

      {/* PARENT REVIEWS */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Quote className="size-4" />
              Parent voices
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What IGCSE families say after their first month
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Quotes shared with permission. Names anonymised; locations preserved so readers can match context to
              their own city.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {igcsePagesReviews.map((review, idx) => (
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <BookOpenCheck className="size-4" />
              From the IB Gram blog
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Reading worth keeping for the next mock window
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {igcsePagesBlogs.map((blog) => (
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
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <MessageSquare className="size-4" />
              Frequently asked questions
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              IGCSE tutor questions parents ask most often
            </h2>
            <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
              {combinedFaqs.map((faq) => (
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
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/20 bg-background/70 p-8 text-center md:p-12">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Headphones className="size-4" />
              Speak with an advisor
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Share the IGCSE brief — we will reply with a small, honest shortlist
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Board, syllabus code, subjects, school timeline and preferred tutoring mode is usually enough to start.
              No long forms, no pressure — just two or three profiles to compare.
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
                href="/ib-tutors/"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                Explore IB Tutor Pages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
