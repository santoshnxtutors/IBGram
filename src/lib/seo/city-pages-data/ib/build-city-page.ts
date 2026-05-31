import type { CitySeoPageBase, ProgramSupport, SubjectSupport } from "../../city-page-types";
import { absoluteUrl, buildCityPath } from "../../slug-utils";
import type { AdditionalCityConfig, SubjectInventoryMap } from "./types";

const SCHOOL_DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with these schools unless specifically stated.";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");
const CONTACT_PHONE = "+917439368115";
const CONTACT_EMAIL = "ibgram24@gmail.com";

const SUBJECTS = [
  {
    slug: "math-aa-hl",
    name: "Math AA HL",
    level: "HL and SL pathways",
    description:
      "Functions, calculus, proof, vectors, complex problem solving, exam technique and IA topic shaping for Analysis and Approaches students.",
  },
  {
    slug: "math-ai-hl",
    name: "Math AI HL",
    level: "HL and SL pathways",
    description:
      "Statistics, modelling, probability, technology use, calculus applications, data interpretation and IA planning for Applications and Interpretation students.",
  },
  {
    slug: "physics",
    name: "Physics",
    level: "HL and SL",
    description:
      "Mechanics, waves, electricity, fields, data-based questions, practical skills and timed paper practice.",
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    level: "HL and SL",
    description:
      "Stoichiometry, bonding, energetics, kinetics, equilibrium, organic chemistry, data questions and IA planning.",
  },
  {
    slug: "economics",
    name: "Economics",
    level: "HL and SL",
    description:
      "Microeconomics, macroeconomics, global economics, diagrams, real-world examples and essay structure.",
  },
  {
    slug: "biology",
    name: "Biology",
    level: "HL and SL",
    description:
      "Cell biology, genetics, ecology, human physiology, data response, experimental thinking and IA direction.",
  },
  {
    slug: "english",
    name: "English A",
    level: "HL and SL",
    description:
      "Paper 1 analysis, Paper 2 comparison, oral preparation, literary argument, essay planning and close reading.",
  },
] as const;

export function buildAdditionalIndianIbCityPage(config: AdditionalCityConfig): CitySeoPageBase {
  const subjectInventory = buildSubjectInventory(config);
  const areaNames = config.premiumAreas.map((area) => area.name);
  const topArea = areaNames[0] ?? config.cityName;
  const secondArea = areaNames[1] ?? config.cityName;
  const schoolClusterNames = config.schoolClusters.map((school) => school.name);

  return {
    pageId: `IBG_CITY_${config.citySlug.toUpperCase().replace(/-/g, "_")}`,
    pageType: "city_homepage",
    cityId: config.cityId,
    cityName: config.cityName,
    citySlug: config.citySlug,
    stateName: config.stateName,
    countryName: "India",
    status: "live",
    indexFlag: "index",
    canonicalUrl: absoluteUrl(buildCityPath(config.citySlug)),
    canonicalTarget: absoluteUrl(buildCityPath(config.citySlug)),
    priorityScore: config.priorityScore,
    demandScore: config.demandScore,
    demandBand: config.demandBand,
    contentUniquenessScore: config.contentUniquenessScore,
    lastUpdated: config.lastUpdated ?? "2026-05-06",
    reviewOwner: "Content Team",
    primaryKeyword: `IB tutors in ${config.cityName}`,
    secondaryKeywords: [
      `IB home tutors ${config.cityName}`,
      `IB DP tutor ${config.cityName}`,
      `IB Math AA tutor ${config.cityName}`,
      `IB tutors near ${topArea}`,
      `IB online tutors ${config.cityName}`,
      `IB PYP MYP DP tutors ${config.cityName}`,
    ],
    searchIntent:
      "Find city-wise IB tutors for PYP, MYP and DP support, with help comparing home, online and hybrid tutoring options.",
    metaTitle: `IB Tutors in ${config.cityName} for PYP, MYP & DP | IB Gram`,
    metaDescription: buildMetaDescription(config),
    h1: `IB Tutors in ${config.cityName} for PYP, MYP and DP Students`,
    introSummary: `${config.cityName} parents often need IB tutoring that is both academically specialist and practical around local school routines. ${config.parentContext}`,
    ogTitle: `IB Tutors in ${config.cityName} | IB Gram`,
    ogDescription: `City-wise IB tutor matching in ${config.cityName} for PYP, MYP and DP students across Math, sciences, economics, English and assessment support.`,
    ogImage: OG_IMAGE,
    imageAltText: `IB tutors in ${config.cityName} for international school students`,
    robotsTag: "index, follow",
    breadcrumbTitle: `IB Tutors in ${config.cityName}`,
    cityOverview: [
      `${config.cityName} has a distinct international school and premium tutoring market. ${config.academicEnvironment} Parents are usually not looking for a generic board tutor; they want someone who understands IB inquiry, criterion-based assessment, DP subject levels and the pressure that builds around internal assessments, mocks and final exam sessions.`,
      `${config.parentContext} A PYP student may need gentle reading, numeracy and unit-of-inquiry support. An MYP student may need help turning broad classroom ideas into criterion-ready work. A DP student may need a subject specialist who can handle HL or SL depth, IA planning, command terms and timed paper practice without taking over assessed work.`,
      `${config.tutoringPracticality} IB Gram uses this city context before suggesting a match. The aim is to help families choose between home tutoring, online specialist support and hybrid plans based on programme level, subject, area, school calendar, student confidence and realistic weekly scheduling.`,
    ],
    premiumAreas: config.premiumAreas.map((area) => ({
      name: area.name,
      slug: area.slug,
      description: area.description,
      nearbyLandmarks: area.landmarks,
      pageEnabled: area.pageEnabled ?? true,
      indexFlag: "index",
    })),
    nearbyAreas: config.nearbyAreas,
    nearbyCities: config.nearbyCities,
    serviceAreaText: `IB Gram can review home tutoring requests across ${formatList(areaNames)} and nearby residential pockets in ${config.cityName}. Online tutoring remains available city-wide, especially for specialist DP subjects, IA support and revision periods.`,
    latitude: config.latitude,
    longitude: config.longitude,
    timezone: "Asia/Kolkata",
    cityPhoneNumber: CONTACT_PHONE,
    cityWhatsappNumber: CONTACT_PHONE,
    localCtaText: `Book an IB tutor consultation in ${config.cityName}`,
    ibProgramsAvailable: buildProgrammes(config),
    ibSubjectsAvailable: buildSubjects(config, subjectInventory),
    gradeRange: "Grade 1 to Grade 12",
    dpSubjectLevels: "HL and SL",
    mathCoverage: config.subjectDemand.math,
    scienceCoverage: config.subjectDemand.science,
    humanitiesCoverage: config.subjectDemand.humanities,
    languageCoverage: config.subjectDemand.language,
    assessmentSupport:
      "IA structure, EE mentoring, TOK support, school assignment review, past-paper revision, mock exam planning and parent-visible weekly academic goals",
    curriculumNotes:
      "IB tutoring should respect concept-based learning, academic honesty, command-term language, criterion-related assessment and the difference between helping a student think and doing assessed work for them.",
    examSessionFocus: config.localExamFocus,
    ibSchoolsCity: config.schoolClusters.map((school) => ({
      name: school.name,
      slug: school.slug,
      area: school.area,
      description: school.description,
      typicalNeeds: school.typicalNeeds,
      pageEnabled: false,
      indexFlag: "index",
    })),
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    schoolSpecificNeeds: config.schoolNeeds,
    schoolAreaMapping: [
      {
        area: topArea,
        schools: schoolClusterNames.slice(0, 2),
        note: `Families around ${topArea} often need tutoring that works around school buses, activities and late afternoon study windows.`,
      },
      {
        area: secondArea,
        schools: schoolClusterNames.slice(1, 3),
        note: `${secondArea} requests are usually checked for mode first, because the best DP specialist may be online while younger students may prefer home structure.`,
      },
    ],
    verifiedTutorCountCity: 0,
    homeTutorAvailable: true,
    onlineTutorAvailable: true,
    hybridTutorAvailable: true,
    subjectsWithStrongInventory: config.strongSubjects,
    subjectsWithLimitedInventory: ["World languages and less common DP electives are reviewed case by case"],
    averageMatchingTime: config.averageMatchingTime,
    demoClassAvailable: true,
    tutorVerificationProcess: [
      "Review tutor profile, education background, subject depth and IB programme familiarity.",
      `Check whether the tutor can support ${config.cityName} schedules, preferred mode and the student's exact subject level.`,
      "Use a demo or diagnostic class where available to test explanation clarity, pace and student comfort.",
      "Keep parent feedback, topic goals and assessment boundaries visible during ongoing support.",
    ],
    teachingModeNotes: `${config.tutoringPracticality} Home tutoring can be useful for younger learners and families close to tutor travel routes. Online tutoring is often stronger for rare DP subjects, IA review, urgent doubts and exam-season continuity. Hybrid plans can combine in-person accountability with online specialist access.`,
    heroTitle: `Find IB Tutors in ${config.cityName}`,
    heroSubtitle: `IB PYP, MYP and DP tutoring for ${config.cityName} students across Math AA, Math AI, Physics, Chemistry, Biology, Economics, English, IA support and exam revision.`,
    primaryCtaText: "Book a Free Academic Consultation",
    secondaryCtaText: "Find IB Tutor Near Me",
    trustPoints: [
      "Programme-aware PYP, MYP and DP matching",
      "Home, online and hybrid support reviewed by area",
      "Demo class available where scheduling allows",
      "Independent school ecosystem guidance",
    ],
    cityAcademicIntro: [
      `${config.cityName} families often approach IB tutoring after noticing that ordinary subject tuition is not enough for inquiry-led tasks, MYP criteria or DP markscheme expectations. ${config.academicEnvironment}`,
      `The first matching question is not only the subject. IB Gram checks programme, grade, school timeline, current confidence, assessment deadlines and whether the student needs concept repair, writing structure, IA direction, exam revision or steady accountability.`,
      `Subject demand in ${config.cityName} usually clusters around Math AA, Math AI, Physics, Chemistry, Biology, Economics and English. The right tutor should understand the difference between HL and SL work, support academic honesty and help the student build independent routines instead of memorising model answers.`,
      `This page gives parents a local view of ${config.cityName} areas, nearby cities, school ecosystem patterns, tutoring modes, verification steps, internal links and FAQs before they speak with an advisor.`,
    ],
    programSectionTitle: `IB Programs We Support in ${config.cityName}`,
    subjectSectionTitle: `IB Subjects Covered by ${config.cityName} Tutors`,
    areaSectionTitle: `IB Tutors Available Across ${config.cityName}`,
    schoolSectionTitle: `Support for ${config.cityName} International School Students`,
    matchingProcessSteps: [
      "Share programme, grade, subject, level, school timeline, area and preferred mode.",
      "Clarify whether the student needs concept repair, assignment support, IA guidance, writing feedback or exam preparation.",
      "Shortlist tutors by IB fit, subject depth, teaching style, availability and mode suitability.",
      "Arrange a demo or diagnostic class where available.",
      "Track progress through topic goals, practice work, school deadlines and parent feedback.",
    ],
    localTestimonials: [
      {
        title: `${config.cityName} parent pattern`,
        detail: config.proofThemes[0],
        sourceLabel: "Consultation theme",
      },
      {
        title: "Mode insight",
        detail: config.proofThemes[1],
        sourceLabel: "Scheduling insight",
      },
      {
        title: "Learning need",
        detail: config.proofThemes[2],
        sourceLabel: "Academic planning pattern",
      },
    ],
    cityFaqs: buildFaqs(config, topArea),
    bottomCtaText: `Share your ${config.cityName} area, IB programme, subject level, current school timeline and preferred tutoring mode. IB Gram can help parents connect with subject-matched IB tutors based on availability, programme level, location and learning goals, without claiming official school partnerships or guaranteed results.`,
    schema: {
      schemaPageType: "WebPage",
      schemaName: `IB Tutors in ${config.cityName}`,
      schemaDescription: `City-wise IB tutoring support in ${config.cityName} for PYP, MYP and DP students.`,
      schemaUrl: absoluteUrl(buildCityPath(config.citySlug)),
      schemaBreadcrumbs: ["Home", "IB Tutors", config.cityName],
      schemaOrganizationName: "IB Gram",
      schemaLogoUrl: absoluteUrl("/globe.svg"),
      schemaContactPhone: CONTACT_PHONE,
      schemaContactEmail: CONTACT_EMAIL,
      schemaServiceName: `IB Tutoring Services in ${config.cityName}`,
      schemaAreaServed: [config.cityName, ...areaNames.slice(0, 4)],
      schemaSubjects: ["PYP", "MYP", "DP", "Math AA", "Math AI", "Physics", "Chemistry", "Biology", "Economics", "English"],
      schemaFaqJson: true,
    },
  };
}

function buildMetaDescription(config: AdditionalCityConfig): string {
  const lead = config.subjectDemand.math.includes("Math AA")
    ? "Math AA, Math AI, Physics, Chemistry, Biology, Economics and English"
    : "IB Math, sciences, economics, English and assessment support";

  return `Find IB PYP, MYP and DP tutors in ${config.cityName} for ${lead}. Home, online and hybrid support with IB Gram.`;
}

function buildProgrammes(config: AdditionalCityConfig): ProgramSupport[] {
  return [
    {
      slug: "pyp",
      name: "Primary Years Programme",
      ageRange: "Ages 3 to 12",
      description:
        "Inquiry-led support for reading, numeracy, unit research, presentation confidence and early study habits.",
      cityNote: `PYP families in ${config.cityName} often want calm structure that supports curiosity without turning early IB learning into rote worksheets.`,
    },
    {
      slug: "myp",
      name: "Middle Years Programme",
      ageRange: "Ages 11 to 16",
      description:
        "Subject foundations, criterion-based assignments, interdisciplinary thinking and personal project planning.",
      cityNote: `MYP students in ${config.cityName} usually need help converting class ideas into evidence, reflection and criteria-aware work.`,
    },
    {
      slug: "dp",
      name: "Diploma Programme",
      ageRange: "Ages 16 to 19",
      description:
        "HL and SL tutoring, IA support, EE planning, TOK guidance, exam revision and weekly academic accountability.",
      cityNote: `DP support in ${config.cityName} works best when tutoring follows the student's subject combination, school deadlines and May or November exam plan.`,
    },
  ];
}

function buildSubjects(config: AdditionalCityConfig, subjectInventory: SubjectInventoryMap): SubjectSupport[] {
  return SUBJECTS.map((subject) => ({
    ...subject,
    inventory: subjectInventory[subject.name] ?? "moderate",
    cityNote: buildSubjectCityNote(config, subject.name),
  }));
}

function buildSubjectInventory(config: AdditionalCityConfig): SubjectInventoryMap {
  const map: SubjectInventoryMap = {};
  config.strongSubjects.forEach((subject) => {
    map[subject] = "strong";
  });
  config.moderateSubjects.forEach((subject) => {
    map[subject] = map[subject] ?? "moderate";
  });
  return map;
}

function buildSubjectCityNote(config: AdditionalCityConfig, subjectName: string): string {
  if (subjectName.includes("Math AA")) {
    return `${subjectName} is a common ${config.cityName} request for students targeting engineering, economics, data-heavy or quantitative university pathways.`;
  }
  if (subjectName.includes("Math AI")) {
    return `${subjectName} support in ${config.cityName} often focuses on modelling, statistics, technology use and IA data interpretation.`;
  }
  if (subjectName === "Physics" || subjectName === "Chemistry" || subjectName === "Biology") {
    return `${subjectName} tutoring in ${config.cityName} is usually strongest when concepts are tied to data questions, practical thinking and timed markscheme practice.`;
  }
  if (subjectName === "Economics") {
    return `Economics students in ${config.cityName} often need stronger diagram use, real-world examples and 10-mark or 15-mark response structure.`;
  }
  return `English support in ${config.cityName} is often requested for thesis building, close reading, oral preparation and clearer evidence-led writing.`;
}

function buildFaqs(config: AdditionalCityConfig, topArea: string) {
  return [
    {
      question: `Do you provide IB home tutors in ${config.cityName}?`,
      answer: `Home tutoring may be available in ${config.cityName} across areas such as ${formatList(config.premiumAreas.slice(0, 4).map((area) => area.name))}, depending on tutor travel, timing and subject fit. Online tutoring is available city-wide.`,
    },
    {
      question: `Can ${config.cityName} students get IB DP Math AA HL support?`,
      answer: `Yes. IB Gram can review Math AA HL needs for ${config.cityName} students and shortlist tutors based on current topics, assessment deadlines, preferred mode and availability.`,
    },
    {
      question: `Which IB subjects are commonly requested in ${config.cityName}?`,
      answer: `${formatList(config.strongSubjects)} are common starting points in ${config.cityName}. Other subjects, languages and less common electives are reviewed based on tutor availability.`,
    },
    {
      question: `Can tutors help with IA, EE and TOK work?`,
      answer:
        "Tutors can guide topic clarity, structure, research planning, feedback interpretation and revision. Assessed work must remain student-owned, and IB Gram does not support writing submissions for students.",
    },
    {
      question: `Is online IB tutoring effective for families near ${topArea}?`,
      answer: `Yes. Online tutoring can be especially useful near ${topArea} when the best subject specialist is not close to the student's home or school corridor. Hybrid plans can add in-person accountability where feasible.`,
    },
    {
      question: `Is IB Gram affiliated with schools in ${config.cityName}?`,
      answer: SCHOOL_DISCLAIMER,
    },
    {
      question: `How does IB Gram match tutors for ${config.cityName} families?`,
      answer: `The match starts with programme, grade, subject, level, school timeline, location and learning goals. IB Gram then checks tutor subject depth, IB familiarity, teaching style, mode suitability and availability.`,
    },
  ];
}

function formatList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
