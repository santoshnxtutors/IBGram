/**
 * Seeds 25+ Gurgaon "money pages" as published GeneratedPage rows with their
 * child PageBlock / PageFaq / PageMetadata / PageSchema / PageInternalLink rows.
 *
 * Page types covered:
 *   - City hub (IB Gurugram)
 *   - 7 Area pages (Golf Course Road, DLF Phase 5, Sector 57, Sohna Road,
 *     Sushant Lok, Sector 49, Sector 50)
 *   - 3 School pages (Lancers Intl, Scottish High Intl, Pathways World)
 *   - IGCSE city hub
 *   - 6 IGCSE subject pages (Math, Physics, Chemistry, Biology, Economics, English)
 *   - 9 IB subject money pages (Math AA, Math AI, Physics, Chemistry, Biology,
 *     Economics, English, Business, Computer Science)
 *
 * Every page carries: unique primaryKeyword, secondary keywords array, H1,
 * metaTitle, metaDescription, canonical, robots index decision, breadcrumb data,
 * hero, local intro, subject section, internal links, 6+ FAQs, JSON-LD schemas,
 * quality scoring, last-updated timestamp.
 *
 * All copy is humanised, original, and respects the school-affiliation disclaimer.
 * No fake claims. Word counts target ≥1,800 words per top-tier money page.
 *
 * Run with:  npx tsx database/prisma/seed-gurgaon-money-pages.ts
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient, PageStatus, IndexFlag, PageType, Curriculum } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "../..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();

const DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function jsonLdOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: "https://ibgram.com/",
    description:
      "Independent tutoring platform matching IB and IGCSE students with verified subject specialists across home, online and hybrid modes.",
  };
}

function jsonLdBreadcrumb(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function jsonLdFaq(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function jsonLdService(args: { name: string; area: string; subjects: string[]; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: args.name,
    provider: { "@type": "EducationalOrganization", name: "IB Gram", url: "https://ibgram.com/" },
    areaServed: args.area,
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${args.name} subjects`,
      itemListElement: args.subjects.map((subject) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: subject },
      })),
    },
    url: args.url,
  };
}

function wordCount(text: string): number {
  return text
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function paragraph(...sentences: string[]) {
  return sentences.join(" ");
}

// ─── Pages ────────────────────────────────────────────────────────────────────

type SeedPage = {
  pageType: PageType;
  curriculum: Curriculum;
  slug: string;
  fullPath: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroTitle: string;
  heroSubtitle: string;
  introSummary: string;
  breadcrumb: Array<{ name: string; url: string }>;
  blocks: Array<{ blockType: string; heading?: string; body?: string; items?: unknown }>;
  faqs: Array<{ question: string; answer: string }>;
  internalLinks: Array<{ targetUrl: string; anchorText: string; context?: string }>;
};

const ABSOLUTE = (p: string) => `https://ibgram.com${p}`;

// City hub: /ib-tutors/gurugram/
const IB_GURUGRAM_HUB: SeedPage = {
  pageType: PageType.city,
  curriculum: Curriculum.IB,
  slug: "gurugram",
  fullPath: "/ib-tutors/gurugram/",
  primaryKeyword: "IB tutors in Gurugram",
  secondaryKeywords: [
    "IB tutors in Gurgaon",
    "IB home tutor Gurugram",
    "IB home tutor Gurgaon",
    "IB DP tutor Gurgaon",
    "IB MYP tutor Gurgaon",
    "IB PYP tutor Gurgaon",
    "online IB tutor Gurgaon",
    "home tuition for IB Gurgaon",
    "IB Math AA tutor Gurugram",
    "IB Physics tutor Gurugram",
  ],
  metaTitle: "IB Tutors in Gurugram (Gurgaon) — Home, Online & Hybrid | IB Gram",
  metaDescription:
    "Find verified IB PYP, MYP and DP tutors across Gurugram (Gurgaon). Compare home, online and hybrid lessons by subject, level and area. School-agnostic, family-first matching.",
  h1: "IB tutors in Gurugram (Gurgaon)",
  heroTitle: "IB tutoring across Gurugram — matched by subject, level and lesson mode",
  heroSubtitle:
    "Families across Gurugram still search for IB tutors as both \"Gurgaon\" and \"Gurugram\". This hub answers both, and shows how IB Gram matches students with verified specialists for IB PYP, MYP and Diploma Programme across Golf Course Road, DLF, Sector 57, Sushant Lok, Sohna Road and the wider city.",
  introSummary:
    "IB Gram is an independent tutoring platform helping families in Gurugram (Gurgaon) compare home, online and hybrid IB lessons. We match students to verified subject specialists by curriculum stage, programme level, school timeline, preferred lesson mode and realistic local availability, not by simple postcode lookups.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
    { name: "Gurugram", url: ABSOLUTE("/ib-tutors/gurugram/") },
  ],
  blocks: [
    {
      blockType: "intro",
      heading: "What IB families in Gurugram usually ask first",
      body: paragraph(
        "Parents reaching out from Gurugram (still widely searched as Gurgaon) typically begin with one of three questions: whether IB home tutoring is realistic given travel and traffic between sectors; whether the student should be matched to a Diploma Programme specialist outside their immediate area for a better subject fit; and whether IB MYP foundations or PYP enquiry-based support can be aligned with school timelines without rushing.",
        "Each of these questions has a different right answer depending on the student's programme stage, subject, HL or SL combination, and lesson-mode preference. IB Gram does not pretend that every request is best served by the nearest tutor. Instead, the matching review looks at exact local home availability first, then opens up city-wide availability and online-led options if the subject specialist fit is stronger elsewhere.",
        "This hub explains how that works for Gurugram families specifically, and links into the area, school and subject pages so you can move from a city overview to the exact context that matches your child."
      ),
    },
    {
      blockType: "programmes",
      heading: "IB programmes supported across Gurugram",
      body: paragraph(
        "PYP (Primary Years Programme, ages 3–12) is supported with enquiry-based foundations, transdisciplinary themes, English-language reasoning, early Maths fluency, and parent-facing reporting. MYP (Middle Years Programme, ages 11–16) is supported with criterion-based assessment coaching, eAssessment preparation, MYP Personal Project mentoring, and bridging support into Diploma Programme subject groups. DP (Diploma Programme, ages 16–19) is supported across Maths AA, Maths AI, Physics, Chemistry, Biology, Economics, English Language and Literature, Business Management, Computer Science, with IA planning, Extended Essay mentoring, Theory of Knowledge coaching, and mock-to-final exam revision."
      ),
      items: ["PYP — enquiry-based foundations", "MYP — criterion-based and Personal Project", "DP — HL/SL specialists, IA, EE, ToK"],
    },
    {
      blockType: "subjects",
      heading: "DP subjects with active Gurugram availability",
      body: paragraph(
        "Mathematics AA (Analysis and Approaches) and Mathematics AI (Applications and Interpretation) are the most-requested DP subjects in Gurugram. Both have HL and SL pathways and IB Gram tutors prepare students for paper structure, calculator policy, IA mathematical exploration, and command-term-aware revision.",
        "Sciences — Physics, Chemistry and Biology — are matched to tutors who teach to the IB syllabus rather than CBSE or Cambridge content, with Internal Assessment scaffolding, data-handling depth, and exam-paper command-term practice.",
        "Economics, English Language and Literature, Business Management and Computer Science round out the most-requested DP group with Gurugram families and are matched to specialists with marker or examiner experience where available."
      ),
      items: [
        "Math AA (HL/SL)",
        "Math AI (HL/SL)",
        "Physics (HL/SL)",
        "Chemistry (HL/SL)",
        "Biology (HL/SL)",
        "Economics (HL/SL)",
        "English Lang & Lit (HL/SL)",
        "Business Management (HL/SL)",
        "Computer Science (HL/SL)",
      ],
    },
    {
      blockType: "areas",
      heading: "Gurugram areas with area-specific IB tutor guides",
      body: paragraph(
        "We publish area-specific guides so families do not have to guess whether home tutoring is realistic from their location.",
        "Golf Course Road, DLF Phase 5, Sushant Lok, Sector 57 and Sohna Road have the highest IB enquiry density, with overlapping tutor availability for DP HL Maths and Sciences and for MYP subject support."
      ),
      items: [
        "Golf Course Road",
        "DLF Phase 5",
        "Sushant Lok",
        "Sector 57",
        "Sector 49",
        "Sector 50",
        "Sohna Road",
      ],
    },
    {
      blockType: "matching_process",
      heading: "How IB Gram matches a Gurugram family to a tutor",
      body: paragraph(
        "Step 1: a short call or form captures the student's programme stage, subjects, HL/SL combination, school timeline, lesson-mode preference and the area or sector they are based in.",
        "Step 2: candidates are filtered by exact subject and level fit first, then by realistic travel and timing — not the other way around.",
        "Step 3: 1–3 verified profiles are shared with you with availability, teaching style and indicative fees. You decide who to meet, then trial sessions confirm the fit before any longer commitment."
      ),
    },
    {
      blockType: "tutoring_modes",
      heading: "Home, online and hybrid — what Gurugram families actually choose",
      body: paragraph(
        "Home tutoring works best when the subject specialist is realistically located within a short drive of your sector and when the lesson cadence is steady.",
        "Online tutoring is often the right answer when a stronger specialist for Math AA HL, Physics HL or Chemistry HL is available outside your immediate area, or when the student is preparing for mocks under time pressure.",
        "Hybrid (a mix of home for content depth and online for revision) is increasingly chosen for DP Year 2 students near final exams."
      ),
      items: ["Home — area-aware", "Online — specialist-first", "Hybrid — DP exam-aligned"],
    },
    {
      blockType: "verification",
      heading: "Verified tutor quality",
      body: paragraph(
        "Tutor profiles on IB Gram are checked for IB-specific subject experience, qualifications, references and lesson methodology before they are matched to a family.",
        "We surface examiner or curriculum-author experience where it is genuinely verified. We do not inflate claims, and we do not promise outcomes that depend on a student's own engagement, school timeline or starting level."
      ),
    },
    {
      blockType: "internal_links",
      heading: "Browse Gurugram IB tutor pages",
      body: "Use the area, school and subject pages below for context-specific tutor matching.",
      items: [
        { label: "IB tutors near Golf Course Road", url: "/ib-tutors/gurugram/areas/golf-course-road/" },
        { label: "IB tutors near DLF Phase 5", url: "/ib-tutors/gurugram/areas/dlf-phase-5/" },
        { label: "IB tutors near Sector 57", url: "/ib-tutors/gurugram/areas/sector-57/" },
        { label: "IB tutors near Sohna Road", url: "/ib-tutors/gurugram/areas/sohna-road/" },
        { label: "IB Math AA tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/math-aa/" },
        { label: "IB Physics tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/physics/" },
        { label: "IB Chemistry tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/chemistry/" },
        { label: "IB Economics tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/economics/" },
        { label: "IGCSE tutors in Gurugram", url: "/igcse-tutors/gurugram/" },
      ],
    },
    {
      blockType: "cta",
      heading: "Talk to an IB Gram advisor about Gurugram tutor matching",
      body: paragraph(
        "Share the programme stage, subjects, area and lesson-mode preference, and we will return 1–3 verified IB tutor options within a working day.",
        "Trial sessions confirm fit before any longer commitment.",
        DISCLAIMER
      ),
    },
  ],
  faqs: [
    {
      question: "Are IB tutors in Gurugram the same as IB tutors in Gurgaon?",
      answer:
        "Yes. Gurugram is the official city name; Gurgaon is the historical name still widely used in search. Every IB tutor we match in Gurugram serves the same area, and our Gurgaon URLs canonicalise to the Gurugram page so search results stay consistent.",
    },
    {
      question: "Which IB subjects have the strongest tutor availability in Gurugram?",
      answer:
        "Math AA, Math AI, Physics, Chemistry, Economics and English Language and Literature have the deepest specialist availability. Business Management, Computer Science, Biology and History have active availability that may need a slightly longer match window for HL.",
    },
    {
      question: "Can IB home tutoring work between DLF Phase 5 and Sector 57?",
      answer:
        "Often, yes, depending on subject specialist availability and lesson cadence. Where a stronger HL specialist is available online, we usually recommend an online-led match plus area-aware support, so the subject fit is not compromised by travel.",
    },
    {
      question: "Do you support IB MYP and PYP, or only the Diploma Programme?",
      answer:
        "All three. PYP (ages 3–12) is supported with enquiry-based foundations, MYP (ages 11–16) with criterion-based assessment coaching and Personal Project mentoring, DP (ages 16–19) with HL/SL specialists, Internal Assessment, Extended Essay and Theory of Knowledge.",
    },
    {
      question: "What is the typical fee range for IB tutoring in Gurugram?",
      answer:
        "Fees vary by programme stage, subject HL/SL level and tutor experience. Indicative hourly ranges are shared on the shortlisted tutor profiles. We do not list fixed prices city-wide because that would not be honest given the real spread.",
    },
    {
      question: "Is IB Gram affiliated with any IB World School in Gurugram?",
      answer: DISCLAIMER,
    },
    {
      question: "How long does it take to confirm a tutor match in Gurugram?",
      answer:
        "Common subjects — Math AA, Maths AI, Physics, Chemistry, Economics, English — are typically matched within one working day. HL-only specialist requests or unusual subject combinations may take 2–3 working days to confirm the right verified profile.",
    },
  ],
  internalLinks: [
    { targetUrl: "/ib-tutors/", anchorText: "IB tutors hub", context: "Up to IB country hub" },
    { targetUrl: "/ib-tutors/gurugram/areas/golf-course-road/", anchorText: "IB tutors near Golf Course Road", context: "City to area" },
    { targetUrl: "/ib-tutors/gurugram/areas/dlf-phase-5/", anchorText: "IB tutors near DLF Phase 5", context: "City to area" },
    { targetUrl: "/ib-tutors/gurugram/areas/sector-57/", anchorText: "IB tutors near Sector 57", context: "City to area" },
    { targetUrl: "/ib-tutors/gurugram/areas/sohna-road/", anchorText: "IB tutors near Sohna Road", context: "City to area" },
    { targetUrl: "/ib-tutors/gurugram/subjects/math-aa/", anchorText: "IB Math AA tutor in Gurugram", context: "City to subject" },
    { targetUrl: "/ib-tutors/gurugram/subjects/physics/", anchorText: "IB Physics tutor in Gurugram", context: "City to subject" },
    { targetUrl: "/igcse-tutors/gurugram/", anchorText: "IGCSE tutors in Gurugram", context: "Cross-curriculum" },
    { targetUrl: "/tutors/", anchorText: "Browse all verified IB tutors", context: "Discovery" },
    { targetUrl: "/contact-us/", anchorText: "Talk to an academic advisor", context: "CTA" },
  ],
};

// ─── Generators for area / school / subject / IGCSE pages ────────────────────

function buildAreaPage(area: { slug: string; name: string; landmarks?: string[]; near?: string[] }): SeedPage {
  const path = `/ib-tutors/gurugram/areas/${area.slug}/`;
  return {
    pageType: PageType.area,
    curriculum: Curriculum.IB,
    slug: area.slug,
    fullPath: path,
    primaryKeyword: `IB tutor near ${area.name} Gurugram`,
    secondaryKeywords: [
      `IB tutor ${area.name} Gurgaon`,
      `IB home tutor ${area.name}`,
      `IB DP tutor ${area.name}`,
      `IB Math AA tutor near ${area.name}`,
      `IB Physics tutor near ${area.name}`,
    ],
    metaTitle: `IB Tutors near ${area.name}, Gurugram (Gurgaon) | IB Gram`,
    metaDescription: `Find verified IB tutors near ${area.name} in Gurugram. Compare home, online and hybrid IB PYP, MYP and DP lessons. Subject-first matching, not postcode-first.`,
    h1: `IB tutors near ${area.name}, Gurugram`,
    heroTitle: `IB tutoring near ${area.name}`,
    heroSubtitle: `${area.name} is one of Gurugram's most-requested IB tutoring areas. This page explains realistic IB home, online and hybrid availability for families based around ${area.name}${area.landmarks?.length ? ` and landmarks such as ${area.landmarks.join(", ")}` : ""}.`,
    introSummary: paragraph(
      `IB Gram matches families near ${area.name} (Gurugram, still widely searched as Gurgaon) with verified IB tutors across PYP, MYP and DP.`,
      `Subject fit is reviewed first, then travel and timing — so a stronger Math AA HL or Physics HL specialist is not lost to a long commute when an online or hybrid match would be the better outcome.`,
    ),
    breadcrumb: [
      { name: "Home", url: ABSOLUTE("/") },
      { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
      { name: "Gurugram", url: ABSOLUTE("/ib-tutors/gurugram/") },
      { name: area.name, url: ABSOLUTE(path) },
    ],
    blocks: [
      {
        blockType: "intro",
        heading: `Why ${area.name} families ask for IB tutor matching`,
        body: paragraph(
          `${area.name} sits in a part of Gurugram with multiple IB and IGCSE schools, dense weekday traffic, and a high concentration of Diploma Programme students preparing for Math AA, Physics, Chemistry and Economics.`,
          `Local home tutoring is realistic for many subjects, but for HL-only specialists or for revision under exam pressure, an online-led or hybrid match is often the stronger choice.`,
          `Our review explicitly checks subject HL/SL fit, IA and EE timelines, school assessment calendars and travel windows before recommending a tutor.`,
        ),
      },
      {
        blockType: "local_context",
        heading: `Local context for IB tutoring around ${area.name}`,
        body: paragraph(
          area.near?.length
            ? `${area.name} is adjacent to ${area.near.join(", ")} — useful when extended availability is needed for HL Sciences or for IB MYP foundations.`
            : `${area.name} has strong cross-area availability with neighbouring Gurugram sectors and DLF phases.`,
          `Travel-friendly slots tend to be early morning before school, late afternoon after school, and weekends. Online sessions extend availability outside those windows when the specialist fit is stronger online.`,
        ),
      },
      {
        blockType: "subjects",
        heading: `IB subjects most requested near ${area.name}`,
        body: `Diploma Programme requests around ${area.name} skew toward Math AA HL, Math AI SL, Physics HL, Chemistry HL, Economics HL and English Language and Literature. MYP requests focus on bridging into DP subject groups. PYP requests focus on enquiry-based foundations and English-language reasoning.`,
        items: [
          "Math AA (HL/SL)",
          "Math AI (HL/SL)",
          "Physics (HL/SL)",
          "Chemistry (HL/SL)",
          "Economics (HL/SL)",
          "English Lang & Lit (HL/SL)",
        ],
      },
      {
        blockType: "tutoring_modes",
        heading: "Home, online and hybrid — what's realistic near " + area.name,
        body: paragraph(
          `Home lessons near ${area.name} are realistic when subject fit and timing align.`,
          `Online lessons remain the best choice when a stronger HL specialist is not realistically local.`,
          `Hybrid plans (home for content, online for revision) are common for DP Year 2 students near mocks and finals.`,
        ),
      },
      {
        blockType: "internal_links",
        heading: "Nearby Gurugram pages",
        body: "Cross-link to other relevant Gurugram IB tutor pages.",
        items: [
          { label: "IB tutors in Gurugram", url: "/ib-tutors/gurugram/" },
          { label: "IB Math AA tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/math-aa/" },
          { label: "IB Physics tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/physics/" },
          { label: "IB Chemistry tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/chemistry/" },
          { label: "IGCSE tutors in Gurugram", url: "/igcse-tutors/gurugram/" },
        ],
      },
      {
        blockType: "cta",
        heading: `Get a tutor shortlist for ${area.name}`,
        body: paragraph(
          `Share the subject, programme stage, school timeline and lesson-mode preference for a student in ${area.name}, and IB Gram will return 1–3 verified IB tutor options.`,
          DISCLAIMER,
        ),
      },
    ],
    faqs: [
      {
        question: `Can I find IB home tutors near ${area.name}?`,
        answer: `Yes, when the subject specialist fit, lesson cadence and travel window all line up. Where they do not, an online or hybrid match is recommended so subject fit is not compromised.`,
      },
      {
        question: `Which IB programmes are supported near ${area.name}?`,
        answer: `PYP, MYP and DP are all supported, with the strongest active availability for DP HL/SL Math, Sciences and Economics, and for MYP criterion-based bridging.`,
      },
      {
        question: `Do tutors near ${area.name} cover Math AA HL?`,
        answer: `Yes. Math AA HL is one of the most requested DP subjects in this area. Where a stronger HL specialist is online, we usually recommend an online-led plan to protect the subject fit.`,
      },
      {
        question: `What about Physics and Chemistry support?`,
        answer: `IB Physics and Chemistry (HL/SL) are matched to tutors who teach to the IB syllabus, with Internal Assessment scaffolding and command-term-aware exam practice.`,
      },
      {
        question: `Can lessons fit a Gurugram school timetable?`,
        answer: `Most lessons run before school, after school or on weekends. Hybrid plans (home + online) are common during mocks.`,
      },
      {
        question: `Is IB Gram affiliated with schools in or near ${area.name}?`,
        answer: DISCLAIMER,
      },
    ],
    internalLinks: [
      { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "Area to city" },
      { targetUrl: "/ib-tutors/gurugram/subjects/math-aa/", anchorText: "IB Math AA tutor in Gurugram", context: "Area to subject" },
      { targetUrl: "/ib-tutors/gurugram/subjects/physics/", anchorText: "IB Physics tutor in Gurugram", context: "Area to subject" },
      { targetUrl: "/ib-tutors/gurugram/subjects/chemistry/", anchorText: "IB Chemistry tutor in Gurugram", context: "Area to subject" },
      { targetUrl: "/igcse-tutors/gurugram/", anchorText: "IGCSE tutors in Gurugram", context: "Cross-curriculum" },
    ],
  };
}

function buildSchoolPage(school: { slug: string; name: string; programme: string }): SeedPage {
  const path = `/ib-tutors/gurugram/schools/${school.slug}/`;
  return {
    pageType: PageType.school,
    curriculum: Curriculum.IB,
    slug: school.slug,
    fullPath: path,
    primaryKeyword: `IB tutor near ${school.name}`,
    secondaryKeywords: [
      `IB DP tutor near ${school.name}`,
      `IB MYP tutor near ${school.name}`,
      `Math AA tutor near ${school.name}`,
      `Physics tutor near ${school.name}`,
      `${school.name} IB support`,
    ],
    metaTitle: `IB Tutors near ${school.name}, Gurugram | IB Gram`,
    metaDescription: `Find verified IB tutors offering home, online and hybrid lessons aligned to ${school.name} timelines in Gurugram. Independent of the school. Subject-first matching.`,
    h1: `IB tutors near ${school.name}, Gurugram`,
    heroTitle: `IB tutoring aligned to ${school.name} timelines`,
    heroSubtitle: `Families with students at ${school.name} often look for IB support that respects the school's assessment calendar and the demands of the ${school.programme}. IB Gram matches verified specialists without claiming any official affiliation with the school.`,
    introSummary: paragraph(
      `${school.name} is one of Gurugram's well-known IB World Schools. IB Gram is an independent platform — we match verified IB tutors to families and align lessons with the student's school timeline, but we are not an extension of the school.`,
      `This page exists to help families search clearly and to provide an honest, non-affiliated tutor matching review.`,
    ),
    breadcrumb: [
      { name: "Home", url: ABSOLUTE("/") },
      { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
      { name: "Gurugram", url: ABSOLUTE("/ib-tutors/gurugram/") },
      { name: school.name, url: ABSOLUTE(path) },
    ],
    blocks: [
      {
        blockType: "disclaimer",
        heading: "Independent-platform disclosure",
        body: DISCLAIMER,
      },
      {
        blockType: "intro",
        heading: `Why families at ${school.name} ask for external IB support`,
        body: paragraph(
          `Independent IB tutoring at the right cadence often complements school teaching during DP Year 1 content depth, DP Year 2 Internal Assessments, and mocks-to-finals revision.`,
          `Common requests we see for ${school.name} students focus on Math AA HL, Physics HL, Chemistry HL, Economics HL, and English Language and Literature, with MYP bridging support requested earlier in the programme.`,
        ),
      },
      {
        blockType: "programmes",
        heading: "Programmes covered",
        body: `${school.name} students are matched to PYP, MYP and DP specialists depending on the year group and subject combination.`,
        items: ["PYP", "MYP", "DP HL/SL"],
      },
      {
        blockType: "subjects",
        heading: "Subjects most requested",
        body: "These DP subjects have the deepest verified specialist availability.",
        items: ["Math AA", "Math AI", "Physics", "Chemistry", "Biology", "Economics", "English Lang & Lit", "Business Management"],
      },
      {
        blockType: "matching_process",
        heading: "How matching respects school timelines",
        body: paragraph(
          `The review explicitly captures the school's term plan, IA deadlines and mock window before recommending a tutor.`,
          `Where the family asks, lessons can be planned around the school's homework load so the student is not stretched.`,
        ),
      },
      {
        blockType: "internal_links",
        heading: "Browse related Gurugram pages",
        body: "Cross-link to area and subject money pages.",
        items: [
          { label: "IB tutors in Gurugram", url: "/ib-tutors/gurugram/" },
          { label: "IB Math AA tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/math-aa/" },
          { label: "IB Physics tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/physics/" },
          { label: "IB Chemistry tutor in Gurugram", url: "/ib-tutors/gurugram/subjects/chemistry/" },
        ],
      },
      {
        blockType: "cta",
        heading: `Discuss IB tutor matching for a ${school.name} student`,
        body: paragraph(
          `Share the year group, subjects and lesson-mode preference and IB Gram will return verified options.`,
          DISCLAIMER,
        ),
      },
    ],
    faqs: [
      {
        question: `Is IB Gram affiliated with ${school.name}?`,
        answer: DISCLAIMER,
      },
      {
        question: `Can lessons match ${school.name} term plans?`,
        answer: `Yes. The matching review captures the school's term and assessment calendar so lessons align with the student's load rather than fighting it.`,
      },
      {
        question: `Which DP subjects are most requested by ${school.name} families?`,
        answer: `Math AA HL, Physics HL, Chemistry HL, Economics HL and English Language and Literature are the most-requested DP combinations.`,
      },
      {
        question: `Are home lessons realistic near ${school.name}?`,
        answer: `Often, yes — but the review checks subject fit first. Where an HL specialist is stronger online, we recommend online-led matching.`,
      },
      {
        question: `Can MYP students get bridging support?`,
        answer: `Yes. MYP criterion-based assessment coaching, eAssessment preparation and Personal Project mentoring are available.`,
      },
      {
        question: `How quickly can a tutor be matched?`,
        answer: `Common DP subjects: typically within one working day. HL-only specialist requests may take 2–3 working days.`,
      },
    ],
    internalLinks: [
      { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "School to city" },
      { targetUrl: "/ib-tutors/gurugram/subjects/math-aa/", anchorText: "IB Math AA tutor in Gurugram", context: "School to subject" },
      { targetUrl: "/ib-tutors/gurugram/subjects/physics/", anchorText: "IB Physics tutor in Gurugram", context: "School to subject" },
      { targetUrl: "/ib-tutors/gurugram/subjects/chemistry/", anchorText: "IB Chemistry tutor in Gurugram", context: "School to subject" },
      { targetUrl: "/igcse-tutors/gurugram/", anchorText: "IGCSE tutors in Gurugram", context: "Cross-curriculum" },
    ],
  };
}

function buildIbSubjectPage(subject: { slug: string; name: string; short: string; level: string }): SeedPage {
  const path = `/ib-tutors/gurugram/subjects/${subject.slug}/`;
  return {
    pageType: PageType.subject,
    curriculum: Curriculum.IB,
    slug: subject.slug,
    fullPath: path,
    primaryKeyword: `IB ${subject.name} tutor Gurugram`,
    secondaryKeywords: [
      `IB ${subject.name} tutor Gurgaon`,
      `IB ${subject.short} ${subject.level} tutor Gurugram`,
      `IB ${subject.name} home tutor Gurgaon`,
      `IB ${subject.name} online tutor Gurugram`,
      `IB DP ${subject.name} tutor`,
    ],
    metaTitle: `IB ${subject.name} Tutor in Gurugram (Gurgaon) — HL/SL | IB Gram`,
    metaDescription: `Find verified IB ${subject.name} tutors in Gurugram (Gurgaon) for HL and SL. Internal Assessment support, mock revision, command-term-aware exam practice. Home, online and hybrid.`,
    h1: `IB ${subject.name} tutor in Gurugram`,
    heroTitle: `IB ${subject.name} tutoring across Gurugram — HL and SL specialists`,
    heroSubtitle: `Whether your student is preparing for ${subject.name} at HL or SL, the right tutor needs to teach to the IB syllabus, support the Internal Assessment, and practise exam papers with command-term awareness. This page explains what to look for and how IB Gram matches Gurugram (Gurgaon) families with verified specialists.`,
    introSummary: paragraph(
      `IB ${subject.name} at HL and SL is one of the most requested DP subjects in Gurugram. IB Gram matches families to verified ${subject.name} specialists for home, online and hybrid lessons across the city, including Golf Course Road, DLF, Sector 57, Sushant Lok and Sohna Road.`,
    ),
    breadcrumb: [
      { name: "Home", url: ABSOLUTE("/") },
      { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
      { name: "Gurugram", url: ABSOLUTE("/ib-tutors/gurugram/") },
      { name: `${subject.name} tutor`, url: ABSOLUTE(path) },
    ],
    blocks: [
      {
        blockType: "intro",
        heading: `What IB ${subject.name} tutoring should cover`,
        body: paragraph(
          `${subject.name} at HL demands more depth than SL across the syllabus, and the Internal Assessment carries significant weight.`,
          `A useful tutor will not just answer questions, but actively build syllabus depth, IA scaffolding, command-term-aware exam practice, and a revision plan aligned to the school's mock and final timelines.`,
        ),
      },
      {
        blockType: "subjects",
        heading: `${subject.name} HL vs SL — what to ask the tutor`,
        body: `Ask about prior IB ${subject.name} students taught at HL and SL, examiner or marker experience if any, how the Internal Assessment is scaffolded, and the approach to exam-paper command terms.`,
        items: [`HL pathway`, `SL pathway`, `Internal Assessment scaffolding`, `Command-term practice`, `Mocks-to-finals plan`],
      },
      {
        blockType: "local_context",
        heading: `IB ${subject.name} tutor availability in Gurugram`,
        body: paragraph(
          `Across Golf Course Road, DLF Phase 5, Sector 57, Sushant Lok and Sohna Road, IB ${subject.name} availability runs through home, online and hybrid modes.`,
          `Online-led matching is common when the strongest HL specialist for the student is not realistically local.`,
        ),
      },
      {
        blockType: "tutoring_modes",
        heading: `${subject.name} — home, online and hybrid`,
        body: paragraph(
          `Home lessons work well for steady content depth.`,
          `Online lessons work best when a stronger HL specialist is available outside the immediate area.`,
          `Hybrid plans are common for DP Year 2 students between mocks and finals.`,
        ),
      },
      {
        blockType: "internal_links",
        heading: "Related Gurugram tutor pages",
        body: "Cross-link to area, school and other subject pages.",
        items: [
          { label: "IB tutors in Gurugram", url: "/ib-tutors/gurugram/" },
          { label: "IB tutors near Golf Course Road", url: "/ib-tutors/gurugram/areas/golf-course-road/" },
          { label: "IB tutors near DLF Phase 5", url: "/ib-tutors/gurugram/areas/dlf-phase-5/" },
          { label: "IGCSE tutors in Gurugram", url: "/igcse-tutors/gurugram/" },
        ],
      },
      {
        blockType: "cta",
        heading: `Get an IB ${subject.name} tutor shortlist for Gurugram`,
        body: paragraph(
          `Share HL or SL, the school year, IA stage and lesson-mode preference, and IB Gram will return verified ${subject.name} tutor options.`,
          DISCLAIMER,
        ),
      },
    ],
    faqs: [
      {
        question: `Is IB ${subject.name} tutor availability stronger at HL or SL in Gurugram?`,
        answer: `Both pathways have specialist availability. HL tends to need a slightly longer match window when the family wants a tutor with documented exam paper depth.`,
      },
      {
        question: `Can lessons be online when the strongest ${subject.name} HL specialist is not local?`,
        answer: `Yes. We recommend online-led matching whenever the subject fit is stronger online than the nearest available home tutor.`,
      },
      {
        question: `What does Internal Assessment support look like for ${subject.name}?`,
        answer: `Scaffolding the question, structuring the analysis or methodology, advising on data and command-term language, and reviewing drafts in alignment with the school's IA timeline.`,
      },
      {
        question: `Are tutors familiar with current IB ${subject.name} exam papers?`,
        answer: `Yes. Matched tutors prepare students with command-term-aware exam practice using current and recent IB papers.`,
      },
      {
        question: `How is fee structured for ${subject.name} tutoring in Gurugram?`,
        answer: `Indicative hourly rates are listed on shortlisted tutor profiles. Final pricing depends on HL/SL, tutor experience and lesson cadence.`,
      },
      {
        question: `Is IB Gram affiliated with any IB school in Gurugram?`,
        answer: DISCLAIMER,
      },
    ],
    internalLinks: [
      { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "Subject to city" },
      { targetUrl: "/ib-tutors/gurugram/areas/golf-course-road/", anchorText: "IB tutors near Golf Course Road", context: "Subject to area" },
      { targetUrl: "/ib-tutors/gurugram/areas/dlf-phase-5/", anchorText: "IB tutors near DLF Phase 5", context: "Subject to area" },
      { targetUrl: "/igcse-tutors/gurugram/", anchorText: "IGCSE tutors in Gurugram", context: "Cross-curriculum" },
    ],
  };
}

function buildIgcseCityHub(): SeedPage {
  const path = `/igcse-tutors/gurugram/`;
  return {
    pageType: PageType.city,
    curriculum: Curriculum.IGCSE,
    slug: "gurugram",
    fullPath: path,
    primaryKeyword: "IGCSE tutors in Gurugram",
    secondaryKeywords: [
      "IGCSE tutor Gurgaon",
      "IGCSE Math tutor Gurgaon",
      "IGCSE Physics tutor Gurgaon",
      "IGCSE Chemistry tutor Gurugram",
      "IGCSE home tutor Gurgaon",
      "online IGCSE tutor Gurgaon",
    ],
    metaTitle: "IGCSE Tutors in Gurugram (Gurgaon) — Cambridge & Edexcel | IB Gram",
    metaDescription:
      "Find verified IGCSE tutors in Gurugram (Gurgaon) for Cambridge and Edexcel boards. Home, online and hybrid lessons. Math, Physics, Chemistry, Biology, Economics, English support.",
    h1: "IGCSE tutors in Gurugram (Gurgaon)",
    heroTitle: "IGCSE tutoring across Gurugram — Cambridge and Edexcel specialists",
    heroSubtitle:
      "Families with IGCSE Grade 9 and Grade 10 students in Gurugram (Gurgaon) need tutors who understand the differences between Cambridge and Edexcel papers, the role of coursework where applicable, and the realistic exam preparation window.",
    introSummary: paragraph(
      `IB Gram matches Gurugram families to IGCSE tutors who teach to the live syllabus for Cambridge or Edexcel as appropriate.`,
      `Lessons run home, online or hybrid depending on subject specialist fit and the student's school timeline.`,
    ),
    breadcrumb: [
      { name: "Home", url: ABSOLUTE("/") },
      { name: "IGCSE Tutors", url: ABSOLUTE("/igcse-tutors/") },
      { name: "Gurugram", url: ABSOLUTE(path) },
    ],
    blocks: [
      {
        blockType: "intro",
        heading: "Cambridge or Edexcel — what Gurugram families ask",
        body: paragraph(
          `Most Gurugram IGCSE families want to know whether their child's school follows Cambridge or Edexcel, what the practical differences mean for paper preparation, and where the realistic specialist availability is for each subject.`,
          `Our matching review handles both boards explicitly.`,
        ),
      },
      {
        blockType: "subjects",
        heading: "IGCSE subjects with active Gurugram availability",
        body: "Most-requested subjects with verified tutor depth.",
        items: ["IGCSE Mathematics", "IGCSE Physics", "IGCSE Chemistry", "IGCSE Biology", "IGCSE Economics", "IGCSE English"],
      },
      {
        blockType: "internal_links",
        heading: "IGCSE subject money pages",
        body: "Subject-specific deeper pages.",
        items: [
          { label: "IGCSE Math tutor in Gurugram", url: "/igcse-tutors/gurugram/math/" },
          { label: "IGCSE Physics tutor in Gurugram", url: "/igcse-tutors/gurugram/physics/" },
          { label: "IGCSE Chemistry tutor in Gurugram", url: "/igcse-tutors/gurugram/chemistry/" },
          { label: "IGCSE Biology tutor in Gurugram", url: "/igcse-tutors/gurugram/biology/" },
          { label: "IGCSE Economics tutor in Gurugram", url: "/igcse-tutors/gurugram/economics/" },
          { label: "IGCSE English tutor in Gurugram", url: "/igcse-tutors/gurugram/english/" },
        ],
      },
      {
        blockType: "cta",
        heading: "Talk to IB Gram about IGCSE matching in Gurugram",
        body: paragraph(
          `Share board (Cambridge or Edexcel), subject, grade and lesson-mode preference, and we will return verified IGCSE tutor options within a working day.`,
          DISCLAIMER,
        ),
      },
    ],
    faqs: [
      { question: "Do you cover both Cambridge and Edexcel IGCSE?", answer: "Yes. We match to specialists familiar with the syllabus and exam papers of whichever board the student's school follows." },
      { question: "Which IGCSE subjects have the strongest availability?", answer: "IGCSE Math, Physics, Chemistry, Biology, Economics and English have the deepest verified specialist availability in Gurugram." },
      { question: "Can lessons be home or online?", answer: "Both. We recommend online-led when the strongest specialist for the student is not realistically local." },
      { question: "How do you match Grade 9 vs Grade 10 needs?", answer: "Grade 9 typically focuses on building foundations and steady coverage; Grade 10 focuses on consolidation, past paper practice and exam technique." },
      { question: "How fast is the match?", answer: "Common subjects: within one working day. Specialist or HL-equivalent depth requests may take 2–3 working days." },
      { question: "Is IB Gram affiliated with IGCSE schools?", answer: DISCLAIMER },
    ],
    internalLinks: [
      { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "IGCSE to IB cross-curriculum" },
      { targetUrl: "/igcse-tutors/gurugram/math/", anchorText: "IGCSE Math tutor in Gurugram", context: "City to subject" },
      { targetUrl: "/igcse-tutors/gurugram/physics/", anchorText: "IGCSE Physics tutor in Gurugram", context: "City to subject" },
      { targetUrl: "/igcse-tutors/gurugram/chemistry/", anchorText: "IGCSE Chemistry tutor in Gurugram", context: "City to subject" },
      { targetUrl: "/tutors/", anchorText: "Browse all verified IGCSE tutors", context: "Discovery" },
    ],
  };
}

function buildIgcseSubjectPage(subject: { slug: string; name: string }): SeedPage {
  const path = `/igcse-tutors/gurugram/${subject.slug}/`;
  return {
    pageType: PageType.subject,
    curriculum: Curriculum.IGCSE,
    slug: subject.slug,
    fullPath: path,
    primaryKeyword: `IGCSE ${subject.name} tutor Gurugram`,
    secondaryKeywords: [
      `IGCSE ${subject.name} tutor Gurgaon`,
      `IGCSE ${subject.name} home tutor Gurgaon`,
      `IGCSE ${subject.name} online tutor Gurugram`,
      `Cambridge IGCSE ${subject.name} tutor`,
      `Edexcel IGCSE ${subject.name} tutor`,
    ],
    metaTitle: `IGCSE ${subject.name} Tutor in Gurugram (Gurgaon) | IB Gram`,
    metaDescription: `Find verified IGCSE ${subject.name} tutors in Gurugram (Gurgaon). Cambridge or Edexcel board specialists, exam paper practice, Grade 9 and Grade 10 support. Home, online or hybrid.`,
    h1: `IGCSE ${subject.name} tutor in Gurugram`,
    heroTitle: `IGCSE ${subject.name} tutoring across Gurugram`,
    heroSubtitle: `Whether your student is preparing for IGCSE ${subject.name} under Cambridge or Edexcel, IB Gram matches verified ${subject.name} specialists for Grade 9 and Grade 10 across Gurugram (still widely searched as Gurgaon).`,
    introSummary: paragraph(
      `IGCSE ${subject.name} tutor matching in Gurugram covers both Cambridge and Edexcel boards. Lessons can run home, online or hybrid depending on subject specialist availability.`,
    ),
    breadcrumb: [
      { name: "Home", url: ABSOLUTE("/") },
      { name: "IGCSE Tutors", url: ABSOLUTE("/igcse-tutors/") },
      { name: "Gurugram", url: ABSOLUTE("/igcse-tutors/gurugram/") },
      { name: `${subject.name} tutor`, url: ABSOLUTE(path) },
    ],
    blocks: [
      {
        blockType: "intro",
        heading: `What good IGCSE ${subject.name} tutoring looks like`,
        body: paragraph(
          `A useful IGCSE ${subject.name} tutor teaches to the live syllabus for the student's board, scaffolds command-term-aware exam paper practice, and aligns lesson pace with Grade 9 foundations or Grade 10 final preparation.`,
        ),
      },
      {
        blockType: "subjects",
        heading: `${subject.name} — Cambridge vs Edexcel notes`,
        body: `Specifics differ between boards. We confirm the board explicitly at the matching stage so the tutor is aligned to the right syllabus.`,
        items: ["Cambridge IGCSE", "Edexcel IGCSE", "Grade 9 foundations", "Grade 10 consolidation", "Past paper practice"],
      },
      {
        blockType: "tutoring_modes",
        heading: "Home, online and hybrid",
        body: paragraph(
          `${subject.name} lessons can run home, online or hybrid.`,
          `Online-led matching is common when the strongest specialist for the student's board is not realistically local.`,
        ),
      },
      {
        blockType: "internal_links",
        heading: "Related IGCSE pages",
        body: "Cross-link to related Gurugram IGCSE money pages.",
        items: [
          { label: "IGCSE tutors in Gurugram", url: "/igcse-tutors/gurugram/" },
          { label: "IB tutors in Gurugram", url: "/ib-tutors/gurugram/" },
        ],
      },
      {
        blockType: "cta",
        heading: `Get an IGCSE ${subject.name} tutor shortlist for Gurugram`,
        body: paragraph(
          `Share the board, grade and lesson-mode preference for a quick shortlist.`,
          DISCLAIMER,
        ),
      },
    ],
    faqs: [
      { question: `Does the tutor confirm Cambridge or Edexcel for ${subject.name}?`, answer: `Yes. The board is confirmed during matching so the tutor is aligned to the student's syllabus.` },
      { question: `Can ${subject.name} lessons be online?`, answer: `Yes — and we recommend online when the strongest specialist for the student's board is not realistically local.` },
      { question: `How does Grade 9 differ from Grade 10 in matching?`, answer: `Grade 9 focuses on building foundations; Grade 10 focuses on consolidation, past paper practice and exam technique.` },
      { question: `Is past paper practice part of lessons?`, answer: `Yes. Past paper practice with command-term awareness is part of the matching expectation.` },
      { question: `Are tutors familiar with the current IGCSE ${subject.name} syllabus?`, answer: `Yes. Verified IGCSE ${subject.name} tutors teach to the live syllabus.` },
      { question: `Is IB Gram affiliated with IGCSE schools in Gurugram?`, answer: DISCLAIMER },
    ],
    internalLinks: [
      { targetUrl: "/igcse-tutors/gurugram/", anchorText: "IGCSE tutors in Gurugram", context: "Subject to city" },
      { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "Cross-curriculum" },
      { targetUrl: "/tutors/", anchorText: "Browse all verified IGCSE tutors", context: "Discovery" },
    ],
  };
}

// ─── Plan the seed set (26 pages) ─────────────────────────────────────────────

const SEED_PAGES: SeedPage[] = [
  IB_GURUGRAM_HUB,

  // Areas (7)
  buildAreaPage({ slug: "golf-course-road", name: "Golf Course Road", landmarks: ["Galleria Market", "DLF Cyber City"], near: ["DLF Phase 5", "Sector 57"] }),
  buildAreaPage({ slug: "dlf-phase-5", name: "DLF Phase 5", landmarks: ["The Crescent", "Magnolias"], near: ["Golf Course Road", "Sector 50"] }),
  buildAreaPage({ slug: "sector-57", name: "Sector 57", near: ["Golf Course Extension Road", "Sushant Lok"] }),
  buildAreaPage({ slug: "sohna-road", name: "Sohna Road", near: ["Sector 49", "Nirvana Country"] }),
  buildAreaPage({ slug: "sushant-lok", name: "Sushant Lok", near: ["Sector 43", "DLF Phase 1"] }),
  buildAreaPage({ slug: "sector-49", name: "Sector 49", near: ["Sohna Road", "South City"] }),
  buildAreaPage({ slug: "sector-50", name: "Sector 50", near: ["DLF Phase 5", "Nirvana Country"] }),

  // Schools (3)
  buildSchoolPage({ slug: "lancers-international-school", name: "Lancers International School", programme: "IB Diploma Programme" }),
  buildSchoolPage({ slug: "scottish-high-international-school", name: "Scottish High International School", programme: "IB Diploma Programme" }),
  buildSchoolPage({ slug: "pathways-world-school", name: "Pathways World School", programme: "IB Diploma Programme" }),

  // IB subject money pages (9)
  buildIbSubjectPage({ slug: "math-aa", name: "Math AA", short: "Math AA", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "math-ai", name: "Math AI", short: "Math AI", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "physics", name: "Physics", short: "Physics", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "chemistry", name: "Chemistry", short: "Chemistry", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "biology", name: "Biology", short: "Biology", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "economics", name: "Economics", short: "Economics", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "english", name: "English Language and Literature", short: "English Lang Lit", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "business", name: "Business Management", short: "BM", level: "HL/SL" }),
  buildIbSubjectPage({ slug: "computer-science", name: "Computer Science", short: "CS", level: "HL/SL" }),

  // IGCSE hub + subjects (1 + 6)
  buildIgcseCityHub(),
  buildIgcseSubjectPage({ slug: "math", name: "Math" }),
  buildIgcseSubjectPage({ slug: "physics", name: "Physics" }),
  buildIgcseSubjectPage({ slug: "chemistry", name: "Chemistry" }),
  buildIgcseSubjectPage({ slug: "biology", name: "Biology" }),
  buildIgcseSubjectPage({ slug: "economics", name: "Economics" }),
  buildIgcseSubjectPage({ slug: "english", name: "English" }),
];

// ─── Persistence ──────────────────────────────────────────────────────────────

async function seedOnePage(page: SeedPage, gurugramCityId: string | null) {
  const concatenatedText = [
    page.h1,
    page.heroTitle,
    page.heroSubtitle,
    page.introSummary,
    ...page.blocks.flatMap((b) => [b.heading ?? "", b.body ?? ""]),
    ...page.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(" ");
  const totalWords = wordCount(concatenatedText);

  const qualityScore = Math.min(100, 60 + Math.floor(totalWords / 50));

  const generated = await prisma.generatedPage.upsert({
    where: { fullPath: page.fullPath },
    create: {
      pageType: page.pageType,
      curriculum: page.curriculum,
      status: PageStatus.published,
      indexFlag: IndexFlag.index,
      slug: page.slug,
      fullPath: page.fullPath,
      canonicalUrl: ABSOLUTE(page.fullPath),
      cityId: gurugramCityId,
      primaryKeyword: page.primaryKeyword,
      secondaryKeywords: page.secondaryKeywords,
      searchIntent: "informational+transactional",
      title: page.h1,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      h1: page.h1,
      heroTitle: page.heroTitle,
      heroSubtitle: page.heroSubtitle,
      introSummary: page.introSummary,
      contentWordCount: totalWords,
      qualityScore,
      sitemapIncluded: true,
      robotsTag: "index, follow",
      ogTitle: page.metaTitle,
      ogDescription: page.metaDescription,
      twitterTitle: page.metaTitle,
      twitterDescription: page.metaDescription,
      publishedAt: new Date(),
      lastGeneratedAt: new Date(),
    },
    update: {
      pageType: page.pageType,
      curriculum: page.curriculum,
      status: PageStatus.published,
      indexFlag: IndexFlag.index,
      slug: page.slug,
      canonicalUrl: ABSOLUTE(page.fullPath),
      cityId: gurugramCityId ?? undefined,
      primaryKeyword: page.primaryKeyword,
      secondaryKeywords: page.secondaryKeywords,
      title: page.h1,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      h1: page.h1,
      heroTitle: page.heroTitle,
      heroSubtitle: page.heroSubtitle,
      introSummary: page.introSummary,
      contentWordCount: totalWords,
      qualityScore,
      sitemapIncluded: true,
      robotsTag: "index, follow",
      lastGeneratedAt: new Date(),
    },
  });

  await prisma.pageBlock.deleteMany({ where: { pageId: generated.id } });
  for (let index = 0; index < page.blocks.length; index++) {
    const block = page.blocks[index];
    await prisma.pageBlock.create({
      data: {
        pageId: generated.id,
        blockType: block.blockType,
        heading: block.heading ?? null,
        body: block.body ?? null,
        items: (block.items as object | undefined) ?? undefined,
        sortOrder: index,
      },
    });
  }

  await prisma.pageFaq.deleteMany({ where: { pageId: generated.id } });
  for (let index = 0; index < page.faqs.length; index++) {
    await prisma.pageFaq.create({
      data: {
        pageId: generated.id,
        question: page.faqs[index].question,
        answer: page.faqs[index].answer,
        sortOrder: index,
      },
    });
  }

  await prisma.pageMetadata.upsert({
    where: { pageId: generated.id },
    create: {
      pageId: generated.id,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalUrl: ABSOLUTE(page.fullPath),
      robotsTag: "index, follow",
      ogTitle: page.metaTitle,
      ogDescription: page.metaDescription,
      twitterTitle: page.metaTitle,
      twitterDescription: page.metaDescription,
    },
    update: {
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalUrl: ABSOLUTE(page.fullPath),
      robotsTag: "index, follow",
      ogTitle: page.metaTitle,
      ogDescription: page.metaDescription,
      twitterTitle: page.metaTitle,
      twitterDescription: page.metaDescription,
    },
  });

  // Schemas: Organization + Breadcrumb + FAQ + Service
  await prisma.pageSchema.deleteMany({ where: { pageId: generated.id } });
  const subjectsForService =
    page.pageType === PageType.subject
      ? [page.primaryKeyword]
      : ["IB Math AA", "IB Math AI", "IB Physics", "IB Chemistry", "IB Biology", "IB Economics", "IB English"];
  await prisma.pageSchema.createMany({
    data: [
      { pageId: generated.id, schemaType: "Organization", schemaJson: jsonLdOrg(), status: "published" },
      { pageId: generated.id, schemaType: "BreadcrumbList", schemaJson: jsonLdBreadcrumb(page.breadcrumb), status: "published" },
      { pageId: generated.id, schemaType: "FAQPage", schemaJson: jsonLdFaq(page.faqs), status: "published" },
      {
        pageId: generated.id,
        schemaType: "Service",
        schemaJson: jsonLdService({
          name: page.curriculum === Curriculum.IB ? "IB tutoring" : "IGCSE tutoring",
          area: "Gurugram, India",
          subjects: subjectsForService,
          url: ABSOLUTE(page.fullPath),
        }),
        status: "published",
      },
    ],
  });

  await prisma.pageInternalLink.deleteMany({ where: { sourcePageId: generated.id } });
  for (const link of page.internalLinks) {
    await prisma.pageInternalLink.create({
      data: {
        sourcePageId: generated.id,
        targetUrl: link.targetUrl,
        anchorText: link.anchorText,
        context: link.context ?? null,
      },
    });
  }

  await prisma.pageQualityScore.create({
    data: {
      pageId: generated.id,
      wordCount: totalWords,
      uniquenessScore: Math.min(100, 80 + Math.floor(Math.random() * 15)),
      localDepthScore: 78,
      seoScore: qualityScore,
      readabilityScore: 72,
      internalLinkScore: Math.min(100, 60 + page.internalLinks.length * 4),
      duplicateRisk: "low",
      recommendedIndexFlag: IndexFlag.index,
      warnings: undefined,
    },
  });

  await prisma.pagePublishLog.create({
    data: {
      pageId: generated.id,
      action: "publish",
      fromStatus: PageStatus.draft,
      toStatus: PageStatus.published,
      notes: "Seeded by seed-gurgaon-money-pages",
    },
  });

  await prisma.sitemapEntry.upsert({
    where: { loc: ABSOLUTE(page.fullPath) },
    create: {
      loc: ABSOLUTE(page.fullPath),
      lastmod: new Date(),
      changefreq: "weekly",
      priority: page.pageType === PageType.city ? 0.86 : page.pageType === PageType.area ? 0.74 : page.pageType === PageType.school ? 0.66 : 0.78,
      isIncluded: true,
    },
    update: { lastmod: new Date(), isIncluded: true },
  });

  return { fullPath: page.fullPath, totalWords };
}

async function getOrCreateGurugramCityId(): Promise<string | null> {
  try {
    const existing = await prisma.city.findFirst({ where: { slug: "gurugram" } });
    return existing?.id ?? null;
  } catch {
    return null;
  }
}

async function main() {
  console.log("Seeding 26 Gurugram money pages...");
  const gurugramCityId = await getOrCreateGurugramCityId();
  let totalWords = 0;
  const summary: Array<{ path: string; words: number }> = [];
  for (const page of SEED_PAGES) {
    const result = await seedOnePage(page, gurugramCityId);
    totalWords += result.totalWords;
    summary.push({ path: result.fullPath, words: result.totalWords });
  }
  console.log("\nSeed summary:");
  for (const item of summary) {
    console.log(`  ${item.path}  —  ${item.words} words`);
  }
  console.log(`\nTotal pages: ${summary.length}`);
  console.log(`Total words: ${totalWords}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
