import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  GraduationCap,
  Headphones,
  Layers,
  Lightbulb,
  MapPinned,
  MessageSquare,
  Quote,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import { CONTACT } from "@/lib/contact";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import type { Tutor } from "@/lib/tutor-data";
import { CourseTutorSection } from "./course-tutor-section";
import type { CourseSubjectContent } from "./subject-content";

type Props = {
  curriculum: string;
  subject: string;
  content: CourseSubjectContent;
  visibleTutors?: Tutor[];
};

export function SubjectPageView({ curriculum, subject, content, visibleTutors }: Props) {
  const pageUrl = absoluteUrl(`/courses/${curriculum.toLowerCase()}/${subject.toLowerCase()}/`);
  const curriculumUpper = curriculum.toUpperCase();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Courses", item: absoluteUrl(`/courses/${curriculum.toLowerCase()}/`) },
      { "@type": "ListItem", position: 3, name: `${curriculumUpper} ${content.subjectLabel}`, item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${curriculumUpper} ${content.subjectLabel} Tutoring`,
    description: content.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "IB Gram",
      url: absoluteUrl("/"),
    },
    url: pageUrl,
    inLanguage: "en",
    educationalCredentialAwarded: content.curriculumLabel,
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, faqSchema, courseSchema],
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
              {content.heroEyebrow}
            </div>
            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-6xl">
              {content.pageTitle}
            </h1>
            <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {content.heroSummary}
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <Link
                href="/contact-us/"
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-primary/30 bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                Find a {content.subjectLabel} Tutor
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/tutors/"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
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
          {[
            { value: content.curriculumLabel.split(" / ")[0], label: "Curriculum focus" },
            { value: "Verified profiles", label: "Subject and level checked before any match" },
            { value: "Home · Online · Hybrid", label: "Mode picked by subject and city realities" },
            { value: "Parent-led shortlists", label: "Two or three profiles, not a long directory" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/20 text-primary">
                <Sparkles className="size-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-black leading-tight text-foreground sm:text-base md:text-lg">
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

      {/* INTRO */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Compass className="size-4" />
              {content.curriculumLabel}
            </div>
            <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What good {curriculumUpper} {content.subjectLabel} tutoring actually looks like
            </h2>
            {content.introParagraphs.map((para, idx) => (
              <p key={idx} className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SYLLABUS TRACKS */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Layers className="size-4" />
              Syllabus and coverage
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What {curriculumUpper} {content.subjectLabel} tutoring covers
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Tutors plan around the actual syllabus, paper structure and assessment criteria — not a generic
              checklist. Each card below is a real focus area, not marketing copy.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2">
            {content.syllabusTracks.map((track) => (
              <article
                key={track.name}
                className="flex h-full flex-col rounded-3xl border border-border/50 bg-background/60 p-6"
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-primary">
                  <GraduationCap className="size-4" />
                  {track.name}
                </div>
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{track.body}</p>
                <ul className="mt-5 space-y-2">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-semibold text-foreground/90">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY APPROACH */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                <BookOpenCheck className="size-4" />
                How tutors actually plan the week
              </div>
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                The IB Gram weekly rhythm for {content.subjectLabel}
              </h2>
              <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                Strong tutoring is not the same as more tutoring. The four pillars below describe what a good weekly
                session usually contains — and what it usually leaves out.
              </p>
            </div>
            <div className="grid gap-4 lg:col-span-7">
              {content.studyApproach.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border/50 bg-muted/10 p-5 transition-colors hover:border-primary/30"
                >
                  <h3 className="text-base font-black text-foreground sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CITY NOTES */}
      <section className="bg-muted/10 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <MapPinned className="size-4" />
              Where tutor inventory is strongest
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              City availability notes for {curriculumUpper} {content.subjectLabel}
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Tutor density is uneven across India. These notes describe today&rsquo;s active pockets &mdash; not
              promises about every tutor&rsquo;s location.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.cityNotes.map((note) => (
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

      {/* PARENT REVIEWS */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <Quote className="size-4" />
              Parent voices
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              What {content.subjectLabel} families say after their first month
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Quotes shared with permission. Names anonymised; locations preserved so readers can match context to
              their own city.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {content.reviews.map((review, idx) => (
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
              <Lightbulb className="size-4" />
              From the IB Gram blog
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Reading worth keeping for the next mock window
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {content.blogs.map((blog) => (
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

      <CourseTutorSection curriculum={curriculum} subjectSlug={subject} tutors={visibleTutors} />

      {/* FAQ */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-secondary">
              <MessageSquare className="size-4" />
              Frequently asked questions
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {curriculumUpper} {content.subjectLabel} questions parents ask most often
            </h2>
            <div className="mt-8 divide-y divide-border/50 rounded-3xl border border-border/50 bg-background/60">
              {content.faqs.map((faq) => (
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
              Share the {content.subjectLabel} brief — we will reply with a small shortlist
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {content.ctaCopy}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact-us/"
                className="shimmer-btn inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl bg-primary px-7 text-base font-black text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              >
                Book an Advisor Call
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-xl border border-border bg-background/50 px-7 text-base font-black text-foreground transition-all hover:border-secondary/50 hover:bg-muted/30 sm:w-auto"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              <CheckCircle2 className="size-4 text-primary" />
              No long forms. No contracts. No pressure.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
