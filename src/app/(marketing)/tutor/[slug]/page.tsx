import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, GraduationCap, MapPin, MessageSquare, Star } from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { Markdown } from "@/components/blog/Markdown";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import {
  getPublishedTutorReachSlugs,
  getTutorReachPageBySlug,
  REACH_MIN_WORDS,
} from "@/lib/cms/tutor-reach";

export const revalidate = 120;
export const dynamicParams = true;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getPublishedTutorReachSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getTutorReachPageBySlug(slug);
  if (!page) return { title: "Page not found | IB Gram", robots: { index: false, follow: false } };

  const url = absoluteUrl(`/tutor/${page.slug}/`);
  const title = page.metaTitle ?? page.title;
  const description = page.metaDescription ?? page.intro ?? `${page.h1} — IB Gram.`;

  // Quality gate: thin pages stay out of the index to avoid duplicate-content
  // signals when a tutor has many similar pages.
  const passesGate = page.wordCount >= REACH_MIN_WORDS;
  const shouldIndex = page.indexFlag === "index" || (page.indexFlag === "auto" && passesGate);

  return {
    title: `${title} | IB Gram`,
    description,
    keywords: page.metaKeywords,
    alternates: { canonical: url },
    robots: { index: shouldIndex, follow: true },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "IB Gram",
      modifiedTime: page.updatedAt,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TutorReachPage({ params }: Props) {
  const { slug } = await params;
  const page = await getTutorReachPageBySlug(slug);
  if (!page) notFound();

  const url = absoluteUrl(`/tutor/${page.slug}/`);
  const tutorProfileUrl = absoluteUrl(`/tutor-profile/${page.tutor.slug}/`);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Tutors", item: absoluteUrl("/tutors/") },
      { "@type": "ListItem", position: 3, name: page.tutor.displayName, item: tutorProfileUrl },
      { "@type": "ListItem", position: 4, name: `${page.board} ${page.subject}`, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription ?? page.intro ?? undefined,
    serviceType: `${page.board} ${page.subject} tutoring`,
    areaServed: page.city ?? "India",
    url,
    provider: {
      "@type": "Person",
      name: page.tutor.displayName,
      url: tutorProfileUrl,
      ...(page.tutor.avatarUrl ? { image: page.tutor.avatarUrl } : {}),
    },
  };

  const faqSchema =
    page.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const graph = [breadcrumbSchema, serviceSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />

      <article className="container mx-auto max-w-3xl px-4 pt-8 md:px-6 md:pt-10">
        <Link
          href="/tutors/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> All tutors
        </Link>

        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-primary">
            <GraduationCap className="size-3" /> {page.board}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-secondary">
            {page.subject}
          </span>
          {page.city && (
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-xs font-bold text-muted-foreground">
              <MapPin className="size-3" /> {page.city}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {page.h1}
        </h1>

        {page.intro && (
          <p className="mt-5 text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">{page.intro}</p>
        )}

        {/* Tutor card — canonical link to the single profile */}
        <Link
          href={`/tutor-profile/${page.tutor.slug}/`}
          className="group mt-8 flex items-center gap-4 rounded-3xl border border-border/50 bg-card/40 p-5 transition-all hover:border-primary/30"
        >
          <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-border/50 bg-muted/20">
            {page.tutor.avatarUrl ? (
              <Image src={page.tutor.avatarUrl} alt={page.tutor.displayName} fill className="object-cover" />
            ) : (
              <div className="flex size-full items-center justify-center text-muted-foreground/40">
                <GraduationCap className="size-7" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-lg font-black text-foreground group-hover:text-primary">
                {page.tutor.displayName}
              </h2>
              <BadgeCheck className="size-4 shrink-0 text-primary" />
            </div>
            {page.tutor.headline && (
              <p className="line-clamp-1 text-sm font-medium text-muted-foreground">{page.tutor.headline}</p>
            )}
            {page.tutor.rating ? (
              <div className="mt-1 flex items-center gap-1 text-xs font-bold text-foreground">
                <Star className="size-3.5 fill-amber-400 text-amber-400" /> {page.tutor.rating.toFixed(1)}
                <span className="text-muted-foreground">({page.tutor.reviewCount} reviews)</span>
              </div>
            ) : null}
          </div>
          <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Body */}
        <Markdown content={page.body} className="mt-8" />

        {/* FAQs */}
        {page.faqs.length > 0 && (
          <section className="mt-12">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <MessageSquare className="size-4" /> Frequently asked questions
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
              {page.board} {page.subject} tutoring — common questions
            </h2>
            <div className="mt-6 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
              {page.faqs.map((faq, idx) => (
                <details key={idx} className="group p-5 sm:p-6">
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
          </section>
        )}

        <SchoolDisclaimer />

        {/* CTA */}
        <div className="mt-10 rounded-[2rem] border border-primary/20 bg-card/40 p-8 text-center">
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Book {page.tutor.displayName} for {page.board} {page.subject}
          </h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">
            Share your requirement and the advisor team will confirm availability, mode and fees.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us/"
              className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
            >
              Request This Tutor <ArrowRight className="ml-2 size-5" />
            </Link>
            <Link
              href={`/tutor-profile/${page.tutor.slug}/`}
              className="inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
            >
              View Full Profile
            </Link>
          </div>
        </div>
      </article>

      <div className="h-16 md:h-24" />
    </div>
  );
}
