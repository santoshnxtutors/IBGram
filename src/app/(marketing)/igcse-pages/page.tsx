import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  FileText,
  GraduationCap,
  LibraryBig,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { JsonLd } from "@/components/seo-city/JsonLd";
import { buttonVariants } from "@/components/ui/button";
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
        alt: "IB Gram IGCSE pages for Cambridge and Pearson Edexcel support",
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

const supportHighlights = [
  "Cambridge IGCSE and Pearson Edexcel International GCSE support",
  "IGCSE maths, physics, chemistry, biology, English, economics and humanities",
  "Online tutoring, revision planning, syllabus mapping and exam practice",
  "Parent-friendly guidance without fake affiliation or guaranteed-result claims",
];

const subjectClusters = [
  {
    title: "Maths and Sciences",
    copy:
      "IGCSE maths, physics, chemistry and biology support is usually strongest when the tutor connects concepts with exam-style questions. Families can use the subject directory to plan weekly practice, identify weak topics and separate board-specific command words from general revision.",
  },
  {
    title: "English and Humanities",
    copy:
      "English language, English literature, history, geography and economics need clear writing routines. A good IGCSE tutor should help students move from broad notes to paragraph structure, evidence selection, timing and assessment-objective aware answers.",
  },
  {
    title: "Business, Computing and Languages",
    copy:
      "Business studies, computer science and language subjects often require a mix of specification coverage and repeated paper practice. The right match depends on the exam board, current confidence and how much independent revision the student can manage.",
  },
];

export default function IgcsePagesHubPage() {
  const schema = buildIgcsePagesHubSchema(IGCSE_PAGES_HUB);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={schema} />

      <section className="relative overflow-hidden bg-background pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-7 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                <GraduationCap className="size-4" />
                IGCSE page hub
              </div>

              <div className="space-y-5">
                <h1 className="max-w-5xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                  {IGCSE_PAGES_HUB.h1}
                </h1>
                <p className="max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-xl">
                  {IGCSE_PAGES_HUB.heroSummary}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/igcse/#subjects"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "glassmorphism h-12 rounded-full border-primary/30 px-8 text-base text-primary transition-all hover:bg-primary/10",
                  })}
                >
                  Browse IGCSE Subjects
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="/contact-us/"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "glassmorphism h-12 rounded-full px-8 text-base",
                  })}
                >
                  Speak with an Advisor
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-[#0B0F19]/70 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <SearchCheck className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight text-foreground">What this page solves</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Fast, crawlable IGCSE navigation
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm font-semibold leading-relaxed text-foreground/90">
                  {supportHighlights.map((highlight) => (
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

      <section className="border-y border-border/50 bg-[#0B0F19]/35 py-12 md:py-16">
        <div className="container mx-auto grid gap-4 px-4 md:grid-cols-4 md:px-6">
          {[
            ["Boards", "Cambridge and Edexcel"],
            ["Mode", "Online and guided tutoring"],
            ["Focus", "Subjects, assessment and revision"],
            ["Safety", "Independent platform"],
          ].map(([label, value]) => (
            <div className="rounded-2xl border border-border/50 bg-background/50 p-5" key={label}>
              <div className="text-xs font-black uppercase tracking-[0.16em] text-primary">{label}</div>
              <div className="mt-2 text-lg font-black text-foreground">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto space-y-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
              <LibraryBig className="size-4" />
              Page directory
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Find the right IGCSE support page
            </h2>
            <p className="text-base font-medium leading-relaxed text-muted-foreground">
              Parents usually arrive with one of three needs: a subject tutor, clarity on Cambridge versus Pearson
              Edexcel expectations, or a practical revision plan before mocks and final exams. These links keep the
              important IGCSE pages crawlable and easy to reach from the header and footer.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {IGCSE_PAGES_HUB.links.map((link) => (
              <Link
                key={link.linkId}
                href={link.href}
                className="group rounded-[2rem] border border-border/50 bg-background/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    {link.linkType === "assessment" ? (
                      <FileText className="size-5" />
                    ) : link.linkType === "tutor" ? (
                      <GraduationCap className="size-5" />
                    ) : (
                      <BookOpenCheck className="size-5" />
                    )}
                  </div>
                  <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{link.description}</p>
                <span className="mt-5 inline-flex text-sm font-black text-primary">{link.anchorText}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/10 py-14 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary">
              <Sparkles className="size-4" />
              SEO-safe content
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Built for families, not keyword stuffing
            </h2>
            <p className="text-base font-medium leading-relaxed text-muted-foreground">
              IGCSE search intent is rarely a single phrase. One parent may search for an IGCSE maths tutor after a mock
              result; another may need Cambridge IGCSE physics support, Pearson Edexcel chemistry help, English writing
              feedback, or a tutor who can explain assessment objectives. A useful page should connect those needs
              without repeating the same keyword unnaturally.
            </p>
            <p className="text-base font-medium leading-relaxed text-muted-foreground">
              This hub therefore works as an index: it points students to the main IGCSE curriculum guide, subject
              browsing, tutor discovery and assessment notes. It also keeps claims careful. IB Gram is an independent
              tutoring platform and is not officially affiliated with Cambridge, Pearson Edexcel or any school unless
              specifically stated.
            </p>
          </div>

          <div className="grid gap-5 lg:col-span-7">
            {subjectClusters.map((cluster) => (
              <article className="rounded-[2rem] border border-border/50 bg-background/55 p-6" key={cluster.title}>
                <h3 className="text-xl font-black tracking-tight text-foreground">{cluster.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{cluster.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-7">
            <h2 className="text-2xl font-black tracking-tight text-foreground">How IGCSE tutor matching should work</h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground">
              The best IGCSE tutor match starts with the board, subject, specification, current grade range, target
              grade, exam session and learning gaps. For Cambridge IGCSE, the tutor should understand syllabus aims,
              command words and paper formats. For Pearson Edexcel International GCSE, the tutor should be comfortable
              with the relevant specification and assessment route. IB Gram uses this context to recommend support that
              fits the student instead of sending every family to the same generic tutor profile.
            </p>
          </div>

          <div className="rounded-[2rem] border border-secondary/20 bg-secondary/5 p-7">
            <h2 className="text-2xl font-black tracking-tight text-foreground">What parents should prepare</h2>
            <ul className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-muted-foreground">
              {[
                "Board and subject name, plus the subject code if available.",
                "Recent school feedback, mock grades or topic list from the teacher.",
                "Exam session, revision timeline and preferred tutoring mode.",
                "Specific needs such as writing feedback, numerical problem solving or past-paper timing.",
              ].map((item) => (
                <li className="flex gap-2" key={item}>
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19]/45 py-14 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="mb-10 space-y-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">IGCSE Pages FAQ</h2>
            <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground">
              Clear answers for parents comparing Cambridge IGCSE tutors, Pearson Edexcel IGCSE tutors and online
              subject support.
            </p>
          </div>

          <div className="grid gap-4">
            {IGCSE_PAGES_HUB.faqs.map((faq) => (
              <article className="rounded-2xl border border-border/50 bg-background/60 p-6" key={faq.question}>
                <h3 className="text-lg font-black tracking-tight text-foreground">{faq.question}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="glassmorphism space-y-7 rounded-[2.5rem] border-primary/20 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Plan the next IGCSE step with IB Gram
            </h2>
            <p className="text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              Share the student&apos;s board, subjects, exam session and current concerns. IB Gram can help you decide
              whether the next step should be syllabus mapping, weekly tutoring, past-paper practice or focused revision
              before mocks.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact-us/"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "glassmorphism h-14 rounded-full border-primary/30 px-10 text-lg text-primary hover:bg-primary/10",
                })}
              >
                Contact IB Gram
                <ArrowRight className="ml-2 size-5" />
              </Link>
              <Link
                href="/igcse/"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "glassmorphism h-14 rounded-full border-primary/30 px-10 text-lg hover:bg-primary/5",
                })}
              >
                Open IGCSE Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
