import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
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
  programmeCards,
  programmesAcrossStages,
  programmesComparisonRows,
  programmesContinuityNotes,
  programmesFaqs,
  programmesIntroParagraphs,
  programmesLearnerProfilePillars,
  programmesMetaKeywords,
  programmesParentChoiceQuestions,
} from "./content";

export const revalidate = 3600;

const pageUrl = absoluteUrl("/programmes/");

export async function generateMetadata(): Promise<Metadata> {
  const dbPage = await getDbGeneratedSeoPageByPath("/programmes/", ["programme"]);
  if (dbPage) return buildGeneratedMetadata(dbPage);
  return {
    title: "IB Programmes — PYP, MYP, DP and CP Tutoring Support | IB Gram",
    description:
      "Compare the IB continuum — PYP, MYP, Diploma and Career-related Programme — and find specialist tutors for every stage with home, online and hybrid lesson support across India.",
    keywords: programmesMetaKeywords,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: "IB Programmes — PYP, MYP, DP and CP Tutoring Support",
      description:
        "Understand the four IB programmes and the tutoring that suits each stage. Honest matching, verified profiles and calm advisor support.",
      siteName: "IB Gram",
    },
    twitter: {
      card: "summary_large_image",
      title: "IB Programmes — PYP, MYP, DP, CP",
      description: "Tutoring guidance across the full IB continuum.",
    },
  };
}

export default async function ProgrammesHubPage() {
  const visibleTutors = await getVisibleTutorsForPage("/programmes/");
  const dbPage = await getDbGeneratedSeoPageByPath("/programmes/", ["programme"]);
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
      { "@type": "ListItem", position: 2, name: "IB Programmes", item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: programmesFaqs.map((faq) => ({
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
      "Independent IB tutoring platform supporting PYP, MYP, Diploma Programme and Career-related Programme families across Indian cities.",
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, faqSchema, orgSchema],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-12">
      <JsonLd data={graphSchema} />

      {/* HERO */}
      <section className="relative w-full pt-10 sm:pt-12 pb-10 sm:pb-12 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
            <Compass className="size-3" /> The IB continuum
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-foreground">
            IB Programmes — PYP, MYP, DP and CP
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
            Honest, programme-aware tutoring for every stage of the IB journey
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
            The International Baccalaureate continuum develops inquiring, knowledgeable and caring learners. IB Gram
            connects families with verified subject specialists for each programme — PYP, MYP, the Diploma Programme
            and the Career-related Programme — across Gurugram, Delhi, Noida, Mumbai, Bangalore and online.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-4 w-full sm:w-auto">
            <Link href="/contact-us/" className="w-full sm:w-auto">
              <Button className="w-full rounded-full px-7 h-12 text-[15px] font-bold flex items-center justify-center gap-2">
                Speak with an Advisor <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full rounded-full px-6 h-12 text-[15px] font-bold border-primary/20 text-primary hover:bg-primary/5"
              >
                Contact on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO LONG-FORM */}
      <section className="container max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
          <BookOpen className="size-4" /> Understanding the continuum
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
          What an IB education actually means at home
        </h2>
        <div className="mt-5 space-y-5">
          {programmesIntroParagraphs.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg font-medium leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* LEARNER PROFILE PILLARS */}
      <ProgrammeSection
        title="What ties the four programmes together"
        description="The IB learner profile is the spine of all four programmes. These four pillars show up in classrooms, in homework and in the way IB Gram tutors plan weekly sessions."
        icon={BookOpen}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {programmesLearnerProfilePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border/50 bg-card/40 p-5 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">{pillar.title}</h4>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </ProgrammeSection>

      {/* COMPARISON TABLE */}
      <ProgrammeSection
        title="Programme Comparison"
        description="A quick overview of the IB continuum framework so families can see how the programmes line up before choosing tutoring."
        icon={CheckCircle2}
      >
        <div className="overflow-x-auto bg-card border border-border/50 rounded-2xl">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-muted/30 text-muted-foreground border-b border-border/50">
              <tr>
                <th className="px-4 sm:px-6 py-4 font-bold text-foreground">Programme</th>
                <th className="px-4 sm:px-6 py-4 font-bold text-foreground">Age range</th>
                <th className="px-4 sm:px-6 py-4 font-bold text-foreground">Curriculum organiser</th>
                <th className="px-4 sm:px-6 py-4 font-bold text-foreground">Assessment approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 text-foreground">
              {programmesComparisonRows.map((row) => (
                <tr key={row.programme} className="hover:bg-muted/10 transition-colors align-top">
                  <td className="px-4 sm:px-6 py-4 font-bold">
                    <span className="text-primary mr-2">•</span>
                    {row.programme}
                  </td>
                  <td className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap">{row.ages}</td>
                  <td className="px-4 sm:px-6 py-4 text-muted-foreground">{row.organiser}</td>
                  <td className="px-4 sm:px-6 py-4 text-muted-foreground">{row.assessment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProgrammeSection>

      {/* HOW TUTORING CHANGES PER STAGE */}
      <ProgrammeSection
        title="How IB tutoring changes between PYP, MYP, DP and CP"
        description="The shortlist for an MYP4 learner is rarely the same as the shortlist for a DP1 Higher Level Physics student. The notes below describe how sessions usually look at each stage."
        icon={Layers}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {programmesAcrossStages.map((stage) => (
            <article
              key={stage.title}
              className="rounded-2xl border border-border/50 bg-card/40 p-5 sm:p-6"
            >
              <h4 className="text-base sm:text-lg font-bold text-foreground">{stage.title}</h4>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{stage.body}</p>
              <ul className="mt-4 space-y-2">
                {stage.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm font-semibold text-foreground/90"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ProgrammeSection>

      {/* PROGRAMME CARDS */}
      <section className="w-full py-10 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Select your programme
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">Open the programme page to see subject coverage, common requests and tutoring rhythm.</p>
            </div>
            <Link
              href="/tutors/"
              className="text-sm font-bold text-primary hover:text-primary/80 flex items-center transition-colors px-4 py-2 bg-primary/5 rounded-full self-start sm:self-auto"
            >
              Browse all tutors <ArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {programmeCards.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group p-5 sm:p-6 rounded-[2rem] border border-border/50 bg-card/40 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                  <h3 className="text-lg font-bold tracking-tight text-foreground">{p.title}</h3>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 whitespace-nowrap">
                    {p.age}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-[13px]">
                  <span>Explore Programme</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT CHOICE QUESTIONS */}
      <ProgrammeSection
        title="Four questions parents ask before booking tutoring"
        description="If the family can name even partial answers to these four questions, the first advisor reply almost always lands with a useful shortlist."
        icon={Compass}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {programmesParentChoiceQuestions.map((q) => (
            <div key={q.title} className="rounded-2xl border border-border/50 bg-muted/10 p-5 sm:p-6">
              <h4 className="text-base sm:text-lg font-bold text-foreground">{q.title}</h4>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">{q.body}</p>
            </div>
          ))}
        </div>
      </ProgrammeSection>

      {/* CONTINUITY NOTES */}
      <ProgrammeSection
        title="Moving between programmes"
        description="The transitions inside the IB continuum are where most families discover whether their current study habits will survive the next stage."
        icon={GraduationCap}
      >
        <ul className="space-y-4">
          {programmesContinuityNotes.map((note) => (
            <li key={note} className="flex gap-3 rounded-2xl border border-border/50 bg-card/40 p-5">
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">{note}</p>
            </li>
          ))}
        </ul>
      </ProgrammeSection>

      <TutorDiscovery tutors={visibleTutors ?? undefined} />

      {/* FAQ */}
      <section className="container max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
          <MessageSquare className="size-4" /> Frequently asked questions
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-foreground">
          IB programme questions parents ask most often
        </h2>
        <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
          {programmesFaqs.map((faq) => (
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
      <div className="max-w-5xl mx-auto px-4 pb-4 mt-4">
        <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="text-left flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              Find the right IB tutor for the right stage
            </h3>
            <p className="text-muted-foreground font-medium max-w-xl text-sm sm:text-[15px] leading-relaxed">
              Share the city, programme stage, subjects and preferred mode. The advisor team replies with two or three
              well-matched tutor profiles — no long forms, no contracts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link href="/tutors/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full px-6 text-[15px] font-bold h-12">
                Find Your IB Tutor
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
