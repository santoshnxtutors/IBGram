import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Compass,
  GraduationCap,
  Layers,
  Lightbulb,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { CONTACT } from "@/lib/contact";
import { FadeIn } from "./AboutAnimations";
import {
  aboutFaqs,
  aboutHeroDescription,
  aboutHowWeWorkSteps,
  aboutMetaKeywords,
  aboutPedagogyPillars,
  aboutPhilosophyCards,
  aboutStorySections,
  aboutSubjectCoverage,
  aboutValues,
  aboutWhatWeDoNot,
} from "./content";

const pageUrl = absoluteUrl("/about-us/");
const ogImage = absoluteUrl("/images/ib-gram-city-og.svg");

export const metadata: Metadata = {
  title: "About IB Gram — Independent IB & IGCSE Tutoring Platform",
  description:
    "IB Gram is an independent IB and IGCSE tutoring platform founded by Ajay Vatsyayan. Verified tutor matching, honest shortlists and calm advisor support for PYP, MYP, DP, Cambridge IGCSE and Edexcel International GCSE families.",
  keywords: aboutMetaKeywords,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "About IB Gram — Independent IB & IGCSE Tutoring Platform",
    description:
      "Founded by Ajay Vatsyayan after a decade of IB DP Mathematics and Physics tutoring. Built around honest matching, verified profiles and calm advisor support.",
    siteName: "IB Gram",
    images: [{ url: ogImage, alt: "About IB Gram" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About IB Gram",
    description:
      "Independent IB and IGCSE tutoring platform — verified tutor matching, honest shortlists, calm advisor support.",
    images: [ogImage],
  },
};

export default function AboutUsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: pageUrl,
    description: aboutHeroDescription,
    founder: { "@type": "Person", name: "Ajay Vatsyayan" },
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CONTACT.addressLine1}, ${CONTACT.addressLine2}`,
      addressLocality: CONTACT.addressCity,
      addressRegion: CONTACT.addressState,
      postalCode: CONTACT.addressPostal,
      addressCountry: CONTACT.addressCountry,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aboutFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, orgSchema, faqSchema],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground pb-16">
      <JsonLd data={graphSchema} />

      <div className="h-20 sm:h-24 md:h-32" />

      {/* HERO */}
      <section className="container max-w-5xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4 border border-primary/20">
            <Sparkles className="size-3" /> About IB Gram
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 tracking-tighter leading-[0.9]">
            Calmer IB & IGCSE <br />
            <span className="text-gradient">tutor matching</span> — <br />
            for real families.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed max-w-3xl mx-auto mt-8">
            {aboutHeroDescription}
          </p>
        </FadeIn>
      </section>

      {/* PHILOSOPHY CARDS */}
      <section className="container max-w-6xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {aboutPhilosophyCards.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1} className="flex flex-col">
              <div className="text-primary mb-4">
                {idx === 0 ? <Users className="size-8" /> : idx === 1 ? <Layers className="size-8" /> : <Lightbulb className="size-8" />}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
          <BookOpenCheck className="size-4" /> Our story
        </div>
        <div className="mt-3 space-y-12">
          {aboutStorySections.map((section) => (
            <FadeIn key={section.title}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-5">
                {section.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-base sm:text-lg font-medium leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="container max-w-6xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
            <ShieldCheck className="size-4" /> What we stand for
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Four quiet values that shape every conversation
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {aboutValues.map((value) => (
            <FadeIn key={value.title} className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h3 className="text-lg sm:text-xl font-black text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                {value.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="container max-w-6xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Compass className="size-4" /> How we work
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
              From a parent brief to a calm weekly rhythm
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
              The IB Gram workflow is deliberately short. Families tell us what they need, we confirm scope, we share
              a small shortlist, and the engagement is reviewed every few weeks. There is no automated rush at any
              step.
            </p>
          </div>
          <ol className="grid gap-4 lg:col-span-7">
            {aboutHowWeWorkSteps.map((step, idx) => (
              <li
                key={step.step}
                className="rounded-2xl border border-border/50 bg-muted/10 p-5 sm:p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-black text-primary">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-foreground">{step.step}</h3>
                    <p className="mt-1 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT WE DO NOT */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
            <ShieldCheck className="size-4" /> Boundaries we keep
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Things IB Gram will never do
          </h2>
          <ul className="mt-6 space-y-3">
            {aboutWhatWeDoNot.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground"
              >
                <span className="mt-1 size-2 shrink-0 rounded-full bg-amber-400" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PEDAGOGY */}
      <section className="container max-w-6xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
            <Layers className="size-4" /> The IB Gram pedagogy
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Four pillars that show up in every weekly plan
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {aboutPedagogyPillars.map((pillar) => (
            <FadeIn key={pillar.title} className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h3 className="text-lg sm:text-xl font-black text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SUBJECT COVERAGE */}
      <section className="container max-w-6xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
            <GraduationCap className="size-4" /> Subject coverage
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            What IB Gram tutors actually teach
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
            The platform began with Mathematics and Physics depth, then expanded carefully into the wider IB and
            IGCSE catalogue. Subject availability still varies by city and exam window.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutSubjectCoverage.map((subject) => (
            <FadeIn key={subject.group} className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h3 className="text-lg sm:text-xl font-black text-foreground">{subject.group}</h3>
              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                {subject.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FOUNDER QUOTE */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 mb-20 md:mb-28 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground italic leading-tight mb-4">
          &ldquo;Education works best when students feel understood, supported and clear about the next step.&rdquo;
        </p>
        <div className="text-primary font-black tracking-widest uppercase text-xs sm:text-sm">
          — Ajay Vatsyayan, Founder
        </div>
      </section>

      {/* FAQ */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 mb-20 md:mb-28">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
          <MessageSquare className="size-4" /> Frequently asked questions
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
          Questions parents ask about the platform itself
        </h2>
        <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
          {aboutFaqs.map((faq) => (
            <details key={faq.question} className="group p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base sm:text-lg font-black text-foreground">
                {faq.question}
                <ArrowRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <SchoolDisclaimer />
      </section>

      {/* FINAL CTA */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="rounded-[2rem] border border-primary/20 bg-card/40 p-8 text-center md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Ready to share your IB or IGCSE brief?
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
            Send a short message — the advisor team replies with a small, honest shortlist. No long forms, no
            pressure.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact-us/"
              className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
            >
              Speak with an Advisor
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
      </section>
    </div>
  );
}
