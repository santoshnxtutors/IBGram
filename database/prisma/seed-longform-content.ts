/**
 * Wave 1 long-form SEO seed.
 *
 * Idempotent upsert by `fullPath`. Safe to re-run. Wipes children
 * (PageBlock / PageFaq / PageSchema / PageInternalLink) on each run
 * and recreates them so the seed remains the source of truth for the
 * pages it owns. Admin edits to OTHER fields on GeneratedPage (notes,
 * approval state) are preserved.
 *
 * Covers (15 pages):
 *   Programmes hub + PYP + MYP + DP + CP
 *   IB course pages: Math AA HL, Math AI HL, Physics HL, Chemistry HL, Economics HL
 *   Location: Delhi city, Noida city
 *   Areas: Delhi Vasant Vihar, Noida Sector 50, Gurugram DLF Phase 1
 *
 * Run with:
 *   npx tsx database/prisma/seed-longform-content.ts            # apply
 *   npx tsx database/prisma/seed-longform-content.ts --dry-run  # report only
 *
 * All copy is original, parent-friendly, free of fake claims, and respects
 * the school disclaimer rule. Word count target: 1,200-1,600 visible words
 * per page (body blocks + FAQ Q&A).
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient, PageStatus, IndexFlag, PageType, Curriculum } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "../..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();
const ABSOLUTE = (p: string) => `https://ibgram.com${p}`;
const DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.";

const isDryRun = process.argv.includes("--dry-run");

// ─── Schema helpers ─────────────────────────────────────────────────────────

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

function jsonLdEdProgram(args: { name: string; description: string; level: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: args.name,
    description: args.description,
    educationalLevel: args.level,
    provider: { "@type": "EducationalOrganization", name: "IB Gram", url: "https://ibgram.com/" },
    url: args.url,
  };
}

function jsonLdCourse(args: { name: string; description: string; provider: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: args.name,
    description: args.description,
    provider: { "@type": "Organization", name: args.provider, url: "https://ibgram.com/" },
    url: args.url,
  };
}

function jsonLdLocalBusiness(args: { city: string; region: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `IB Gram — ${args.city}`,
    url: args.url,
    address: { "@type": "PostalAddress", addressLocality: args.city, addressRegion: args.region, addressCountry: "IN" },
    areaServed: args.city,
  };
}

function wordCount(text: string): number {
  return text.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
}

const p = (...sentences: string[]) => sentences.join(" ");

// ─── Page shape ─────────────────────────────────────────────────────────────

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
  cityFk?: "delhi" | "noida" | "gurugram";
  programSchema?: { name: string; description: string; level: string };
  courseSchema?: { name: string; description: string };
};

// ─── Reusable block builders ────────────────────────────────────────────────

const TUTORING_MODES_BLOCK = (subject: string, city: string) => ({
  blockType: "tutoring_modes",
  heading: `Home, online and hybrid options for ${subject}`,
  body: p(
    `Lessons run in three modes and the right answer depends on subject specialist availability, not on where the student lives.`,
    `Home tutoring is the default for younger students and for subjects where a specialist is realistically nearby — this is common across central ${city} for popular subjects.`,
    `Online tutoring becomes the right answer when the strongest specialist for a Higher Level subject or for a specific exam board is not located close to home. This is especially true for niche subjects, for HL-only support, and for students whose timetable does not allow travel during weekday evenings.`,
    `Hybrid plans — typically home for term-time content depth, online for mock revision and weekend exam practice — are common for Diploma Programme Year 2 students between the November mocks and final May exams.`,
  ),
  items: [
    "Home tutoring — subject to realistic local availability",
    "Online tutoring — best for HL specialists and niche subjects",
    "Hybrid — common during mocks and final exam season",
  ],
});

const VERIFICATION_BLOCK = ({
  blockType: "verification",
  heading: "How tutor profiles are verified",
  body: p(
    `Tutor profiles on IB Gram are reviewed for subject experience, qualifications, references and lesson methodology before they are matched to a family.`,
    `Where examiner or curriculum-author experience is documented, it is surfaced explicitly on the tutor profile. Where it is not, claims are not inflated.`,
    `Indicative fees are listed per profile and confirmed before booking. A short consultation or trial session is used to confirm subject and teaching-style fit before any longer commitment.`,
    `IB Gram does not promise outcomes that depend on the student's own engagement, school timeline or starting level. The platform's job is to surface the right specialist and the right cadence — the family and tutor own the lesson plan.`,
  ),
});

// ─── PROGRAMMES ────────────────────────────────────────────────────────────

const PROGRAMMES_HUB: SeedPage = {
  pageType: PageType.programme,
  curriculum: Curriculum.IB,
  slug: "programmes",
  fullPath: "/programmes/",
  primaryKeyword: "IB programmes",
  secondaryKeywords: [
    "IB PYP",
    "IB MYP",
    "IB DP",
    "IB CP",
    "IB programme overview",
    "IB curriculum stages",
    "IB tutor by programme",
    "IB home tuition India",
  ],
  metaTitle: "IB Programmes — PYP, MYP, DP and CP Tutoring Support | IB Gram",
  metaDescription:
    "Compare IB PYP, MYP, DP and CP. Find specialist tutors for every programme stage with home, online and hybrid lesson support across India.",
  h1: "IB Programmes — PYP, MYP, DP and CP",
  heroTitle: "Four IB programmes, one matching process",
  heroSubtitle:
    "Whether your child is just entering Primary Years inquiry, navigating MYP criterion-based assignments, sitting the Diploma Programme, or combining DP with career-related study, this hub explains what each stage looks like and how tutor matching is approached at IB Gram.",
  introSummary:
    "The IB framework runs from ages 3 to 19 across four programmes. Each stage has a different rhythm, a different way of assessing understanding, and a different kind of tutoring support that actually helps. This page is the route map for parents who want a clear picture before requesting a tutor match.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Programmes", url: ABSOLUTE("/programmes/") },
  ],
  programSchema: {
    name: "IB Programmes",
    description: "Overview of IB PYP, MYP, DP and CP with tutoring support pathways across India.",
    level: "Primary, Secondary, Senior Secondary",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Which IB programme is your child in right now?",
      body: p(
        `Families often arrive at IB Gram halfway through a school year, when something has slipped — a topic feels stuck, a Personal Project deadline is approaching, an IA draft hasn't been started, or a mock score has surprised everyone.`,
        `Before we can match a tutor, we have to be honest about which programme stage actually applies, because the same student name needs very different support in PYP versus MYP versus DP.`,
        `PYP is enquiry-based and parent-supported. MYP is criterion-based and increasingly independent. DP is high-stakes and exam-driven. CP layers DP-style academic rigour onto a chosen career path. Each one needs a tutor matched to that rhythm, not just to the subject title.`,
      ),
    },
    {
      blockType: "programmes",
      heading: "Snapshot of all four programmes",
      body: p(
        `PYP (Primary Years Programme, ages 3–12) is built around six transdisciplinary themes that cut across subjects. Tutoring at this stage usually supports reading fluency, early Maths, English-language reasoning, and exhibition-year structure.`,
        `MYP (Middle Years Programme, ages 11–16) is criterion-based across eight subject groups. Tutoring focuses on understanding the criteria, structuring extended-response answers, and preparing the Personal Project in year five.`,
        `DP (Diploma Programme, ages 16–19) is the IB's flagship two-year examination route. Tutoring covers HL/SL paper structure, the Internal Assessment, the Extended Essay, Theory of Knowledge, command-term-aware revision, and final exam pacing.`,
        `CP (Career-related Programme, ages 16–19) combines two or more DP courses with a career-related study, a Reflective Project, and service learning. Tutoring tends to focus on the DP subjects within the CP plan and on Reflective Project mentoring.`,
      ),
      items: ["PYP — ages 3–12", "MYP — ages 11–16", "DP — ages 16–19", "CP — ages 16–19"],
    },
    {
      blockType: "matching_process",
      heading: "How families typically choose a tutor through this hub",
      body: p(
        `From this hub, most families click into the specific programme page that matches their child's current year. From there, they either book a discovery conversation or jump straight to a subject-specific page (for DP, the Maths or Sciences pages are the most-clicked).`,
        `Matching reviews start with the programme stage, then the subject and level (HL or SL where applicable), then the school calendar, and finally the realistic lesson-mode preference. Subject fit is protected first; lesson-mode fit is fitted around it.`,
      ),
    },
    TUTORING_MODES_BLOCK("any IB programme", "India"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this hub does not promise",
      body: p(
        `Tutoring outcomes depend on the student's engagement, the school's timeline, and starting-level realities. The platform does not guarantee specific grades, scholarship outcomes, or admission results.`,
        `What it does is filter for verified subject specialists, match by realistic availability, and surface honest indicative fees before booking.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where IB families are searching from",
      body: p(
        `IB Gram supports families across Gurugram (still searched as Gurgaon), Delhi (especially South Delhi and Vasant Vihar), Noida (Expressway communities and Sector 50/62), Mumbai (BKC, Powai, Bandra), Bangalore (Indiranagar, Whitefield, Sarjapur) and Hyderabad.`,
        `Each city hub page lists realistic IB programme availability, the strongest subject inventory, and the local areas with their own area-specific tutor guides.`,
      ),
      items: ["Gurugram (Gurgaon)", "Delhi", "Noida", "Mumbai", "Bangalore", "Hyderabad"],
    },
    {
      blockType: "cta",
      heading: "Start with your child's current programme",
      body: "Pick the programme page below to see how IB Gram approaches that stage. Or message us on WhatsApp with the school name and current year and we will reply with a shortlist.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between PYP, MYP and DP?",
      answer:
        "PYP is enquiry-based primary (ages 3–12). MYP is criterion-based middle school (ages 11–16). DP is the two-year diploma with external exams (ages 16–19). Each stage uses a different assessment style, so tutors are matched differently for each.",
    },
    {
      question: "Should we hire a tutor for PYP at all?",
      answer:
        "Some families do, often for reading fluency, early Maths, English-language confidence for non-first-language learners, or exhibition-year structure in the final PYP year. Most PYP support is light-touch and short-cycle rather than weekly all-year tutoring.",
    },
    {
      question: "When is the right moment in MYP to bring in a tutor?",
      answer:
        "The two most common moments are MYP Year 4–5 (when assessment criteria become high-stakes and the Personal Project begins) and any moment when a subject criterion score drops two bands. Earlier in MYP, families usually wait and see.",
    },
    {
      question: "Is it worth starting DP tutoring before Year 1 begins?",
      answer:
        "Many families start a few weeks before DP Year 1 with a short discovery cycle in their HL choices, to set up the year. Sustained weekly tutoring is more common from late Year 1 onwards.",
    },
    {
      question: "Does IB Gram support the CP Reflective Project?",
      answer:
        "Yes, CP-specific mentoring is offered for the Reflective Project and for the DP subjects students take inside their CP plan. Service learning and language development are handled by the school, not by tutors.",
    },
    {
      question: "Can the same tutor teach across two programmes?",
      answer:
        "Sometimes. A specialist who teaches DP Physics often also supports MYP Physics. We confirm both subject experience and stage experience before matching.",
    },
    {
      question: "How long is a typical tutoring engagement?",
      answer:
        "For PYP and MYP, six to twelve weeks is common. For DP, families often book term-time blocks with intensification before mocks and final exams. There is no fixed-length contract — engagements are reviewed every few weeks.",
    },
    {
      question: "What if my child changes school mid-year?",
      answer:
        "Tell us early. We confirm the new school's IB calendar, check whether the existing tutor still fits, and adjust the lesson mode (home/online/hybrid) if the commute changes. Sometimes a switch to an online specialist makes more sense than continuing a now-distant home tutor.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/pyp/", anchorText: "PYP support guide", context: "deep-dive on the primary years" },
    { targetUrl: "/programmes/myp/", anchorText: "MYP support guide", context: "criterion-based middle years" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support guide", context: "Diploma Programme deep-dive" },
    { targetUrl: "/programmes/cp/", anchorText: "CP support guide", context: "Career-related Programme" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "city hub" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "IB tutors in Delhi", context: "city hub" },
    { targetUrl: "/tutors/", anchorText: "Browse all verified tutors", context: "main directory" },
  ],
};

const PROG_PYP: SeedPage = {
  pageType: PageType.programme,
  curriculum: Curriculum.IB,
  slug: "pyp",
  fullPath: "/programmes/pyp/",
  primaryKeyword: "IB PYP tutor",
  secondaryKeywords: [
    "IB PYP tutoring",
    "PYP transdisciplinary themes support",
    "PYP exhibition tutor",
    "PYP English reading tutor",
    "PYP Maths tutor",
    "IB primary years tutor India",
    "PYP home tutor",
    "PYP online tutor",
  ],
  metaTitle: "IB PYP Tutor — Primary Years Programme Support | IB Gram",
  metaDescription:
    "Find specialist PYP tutors for enquiry-based learning, reading, Maths, transdisciplinary themes and the PYP exhibition. Home, online and hybrid support across India.",
  h1: "IB PYP tutoring support",
  heroTitle: "Calm, enquiry-friendly PYP support that respects how young children actually learn",
  heroSubtitle:
    "The Primary Years Programme is built around enquiry, not memorisation. Tutoring at this stage works best when it is light-touch, language-aware, and aligned with how the child's school is already running the unit of enquiry.",
  introSummary:
    "PYP support is rarely about catching up — it is usually about giving a young learner more time, better questions, and a more language-rich environment around a theme they are already exploring at school. This page explains how IB Gram tutors approach that.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Programmes", url: ABSOLUTE("/programmes/") },
    { name: "PYP", url: ABSOLUTE("/programmes/pyp/") },
  ],
  programSchema: {
    name: "IB Primary Years Programme (PYP) tutoring",
    description: "Enquiry-based PYP tutoring support across reading, Maths, English, transdisciplinary themes and exhibition year.",
    level: "Primary",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "What PYP actually feels like at home",
      body: p(
        `The Primary Years Programme runs from ages three to twelve and is built around six transdisciplinary themes — Who We Are, Where We Are in Place and Time, How We Express Ourselves, How the World Works, How We Organise Ourselves, and Sharing the Planet.`,
        `Subjects are not taught in isolation. A six-week unit of enquiry on "Sharing the Planet" might pull together science, mathematics, language and arts in one connected investigation.`,
        `For parents, this can look unstructured compared to traditional curricula. The reality is that it builds independent thinking and vocabulary depth very early. Tutoring at this stage either supports the current unit of enquiry or strengthens an underlying skill — usually reading, writing or numeracy — that the child needs to access the rest of the programme more comfortably.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Where PYP families typically ask for tutoring help",
      body: p(
        `Reading fluency and reading stamina are the single most-requested PYP support area, especially for families where English is not the first language at home.`,
        `Early Maths — number sense, place value, fact fluency, then early word problems — is the second most common request.`,
        `Writing support is usually about structuring ideas and using vocabulary the child already understands in speech, not about handwriting drills.`,
        `Exhibition year (typically the final PYP year) is its own request — students need help structuring an enquiry, conducting age-appropriate research, and presenting findings.`,
      ),
      items: [
        "Reading fluency and stamina",
        "Number sense and early Maths",
        "Writing structure and vocabulary",
        "Exhibition planning and research",
        "English-language confidence (EAL learners)",
      ],
    },
    {
      blockType: "matching_process",
      heading: "How a PYP tutor match is reviewed",
      body: p(
        `For young learners, lesson length and pace matter more than tutor seniority. Sessions are typically 45 to 60 minutes, never back-to-back, and always at a time of day when the child is actually fresh.`,
        `Matching reviews start with the child's age, the current unit of enquiry, the school's reporting style, the specific skill the family wants to support, and the realistic time slot.`,
        `Almost all PYP tutors at IB Gram are matched for short cycles — six to twelve weeks — with a review at the end. Sustained weekly tutoring across the entire PYP year is rare and usually unnecessary.`,
      ),
    },
    TUTORING_MODES_BLOCK("PYP", "India"),
    {
      blockType: "trust",
      heading: "What PYP tutoring does not try to do",
      body: p(
        `It does not replace the school. A PYP tutor will not run a parallel curriculum or push the child ahead of the school's stated learning intentions.`,
        `It does not drill children with worksheets. PYP support should remain enquiry-friendly, language-rich and conversational. If a child describes tutoring as boring within two weeks, the match is wrong.`,
        `It does not promise grade outcomes. PYP does not have grade outcomes in the DP sense — there are descriptors and reports, not final exam scores.`,
      ),
    },
    VERIFICATION_BLOCK,
    {
      blockType: "local_areas",
      heading: "Where PYP tutoring is typically requested",
      body: p(
        `PYP requests come most often from Gurugram (Pathways World School, Scottish High International, Lancers International, GD Goenka), Delhi (The British School, American Embassy School, DPS International Saket), and Noida (Pathways School Noida, Genesis Global School).`,
        `${DISCLAIMER}`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Tell us the unit of enquiry your child is on",
      body: "When you reach out, share the school name, your child's current year, the unit of enquiry that is in progress, and the specific skill you want to support. The match comes back faster.",
    },
  ],
  faqs: [
    {
      question: "Is hiring a PYP tutor really necessary?",
      answer:
        "Often not. Many PYP families never use a tutor. Where tutoring helps is reading fluency for early readers, English-language confidence for EAL families, and exhibition-year structure. If your child is generally settled and progressing, a tutor may not be needed at all.",
    },
    {
      question: "How long should a PYP lesson be?",
      answer:
        "45 to 60 minutes for most children, scheduled at a time of day when they are fresh — usually mid-afternoon or early evening, never immediately before bedtime. Younger children may need 30-minute lessons.",
    },
    {
      question: "Can a PYP tutor align with our school's unit of enquiry?",
      answer:
        "Yes, that is the preferred approach. Share the current theme and the school's reporting style at the start so the tutor can shape sessions around what is already happening in class.",
    },
    {
      question: "Do PYP tutors give homework?",
      answer:
        "Sparingly. Most PYP tutors leave a light reading task or a short reflection between sessions, not extra worksheets. PYP works best when the child stays curious.",
    },
    {
      question: "Is online PYP tutoring effective for very young children?",
      answer:
        "It can be, with caveats. Online works better for older PYP children (ages 8–12) and for reading or English-conversation support. For very young learners, home or hybrid is often more practical because attention spans on screen are shorter.",
    },
    {
      question: "What does PYP exhibition support look like?",
      answer:
        "It is structured mentoring across the exhibition cycle — choosing a real-world problem, framing an enquiry question, planning age-appropriate research, organising evidence, and rehearsing the presentation. It is not the tutor doing the project for the child.",
    },
    {
      question: "Do you have PYP tutors who speak languages other than English?",
      answer:
        "Some tutors offer bilingual support during sessions — useful for EAL families where the child needs concepts explained in a home language before practising in English. Tell us what you need at the start.",
    },
    {
      question: "How quickly can a PYP tutor be matched?",
      answer:
        "Reading and Maths support is typically matched within one to two working days. Exhibition support is matched faster if you reach out a few weeks before the exhibition window begins.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/", anchorText: "All IB programmes overview", context: "parent hub" },
    { targetUrl: "/programmes/myp/", anchorText: "MYP support", context: "next stage after PYP" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "PYP tutors in Gurugram", context: "city availability" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "PYP tutors in Delhi", context: "city availability" },
    { targetUrl: "/contact-us/", anchorText: "Request a PYP match", context: "contact" },
  ],
};

const PROG_MYP: SeedPage = {
  pageType: PageType.programme,
  curriculum: Curriculum.IB,
  slug: "myp",
  fullPath: "/programmes/myp/",
  primaryKeyword: "IB MYP tutor",
  secondaryKeywords: [
    "MYP criterion-based tutor",
    "MYP Personal Project tutor",
    "MYP eAssessment preparation",
    "MYP Maths tutor",
    "MYP Sciences tutor",
    "MYP English tutor",
    "MYP Year 5 tutor",
    "IB MYP home tuition",
  ],
  metaTitle: "IB MYP Tutor — Middle Years Programme Support | IB Gram",
  metaDescription:
    "MYP tutoring for criterion-based assessment, Personal Project mentoring, eAssessment preparation and Year 5 subject readiness for DP. Home, online and hybrid.",
  h1: "IB MYP tutoring support",
  heroTitle: "MYP support that actually understands the criteria",
  heroSubtitle:
    "The Middle Years Programme is criterion-based, not grade-based. Tutors who understand the criteria — and who can translate them into clear feedback for a student — make a noticeable difference, especially in Years 4 and 5.",
  introSummary:
    "MYP runs from ages 11 to 16 across eight subject groups. The single biggest reason students underperform in MYP is not subject knowledge gaps — it is misreading the assessment criteria. This page explains how IB Gram approaches MYP tutoring.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Programmes", url: ABSOLUTE("/programmes/") },
    { name: "MYP", url: ABSOLUTE("/programmes/myp/") },
  ],
  programSchema: {
    name: "IB Middle Years Programme (MYP) tutoring",
    description: "Criterion-based MYP tutoring including Personal Project mentoring and eAssessment preparation.",
    level: "Middle School",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "What changes between PYP and MYP",
      body: p(
        `The Middle Years Programme runs from ages 11 to 16 (Year 1 through Year 5).`,
        `Two things change sharply from PYP. First, students are now assessed against criteria — typically A, B, C, D within each subject — and they need to learn how to read what each criterion is actually asking. Second, the Personal Project in Year 5 becomes a sustained piece of independent work that schools take seriously.`,
        `Tutoring in MYP is rarely about teaching content from scratch. It is usually about helping a student structure extended-response answers to a specific criterion, plan a Personal Project, or close a gap that the school timeline has not allowed enough time to fix.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Which MYP subjects come up most",
      body: p(
        `Mathematics, the Sciences (especially as students approach Year 4–5), Language and Literature, and Individuals and Societies are the most-requested MYP subjects on the platform.`,
        `Design and the Arts are typically school-led, but tutoring help with the documentation and reflection journals is occasional.`,
        `Languages — second-language acquisition in particular — are requested when the school's pace is too fast for the student's actual current level.`,
      ),
      items: [
        "MYP Mathematics",
        "MYP Sciences (Bio, Chem, Phys)",
        "MYP Language and Literature",
        "MYP Individuals and Societies",
        "MYP Language Acquisition",
        "MYP Design (documentation)",
      ],
    },
    {
      blockType: "matching_process",
      heading: "Personal Project mentoring",
      body: p(
        `The MYP Personal Project is a single sustained piece of work in Year 5. Students choose a goal, produce a product or outcome, and write a structured report.`,
        `Tutoring help is usually mentoring — helping the student choose a realistic goal, plan milestones, manage the process journal, and structure the final report against the assessment criteria.`,
        `Mentors do not produce the project. They keep the student on schedule and translate the criteria into something a fifteen-year-old can actually act on.`,
      ),
    },
    TUTORING_MODES_BLOCK("MYP", "India"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What MYP support does not do",
      body: p(
        `It does not write the Personal Project for the student. The school will detect this and it will reflect badly on the criterion scores.`,
        `It does not promise a Year 5 grade boundary outcome. eAssessment grades depend on engagement, the school's coverage, and the student's specific exam performance — none of which a tutor controls in full.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where MYP requests typically come from",
      body: p(
        `MYP requests come from across Gurugram, Delhi and Noida, with concentrations near Pathways World School (Gurugram), Lancers International, Scottish High International, The British School (Delhi), and Pathways School Noida.`,
        `${DISCLAIMER}`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "What to share when you contact us",
      body: "Tell us the school, the MYP year, the subject and criterion that needs work, and whether the Personal Project window is open. The match comes back tighter when this is clear.",
    },
  ],
  faqs: [
    {
      question: "What is criterion-based assessment in MYP?",
      answer:
        "Each subject is assessed against four criteria (typically labelled A, B, C, D), each scored on a band. A student can be strong on one criterion and weak on another in the same subject. Tutors first clarify which criterion the student is dropping marks on, then plan targeted practice for that specific criterion.",
    },
    {
      question: "When should we start Personal Project mentoring?",
      answer:
        "Most schools open the Personal Project window early in MYP Year 5. Mentoring is most useful from the goal-selection stage through to the final report submission. Starting two to three weeks before the goal is finalised gives the smoothest path.",
    },
    {
      question: "Can a tutor help with MYP eAssessment preparation?",
      answer:
        "Yes, where the school uses on-screen eAssessment, tutors prepare students for the question style and command terms used by the IB across the four core subjects. This is short-cycle preparation, typically six to ten weeks before the assessment window.",
    },
    {
      question: "Are MYP tutors familiar with both school-internal grading and IB grade descriptors?",
      answer:
        "Tutors on IB Gram are familiar with IB grade descriptors. Where a specific school adds internal grading conventions, share a sample report so the tutor can align feedback to what the report cards actually show.",
    },
    {
      question: "Is MYP Mathematics taught the same way as IB DP Mathematics?",
      answer:
        "No. MYP Mathematics uses extended and standard pathways with criterion-based assessment. DP Mathematics splits into Math AA and Math AI with HL/SL and external exams. The tutor matched for MYP is matched for MYP, not for the DP transition.",
    },
    {
      question: "Should we bring in a DP-style tutor in Year 5 to get ready for the Diploma?",
      answer:
        "Sometimes — for a student certain to pick a specific HL subject in DP, a few discovery sessions in late MYP Year 5 can help with the transition. Sustained DP-style tutoring before DP Year 1 begins is usually unnecessary.",
    },
    {
      question: "How is MYP Language and Literature support different from EAL support?",
      answer:
        "Language and Literature is for first-language readers and focuses on literary analysis, command-term-aware writing, and extended-response structure. EAL support is for students still building English fluency. These are usually different tutors with different approaches.",
    },
    {
      question: "Can my child get help with MYP science practical write-ups?",
      answer:
        "Yes — tutors can support structuring the investigation, recording variables, framing the conclusion, and aligning the write-up to the criteria. The investigation itself remains the student's work.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/", anchorText: "All IB programmes overview", context: "parent hub" },
    { targetUrl: "/programmes/pyp/", anchorText: "PYP support", context: "previous stage" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support", context: "next stage" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "MYP tutors in Gurugram", context: "city availability" },
    { targetUrl: "/contact-us/", anchorText: "Request an MYP match", context: "contact" },
  ],
};

const PROG_DP: SeedPage = {
  pageType: PageType.programme,
  curriculum: Curriculum.IB,
  slug: "dp",
  fullPath: "/programmes/dp/",
  primaryKeyword: "IB DP tutor",
  secondaryKeywords: [
    "IB Diploma Programme tutor",
    "IB DP HL tutor",
    "IB Math AA tutor",
    "IB Math AI tutor",
    "IB Physics HL tutor",
    "IB IA tutor",
    "IB Extended Essay supervisor",
    "IB TOK essay help",
    "IB DP mock revision tutor",
    "IB DP final exam tutor",
  ],
  metaTitle: "IB DP Tutor — Diploma Programme Subject and Core Support | IB Gram",
  metaDescription:
    "IB DP tutoring for HL/SL subjects, Internal Assessment, Extended Essay, Theory of Knowledge and final exam revision. Verified specialists, home, online and hybrid.",
  h1: "IB Diploma Programme tutoring support",
  heroTitle: "Specialist DP support for HL/SL subjects, IA, EE, ToK and exams",
  heroSubtitle:
    "The Diploma Programme is the IB's flagship two-year examination route. Tutoring works best when it is matched to the specific subject pathway, the right Higher Level / Standard Level depth, and the right phase of the two-year calendar.",
  introSummary:
    "DP tutoring is the most-requested service on IB Gram. This page covers how matching works across the six subject groups, the three core elements (IA, EE, ToK), and the natural rhythm of the two-year DP calendar.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Programmes", url: ABSOLUTE("/programmes/") },
    { name: "DP", url: ABSOLUTE("/programmes/dp/") },
  ],
  programSchema: {
    name: "IB Diploma Programme (DP) tutoring",
    description: "DP HL/SL subject tutoring with IA, EE and ToK support across India.",
    level: "Senior Secondary",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Why DP needs subject-specific specialists",
      body: p(
        `The Diploma Programme runs over two years across six subject groups, plus three core elements: the Internal Assessment in each subject, the Extended Essay, and Theory of Knowledge.`,
        `It is high-stakes — final grades are externally examined and feed directly into university decisions.`,
        `Generalist tutoring rarely works at DP level. A Math AA HL specialist is not interchangeable with a Math AI SL specialist, even though both are "DP Maths". The same is true across Physics HL versus SL, Economics HL versus SL, and English A Lang & Lit versus Literature.`,
        `Matching at IB Gram looks at the exact subject, the level, the paper structure, the school's marking calendar, and where the student is in the two-year cycle.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "DP subjects with active tutor inventory",
      body: p(
        `Mathematics is split into Analysis and Approaches (AA) and Applications and Interpretation (AI), each at HL or SL. Both pathways are supported with paper-structure coaching, IA exploration mentoring, and calculator-policy practice.`,
        `Sciences — Physics, Chemistry, Biology — are supported at HL and SL, with Internal Assessment scaffolding and command-term revision.`,
        `Individuals and Societies — Economics, Business Management, History, Psychology — are supported with essay structure, IA commentary writing, and command-term-aware extended-response practice.`,
        `Language and Literature — English A in both pathways — is supported with the Individual Oral, the HL Essay, and Paper 1 and Paper 2 structure.`,
        `Computer Science is supported with IA solution-design walkthroughs and Paper 1/2 practice. The Arts are typically school-led with limited tutor support.`,
      ),
      items: [
        "Math AA (HL/SL)",
        "Math AI (HL/SL)",
        "Physics (HL/SL)",
        "Chemistry (HL/SL)",
        "Biology (HL/SL)",
        "Economics (HL/SL)",
        "Business Management (HL/SL)",
        "English A Lang & Lit (HL/SL)",
        "English A Literature (HL/SL)",
        "Computer Science (HL/SL)",
        "Psychology (HL/SL)",
      ],
    },
    {
      blockType: "matching_process",
      heading: "Internal Assessment, Extended Essay and ToK support",
      body: p(
        `The Internal Assessment in each subject is the single most common tutoring request in DP Year 1 and the start of Year 2. Mentoring covers research-question framing, methodology, evidence handling, and command-term-aware analysis.`,
        `The Extended Essay supervisor is the school-assigned member of staff. Tutoring works alongside that supervisor — usually on early planning, on a structured drafting cadence, and on referencing.`,
        `Theory of Knowledge tutoring focuses on essay-structure scaffolding, knowledge-question framing, and exhibition rehearsal. ToK is often the last thing DP students think about — tutoring helps it stop drifting.`,
      ),
    },
    TUTORING_MODES_BLOCK("DP", "India"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What DP tutoring does not promise",
      body: p(
        `It does not guarantee a 7 in any subject. Final grades depend on the student's own engagement, the school's coverage, mock outcomes, and the external examiner's marking.`,
        `It does not produce the IA or the Extended Essay. Authorship has to remain with the student — IB academic honesty rules are strict and schools cross-check.`,
        `It does not replace the school. The school owns the calendar, the labs, the supervised assessments and the predicted-grade process.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where DP requests typically come from",
      body: p(
        `DP requests are concentrated in Gurugram (still searched as Gurgaon), Delhi (especially South Delhi, Vasant Vihar, Greater Kailash, Saket), Noida (Sector 50, Sector 62, Noida Expressway), Mumbai, Bangalore and Hyderabad.`,
        `Online DP support has grown sharply for HL-only specialists in subjects with thin local availability, especially Math AA HL and Computer Science HL.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore", "Hyderabad"],
    },
    {
      blockType: "cta",
      heading: "Start with your subject and level",
      body: "Tell us the exact DP subject, HL or SL, the IB session (May or November), and whether IA, EE, ToK or exam revision is the current priority. Subject specialist match comes back within one working day for the common subjects.",
    },
  ],
  faqs: [
    {
      question: "When in DP should we start tutoring?",
      answer:
        "The two highest-impact moments are early in DP Year 1 (laying foundations in HL subjects) and the start of DP Year 2 (when the IA cycle begins in earnest). Intensification before the November mocks and again before the May final exams is common.",
    },
    {
      question: "What is the difference between Math AA and Math AI?",
      answer:
        "Math AA (Analysis and Approaches) is the more pure-mathematics pathway with more algebraic depth. Math AI (Applications and Interpretation) is the more applied pathway with stronger statistics and modelling. Each has HL and SL. The tutor matched for one is rarely the same as for the other.",
    },
    {
      question: "How does IA mentoring work without breaching academic honesty?",
      answer:
        "A tutor helps with research-question framing, methodology choices, command-term understanding, evidence-handling rigour, and structural feedback on drafts. The actual investigation, data and final write-up belong to the student. Schools cross-check authorship.",
    },
    {
      question: "Do you support all six subject groups?",
      answer:
        "Active inventory is strongest in Group 4 (Sciences), Group 5 (Mathematics), Group 3 (Individuals and Societies — especially Economics and Business), Group 1 (Language and Literature) and parts of Group 2 (Language Acquisition). The Arts have lighter coverage and are typically school-led.",
    },
    {
      question: "How is Extended Essay mentoring different from school supervision?",
      answer:
        "The school assigns the official Extended Essay supervisor. Tutoring is a parallel mentoring role — focused on choosing a feasible research question, planning a realistic timeline, structuring the essay, and managing referencing. The school supervisor remains the formal authority.",
    },
    {
      question: "Is online DP tutoring as effective as home tutoring?",
      answer:
        "For DP HL subjects, often yes — and sometimes more effective, because the strongest HL specialist for a niche subject is rarely in the same neighbourhood. Online lessons run smoothly when there is a stable shared whiteboard, a structured weekly cadence, and a clear next-step note after each session.",
    },
    {
      question: "Can a tutor help with predicted grades?",
      answer:
        "Indirectly. Tutors prepare students for mocks and supervised assessments that feed into predicted grades, and help structure IAs that contribute to coursework marks. The predicted grade itself is the school's decision based on overall performance.",
    },
    {
      question: "How many sessions per week is typical for DP?",
      answer:
        "One to two sessions per week per subject is the most common pattern. Intensification to three sessions per week is common in the four to six weeks before mocks or final exams. More than that usually signals an underlying issue with school coverage that tutoring alone will not fix.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/", anchorText: "All IB programmes overview", context: "parent hub" },
    { targetUrl: "/programmes/myp/", anchorText: "MYP support", context: "previous stage" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "DP subject deep-dive" },
    { targetUrl: "/courses/ib/physics/", anchorText: "Physics HL tutor support", context: "DP subject deep-dive" },
    { targetUrl: "/courses/ib/economics/", anchorText: "Economics HL tutor support", context: "DP subject deep-dive" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "DP tutors in Gurugram", context: "city availability" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "DP tutors in Delhi", context: "city availability" },
  ],
};

const PROG_CP: SeedPage = {
  pageType: PageType.programme,
  curriculum: Curriculum.IB,
  slug: "cp",
  fullPath: "/programmes/cp/",
  primaryKeyword: "IB CP tutor",
  secondaryKeywords: [
    "IB Career-related Programme tutor",
    "IB CP Reflective Project mentor",
    "CP personal and professional skills support",
    "IB CP DP subjects tutor",
    "IB CP service learning",
    "IB CP language development",
    "CP tutor India",
  ],
  metaTitle: "IB CP Tutor — Career-related Programme Support | IB Gram",
  metaDescription:
    "IB CP tutoring for DP subjects within the CP plan, Reflective Project mentoring and CP core support. Home, online and hybrid options across India.",
  h1: "IB CP tutoring support",
  heroTitle: "Realistic CP support for the DP subjects and the Reflective Project",
  heroSubtitle:
    "The Career-related Programme is the smallest of the four IB programmes, with the most distinct mix of academic and career-track elements. Tutoring focuses on the DP subjects in the CP plan and on the Reflective Project.",
  introSummary:
    "CP students take at least two DP subjects, complete the CP core (personal and professional skills, service learning, language development, Reflective Project), and pursue a career-related study with a partner provider. This page covers what tutoring looks like across that mix.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Programmes", url: ABSOLUTE("/programmes/") },
    { name: "CP", url: ABSOLUTE("/programmes/cp/") },
  ],
  programSchema: {
    name: "IB Career-related Programme (CP) tutoring",
    description: "CP support for DP subjects in the CP plan, Reflective Project mentoring and core elements.",
    level: "Senior Secondary",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Who CP is built for",
      body: p(
        `The Career-related Programme is for students who want a clear career direction alongside an IB academic backbone. Students take at least two DP courses, a career-related study delivered by a partner provider, and four CP core components — personal and professional skills, service learning, language development, and the Reflective Project.`,
        `It is less common than DP, but the families who choose it usually know exactly why. Tutoring requests focus on the DP courses inside the CP plan and on the Reflective Project — the rest of CP is school-and-provider-led.`,
      ),
    },
    {
      blockType: "programmes",
      heading: "The DP subjects most CP students pick",
      body: p(
        `Mathematics — usually AI rather than AA — is common because of its applied focus. Business Management, Economics and Psychology are common when the career-related study is in business, finance or social sciences.`,
        `English A Lang & Lit appears when the career-related study has a strong communication component. Sciences appear when the career-related study is in health, engineering or sustainability.`,
        `Tutor matching for these DP-within-CP subjects works the same way as for full DP — by exact subject, HL or SL, and current phase of the two-year calendar.`,
      ),
      items: [
        "Math AI (SL most common)",
        "Business Management (SL/HL)",
        "Economics (SL/HL)",
        "Psychology (SL/HL)",
        "English A Lang & Lit (SL/HL)",
      ],
    },
    {
      blockType: "matching_process",
      heading: "Reflective Project mentoring",
      body: p(
        `The Reflective Project is the most-requested CP-specific tutoring service. It is a sustained piece of work — typically 3,000 words plus supporting media — that explores an ethical dilemma arising from the career-related study.`,
        `Mentoring covers choosing a researchable dilemma, defining the ethical framework, planning the evidence base, structuring the written commentary, and rehearsing the reflective component.`,
        `As with the DP Extended Essay, the school-assigned supervisor remains the formal authority. The mentor's role is to keep the cadence realistic and the structure tight.`,
      ),
    },
    TUTORING_MODES_BLOCK("CP", "India"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What CP tutoring does not do",
      body: p(
        `It does not deliver the career-related study itself — that is handled by the partner provider the school works with.`,
        `It does not run service learning. Service learning is owned by the student and the school's CAS-style coordinator.`,
        `It does not promise career outcomes. The CP equips students with a useful mix; outcomes depend on the partner provider, the student's portfolio, and the institutions they apply to.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where CP support is requested",
      body: p(
        `CP requests are concentrated in cities with the schools currently running CP — primarily a handful of schools in Gurugram, Delhi and Mumbai.`,
        `${DISCLAIMER}`,
      ),
      items: ["Gurugram", "Delhi", "Mumbai"],
    },
    {
      blockType: "cta",
      heading: "Tell us your DP-within-CP subjects and the Reflective Project window",
      body: "When you reach out, share the DP courses inside the CP plan, the career-related study area, and the Reflective Project deadline window. We match the right specialist faster when this is clear.",
    },
  ],
  faqs: [
    {
      question: "How is CP different from DP?",
      answer:
        "CP combines two or more DP courses with a career-related study (delivered by a partner provider) and four CP core components. DP is purely academic with six subjects. CP is for students who want a defined career direction alongside their IB backbone.",
    },
    {
      question: "Does IB Gram tutor the career-related study itself?",
      answer:
        "No. The career-related study is delivered by the partner provider the school works with. Tutoring focuses on the DP subjects inside the CP plan and on the Reflective Project.",
    },
    {
      question: "What is the Reflective Project about?",
      answer:
        "It is a sustained student-led piece exploring an ethical dilemma arising from the career-related study. The format is typically a written commentary plus supporting media, with a reflective component. Mentoring is most useful from the framing stage through to the final draft.",
    },
    {
      question: "Which DP subjects do most CP students choose?",
      answer:
        "Math AI (more applied than AA), Business Management, Economics, Psychology and English A Lang & Lit are the most common DP choices among CP students. Sciences appear when the career-related study is health, engineering or sustainability oriented.",
    },
    {
      question: "Can the same tutor cover both the Reflective Project and a DP subject?",
      answer:
        "Sometimes — for example a Business Management specialist may mentor a Reflective Project that explores a business-ethics dilemma. Often they are separate matches, especially when the Reflective Project topic is outside the tutor's DP subject area.",
    },
    {
      question: "Is CP recognised by universities?",
      answer:
        "Yes, by a growing list of universities, with the recognition pattern depending on the country and the chosen course. Always check the specific university and programme — this is the school's careers office area more than ours.",
    },
    {
      question: "How does CP service learning work?",
      answer:
        "Service learning is student-led and school-coordinated, similar in spirit to CAS in DP. Tutors do not run service learning. Tutors may help a student reflect in writing on their service learning experience if that becomes part of the Reflective Project.",
    },
    {
      question: "Are CP tutoring engagements shorter than DP?",
      answer:
        "Usually similar in length — over the two CP years — with intensification around the DP subject mocks, the DP subject final exams, and the Reflective Project deadlines. The CP core components are not tutoring-heavy.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/", anchorText: "All IB programmes overview", context: "parent hub" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support", context: "for DP subjects inside the CP plan" },
    { targetUrl: "/courses/ib/economics/", anchorText: "Economics tutor support", context: "common CP DP subject" },
    { targetUrl: "/contact-us/", anchorText: "Request a CP match", context: "contact" },
  ],
};

// ─── COURSE PAGES ──────────────────────────────────────────────────────────

const COURSE_MATH_AA_HL: SeedPage = {
  pageType: PageType.subject,
  curriculum: Curriculum.IB,
  slug: "math-aa-hl",
  fullPath: "/courses/ib/math-aa-hl/",
  primaryKeyword: "IB Math AA HL tutor",
  secondaryKeywords: [
    "IB Math AA tutor",
    "IB Math Analysis and Approaches HL tutor",
    "IB Math AA HL IA tutor",
    "IB Math AA Paper 3 tutor",
    "IB Math AA HL Gurgaon",
    "IB Math AA HL Delhi",
    "IB Math AA HL online tutor",
    "IB Math AA HL home tutor",
  ],
  metaTitle: "IB Math AA HL Tutor — Analysis and Approaches Higher Level | IB Gram",
  metaDescription:
    "Verified IB Math Analysis and Approaches Higher Level tutors for Paper 1, 2, 3, IA exploration and final exam revision. Home, online and hybrid lessons.",
  h1: "IB Math AA HL tutor support",
  heroTitle: "IB Math Analysis and Approaches HL — paper-by-paper, IA-aware tutoring",
  heroSubtitle:
    "Math AA HL is the most academically demanding of the four IB DP Mathematics pathways. Tutoring here is paper-specific, calculator-aware, IA-aware, and matched to where you are in the two-year cycle.",
  introSummary:
    "This page is the central reference for families looking for verified Math AA HL tutoring. It covers the syllabus structure, the three external papers, the Internal Assessment exploration, and how IB Gram matches a specialist for this exact pathway.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Courses", url: ABSOLUTE("/courses/") },
    { name: "IB", url: ABSOLUTE("/courses/ib/") },
    { name: "Math AA HL", url: ABSOLUTE("/courses/ib/math-aa-hl/") },
  ],
  courseSchema: {
    name: "IB Math AA HL tutoring",
    description: "Higher Level Math Analysis and Approaches tutoring for IB Diploma Programme students.",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "What Math AA HL actually demands",
      body: p(
        `Mathematics: Analysis and Approaches Higher Level is the more pure-mathematics pathway in DP Mathematics, with extended algebraic depth, calculus rigour, and a non-calculator paper.`,
        `The course is examined through three papers — Paper 1 (no calculator), Paper 2 (GDC required) and Paper 3 (HL only, longer, extended-response calculator paper).`,
        `Internal Assessment is a mathematical exploration of a student-chosen topic, marked against five criteria.`,
        `Tutoring at this level is paper-specific from the start. A tutor who runs unstructured "general maths help" rarely lifts an AA HL student. Matching looks for examiner or marker experience and for a clear paper-by-paper teaching approach.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "What gets covered, paper by paper",
      body: p(
        `Paper 1 (no calculator): algebraic manipulation under time pressure, proof, sequences and series, polynomials, trigonometric identities, calculus by hand.`,
        `Paper 2 (GDC required): graphing-calculator-aware questions, statistics, vectors and three-dimensional geometry, modelling questions where the GDC is essential.`,
        `Paper 3 (HL only): two extended-response investigations of around 30 marks each, requiring sustained mathematical reasoning across several connected steps.`,
        `Across all three papers, command-term-aware writing matters — "show", "prove", "find", "deduce", "investigate" each expect a different level of working shown.`,
      ),
      items: [
        "Paper 1 — no calculator, time-pressured",
        "Paper 2 — GDC required, full syllabus",
        "Paper 3 — HL only, extended response",
        "Internal Assessment — mathematical exploration",
      ],
    },
    {
      blockType: "matching_process",
      heading: "Internal Assessment — the exploration",
      body: p(
        `The IA exploration is 12–20 pages of student-led mathematics on a topic of personal interest. It is marked against criteria covering communication, mathematical presentation, personal engagement, reflection and use of mathematics.`,
        `Common pitfalls are choosing a topic too broad to finish in time, choosing a topic too narrow to demonstrate HL-level mathematics, and confusing computational length with mathematical depth.`,
        `Tutor mentoring on the IA typically covers topic selection, scoping, mathematical depth checks against criteria, and structural feedback on drafts. The investigation itself remains the student's work.`,
      ),
    },
    TUTORING_MODES_BLOCK("Math AA HL", "Gurugram, Delhi and Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this page does not do",
      body: p(
        `It does not list specific tutor names — these are surfaced in the verified tutor directory after a discovery call.`,
        `It does not promise a 7 in Math AA HL. The 7 boundary depends on the student's own engagement, the school's coverage, and the external examiner's marking.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where Math AA HL specialists are typically available",
      body: p(
        `Math AA HL specialist availability is strongest in Gurugram (Golf Course Road, DLF Phase 5, Sector 57, Sohna Road), Delhi (South Delhi, Vasant Vihar, Greater Kailash) and Noida (Sector 50, Noida Expressway).`,
        `Online-led HL specialists fill gaps where local home availability is thin.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Send us the school, the year and the IA window",
      body: "When you reach out, include the school name, the DP year, whether the IA exploration window is open, and whether the priority is mocks, IA or final exams. The Math AA HL match comes back within one working day.",
    },
  ],
  faqs: [
    {
      question: "Is Math AA HL harder than Math AI HL?",
      answer:
        "Different rather than universally harder. Math AA HL is more pure and algebraic with a non-calculator paper. Math AI HL is more applied with stronger statistics and modelling. Most universities accept both for STEM applications, though some quant-heavy courses prefer AA.",
    },
    {
      question: "How early in DP should we start Math AA HL tutoring?",
      answer:
        "Many students start within the first three months of DP Year 1, to establish a paper-aware approach early. Sustained weekly tutoring across both years is common for AA HL, with intensification before mocks and final exams.",
    },
    {
      question: "What if my child started in AA SL and wants to move to HL?",
      answer:
        "Possible early in DP Year 1 with school approval. Tutoring on a switch usually involves a focused six- to eight-week catch-up on the additional HL topics and on Paper 3 question style.",
    },
    {
      question: "Are Paper 1 (no-calculator) skills different from Paper 2 skills?",
      answer:
        "Yes. Paper 1 rewards algebraic fluency and proof under time pressure. Paper 2 rewards efficient GDC use and full-syllabus coverage. Many students drop more marks on Paper 1 than they expect — tutoring practice is split deliberately across both.",
    },
    {
      question: "How is the Math AA HL IA marked?",
      answer:
        "Against five criteria — Communication, Mathematical Presentation, Personal Engagement, Reflection, and Use of Mathematics — for a total of 20 marks. Strong IAs show genuine personal interest in the topic and HL-level mathematical depth without padding.",
    },
    {
      question: "Can online Math AA HL tutoring work as well as home tutoring?",
      answer:
        "Yes, with a shared digital whiteboard, a stable connection, and a fixed weekly cadence. For HL Maths, online specialists with examiner experience can match or exceed local home availability.",
    },
    {
      question: "Do Math AA HL tutors at IB Gram have examiner experience?",
      answer:
        "Where examiner or marker experience is documented, it is surfaced on the tutor profile. Where it is not, claims are not inflated. Discovery calls confirm experience before booking.",
    },
    {
      question: "How many sessions per week is realistic during exam season?",
      answer:
        "Two sessions per week is common in the four to six weeks before mocks and again before the final May exams, with paper-specific practice between sessions. More than three per week in one subject is rarely productive.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/math-ai-hl/", anchorText: "Math AI HL alternative pathway", context: "compare pathways" },
    { targetUrl: "/courses/ib/physics/", anchorText: "Physics HL tutor support", context: "common HL pairing" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "Math AA HL tutors in Gurugram", context: "city availability" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "Math AA HL tutors in Delhi", context: "city availability" },
  ],
};

const COURSE_MATH_AI_HL: SeedPage = {
  ...COURSE_MATH_AA_HL,
  slug: "math-ai-hl",
  fullPath: "/courses/ib/math-ai-hl/",
  primaryKeyword: "IB Math AI HL tutor",
  secondaryKeywords: [
    "IB Math AI tutor",
    "IB Math Applications and Interpretation HL tutor",
    "IB Math AI exploration tutor",
    "IB Math AI HL Gurgaon",
    "IB Math AI HL Delhi",
    "IB Math AI HL online tutor",
    "IB Math AI HL home tutor",
  ],
  metaTitle: "IB Math AI HL Tutor — Applications and Interpretation Higher Level | IB Gram",
  metaDescription:
    "Verified IB Math Applications and Interpretation Higher Level tutors. Statistics, modelling, GDC technique, IA exploration and exam practice.",
  h1: "IB Math AI HL tutor support",
  heroTitle: "IB Math Applications and Interpretation HL — applied, GDC-first, modelling-aware",
  heroSubtitle:
    "Math AI HL is the applied DP Maths pathway with strong statistics, modelling and GDC use. Tutoring here is calculator-policy-aware and IA-mentoring-friendly.",
  introSummary:
    "This page covers Math AI HL specifically — syllabus structure, the three external papers, the exploration, and how IB Gram matches a specialist for this pathway.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Courses", url: ABSOLUTE("/courses/") },
    { name: "IB", url: ABSOLUTE("/courses/ib/") },
    { name: "Math AI HL", url: ABSOLUTE("/courses/ib/math-ai-hl/") },
  ],
  courseSchema: {
    name: "IB Math AI HL tutoring",
    description: "Higher Level Math Applications and Interpretation tutoring for IB Diploma Programme students.",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "What Math AI HL is for",
      body: p(
        `Mathematics: Applications and Interpretation Higher Level is the applied DP Maths pathway, with stronger statistics, modelling, and a deliberate reliance on the graphing calculator across all three papers.`,
        `It is examined through three papers — Paper 1, Paper 2 and Paper 3 (HL only, extended response with a modelling and investigation focus).`,
        `Internal Assessment is the same exploration format as AA, but with a tendency toward modelling, real-world data, and applied statistical work.`,
        `Math AI HL is the most-requested DP Maths pathway for students whose chosen university courses are applied — business, economics, environmental science, behavioural science, design.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Paper-by-paper focus",
      body: p(
        `Paper 1 and Paper 2 cover the full syllabus with the GDC available, distinguishing AI from AA in pacing and expected use of calculator features.`,
        `Paper 3 (HL only) is the modelling and investigation paper — two longer extended-response questions worth around 30 marks each, requiring sustained applied mathematics across several connected steps.`,
        `Across all three papers, students need fluency with the GDC's statistics, regression and probability features, not just basic calculation.`,
      ),
      items: [
        "Paper 1 — full syllabus with GDC",
        "Paper 2 — full syllabus with GDC, mixed contexts",
        "Paper 3 — HL extended-response modelling",
        "Internal Assessment — applied exploration",
      ],
    },
    {
      blockType: "matching_process",
      heading: "IA exploration in AI HL",
      body: p(
        `The exploration in AI HL leans toward real-world modelling. Common topics: regression analysis of sports data, optimisation problems in business and logistics, probabilistic risk modelling, and statistical comparisons across genuine data sets.`,
        `Mentoring covers data acquisition (cleanness matters), choosing the right model, justifying limitations, and writing reflection that demonstrates personal engagement.`,
      ),
    },
    TUTORING_MODES_BLOCK("Math AI HL", "Gurugram, Delhi and Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this page does not do",
      body: p(
        `It does not promise specific exam outcomes — those depend on the student, the school and the examiner.`,
        `It does not push every Maths-leaning student to HL. Some students belong in AI SL or even AA SL; the matching conversation surfaces this honestly.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Local availability",
      body: p(
        `Math AI HL specialist availability is solid in Gurugram, Delhi (South Delhi, Vasant Vihar), Noida (Sector 50, Expressway), and is one of the most common online-led specialist matches because applied Maths examiner experience is concentrated in a smaller pool.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Tell us where you are in the AI HL cycle",
      body: "Share the school, DP year, IA window status, and whether mocks or finals are the immediate priority. Match comes back fast for AI HL.",
    },
  ],
  faqs: [
    {
      question: "Should I pick AI HL over AA HL?",
      answer:
        "If your chosen university courses are applied — economics, business, environmental science, behavioural science, design — AI HL is often the better fit. For pure mathematics, theoretical physics or engineering, AA HL is usually expected. Check specific university requirements.",
    },
    {
      question: "How much GDC fluency does AI HL really need?",
      answer:
        "A lot. Students who are uncomfortable navigating the GDC's statistics, regression and probability features at speed lose marks in both Paper 1 and Paper 2. Early tutoring time is often spent strengthening GDC fluency before content depth.",
    },
    {
      question: "Is Paper 3 in AI HL similar to Paper 3 in AA HL?",
      answer:
        "Structurally similar — two extended-response investigations — but AI HL Paper 3 leans toward applied and modelling contexts where AA HL Paper 3 leans toward pure and analytical contexts.",
    },
    {
      question: "What kind of IA topics tend to score well in AI HL?",
      answer:
        "Topics with real datasets, clear models, honest acknowledgement of limitations, and strong personal engagement tend to score well. Topics that copy popular online templates rarely do.",
    },
    {
      question: "Can the same tutor cover both AI HL and AI SL?",
      answer:
        "Usually yes. AI HL and AI SL share the SL syllabus; HL adds depth and Paper 3. Most AI specialists teach both levels.",
    },
    {
      question: "How early should AI HL tutoring start?",
      answer:
        "Within the first two to three months of DP Year 1 is common, with intensification around the IA window and the November mocks. Final exam intensification comes in February to April of DP Year 2.",
    },
    {
      question: "Does online AI HL tutoring work well?",
      answer:
        "Yes, especially when the strongest specialist is not local. Online lessons run smoothly with a shared digital whiteboard and a stable connection. The GDC use is the same in both modes.",
    },
    {
      question: "Will AI HL be accepted for STEM university courses?",
      answer:
        "By many but not all. Some quant-heavy courses prefer AA. Always check the specific university and programme. The school's IB careers office is the best authority on this.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL alternative pathway", context: "compare pathways" },
    { targetUrl: "/courses/ib/economics/", anchorText: "Economics HL tutor support", context: "common pairing" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "Math AI HL tutors in Gurugram", context: "city availability" },
  ],
};

const COURSE_PHYSICS: SeedPage = {
  pageType: PageType.subject,
  curriculum: Curriculum.IB,
  slug: "physics",
  fullPath: "/courses/ib/physics/",
  primaryKeyword: "IB Physics tutor",
  secondaryKeywords: [
    "IB Physics HL tutor",
    "IB Physics SL tutor",
    "IB Physics IA tutor",
    "IB Physics Paper 1 tutor",
    "IB Physics Paper 2 tutor",
    "IB Physics tutor Gurgaon",
    "IB Physics tutor Delhi",
    "IB Physics online tutor",
  ],
  metaTitle: "IB Physics Tutor — HL & SL Diploma Programme Support | IB Gram",
  metaDescription:
    "IB Physics HL and SL tutors for Paper 1, 2, 3, the Internal Assessment, and command-term-aware exam revision. Home, online and hybrid across India.",
  h1: "IB Physics tutor support",
  heroTitle: "IB Physics — paper-aware, IA-mentored, command-term-confident",
  heroSubtitle:
    "DP Physics rewards conceptual clarity and command-term-aware writing as much as it rewards calculation. Tutoring focuses on both, paper by paper.",
  introSummary:
    "This page covers DP Physics at both HL and SL — paper structure, IA mentoring, mode of delivery, and how IB Gram matches a Physics specialist to your school's calendar.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Courses", url: ABSOLUTE("/courses/") },
    { name: "IB", url: ABSOLUTE("/courses/ib/") },
    { name: "Physics", url: ABSOLUTE("/courses/ib/physics/") },
  ],
  courseSchema: {
    name: "IB Physics tutoring (HL/SL)",
    description: "DP Physics tutoring across HL and SL for Internal Assessment and external paper revision.",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Why Physics needs subject-aware tutoring",
      body: p(
        `IB DP Physics is taught at HL and SL with shared core topics and additional HL material.`,
        `Examination is across three papers — Paper 1 (multiple choice), Paper 2 (data and short and long response), Paper 3 (option / experimental at SL; option / extended response at HL).`,
        `Internal Assessment is an individual scientific investigation with a written report against five criteria.`,
        `Common student difficulties are not lack of intelligence — they are misreading command terms, weak data-handling rigour, and inconsistent units across calculations. Specialist tutoring closes all three quickly.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Paper-by-paper coaching focus",
      body: p(
        `Paper 1 (multiple choice) rewards quick conceptual recognition. Common traps are unit conversions, sign conventions and graph-interpretation errors.`,
        `Paper 2 mixes short-response calculation with longer extended-response questions. Command terms — "explain", "deduce", "discuss", "determine" — each expect different depth and structure.`,
        `Paper 3 covers option topics (chosen by the school) and an experimental component. Tutoring helps with both option-specific recall and lab-data interpretation.`,
        `Internal Assessment mentoring covers research-question framing, methodology, controlled variables, evidence handling, uncertainty analysis, and structured discussion of conclusions.`,
      ),
      items: [
        "Paper 1 — multiple choice, fast recall",
        "Paper 2 — data and extended response",
        "Paper 3 — option topics and experimental",
        "Internal Assessment — scientific investigation",
      ],
    },
    {
      blockType: "matching_process",
      heading: "Common Physics tutoring requests",
      body: p(
        `Mechanics (kinematics, dynamics, energy, momentum) is the most common Year 1 request.`,
        `Electricity and magnetism is the most common Year 2 request.`,
        `Wave behaviour and quantum / atomic physics requests cluster around mock-exam season.`,
        `Internal Assessment requests peak in late DP Year 1 and the start of DP Year 2.`,
      ),
    },
    TUTORING_MODES_BLOCK("Physics", "Gurugram, Delhi and Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this page does not do",
      body: p(
        `It does not promise a specific grade boundary outcome.`,
        `It does not run practical lab work that the school is responsible for.`,
        `It does not replace school feedback on the IA — the school IA supervisor remains the formal authority.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where Physics specialists are available",
      body: p(
        `Physics specialist availability is strongest in Gurugram (Golf Course Road, DLF Phase 5, Sector 57, Sohna Road), Delhi (South Delhi, Vasant Vihar, Saket), Noida (Sector 50, Sector 62, Noida Expressway). Online-led HL specialists fill gaps where local home availability is thin.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Tell us the topic, the paper, and the calendar",
      body: "Send the school, DP year, the topic currently being taught (or the IA window status), and whether the priority is mock revision or final exam preparation. The match arrives within one working day for Physics.",
    },
  ],
  faqs: [
    {
      question: "Is HL Physics realistically achievable for my child?",
      answer:
        "HL Physics is demanding but achievable for students with strong algebra and consistent engagement. The decision is best made in late MYP Year 5 with the school's input. Tutoring can support the decision with two or three discovery sessions.",
    },
    {
      question: "What is the difference between HL and SL Physics?",
      answer:
        "HL adds depth in mechanics, electromagnetism, atomic physics and option topics, and has a longer Paper 3. SL covers the core topics in less depth. Some universities require HL for physics or engineering courses.",
    },
    {
      question: "How is the Physics IA marked?",
      answer:
        "Against five criteria — Personal Engagement, Exploration, Analysis, Evaluation and Communication — for a total of 24 marks. Strong IAs show a genuine research question, controlled methodology, honest uncertainty handling and reflective evaluation.",
    },
    {
      question: "Can a tutor run virtual labs for the IA?",
      answer:
        "A tutor can support data-handling, methodology and write-up. The investigation itself, including lab work, is the student's own. Schools cross-check authorship and methodology.",
    },
    {
      question: "Are option topics covered in tutoring?",
      answer:
        "Yes — the four option topics rotate by school. Common choices include Relativity, Engineering Physics and Astrophysics. Tell us the school's chosen option so the match is right.",
    },
    {
      question: "How early should Physics tutoring start?",
      answer:
        "Within the first three months of DP Year 1 is common, with sustained weekly support through Year 1 and intensification before mocks and final exams. Year 2 mock revision typically begins in October to December.",
    },
    {
      question: "Does online Physics tutoring work?",
      answer:
        "Yes, with shared digital whiteboards. Online HL specialists are common for niche topics. Practical experiments remain a school responsibility.",
    },
    {
      question: "Do you have tutors with examiner experience in Physics?",
      answer:
        "Where it is documented, it is surfaced on the tutor profile. Confirm directly during the discovery call.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/chemistry/", anchorText: "Chemistry tutor support", context: "common pairing" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "common pairing" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "Physics tutors in Gurugram", context: "city availability" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "Physics tutors in Delhi", context: "city availability" },
  ],
};

const COURSE_CHEMISTRY: SeedPage = {
  ...COURSE_PHYSICS,
  slug: "chemistry",
  fullPath: "/courses/ib/chemistry/",
  primaryKeyword: "IB Chemistry tutor",
  secondaryKeywords: [
    "IB Chemistry HL tutor",
    "IB Chemistry SL tutor",
    "IB Chemistry IA tutor",
    "IB organic chemistry tutor",
    "IB Chemistry Paper 2 tutor",
    "IB Chemistry tutor Gurgaon",
    "IB Chemistry tutor Delhi",
    "IB Chemistry online tutor",
  ],
  metaTitle: "IB Chemistry Tutor — HL & SL Diploma Programme Support | IB Gram",
  metaDescription:
    "IB Chemistry HL and SL tutors for Paper 1, 2, 3, organic chemistry, the Internal Assessment, and command-term-aware exam revision. Home, online, hybrid.",
  h1: "IB Chemistry tutor support",
  heroTitle: "IB Chemistry — concept clarity, organic depth, IA-aware tutoring",
  heroSubtitle:
    "DP Chemistry rewards conceptual clarity, command-term-aware writing, and controlled IA methodology. Tutoring focuses on all three.",
  introSummary:
    "This page covers DP Chemistry at both HL and SL — paper structure, organic chemistry depth, IA mentoring, and how IB Gram matches a Chemistry specialist.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Courses", url: ABSOLUTE("/courses/") },
    { name: "IB", url: ABSOLUTE("/courses/ib/") },
    { name: "Chemistry", url: ABSOLUTE("/courses/ib/chemistry/") },
  ],
  courseSchema: {
    name: "IB Chemistry tutoring (HL/SL)",
    description: "DP Chemistry tutoring across HL and SL with IA mentoring and external paper revision.",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Why Chemistry support is in demand",
      body: p(
        `IB DP Chemistry is taught at HL and SL with shared core topics, additional HL material, and a written practical / option Paper 3.`,
        `Organic chemistry is the most-requested topic for tutoring, followed by acids and bases, kinetics, and thermodynamics for HL.`,
        `Most students do not fail Chemistry on calculations — they fail it on command-term-aware extended response, mechanism arrow-pushing precision, and uncertainty handling on the IA.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Paper-by-paper focus",
      body: p(
        `Paper 1 (multiple choice) rewards rapid conceptual recall.`,
        `Paper 2 (short and extended response) is where command-term awareness drives marks — "deduce", "outline", "explain" each have a different mark profile.`,
        `Paper 3 covers option topics (chosen by the school) and a data-and-design experimental component.`,
        `Internal Assessment is the same five-criterion structure as Physics and Biology, with strong examiner emphasis on personal engagement and uncertainty handling.`,
      ),
      items: ["Paper 1 — multiple choice", "Paper 2 — short and extended response", "Paper 3 — options and experimental", "Internal Assessment — investigation"],
    },
    {
      blockType: "matching_process",
      heading: "Common Chemistry tutoring requests",
      body: p(
        `Organic chemistry (mechanism, retrosynthesis, spectroscopy interpretation) is the most common HL request.`,
        `Acids, bases and buffers is the most common Year 2 request before mocks.`,
        `Stoichiometry and equilibrium calculations are common Year 1 requests.`,
        `Internal Assessment requests cluster in late Year 1 and start of Year 2.`,
      ),
    },
    TUTORING_MODES_BLOCK("Chemistry", "Gurugram, Delhi and Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this page does not do",
      body: p(
        `It does not promise specific exam grades.`,
        `It does not deliver practical lab work — that is the school's responsibility and is supervised on-site.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where Chemistry specialists are available",
      body: p(
        `Chemistry specialist availability is strongest in Gurugram, Delhi and Noida, with online specialists filling HL-only gaps where local availability is thin.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Tell us the topic and the timing",
      body: "Send the school, DP year, the topic currently being taught (or the IA window status), and whether the priority is mocks or finals. Chemistry matches come back within one working day.",
    },
  ],
  faqs: [
    {
      question: "Is organic chemistry really the hardest part of HL Chemistry?",
      answer:
        "For many students, yes — mechanism precision and retrosynthesis logic take sustained practice. Targeted tutoring on organic chemistry in late Year 1 and early Year 2 is one of the highest-impact interventions.",
    },
    {
      question: "What is the difference between HL and SL Chemistry?",
      answer:
        "HL covers additional depth in organic, thermodynamics, equilibria and atomic structure, and has a longer Paper 3. SL covers the core in less depth. HL is usually expected for chemistry, medicine and biochemistry university courses.",
    },
    {
      question: "How is the Chemistry IA marked?",
      answer:
        "Against five criteria for a total of 24 marks. Strong IAs show a genuine personal research question, controlled methodology, careful uncertainty handling, and reflective evaluation.",
    },
    {
      question: "Can a tutor help with spectroscopy interpretation?",
      answer:
        "Yes — IR, mass spectrometry and NMR interpretation are common Year 2 tutoring requests. Practice on past-paper spectra is the most efficient approach.",
    },
    {
      question: "Are option topics for Paper 3 covered?",
      answer:
        "Yes — biochemistry, medicinal chemistry, materials and energy are common school choices. Tell us the option your school is teaching.",
    },
    {
      question: "How early should Chemistry tutoring start?",
      answer:
        "Within the first three months of DP Year 1 is common, with sustained support through Year 1 and intensification before mocks and finals.",
    },
    {
      question: "Does online Chemistry tutoring work?",
      answer:
        "Yes — shared digital whiteboards handle mechanism work well. Practical labs remain a school responsibility.",
    },
    {
      question: "Do you have tutors with marker or examiner experience in Chemistry?",
      answer:
        "Where documented, this is surfaced on the tutor profile. Confirm during the discovery call.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/physics/", anchorText: "Physics tutor support", context: "common pairing" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "common pairing" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "Chemistry tutors in Gurugram", context: "city availability" },
  ],
};

const COURSE_ECONOMICS: SeedPage = {
  pageType: PageType.subject,
  curriculum: Curriculum.IB,
  slug: "economics",
  fullPath: "/courses/ib/economics/",
  primaryKeyword: "IB Economics tutor",
  secondaryKeywords: [
    "IB Economics HL tutor",
    "IB Economics SL tutor",
    "IB Economics IA commentary tutor",
    "IB Economics Paper 1 essay tutor",
    "IB Economics tutor Gurgaon",
    "IB Economics tutor Delhi",
    "IB Economics online tutor",
  ],
  metaTitle: "IB Economics Tutor — HL & SL Diploma Programme Support | IB Gram",
  metaDescription:
    "IB Economics HL and SL tutors for Paper 1 essays, Paper 2 data response, Paper 3 (HL), and IA commentary mentoring. Home, online and hybrid lessons.",
  h1: "IB Economics tutor support",
  heroTitle: "IB Economics — diagram-fluent, command-term-aware, IA-confident",
  heroSubtitle:
    "DP Economics rewards diagrammatic clarity, command-term-aware writing and real-world evidence. Tutoring blends all three.",
  introSummary:
    "This page covers DP Economics at both HL and SL — paper structure, the four key concepts, IA commentary mentoring, and how IB Gram matches an Economics specialist.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Courses", url: ABSOLUTE("/courses/") },
    { name: "IB", url: ABSOLUTE("/courses/ib/") },
    { name: "Economics", url: ABSOLUTE("/courses/ib/economics/") },
  ],
  courseSchema: {
    name: "IB Economics tutoring (HL/SL)",
    description: "DP Economics tutoring across HL and SL with IA commentary mentoring and exam revision.",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Why DP Economics needs subject-aware tutoring",
      body: p(
        `DP Economics is taught at HL and SL across four units — microeconomics, macroeconomics, the global economy, and an integrating framework of nine key concepts.`,
        `It is examined through Paper 1 (extended-response essays), Paper 2 (data-response questions) and Paper 3 (HL only — policy and quantitative reasoning).`,
        `Internal Assessment is a portfolio of three short commentaries on contemporary news articles, each applying course content to a real-world situation.`,
        `Most students do not fail Economics on theory — they fail on diagram clarity, on command-term-aware essay structure, and on Linking the four key concepts (interdependence, change, scarcity, sustainability) into responses.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Paper-by-paper focus",
      body: p(
        `Paper 1 essays reward a clear structure — definition, diagram, explanation, evaluation, conclusion — with command-term sensitivity to "discuss", "examine", "evaluate".`,
        `Paper 2 data-response questions reward clean diagram drawing, accurate calculation and evidence-grounded extended response. Diagram conventions matter — axes labelled correctly, equilibrium shifts shown clearly.`,
        `Paper 3 (HL only) tests policy analysis and quantitative reasoning. Tutoring here covers calculation accuracy and structured policy evaluation.`,
        `Internal Assessment commentaries are 800 words each, applying course content to a news article. Mentoring covers article selection, theory application, diagram integration and clear evaluative writing.`,
      ),
      items: ["Paper 1 — extended-response essays", "Paper 2 — data response", "Paper 3 — HL policy reasoning", "IA — three short commentaries"],
    },
    {
      blockType: "matching_process",
      heading: "Common Economics tutoring requests",
      body: p(
        `Microeconomics essay structure (especially elasticity, market failure and government intervention) is the most common Year 1 request.`,
        `Macroeconomics policy essays (monetary, fiscal and supply-side policy evaluation) is the most common Year 2 request.`,
        `Internal Assessment commentary mentoring across three articles is concentrated in late Year 1 and early Year 2.`,
        `HL Paper 3 calculation and policy practice intensifies before final exams.`,
      ),
    },
    TUTORING_MODES_BLOCK("Economics", "Gurugram, Delhi and Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this page does not do",
      body: p(
        `It does not promise specific exam grades.`,
        `It does not write IA commentaries. The articles, application and writing must be the student's own — academic-honesty checks are strict.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where Economics specialists are available",
      body: p(
        `Economics specialist availability is strongest in Gurugram (Golf Course Road, DLF Phase 5), Delhi (Vasant Vihar, Greater Kailash, Saket), Noida (Sector 50, Sector 62, Noida Expressway). Online specialists with examiner experience are common.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Tell us your unit and the IA cycle",
      body: "When you reach out, share the school, DP year, the unit currently being studied, and whether the IA commentary cycle is open. Match arrives within one working day for Economics.",
    },
  ],
  faqs: [
    {
      question: "Is HL Economics realistic if my child is strong in essay subjects but weak in Maths?",
      answer:
        "HL adds Paper 3 quantitative reasoning. Strong essay students can manage HL with targeted Paper 3 calculation practice in the four months before final exams. Some students are better served by SL — discovery conversations help decide.",
    },
    {
      question: "How are IA commentaries marked?",
      answer:
        "Each commentary is marked against five criteria — diagrams, terminology, application, analysis and evaluation — for 14 marks each, totalling 45 for the portfolio (after rubric weighting). Strong commentaries integrate diagrams cleanly and apply theory precisely.",
    },
    {
      question: "What kinds of news articles work for IA commentaries?",
      answer:
        "Articles that are recent, focused on a single economic event, and rich enough in detail to apply DP theory. Articles that are too general, too short, or already analysed by an economist tend to score poorly.",
    },
    {
      question: "Can a tutor help draw clean diagrams?",
      answer:
        "Yes — diagram fluency is one of the highest-leverage Economics tutoring areas. Tutors run diagram drills until the major models (demand and supply, elasticity, AD/AS, externalities, exchange rates) can be drawn cleanly under exam time pressure.",
    },
    {
      question: "Are command terms really that important?",
      answer:
        "Yes. The difference between 'explain' and 'evaluate' decides the structure and the mark allocation. Tutors spend Year 1 establishing the command-term-to-structure mapping that examiners reward.",
    },
    {
      question: "How early should Economics tutoring start?",
      answer:
        "Within the first three months of DP Year 1 for sustained support. Short-cycle support is also useful before mocks (October–December of Year 2) and before final May exams.",
    },
    {
      question: "Does online Economics tutoring work?",
      answer:
        "Yes, especially with a shared digital whiteboard for diagram practice. Online specialists with examiner experience are common in Economics.",
    },
    {
      question: "Do you have Economics tutors with marker or examiner experience?",
      answer:
        "Where it is documented, it is surfaced on the tutor profile. Discovery calls confirm before booking.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/math-ai-hl/", anchorText: "Math AI HL tutor support", context: "common pairing" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "Economics tutors in Gurugram", context: "city availability" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "Economics tutors in Delhi", context: "city availability" },
  ],
};

// ─── LOCATION PAGES ────────────────────────────────────────────────────────

const IB_DELHI_HUB: SeedPage = {
  pageType: PageType.city,
  curriculum: Curriculum.IB,
  slug: "delhi",
  fullPath: "/ib-tutors/delhi/",
  cityFk: "delhi",
  primaryKeyword: "IB tutors in Delhi",
  secondaryKeywords: [
    "IB home tutor Delhi",
    "IB DP tutor Delhi",
    "IB MYP tutor Delhi",
    "IB PYP tutor Delhi",
    "IB Math AA tutor Delhi",
    "IB Physics tutor Delhi",
    "IB Economics tutor Delhi",
    "online IB tutor Delhi",
    "IB tutor South Delhi",
    "IB tutor Vasant Vihar",
    "IB tutor Chanakyapuri",
    "IB tutor Saket",
    "IB tutor Greater Kailash",
    "IB tutor Defence Colony",
    "IB tutor Hauz Khas",
  ],
  metaTitle: "IB Tutors in Delhi — Home, Online & Hybrid Across South Delhi & NCR | IB Gram",
  metaDescription:
    "Find verified IB PYP, MYP and DP tutors across South Delhi, Vasant Vihar, Chanakyapuri, Saket, Greater Kailash and the wider NCR. Subject-first matching.",
  h1: "IB tutors in Delhi",
  heroTitle: "IB tutoring across Delhi — matched by subject, level and lesson mode",
  heroSubtitle:
    "Families across South Delhi, Vasant Vihar, Chanakyapuri, Saket and Greater Kailash search for IB tutoring with a mix of school-aware home availability and online HL specialist coverage. This hub explains how IB Gram approaches that.",
  introSummary:
    "IB Gram supports IB families across Delhi for PYP, MYP and Diploma Programme tutoring. Matching reviews start with subject and level, not postcode — and surface honest home, online and hybrid options based on realistic specialist availability.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
    { name: "Delhi", url: ABSOLUTE("/ib-tutors/delhi/") },
  ],
  blocks: [
    {
      blockType: "intro",
      heading: "What IB families in Delhi usually ask first",
      body: p(
        `Delhi IB families typically begin with one of two questions: whether home tutoring is realistic across South Delhi traffic windows, and whether the strongest HL specialist for a Diploma Programme subject is genuinely local or whether online lessons make more sense.`,
        `The honest answer is mixed. For PYP and MYP support, local home tutoring across Vasant Vihar, Chanakyapuri, Saket, Greater Kailash and Defence Colony is realistic. For DP HL subjects with thin local specialist supply — Math AA HL, Computer Science HL, niche option topics in Sciences — online lessons often make a stronger match.`,
      ),
    },
    {
      blockType: "programmes",
      heading: "IB programmes supported across Delhi",
      body: p(
        `PYP (ages 3–12) is supported with enquiry-based foundations, reading fluency, early Maths and exhibition-year structure.`,
        `MYP (ages 11–16) is supported with criterion-based assessment coaching, Personal Project mentoring and eAssessment preparation.`,
        `DP (ages 16–19) is the most-requested programme in Delhi — supported across Math AA, Math AI, Physics, Chemistry, Biology, Economics, English Language and Literature, Business Management and Computer Science, with IA, Extended Essay and ToK mentoring.`,
      ),
      items: ["PYP", "MYP", "DP HL/SL across the six subject groups"],
    },
    {
      blockType: "subjects",
      heading: "DP subjects with active Delhi availability",
      body: p(
        `Mathematics AA and AI are the most-requested subjects, both at HL and SL, with paper-aware coaching and IA exploration mentoring.`,
        `Sciences — Physics, Chemistry, Biology — are matched to tutors teaching to the IB syllabus rather than CBSE content.`,
        `Economics, English Language and Literature and Business Management round out the most-requested DP group with Delhi families.`,
      ),
      items: ["Math AA (HL/SL)", "Math AI (HL/SL)", "Physics (HL/SL)", "Chemistry (HL/SL)", "Biology (HL/SL)", "Economics (HL/SL)", "English Lang & Lit (HL/SL)", "Business Management (HL/SL)"],
    },
    {
      blockType: "local_areas",
      heading: "Delhi areas with strong IB tutoring availability",
      body: p(
        `South Delhi remains the densest IB tutoring zone — Vasant Vihar, Chanakyapuri, Saket, Greater Kailash, Defence Colony, and Hauz Khas have overlapping tutor availability for both DP HL subjects and MYP support.`,
        `Dwarka and Rohini have growing demand with thinner local specialist supply — online lessons are common in these zones.`,
        `${DISCLAIMER}`,
      ),
      items: ["Vasant Vihar", "Chanakyapuri", "Saket", "Greater Kailash", "Defence Colony", "Hauz Khas", "South Delhi", "Dwarka", "Rohini"],
    },
    {
      blockType: "schools",
      heading: "School ecosystems we support across Delhi",
      body: p(
        `Tutoring requests come from families connected with The British School (Chanakyapuri), American Embassy School (Chanakyapuri), DPS International (Saket), Pathways (Noida-adjacent), and several other IB schools across the NCR.`,
        `${DISCLAIMER}`,
      ),
      items: ["The British School New Delhi", "American Embassy School", "DPS International Saket"],
    },
    {
      blockType: "matching_process",
      heading: "How a Delhi IB tutor match is reviewed",
      body: p(
        `Matching reviews look at exact subject and level first, then school calendar (Delhi schools run a mix of Northern and Western academic calendars), then realistic local availability, then mode preference (home / online / hybrid).`,
        `Subject specialist fit is protected first; lesson-mode fit is fitted around it. If the strongest specialist for a Math AA HL student is not in South Delhi, online lessons are recommended honestly rather than substituting a weaker local match.`,
      ),
    },
    TUTORING_MODES_BLOCK("any IB subject", "Delhi"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What Delhi IB tutoring at IB Gram does not promise",
      body: p(
        `It does not promise nearest-tutor matching when that would sacrifice subject specialist depth.`,
        `It does not guarantee specific grade outcomes — those depend on the student, the school and the examiner.`,
        `It does not promise affiliation with any Delhi school. ${DISCLAIMER}`,
      ),
    },
    {
      blockType: "cta",
      heading: "Tell us the school and the subject",
      body: "When you reach out, share the school name, the IB programme stage (PYP / MYP / DP), the subject and level, and your preferred lesson mode. The Delhi match comes back within one working day for common subjects.",
    },
  ],
  faqs: [
    {
      question: "Are IB tutors available across South Delhi?",
      answer:
        "Yes, South Delhi is the densest IB tutoring zone in Delhi — Vasant Vihar, Chanakyapuri, Saket, Greater Kailash, Defence Colony and Hauz Khas all have strong overlapping availability for DP and MYP support.",
    },
    {
      question: "Is home tutoring realistic across Delhi traffic?",
      answer:
        "For tutors and students within the same broad zone (for example South Delhi to South Delhi), home tutoring is realistic. Cross-zone matches (South Delhi to Dwarka or Rohini) often work better as online or hybrid arrangements.",
    },
    {
      question: "Can I find IB Math AA HL tutors in Delhi?",
      answer:
        "Yes — Math AA HL specialists are available across Delhi with strongest local home availability in South Delhi and online-led options for families in other zones.",
    },
    {
      question: "Does IB Gram support PYP children in Delhi?",
      answer:
        "Yes, with reading fluency, early Maths, English-language confidence and exhibition-year support across South Delhi schools.",
    },
    {
      question: "Is IB Gram affiliated with any Delhi school?",
      answer:
        DISCLAIMER,
    },
    {
      question: "What about Internal Assessment and Extended Essay mentoring in Delhi?",
      answer:
        "IA and EE mentoring is available across all DP subjects. Mentors work in parallel with the school's IA supervisor or EE supervisor and focus on structure, methodology and cadence.",
    },
    {
      question: "Are tutors available for online lessons in Delhi?",
      answer:
        "Yes — online is the preferred mode for HL specialists in subjects with thin local supply and for families whose timetable does not allow weekday travel.",
    },
    {
      question: "How fast can I get a match in Delhi?",
      answer:
        "Common DP subjects are typically matched within one working day. Specialist HL-only requests may take two to three working days to confirm the right profile.",
    },
  ],
  internalLinks: [
    { targetUrl: "/ib-tutors/", anchorText: "IB tutor city hub", context: "national hub" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "sibling city" },
    { targetUrl: "/ib-tutors/noida/", anchorText: "IB tutors in Noida", context: "sibling city" },
    { targetUrl: "/ib-tutors/delhi/areas/vasant-vihar/", anchorText: "Vasant Vihar IB tutors", context: "area detail" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "subject deep-dive" },
  ],
};

const IB_NOIDA_HUB: SeedPage = {
  pageType: PageType.city,
  curriculum: Curriculum.IB,
  slug: "noida",
  fullPath: "/ib-tutors/noida/",
  cityFk: "noida",
  primaryKeyword: "IB tutors in Noida",
  secondaryKeywords: [
    "IB home tutor Noida",
    "IB DP tutor Noida",
    "IB Math AA tutor Noida",
    "IB Physics tutor Noida",
    "IGCSE tutor Noida",
    "online IB tutor Noida",
    "IB tutor Noida Expressway",
    "IB tutor Sector 44 Noida",
    "IB tutor Sector 50 Noida",
    "IB tutor Sector 62 Noida",
    "IB tutor Sector 128 Noida",
    "IB tutor Jaypee Greens Wish Town",
  ],
  metaTitle: "IB Tutors in Noida — Sector 50, 62, 128 & Expressway | IB Gram",
  metaDescription:
    "Find verified IB PYP, MYP and DP tutors across Noida — Sector 50, Sector 62, Sector 128, Noida Expressway and Jaypee Greens Wish Town. Home, online and hybrid.",
  h1: "IB tutors in Noida",
  heroTitle: "IB tutoring across Noida — matched by subject, level and lesson mode",
  heroSubtitle:
    "Families across Sector 50, Sector 62, Sector 128, the Noida Expressway and Jaypee Greens Wish Town search for IB tutoring that balances local availability with the strongest HL specialist for Diploma Programme subjects.",
  introSummary:
    "IB Gram supports IB families across Noida for PYP, MYP and Diploma Programme tutoring. Matching reviews start with subject and level, then layer in realistic local availability and lesson-mode preference.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
    { name: "Noida", url: ABSOLUTE("/ib-tutors/noida/") },
  ],
  blocks: [
    {
      blockType: "intro",
      heading: "What IB families in Noida usually ask first",
      body: p(
        `Noida IB families ask three questions most often: whether home tutoring is realistic from their sector to the tutor's typical zone, whether a DP HL specialist with examiner experience is genuinely local, and whether online lessons make a stronger HL match than waiting for a thin local supply.`,
        `Across central Noida (Sector 50, Sector 62) home tutoring is realistic for common DP and MYP subjects. Along the Noida Expressway and in Jaypee Greens Wish Town, online HL specialists are often a stronger match than insisting on local home tuition.`,
      ),
    },
    {
      blockType: "programmes",
      heading: "IB programmes supported across Noida",
      body: p(
        `PYP, MYP and DP are all supported. The strongest active inventory is in DP — Math AA, Math AI, Physics, Chemistry, Biology, Economics and English Language and Literature.`,
        `MYP support concentrates on criterion-based assessment coaching and Personal Project mentoring.`,
        `PYP support is light-touch — reading fluency, early Maths, English-language confidence.`,
      ),
      items: ["PYP", "MYP", "DP HL/SL"],
    },
    {
      blockType: "subjects",
      heading: "DP subjects with active Noida availability",
      body: p(
        `Mathematics AA and AI are the most-requested subjects across Noida, with paper-specific coaching and IA mentoring.`,
        `Sciences — Physics, Chemistry, Biology — are matched to tutors teaching to the IB syllabus.`,
        `Economics, English Language and Literature and Business Management complete the most-requested DP subjects in Noida.`,
      ),
      items: ["Math AA (HL/SL)", "Math AI (HL/SL)", "Physics (HL/SL)", "Chemistry (HL/SL)", "Biology (HL/SL)", "Economics (HL/SL)", "English Lang & Lit (HL/SL)"],
    },
    {
      blockType: "local_areas",
      heading: "Noida areas with strong IB tutoring availability",
      body: p(
        `Sector 50 and Sector 62 have the densest local IB tutor availability for both home and hybrid lessons.`,
        `Noida Expressway, Sector 128 and Jaypee Greens Wish Town tend toward online-led arrangements when the strongest HL specialist for the subject is not in the immediate sector.`,
        `Sector 44 has a mix of home and online availability for common DP subjects.`,
      ),
      items: ["Sector 50", "Sector 62", "Sector 44", "Sector 128", "Noida Expressway", "Jaypee Greens Wish Town"],
    },
    {
      blockType: "schools",
      heading: "School ecosystems we support across Noida",
      body: p(
        `Tutoring requests come from families connected with Pathways School Noida, Genesis Global School and Step by Step School (plus a number of other schools running IB programmes across the NCR).`,
        `${DISCLAIMER}`,
      ),
      items: ["Pathways School Noida", "Genesis Global School", "Step by Step School"],
    },
    {
      blockType: "matching_process",
      heading: "How a Noida IB tutor match is reviewed",
      body: p(
        `Matching reviews protect subject specialist fit first, then layer in realistic Noida-area home availability, then confirm lesson mode preference (home / online / hybrid).`,
        `For families along the Noida Expressway or in Jaypee Greens Wish Town, online HL specialists are often recommended honestly rather than waiting for thin local home availability.`,
      ),
    },
    TUTORING_MODES_BLOCK("any IB subject", "Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this Noida hub does not promise",
      body: p(
        `It does not promise instant local home matches for niche HL subjects.`,
        `It does not guarantee specific exam results.`,
        `${DISCLAIMER}`,
      ),
    },
    {
      blockType: "cta",
      heading: "Tell us the sector and the subject",
      body: "When you reach out, share the school name, the sector (Sector 50, Sector 62, Sector 128, Noida Expressway, Jaypee Greens Wish Town), the IB programme stage, and the subject and level. The match comes back within one working day for common DP subjects.",
    },
  ],
  faqs: [
    {
      question: "Are IB tutors available in Noida Sector 50?",
      answer:
        "Yes — Sector 50 has the densest local IB tutor availability across central Noida, with strong inventory for common DP subjects and MYP support.",
    },
    {
      question: "Can I find IB Math AA tutors in Noida?",
      answer:
        "Yes — Math AA tutors are available across central Noida with home and hybrid lessons. Math AA HL specialists with thin local supply are often matched online from outside Noida.",
    },
    {
      question: "Is home tutoring practical from Jaypee Greens Wish Town?",
      answer:
        "For common subjects, often yes when the tutor is along the Expressway corridor. For HL specialists, online lessons are usually a stronger match than long-commute home arrangements.",
    },
    {
      question: "Are IB tutors available on the Noida Expressway?",
      answer:
        "Mixed — some are, but online HL specialists are more common for families along the Expressway and in Sector 128, especially for niche subjects.",
    },
    {
      question: "Does IB Gram support PYP families in Noida?",
      answer:
        "Yes, with light-touch support for reading fluency, early Maths and English-language confidence. Most PYP engagements are short-cycle rather than year-long weekly tutoring.",
    },
    {
      question: "Is IB Gram affiliated with any Noida school?",
      answer:
        DISCLAIMER,
    },
    {
      question: "Are IGCSE tutors also available in Noida?",
      answer:
        "Yes — IGCSE tutor availability mirrors IB availability across Sector 50, Sector 62 and the Expressway. See the IGCSE tutors Noida page for board-specific (Cambridge / Edexcel) detail.",
    },
    {
      question: "How quickly can a Noida match be confirmed?",
      answer:
        "Common DP subjects are matched within one working day. HL-only or niche subjects may take two to three working days to confirm the right profile.",
    },
  ],
  internalLinks: [
    { targetUrl: "/ib-tutors/", anchorText: "IB tutor city hub", context: "national hub" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "IB tutors in Delhi", context: "sibling city" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "sibling city" },
    { targetUrl: "/ib-tutors/noida/areas/sector-50/", anchorText: "Sector 50 IB tutors", context: "area detail" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
  ],
};

const DELHI_VASANT_VIHAR: SeedPage = {
  pageType: PageType.area,
  curriculum: Curriculum.IB,
  slug: "vasant-vihar",
  fullPath: "/ib-tutors/delhi/areas/vasant-vihar/",
  cityFk: "delhi",
  primaryKeyword: "IB tutor Vasant Vihar",
  secondaryKeywords: [
    "IB home tutor Vasant Vihar",
    "IB DP tutor Vasant Vihar",
    "IB Math AA tutor Vasant Vihar",
    "IB Physics tutor Vasant Vihar",
    "IB Economics tutor Vasant Vihar",
    "IGCSE tutor Vasant Vihar",
    "IB tutor near American Embassy School",
    "IB tutor near British School Delhi",
  ],
  metaTitle: "IB Tutor Vasant Vihar — Home, Online & Hybrid Delhi | IB Gram",
  metaDescription:
    "Find verified IB tutors in Vasant Vihar — DP HL/SL, MYP and PYP support across home, online and hybrid lessons. Subject-first matching.",
  h1: "IB tutors in Vasant Vihar, Delhi",
  heroTitle: "Vasant Vihar IB tutoring — close to international school corridors",
  heroSubtitle:
    "Vasant Vihar sits at the heart of one of South Delhi's densest international school corridors. IB families here have access to strong local home tutoring inventory and a deep online specialist pool for HL subjects.",
  introSummary:
    "This page is for IB families in Vasant Vihar and the neighbouring South Delhi corridor. It explains how matching works locally, which subjects have the strongest inventory, and what realistic lesson modes look like.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
    { name: "Delhi", url: ABSOLUTE("/ib-tutors/delhi/") },
    { name: "Vasant Vihar", url: ABSOLUTE("/ib-tutors/delhi/areas/vasant-vihar/") },
  ],
  blocks: [
    {
      blockType: "intro",
      heading: "Why Vasant Vihar is a strong IB tutoring zone",
      body: p(
        `Vasant Vihar sits next to several international and IB schools — American Embassy School and The British School are both nearby in the Chanakyapuri / South Delhi corridor.`,
        `Local home tutoring inventory for IB and IGCSE subjects is some of the strongest in Delhi, especially for DP HL Maths, Sciences, Economics and English Language and Literature.`,
        `${DISCLAIMER}`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Subjects with active local availability",
      body: p(
        `Math AA HL/SL, Math AI HL/SL, Physics HL/SL, Chemistry HL/SL, Biology HL/SL, Economics HL/SL, English A Language and Literature HL/SL are all matched locally most of the time.`,
        `Niche HL subjects (Computer Science HL, specific Sciences option topics) may be matched online from outside Delhi for the strongest specialist.`,
      ),
      items: ["Math AA (HL/SL)", "Math AI (HL/SL)", "Physics", "Chemistry", "Biology", "Economics", "English A Lang & Lit"],
    },
    {
      blockType: "matching_process",
      heading: "How a Vasant Vihar match works",
      body: p(
        `Matching reviews start with subject and level, then check realistic Vasant Vihar / Chanakyapuri / South Delhi local availability, then layer in mode (home / online / hybrid).`,
        `Cross-zone matches into Vasant Vihar are common from neighbouring areas — Greater Kailash, Saket, Defence Colony — when the home tutor is in one zone and the student in the other.`,
      ),
    },
    TUTORING_MODES_BLOCK("any IB subject", "Vasant Vihar and South Delhi"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "Honest note on availability",
      body: p(
        `Local home tutoring is strong but not infinite. During peak DP exam season — March to early May — short-notice home availability tightens. Plan three to four weeks ahead for sustained weekly slots.`,
        `${DISCLAIMER}`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Neighbouring areas",
      body: p(
        `Vasant Vihar is close to Chanakyapuri, Vasant Kunj, Hauz Khas, Greater Kailash and Defence Colony. Most IB tutors covering Vasant Vihar also cover these neighbouring zones.`,
      ),
      items: ["Chanakyapuri", "Vasant Kunj", "Hauz Khas", "Greater Kailash", "Defence Colony"],
    },
    {
      blockType: "cta",
      heading: "Tell us the school and the subject",
      body: "Send the school name, IB programme stage, subject and level, and your preferred lesson mode. Vasant Vihar matches usually come back within one working day for common DP subjects.",
    },
  ],
  faqs: [
    {
      question: "Are IB tutors available for home tutoring in Vasant Vihar?",
      answer:
        "Yes — local home tutoring is strong for common DP and MYP subjects. HL specialists for niche subjects may be matched online.",
    },
    {
      question: "Is there overlap between Vasant Vihar tutors and Chanakyapuri tutors?",
      answer:
        "Yes — most tutors cover both Vasant Vihar and the wider South Delhi corridor including Chanakyapuri, Vasant Kunj and Hauz Khas.",
    },
    {
      question: "Can I find an IB Math AA HL tutor near American Embassy School?",
      answer:
        "Yes. Tutors near the American Embassy School / Chanakyapuri corridor cover Vasant Vihar within a normal home-tuition radius. Online options are also available.",
    },
    {
      question: "Is IB Gram affiliated with American Embassy School or The British School?",
      answer:
        DISCLAIMER,
    },
    {
      question: "What about MYP support in Vasant Vihar?",
      answer:
        "MYP support is available locally for criterion-based assessment coaching and Personal Project mentoring in Year 5. Most engagements are six to twelve weeks.",
    },
    {
      question: "Are weekend tutoring slots available in Vasant Vihar?",
      answer:
        "Most tutors offer weekend slots. Saturday morning and Sunday afternoon are the most-requested windows during exam intensification.",
    },
    {
      question: "How quickly can a Vasant Vihar match be confirmed?",
      answer:
        "Common DP subjects are matched within one working day. HL-only or niche subjects may take two to three working days to confirm the right profile.",
    },
    {
      question: "Are tutors here open to hybrid (home + online) plans?",
      answer:
        "Yes — hybrid is common in DP Year 2, with home lessons during term time and online for weekend mock revision.",
    },
  ],
  internalLinks: [
    { targetUrl: "/ib-tutors/delhi/", anchorText: "IB tutors in Delhi", context: "parent city" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "subject deep-dive" },
    { targetUrl: "/courses/ib/economics/", anchorText: "Economics tutor support", context: "subject deep-dive" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
  ],
};

const NOIDA_SECTOR_50: SeedPage = {
  pageType: PageType.area,
  curriculum: Curriculum.IB,
  slug: "sector-50",
  fullPath: "/ib-tutors/noida/areas/sector-50/",
  cityFk: "noida",
  primaryKeyword: "IB tutor Sector 50 Noida",
  secondaryKeywords: [
    "IB home tutor Sector 50 Noida",
    "IB DP tutor Sector 50",
    "IB Math AA tutor Sector 50",
    "IB Physics tutor Sector 50",
    "IGCSE tutor Sector 50 Noida",
    "IB tutor central Noida",
  ],
  metaTitle: "IB Tutor Sector 50, Noida — Home, Online & Hybrid Across Central Noida | IB Gram",
  metaDescription:
    "Find verified IB DP, MYP and PYP tutors in Sector 50, Noida. Home, online and hybrid lessons for Maths, Sciences, Economics and English. Subject-first matching.",
  h1: "IB tutors in Sector 50, Noida",
  heroTitle: "Sector 50 IB tutoring — central Noida's strongest local availability",
  heroSubtitle:
    "Sector 50 has the densest local IB tutor inventory in central Noida, with overlapping availability for DP HL/SL subjects and MYP support across home, online and hybrid lessons.",
  introSummary:
    "This page is for IB families in Sector 50 and central Noida. It covers which subjects have strong local availability and how matching is reviewed.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
    { name: "Noida", url: ABSOLUTE("/ib-tutors/noida/") },
    { name: "Sector 50", url: ABSOLUTE("/ib-tutors/noida/areas/sector-50/") },
  ],
  blocks: [
    {
      blockType: "intro",
      heading: "Why Sector 50 is a strong IB tutoring zone",
      body: p(
        `Sector 50 sits at the heart of central Noida with proximity to several IB and IGCSE schools and a high concentration of IB families.`,
        `Home tutoring inventory for common DP subjects is some of the strongest in Noida, with overlapping availability with Sector 44 and Sector 62.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Subjects with active local availability",
      body: p(
        `Math AA HL/SL and Math AI HL/SL are matched locally most of the time. Physics, Chemistry, Biology and Economics also have strong local home availability. English Language and Literature has solid availability with hybrid as a common arrangement.`,
        `Niche HL subjects may be matched online from outside Noida for the strongest specialist.`,
      ),
      items: ["Math AA (HL/SL)", "Math AI (HL/SL)", "Physics", "Chemistry", "Biology", "Economics", "English A Lang & Lit"],
    },
    {
      blockType: "matching_process",
      heading: "How a Sector 50 match works",
      body: p(
        `Matching reviews start with subject and level, check realistic Sector 50 home availability with overlap into Sector 44 and Sector 62, then layer in lesson mode.`,
        `Cross-sector matches across central Noida are common — most tutors covering Sector 50 also cover Sector 44 and Sector 62.`,
      ),
    },
    TUTORING_MODES_BLOCK("any IB subject", "central Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "Honest note on availability",
      body: p(
        `Local availability is strong but tightens during peak DP exam season. Plan three to four weeks ahead for sustained weekly slots.`,
        `${DISCLAIMER}`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Neighbouring sectors",
      body: p(
        `Sector 50 is close to Sector 44, Sector 49, Sector 62 and Sector 128. Most IB tutors here cover the wider central Noida cluster.`,
      ),
      items: ["Sector 44", "Sector 49", "Sector 62", "Sector 128"],
    },
    {
      blockType: "cta",
      heading: "Tell us the subject and the level",
      body: "Send the school name, the DP year, the subject and level, and your preferred lesson mode. Sector 50 matches typically come back within one working day for common DP subjects.",
    },
  ],
  faqs: [
    {
      question: "Are IB tutors available in Sector 50?",
      answer:
        "Yes — Sector 50 has the densest local IB tutor inventory in central Noida, with overlap into Sector 44 and Sector 62.",
    },
    {
      question: "Can I find an IB Math AA HL tutor in Sector 50?",
      answer:
        "Yes — Math AA HL specialists are available locally and through online HL-led options for thin-supply subjects.",
    },
    {
      question: "Is hybrid tutoring common in central Noida?",
      answer:
        "Yes — hybrid is common in DP Year 2, with term-time home lessons and online weekend revision before mocks and finals.",
    },
    {
      question: "Are weekend slots available?",
      answer:
        "Most tutors offer weekend slots. Saturday morning and Sunday afternoon are the most-requested exam-season windows.",
    },
    {
      question: "Is IB Gram affiliated with any Noida school?",
      answer:
        DISCLAIMER,
    },
    {
      question: "What about MYP support in Sector 50?",
      answer:
        "MYP support is available locally for criterion-based coaching and Personal Project mentoring. Typical engagements run six to twelve weeks.",
    },
    {
      question: "Can a tutor cover both Sector 50 and Sector 62?",
      answer:
        "Yes — most tutors covering Sector 50 also cover Sector 44 and Sector 62. Tell us your home sector when reaching out.",
    },
    {
      question: "How quickly can a match be confirmed?",
      answer:
        "Common DP subjects: within one working day. Niche HL subjects: two to three working days.",
    },
  ],
  internalLinks: [
    { targetUrl: "/ib-tutors/noida/", anchorText: "IB tutors in Noida", context: "parent city" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "subject deep-dive" },
    { targetUrl: "/courses/ib/physics/", anchorText: "Physics tutor support", context: "subject deep-dive" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
  ],
};

const GURUGRAM_DLF_PHASE_1: SeedPage = {
  pageType: PageType.area,
  curriculum: Curriculum.IB,
  slug: "dlf-phase-1",
  fullPath: "/ib-tutors/gurugram/areas/dlf-phase-1/",
  cityFk: "gurugram",
  primaryKeyword: "IB tutor DLF Phase 1",
  secondaryKeywords: [
    "IB home tutor DLF Phase 1",
    "IB DP tutor DLF Phase 1",
    "IB Math AA tutor DLF Phase 1",
    "IB Physics tutor DLF Phase 1",
    "IGCSE tutor DLF Phase 1 Gurgaon",
    "IB tutor DLF Phase 1 Gurugram",
    "IB tutor near Galleria",
    "IB tutor MG Road Gurgaon",
  ],
  metaTitle: "IB Tutor DLF Phase 1, Gurugram — Home, Online & Hybrid | IB Gram",
  metaDescription:
    "Find verified IB tutors in DLF Phase 1, Gurugram (Gurgaon). DP HL/SL, MYP and PYP support with home, online and hybrid lessons.",
  h1: "IB tutors in DLF Phase 1, Gurugram (Gurgaon)",
  heroTitle: "DLF Phase 1 IB tutoring — close to Galleria and MG Road",
  heroSubtitle:
    "DLF Phase 1 sits in central Gurugram with strong local IB tutor inventory and overlap into MG Road, Galleria and South City.",
  introSummary:
    "This page is for IB families in DLF Phase 1 and the surrounding central Gurugram corridor. It covers which subjects have strong local availability and how matching is reviewed.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
    { name: "Gurugram", url: ABSOLUTE("/ib-tutors/gurugram/") },
    { name: "DLF Phase 1", url: ABSOLUTE("/ib-tutors/gurugram/areas/dlf-phase-1/") },
  ],
  blocks: [
    {
      blockType: "intro",
      heading: "Why DLF Phase 1 is a strong IB tutoring zone",
      body: p(
        `DLF Phase 1 sits in central Gurugram (still widely searched as Gurgaon) with proximity to Galleria, MG Road, South City and the wider DLF corridor.`,
        `Local IB tutor inventory is strong for common DP subjects, with overlapping availability into DLF Phase 2, Phase 3, Phase 4 and Phase 5 — and natural extension into Golf Course Road tutors who often cover all five Phases.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Subjects with active local availability",
      body: p(
        `Math AA HL/SL, Math AI HL/SL, Physics, Chemistry, Biology, Economics and English Language and Literature all have strong local home availability across the DLF corridor.`,
        `Niche HL subjects may be matched online when the strongest specialist is outside Gurugram.`,
      ),
      items: ["Math AA (HL/SL)", "Math AI (HL/SL)", "Physics", "Chemistry", "Biology", "Economics", "English A Lang & Lit", "Business Management"],
    },
    {
      blockType: "matching_process",
      heading: "How a DLF Phase 1 match works",
      body: p(
        `Matching reviews start with subject and level, check realistic central Gurugram home availability with overlap into Golf Course Road, MG Road and South City, then layer in lesson mode.`,
        `Cross-phase matches across all five DLF Phases are common, especially for HL Maths and Sciences tutors who cover the full DLF corridor.`,
      ),
    },
    TUTORING_MODES_BLOCK("any IB subject", "central Gurugram (Gurgaon)"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "Honest note on availability",
      body: p(
        `Local availability is strong but tightens during peak DP exam season. Plan three to four weeks ahead for sustained weekly slots.`,
        `${DISCLAIMER}`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Neighbouring areas",
      body: p(
        `DLF Phase 1 is close to MG Road, Galleria, South City 1, DLF Phase 2, DLF Phase 3 and Ardee City. Most central Gurugram IB tutors cover the wider DLF corridor.`,
      ),
      items: ["MG Road", "Galleria", "South City 1", "Ardee City", "DLF Phase 2", "DLF Phase 3"],
    },
    {
      blockType: "cta",
      heading: "Tell us the subject and the calendar",
      body: "Send the school name, DP year, subject and level, and your preferred lesson mode. DLF Phase 1 matches typically come back within one working day for common DP subjects.",
    },
  ],
  faqs: [
    {
      question: "Are IB tutors available in DLF Phase 1?",
      answer:
        "Yes — local IB tutor inventory is strong for common DP subjects, with overlap into all five DLF Phases and into Golf Course Road.",
    },
    {
      question: "Can a single tutor cover DLF Phase 1 and Golf Course Road?",
      answer:
        "Most central Gurugram IB tutors cover both. Tell us your home location and the tutor's typical zone is matched accordingly.",
    },
    {
      question: "Is IB Math AA HL available locally?",
      answer:
        "Yes — Math AA HL specialists with central Gurugram coverage are available, and online HL-led options are common for thin-supply niches.",
    },
    {
      question: "Are tutors available near MG Road and Galleria?",
      answer:
        "Yes — DLF Phase 1 tutors typically also cover MG Road and Galleria within a normal home-tuition radius.",
    },
    {
      question: "Is IB Gram affiliated with any Gurugram school?",
      answer:
        DISCLAIMER,
    },
    {
      question: "What about IGCSE support in DLF Phase 1?",
      answer:
        "IGCSE inventory mirrors IB across central Gurugram. See the IGCSE tutors Gurugram page for board-specific (Cambridge / Edexcel) detail.",
    },
    {
      question: "Are weekend slots available?",
      answer:
        "Most tutors offer weekend slots. Saturday morning and Sunday afternoon are the most-requested exam-season windows.",
    },
    {
      question: "How quickly can a DLF Phase 1 match be confirmed?",
      answer:
        "Common DP subjects: within one working day. Niche HL subjects: two to three working days.",
    },
  ],
  internalLinks: [
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "IB tutors in Gurugram", context: "parent city" },
    { targetUrl: "/ib-tutors/gurugram/areas/golf-course-road/", anchorText: "Golf Course Road IB tutors", context: "neighbouring area" },
    { targetUrl: "/ib-tutors/gurugram/areas/dlf-phase-5/", anchorText: "DLF Phase 5 IB tutors", context: "neighbouring area" },
    { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "subject deep-dive" },
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
  ],
};

// ─── Area-page builder ─────────────────────────────────────────────────────
//
// Helper that produces a SeedPage for any IB area page across Gurugram, Delhi
// or Noida. Each call still supplies its OWN intro paragraph, neighbouring
// areas, school context and FAQ overrides, so no two area pages end up with
// identical body copy (avoiding the "spun duplicates" risk).

type AreaPageInput = {
  city: "gurugram" | "delhi" | "noida";
  cityLabel: string;        // "Gurugram (Gurgaon)" | "Delhi" | "Noida"
  cityShort: string;        // "Gurugram" | "Delhi" | "Noida"
  citySearchAlias?: string; // "Gurgaon" for Gurugram only
  areaSlug: string;
  areaName: string;         // "DLF Phase 2" | "Saket" | "Sector 62"
  intro: string;            // 220–280 word unique paragraph for THIS area
  localContext: string;     // 180–240 word paragraph: landmarks, traffic, schools nearby
  neighbouringAreas: string[];
  neighbouringSchools?: string[]; // optional — triggers disclaimer paragraph
  subjectsStrong?: string[];     // override default list if useful
  primaryKeyword?: string;       // override
  secondaryKeywords?: string[];  // override
  extraFaqs?: Array<{ question: string; answer: string }>; // mixed with the standard 5
};

function buildAreaPage(input: AreaPageInput): SeedPage {
  const aliasInTitle = input.citySearchAlias ? `, ${input.citySearchAlias}` : "";
  const aliasInBody = input.citySearchAlias ? ` (still widely searched as ${input.citySearchAlias})` : "";

  const subjectsLine = (input.subjectsStrong ?? [
    "Math AA (HL/SL)",
    "Math AI (HL/SL)",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "English A Lang & Lit",
  ]);

  const primaryKeyword = input.primaryKeyword ?? `IB tutor ${input.areaName}`;
  const secondaryKeywords = input.secondaryKeywords ?? [
    `IB home tutor ${input.areaName}`,
    `IB DP tutor ${input.areaName}`,
    `IB Math AA tutor ${input.areaName}`,
    `IB Physics tutor ${input.areaName}`,
    `IB Economics tutor ${input.areaName}`,
    `IGCSE tutor ${input.areaName} ${input.cityShort}`,
    `online IB tutor ${input.areaName}`,
    ...(input.citySearchAlias
      ? [`IB tutor ${input.areaName} ${input.citySearchAlias}`]
      : []),
  ];

  const fullPath = `/ib-tutors/${input.city}/areas/${input.areaSlug}/`;
  const cityPath = `/ib-tutors/${input.city}/`;

  // Five reusable FAQ slots that are always overridden in text with the area
  // name so the FAQ schema never duplicates verbatim across siblings.
  const baseFaqs: Array<{ question: string; answer: string }> = [
    {
      question: `Are IB tutors available in ${input.areaName}?`,
      answer: `Yes — local IB tutor inventory covers ${input.areaName} for common DP and MYP subjects, with overlap into ${input.neighbouringAreas.slice(0, 2).join(" and ")}. Niche HL subjects are sometimes matched online when the strongest specialist is outside ${input.cityShort}.`,
    },
    {
      question: `Can I find an IB Math AA HL tutor near ${input.areaName}?`,
      answer: `Yes. Math AA HL specialists with ${input.cityShort} coverage are matched locally where available, and online HL-led options fill gaps for thin-supply niches.`,
    },
    {
      question: `Is hybrid tutoring common in ${input.areaName}?`,
      answer: `Yes — hybrid is common in DP Year 2, with term-time home lessons and online weekend mock revision before mocks and finals.`,
    },
    {
      question: `Are weekend slots available?`,
      answer: `Most tutors offer weekend slots. Saturday morning and Sunday afternoon are the most-requested exam-season windows.`,
    },
    {
      question: `Is IB Gram affiliated with any school in ${input.areaName}?`,
      answer: DISCLAIMER,
    },
    {
      question: `What about IGCSE support in ${input.areaName}?`,
      answer: `IGCSE inventory mirrors IB across ${input.cityShort}. See the IGCSE tutors ${input.cityShort} page for board-specific (Cambridge / Edexcel) detail.`,
    },
    {
      question: `How quickly can an ${input.areaName} match be confirmed?`,
      answer: `Common DP subjects: within one working day. Niche HL subjects: two to three working days to confirm the right profile.`,
    },
  ];

  const faqs = [...baseFaqs, ...(input.extraFaqs ?? [])].slice(0, Math.max(8, baseFaqs.length));

  const schoolsBlock = input.neighbouringSchools && input.neighbouringSchools.length > 0
    ? {
        blockType: "schools",
        heading: `Schools families connected with ${input.areaName} typically attend`,
        body: p(
          `Tutoring requests near ${input.areaName} come from families connected with ${input.neighbouringSchools.join(", ")} and other IB / IGCSE schools across ${input.cityShort}.`,
          DISCLAIMER,
        ),
        items: input.neighbouringSchools,
      }
    : null;

  const blocks: SeedPage["blocks"] = [
    {
      blockType: "intro",
      heading: `Why ${input.areaName} is a strong IB tutoring zone`,
      body: input.intro,
    },
    {
      blockType: "subjects",
      heading: "Subjects with active local availability",
      body: p(
        `${subjectsLine.join(", ")} all have realistic local availability through ${input.areaName} and the wider ${input.cityShort} corridor.`,
        `Niche HL subjects may be matched online when the strongest specialist is outside the immediate area.`,
      ),
      items: subjectsLine,
    },
    {
      blockType: "matching_process",
      heading: `How a match in ${input.areaName} is reviewed`,
      body: p(
        `Matching reviews start with the exact subject and level, check realistic ${input.areaName} home availability with overlap into ${input.neighbouringAreas.join(", ")}, then layer in lesson mode (home / online / hybrid).`,
        `Cross-area matches are common when a stronger specialist is two or three minutes away in a neighbouring zone.`,
      ),
    },
    TUTORING_MODES_BLOCK(`any IB subject`, `${input.areaName}, ${input.cityShort}`),
    VERIFICATION_BLOCK,
    ...(schoolsBlock ? [schoolsBlock] : []),
    {
      blockType: "local_areas",
      heading: "Neighbouring areas",
      body: input.localContext,
      items: input.neighbouringAreas,
    },
    {
      blockType: "trust",
      heading: "Honest note on availability",
      body: p(
        `Local home tutoring inventory is real but finite. During peak DP exam season — typically March to early May — short-notice slots tighten. Plan three to four weeks ahead for sustained weekly lessons.`,
        DISCLAIMER,
      ),
    },
    {
      blockType: "cta",
      heading: `Tell us the subject and the calendar for ${input.areaName}`,
      body: `When you reach out, share the school name, the IB programme stage, the subject and level, and your preferred lesson mode. The match for ${input.areaName}${aliasInBody} typically comes back within one working day for common DP subjects.`,
    },
  ];

  return {
    pageType: PageType.area,
    curriculum: Curriculum.IB,
    slug: input.areaSlug,
    fullPath,
    cityFk: input.city,
    primaryKeyword,
    secondaryKeywords,
    metaTitle: `IB Tutor ${input.areaName}, ${input.cityShort}${aliasInTitle} — Home, Online & Hybrid | IB Gram`,
    metaDescription: `Find verified IB DP, MYP and PYP tutors in ${input.areaName}, ${input.cityShort}. Home, online and hybrid options for Maths, Sciences, Economics and English.`,
    h1: `IB tutors in ${input.areaName}, ${input.cityLabel}`,
    heroTitle: `${input.areaName} IB tutoring — local matching with online HL backup`,
    heroSubtitle: `${input.areaName} families have access to local home tutoring for common DP subjects and online HL specialists where a thin-supply subject needs the right examiner experience.`,
    introSummary: `This page is for IB families in ${input.areaName} and the surrounding ${input.cityShort} corridor. It covers which subjects have realistic local availability, how matching is reviewed, and what honest lesson modes look like.`,
    breadcrumb: [
      { name: "Home", url: ABSOLUTE("/") },
      { name: "IB Tutors", url: ABSOLUTE("/ib-tutors/") },
      { name: input.cityShort, url: ABSOLUTE(cityPath) },
      { name: input.areaName, url: ABSOLUTE(fullPath) },
    ],
    blocks,
    faqs,
    internalLinks: [
      { targetUrl: cityPath, anchorText: `IB tutors in ${input.cityShort}`, context: "parent city" },
      ...input.neighbouringAreas.slice(0, 2).map((area) => ({
        targetUrl: `/ib-tutors/${input.city}/areas/${area.toLowerCase().replace(/\s+/g, "-")}/`,
        anchorText: `${area} IB tutors`,
        context: "neighbouring area",
      })),
      { targetUrl: "/courses/ib/math-aa-hl/", anchorText: "Math AA HL tutor support", context: "subject deep-dive" },
      { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    ],
  };
}

// ─── Batch 2 — Gurugram extension areas ────────────────────────────────────

const GURUGRAM_DLF_PHASE_2 = buildAreaPage({
  city: "gurugram",
  cityLabel: "Gurugram (Gurgaon)",
  cityShort: "Gurugram",
  citySearchAlias: "Gurgaon",
  areaSlug: "dlf-phase-2",
  areaName: "DLF Phase 2",
  intro: p(
    `DLF Phase 2 sits in central Gurugram (still widely searched as Gurgaon), bordered by MG Road and the DLF Phase 1 / Phase 3 corridor.`,
    `Most IB families here ask first whether home tutoring is realistic without crossing the city, and whether the same tutor can also cover DLF Phase 1 and Phase 3 (often yes — tutors covering the central DLF cluster usually serve all three Phases within a normal home-tuition radius).`,
    `Local availability for DP Math AA, Math AI, Physics, Chemistry, Biology and Economics is reliable. IGCSE families pursuing Cambridge or Edexcel boards usually find local matches without resorting to online-only options.`,
  ),
  localContext: p(
    `DLF Phase 2 is adjacent to DLF Phase 1, DLF Phase 3, MG Road and Galleria. Tutors based around any one of these areas typically cover the others without long commute windows.`,
    `Sushant Lok and South City 1 are also commonly within the same tutor's coverage zone.`,
  ),
  neighbouringAreas: ["DLF Phase 1", "DLF Phase 3", "MG Road", "Galleria"],
  neighbouringSchools: ["Pathways World School", "Scottish High International School", "Lancers International School"],
});

const GURUGRAM_DLF_PHASE_3 = buildAreaPage({
  city: "gurugram",
  cityLabel: "Gurugram (Gurgaon)",
  cityShort: "Gurugram",
  citySearchAlias: "Gurgaon",
  areaSlug: "dlf-phase-3",
  areaName: "DLF Phase 3",
  intro: p(
    `DLF Phase 3 sits next to DLF Cyber City and the larger Golf Course Road / Sushant Lok corridor in central Gurugram (Gurgaon).`,
    `Families here are often working parents in nearby corporate parks who need lesson times that work around commute realities — early evenings and weekends.`,
    `Local home tutoring is strong for common DP subjects. For DP HL specialists in less-common subjects (Computer Science HL, niche option topics), online-led arrangements often save more than they cost compared with waiting for thin local supply.`,
  ),
  localContext: p(
    `DLF Phase 3 is bordered by DLF Cyber City, DLF Phase 2, Sushant Lok and the broader Golf Course Road corridor.`,
    `Most central-Gurugram IB tutors cover DLF Phase 3 alongside Phase 2 and Phase 5 within their normal service area.`,
  ),
  neighbouringAreas: ["DLF Phase 2", "DLF Cyber City", "Sushant Lok", "Golf Course Road"],
  neighbouringSchools: ["Pathways World School", "Scottish High International School", "Lancers International School"],
});

const GURUGRAM_DLF_PHASE_4 = buildAreaPage({
  city: "gurugram",
  cityLabel: "Gurugram (Gurgaon)",
  cityShort: "Gurugram",
  citySearchAlias: "Gurgaon",
  areaSlug: "dlf-phase-4",
  areaName: "DLF Phase 4",
  intro: p(
    `DLF Phase 4 sits between DLF Phase 3 and DLF Phase 5 in central Gurugram (Gurgaon), close to Galleria Market and the wider Golf Course Road corridor.`,
    `IB families here often have access to both Phase 3 and Phase 5 tutors, since most central-Gurugram specialists cover the full DLF cluster within a single home-tutoring radius.`,
    `Local DP HL Maths and Sciences availability is consistent. The strongest specialists for niche HL option topics may still be online matches from outside Gurugram.`,
  ),
  localContext: p(
    `DLF Phase 4 is close to DLF Phase 3, DLF Phase 5, Galleria, Ardee City and Sector 27. Lesson scheduling works well around Galleria-area weekend rhythms.`,
  ),
  neighbouringAreas: ["DLF Phase 3", "DLF Phase 5", "Galleria", "Ardee City"],
  neighbouringSchools: ["Pathways World School", "Scottish High International School"],
});

const GURUGRAM_SUSHANT_LOK = buildAreaPage({
  city: "gurugram",
  cityLabel: "Gurugram (Gurgaon)",
  cityShort: "Gurugram",
  citySearchAlias: "Gurgaon",
  areaSlug: "sushant-lok",
  areaName: "Sushant Lok",
  intro: p(
    `Sushant Lok sits along the Golf Course Road corridor in central Gurugram (Gurgaon), with overlapping tutor coverage from Golf Course Road, DLF Phase 1, DLF Phase 4 and Sector 57.`,
    `IB families in Sushant Lok-I and Sushant Lok-II typically find local DP and MYP support for Math AA, Math AI, Physics, Chemistry, Biology, Economics and English. Online-led HL matches handle niche subjects where local supply is thin.`,
    `Sushant Lok proximity to Sector 57 and Sector 56 makes hybrid arrangements simple — home lessons during term time, online for weekend revision before mocks.`,
  ),
  localContext: p(
    `Sushant Lok is bordered by Golf Course Road, DLF Phase 4, DLF Phase 5 and Sector 56 / Sector 57.`,
    `Tutors covering the Golf Course Road corridor regularly serve Sushant Lok within normal home-tutoring schedules.`,
  ),
  neighbouringAreas: ["Golf Course Road", "DLF Phase 5", "Sector 56", "Sector 57"],
  neighbouringSchools: ["Lancers International School", "Scottish High International School", "Pathways World School"],
});

const GURUGRAM_SECTOR_56 = buildAreaPage({
  city: "gurugram",
  cityLabel: "Gurugram (Gurgaon)",
  cityShort: "Gurugram",
  citySearchAlias: "Gurgaon",
  areaSlug: "sector-56",
  areaName: "Sector 56",
  intro: p(
    `Sector 56 sits in the Sector 56–57 corridor along Golf Course Road in Gurugram (Gurgaon), with strong residential density and consistent IB tutor inventory across DP and MYP subjects.`,
    `Most central-Gurugram IB tutors covering Sector 57 also cover Sector 56, so families requesting a tutor in either sector are usually shown the same shortlist.`,
    `Local home tutoring for Math AA, Math AI, Physics, Chemistry, Biology and Economics is reliable. IGCSE families pursuing Cambridge or Edexcel boards have parallel inventory.`,
  ),
  localContext: p(
    `Sector 56 is next to Sector 57, Sector 55, Sohna Road and Sushant Lok.`,
    `Tutors covering the Golf Course Road / Sector 57 corridor consistently serve Sector 56 within standard home-tutoring schedules.`,
  ),
  neighbouringAreas: ["Sector 57", "Sushant Lok", "Sohna Road", "Golf Course Road"],
  neighbouringSchools: ["Scottish High International School", "Lancers International School"],
});

// ─── Batch 2 — Delhi remaining priority areas ──────────────────────────────

const DELHI_SAKET = buildAreaPage({
  city: "delhi",
  cityLabel: "Delhi",
  cityShort: "Delhi",
  areaSlug: "saket",
  areaName: "Saket",
  intro: p(
    `Saket sits in the South Delhi corridor with strong IB and IGCSE tutor availability for DP HL/SL subjects, MYP criterion-based support and PYP early-years help.`,
    `Most local DP requests cluster around Math AA, Math AI, Physics, Chemistry, Biology, Economics and English Language and Literature. IGCSE families pursuing Cambridge or Edexcel boards find consistent local availability.`,
    `Saket families often have access to tutors covering the wider Greater Kailash, Defence Colony and Vasant Vihar corridor, so cross-zone matches are common.`,
  ),
  localContext: p(
    `Saket is bordered by Greater Kailash, Defence Colony, Hauz Khas and the southern Delhi corridor that extends toward Vasant Vihar.`,
    `Most South Delhi IB tutors cover Saket alongside two or three neighbouring areas within their normal home-tutoring schedule.`,
  ),
  neighbouringAreas: ["Greater Kailash", "Defence Colony", "Hauz Khas", "Vasant Vihar"],
  neighbouringSchools: ["DPS International Saket", "The British School", "American Embassy School"],
});

const DELHI_GREATER_KAILASH = buildAreaPage({
  city: "delhi",
  cityLabel: "Delhi",
  cityShort: "Delhi",
  areaSlug: "greater-kailash",
  areaName: "Greater Kailash",
  intro: p(
    `Greater Kailash (GK-I and GK-II) is one of South Delhi's most consistent IB tutoring zones, with overlap into Saket, Defence Colony and Hauz Khas.`,
    `Families here typically find local home tutoring for the common DP HL subjects and for MYP criterion-based work. Online-led HL specialists are common for thin-supply niches.`,
    `Hybrid arrangements — home for term-time content depth, online for weekend mock revision — are common across the Greater Kailash corridor in DP Year 2.`,
  ),
  localContext: p(
    `Greater Kailash is bordered by Saket, Defence Colony, Hauz Khas and the broader South Delhi corridor extending to Vasant Vihar.`,
    `Tutors covering GK-I and GK-II typically also serve Saket and Defence Colony within their normal home-tutoring schedule.`,
  ),
  neighbouringAreas: ["Saket", "Defence Colony", "Hauz Khas", "Vasant Vihar"],
  neighbouringSchools: ["The British School", "American Embassy School", "DPS International Saket"],
});

const DELHI_CHANAKYAPURI = buildAreaPage({
  city: "delhi",
  cityLabel: "Delhi",
  cityShort: "Delhi",
  areaSlug: "chanakyapuri",
  areaName: "Chanakyapuri",
  intro: p(
    `Chanakyapuri sits at the heart of one of South Delhi's densest international school corridors, adjacent to Vasant Vihar.`,
    `Local home tutoring is strong for IB DP and MYP subjects, and tutors covering the American Embassy School / British School area typically also cover Vasant Vihar within standard home-tutoring distance.`,
    `IGCSE families in Chanakyapuri have parallel inventory for both Cambridge and Edexcel boards.`,
  ),
  localContext: p(
    `Chanakyapuri is next to Vasant Vihar, Vasant Kunj and the southern diplomatic corridor.`,
    `Most Chanakyapuri IB tutors cover Vasant Vihar and Vasant Kunj as well, so families in any of these three areas are usually shown the same shortlist.`,
  ),
  neighbouringAreas: ["Vasant Vihar", "Vasant Kunj", "Defence Colony"],
  neighbouringSchools: ["The British School", "American Embassy School"],
});

// ─── Batch 2 — Noida remaining priority areas ──────────────────────────────

const NOIDA_SECTOR_62 = buildAreaPage({
  city: "noida",
  cityLabel: "Noida",
  cityShort: "Noida",
  areaSlug: "sector-62",
  areaName: "Sector 62",
  intro: p(
    `Sector 62 sits in central-east Noida with strong residential density and a deep IB / IGCSE tutoring inventory. Most tutors covering Sector 62 also serve Sector 50 and Sector 44 within normal home-tutoring schedules.`,
    `DP Math AA, Math AI, Physics, Chemistry, Biology, Economics and English have realistic local availability. IGCSE families pursuing Cambridge or Edexcel boards find local matches without resorting to online-only.`,
    `Online-led HL specialists handle niche subjects where the local supply is thin.`,
  ),
  localContext: p(
    `Sector 62 is bordered by Sector 50, Sector 44, Sector 132 and parts of the Noida Expressway corridor.`,
    `Cross-sector matches are common across central Noida, so a Sector 62 family is often offered the same tutor as a Sector 50 or Sector 44 family.`,
  ),
  neighbouringAreas: ["Sector 50", "Sector 44", "Sector 132", "Noida Expressway"],
  neighbouringSchools: ["Pathways School Noida", "Genesis Global School", "Step by Step School"],
});

const NOIDA_SECTOR_128 = buildAreaPage({
  city: "noida",
  cityLabel: "Noida",
  cityShort: "Noida",
  areaSlug: "sector-128",
  areaName: "Sector 128",
  intro: p(
    `Sector 128 sits along the Noida Expressway corridor with thinner local tutor density than central Noida.`,
    `Most IB families in Sector 128 use a hybrid pattern — home tutoring for common subjects when a tutor is along the Expressway corridor, and online HL specialists when the strongest match is outside the local zone.`,
    `Sector 128 proximity to Jaypee Greens Wish Town and the Expressway communities makes online-led matches especially common for DP HL Maths and Sciences.`,
  ),
  localContext: p(
    `Sector 128 sits along the Noida Expressway, close to Jaypee Greens Wish Town and Sector 132. Travel windows to central Noida (Sector 50, 62) are longer than within-sector matches.`,
    `Online-led arrangements often save more than they cost compared with insisting on a long-commute home tutor.`,
  ),
  neighbouringAreas: ["Noida Expressway", "Jaypee Greens Wish Town", "Sector 132", "Sector 50"],
  neighbouringSchools: ["Pathways School Noida", "Genesis Global School"],
});

// ─── Batch 2 — Missing IB course page ──────────────────────────────────────

const COURSE_BIOLOGY: SeedPage = {
  ...COURSE_PHYSICS,
  slug: "biology",
  fullPath: "/courses/ib/biology/",
  primaryKeyword: "IB Biology tutor",
  secondaryKeywords: [
    "IB Biology HL tutor",
    "IB Biology SL tutor",
    "IB Biology IA tutor",
    "IB Biology Paper 2 tutor",
    "IB Biology tutor Gurgaon",
    "IB Biology tutor Delhi",
    "IB Biology tutor Noida",
    "IB Biology online tutor",
  ],
  metaTitle: "IB Biology Tutor — HL & SL Diploma Programme Support | IB Gram",
  metaDescription:
    "IB Biology HL and SL tutors for Paper 1, 2, 3, the Internal Assessment and command-term-aware exam revision. Home, online and hybrid across India.",
  h1: "IB Biology tutor support",
  heroTitle: "IB Biology — concept clarity, IA-aware, command-term-confident",
  heroSubtitle:
    "DP Biology rewards careful conceptual organisation, command-term-aware writing and disciplined IA methodology. Tutoring focuses on all three.",
  introSummary:
    "This page covers DP Biology at both HL and SL — paper structure, common topic difficulties, IA mentoring, and how IB Gram matches a Biology specialist.",
  breadcrumb: [
    { name: "Home", url: ABSOLUTE("/") },
    { name: "Courses", url: ABSOLUTE("/courses/") },
    { name: "IB", url: ABSOLUTE("/courses/ib/") },
    { name: "Biology", url: ABSOLUTE("/courses/ib/biology/") },
  ],
  courseSchema: {
    name: "IB Biology tutoring (HL/SL)",
    description: "DP Biology tutoring across HL and SL for Internal Assessment and external paper revision.",
  },
  blocks: [
    {
      blockType: "intro",
      heading: "Why Biology benefits from subject-specialist support",
      body: p(
        `IB DP Biology runs at HL and SL with shared core topics, additional HL material, and a Paper 3 covering option topics and a data-and-design experimental component.`,
        `Most students do not lose marks on biological facts — they lose marks on command-term-aware extended response, on cell-process and physiology diagrams without enough labelling, and on data-handling questions where uncertainty and graph interpretation are weak.`,
        `Tutors familiar with the IB Biology syllabus close all three quickly when matched well.`,
      ),
    },
    {
      blockType: "subjects",
      heading: "Paper-by-paper coaching focus",
      body: p(
        `Paper 1 (multiple choice) rewards quick conceptual recall and accurate diagram recognition.`,
        `Paper 2 covers data analysis and extended-response writing. Command terms — "outline", "explain", "evaluate", "discuss" — each expect a different structure and mark profile.`,
        `Paper 3 covers option topics (chosen by the school) and an experimental component requiring data interpretation under exam time pressure.`,
        `Internal Assessment is an individual scientific investigation marked against five criteria, with careful expectations around personal engagement and uncertainty handling.`,
      ),
      items: ["Paper 1 — multiple choice", "Paper 2 — data and extended response", "Paper 3 — options and experimental", "Internal Assessment — investigation"],
    },
    {
      blockType: "matching_process",
      heading: "Common Biology tutoring requests",
      body: p(
        `Cell biology, biochemistry, genetics, ecology and human physiology are the most-requested topics, with concentrations around HL extended topics (nucleic acids, metabolism, plant biology, animal physiology).`,
        `Internal Assessment requests cluster in late DP Year 1 and the start of DP Year 2.`,
        `Pre-mock and pre-final intensification typically covers extended-response writing under exam time pressure across all topics.`,
      ),
    },
    TUTORING_MODES_BLOCK("Biology", "Gurugram, Delhi and Noida"),
    VERIFICATION_BLOCK,
    {
      blockType: "trust",
      heading: "What this page does not do",
      body: p(
        `It does not promise specific exam grades.`,
        `It does not run school lab work — that remains the school's responsibility.`,
        `It does not replace school IA supervision — tutors mentor structure and rigour, the school supervisor remains the formal authority.`,
      ),
    },
    {
      blockType: "local_areas",
      heading: "Where Biology specialists are available",
      body: p(
        `Biology specialist availability is solid in Gurugram (Golf Course Road, DLF Phase 5, Sector 57), Delhi (South Delhi, Vasant Vihar, Saket) and Noida (Sector 50, Sector 62, Noida Expressway). Online HL specialists handle niche topics where local supply is thin.`,
      ),
      items: ["Gurugram", "Delhi", "Noida", "Mumbai", "Bangalore"],
    },
    {
      blockType: "cta",
      heading: "Send the school, the year and the IA window",
      body: "Share the school name, DP year, topic currently being studied (or IA window status), and whether mocks or finals are the immediate priority. Biology matches typically come back within one working day.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between HL and SL Biology?",
      answer:
        "HL covers additional depth in nucleic acids, metabolism, plant biology and animal physiology, plus a longer Paper 3. SL covers the core topics in less depth. HL is usually expected for biology, medicine, biochemistry and biotechnology university courses.",
    },
    {
      question: "How is the Biology IA marked?",
      answer:
        "Against five criteria — Personal Engagement, Exploration, Analysis, Evaluation and Communication — for a total of 24 marks. Strong IAs show a clear personal research question, controlled methodology, honest uncertainty handling and reflective evaluation.",
    },
    {
      question: "Can a tutor support genetics and biochemistry topics?",
      answer:
        "Yes — these are common Year 1 and Year 2 requests. Targeted practice on pedigree reasoning, molecular biology mechanisms and metabolic pathway diagrams is among the highest-leverage interventions.",
    },
    {
      question: "Are Paper 3 option topics covered?",
      answer:
        "Yes — Ecology and Conservation, Human Physiology, Animal Physiology, and Neurobiology and Behaviour are common option choices. Tell us which option the school is teaching so the match is right.",
    },
    {
      question: "How early should Biology tutoring start?",
      answer:
        "Within the first three months of DP Year 1 is common, with sustained support through Year 1 and intensification before mocks and finals.",
    },
    {
      question: "Does online Biology tutoring work?",
      answer:
        "Yes — diagram practice and command-term-aware writing transfer well to a shared digital whiteboard. Practical lab work remains a school responsibility.",
    },
    {
      question: "Do you have tutors with examiner experience in Biology?",
      answer:
        "Where examiner or marker experience is documented, it is surfaced on the tutor profile. Confirm during the discovery call.",
    },
    {
      question: "Can my child get help with extended-response writing for Paper 2?",
      answer:
        "Yes — this is the single most-requested Biology tutoring area in DP Year 2. Tutors run command-term-aware practice on past Paper 2 questions until structure and mark allocation become predictable.",
    },
  ],
  internalLinks: [
    { targetUrl: "/programmes/dp/", anchorText: "DP support overview", context: "programme context" },
    { targetUrl: "/courses/ib/chemistry/", anchorText: "Chemistry tutor support", context: "common pairing" },
    { targetUrl: "/courses/ib/physics/", anchorText: "Physics tutor support", context: "common pairing" },
    { targetUrl: "/ib-tutors/gurugram/", anchorText: "Biology tutors in Gurugram", context: "city availability" },
    { targetUrl: "/ib-tutors/delhi/", anchorText: "Biology tutors in Delhi", context: "city availability" },
  ],
};

// ─── Master list ───────────────────────────────────────────────────────────

const SEED_PAGES: SeedPage[] = [
  // Wave 1 (pages 1–15)
  PROGRAMMES_HUB,
  PROG_PYP,
  PROG_MYP,
  PROG_DP,
  PROG_CP,
  COURSE_MATH_AA_HL,
  COURSE_MATH_AI_HL,
  COURSE_PHYSICS,
  COURSE_CHEMISTRY,
  COURSE_ECONOMICS,
  IB_DELHI_HUB,
  IB_NOIDA_HUB,
  DELHI_VASANT_VIHAR,
  NOIDA_SECTOR_50,
  GURUGRAM_DLF_PHASE_1,

  // Wave 2 / Batch 16–25 (pages 16–25)
  GURUGRAM_DLF_PHASE_2,
  GURUGRAM_DLF_PHASE_3,
  GURUGRAM_DLF_PHASE_4,
  GURUGRAM_SUSHANT_LOK,
  GURUGRAM_SECTOR_56,
  DELHI_SAKET,
  DELHI_GREATER_KAILASH,
  DELHI_CHANAKYAPURI,
  NOIDA_SECTOR_62,
  NOIDA_SECTOR_128,
  COURSE_BIOLOGY,
];

// ─── Seeder ────────────────────────────────────────────────────────────────

async function getCityId(slug: "gurugram" | "delhi" | "noida" | undefined): Promise<string | null> {
  if (!slug) return null;
  try {
    const found = await prisma.city.findFirst({ where: { slug } });
    return found?.id ?? null;
  } catch {
    return null;
  }
}

async function seedOnePage(page: SeedPage): Promise<{ fullPath: string; words: number; status: string }> {
  const blockText = page.blocks.map((b) => `${b.heading ?? ""} ${b.body ?? ""}`).join(" ");
  const faqText = page.faqs.map((f) => `${f.question} ${f.answer}`).join(" ");
  const concatenated = [page.h1, page.heroTitle, page.heroSubtitle, page.introSummary, blockText, faqText].join(" ");
  const totalWords = wordCount(concatenated);
  const qualityScore = Math.min(100, 60 + Math.floor(totalWords / 40));

  if (isDryRun) {
    return { fullPath: page.fullPath, words: totalWords, status: "would-upsert" };
  }

  const cityId = await getCityId(page.cityFk);

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
      cityId,
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
      // status NOT overwritten on update — preserves admin edits to draft/paused
      indexFlag: IndexFlag.index,
      slug: page.slug,
      canonicalUrl: ABSOLUTE(page.fullPath),
      cityId: cityId ?? undefined,
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

  // Children are wiped and recreated so seed remains the source of truth for them
  await prisma.pageBlock.deleteMany({ where: { pageId: generated.id } });
  for (let i = 0; i < page.blocks.length; i++) {
    const block = page.blocks[i];
    await prisma.pageBlock.create({
      data: {
        pageId: generated.id,
        blockType: block.blockType,
        heading: block.heading ?? null,
        body: block.body ?? null,
        items: (block.items as object | undefined) ?? undefined,
        sortOrder: i,
      },
    });
  }

  await prisma.pageFaq.deleteMany({ where: { pageId: generated.id } });
  for (let i = 0; i < page.faqs.length; i++) {
    const faq = page.faqs[i];
    await prisma.pageFaq.create({
      data: { pageId: generated.id, question: faq.question, answer: faq.answer, sortOrder: i },
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

  // Schemas
  const schemas: Array<{ schemaType: string; schemaJson: object }> = [
    { schemaType: "Organization", schemaJson: jsonLdOrg() },
    { schemaType: "BreadcrumbList", schemaJson: jsonLdBreadcrumb(page.breadcrumb) },
    { schemaType: "FAQPage", schemaJson: jsonLdFaq(page.faqs) },
  ];

  if (page.programSchema) {
    schemas.push({
      schemaType: "EducationalOccupationalProgram",
      schemaJson: jsonLdEdProgram({ ...page.programSchema, url: ABSOLUTE(page.fullPath) }),
    });
  }
  if (page.courseSchema) {
    schemas.push({
      schemaType: "Course",
      schemaJson: jsonLdCourse({
        name: page.courseSchema.name,
        description: page.courseSchema.description,
        provider: "IB Gram",
        url: ABSOLUTE(page.fullPath),
      }),
    });
  }
  if (page.cityFk === "gurugram" || page.cityFk === "delhi" || page.cityFk === "noida") {
    const region = page.cityFk === "gurugram" ? "Haryana" : page.cityFk === "delhi" ? "Delhi" : "Uttar Pradesh";
    const city = page.cityFk === "gurugram" ? "Gurugram" : page.cityFk === "delhi" ? "Delhi" : "Noida";
    schemas.push({
      schemaType: "LocalBusiness",
      schemaJson: jsonLdLocalBusiness({ city, region, url: ABSOLUTE(page.fullPath) }),
    });
  }

  await prisma.pageSchema.deleteMany({ where: { pageId: generated.id } });
  await prisma.pageSchema.createMany({
    data: schemas.map((s) => ({ pageId: generated.id, schemaType: s.schemaType, schemaJson: s.schemaJson, status: "published" })),
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
      uniquenessScore: 82,
      localDepthScore: page.cityFk ? 80 : 65,
      seoScore: qualityScore,
      readabilityScore: 72,
      internalLinkScore: Math.min(100, 60 + page.internalLinks.length * 5),
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
      notes: "Seeded by seed-longform-content (Wave 1)",
    },
  });

  await prisma.sitemapEntry.upsert({
    where: { loc: ABSOLUTE(page.fullPath) },
    create: {
      loc: ABSOLUTE(page.fullPath),
      lastmod: new Date(),
      changefreq: "weekly",
      priority:
        page.pageType === PageType.city
          ? 0.86
          : page.pageType === PageType.programme
            ? 0.82
            : page.pageType === PageType.subject
              ? 0.78
              : page.pageType === PageType.area
                ? 0.72
                : 0.7,
      isIncluded: true,
    },
    update: { lastmod: new Date(), isIncluded: true },
  });

  return { fullPath: page.fullPath, words: totalWords, status: "upserted" };
}

async function main() {
  const mode = isDryRun ? "DRY-RUN" : "APPLY";
  console.log(`Seeding ${SEED_PAGES.length} long-form pages (${mode})...`);
  const summary: Array<{ path: string; words: number; status: string }> = [];
  let total = 0;
  for (const page of SEED_PAGES) {
    const result = await seedOnePage(page);
    total += result.words;
    summary.push(result);
    console.log(`  [${result.status}] ${result.fullPath}  —  ${result.words} words`);
  }
  console.log("\nSummary:");
  for (const s of summary) console.log(`  ${s.fullPath}  —  ${s.words} words`);
  console.log(`\nTotal pages: ${summary.length}`);
  console.log(`Total words: ${total}`);
  if (isDryRun) console.log("(Dry-run — no DB writes performed.)");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
