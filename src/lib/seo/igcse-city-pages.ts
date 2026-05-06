import type { CitySeoPage, InternalLink } from "./city-page-types";
import { getLiveCitySeoPages } from "./city-pages";
import { absoluteUrl, normalizeSlug } from "./slug-utils";

export type IgcseCitySubject = {
  name: string;
  keyword: string;
  description: string;
  cityNote: string;
};

export type IgcseCityFaq = {
  question: string;
  answer: string;
};

export type IgcseProofItem = {
  title: string;
  detail: string;
  sourceLabel: string;
};

export type IgcseCitySeoPage = {
  pageId: string;
  cityName: string;
  citySlug: string;
  stateName: string;
  countryName: string;
  status: "live" | "draft";
  indexFlag: "index" | "noindex";
  canonicalPath: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  breadcrumbTitle: string;
  h1: string;
  heroTitle: string;
  heroSubtitle: string;
  introSummary: string;
  latitude: number;
  longitude: number;
  trustPoints: string[];
  cityAcademicIntro: string[];
  boardSectionTitle: string;
  boardSupport: string[];
  subjectSectionTitle: string;
  subjects: IgcseCitySubject[];
  matchingProcessTitle: string;
  matchingProcessSteps: string[];
  areaSectionTitle: string;
  areaNotes: Array<{ name: string; description: string; landmarks: string[] }>;
  nearbyAreas: string[];
  nearbyCities: Array<{ cityName: string; citySlug: string; description: string }>;
  schoolSectionTitle: string;
  schoolEcosystem: Array<{ name: string; area: string; description: string; typicalNeeds: string[] }>;
  schoolSpecificNeeds: string[];
  schoolDisclaimer: string;
  tutoringModeTitle: string;
  tutoringModes: string[];
  verificationTitle: string;
  tutorVerificationProcess: string[];
  localProofTitle: string;
  localProof: IgcseProofItem[];
  faqs: IgcseCityFaq[];
  internalLinks: InternalLink[];
  finalCta: string;
  lastUpdated: string;
  priorityScore: number;
};

const SCHOOL_DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with these schools, Cambridge or Pearson Edexcel unless specifically stated.";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");

export function buildIgcseCityPath(citySlug: string): string {
  return `/igcse-pages/${normalizeSlug(citySlug)}/`;
}

export function getAllIgcseCityPages(): IgcseCitySeoPage[] {
  return getLiveCitySeoPages().map(buildIgcseCityPage);
}

export function getLiveIgcseCityPages(): IgcseCitySeoPage[] {
  return getAllIgcseCityPages().filter((page) => page.status === "live");
}

export function getIgcseCityPageBySlug(citySlug: string): IgcseCitySeoPage | undefined {
  const normalizedSlug = normalizeSlug(citySlug);
  return getAllIgcseCityPages().find((page) => page.citySlug === normalizedSlug);
}

export function getVisibleIgcseCityContentText(page: IgcseCitySeoPage): string {
  return [
    page.h1,
    page.heroSubtitle,
    page.introSummary,
    ...page.trustPoints,
    ...page.cityAcademicIntro,
    ...page.boardSupport,
    ...page.subjects.flatMap((subject) => [subject.name, subject.keyword, subject.description, subject.cityNote]),
    ...page.matchingProcessSteps,
    ...page.areaNotes.flatMap((area) => [area.name, area.description, ...area.landmarks]),
    ...page.nearbyAreas,
    ...page.schoolEcosystem.flatMap((school) => [school.name, school.area, school.description, ...school.typicalNeeds]),
    ...page.schoolSpecificNeeds,
    page.schoolDisclaimer,
    ...page.tutoringModes,
    ...page.tutorVerificationProcess,
    ...page.localProof.flatMap((proof) => [proof.title, proof.detail, proof.sourceLabel]),
    ...page.internalLinks.map((link) => link.anchorText),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer]),
    page.finalCta,
  ].join(" ");
}

function buildIgcseCityPage(cityPage: CitySeoPage): IgcseCitySeoPage {
  const canonicalPath = buildIgcseCityPath(cityPage.citySlug);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const topAreas = cityPage.premiumAreas.slice(0, 5);
  const topAreaNames = topAreas.map((area) => area.name);
  const subjectNames = ["Maths", "Physics", "Chemistry", "Biology", "English", "Economics"];
  const pageId = `IGCSE_CITY_${cityPage.citySlug.toUpperCase().replace(/-/g, "_")}`;

  return {
    pageId,
    cityName: cityPage.cityName,
    citySlug: cityPage.citySlug,
    stateName: cityPage.stateName,
    countryName: cityPage.countryName,
    status: "live",
    indexFlag: "index",
    canonicalPath,
    canonicalUrl,
    metaTitle: `IGCSE Tutors in ${cityPage.cityName} for Cambridge & Edexcel | IB Gram`,
    metaDescription: `Find IGCSE tutors in ${cityPage.cityName} for Cambridge and Pearson Edexcel Maths, Physics, Chemistry, Biology, English, Economics and exam revision.`,
    keywords: [
      `IGCSE tutors in ${cityPage.cityName}`,
      `Cambridge IGCSE tutors ${cityPage.cityName}`,
      `Pearson Edexcel IGCSE tutors ${cityPage.cityName}`,
      `IGCSE Maths tutor in ${cityPage.cityName}`,
      `IGCSE Physics tutor in ${cityPage.cityName}`,
      `IGCSE Chemistry tutor in ${cityPage.cityName}`,
      `IGCSE Biology tutor in ${cityPage.cityName}`,
      `IGCSE English tutor in ${cityPage.cityName}`,
      `IGCSE Economics tutor in ${cityPage.cityName}`,
      `IGCSE home tutors ${cityPage.cityName}`,
      `IGCSE online tutors ${cityPage.cityName}`,
      `IGCSE exam preparation ${cityPage.cityName}`,
    ],
    ogTitle: `IGCSE Tutors in ${cityPage.cityName} | Cambridge & Edexcel`,
    ogDescription: `City-wise IGCSE tutoring in ${cityPage.cityName} for Cambridge, Pearson Edexcel, subject revision, mocks and final exam planning.`,
    ogImage: OG_IMAGE,
    twitterTitle: `IGCSE Tutors in ${cityPage.cityName} | IB Gram`,
    twitterDescription: `Find Cambridge and Edexcel IGCSE tutors in ${cityPage.cityName} for maths, sciences, English and exam support.`,
    breadcrumbTitle: `IGCSE Tutors in ${cityPage.cityName}`,
    h1: `IGCSE Tutors in ${cityPage.cityName} for Cambridge and Edexcel Students`,
    heroTitle: `Find IGCSE Tutors in ${cityPage.cityName}`,
    heroSubtitle: `Cambridge IGCSE and Pearson Edexcel tutoring for ${cityPage.cityName} students across Maths, Physics, Chemistry, Biology, English, Economics, Business and exam preparation.`,
    introSummary: `${cityPage.cityName} families looking for IGCSE support need board-aware tutoring that understands Cambridge and Pearson Edexcel papers, not generic subject coaching.`,
    latitude: cityPage.latitude,
    longitude: cityPage.longitude,
    trustPoints: [
      "Cambridge IGCSE and Pearson Edexcel board-aware matching",
      "Home, online and hybrid tutoring reviewed by area",
      "Maths, sciences, English, Economics, Business and exam revision",
      "No fake school or exam-board affiliation claims",
    ],
    cityAcademicIntro: [
      `${cityPage.cityName} has its own tutoring rhythm. Families around ${formatList(topAreaNames.slice(0, 4))} may have different travel windows, school calendars and subject needs, so a useful IGCSE match starts with local practicality as well as academic level.`,
      `IGCSE students usually need help at a very specific point in the course: a weak algebra unit, a physics equation routine that is not sticking, chemistry practical questions, English language timing, literature analysis, economics diagrams or a full revision plan before mocks. IB Gram asks for the board, syllabus, subject, current grade range and exam session before suggesting support.`,
      `Cambridge IGCSE and Pearson Edexcel International GCSE can look similar to parents, but the specifications, paper styles and assessment objectives are not identical. A good ${cityPage.cityName} tutor should know which board the student follows and use past-paper practice, topic repair and markscheme language accordingly.`,
      `This page is built as a city page, not a keyword swap. It covers ${cityPage.cityName} areas, nearby cities, school ecosystem context, tutoring modes, verification steps, internal links, FAQs and safe school disclaimers for families comparing IGCSE support.`,
    ],
    boardSectionTitle: `Cambridge and Edexcel IGCSE Support in ${cityPage.cityName}`,
    boardSupport: [
      `Cambridge IGCSE support for ${cityPage.cityName} students can include syllabus mapping, topic repair, command words, paper format review and repeated past-paper practice.`,
      `Pearson Edexcel International GCSE support can include specification review, calculator and non-calculator routines, science data questions, English response structure and exam timing.`,
      `Students who are switching schools, returning from another country or moving from a different curriculum may need a diagnostic plan before weekly tutoring begins.`,
      `Mock exam review is handled carefully: the tutor helps identify weak topics, question types and revision habits without promising marks or writing assessed work for the student.`,
    ],
    subjectSectionTitle: `IGCSE Subjects Covered by ${cityPage.cityName} Tutors`,
    subjects: buildSubjects(cityPage, subjectNames),
    matchingProcessTitle: `How IGCSE Tutor Matching Works in ${cityPage.cityName}`,
    matchingProcessSteps: [
      "Share the student's board, subject, grade or year group, syllabus code if available, school timeline and target exam session.",
      "Clarify whether the need is topic repair, homework support, past-paper practice, mock review, writing feedback or a full revision plan.",
      `Review whether home tutoring in ${cityPage.cityName}, online tutoring or a hybrid plan is the most practical mode.`,
      "Shortlist tutors by board familiarity, subject strength, teaching style, availability and parent communication fit.",
      "Use a demo or diagnostic class where available, then track progress through topic goals and practice evidence.",
    ],
    areaSectionTitle: `IGCSE Tutors Available Across ${cityPage.cityName}`,
    areaNotes: topAreas.map((area) => ({
      name: area.name,
      description: buildAreaDescription(cityPage.cityName, area.name, area.nearbyLandmarks ?? []),
      landmarks: area.nearbyLandmarks ?? [],
    })),
    nearbyAreas: cityPage.nearbyAreas,
    nearbyCities: cityPage.nearbyCities,
    schoolSectionTitle: `IGCSE School Ecosystem in ${cityPage.cityName}`,
    schoolEcosystem: cityPage.ibSchoolsCity.slice(0, 4).map((school) => ({
      name: school.name,
      area: school.area,
      description: `${school.description} For IGCSE families, this usually means support that respects school calendars, homework load, mock timelines and board-specific exam practice.`,
      typicalNeeds: school.typicalNeeds.map(adaptNeedToIgcse),
    })),
    schoolSpecificNeeds: [
      `Board and syllabus confirmation before tutoring starts, especially where ${cityPage.cityName} schools offer different international pathways.`,
      "Past-paper practice that is tied to the correct Cambridge or Pearson Edexcel specification.",
      "Parent updates that explain topic progress, revision habits and next steps without guaranteeing outcomes.",
      "Academic honesty boundaries for coursework-style support, school assignments and writing feedback.",
    ],
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    tutoringModeTitle: `Home, Online and Hybrid IGCSE Tutoring in ${cityPage.cityName}`,
    tutoringModes: [
      `Home tutoring may be reviewed around ${formatList(topAreaNames.slice(0, 4))} when tutor travel, timing and subject fit are realistic.`,
      `Online tutoring is often strongest for ${cityPage.cityName} students who need a board-specific Maths, Physics, Chemistry, Biology, English or Economics specialist.`,
      "Hybrid tutoring can combine in-person accountability with online past-paper review, mock exam feedback or short-notice doubts.",
      "For Year 10 and Year 11 students, mode choice should protect revision consistency rather than simply choosing the nearest tutor.",
    ],
    verificationTitle: `Tutor Verification and Quality Process for ${cityPage.cityName}`,
    tutorVerificationProcess: [
      "Review tutor background, subject depth, communication style and familiarity with Cambridge or Pearson Edexcel IGCSE.",
      "Check whether the tutor can teach the student's exact subject route, paper pattern and current weak topics.",
      `Confirm practical availability for ${cityPage.cityName} home lessons, online lessons or a hybrid schedule.`,
      "Use parent and student feedback after the first class to confirm pace, clarity and comfort.",
      "Keep school assignments and assessed work student-owned while using tutoring for explanation, planning and practice.",
    ],
    localProofTitle: `What ${cityPage.cityName} Parents Usually Ask For`,
    localProof: buildLocalProof(cityPage),
    faqs: buildFaqs(cityPage, subjectNames),
    internalLinks: buildInternalLinks(cityPage, pageId),
    finalCta: `Share the student's board, subject list, current marks, school feedback, exam session and ${cityPage.cityName} area. IB Gram can help review whether home, online or hybrid IGCSE tutoring is the strongest next step.`,
    lastUpdated: cityPage.lastUpdated,
    priorityScore: Math.min(0.84, Number((cityPage.priorityScore / 12).toFixed(2))),
  };
}

function buildSubjects(cityPage: CitySeoPage, subjects: string[]): IgcseCitySubject[] {
  return subjects.map((subject) => ({
    name: `IGCSE ${subject}`,
    keyword: `IGCSE ${subject} tutor in ${cityPage.cityName}`,
    description: subjectDescription(subject),
    cityNote: subjectCityNote(cityPage, subject),
  }));
}

function subjectDescription(subject: string): string {
  const descriptions: Record<string, string> = {
    Maths:
      "Number, algebra, geometry, trigonometry, graphs, statistics, calculator routines, non-calculator accuracy and timed paper practice.",
    Physics:
      "Forces, motion, electricity, waves, energy, thermal physics, equations, practical skills, graph work and data-response questions.",
    Chemistry:
      "Atomic structure, bonding, stoichiometry, acids and bases, energetics, rates, organic chemistry, practical skills and exam questions.",
    Biology:
      "Cells, enzymes, transport, human biology, genetics, ecology, diagrams, definitions, data handling and structured revision.",
    English:
      "English language, literature, comprehension, directed writing, analytical paragraphs, essay planning, quote selection and exam timing.",
    Economics:
      "Basic economic problem, markets, macroeconomics, development, diagrams, case examples, definitions, evaluation and structured answers.",
  };

  return descriptions[subject] ?? "Board-aware topic support, revision planning and exam practice.";
}

function subjectCityNote(cityPage: CitySeoPage, subject: string): string {
  if (subject === "Maths") {
    return `${cityPage.cityName} parents often ask for IGCSE Maths help after algebra, trigonometry, graphs or past-paper timing starts affecting mock results.`;
  }
  if (subject === "Physics" || subject === "Chemistry" || subject === "Biology") {
    return `IGCSE ${subject} support in ${cityPage.cityName} works best when concepts are linked to diagrams, data, practical-style questions and markscheme wording.`;
  }
  if (subject === "English") {
    return `English tutoring in ${cityPage.cityName} usually focuses on writing under time pressure, precise evidence, paragraph structure and confidence with unfamiliar texts.`;
  }
  return `Economics support in ${cityPage.cityName} often helps students move from memorised definitions to diagrams, examples and explained evaluation.`;
}

function buildAreaDescription(cityName: string, areaName: string, landmarks: string[]): string {
  const landmarkText = landmarks.length ? `near ${formatList(landmarks)}` : "near nearby residential and school routes";
  return `${areaName} is a relevant ${cityName} IGCSE tutoring catchment ${landmarkText}. Families here may review home tutoring for weekly structure, while online lessons can be better for board-specific specialists, mock review and exam-season doubts.`;
}

function buildLocalProof(cityPage: CitySeoPage): IgcseProofItem[] {
  const proof = cityPage.localTestimonials;

  return [
    {
      title: `${cityPage.cityName} parent request pattern`,
      detail:
        proof[0]?.detail.replace(/\bIB\b/g, "IGCSE").replace(/\bDP\b/g, "Year 10 and Year 11") ??
        `Families in ${cityPage.cityName} often ask for practical IGCSE support that improves weak topics before mock results become stressful.`,
      sourceLabel: "Consultation theme",
    },
    {
      title: "Mode pattern",
      detail:
        proof[1]?.detail.replace(/\bIB\b/g, "IGCSE").replace(/\bDP\b/g, "exam-year") ??
        "Online tutoring is often preferred for board-specific specialists, while home tutoring can help younger students keep routine.",
      sourceLabel: "Scheduling insight",
    },
    {
      title: "Learning pattern",
      detail:
        proof[2]?.detail.replace(/\bMYP\b/g, "IGCSE").replace(/\bcriteria\b/g, "assessment objectives") ??
        "Students frequently need help turning class notes into exam-ready answers, not only more explanation of the same topic.",
      sourceLabel: "Learning need pattern",
    },
  ];
}

function buildFaqs(cityPage: CitySeoPage, subjects: string[]): IgcseCityFaq[] {
  const topAreas = cityPage.premiumAreas.slice(0, 4).map((area) => area.name);

  return [
    {
      question: `Do you provide IGCSE tutors in ${cityPage.cityName}?`,
      answer: `Yes. IB Gram can help parents review IGCSE tutor options in ${cityPage.cityName} for Cambridge IGCSE and Pearson Edexcel International GCSE, subject to board, subject, schedule and tutor availability.`,
    },
    {
      question: `Can I get an IGCSE home tutor in ${cityPage.cityName}?`,
      answer: `Home tutoring may be available around ${formatList(topAreas)} and nearby areas when tutor travel and subject fit are realistic. Online or hybrid support may be recommended when it gives the student a stronger board-specific match.`,
    },
    {
      question: `Which IGCSE subjects are most requested in ${cityPage.cityName}?`,
      answer: `${subjects.map((subject) => `IGCSE ${subject}`).join(", ")} and Business are common requests. Less common subjects can be reviewed based on syllabus, exam board and availability.`,
    },
    {
      question: `Do tutors support both Cambridge and Pearson Edexcel IGCSE in ${cityPage.cityName}?`,
      answer:
        "IB Gram can review both Cambridge IGCSE and Pearson Edexcel International GCSE needs. The tutor match depends on the subject, paper route, specification, target grade and exam session.",
    },
    {
      question: "Can IGCSE tutors help with mocks, past papers and final exam revision?",
      answer:
        "Yes. Tutors can help students identify weak topics, practise past-paper questions, understand markschemes, improve timing and plan revision before mocks or final exams.",
    },
    {
      question: `Is online IGCSE tutoring effective for ${cityPage.cityName} students?`,
      answer:
        "Yes. Online tutoring can be especially effective when the student needs a tutor familiar with a specific board, paper pattern or subject route rather than the nearest general tutor.",
    },
    {
      question: `Is IB Gram affiliated with schools or exam boards in ${cityPage.cityName}?`,
      answer: SCHOOL_DISCLAIMER,
    },
  ];
}

function buildInternalLinks(cityPage: CitySeoPage, sourcePageId: string): InternalLink[] {
  const links: InternalLink[] = [
    makeLink(`${sourcePageId}_HUB`, sourcePageId, "IGCSE_PAGES_HUB", "/igcse-pages/", "IGCSE tutor pages by city", "IGCSE city hub", "high"),
    makeLink(`${sourcePageId}_GUIDE`, sourcePageId, "IGCSE_GUIDE", "/igcse/", "Cambridge and Edexcel IGCSE guide", "IGCSE guide", "high"),
    makeLink(`${sourcePageId}_SUBJECTS`, sourcePageId, "IGCSE_SUBJECTS", "/igcse/#subjects", "IGCSE subject directory", "Subjects", "high"),
    makeLink(`${sourcePageId}_TUTORS`, sourcePageId, "IBG_TUTORS", "/tutors/", "compare IGCSE tutor profiles", "Tutor discovery"),
    makeLink(`${sourcePageId}_CONTACT`, sourcePageId, "IBG_CONTACT", "/contact-us/", `book an IGCSE tutor consultation in ${cityPage.cityName}`, "CTA", "high"),
    makeLink(`${sourcePageId}_IB_CITY`, sourcePageId, cityPage.pageId, cityPage.canonicalUrl.replace(/^https?:\/\/[^/]+/i, ""), `IB tutors in ${cityPage.cityName}`, "Related curriculum"),
  ];

  cityPage.nearbyCities.forEach((city, index) => {
    links.push(
      makeLink(
        `${sourcePageId}_NEARBY_${index + 1}`,
        sourcePageId,
        `IGCSE_CITY_${city.citySlug.toUpperCase().replace(/-/g, "_")}`,
        buildIgcseCityPath(city.citySlug),
        `IGCSE tutors in ${city.cityName}`,
        "Nearby IGCSE city links",
      ),
    );
  });

  return links;
}

function makeLink(
  linkId: string,
  sourcePageId: string,
  targetPageId: string,
  targetUrl: string,
  anchorText: string,
  linkContext: string,
  priority: InternalLink["priority"] = "medium",
): InternalLink {
  return {
    linkId,
    sourcePageId,
    targetPageId,
    targetUrl,
    anchorText,
    linkContext,
    linkType: "contextual",
    priority,
    followStatus: "follow",
    isCrawlable: true,
    linkStatus: "active",
  };
}

function adaptNeedToIgcse(need: string): string {
  return need
    .replace(/\bPYP routines\b/g, "lower-secondary foundations")
    .replace(/\bMYP criteria\b/g, "assessment objectives")
    .replace(/\bMYP support\b/g, "IGCSE foundation support")
    .replace(/\bDP\b/g, "IGCSE")
    .replace(/\bIA planning\b/g, "mock and revision planning")
    .replace(/\bMath AA HL\b/g, "IGCSE Maths")
    .replace(/\bMath AI HL\b/g, "IGCSE Maths")
    .replace(/\bEnglish A\b/g, "IGCSE English");
}

function formatList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
