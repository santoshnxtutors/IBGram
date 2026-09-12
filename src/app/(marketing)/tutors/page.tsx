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
  title: "Find IB & IGCSE Tutors Worldwide — Online, Home & Hybrid | IB Gram",
  description:
    "Search verified IB and IGCSE tutors by curriculum, subject, level and learning mode. Online lessons worldwide in your time zone, plus home and hybrid options where tutors are local.",
  keywords: [
    "IB tutors",
    "IGCSE tutors",
    "IB home tutor",
    "online IB tutor",
    "IB Math AA tutor",
    "IB Physics tutor",
    "IGCSE Math tutor",
    "IB DP tutor",
    "online IB tutor",
    "IB tutors worldwide",
    "IGCSE tutor online",
    "IB tutors in Gurugram",
  ],
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: CANONICAL,
    title: "Find IB & IGCSE Tutors Worldwide — Online, Home & Hybrid",
    description: "Browse verified IB PYP, MYP, DP and IGCSE tutors worldwide. Subject-first matching for online, home and hybrid lessons.",
    siteName: "IB Gram",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find IB & IGCSE Tutors — IB Gram",
    description: "Verified IB and IGCSE tutor directory for online, home and hybrid lessons worldwide.",
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
      "Online lessons are available worldwide and are the default outside India. Home and hybrid lessons run where a tutor is genuinely local. We recommend online whenever a stronger subject specialist is not realistically nearby, so subject fit is never traded away for proximity.",
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
      "Common subjects are typically matched within one working day. Specialist HL-only requests may take 2–3 working days to confirm the right verified profile. Requests that need a specific time-zone window can take slightly longer.",
  },
  {
    question: "Which countries do you tutor students in?",
    answer:
      "Online lessons are available in any country. Tutors list the countries they actively cover on their profile card, and many cover every country. Common regions include India, the UAE and wider Gulf, Singapore and South East Asia, the UK and Europe, and the US, Canada and Australia.",
  },
  {
    question: "How do lessons work across different time zones?",
    answer:
      "Sessions are booked in your local clock, not ours, and the confirmation names the zone in full. Tutors are matched partly on whether their availability genuinely overlaps your school week, so most families settle on weekday evenings or weekend mornings in their own time zone.",
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

        <header className="max-w-5xl">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">Verified tutor directory</span>
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-foreground md:text-6xl">
            Find IB &amp; IGCSE tutors worldwide for online, home and hybrid lessons
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Search verified IB PYP, MYP, DP and IGCSE tutors and filter by curriculum, subject, level and learning mode. Online lessons run in
            your own time zone anywhere in the world; home and hybrid lessons are available where tutors are local. Indicative fees, lesson
            modes, countries covered and verified badges are shown on every tutor card.
          </p>
        </header>
      </section>

      <TutorsClient tutors={tutorsForClient} />

      <section className="container mx-auto mt-16 space-y-10 px-4 md:px-6">
        <article>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            How IB Gram matches IB and IGCSE tutors to your family
          </h2>
          <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
            <p>
              IB Gram is an independent tutoring platform. Our matching review starts with the student&apos;s curriculum stage (IB PYP, MYP, DP or
              IGCSE Grade 9 / Grade 10), subject and HL or SL choice, school timeline and lesson-mode preference. Only then do we filter by
              realistic availability — time-zone overlap for online lessons, travel range for in-person ones. This keeps subject specialist fit at the centre of the match instead of trading it away for the
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
            Where IB Gram tutors work: online worldwide, in person in India
          </h2>
          <div className="mt-5 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
            <p>
              Online tutoring is available in any country, scheduled to the student&apos;s own time zone. Families come to us from India, the
              UAE and the wider Gulf, Singapore and South East Asia, the UK and Europe, and the United States, Canada and Australia. Every
              tutor card lists the countries that tutor actively covers, so you can see the fit before you enquire.
            </p>
            <p>
              In-person home and hybrid lessons run in India, where our tutor network is physically based. In Gurugram (still widely searched
              as Gurgaon) the most requested areas include Golf Course Road, DLF Phase 5, Sector 57, Sushant Lok and Sohna Road, with similar
              depth across South Delhi, Mumbai BKC and Powai, and Bangalore Indiranagar, Whitefield and Sarjapur.
            </p>
            <p>
              Country pages set out how the IB and IGCSE actually run in each school system, while city hub pages list local programme
              availability and area-specific tutor guides. Browse{" "}
              <Link href="/usa/" className="font-bold text-primary underline-offset-4 hover:underline">IB &amp; IGCSE tutors in the USA</Link>, the{" "}
              <Link href="/ib-tutors/" className="font-bold text-primary underline-offset-4 hover:underline">IB tutors hub</Link>, or jump straight to{" "}
              <Link href="/ib-tutors/gurugram/" className="font-bold text-primary underline-offset-4 hover:underline">IB tutors in Gurugram</Link>{" "}
              and{" "}
              <Link href="/igcse-tutors/gurugram/" className="font-bold text-primary underline-offset-4 hover:underline">IGCSE tutors in Gurugram</Link>.
            </p>
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">Frequently asked questions</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="h-fit rounded-xl border border-border/50 bg-card/40 p-5 transition-colors open:border-primary/30"
              >
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
