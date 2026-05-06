import { buildCityInternalLinks } from "./internal-links";
import type { CitySeoPage, CitySeoPageBase } from "./city-page-types";
import { absoluteUrl, buildCityPath, normalizeSlug } from "./slug-utils";
import { additionalIndianIbCityPages } from "./city-pages-data/ib";

const SCHOOL_DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with these schools unless specifically stated.";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");

export const citySeoPageBaseData = [
  {
    pageId: "IBG_CITY_GURUGRAM",
    pageType: "city_homepage",
    cityId: "GUR001",
    cityName: "Gurugram",
    citySlug: "gurugram",
    stateName: "Haryana",
    countryName: "India",
    status: "live",
    indexFlag: "index",
    canonicalUrl: absoluteUrl(buildCityPath("gurugram")),
    canonicalTarget: absoluteUrl(buildCityPath("gurugram")),
    priorityScore: 9.4,
    demandScore: 92,
    demandBand: "high",
    contentUniquenessScore: 91,
    lastUpdated: "2026-05-04",
    reviewOwner: "Content Team",
    primaryKeyword: "IB tutors in Gurugram",
    secondaryKeywords: [
      "IB home tutors Gurugram",
      "IB DP tutor Gurugram",
      "IB Math AA tutor Gurugram",
      "IB tutors near Golf Course Road",
      "IB online tutors Gurgaon",
    ],
    searchIntent: "Find verified IB tutors near me for school support, exam preparation, and subject mentoring.",
    metaTitle: "IB Tutors in Gurugram for PYP, MYP & DP",
    metaDescription:
      "Find verified IB PYP, MYP and DP tutors in Gurugram for Math AA, Math AI, Physics, Chemistry, Economics and English. Book a demo with IB Gram.",
    h1: "IB Tutors in Gurugram for PYP, MYP and DP Students",
    introSummary:
      "Gurugram families often need IB tutoring that can keep pace with international school expectations, busy commutes, and subject-level demands in Math AA, Math AI, sciences, economics and languages.",
    ogTitle: "IB Tutors in Gurugram | IB Gram",
    ogDescription:
      "Personalized IB tutoring across Gurugram with verified educators, home and online options, and subject-level matching.",
    ogImage: OG_IMAGE,
    imageAltText: "IB tutors in Gurugram for international school students",
    robotsTag: "index, follow",
    breadcrumbTitle: "IB Tutors in Gurugram",
    cityOverview: [
      "Gurugram has one of the strongest international school tutoring markets in North India. Many families here are balancing rigorous IB expectations with long school days, activity-heavy schedules, and frequent travel between Golf Course Road, DLF phases, Sohna Road, Sushant Lok, Sector 57 and newer residential communities. The result is a clear need for tutoring that is structured, responsive and genuinely aligned with IB assessment rather than generic board tutoring.",
      "IB students in Gurugram often need help at different points in the academic journey. PYP families may want reading, inquiry and numeracy support that does not turn early learning into rote worksheets. MYP students often need help translating concepts into criterion-based assignments. DP students usually need specialist subject support, IA direction, exam strategy, and a calm weekly plan that protects school deadlines.",
      "IB Gram's Gurugram page is built for parents who want a clear local view before speaking to an advisor. It explains where home tutoring may be feasible, when online lessons make more sense, which subjects usually need specialist matching, and how IB Gram screens tutors before recommending a shortlist.",
    ],
    premiumAreas: [
      {
        name: "Golf Course Road",
        slug: "golf-course-road",
        description:
          "High-demand corridor for DP Math, sciences and economics support, especially for families who want evening home lessons with predictable travel windows.",
        nearbyLandmarks: ["Sector 53", "Sector 54", "Rapid Metro corridor"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "DLF Phase 5",
        slug: "dlf-phase-5",
        description:
          "Premium residential pocket where hybrid tutoring is often preferred because students split time between school work, sports and test preparation.",
        nearbyLandmarks: ["The Crest", "DLF Park Place", "Golf Course Road"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Sector 57",
        slug: "sector-57",
        description:
          "A practical base for families around central Gurugram who need MYP foundations, DP subject tutoring and short-notice online backup.",
        nearbyLandmarks: ["Sushant Lok 3", "Golf Course Extension Road"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Sohna Road",
        slug: "sohna-road",
        description:
          "Useful for families near newer communities where online or hybrid support can reduce commute friction during exam months.",
        nearbyLandmarks: ["Vatika Chowk", "Sector 49", "Sector 50"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Sushant Lok",
        slug: "sushant-lok",
        description:
          "A central tutoring catchment for PYP, MYP and DP families who want quick access to vetted IB mentors.",
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    nearbyAreas: ["Nirvana Country", "South City 1", "DLF Phase 1", "DLF Phase 4", "Sector 50", "Sector 65"],
    nearbyCities: [
      {
        cityName: "Delhi",
        citySlug: "delhi",
        description: "Delhi families often use online and hybrid support for DP subject specialists.",
      },
      {
        cityName: "Noida",
        citySlug: "noida",
        description: "Noida is a useful nearby option for NCR IB families comparing tutor availability.",
      },
      {
        cityName: "Faridabad",
        citySlug: "faridabad",
        description: "Faridabad families often compare Gurugram, Delhi and online NCR IB tutor availability.",
      },
    ],
    serviceAreaText:
      "Home tutoring may be available across Golf Course Road, DLF phases, Sushant Lok, Sector 57, Sohna Road and nearby communities depending on tutor schedules. Online tutoring remains available across Gurugram for all supported IB subjects.",
    latitude: 28.4595,
    longitude: 77.0266,
    timezone: "Asia/Kolkata",
    cityPhoneNumber: "+919582706764",
    cityWhatsappNumber: "+919582706764",
    localCtaText: "Book an IB demo class in Gurugram",
    ibProgramsAvailable: [
      {
        slug: "pyp",
        name: "Primary Years Programme",
        ageRange: "Ages 3 to 12",
        description:
          "Inquiry-led support for reading, numeracy, unit research, presentation confidence and early study habits.",
        cityNote:
          "Gurugram PYP families often want gentle academic structure that supports international school inquiry without replacing classroom curiosity.",
      },
      {
        slug: "myp",
        name: "Middle Years Programme",
        ageRange: "Ages 11 to 16",
        description:
          "Subject foundations, criterion-based assignments, interdisciplinary thinking, and personal project planning.",
        cityNote:
          "MYP students in Gurugram frequently need help turning broad concepts into clear evidence, reflection and assessment-ready work.",
      },
      {
        slug: "dp",
        name: "Diploma Programme",
        ageRange: "Ages 16 to 19",
        description:
          "HL and SL tutoring, IA support, exam revision, TOK and EE planning, and weekly academic accountability.",
        cityNote:
          "DP support in Gurugram is strongest when lessons are aligned with school deadlines, May or November exam goals, and the exact subject combination.",
      },
    ],
    ibSubjectsAvailable: [
      {
        slug: "math-aa-hl",
        name: "Math AA HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description:
          "Calculus, functions, proof, vectors, exam technique and IA topic shaping for Analysis and Approaches students.",
        cityNote: "Math AA HL is one of the most requested Gurugram subjects, especially for DP students aiming at engineering, economics or quantitative university pathways.",
      },
      {
        slug: "math-ai-hl",
        name: "Math AI HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description:
          "Statistics, modelling, technology use, probability, calculus applications and IA data interpretation.",
        cityNote: "AI HL support is helpful for Gurugram students who need stronger application routines and calculator-led confidence.",
      },
      {
        slug: "physics",
        name: "Physics",
        level: "HL and SL",
        inventory: "strong",
        description:
          "Mechanics, electricity, waves, data questions, practical skills and timed paper practice.",
        cityNote: "Physics requests in Gurugram often involve students who understand class notes but need help applying command terms under exam pressure.",
      },
      {
        slug: "chemistry",
        name: "Chemistry",
        level: "HL and SL",
        inventory: "strong",
        description:
          "Stoichiometry, bonding, energetics, kinetics, organic chemistry, data-based questions and IA planning.",
        cityNote: "Chemistry students often ask for structured weekly problem practice and clearer links between theory, lab skills and markschemes.",
      },
      {
        slug: "economics",
        name: "Economics",
        level: "HL and SL",
        inventory: "moderate",
        description:
          "Microeconomics, macroeconomics, global economics, real-world examples, diagrams and essay structure.",
        cityNote: "Economics tutoring is useful for students who need better 10-mark and 15-mark response structure alongside current examples.",
      },
      {
        slug: "english",
        name: "English A",
        level: "HL and SL",
        inventory: "moderate",
        description:
          "Paper 1 analysis, Paper 2 comparison, oral preparation, essay planning and close reading.",
        cityNote: "English support in Gurugram is often requested by strong students who need more precise thesis building and textual evidence.",
      },
    ],
    gradeRange: "Grade 1 to Grade 12",
    dpSubjectLevels: "HL and SL",
    mathCoverage: "Math AA HL, Math AA SL, Math AI HL and Math AI SL",
    scienceCoverage: "Physics HL/SL, Chemistry HL/SL and Biology HL/SL, subject to tutor availability",
    humanitiesCoverage: "Economics, Business Management, Psychology, History and related essay-based support",
    languageCoverage: "English A, English B, Hindi, French and other languages based on availability",
    assessmentSupport: "IA structure, EE mentoring, TOK support, past-paper revision, school assignment review and exam planning",
    curriculumNotes:
      "IB tutoring works best when it respects concept-based learning, criterion-related assessment, internal assessments and command-term language. IB Gram matches tutors against those needs rather than only matching by subject name.",
    examSessionFocus: "May 2026 and November 2026 exam support, with earlier planning for younger DP cohorts",
    ibSchoolsCity: [
      {
        name: "Pathways World School",
        slug: "pathways-world-school",
        area: "Gurugram region",
        description:
          "Families connected with this ecosystem often ask for DP subject depth, MYP assignment structure and balanced school-week scheduling.",
        typicalNeeds: ["DP Math AA and AI support", "MYP criterion guidance", "IA and EE planning"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Lancers International School",
        slug: "lancers-international-school",
        area: "Golf Course Road",
        description:
          "A common reference point for central Gurugram families looking for IB-aligned tutoring near Golf Course Road.",
        typicalNeeds: ["PYP inquiry support", "MYP foundations", "DP sciences and mathematics"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Scottish High International School",
        slug: "scottish-high-international-school",
        area: "Sector 57",
        description:
          "Parents in and around Sector 57 often seek help with DP subject combinations, language support and weekly academic routines.",
        typicalNeeds: ["DP exam revision", "English and humanities writing", "Math foundations"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "GD Goenka World School",
        slug: "gd-goenka-world-school",
        area: "Sohna Road region",
        description:
          "Families around the Sohna Road side of Gurugram often prefer hybrid tutoring to reduce travel strain.",
        typicalNeeds: ["Hybrid tutoring", "DP sciences", "Boarding-school schedule support"],
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    schoolSpecificNeeds: [
      "DP Math AA and Math AI support for HL and SL students",
      "MYP assignments that need criterion language, evidence and reflection",
      "IA topic narrowing, structure and source selection",
      "Weekly academic planning around school calendars, activities and exam sessions",
    ],
    schoolAreaMapping: [
      {
        area: "Golf Course Road",
        schools: ["Lancers International School", "Scottish High International School"],
        note: "Central Gurugram families often request tutors who can reach evening slots without long commute risk.",
      },
      {
        area: "Sohna Road and extensions",
        schools: ["GD Goenka World School", "Pathways World School"],
        note: "Hybrid support is often practical for families near newer residential communities and school corridors.",
      },
    ],
    verifiedTutorCountCity: 0,
    homeTutorAvailable: true,
    onlineTutorAvailable: true,
    hybridTutorAvailable: true,
    subjectsWithStrongInventory: ["Math AA", "Math AI", "Physics", "Chemistry"],
    subjectsWithLimitedInventory: ["Visual Arts", "Theatre", "some language combinations"],
    averageMatchingTime: "Common subjects are usually reviewed for a shortlist within 24 to 48 hours, subject to tutor availability.",
    demoClassAvailable: true,
    tutorVerificationProcess: [
      "Identity and profile screening",
      "Subject expertise review against IB programme and level",
      "Teaching sample or demo feedback review",
      "Availability, communication and reliability checks",
      "Parent and student feedback monitoring after matching",
    ],
    teachingModeNotes:
      "Home tutoring in Gurugram is most practical when location and timing are realistic. For late evenings, rare subjects or urgent DP revision, online tutoring may produce a stronger specialist match.",
    heroTitle: "Find Verified IB Tutors in Gurugram",
    heroSubtitle:
      "Personalized IB PYP, MYP and DP tutoring for Gurugram students, with subject-level matching across Math AA, Math AI, Physics, Chemistry, Economics, English and more.",
    primaryCtaText: "Book a Free Academic Consultation",
    secondaryCtaText: "Find IB Tutor Near Me",
    trustPoints: [
      "IB programme and subject-level matching",
      "Home, online and hybrid options",
      "Demo class available before long-term commitment",
      "Independent school support with no false affiliation claims",
    ],
    cityAcademicIntro: [
      "For many Gurugram families, the challenge is not finding a tutor; it is finding an IB tutor who understands how the programme is assessed. A student can be bright and still lose marks because an IA question is too broad, an MYP reflection is vague, or a DP response misses command-term expectations. IB Gram starts with those details.",
      "The matching conversation looks at the student's programme, school calendar, subject level, present performance, preferred learning mode and goal. A PYP student near DLF Phase 5 may need a gentle mentor who can build reading and numeracy confidence. A DP student near Golf Course Road may need a Math AA HL specialist who can work through calculus, functions and timed papers. A science student near Sohna Road may need online support because the best-fit tutor is not within practical travel distance.",
      "This page is intentionally local. It covers Gurugram areas, nearby NCR links, school ecosystems, tutoring modes and FAQs so parents can decide what kind of support to request before booking a consultation.",
    ],
    programSectionTitle: "IB Programs We Support in Gurugram",
    subjectSectionTitle: "IB Subjects Covered by Gurugram Tutors",
    areaSectionTitle: "IB Tutors Available Across Gurugram",
    schoolSectionTitle: "Support for Gurugram International School Students",
    matchingProcessSteps: [
      "Share the programme, grade, school timeline, subjects, level and preferred mode.",
      "IB Gram reviews whether the need is conceptual support, assignment support, exam preparation or a mix.",
      "A shortlist is prepared based on subject fit, IB experience, availability, communication style and location feasibility.",
      "The student takes a demo class or first diagnostic session to check clarity, pace and comfort.",
      "After the match is confirmed, progress is reviewed through topic plans, assignments, mock practice and parent feedback.",
    ],
    localTestimonials: [
      {
        title: "Common Gurugram parent request",
        detail:
          "Parents often ask for DP Math AA or Physics help that can fit after long school days without increasing commute stress.",
        sourceLabel: "Consultation theme",
      },
      {
        title: "Academic pattern seen locally",
        detail:
          "MYP students frequently need help translating research and class discussion into assessment-ready criteria, evidence and reflection.",
        sourceLabel: "Learning need pattern",
      },
      {
        title: "Mode preference",
        detail:
          "Hybrid tutoring is often the most practical option: home sessions for high-priority topics and online sessions for revision, IA review or urgent doubts.",
        sourceLabel: "Scheduling insight",
      },
    ],
    cityFaqs: [
      {
        question: "How do I find an IB Math AA HL tutor in Gurugram?",
        answer:
          "Share the student's grade, current school topic, target level, assessment deadlines and preferred mode. IB Gram then looks for tutors with Math AA experience, HL depth and availability that fits the Gurugram schedule.",
      },
      {
        question: "Do you provide IB home tutors near Golf Course Road?",
        answer:
          "Home tutoring may be available around Golf Course Road, DLF phases, Sushant Lok and nearby areas depending on tutor location and timing. If travel is impractical, IB Gram can suggest online or hybrid options.",
      },
      {
        question: "Can Gurugram students get help with IB IA and EE work?",
        answer:
          "Yes. Tutors can help with topic clarity, structure, research direction, data interpretation and subject-specific academic support. They should not write the work for the student.",
      },
      {
        question: "Which IB programmes are supported in Gurugram?",
        answer:
          "IB Gram supports PYP, MYP and DP students in Gurugram. PYP support is usually foundation and inquiry focused, MYP support is criteria focused, and DP support is subject and assessment focused.",
      },
      {
        question: "Is IB Gram affiliated with schools in Gurugram?",
        answer: SCHOOL_DISCLAIMER,
      },
      {
        question: "Are online IB tutors effective for Gurugram students?",
        answer:
          "Online tutoring can be very effective for DP subjects, IA review, past-paper practice and rare subject combinations. Many families use online sessions when specialist quality matters more than location.",
      },
      {
        question: "Can I book a demo class before choosing a tutor?",
        answer:
          "Yes, a demo or first diagnostic session can be arranged where available. It helps parents and students evaluate clarity, pace and fit before continuing.",
      },
      {
        question: "What details should I share for the best Gurugram tutor match?",
        answer:
          "Share the programme, grade, subject, level, school deadlines, recent marks, preferred timing, location, online or home preference, and any specific concerns such as IA, EE, TOK or exam revision.",
      },
    ],
    bottomCtaText:
      "Tell IB Gram what your child is studying, where you are located in Gurugram, and what kind of support you need. We will help you identify a practical next step.",
    schema: {
      schemaPageType: "WebPage",
      schemaName: "IB Tutors in Gurugram",
      schemaDescription:
        "City-wise IB tutoring support in Gurugram for PYP, MYP and DP students across home, online and hybrid tutoring modes.",
      schemaUrl: absoluteUrl(buildCityPath("gurugram")),
      schemaBreadcrumbs: ["Home", "IB Tutors", "Gurugram"],
      schemaOrganizationName: "IB Gram",
      schemaLogoUrl: absoluteUrl("/globe.svg"),
      schemaContactPhone: "+919582706764",
      schemaContactEmail: "ibgram24@gmail.com",
      schemaServiceName: "IB Tutoring Services in Gurugram",
      schemaAreaServed: ["Gurugram", "Golf Course Road", "DLF Phase 5", "Sector 57", "Sohna Road"],
      schemaSubjects: ["PYP", "MYP", "DP", "Math AA", "Math AI", "Physics", "Chemistry", "Economics"],
      schemaFaqJson: true,
    },
  },
  {
    pageId: "IBG_CITY_DELHI",
    pageType: "city_homepage",
    cityId: "DEL001",
    cityName: "Delhi",
    citySlug: "delhi",
    stateName: "Delhi",
    countryName: "India",
    status: "live",
    indexFlag: "index",
    canonicalUrl: absoluteUrl(buildCityPath("delhi")),
    canonicalTarget: absoluteUrl(buildCityPath("delhi")),
    priorityScore: 8.9,
    demandScore: 88,
    demandBand: "high",
    contentUniquenessScore: 86,
    lastUpdated: "2026-05-04",
    reviewOwner: "Content Team",
    primaryKeyword: "IB tutors in Delhi",
    secondaryKeywords: [
      "IB home tutors Delhi",
      "IB DP tutor Delhi",
      "IB Math tutor Delhi",
      "online IB tutors Delhi",
    ],
    searchIntent: "Find IB tutors in Delhi for international school students and DP subject support.",
    metaTitle: "IB Tutors in Delhi for PYP, MYP & DP",
    metaDescription:
      "Find IB tutors in Delhi for PYP, MYP and DP students. Get Math AA, Physics, Chemistry, Economics, English, IA and exam support through IB Gram.",
    h1: "IB Tutors in Delhi for PYP, MYP and DP Students",
    introSummary:
      "Delhi families often need IB tutoring that works across busy school routes, embassy and international communities, and NCR-based specialist availability.",
    ogTitle: "IB Tutors in Delhi | IB Gram",
    ogDescription:
      "City-wise IB tutoring in Delhi with online, home and hybrid options for PYP, MYP and DP learners.",
    ogImage: OG_IMAGE,
    imageAltText: "IB tutors in Delhi for international school students",
    robotsTag: "index, follow",
    breadcrumbTitle: "IB Tutors in Delhi",
    cityOverview: [
      "Delhi's IB tutoring demand is shaped by a mix of embassy communities, international school families, central and south Delhi residential pockets, and students who travel across NCR for school. Many parents want academic support that can be arranged without turning every weekday into a commute problem.",
      "The most common Delhi needs include DP subject depth, English and humanities writing, Math AA or Math AI confidence, and assignment planning for students who are balancing school deadlines with extracurricular commitments. Some families prefer home tutoring in South Delhi or central locations, while others choose online tutoring to access a stronger subject specialist.",
      "A Delhi tutoring plan also needs to respect how different school calendars and family routines work. Some students need early help before an MYP submission becomes stressful; others wait until mock papers expose gaps in Physics HL/SL, Chemistry HL/SL or Economics essay structure. The right match is usually the tutor who can combine IB assessment language with a schedule the family can actually sustain.",
      "IB Gram helps parents think beyond the phrase tutor near me. The match is based on programme, subject, level, assessment requirement, timing, mode and learning style so the recommendation is useful for the student rather than simply nearby.",
    ],
    premiumAreas: [
      {
        name: "Vasant Vihar",
        slug: "vasant-vihar",
        description:
          "A high-demand pocket for international school and embassy-community families who often prefer discreet, structured home or hybrid lessons.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Greater Kailash",
        slug: "greater-kailash",
        description:
          "Useful for South Delhi families seeking DP Math, sciences and English support with flexible evening schedules.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Saket",
        slug: "saket",
        description:
          "A practical base for school support, MYP foundations and online backup for students across South Delhi.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Chanakyapuri",
        slug: "chanakyapuri",
        description:
          "Often relevant for families connected with diplomatic and international school communities.",
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    nearbyAreas: ["Defence Colony", "Hauz Khas", "New Friends Colony", "Panchsheel Park", "Green Park", "Jor Bagh"],
    nearbyCities: [
      {
        cityName: "Gurugram",
        citySlug: "gurugram",
        description: "Gurugram has strong demand for home and hybrid IB tutoring across premium residential areas.",
      },
      {
        cityName: "Noida",
        citySlug: "noida",
        description: "Noida is relevant for families comparing NCR tutor availability and online specialist support.",
      },
      {
        cityName: "Ghaziabad",
        citySlug: "ghaziabad",
        description: "Ghaziabad is useful for Delhi NCR families reviewing nearby and online IB support.",
      },
    ],
    serviceAreaText:
      "Home tutoring may be possible in select South Delhi, central Delhi and nearby residential pockets. Online tutoring is available across Delhi for all supported IB programmes and subjects, including short revision cycles before school mocks and longer weekly plans for students rebuilding foundations.",
    latitude: 28.6139,
    longitude: 77.209,
    timezone: "Asia/Kolkata",
    cityPhoneNumber: "+919582706764",
    cityWhatsappNumber: "+919582706764",
    localCtaText: "Book an IB demo class in Delhi",
    ibProgramsAvailable: [
      {
        slug: "pyp",
        name: "Primary Years Programme",
        ageRange: "Ages 3 to 12",
        description:
          "Reading, numeracy, inquiry routines, presentation confidence and age-appropriate academic habits.",
        cityNote:
          "Delhi PYP families often ask for tutors who can build confidence without making early learning too exam-like.",
      },
      {
        slug: "myp",
        name: "Middle Years Programme",
        ageRange: "Ages 11 to 16",
        description:
          "Conceptual understanding, assignment criteria, interdisciplinary thinking and project planning.",
        cityNote:
          "MYP support in Delhi often focuses on writing clarity, reflection quality and stronger evidence use.",
      },
      {
        slug: "dp",
        name: "Diploma Programme",
        ageRange: "Ages 16 to 19",
        description:
          "HL and SL subject tutoring, IA support, TOK and EE planning, exam revision and weekly accountability.",
        cityNote:
          "Delhi DP families frequently use online or hybrid tutoring to access better subject fit across NCR.",
      },
    ],
    ibSubjectsAvailable: [
      {
        slug: "math-aa-hl",
        name: "Math AA HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description: "Functions, calculus, proof, vectors, exam strategy and IA direction.",
        cityNote: "Math AA demand in Delhi is high among students planning quantitative university pathways.",
      },
      {
        slug: "math-ai-hl",
        name: "Math AI HL",
        level: "HL and SL pathways",
        inventory: "moderate",
        description: "Statistics, modelling, technology-led practice, probability and data interpretation.",
        cityNote: "AI tutoring is useful for students who need applied question practice and calculator fluency.",
      },
      {
        slug: "physics",
        name: "Physics",
        level: "HL and SL",
        inventory: "strong",
        description: "Concept clarity, problem solving, data analysis and timed paper practice.",
        cityNote: "Delhi physics requests often come from students who need consistent practice between school tests.",
      },
      {
        slug: "chemistry",
        name: "Chemistry",
        level: "HL and SL",
        inventory: "moderate",
        description: "Quantitative chemistry, organic chemistry, bonding, energetics and IA planning.",
        cityNote: "Chemistry support is often paired with revision planning before school mock exams.",
      },
      {
        slug: "economics",
        name: "Economics",
        level: "HL and SL",
        inventory: "strong",
        description: "Diagrams, evaluation, real-world examples, essay structure and IA commentary support.",
        cityNote: "Delhi humanities students often need help turning strong opinions into precise IB responses.",
      },
      {
        slug: "english",
        name: "English A",
        level: "HL and SL",
        inventory: "strong",
        description: "Textual analysis, oral preparation, comparative essays and paper-specific practice.",
        cityNote: "English tutoring is frequently requested for thesis building, close reading and sharper commentary.",
      },
    ],
    gradeRange: "Grade 1 to Grade 12",
    dpSubjectLevels: "HL and SL",
    mathCoverage: "Math AA HL, Math AA SL, Math AI HL and Math AI SL",
    scienceCoverage: "Physics HL/SL, Chemistry HL/SL and Biology HL/SL, subject to tutor availability",
    humanitiesCoverage: "Economics, Business Management, Psychology, History and global politics support where available",
    languageCoverage: "English A, English B, Hindi, French, Spanish and other languages based on availability",
    assessmentSupport: "IA planning, EE mentoring, TOK support, school assignments, mock revision and past-paper practice",
    curriculumNotes:
      "Delhi students often need tutors who understand both IB academic expectations and the practical reality of cross-city schedules.",
    examSessionFocus: "May 2026 and November 2026 exam support",
    ibSchoolsCity: [
      {
        name: "The British School New Delhi",
        slug: "the-british-school-new-delhi",
        area: "Chanakyapuri",
        description:
          "Families connected with this school ecosystem often ask for DP subject mentoring and writing support.",
        typicalNeeds: ["DP Math and sciences", "English and humanities writing", "IA planning"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "American Embassy School",
        slug: "american-embassy-school",
        area: "Chanakyapuri",
        description:
          "International community families often need flexible tutoring that can adjust around travel and activities.",
        typicalNeeds: ["Flexible online tutoring", "Subject reinforcement", "University pathway support"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "DPS International Saket",
        slug: "dps-international-saket",
        area: "Saket",
        description:
          "South Delhi families frequently ask for MYP and DP support that balances school assignments and exam preparation.",
        typicalNeeds: ["MYP writing support", "DP Math", "Science revision"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
    ],
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    schoolSpecificNeeds: [
      "DP subject specialists for students with cross-city schedules",
      "MYP writing, research and reflection guidance",
      "IA and EE planning without crossing academic honesty boundaries",
      "Online backup for late evening doubt-clearing",
    ],
    schoolAreaMapping: [
      {
        area: "Chanakyapuri and Vasant Vihar",
        schools: ["The British School New Delhi", "American Embassy School"],
        note: "Families in these areas often value flexible timings and tutors with international school context.",
      },
      {
        area: "Saket and Greater Kailash",
        schools: ["DPS International Saket"],
        note: "South Delhi families often request home lessons where travel is practical and online support for specialist subjects.",
      },
    ],
    verifiedTutorCountCity: 0,
    homeTutorAvailable: true,
    onlineTutorAvailable: true,
    hybridTutorAvailable: true,
    subjectsWithStrongInventory: ["Math AA", "Physics", "Economics", "English"],
    subjectsWithLimitedInventory: ["Visual Arts", "Theatre", "some language combinations"],
    averageMatchingTime: "Common subject requests are reviewed for a shortlist within 24 to 48 hours where availability permits.",
    demoClassAvailable: true,
    tutorVerificationProcess: [
      "Profile and identity review",
      "IB subject and level screening",
      "Teaching clarity review",
      "Availability and communication checks",
      "Ongoing parent and student feedback review",
    ],
    teachingModeNotes:
      "Delhi families often choose hybrid support: home tutoring where travel is realistic, and online tutoring when subject expertise or schedule flexibility is more important.",
    heroTitle: "Find Verified IB Tutors in Delhi",
    heroSubtitle:
      "Personalized IB tutoring for Delhi PYP, MYP and DP students across Math AA, Math AI, sciences, economics, English, IA support and exam revision.",
    primaryCtaText: "Book a Free Academic Consultation",
    secondaryCtaText: "Find IB Tutor Near Me",
    trustPoints: [
      "IB-aligned tutor screening",
      "Online, home and hybrid options",
      "Subject-level matching for HL and SL",
      "Independent school support with clear disclaimers",
    ],
    cityAcademicIntro: [
      "Delhi's academic map is spread out, and that affects tutoring. A student in Vasant Vihar may need a home tutor twice a week, while a DP student in Greater Kailash may do better with an online Math AA specialist from a wider network. IB Gram treats location as one matching factor, not the only factor.",
      "The first priority is academic fit. For PYP, that can mean patient foundation support. For MYP, it can mean help with criteria, research habits and written reflection. For DP, it usually means subject-level expertise, assessment planning and a revision rhythm that protects school deadlines.",
      "Parents can use this page to understand Delhi coverage, subject availability, school ecosystem considerations and the safer no-overclaim approach IB Gram follows when recommending tutors.",
    ],
    programSectionTitle: "IB Programs We Support in Delhi",
    subjectSectionTitle: "IB Subjects Covered by Delhi Tutors",
    areaSectionTitle: "IB Tutors Available Across Delhi",
    schoolSectionTitle: "Support for Delhi International School Students",
    matchingProcessSteps: [
      "Share programme, grade, subject level, school deadlines, location and preferred mode.",
      "IB Gram identifies whether the student needs foundation support, assessment support, exam revision or weekly mentoring.",
      "Tutors are shortlisted by IB familiarity, subject depth, teaching style, schedule and mode fit.",
      "A demo or diagnostic class is arranged where available.",
      "The learning plan is adjusted using topic progress, assignment needs and parent feedback.",
    ],
    localTestimonials: [
      {
        title: "Common Delhi parent request",
        detail:
          "Families often ask for strong online DP tutors because Delhi travel can make a perfect home-tutor match impractical.",
        sourceLabel: "Consultation theme",
      },
      {
        title: "Writing support pattern",
        detail:
          "English, economics and humanities students frequently need help with argument structure, evaluation and command terms.",
        sourceLabel: "Learning need pattern",
      },
      {
        title: "Schedule pattern",
        detail:
          "Hybrid plans are useful for Delhi students who need home accountability plus quick online revision before tests.",
        sourceLabel: "Scheduling insight",
      },
    ],
    cityFaqs: [
      {
        question: "Do you provide IB home tutors in South Delhi?",
        answer:
          "Home tutoring may be possible in areas such as Vasant Vihar, Greater Kailash, Saket and nearby pockets depending on tutor travel and timing. Online support is available across Delhi.",
      },
      {
        question: "Can Delhi students get IB DP Math AA HL support?",
        answer:
          "Yes. IB Gram can shortlist tutors for Math AA HL based on the student's current topics, exam session, school deadlines and preferred learning mode.",
      },
      {
        question: "Is online tutoring a good option for Delhi IB students?",
        answer:
          "Often yes. Online tutoring can give Delhi students access to stronger subject specialists, especially for HL subjects, IA review and urgent revision.",
      },
      {
        question: "Which IB subjects are commonly requested in Delhi?",
        answer:
          "Math AA, Math AI, Physics, Chemistry, Economics and English are common requests. Other subjects can be reviewed based on availability.",
      },
      {
        question: "Can tutors help with IA and EE work?",
        answer:
          "Tutors can guide structure, topic clarity, research direction and academic understanding. They should not write or complete assessed work for the student.",
      },
      {
        question: "Is IB Gram affiliated with schools in Delhi?",
        answer: SCHOOL_DISCLAIMER,
      },
      {
        question: "How quickly can I get a tutor match in Delhi?",
        answer:
          "For common subjects, IB Gram usually reviews availability within 24 to 48 hours. Exact timing depends on subject, level, mode and schedule.",
      },
    ],
    bottomCtaText:
      "Share your child's IB programme, subject level, Delhi location and preferred tutoring mode. IB Gram will help you find a practical shortlist.",
    schema: {
      schemaPageType: "WebPage",
      schemaName: "IB Tutors in Delhi",
      schemaDescription: "City-wise IB tutoring support in Delhi for PYP, MYP and DP students.",
      schemaUrl: absoluteUrl(buildCityPath("delhi")),
      schemaBreadcrumbs: ["Home", "IB Tutors", "Delhi"],
      schemaOrganizationName: "IB Gram",
      schemaLogoUrl: absoluteUrl("/globe.svg"),
      schemaContactPhone: "+919582706764",
      schemaContactEmail: "ibgram24@gmail.com",
      schemaServiceName: "IB Tutoring Services in Delhi",
      schemaAreaServed: ["Delhi", "Vasant Vihar", "Greater Kailash", "Saket", "Chanakyapuri"],
      schemaSubjects: ["PYP", "MYP", "DP", "Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
      schemaFaqJson: true,
    },
  },
  {
    pageId: "IBG_CITY_NOIDA",
    pageType: "city_homepage",
    cityId: "NOI001",
    cityName: "Noida",
    citySlug: "noida",
    stateName: "Uttar Pradesh",
    countryName: "India",
    status: "live",
    indexFlag: "index",
    canonicalUrl: absoluteUrl(buildCityPath("noida")),
    canonicalTarget: absoluteUrl(buildCityPath("noida")),
    priorityScore: 8.5,
    demandScore: 82,
    demandBand: "high",
    contentUniquenessScore: 84,
    lastUpdated: "2026-05-04",
    reviewOwner: "Content Team",
    primaryKeyword: "IB tutors in Noida",
    secondaryKeywords: [
      "IB home tutors Noida",
      "IB DP tutor Noida",
      "IB Math AA tutor Noida",
      "IB tutors near Sector 50 Noida",
    ],
    searchIntent: "Find IB tutors in Noida for school support, DP subjects and online or home learning.",
    metaTitle: "IB Tutors in Noida for PYP, MYP & DP",
    metaDescription:
      "Find IB tutors in Noida for PYP, MYP and DP students. Get Math AA, Math AI, Physics, Chemistry, Economics, English and IA support with IB Gram.",
    h1: "IB Tutors in Noida for PYP, MYP and DP Students",
    introSummary:
      "Noida IB families often need flexible academic support across expressway communities, central sectors and nearby school corridors.",
    ogTitle: "IB Tutors in Noida | IB Gram",
    ogDescription:
      "IB tutoring in Noida with verified tutor matching for PYP, MYP, DP, home tuition, online lessons and hybrid support.",
    ogImage: OG_IMAGE,
    imageAltText: "IB tutors in Noida for international school students",
    robotsTag: "index, follow",
    breadcrumbTitle: "IB Tutors in Noida",
    cityOverview: [
      "Noida's international school demand is spread across central sectors, expressway communities and Greater Noida corridors. Families often need a mix of home support and online subject specialists because commute patterns can change sharply by time of day.",
      "The city has a strong need for MYP foundations, DP Math, sciences, economics, English and assessment support. Parents often ask for tutors who can help students stay consistent through school projects, unit tests, IA deadlines and exam preparation.",
      "For many Noida parents, the pressure point is the jump from classroom understanding to IB-ready output. A student may know the Physics concept but lose marks on data handling, or understand an Economics case but need sharper diagrams and evaluation. Younger students may need help building research habits before MYP criteria become demanding. Good tutoring here is local in schedule, but exact in how it reads IB assessment.",
      "IB Gram's Noida page helps parents understand where tutoring may be available, which subjects are commonly requested, and why a hybrid plan can be more practical than insisting on a nearby tutor for every need.",
    ],
    premiumAreas: [
      {
        name: "Sector 50",
        slug: "sector-50",
        description:
          "A central residential area where families often request MYP foundations, DP Math support and weekly home tutoring.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Sector 62",
        slug: "sector-62",
        description:
          "Useful for families near institutional and office corridors who prefer evening online or hybrid support.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Noida Expressway",
        slug: "noida-expressway",
        description:
          "A large catchment for school communities where online tutoring can reduce travel pressure during DP exam months.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Sector 128",
        slug: "sector-128",
        description:
          "Relevant for families near expressway school corridors and premium residential communities.",
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    nearbyAreas: ["Sector 44", "Sector 45", "Sector 93", "Sector 137", "Greater Noida West", "Indirapuram"],
    nearbyCities: [
      {
        cityName: "Delhi",
        citySlug: "delhi",
        description: "Delhi is a nearby NCR tutoring market for families seeking wider online and hybrid options.",
      },
      {
        cityName: "Gurugram",
        citySlug: "gurugram",
        description: "Gurugram has a dense IB tutoring ecosystem and useful specialist overlap for NCR families.",
      },
      {
        cityName: "Ghaziabad",
        citySlug: "ghaziabad",
        description: "Ghaziabad is relevant for families comparing Noida-side NCR tutoring options.",
      },
      {
        cityName: "Greater Noida",
        citySlug: "greater-noida",
        description: "Greater Noida is useful for expressway families reviewing IB tutor availability.",
      },
    ],
    serviceAreaText:
      "Home tutoring may be available in Noida sectors and expressway communities depending on tutor schedules. Online tutoring is available across Noida and nearby NCR areas, which is often useful when the strongest IB Math AA HL tutor, IB Math AI HL tutor or sciences mentor is not close enough for weekly travel.",
    latitude: 28.5355,
    longitude: 77.391,
    timezone: "Asia/Kolkata",
    cityPhoneNumber: "+919582706764",
    cityWhatsappNumber: "+919582706764",
    localCtaText: "Book an IB demo class in Noida with a tutor match reviewed for programme, level, subject and schedule fit",
    ibProgramsAvailable: [
      {
        slug: "pyp",
        name: "Primary Years Programme",
        ageRange: "Ages 3 to 12",
        description: "Inquiry, reading, numeracy, early research and confidence-building support.",
        cityNote: "Noida PYP families often want foundational support that stays aligned with school inquiry units.",
      },
      {
        slug: "myp",
        name: "Middle Years Programme",
        ageRange: "Ages 11 to 16",
        description: "Conceptual foundations, criterion language, assignment planning and personal project habits.",
        cityNote: "MYP tutoring in Noida frequently focuses on turning broad ideas into precise, well-evidenced work.",
      },
      {
        slug: "dp",
        name: "Diploma Programme",
        ageRange: "Ages 16 to 19",
        description: "HL and SL subject tutoring, IA support, exam revision, EE and TOK planning.",
        cityNote: "Noida DP students often need a realistic weekly plan that blends school deadlines with subject revision.",
      },
    ],
    ibSubjectsAvailable: [
      {
        slug: "math-aa-hl",
        name: "Math AA HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description: "Functions, calculus, proof, vectors, exam practice and IA planning.",
        cityNote: "Math AA is frequently requested by Noida students preparing for engineering, finance and quantitative degrees.",
      },
      {
        slug: "math-ai-hl",
        name: "Math AI HL",
        level: "HL and SL pathways",
        inventory: "moderate",
        description: "Statistics, modelling, technology fluency, probability and applied calculus.",
        cityNote: "AI support is useful for Noida students who need more practice interpreting data-heavy questions.",
      },
      {
        slug: "physics",
        name: "Physics",
        level: "HL and SL",
        inventory: "moderate",
        description: "Mechanics, electricity, waves, data response and exam technique.",
        cityNote: "Physics tutoring often focuses on converting understood concepts into markscheme-ready responses.",
      },
      {
        slug: "chemistry",
        name: "Chemistry",
        level: "HL and SL",
        inventory: "moderate",
        description: "Stoichiometry, bonding, kinetics, organic chemistry and IA support.",
        cityNote: "Chemistry students in Noida often ask for regular problem sets and clearer practical connections.",
      },
      {
        slug: "economics",
        name: "Economics",
        level: "HL and SL",
        inventory: "moderate",
        description: "Micro, macro and global economics with diagrams, evaluation and essay planning.",
        cityNote: "Economics tutoring is helpful for students who need stronger structure and current examples.",
      },
      {
        slug: "english",
        name: "English A",
        level: "HL and SL",
        inventory: "limited",
        description: "Text analysis, oral support, comparative essays and writing feedback.",
        cityNote: "English requests are reviewed based on availability and exact school texts where relevant.",
      },
    ],
    gradeRange: "Grade 1 to Grade 12",
    dpSubjectLevels: "HL and SL",
    mathCoverage: "Math AA HL, Math AA SL, Math AI HL and Math AI SL",
    scienceCoverage: "Physics HL/SL, Chemistry HL/SL and Biology HL/SL, subject to tutor availability",
    humanitiesCoverage: "Economics, Business Management and Psychology support where available",
    languageCoverage: "English A, English B, Hindi, French and other languages based on availability",
    assessmentSupport: "IA topic planning, EE mentoring, TOK direction, mock exams and past-paper practice",
    curriculumNotes:
      "Noida students benefit from tutors who can connect IB criteria, school assignments and exam technique into one coherent weekly plan.",
    examSessionFocus: "May 2026 and November 2026 exam support",
    ibSchoolsCity: [
      {
        name: "Pathways School Noida",
        slug: "pathways-school-noida",
        area: "Noida region",
        description: "Families in this ecosystem often ask for PYP, MYP and DP support across the full IB continuum.",
        typicalNeeds: ["PYP inquiry", "MYP criteria", "DP Math and sciences"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Genesis Global School",
        slug: "genesis-global-school",
        area: "Noida Expressway",
        description: "Expressway families often prefer hybrid support around school travel and activity schedules.",
        typicalNeeds: ["Hybrid tutoring", "MYP foundations", "DP revision"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Step by Step School",
        slug: "step-by-step-school",
        area: "Sector 132",
        description: "Families around this school corridor often seek strong writing, math and science support.",
        typicalNeeds: ["English writing", "Math support", "Science concepts"],
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    schoolSpecificNeeds: [
      "MYP criteria and assignment structure",
      "DP Math and sciences for HL and SL students",
      "Exam revision that fits expressway commute patterns",
      "Online specialist support for less common subjects",
    ],
    schoolAreaMapping: [
      {
        area: "Noida Expressway",
        schools: ["Genesis Global School", "Step by Step School"],
        note: "Hybrid support is often more practical for families around the expressway corridor.",
      },
      {
        area: "Central Noida",
        schools: ["Pathways School Noida"],
        note: "Families often request weekly structure and home tutoring where timing works.",
      },
    ],
    verifiedTutorCountCity: 0,
    homeTutorAvailable: true,
    onlineTutorAvailable: true,
    hybridTutorAvailable: true,
    subjectsWithStrongInventory: ["Math AA", "Math AI"],
    subjectsWithLimitedInventory: ["Visual Arts", "Theatre", "some languages"],
    averageMatchingTime: "Availability is usually reviewed within 24 to 48 hours for common subjects.",
    demoClassAvailable: true,
    tutorVerificationProcess: [
      "Tutor profile screening",
      "IB subject and level review",
      "Teaching clarity review",
      "Schedule and mode fit check",
      "Feedback monitoring after sessions begin",
    ],
    teachingModeNotes:
      "Noida families often use home tutoring for weekly accountability and online tutoring for specialist DP subjects or last-mile revision.",
    heroTitle: "Find Verified IB Tutors in Noida",
    heroSubtitle:
      "IB PYP, MYP and DP tutoring for Noida students across Math AA, Math AI, Physics, Chemistry, Economics, English and assessment support.",
    primaryCtaText: "Book a Free Academic Consultation",
    secondaryCtaText: "Find IB Tutor Near Me",
    trustPoints: [
      "Programme-specific IB matching",
      "Home and online tutoring options",
      "Demo class available where possible",
      "Safe independent school references",
    ],
    cityAcademicIntro: [
      "Noida's tutoring challenge is practical as much as academic. A nearby tutor may be useful for weekly accountability, but a DP student may need a more specialized online tutor for Math AA, Physics or Economics. IB Gram helps families compare both realities.",
      "The matching process starts with the student's actual need. Is the issue conceptual confidence, assignment structure, exam technique, IA planning, or consistency? Once that is clear, mode and location become easier to decide.",
      "Families around Sector 50, Sector 62 and the Noida Expressway often ask whether home tutoring and online tutoring can be combined. A blended plan can work well: home sessions keep younger students consistent, while online sessions help DP students access specialist support for IA, EE and TOK support, Physics HL/SL, Chemistry HL/SL or Economics without losing time to cross-city travel.",
      "This Noida page gives parents a local overview of areas, nearby NCR links, school ecosystems, subjects, tutoring modes and FAQs so the first conversation with IB Gram is more focused.",
    ],
    programSectionTitle: "IB Programs We Support in Noida",
    subjectSectionTitle: "IB Subjects Covered by Noida Tutors",
    areaSectionTitle: "IB Tutors Available Across Noida",
    schoolSectionTitle: "Support for Noida International School Students",
    matchingProcessSteps: [
      "Share programme, grade, subject level, location, school deadlines and preferred schedule.",
      "IB Gram identifies the learning need and whether home, online or hybrid tutoring is most practical.",
      "A shortlist is prepared around subject fit, IB familiarity, teaching style and availability.",
      "A demo or first diagnostic class helps check clarity and comfort.",
      "Progress is reviewed through topic plans, practice work and parent feedback.",
    ],
    localTestimonials: [
      {
        title: "Common Noida parent request",
        detail:
          "Parents often ask for a tutor who can support school assignments while also building DP exam discipline.",
        sourceLabel: "Consultation theme",
      },
      {
        title: "Expressway scheduling pattern",
        detail:
          "Families around expressway sectors frequently prefer hybrid plans to reduce travel load during school weeks.",
        sourceLabel: "Scheduling insight",
      },
      {
        title: "Subject pattern",
        detail:
          "Math AA, Math AI and sciences are common starting points, followed by IA and exam revision support.",
        sourceLabel: "Learning need pattern",
      },
    ],
    cityFaqs: [
      {
        question: "Do you provide IB home tutors in Noida?",
        answer:
          "Home tutoring may be available in central Noida sectors and expressway communities depending on tutor travel and timing. Online tutoring is available across Noida.",
      },
      {
        question: "Can I find an IB Math AA HL tutor in Noida?",
        answer:
          "Yes, IB Gram can review Math AA HL requirements and shortlist tutors based on topic needs, assessment timeline and availability.",
      },
      {
        question: "Do Noida students get IA and EE support?",
        answer:
          "Yes. Tutors can help with topic direction, structure, academic understanding and feedback, while keeping the student's own work and academic honesty intact.",
      },
      {
        question: "Which areas of Noida are covered?",
        answer:
          "IB Gram can review requests from Sector 50, Sector 62, Noida Expressway, Sector 137, Sector 93 and nearby areas. Actual home tutoring depends on availability.",
      },
      {
        question: "Is IB Gram affiliated with Noida schools?",
        answer: SCHOOL_DISCLAIMER,
      },
      {
        question: "Are online tutors available for Noida IB students?",
        answer:
          "Yes. Online tutoring is often the fastest way to access strong DP subject specialists, especially for HL subjects and urgent revision.",
      },
      {
        question: "Can I request a hybrid tutoring plan?",
        answer:
          "Yes. Many Noida families use home sessions for structure and online sessions for revision, IA review or doubt clearing.",
      },
    ],
    bottomCtaText:
      "Share your Noida sector, IB programme, subject level and preferred tutoring mode. IB Gram will help you evaluate the best-fit support, including whether the student needs a local home tutor for accountability, an online DP specialist for advanced topics, or a hybrid plan that keeps school deadlines, revision and family travel realistic.",
    schema: {
      schemaPageType: "WebPage",
      schemaName: "IB Tutors in Noida",
      schemaDescription: "City-wise IB tutoring support in Noida for PYP, MYP and DP students.",
      schemaUrl: absoluteUrl(buildCityPath("noida")),
      schemaBreadcrumbs: ["Home", "IB Tutors", "Noida"],
      schemaOrganizationName: "IB Gram",
      schemaLogoUrl: absoluteUrl("/globe.svg"),
      schemaContactPhone: "+919582706764",
      schemaContactEmail: "ibgram24@gmail.com",
      schemaServiceName: "IB Tutoring Services in Noida",
      schemaAreaServed: ["Noida", "Sector 50", "Sector 62", "Noida Expressway", "Sector 137"],
      schemaSubjects: ["PYP", "MYP", "DP", "Math AA", "Math AI", "Physics", "Chemistry", "Economics"],
      schemaFaqJson: true,
    },
  },
  {
    pageId: "IBG_CITY_MUMBAI",
    pageType: "city_homepage",
    cityId: "MUM001",
    cityName: "Mumbai",
    citySlug: "mumbai",
    stateName: "Maharashtra",
    countryName: "India",
    status: "live",
    indexFlag: "index",
    canonicalUrl: absoluteUrl(buildCityPath("mumbai")),
    canonicalTarget: absoluteUrl(buildCityPath("mumbai")),
    priorityScore: 8.8,
    demandScore: 87,
    demandBand: "high",
    contentUniquenessScore: 87,
    lastUpdated: "2026-05-04",
    reviewOwner: "Content Team",
    primaryKeyword: "IB tutors in Mumbai",
    secondaryKeywords: [
      "IB home tutors Mumbai",
      "IB DP tutor Mumbai",
      "IB tutors Bandra",
      "IB Math tutor Mumbai",
    ],
    searchIntent: "Find IB tutors in Mumbai for international school students, DP exams and school assessment support.",
    metaTitle: "IB Tutors in Mumbai for PYP, MYP & DP",
    metaDescription:
      "Find IB tutors in Mumbai for PYP, MYP and DP students across Math AA, Math AI, Physics, Chemistry, Economics, English, IA and exam support.",
    h1: "IB Tutors in Mumbai for PYP, MYP and DP Students",
    introSummary:
      "Mumbai IB families need tutoring that respects demanding school calendars, traffic realities, high academic expectations and subject-specialist availability.",
    ogTitle: "IB Tutors in Mumbai | IB Gram",
    ogDescription:
      "IB tutoring in Mumbai with home, online and hybrid support for PYP, MYP and DP students.",
    ogImage: OG_IMAGE,
    imageAltText: "IB tutors in Mumbai for international school students",
    robotsTag: "index, follow",
    breadcrumbTitle: "IB Tutors in Mumbai",
    cityOverview: [
      "Mumbai has a mature international school ecosystem and a high concentration of families seeking specialist IB support. The practical challenge is usually not demand; it is matching the right tutor to the right area, subject and schedule in a city where travel can quickly consume academic energy.",
      "Parents often request DP Math AA, Math AI, sciences, economics, English and IA support. Younger students may need MYP criteria guidance or PYP foundation support. Mumbai's school calendars, extracurricular load and commute patterns make online and hybrid tutoring especially useful for consistent progress.",
      "The local academic pattern is usually intense but time-constrained. Students may have strong school support and still need a separate space to slow down, repair gaps and practise with feedback. An IB Math AA HL tutor may focus on calculus and timed papers, while an Economics tutor may work on diagrams, evaluation and IA commentary. The goal is not more hours for the sake of it; it is a clearer weekly rhythm that protects energy.",
      "IB Gram's Mumbai city page focuses on safe, practical guidance: which areas are commonly served, when home tutoring may work, when online tutoring is stronger, how school references are handled without implying partnership, and what parents should share for a better match.",
    ],
    premiumAreas: [
      {
        name: "Bandra",
        slug: "bandra",
        description:
          "A common premium catchment for home and hybrid tutoring, especially for DP students who need strong weekly structure.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Juhu",
        slug: "juhu",
        description:
          "Often relevant for families seeking IB English, Math and science support with flexible evening options.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Powai",
        slug: "powai",
        description:
          "A practical hub for online and hybrid support, especially for students balancing school, activities and test preparation.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "South Mumbai",
        slug: "south-mumbai",
        description:
          "Useful for families seeking high-quality subject specialists where travel feasibility must be checked carefully.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
    ],
    nearbyAreas: ["Worli", "Lower Parel", "Andheri", "Santacruz", "Malabar Hill", "Thane"],
    nearbyCities: [
      {
        cityName: "Pune",
        citySlug: "pune",
        description: "Pune is a priority Maharashtra city for IB home, online and hybrid tutoring.",
      },
      {
        cityName: "Thane",
        citySlug: "thane",
        description: "Thane is relevant for Mumbai-region families comparing local and online IB support.",
      },
      {
        cityName: "Navi Mumbai",
        citySlug: "navi-mumbai",
        description: "Navi Mumbai families often compare Mumbai specialists with node-wise home tutoring options.",
      },
    ],
    serviceAreaText:
      "Home tutoring in Mumbai depends strongly on tutor location and travel windows. Online tutoring is available across Mumbai, Navi Mumbai and surrounding areas for supported IB subjects, with hybrid plans reviewed when a student needs both in-person accountability and specialist online support.",
    latitude: 19.076,
    longitude: 72.8777,
    timezone: "Asia/Kolkata",
    cityPhoneNumber: "+919582706764",
    cityWhatsappNumber: "+919582706764",
    localCtaText: "Book an IB demo class in Mumbai",
    ibProgramsAvailable: [
      {
        slug: "pyp",
        name: "Primary Years Programme",
        ageRange: "Ages 3 to 12",
        description: "Inquiry support, reading, numeracy, project confidence and early learning habits.",
        cityNote: "Mumbai PYP families often want calm academic reinforcement that does not crowd the child's school day.",
      },
      {
        slug: "myp",
        name: "Middle Years Programme",
        ageRange: "Ages 11 to 16",
        description: "Criteria-focused writing, conceptual foundations, project planning and subject confidence.",
        cityNote: "MYP support in Mumbai often focuses on clearer written evidence, reflection and time management.",
      },
      {
        slug: "dp",
        name: "Diploma Programme",
        ageRange: "Ages 16 to 19",
        description: "HL and SL tutoring, IA support, EE and TOK planning, mock revision and exam technique.",
        cityNote: "Mumbai DP students often need a tutor who can coordinate with intense school calendars and commute constraints.",
      },
    ],
    ibSubjectsAvailable: [
      {
        slug: "math-aa-hl",
        name: "Math AA HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description: "Calculus, functions, proof, vectors, timed papers and IA topic support.",
        cityNote: "Math AA is a high-demand subject for Mumbai students targeting engineering, economics and data-heavy pathways.",
      },
      {
        slug: "math-ai-hl",
        name: "Math AI HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description: "Statistics, modelling, probability, technology use and applied calculus.",
        cityNote: "Math AI support is useful for students who need confidence with data interpretation and application-heavy questions.",
      },
      {
        slug: "physics",
        name: "Physics",
        level: "HL and SL",
        inventory: "moderate",
        description: "Concept building, problem solving, data-based questions and exam strategy.",
        cityNote: "Mumbai physics requests often focus on structured revision and paper practice around school calendars.",
      },
      {
        slug: "chemistry",
        name: "Chemistry",
        level: "HL and SL",
        inventory: "moderate",
        description: "Organic chemistry, stoichiometry, bonding, energetics, kinetics and IA support.",
        cityNote: "Chemistry tutoring often combines topic repair with weekly problem practice.",
      },
      {
        slug: "economics",
        name: "Economics",
        level: "HL and SL",
        inventory: "strong",
        description: "Diagrams, evaluation, data response, IA commentary and essay structure.",
        cityNote: "Economics support in Mumbai often includes current examples and sharper evaluation language.",
      },
      {
        slug: "english",
        name: "English A",
        level: "HL and SL",
        inventory: "strong",
        description: "Paper 1, Paper 2, individual oral preparation, close reading and writing feedback.",
        cityNote: "English support is commonly requested by students who need more precise interpretation and thesis control.",
      },
    ],
    gradeRange: "Grade 1 to Grade 12",
    dpSubjectLevels: "HL and SL",
    mathCoverage: "Math AA HL, Math AA SL, Math AI HL and Math AI SL",
    scienceCoverage: "Physics HL/SL, Chemistry HL/SL and Biology HL/SL, subject to tutor availability",
    humanitiesCoverage: "Economics, Business Management, Psychology and History support where available",
    languageCoverage: "English A, English B, Hindi, French, Spanish and other languages based on availability",
    assessmentSupport: "IA guidance, EE mentoring, TOK direction, school assignment review and exam revision",
    curriculumNotes:
      "Mumbai students often need concise, high-quality lessons that convert limited weekly time into visible assessment progress.",
    examSessionFocus: "May 2026 and November 2026 exam support",
    ibSchoolsCity: [
      {
        name: "Dhirubhai Ambani International School",
        slug: "dhirubhai-ambani-international-school",
        area: "BKC",
        description: "Families in this ecosystem often ask for DP subject depth and high-expectation assessment support.",
        typicalNeeds: ["DP Math", "Economics", "English writing"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Oberoi International School",
        slug: "oberoi-international-school",
        area: "Goregaon",
        description: "Parents often request MYP and DP support that can work around travel and activity schedules.",
        typicalNeeds: ["MYP support", "DP sciences", "IA support"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Ecole Mondiale World School",
        slug: "ecole-mondiale-world-school",
        area: "Juhu",
        description: "Families around Juhu often ask for home or hybrid tutoring with strong school-calendar awareness.",
        typicalNeeds: ["PYP and MYP support", "DP English", "Math AI"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Aditya Birla World Academy",
        slug: "aditya-birla-world-academy",
        area: "South Mumbai",
        description: "South Mumbai families often need careful mode planning because tutor travel can be difficult.",
        typicalNeeds: ["Online specialists", "DP humanities", "Exam revision"],
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    schoolSpecificNeeds: [
      "High-level DP subject specialists",
      "MYP assignment planning and written feedback",
      "IA and EE structure support",
      "Hybrid lessons that respect Mumbai travel constraints",
    ],
    schoolAreaMapping: [
      {
        area: "Juhu and Bandra",
        schools: ["Ecole Mondiale World School", "Dhirubhai Ambani International School"],
        note: "Home tutoring can work when tutor location and timing are realistic; online backup is often useful.",
      },
      {
        area: "Goregaon and Powai",
        schools: ["Oberoi International School"],
        note: "Hybrid support often helps students keep momentum across a demanding school week.",
      },
    ],
    verifiedTutorCountCity: 0,
    homeTutorAvailable: true,
    onlineTutorAvailable: true,
    hybridTutorAvailable: true,
    subjectsWithStrongInventory: ["Math AA", "Math AI", "Economics", "English"],
    subjectsWithLimitedInventory: ["Theatre", "Visual Arts", "some languages"],
    averageMatchingTime: "Shortlist review usually begins within 24 to 48 hours for common subjects, subject to availability.",
    demoClassAvailable: true,
    tutorVerificationProcess: [
      "Profile and identity screening",
      "IB programme and subject-level review",
      "Teaching clarity assessment",
      "Mode and schedule feasibility check",
      "Feedback monitoring after the match begins",
    ],
    teachingModeNotes:
      "Mumbai families often benefit from online or hybrid tutoring because it protects academic time from travel. Home tutoring is reviewed area by area.",
    heroTitle: "Find Verified IB Tutors in Mumbai",
    heroSubtitle:
      "IB PYP, MYP and DP tutoring for Mumbai students across Math AA, Math AI, Physics, Chemistry, Economics, English, IA support and exam revision.",
    primaryCtaText: "Book a Free Academic Consultation",
    secondaryCtaText: "Find IB Tutor Near Me",
    trustPoints: [
      "IB specialist matching for Mumbai families",
      "Home, online and hybrid tutoring",
      "Assessment-aware subject support",
      "No false school affiliation claims",
    ],
    cityAcademicIntro: [
      "In Mumbai, the best tutor match often depends on both academic fit and route feasibility. A student may need a home tutor in Bandra for weekly consistency, but a stronger online specialist for IA feedback or HL revision. IB Gram helps parents decide that mix without overpromising a nearby tutor for every subject.",
      "The academic need is mapped first: PYP foundation, MYP criteria, DP subject mastery, IA direction, EE planning, TOK support or exam revision. Then the city reality is added: area, timing, traffic, online readiness and parent preference.",
      "Mumbai families also tend to ask for concise academic communication. Parents want to know what changed after a session: which topic improved, what homework was set, whether the IA question is becoming narrower, and whether mock-paper timing is improving. IB Gram encourages that clarity during matching so support stays measurable without promising guaranteed results.",
      "This page gives Mumbai parents a clear local view before they speak to IB Gram, including areas, school ecosystem references, subject support, tutoring modes and FAQs.",
    ],
    programSectionTitle: "IB Programs We Support in Mumbai",
    subjectSectionTitle: "IB Subjects Covered by Mumbai Tutors",
    areaSectionTitle: "IB Tutors Available Across Mumbai",
    schoolSectionTitle: "Support for Mumbai International School Students",
    matchingProcessSteps: [
      "Share programme, grade, subject level, school deadlines, area and preferred mode.",
      "IB Gram identifies whether the student needs foundation repair, assessment support, exam practice or weekly accountability.",
      "Tutors are shortlisted for subject depth, IB familiarity, teaching style, mode fit and availability.",
      "A demo or diagnostic class is arranged where possible.",
      "The plan is adjusted with progress notes, practice tasks and parent feedback.",
    ],
    localTestimonials: [
      {
        title: "Common Mumbai parent request",
        detail:
          "Parents often ask for high-quality online DP support because travel can make consistent home tutoring difficult.",
        sourceLabel: "Consultation theme",
      },
      {
        title: "Subject pattern",
        detail:
          "Math AA, Math AI, Economics and English are frequent requests, with sciences often added before mock exams.",
        sourceLabel: "Learning need pattern",
      },
      {
        title: "Mode pattern",
        detail:
          "Hybrid tutoring is useful when a student needs in-person accountability plus online specialist revision.",
        sourceLabel: "Scheduling insight",
      },
    ],
    cityFaqs: [
      {
        question: "Do you provide IB home tutors in Mumbai?",
        answer:
          "Home tutoring may be available in select areas such as Bandra, Juhu, Powai and South Mumbai depending on tutor travel and timing. Online tutoring is available city-wide.",
      },
      {
        question: "Can Mumbai students get DP Math AA HL support?",
        answer:
          "Yes. IB Gram can review Math AA HL needs and shortlist tutors based on topics, assessment timelines and mode preference.",
      },
      {
        question: "Is online IB tutoring effective in Mumbai?",
        answer:
          "Yes. Online tutoring is often practical in Mumbai because it reduces travel pressure and can improve access to subject specialists.",
      },
      {
        question: "Can tutors help with IA, EE and TOK?",
        answer:
          "Tutors can guide planning, structure, topic clarity and academic understanding. They should not write assessed work for the student.",
      },
      {
        question: "Which Mumbai areas are covered?",
        answer:
          "Requests from Bandra, Juhu, Powai, South Mumbai, Andheri, Worli and nearby areas can be reviewed. Home availability depends on tutor schedules.",
      },
      {
        question: "Is IB Gram affiliated with Mumbai schools?",
        answer: SCHOOL_DISCLAIMER,
      },
      {
        question: "Can I book a demo class?",
        answer:
          "A demo or first diagnostic class can be arranged where available so the student can assess teaching clarity and pace.",
      },
    ],
    bottomCtaText:
      "Share your Mumbai area, IB programme, subject level and preferred mode. IB Gram will help you compare practical home, online and hybrid options.",
    schema: {
      schemaPageType: "WebPage",
      schemaName: "IB Tutors in Mumbai",
      schemaDescription: "City-wise IB tutoring support in Mumbai for PYP, MYP and DP students.",
      schemaUrl: absoluteUrl(buildCityPath("mumbai")),
      schemaBreadcrumbs: ["Home", "IB Tutors", "Mumbai"],
      schemaOrganizationName: "IB Gram",
      schemaLogoUrl: absoluteUrl("/globe.svg"),
      schemaContactPhone: "+919582706764",
      schemaContactEmail: "ibgram24@gmail.com",
      schemaServiceName: "IB Tutoring Services in Mumbai",
      schemaAreaServed: ["Mumbai", "Bandra", "Juhu", "Powai", "South Mumbai"],
      schemaSubjects: ["PYP", "MYP", "DP", "Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
      schemaFaqJson: true,
    },
  },
  {
    pageId: "IBG_CITY_BANGALORE",
    pageType: "city_homepage",
    cityId: "BLR001",
    cityName: "Bangalore",
    citySlug: "bangalore",
    stateName: "Karnataka",
    countryName: "India",
    status: "live",
    indexFlag: "index",
    canonicalUrl: absoluteUrl(buildCityPath("bangalore")),
    canonicalTarget: absoluteUrl(buildCityPath("bangalore")),
    priorityScore: 8.7,
    demandScore: 86,
    demandBand: "high",
    contentUniquenessScore: 86,
    lastUpdated: "2026-05-04",
    reviewOwner: "Content Team",
    primaryKeyword: "IB tutors in Bangalore",
    secondaryKeywords: [
      "IB home tutors Bangalore",
      "IB DP tutor Bangalore",
      "IB Math tutor Bangalore",
      "IB tutors Whitefield",
    ],
    searchIntent: "Find IB tutors in Bangalore for international school students, DP subjects and hybrid academic support.",
    metaTitle: "IB Tutors in Bangalore for PYP, MYP & DP",
    metaDescription:
      "Find IB tutors in Bangalore for PYP, MYP and DP students. Get Math AA, Math AI, Physics, Chemistry, Economics, English, IA and exam support.",
    h1: "IB Tutors in Bangalore for PYP, MYP and DP Students",
    introSummary:
      "Bangalore IB families often need tutoring that works across international school corridors, technology-driven schedules and long cross-city travel times.",
    ogTitle: "IB Tutors in Bangalore | IB Gram",
    ogDescription:
      "IB tutoring in Bangalore with home, online and hybrid options for PYP, MYP and DP students.",
    ogImage: OG_IMAGE,
    imageAltText: "IB tutors in Bangalore for international school students",
    robotsTag: "index, follow",
    breadcrumbTitle: "IB Tutors in Bangalore",
    cityOverview: [
      "Bangalore has a strong international school ecosystem spread across Whitefield, Sarjapur Road, North Bangalore, Indiranagar, Koramangala and nearby school corridors. The spread makes tutoring mode an important decision: sometimes a local home tutor is ideal, and sometimes online support gives the student a stronger subject specialist.",
      "IB families in Bangalore often ask for DP Math, sciences, economics, English, IA support and steady MYP foundations. The city's academic culture is ambitious, but students can struggle when school deadlines, long commutes and extracurricular activities compress revision time.",
      "The city also has a parent base that is comfortable with digital learning but still values accountability. That makes hybrid tutoring especially useful: online lessons can cover advanced DP work, while occasional home sessions can help younger students organize notebooks, assignments and revision routines. For subjects such as Physics HL/SL, Chemistry HL/SL and Economics, the better match may be a specialist who understands IB command terms rather than the closest general tutor.",
      "IB Gram's Bangalore page helps parents request the right kind of support with clarity. It explains subject coverage, areas, school ecosystem references, matching steps, verification and FAQs while avoiding any claim of official school affiliation.",
    ],
    premiumAreas: [
      {
        name: "Whitefield",
        slug: "whitefield",
        description:
          "A high-demand area for international school families seeking DP subject support and structured weekly tutoring.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Sarjapur Road",
        slug: "sarjapur-road",
        description:
          "A major school and residential corridor where hybrid tutoring can reduce travel pressure.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Indiranagar",
        slug: "indiranagar",
        description:
          "Useful for central Bangalore families seeking Math, English and humanities support.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "North Bangalore",
        slug: "north-bangalore",
        description:
          "Relevant for families around international school corridors who may prefer online or hybrid lessons.",
        pageEnabled: true,
        indexFlag: "noindex",
      },
    ],
    nearbyAreas: ["Koramangala", "HSR Layout", "Hebbal", "Yelahanka", "Electronic City", "Marathahalli"],
    nearbyCities: [
      {
        cityName: "Hyderabad",
        citySlug: "hyderabad",
        description: "Hyderabad is another high-demand South India city for DP subject specialist support.",
      },
      {
        cityName: "Chennai",
        citySlug: "chennai",
        description: "Chennai is useful for South India families comparing online and hybrid IB tutoring.",
      },
      {
        cityName: "Mysuru",
        citySlug: "mysuru",
        description: "Mysuru families often compare Bangalore specialist availability with local support.",
      },
    ],
    serviceAreaText:
      "Home tutoring may be available in Whitefield, Sarjapur Road, Indiranagar, North Bangalore and nearby areas depending on tutor schedules. Online tutoring is available across Bangalore and Bengaluru-area school corridors, with hybrid support reviewed when travel or subject depth makes a single mode less practical.",
    latitude: 12.9716,
    longitude: 77.5946,
    timezone: "Asia/Kolkata",
    cityPhoneNumber: "+919582706764",
    cityWhatsappNumber: "+919582706764",
    localCtaText: "Book an IB demo class in Bangalore",
    ibProgramsAvailable: [
      {
        slug: "pyp",
        name: "Primary Years Programme",
        ageRange: "Ages 3 to 12",
        description: "Reading, numeracy, inquiry, project habits and confidence-building support.",
        cityNote: "Bangalore PYP families often value tutors who keep support exploratory and calm.",
      },
      {
        slug: "myp",
        name: "Middle Years Programme",
        ageRange: "Ages 11 to 16",
        description: "Conceptual foundations, criteria, assignments, personal project routines and writing support.",
        cityNote: "MYP students in Bangalore often need help balancing conceptual depth with clear submission structure.",
      },
      {
        slug: "dp",
        name: "Diploma Programme",
        ageRange: "Ages 16 to 19",
        description: "HL and SL subject support, IA, EE, TOK, mock revision and exam strategy.",
        cityNote: "Bangalore DP tutoring works best when the tutor understands school deadlines and the student's university pathway.",
      },
    ],
    ibSubjectsAvailable: [
      {
        slug: "math-aa-hl",
        name: "Math AA HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description: "Calculus, functions, proof, vectors, exam strategy and IA support.",
        cityNote: "Math AA is a high-priority subject for Bangalore students targeting engineering, computing and quantitative fields.",
      },
      {
        slug: "math-ai-hl",
        name: "Math AI HL",
        level: "HL and SL pathways",
        inventory: "strong",
        description: "Statistics, modelling, technology use, probability and applied problem solving.",
        cityNote: "Math AI is often requested by students who want structured data interpretation and application practice.",
      },
      {
        slug: "physics",
        name: "Physics",
        level: "HL and SL",
        inventory: "strong",
        description: "Mechanics, electricity, waves, data response, practical skills and timed practice.",
        cityNote: "Physics support is often requested by students who need stronger problem-solving routines.",
      },
      {
        slug: "chemistry",
        name: "Chemistry",
        level: "HL and SL",
        inventory: "moderate",
        description: "Stoichiometry, bonding, energetics, kinetics, organic chemistry and IA planning.",
        cityNote: "Chemistry students often need regular topic consolidation before mocks and final exams.",
      },
      {
        slug: "economics",
        name: "Economics",
        level: "HL and SL",
        inventory: "moderate",
        description: "Diagrams, evaluation, examples, essays and IA commentary support.",
        cityNote: "Economics support often focuses on writing structure and real-world application.",
      },
      {
        slug: "english",
        name: "English A",
        level: "HL and SL",
        inventory: "moderate",
        description: "Textual analysis, oral preparation, essay planning and paper practice.",
        cityNote: "English support is often useful for students who need sharper interpretation and response organization.",
      },
    ],
    gradeRange: "Grade 1 to Grade 12",
    dpSubjectLevels: "HL and SL",
    mathCoverage: "Math AA HL, Math AA SL, Math AI HL and Math AI SL",
    scienceCoverage: "Physics HL/SL, Chemistry HL/SL and Biology HL/SL, subject to tutor availability",
    humanitiesCoverage: "Economics, Business Management, Psychology and History support where available",
    languageCoverage: "English A, English B, Hindi, French, Spanish and other languages based on availability",
    assessmentSupport: "IA topic support, EE mentoring, TOK direction, mock revision and school assignment planning",
    curriculumNotes:
      "Bangalore tutoring plans should respect the student's school corridor, technology comfort and long-term university direction.",
    examSessionFocus: "May 2026 and November 2026 exam support",
    ibSchoolsCity: [
      {
        name: "Stonehill International School",
        slug: "stonehill-international-school",
        area: "North Bangalore",
        description: "Families around North Bangalore often ask for hybrid support and DP subject specialists.",
        typicalNeeds: ["DP Math", "Sciences", "Hybrid tutoring"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Canadian International School Bangalore",
        slug: "canadian-international-school-bangalore",
        area: "North Bangalore",
        description: "Families often need flexible scheduling and strong online backup for DP subjects.",
        typicalNeeds: ["Online support", "DP revision", "English writing"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "Indus International School Bangalore",
        slug: "indus-international-school-bangalore",
        area: "Sarjapur Road",
        description: "Sarjapur-area families frequently request MYP and DP support around school calendars.",
        typicalNeeds: ["MYP criteria", "DP Math", "IA support"],
        pageEnabled: true,
        indexFlag: "noindex",
      },
      {
        name: "The International School Bangalore",
        slug: "the-international-school-bangalore",
        area: "Whitefield region",
        description: "Families often request high-level DP subject support and careful exam planning.",
        typicalNeeds: ["HL support", "Exam planning", "Subject specialists"],
        pageEnabled: false,
        indexFlag: "noindex",
      },
    ],
    schoolDisclaimer: SCHOOL_DISCLAIMER,
    schoolSpecificNeeds: [
      "DP subject depth for Math, sciences and economics",
      "MYP criteria, assignment evidence and reflection",
      "IA and EE planning with academic honesty boundaries",
      "Hybrid plans that work around school corridors and commute patterns",
    ],
    schoolAreaMapping: [
      {
        area: "North Bangalore",
        schools: ["Stonehill International School", "Canadian International School Bangalore"],
        note: "Hybrid and online support often helps families around North Bangalore school corridors.",
      },
      {
        area: "Sarjapur Road and Whitefield",
        schools: ["Indus International School Bangalore", "The International School Bangalore"],
        note: "Families often request specialist DP support and predictable weekly scheduling.",
      },
    ],
    verifiedTutorCountCity: 0,
    homeTutorAvailable: true,
    onlineTutorAvailable: true,
    hybridTutorAvailable: true,
    subjectsWithStrongInventory: ["Math AA", "Math AI", "Physics"],
    subjectsWithLimitedInventory: ["Theatre", "Visual Arts", "some language combinations"],
    averageMatchingTime: "Common subject requests are reviewed for shortlist availability within 24 to 48 hours.",
    demoClassAvailable: true,
    tutorVerificationProcess: [
      "Tutor profile screening",
      "IB subject and level review",
      "Teaching clarity and demo feedback review",
      "Schedule and mode feasibility check",
      "Ongoing feedback monitoring",
    ],
    teachingModeNotes:
      "Bangalore families often combine online specialist tutoring with occasional home support when location and timing allow.",
    heroTitle: "Find Verified IB Tutors in Bangalore",
    heroSubtitle:
      "IB PYP, MYP and DP tutoring for Bangalore students across Math AA, Math AI, Physics, Chemistry, Economics, English, IA support and exam revision.",
    primaryCtaText: "Book a Free Academic Consultation",
    secondaryCtaText: "Find IB Tutor Near Me",
    trustPoints: [
      "IB subject and programme matching",
      "Home, online and hybrid support",
      "Demo class available where possible",
      "Independent school ecosystem guidance",
    ],
    cityAcademicIntro: [
      "Bangalore's IB families are often spread across school corridors that do not behave like one compact tutoring market. A student in Whitefield, Sarjapur Road or North Bangalore may need a different tutoring mode even for the same subject. IB Gram keeps that practical layer visible.",
      "The academic matching starts with the programme and the assessment need. PYP students may need foundation confidence. MYP students may need criteria and project structure. DP students may need subject mastery, IA planning, exam revision or a weekly accountability plan.",
      "A strong Bangalore match usually looks at university direction too. A student aiming at engineering may need an IB Math AA HL tutor and Physics support with timed practice. A student moving toward business or social sciences may need an IB Math AI HL tutor, Economics writing support and help connecting IA data with real interpretation. For both, IA, EE and TOK support should guide thinking without taking ownership of assessed work.",
      "This page gives parents a city-specific view of Bangalore areas, subjects, school ecosystem references, tutoring modes and FAQs so they can request a stronger match.",
    ],
    programSectionTitle: "IB Programs We Support in Bangalore",
    subjectSectionTitle: "IB Subjects Covered by Bangalore Tutors",
    areaSectionTitle: "IB Tutors Available Across Bangalore",
    schoolSectionTitle: "Support for Bangalore International School Students",
    matchingProcessSteps: [
      "Share programme, grade, subject, level, school timeline, area and preferred mode.",
      "IB Gram clarifies whether the student needs concept repair, assignment support, IA guidance or exam preparation.",
      "Tutors are shortlisted by IB fit, subject depth, teaching style, availability and mode suitability.",
      "A demo or diagnostic class is arranged where available.",
      "Progress is tracked through topic goals, practice work and parent feedback.",
    ],
    localTestimonials: [
      {
        title: "Common Bangalore parent request",
        detail:
          "Families often ask for DP Math and Physics support that can work across long school commutes and activity schedules.",
        sourceLabel: "Consultation theme",
      },
      {
        title: "Mode pattern",
        detail:
          "Online tutoring is often preferred for specialist subjects, while home tutoring is useful for younger students who need structure.",
        sourceLabel: "Scheduling insight",
      },
      {
        title: "Learning pattern",
        detail:
          "MYP students frequently need support with criteria, evidence and reflective writing rather than only topic explanation.",
        sourceLabel: "Learning need pattern",
      },
    ],
    cityFaqs: [
      {
        question: "Do you provide IB home tutors in Bangalore?",
        answer:
          "Home tutoring may be available in areas such as Whitefield, Sarjapur Road, Indiranagar and North Bangalore depending on tutor travel and schedule. Online tutoring is available city-wide.",
      },
      {
        question: "Can Bangalore students get Math AA HL support?",
        answer:
          "Yes. IB Gram can review Math AA HL needs and shortlist tutors based on current topics, assessment deadlines and preferred mode.",
      },
      {
        question: "Which IB subjects are commonly requested in Bangalore?",
        answer:
          "Math AA, Math AI, Physics, Chemistry, Economics and English are common requests. Other subjects can be reviewed based on availability.",
      },
      {
        question: "Can tutors support IA and EE work?",
        answer:
          "Tutors can help with topic direction, structure, research planning and academic understanding while keeping assessed work student-owned.",
      },
      {
        question: "Is online IB tutoring effective for Bangalore students?",
        answer:
          "Yes. Online tutoring can be especially useful when the best specialist is not near the student's school corridor or home area.",
      },
      {
        question: "Is IB Gram affiliated with Bangalore schools?",
        answer: SCHOOL_DISCLAIMER,
      },
      {
        question: "Can I request hybrid tutoring?",
        answer:
          "Yes. Hybrid tutoring can combine in-person accountability with online specialist support for revision, IA review or urgent doubts.",
      },
    ],
    bottomCtaText:
      "Share your Bangalore area, IB programme, subject level and preferred tutoring mode. IB Gram will help you identify a practical next step that respects school corridor, commute pressure, online readiness and the level of specialist support the student needs.",
    schema: {
      schemaPageType: "WebPage",
      schemaName: "IB Tutors in Bangalore",
      schemaDescription: "City-wise IB tutoring support in Bangalore for PYP, MYP and DP students.",
      schemaUrl: absoluteUrl(buildCityPath("bangalore")),
      schemaBreadcrumbs: ["Home", "IB Tutors", "Bangalore"],
      schemaOrganizationName: "IB Gram",
      schemaLogoUrl: absoluteUrl("/globe.svg"),
      schemaContactPhone: "+919582706764",
      schemaContactEmail: "ibgram24@gmail.com",
      schemaServiceName: "IB Tutoring Services in Bangalore",
      schemaAreaServed: ["Bangalore", "Whitefield", "Sarjapur Road", "Indiranagar", "North Bangalore"],
      schemaSubjects: ["PYP", "MYP", "DP", "Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
      schemaFaqJson: true,
    },
  },
  ...additionalIndianIbCityPages,
] satisfies CitySeoPageBase[];

const pagesWithOutgoingLinks = citySeoPageBaseData.map((page) => ({
  ...page,
  internalLinksOut: buildCityInternalLinks(page),
}));

export const citySeoPages: CitySeoPage[] = pagesWithOutgoingLinks.map((page) => ({
  ...page,
  internalLinksIn: pagesWithOutgoingLinks
    .flatMap((sourcePage) => sourcePage.internalLinksOut)
    .filter((link) => link.targetUrl === buildCityPath(page.citySlug)),
}));

export function getAllCitySeoPages(): CitySeoPage[] {
  return citySeoPages;
}

export function getLiveCitySeoPages(): CitySeoPage[] {
  return citySeoPages.filter((page) => page.status === "live");
}

export function getCitySeoPageBySlug(citySlug: string): CitySeoPage | undefined {
  const normalizedSlug = normalizeSlug(citySlug);
  return citySeoPages.find((page) => page.citySlug === normalizedSlug);
}

export function getAreaPageBySlug(citySlug: string, areaSlug: string) {
  const page = getCitySeoPageBySlug(citySlug);
  if (!page) return undefined;

  return page.premiumAreas.find((area) => area.pageEnabled && area.slug === normalizeSlug(areaSlug));
}

export function getSchoolPageBySlug(citySlug: string, schoolSlug: string) {
  const page = getCitySeoPageBySlug(citySlug);
  if (!page) return undefined;

  return page.ibSchoolsCity.find((school) => school.pageEnabled && school.slug === normalizeSlug(schoolSlug));
}
