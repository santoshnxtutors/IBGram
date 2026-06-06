import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarClock,
  CheckCircle2,
  Compass,
  Globe,
  GraduationCap,
  Library,
  MapPinned,
  MessageSquare,
} from "lucide-react";
import { ProgrammeSection } from "@/components/programmes/ProgrammeSection";
import { Button } from "@/components/ui/button";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { getDbGeneratedSeoPageByPath } from "@/lib/cms/generated-pages-db";
import { getVisibleTutorsForPage } from "@/lib/cms/tutor-visibility";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { CONTACT } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import {
  dpCityPockets,
  dpCoreElements,
  dpFaqs,
  dpGradingExplainer,
  dpInternalAssessmentNotes,
  dpIntroParagraphs,
  dpMetaKeywords,
  dpSubjectFocusCards,
  dpSubjectGroups,
  dpUniversityRecognition,
  dpYearByYearTimeline,
} from "./content";

export const revalidate = 3600;

const pageUrl = absoluteUrl("/programmes/dp/");

export async function generateMetadata(): Promise<Metadata> {
  const dbPage = await getDbGeneratedSeoPageByPath("/programmes/dp/", ["programme"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);
  return {
    title: "IB DP Tutor — Diploma Programme Subject, IA, EE & TOK Support | IB Gram",
    description:
      "IB Diploma Programme tutoring for HL/SL subjects, Mathematics AA & AI, Sciences, Economics, English, Internal Assessment, Extended Essay, Theory of Knowledge and final exam revision. Verified DP specialists, honest matching.",
    keywords: dpMetaKeywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: "IB DP Tutor — Diploma Programme Tutoring | IB Gram",
      description:
        "Verified IB DP tutors for HL/SL subjects, IA, EE, TOK and exam revision. Honest matching across Gurugram, Delhi, Noida, Mumbai, Bangalore and online.",
      siteName: "IB Gram",
    },
    twitter: {
      card: "summary_large_image",
      title: "IB DP Tutor — Diploma Programme Tutoring",
      description: "Verified IB DP tutors for HL/SL subjects, IA, EE, TOK and exam revision.",
    },
  };
}

export default async function DPPage() {
  const visibleTutors = await getVisibleTutorsForPage("/programmes/dp/");
  const dbPage = await getDbGeneratedSeoPageByPath("/programmes/dp/", ["programme"]);
  if (dbPage) {
    return (
      <>
        <GeneratedPageRenderer page={dbPage} />
        <TutorDiscovery tutors={visibleTutors ?? undefined} />
      </>
    );
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "IB Programmes", item: absoluteUrl("/programmes/") },
      { "@type": "ListItem", position: 3, name: "Diploma Programme", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dpFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "IB Diploma Programme tutoring",
    description:
      "Tutoring support for the IB Diploma Programme — HL/SL subjects across six groups, Internal Assessment planning, Extended Essay structure, Theory of Knowledge coaching and exam-cycle revision.",
    provider: { "@type": "EducationalOrganization", name: "IB Gram", url: absoluteUrl("/") },
    educationalLevel: "Ages 16–19",
    occupationalCategory: "Pre-university IB Diploma support",
    url: pageUrl,
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, faqSchema, programSchema],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-12">
      <JsonLd data={graphSchema} />

      {/* HERO */}
      <section className="relative w-full pt-10 sm:pt-12 pb-10 sm:pb-12 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 md:space-y-6">
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold text-primary bg-primary/10 rounded-full uppercase tracking-widest">
            Ages 16–19 · DP1 and DP2
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-foreground">
            IB Diploma Programme (DP) Tutoring
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            Honest, programme-aware DP support for subjects, IA, EE and TOK
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            The IB DP is a globally recognised two-year curriculum graded out of 45 points. IB Gram connects families
            with verified subject specialists for every Higher and Standard Level subject and the DP Core — Theory of
            Knowledge, the Extended Essay and CAS guidance — across Gurugram, Delhi, Noida, Mumbai, Bangalore and
            online.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-4 w-full sm:w-auto">
            <Link href="/contact-us/" className="w-full sm:w-auto">
              <Button className="w-full rounded-full px-7 h-12 text-[15px] font-bold flex items-center justify-center gap-2">
                Find Your DP Tutor <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="w-full rounded-full px-6 h-12 text-[15px] font-bold border-primary/20 text-primary hover:bg-primary/5"
              >
                Contact via WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
          <Compass className="size-4" /> What the DP is
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
          The DP in plain language, before the tutor conversation
        </h2>
        <div className="mt-5 space-y-5">
          {dpIntroParagraphs.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* CURRICULUM STRUCTURE */}
      <ProgrammeSection
        title="Curriculum Structure"
        description="Six subjects across six groups, plus the DP Core. The combination is what makes the Diploma — and what makes weekly planning matter so much."
        icon={Library}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-muted/5 border border-border/50 p-5 sm:p-6 rounded-2xl">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-4">The DP Core</h4>
            <ul className="space-y-4">
              {dpCoreElements.map((core) => (
                <li key={core.title}>
                  <div className="flex items-center font-bold text-foreground text-[15px] mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" /> {core.title}
                  </div>
                  <p className="text-sm text-muted-foreground ml-3.5 leading-relaxed">{core.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/5 border border-border/50 p-5 sm:p-6 rounded-2xl">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-4">Subject Groups</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Students choose courses from the following subject groups, ensuring breadth across humanities, sciences
              and languages:
            </p>
            <ul className="space-y-3 text-sm font-medium text-foreground">
              {dpSubjectGroups.map((group) => (
                <li key={group.group}>
                  <div className="font-bold text-foreground">{group.group}</div>
                  <p className="mt-1 text-muted-foreground leading-relaxed font-normal">{group.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ProgrammeSection>

      {/* INTERNAL ASSESSMENTS */}
      <ProgrammeSection
        title="Internal Assessments and academic integrity"
        description="IAs are usually the biggest single coursework decision in DP1. Good planning protects both the grade and the student's sanity."
        icon={CheckCircle2}
      >
        <ul className="space-y-4">
          {dpInternalAssessmentNotes.map((note) => (
            <li key={note} className="flex gap-3 rounded-2xl border border-border/50 bg-card/40 p-5">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">{note}</p>
            </li>
          ))}
        </ul>
      </ProgrammeSection>

      {/* YEAR BY YEAR TIMELINE */}
      <ProgrammeSection
        title="A realistic DP1 to DP2 timeline"
        description="Most DP students follow some version of this calendar. Tutors plan weekly sessions around it instead of against it."
        icon={CalendarClock}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {dpYearByYearTimeline.map((phase) => (
            <article key={phase.label} className="rounded-2xl border border-border/50 bg-card/40 p-5">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-secondary">{phase.label}</div>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{phase.detail}</p>
            </article>
          ))}
        </div>
      </ProgrammeSection>

      {/* GRADING */}
      <ProgrammeSection
        title="Assessment, grading and what 45 points means"
        description="The DP score is well-respected globally. We are also clear-eyed about what tutoring can and cannot guarantee."
        icon={Award}
      >
        <div className="space-y-4">
          {dpGradingExplainer.map((line, idx) => (
            <div
              key={idx}
              className="bg-card border border-border/50 p-5 sm:p-6 rounded-2xl flex flex-col sm:flex-row gap-5 sm:gap-6 items-start"
            >
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                {idx === 0 ? (
                  <Globe className="w-6 h-6 text-primary" />
                ) : idx === 1 ? (
                  <Award className="w-6 h-6 text-primary" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                )}
              </div>
              <p className="text-muted-foreground text-sm sm:text-[15px] leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
      </ProgrammeSection>

      {/* UNIVERSITY RECOGNITION */}
      <ProgrammeSection
        title="University Recognition"
        description="The IB Diploma is recognised globally. The specifics vary by country and institution — confirm requirements directly with the university before making decisions."
        icon={BookOpen}
      >
        <div className="space-y-4">
          {dpUniversityRecognition.map((line, idx) => (
            <p
              key={idx}
              className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium border border-border/50 bg-card/40 rounded-2xl p-5"
            >
              {line}
            </p>
          ))}
        </div>
      </ProgrammeSection>

      {/* WHY OUR DP TUTORS */}
      <ProgrammeSection
        title="Why families choose IB Gram for DP tutoring"
        description="Subject support for DP coursework, assessment timelines and exam preparation — without score guarantees."
        icon={GraduationCap}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dpSubjectFocusCards.map((card) => (
            <div key={card.title} className="bg-card border border-border/50 p-5 rounded-xl">
              <h4 className="text-[15px] font-bold text-foreground mb-2">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </ProgrammeSection>

      {/* CITY POCKETS */}
      <ProgrammeSection
        title="Where DP tutor inventory is currently strongest"
        description="DP tutor density is uneven across India. These notes describe the active pockets today, not a promise that every tutor lives within the area."
        icon={MapPinned}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dpCityPockets.map((note) => (
            <article key={note.city} className="rounded-2xl border border-border/50 bg-card/40 p-5">
              <h4 className="text-base sm:text-lg font-bold text-foreground">{note.city}</h4>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{note.body}</p>
            </article>
          ))}
        </div>
      </ProgrammeSection>

      <TutorDiscovery tutors={visibleTutors ?? undefined} />

      {/* FAQ */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
          <MessageSquare className="size-4" /> Frequently asked questions
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
          DP tutoring questions parents ask most often
        </h2>
        <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
          {dpFaqs.map((faq) => (
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
      <div className="max-w-5xl mx-auto px-4 mt-4 mb-8">
        <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              Build a calmer DP plan — without score guarantees
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-sm sm:text-[15px] leading-relaxed">
              Share city, subject choices, current concerns and exam window. The advisor team replies with two or
              three DP-experienced tutor profiles to compare. No long contracts, no pressure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link href="/tutors/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                Find a DP Tutor
              </Button>
            </Link>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link href="/contact-us/" className="flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full px-6 text-[15px] font-bold h-12 border-border/60 hover:bg-muted/20"
                >
                  Contact Us
                </Button>
              </Link>
              <Link
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full px-6 text-[15px] font-bold h-12 border-primary/30 text-primary hover:bg-primary/10"
                >
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
