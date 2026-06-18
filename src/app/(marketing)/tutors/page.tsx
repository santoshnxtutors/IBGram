import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/seo-city/Breadcrumb";
import { SchoolDisclaimer } from "@/components/seo-city/SchoolDisclaimer";
import type { Tutor } from "@/lib/tutor-data";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import TutorsClient from "./TutorsClient";

const CANONICAL = absoluteUrl("/tutors/");

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Find IB & IGCSE Tutors — Home, Online & Hybrid Across India | IB Gram",
  description:
    "Search verified IB and IGCSE tutors by curriculum, subject, level and learning mode. Home, online and hybrid lessons across Gurugram, Delhi, Mumbai, Bangalore and more.",
  keywords: [
    "IB tutors",
    "IGCSE tutors",
    "IB home tutor",
    "online IB tutor",
    "IB Math AA tutor",
    "IB Physics tutor",
    "IGCSE Math tutor",
    "IB DP tutor",
    "IB tutors in Gurugram",
    "IB tutors in Gurgaon",
  ],
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Find IB & IGCSE Tutors — Home, Online & Hybrid",
    description: "Browse verified IB PYP, MYP, DP and IGCSE tutors across India. Subject-first matching for home, online and hybrid lessons.",
    siteName: "IB Gram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find IB & IGCSE Tutors — IB Gram",
    description: "Verified IB and IGCSE tutor directory for home, online and hybrid lessons.",
  },
};

const BREADCRUMB = [
  { name: "Home", url: absoluteUrl("/") },
  { name: "Tutors", url: CANONICAL },
];

const FAQS = [
  {
    question: "How does IB Gram verify tutors?",
    answer:
      "Tutor profiles are checked for IB or IGCSE subject experience, qualifications, references and lesson methodology before they are matched to a family. We surface examiner or curriculum experience only when it is genuinely verified.",
  },
  {
    question: "Are IB and IGCSE tutors available for home, online and hybrid lessons?",
    answer:
      "Yes. Most subjects have specialists available across all three modes. We recommend online or hybrid when a stronger subject specialist is not realistically local, so the subject fit is protected.",
  },
  {
    question: "Which IB DP subjects are most requested?",
    answer:
      "Mathematics AA, Mathematics AI, Physics, Chemistry, Biology, Economics, English Language and Literature, Business Management and Computer Science have the strongest verified availability.",
  },
  {
    question: "Which IGCSE subjects are most requested?",
    answer:
      "IGCSE Mathematics, Physics, Chemistry, Biology, Economics and English have the deepest active availability for both Cambridge and Edexcel boards.",
  },
  {
    question: "How long does it take to be matched with a tutor?",
    answer:
      "Common subjects are typically matched within one working day. Specialist HL-only requests may take 2–3 working days to confirm the right verified profile.",
  },
  {
    question: "Is IB Gram affiliated with IB or IGCSE schools?",
    answer:
      "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.",
  },
];

function jsonLdItemList(tutors: Tutor[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "IB and IGCSE tutors on IB Gram",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: tutors.length,
    itemListElement: tutors.slice(0, 25).map((tutor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: tutor.name,
        description: tutor.bio?.slice(0, 220),
        image: tutor.image ? absoluteUrl(tutor.image.startsWith("http") ? tutor.image : tutor.image) : undefined,
        knowsAbout: [tutor.subject, tutor.curriculum, tutor.grade].filter(Boolean),
        url: absoluteUrl(`/tutor-profile/${tutor.id}/`),
      },
    })),
  };
}

function jsonLdFaq() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export default async function TutorsPage() {
  const dbTutors = await getPublicTutorsFromDb();
  const tutorsForClient = dbTutors ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Script id="ld-tutors-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbJsonLd(BREADCRUMB))}
      </Script>
      <Script id="ld-tutors-itemlist" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdItemList(tutorsForClient))}
      </Script>
      <Script id="ld-tutors-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdFaq())}
      </Script>

      <section className="container mx-auto px-4 pt-6 md:pt-10 md:px-6">
        <Breadcrumb items={BREADCRUMB} className="mb-6" />

        <header className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-500">Verified tutor directory</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-6xl">
            Find IB &amp; IGCSE tutors for home, online and hybrid lessons
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Search verified IB PYP, MYP, DP and IGCSE tutors across India. Filter by curriculum, subject, level and learning mode. Indicative
            fees, lesson modes, areas covered and verified badges are shown on every tutor card.
          </p>
        </header>
      </section>

      <TutorsClient tutors={tutorsForClient} />

      <section className="container mx-auto mt-16 max-w-4xl space-y-10 px-4 md:px-6">
        <article>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            How IB Gram matches IB and IGCSE tutors to your family
          </h2>
          <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
            <p>
              IB Gram is an independent tutoring platform. Our matching review starts with the student&apos;s curriculum stage (IB PYP, MYP, DP or
              IGCSE Grade 9 / Grade 10), subject and HL or SL choice, school timeline and lesson-mode preference. Only then do we filter by
              realistic geographic availability. This keeps subject specialist fit at the centre of the match instead of trading it away for the
              nearest available tutor.
            </p>
            <p>
              For IB Diploma Programme students, this means a Math AA HL or Physics HL specialist is matched first by subject paper depth, IA
              scaffolding capability and command-term-aware exam practice. For IGCSE students, this means the board (Cambridge or Edexcel) is
              explicitly confirmed before a tutor is recommended, and lessons are paced for Grade 9 foundations or Grade 10 consolidation as
              required.
            </p>
            <p>
              Lessons run in three modes: home, online and hybrid. Home lessons work when subject fit, lesson cadence and travel windows align.
              Online lessons are the right answer when the strongest specialist for a student is not realistically local. Hybrid plans —
              home for content depth and online for revision — are common for Diploma Programme Year 2 students between mocks and finals.
            </p>
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Verified tutor quality
          </h2>
          <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
            <p>
              Tutor profiles on IB Gram are checked for IB or IGCSE subject experience, qualifications, references and lesson methodology before
              they are matched to a family. Where examiner or curriculum-author experience is documented, it is surfaced explicitly. Where it is
              not, we do not inflate claims, and we do not promise outcomes that depend on the student&apos;s own engagement, school timeline or
              starting level.
            </p>
            <p>
              Indicative fees are listed on each shortlisted profile. Trial sessions confirm fit before any longer commitment.
            </p>
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            Local tutoring across Gurugram, Delhi, Mumbai, Bangalore and more
          </h2>
          <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
            <p>
              IB Gram supports IB and IGCSE families across major Indian cities. In Gurugram (still widely searched as Gurgaon), the most
              requested areas include Golf Course Road, DLF Phase 5, Sector 57, Sushant Lok and Sohna Road. Similar dense availability exists
              across South Delhi, Vasant Vihar, Mumbai BKC and Powai, and Bangalore Indiranagar, Whitefield and Sarjapur.
            </p>
            <p>
              Each city hub page lists the realistic IB and IGCSE programme availability, the strongest subject inventory and the local areas
              that have area-specific tutor guides. Browse the{" "}
              <Link href="/ib-tutors/" className="font-bold text-primary underline-offset-4 hover:underline">IB tutors hub</Link> or jump straight to{" "}
              <Link href="/ib-tutors/gurugram/" className="font-bold text-primary underline-offset-4 hover:underline">IB tutors in Gurugram</Link>{" "}
              and{" "}
              <Link href="/igcse-tutors/gurugram/" className="font-bold text-primary underline-offset-4 hover:underline">IGCSE tutors in Gurugram</Link>.
            </p>
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">Frequently asked questions</h2>
          <div className="mt-5 space-y-5">
            {FAQS.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-border/50 bg-card/40 p-5">
                <summary className="cursor-pointer text-base font-black text-foreground">{faq.question}</summary>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>

        <SchoolDisclaimer />
      </section>
    </div>
  );
}
