/**
 * The 116 Gurgaon hub keyword pages under /gurgaon/<slug>/ (/gurgaon/ib-home-tutor/,
 * /gurgaon/igcse-chemistry-tuition-at-home/, ...): a board, or a board and subject, crossed with
 * the phrasings parents type (tutor, home tutor, private tuition, tuition at home, ...).
 *
 * Most phrasings are near-synonyms, so every format owns a different question (who to hire, who
 * comes to the house, how home tuition compares with a coaching centre, how the school year runs).
 * Without that the pages cannibalise each other and none of them ranks. Gated and published by
 * build.ts together with the 40 root-level keyword pages in plan.ts.
 *
 * Run: npx tsx scripts/gurgaon-keywords/plan-hub.ts   -> tmp/gurgaon-keywords/briefs/<slug>.json
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { gurgaonIbIgcseSchools } from "../../src/lib/country-seo/countries/gurgaon";
import {
  ALL,
  BIOLOGY,
  BIOLOGY_0610,
  CHEMISTRY_0620,
  CORRIDORS,
  DP,
  DP_SCIENCE,
  ENGLISH_A,
  ENGLISH_B,
  ENGLISH_IGCSE,
  EXAMS,
  IGCSE,
  KEYWORD_PAGES,
  MATHS_0580,
  MATHS_IA,
  MYP,
  MYP_MATHS,
  PHYSICS_0625,
  PYP,
  ROOT,
  SCIENCE_IGCSE,
  TMP,
  type CorridorKey,
  type KeywordPage,
} from "./plan";

// --- verified syllabus facts not already in plan.ts ----------------------------------------

const MATHS_DP = "DP Mathematics has two courses, Analysis and Approaches (AA) and Applications and Interpretation (AI), each at SL and HL. SL: Paper 1 (40%), Paper 2 (40%) and the exploration (IA, 20%). HL: Paper 1 (30%), Paper 2 (30%), Paper 3 (20%, extended problem-solving) and the exploration (20%). AA Paper 1 is sat without a calculator and the other AA papers with a graphic display calculator (GDC); every AI paper allows a GDC. AA leans toward algebra, proof and calculus, AI toward modelling, statistics and technology. Families should confirm the student's course and level with the school before choosing a tutor.";
const PHYSICS_DP = "DP Physics (first assessed 2025) is organised into five themes: A Space, time and motion; B The particulate nature of matter; C Wave behaviour; D Fields; E Nuclear and quantum physics. Students use the DP physics data booklet in the examinations.";
const CHEMISTRY_DP = "DP Chemistry (first assessed 2025) is organised into two strands. Structure: 1 Models of the particulate nature of matter, 2 Models of bonding and structure, 3 Classification of matter. Reactivity: 1 What drives chemical reactions?, 2 How much, how fast and how far?, 3 What are the mechanisms of chemical change? Students use the DP chemistry data booklet in the examinations.";
export const MYP_SCIENCES = "MYP Sciences criteria: A Knowing and understanding, B Inquiring and designing, C Processing and evaluating, D Reflecting on the impacts of science, each scored 0-8.";
export const MYP_LANGUAGE = "MYP Language and Literature criteria: A Analysing, B Organizing, C Producing text, D Using language, each scored 0-8. MYP Language Acquisition uses A Listening, B Reading, C Speaking, D Writing, taught in phases 1-6.";

interface Base {
  slug: string;
  board: "IB" | "IGCSE";
  /** As written on the page: "IB Maths". */
  name: string;
  general: boolean;
  /** H1 and description tail: "AA and AI, HL and SL". */
  desc: string;
  /** Short title tail: "AA & AI". */
  tail: string;
  subjects: string[];
  level: string;
  facts: string[];
  /** Appended to every intent: what this board or subject specifically demands. */
  focus: string;
  mustCover: string[];
  /** Three subject search terms for the secondary keywords. */
  terms: string[];
  /** Board deadlines a personal tutor tracks (general bases only). */
  deadlines?: string;
}

const IB_SUBJECT_LEVEL = "MYP 4-5 and DP (Grades 9-12)";
const IA_LIMITS = "the scientific investigation (IA): its four criteria and the academic integrity limits on what a tutor may do";

const BASES: Base[] = [
  {
    slug: "ib", board: "IB", name: "IB", general: true, desc: "PYP, MYP and DP", tail: "PYP, MYP & DP",
    subjects: ["IB Mathematics AA and AI", "IB Physics", "IB Chemistry", "IB Biology", "IB English A and B", "TOK and the Extended Essay"], level: "PYP, MYP and DP (Grades 1-12)",
    facts: [DP, MYP, PYP, EXAMS],
    focus: "Across the IB: which programme stage the student is in, criterion-based MYP marking, DP HL and SL choices, and IA, TOK and Extended Essay deadlines.",
    mustCover: ["what PYP, MYP and DP students each need from this kind of help", "IA, EE and TOK support within the IB's academic integrity rules: the tutor never writes the work"],
    terms: ["IB DP tutor in Gurgaon", "MYP tutor in Gurgaon", "IB home tutors in Gurgaon"],
    deadlines: "IA, EE and TOK deadlines alongside six DP subjects, or MYP criteria and the Personal Project",
  },
  {
    slug: "ib-maths", board: "IB", name: "IB Maths", general: false, desc: "AA and AI, HL and SL", tail: "AA & AI, HL & SL",
    subjects: ["IB Mathematics: Analysis and Approaches (AA)", "IB Mathematics: Applications and Interpretation (AI)", "MYP Mathematics"], level: IB_SUBJECT_LEVEL,
    facts: [MATHS_DP, MATHS_IA, MYP_MATHS, EXAMS],
    focus: "IB Maths specifically: AA versus AI, HL versus SL, calculator and non-calculator papers, the exploration (IA) and the MYP maths criteria.",
    mustCover: ["AA vs AI and HL vs SL: confirming the student's course and what it changes about the help needed", "the exploration (IA): its five criteria and what a tutor may and may not do"],
    terms: ["IB Maths AA HL tutor", "MYP maths tutor in Gurgaon", "IB maths tutors in Gurgaon"],
  },
  {
    slug: "ib-physics", board: "IB", name: "IB Physics", general: false, desc: "DP HL, SL and MYP Sciences", tail: "HL & SL",
    subjects: ["IB DP Physics HL", "IB DP Physics SL", "MYP Sciences"], level: IB_SUBJECT_LEVEL,
    facts: [DP_SCIENCE, PHYSICS_DP, MYP_SCIENCES, EXAMS],
    focus: "IB Physics specifically: the five DP themes, data-based questions in Paper 1B, extended responses, the data booklet, the scientific investigation IA and the MYP Sciences criteria.",
    mustCover: ["the five DP Physics themes and the kinds of questions students commonly find hard, framed as tendencies", IA_LIMITS],
    terms: ["IB physics tutor in Gurgaon", "IB Physics HL tutor Gurgaon", "MYP Sciences tutor Gurugram"],
  },
  {
    slug: "ib-chemistry", board: "IB", name: "IB Chemistry", general: false, desc: "DP HL, SL and MYP Sciences", tail: "HL & SL",
    subjects: ["IB DP Chemistry HL", "IB DP Chemistry SL", "MYP Sciences"], level: IB_SUBJECT_LEVEL,
    facts: [DP_SCIENCE, CHEMISTRY_DP, MYP_SCIENCES, EXAMS],
    focus: "IB Chemistry specifically: the Structure and Reactivity strands, quantitative chemistry, bonding models, reaction mechanisms, the data booklet, the scientific investigation IA and the MYP Sciences criteria.",
    mustCover: ["the Structure and Reactivity strands, with quantitative chemistry and mechanisms as common pressure points", IA_LIMITS],
    terms: ["IB chemistry tutor in Gurgaon", "IB Chemistry HL tutor Gurgaon", "IB Chemistry IA help"],
  },
  {
    slug: "ib-biology", board: "IB", name: "IB Biology", general: false, desc: "DP HL, SL and MYP Sciences", tail: "HL & SL",
    subjects: ["IB DP Biology HL", "IB DP Biology SL", "MYP Sciences"], level: IB_SUBJECT_LEVEL,
    facts: [DP_SCIENCE, BIOLOGY, MYP_SCIENCES, EXAMS],
    focus: "IB Biology specifically: the four themes across four levels of organisation, data-based questions, extended-response writing, the scientific investigation IA and the MYP Sciences criteria.",
    mustCover: ["the four DP Biology themes and levels of organisation, and why extended responses lose marks", IA_LIMITS],
    terms: ["IB biology tutor in Gurgaon", "IB Biology HL tutor Gurgaon", "IB Biology IA help"],
  },
  {
    slug: "ib-english", board: "IB", name: "IB English", general: false, desc: "English A and English B", tail: "English A & B",
    subjects: ["IB English A: Language and Literature", "IB English A: Literature", "IB English B", "MYP Language and Literature"], level: "MYP and DP (Grades 6-12)",
    facts: [ENGLISH_A, ENGLISH_B, MYP_LANGUAGE, EXAMS],
    focus: "IB English specifically: English A Language and Literature versus Literature versus English B, Paper 1 unseen analysis, the Paper 2 comparative essay, the Individual Oral, the HL essay and the MYP language criteria.",
    mustCover: ["which English course the student is in (A Language and Literature, A Literature or B) and how the help differs", "Paper 1 unseen analysis and the Individual Oral, and what a tutor may and may not do for assessed work"],
    terms: ["IB english tutor in Gurgaon", "IB English A tutor Gurgaon", "IB English B tutor Gurugram"],
  },
  {
    slug: "igcse", board: "IGCSE", name: "IGCSE", general: true, desc: "Cambridge and Edexcel", tail: "Cambridge & Edexcel",
    subjects: ["Cambridge IGCSE Mathematics 0580", "Cambridge IGCSE Physics 0625", "Cambridge IGCSE Chemistry 0620", "Cambridge IGCSE Biology 0610", "Cambridge IGCSE English", "Pearson Edexcel International GCSE subjects"], level: "Grades 9-10",
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE, ENGLISH_IGCSE],
    focus: "Across IGCSE: Cambridge versus Pearson Edexcel, Core versus Extended tiers, the exam series, and the move to the IB DP, A Levels, CBSE or ISC after Grade 10.",
    mustCover: ["Cambridge vs Pearson Edexcel, and Core vs Extended (or Foundation vs Higher) tier decisions", "exam series timing (the February/March India series, May/June, October/November) and what it means for planning"],
    terms: ["home tutors for IB IGCSE Gurugram", "Cambridge IGCSE tutor Gurgaon", "Edexcel IGCSE tutor Gurugram"],
    deadlines: "tier entry decisions, exam series and coursework or speaking deadlines across subjects",
  },
  {
    slug: "igcse-maths", board: "IGCSE", name: "IGCSE Maths", general: false, desc: "Cambridge 0580 and Edexcel 4MA1", tail: "0580 & 4MA1",
    subjects: ["Cambridge IGCSE Mathematics 0580", "Edexcel International GCSE Mathematics A 4MA1"], level: "Grades 9-10",
    facts: [MATHS_0580, IGCSE],
    focus: "IGCSE Maths specifically: 0580 Core and Extended with the non-calculator papers, Edexcel 4MA1 Foundation and Higher, method marks and showing working.",
    mustCover: ["0580 Core vs Extended papers (including non-calculator) and 4MA1 Foundation vs Higher", "method marks, showing working and an error-log habit"],
    terms: ["IGCSE Maths 0580 tutor", "Edexcel IGCSE Maths 4MA1 tutor", "IGCSE Maths Extended tutor Gurgaon"],
  },
  {
    slug: "igcse-physics", board: "IGCSE", name: "IGCSE Physics", general: false, desc: "Cambridge 0625 and Edexcel 4PH1", tail: "0625 & 4PH1",
    subjects: ["Cambridge IGCSE Physics 0625", "Edexcel International GCSE Physics 4PH1"], level: "Grades 9-10",
    facts: [PHYSICS_0625, SCIENCE_IGCSE, IGCSE],
    focus: "IGCSE Physics specifically: the 0625 topics, recalling and rearranging equations, units, Core and Extended theory papers, and practical skills through Paper 5 or Paper 6.",
    mustCover: ["equation recall and rearrangement, units and graph skills", "practical skills for Paper 5 or Paper 6 (alternative to practical)"],
    terms: ["IGCSE Physics 0625 tutor", "Edexcel IGCSE Physics 4PH1 tutor", "IGCSE Physics past papers help"],
  },
  {
    slug: "igcse-chemistry", board: "IGCSE", name: "IGCSE Chemistry", general: false, desc: "Cambridge 0620 and Edexcel 4CH1", tail: "0620 & 4CH1",
    subjects: ["Cambridge IGCSE Chemistry 0620", "Edexcel International GCSE Chemistry 4CH1"], level: "Grades 9-10",
    facts: [CHEMISTRY_0620, SCIENCE_IGCSE, IGCSE],
    focus: "IGCSE Chemistry specifically: the mole and stoichiometry, bonding, electrochemistry, organic chemistry, chemical tests and the practical papers. Never suggest home experiments with chemicals.",
    mustCover: ["mole calculations and stoichiometry, with a short worked example", "chemical tests and the alternative-to-practical paper, without home experiments"],
    terms: ["IGCSE Chemistry 0620 tutor", "Edexcel IGCSE Chemistry 4CH1 tutor", "IGCSE Chemistry mole calculations help"],
  },
  {
    slug: "igcse-biology", board: "IGCSE", name: "IGCSE Biology", general: false, desc: "Cambridge 0610 and Edexcel 4BI1", tail: "0610 & 4BI1",
    subjects: ["Cambridge IGCSE Biology 0610", "Edexcel International GCSE Biology 4BI1"], level: "Grades 9-10",
    facts: [BIOLOGY_0610, SCIENCE_IGCSE, IGCSE],
    focus: "IGCSE Biology specifically: the 0610 topics, precise terminology, describe versus explain questions, data handling and the practical papers.",
    mustCover: ["describe vs explain questions and precise biological terminology", "data handling and Paper 6 (alternative to practical) skills"],
    terms: ["IGCSE Biology 0610 tutor", "Edexcel IGCSE Biology 4BI1 tutor", "IGCSE Biology past papers help"],
  },
  {
    slug: "igcse-english", board: "IGCSE", name: "IGCSE English", general: false, desc: "0500, 0510 and Edexcel 4EA1", tail: "0500 & 0510",
    subjects: ["Cambridge IGCSE First Language English 0500", "Cambridge IGCSE English as a Second Language 0510 and 0511", "Cambridge IGCSE Literature in English 0475", "Edexcel International GCSE English Language A 4EA1"], level: "Grades 9-10",
    facts: [ENGLISH_IGCSE, IGCSE],
    focus: "IGCSE English specifically: which syllabus the student sits (0500, 0510 or 0511, 0475, or Edexcel 4EA1, 4EB1 or 4ES1), the reading papers, directed writing and composition, and speaking where it counts.",
    mustCover: ["identifying the exact English syllabus the student sits and why the help differs", "directed writing and composition: planning, register and accuracy"],
    terms: ["IGCSE English 0500 tutor", "IGCSE English as a Second Language 0510 tutor", "Edexcel IGCSE English Language tutor"],
  },
];

interface Format {
  slug: string;
  /** As it sits in the keyword: "home tutor". */
  words: string;
  /** Title case for H1 and title: "Home Tutor". */
  title: string;
  /** The tutor/tuition twin phrasing, used as a secondary keyword. */
  sister: string;
  generalOnly?: boolean;
  /** Every corridor, not three: the format's intent is where lessons can happen. */
  everyCorridor?: "always" | "general";
  tail: string;
  h1: (x: string, b: Base) => string;
  /** Tried in order; the first 120-160 characters long wins. */
  descs: Array<(x: string, b: Base) => string>;
  intent: (x: string, b: Base) => string;
  mustCover: string[];
  /** Comparison table columns; the first is the page's own offer. */
  columns: string[];
  extra: (x: string) => string;
}

const VS_CENTRE = ["Home tutor through IB Gram", "Coaching centre batch", "Live online group class", "Tutor found by word of mouth"];

// No plain "tutor" format (/gurgaon/ib-tutor/): the user removed it as a duplicate of "home-tutor" (2026-09-14).
const FORMATS: Format[] = [
  {
    slug: "home-tutor", words: "home tutor", title: "Home Tutor", sister: "home tuition", everyCorridor: "general", tail: "Verified, at Home",
    h1: (x) => `${x} Home Tutor in Gurgaon Who Teaches at Your Home`,
    descs: [
      (x) => `${x} home tutor in Gurgaon who teaches at your home: verified profiles, weekday evening slots planned around your sector, and a trial lesson first.`,
      (x, b) => `${x} home tutor in Gurgaon for ${b.desc}: verified profiles, evening slots planned around your sector and a trial lesson first.`,
    ],
    intent: (x) => `The person who comes to the family's home: how an ${x} home tutor's profile is verified before a home visit, what parents should check themselves, the first home session, whether a parent should be present, the study space, and which Gurgaon sectors and societies a home tutor can realistically reach on weekday evenings (gate entry, visitor registration, traffic). Not a general hiring guide and not a tuition timetable.`,
    mustCover: ["how profiles are verified and what the parent should check themselves before a home visit", "the first home session: what happens, who is present, the study space and materials", "which corridors, sectors and societies a home tutor reaches easily, and where weekday evening travel narrows slots", "a numbered checklist for preparing for a home tutor's first visit"],
    columns: VS_CENTRE,
    extra: (x) => `${x} home teacher Gurgaon`,
  },
  {
    slug: "private-tutor", words: "private tutor", title: "Private Tutor", sister: "private tuition", tail: "1:1 Private Lessons",
    h1: (x, b) => `${x} Private Tutor in Gurgaon for ${b.desc}`,
    descs: [
      (x, b) => `${x} private tutor in Gurgaon for ${b.desc}: independent one-to-one lessons mapped to your school's scheme of work, at home or online.`,
      (x) => `${x} private tutor in Gurgaon: independent one-to-one lessons mapped to your school's scheme of work and test calendar, at home or online.`,
    ],
    intent: (x) => `A private tutor compared with the support already inside a student's school life: an independent ${x} private tutor versus the school teacher's own extra classes or remedial periods (including the conflict of interest when a student's own teacher tutors them privately), mapping lessons to the school's scheme of work and test calendar without doing school tasks for the student, keeping a student's difficulties confidential, and what a private arrangement should agree in writing.`,
    mustCover: ["an independent private tutor vs the student's own school teacher tutoring privately, including the conflict of interest", "mapping lessons to the school's scheme of work and assessment calendar without doing school tasks for the student", "what to agree in writing: schedule, cancellations, progress updates, confidentiality", "a numbered process for setting up a private tutoring arrangement"],
    columns: ["Independent private tutor through IB Gram", "Own school teacher's private classes", "Coaching centre batch", "Small group of 3-4 students"],
    extra: (x) => `${x} private teacher Gurgaon`,
  },
  {
    slug: "one-to-one-tutor", words: "one-to-one tutor", title: "One-to-One Tutor", sister: "one-to-one tuition", tail: "Built for One Student",
    h1: (x) => `${x} One-to-One Tutor in Gurgaon: Lessons Built for One Student`,
    descs: [
      (x) => `${x} one-to-one tutor in Gurgaon: a diagnostic first lesson, pace set by one student, and marking against real mark schemes, at home or online.`,
      (x) => `${x} one-to-one tutor in Gurgaon: diagnostic first lesson, pace set by one student and mark-scheme feedback, home or online.`,
    ],
    intent: (x) => `Teaching method in a one-to-one ${x} lesson: the diagnostic first session, pace set by one student, an error log, retrieval practice, marking against real mark schemes or criteria, how a 60 or 90 minute lesson is structured minute by minute, and how one-to-one feedback shows up in school tests. Not about logistics, fees or timetables.`,
    mustCover: ["the diagnostic first lesson and what it should reveal", "a numbered minute-by-minute structure for a 60 or 90 minute one-to-one lesson", "error logs, retrieval practice and marking against mark schemes or criteria", "how to tell after three to four weeks whether the one-to-one method is working"],
    columns: ["One-to-one at home", "One-to-one online", "Small group", "Large coaching batch"],
    extra: (x) => `${x} 1:1 tutor Gurgaon`,
  },
  {
    slug: "tutor-at-home", words: "tutor at home", title: "Tutor at Home", sister: "tuition at home", everyCorridor: "always", tail: "Sector by Sector",
    h1: (x) => `${x} Tutor at Home in Gurgaon, Sector by Sector`,
    descs: [
      (x) => `${x} tutor at home in Gurgaon: which sectors and societies suit weekday evening home lessons, when online is better, and how a match is made.`,
      (x) => `${x} tutor at home in Gurgaon: sector-by-sector home lesson timing, when online is the better call, and how a home match is made.`,
    ],
    intent: (x) => `Where lessons at home are practical, corridor by corridor: for each Gurgaon corridor, whether an ${x} tutor at home works on weekday evenings and weekends, how school bus timings and activities fix the slot, younger versus older students at home, and when to switch a week to online. Organised by place, not by teaching method or tutor vetting.`,
    mustCover: ["every listed corridor walked through with its sectors and societies and the at-home implication for each", "school bus timings, activities and weekday traffic as the real limits on home slots", "younger vs older students at home: attention, supervision, session length", "a numbered process for fixing a stable weekly home slot"],
    columns: VS_CENTRE,
    extra: (x) => `${x} teacher at home Gurugram`,
  },
  {
    slug: "personal-tutor", words: "personal tutor", title: "Personal Tutor", sister: "personal tuition", generalOnly: true, tail: "One Mentor, Every Subject",
    h1: (x) => `${x} Personal Tutor in Gurgaon: One Mentor Across Subjects`,
    descs: [
      (x) => `${x} personal tutor in Gurgaon: one mentor who tracks every subject, deadline and study habit, plans each term and keeps parents informed.`,
    ],
    intent: (x, b) => `A personal tutor as a long-term academic mentor for one ${x} student: someone who watches every subject, deadline and study habit, plans the term, brings in subject specialists when needed, and reports to parents. Tracks ${b.deadlines ?? "school deadlines"}. Not a single-subject tutor page.`,
    mustCover: ["what a personal tutor does across subjects that subject tutors do not", "a term planner: deadlines, tests and revision mapped week by week", "how the personal tutor works with subject specialists and reports to parents", "a numbered weekly check-in routine"],
    columns: ["Personal tutor across subjects", "Separate subject tutors", "Coaching centre", "School support only"],
    extra: (x) => `${x} mentor Gurgaon`,
  },
  {
    slug: "subject-tutor", words: "subject tutor", title: "Subject Tutor", sister: "subject tuition", generalOnly: true, tail: "Subject Specialists",
    h1: (x) => `${x} Subject Tutor in Gurgaon: The Right Specialist per Subject`,
    descs: [
      (x) => `${x} subject tutor in Gurgaon: specialists matched to the exact syllabus and level for each subject, at home or online, with a trial lesson first.`,
    ],
    intent: (x) => `Choosing the right subject specialist: which ${x} subjects Gurgaon students most often want specialist help in and why (as tendencies), one specialist per subject versus one tutor for several, matching a specialist to the exact syllabus, level and school, and when to add a second subject tutor. Not a multi-subject timetable page.`,
    mustCover: ["subject by subject: where students most often want specialist help, as tendencies", "one specialist per subject vs one tutor for several subjects", "matching a specialist to the exact syllabus, level and school", "a numbered process for adding a second subject tutor"],
    columns: ["Specialist tutor per subject", "One tutor for all subjects", "Coaching centre batch", "Recorded video course"],
    extra: (x) => `${x} subject specialist Gurgaon`,
  },
  {
    slug: "tuition", words: "tuition", title: "Tuition", sister: "tutor", tail: "Home & Online Classes",
    h1: (x, b) => `${x} Tuition in Gurgaon: Term Plans for ${b.desc}`,
    descs: [
      (x, b) => `${x} tuition in Gurgaon for ${b.desc}: term plans, weekly sessions timed to school tests and mocks, and a free trial class.`,
      (x) => `${x} tuition in Gurgaon: term plans, weekly sessions timed to school tests and mocks, a free trial class, and home or online classes.`,
    ],
    intent: (x) => `The tuition programme itself: what a term of ${x} tuition in Gurgaon looks like, weekly frequency by grade as ranges with reasons, how tuition is timed against school tests, mocks and the exam session, the free trial class, and how tuition fees are structured (per session, monthly, packages) without quoting any amount. Not a tutor-hiring guide.`,
    mustCover: ["recommended weekly frequency by grade as ranges with reasons", "a month-by-month outline of a tuition year against school tests, mocks and the exam session", "the free trial class and what the parent should see afterwards", "how tuition fees are structured and what moves them, with no amounts"],
    columns: ["One-to-one tuition through IB Gram", "Coaching centre batch", "Live online group class", "Recorded video course"],
    extra: (x) => `${x} tuition centre Gurgaon`,
  },
  {
    slug: "home-tuition", words: "home tuition", title: "Home Tuition", sister: "home tutor", everyCorridor: "general", tail: "vs Coaching Centres",
    h1: (x) => `${x} Home Tuition in Gurgaon vs Coaching Centres and Online Classes`,
    descs: [
      (x) => `${x} home tuition in Gurgaon compared with coaching centres, online group classes and video courses: attention, syllabus fit, travel and cost.`,
      (x) => `${x} home tuition in Gurgaon compared with coaching centres, online group classes and recorded courses, point by point.`,
    ],
    intent: (x) => `The comparison page: home tuition against every other way Gurgaon families get ${x} help (coaching centre batches, live online group classes, recorded video courses, tutors found by word of mouth), fairly and in depth, on attention, syllabus fit, travel and time, coursework support, progress feedback and cost structure, with honest cases where each alternative is the better choice. This page owns the comparison; siblings only summarise it.`,
    mustCover: ["home tuition vs coaching centre batch vs live online group class vs recorded video course, with cases where each alternative wins", "what batches built for CBSE, JEE or NEET miss for this board or subject", "travel and time in Gurgaon: the hidden cost of commuting to a centre", "a numbered checklist for choosing between home tuition and a coaching centre"],
    columns: ["Home tuition through IB Gram", "Coaching centre batch", "Live online group class", "Recorded video course"],
    extra: (x) => `${x} home tuition vs coaching`,
  },
  {
    slug: "private-tuition", words: "private tuition", title: "Private Tuition", sister: "private tutor", tail: "vs Batch Classes",
    h1: (x) => `${x} Private Tuition in Gurgaon vs Batch Classes`,
    descs: [
      (x) => `${x} private tuition in Gurgaon versus batch and small-group classes: pace, syllabus fit, fee structure and how to judge any offer.`,
      (x) => `${x} private tuition in Gurgaon versus batch and small-group classes: pace, attention, syllabus fit, fee structure and how to judge an offer.`,
    ],
    intent: (x) => `Private one-to-one tuition versus batch and small-group classes for ${x}: why batches built for other boards fit ${x} poorly, when a small group of students at the same school and level genuinely works, how private tuition is priced in structure (never amounts), and a checklist for judging any private tuition offer in Gurgaon. Not about the school teacher conflict (a sibling owns that).`,
    mustCover: ["private one-to-one vs small group vs batch on pace, attention and syllabus fit", "when a small group genuinely works and who should be in it", "fee structure (per session, monthly, packages) and value, with no amounts", "a numbered checklist for judging any private tuition offer in Gurgaon"],
    columns: ["Private one-to-one tuition", "Small-group tuition", "Coaching centre batch", "Self-study with school support"],
    extra: (x) => `${x} private classes Gurgaon`,
  },
  {
    slug: "one-to-one-tuition", words: "one-to-one tuition", title: "One-to-One Tuition", sister: "one-to-one tutor", tail: "Weekly 1:1 Plans",
    h1: (x) => `${x} One-to-One Tuition in Gurgaon: Building the Weekly Plan`,
    descs: [
      (x) => `${x} one-to-one tuition in Gurgaon: weekly hours by grade, reviews every few weeks, stepping up before mocks, at home or online.`,
      (x) => `${x} one-to-one tuition in Gurgaon: weekly hours by grade, a review every few weeks, and stepping up before mocks, at home or online.`,
    ],
    intent: (x) => `Designing a one-to-one ${x} tuition plan: weekly hours by grade as ranges, how sessions split between new content, practice and past papers, the review every four to six weeks, stepping up before mocks and the exam session and stepping down after, and blending tuition with independent study so the student does not become dependent. Not about minute-by-minute teaching method.`,
    mustCover: ["weekly hours by grade and exam proximity, as ranges", "how a session splits between new content, practice and past papers", "the four-to-six-week review and what changes after it", "a numbered plan for stepping tuition up before mocks and down after the exams"],
    columns: ["One-to-one tuition plan", "Small-group tuition", "Crash course before exams", "Self-study with past papers"],
    extra: (x) => `${x} 1:1 tuition Gurugram`,
  },
  {
    slug: "tuition-at-home", words: "tuition at home", title: "Tuition at Home", sister: "tutor at home", everyCorridor: "always", tail: "Through the School Year",
    h1: (x) => `${x} Tuition at Home in Gurgaon Through the School Year`,
    descs: [
      (x) => `${x} tuition at home in Gurgaon through the school year: weekly timetables around school hours, holiday plans and exam-season sessions.`,
      (x) => `${x} tuition at home in Gurgaon through the school year: weekly home timetables around school hours, holiday plans and exam-season sessions.`,
    ],
    intent: (x) => `Running ${x} tuition at home through a Gurgaon school year: a month-by-month calendar (term starts, unit tests, festival and winter breaks, mocks, the exam session, summer holidays), the weekly home timetable around school hours, buses and activities in each corridor, missed and rescheduled sessions, and holiday intensives at home. Organised by the calendar.`,
    mustCover: ["a month-by-month calendar of a Gurgaon school year with what home tuition does each month", "a weekly home timetable around school hours, buses and activities", "missed, rescheduled and holiday sessions at home", "a numbered process for setting up the year's home tuition timetable"],
    columns: ["Tuition at home", "Online one-to-one tuition", "Hybrid (home plus online)", "Coaching centre batch"],
    extra: (x) => `${x} home classes Gurgaon`,
  },
  {
    slug: "personal-tuition", words: "personal tuition", title: "Personal Tuition", sister: "personal tutor", generalOnly: true, tail: "Personalised Plans",
    h1: (x) => `${x} Personal Tuition in Gurgaon: A Plan for One Student`,
    descs: [
      (x) => `Personal ${x} tuition in Gurgaon built around one student: gaps, pace and confidence mapped first, targets reviewed, at home or online.`,
      (x) => `Personal ${x} tuition in Gurgaon built around one student: gaps, pace and confidence mapped first, then targets reviewed, at home or online.`,
    ],
    intent: (x) => `Personalised tuition for one ${x} student: building a learning profile (gaps, strengths, confidence, pace, attention), setting targets the student owns, adapting for learning differences with honest limits (a tutor is not a therapist or an assessor), and how the plan changes after each review. Not a mentor-across-subjects page.`,
    mustCover: ["building a learning profile: gaps, strengths, pace, confidence, attention", "targets the student owns and how they are reviewed", "adapting for learning differences, with honest limits", "a numbered process for the first month of personal tuition"],
    columns: ["Personalised one-to-one tuition", "Standard batch syllabus", "Online self-paced platform", "School remedial classes"],
    extra: (x) => `personalised ${x} tuition Gurgaon`,
  },
  {
    slug: "subject-tuition", words: "subject tuition", title: "Subject Tuition", sister: "subject tutor", generalOnly: true, tail: "Multi-Subject Plans",
    h1: (x) => `${x} Subject Tuition in Gurgaon: Planning Several Subjects`,
    descs: [
      (x) => `${x} subject tuition in Gurgaon across several subjects: priorities by grade, balanced weekly timetables and a specialist for each subject.`,
    ],
    intent: (x) => `Planning tuition across several ${x} subjects at once: which subjects to prioritise by grade, balancing workload, weekly timetables with two or three subjects, when to pause or drop a subject from tuition, and avoiding overload in exam years. Not about choosing a single specialist.`,
    mustCover: ["which subjects to prioritise by grade, as reasoning not rules", "a weekly timetable with two or three subjects without overload", "when to pause or drop a subject from tuition", "a numbered process for planning multi-subject tuition"],
    columns: ["Separate specialists per subject", "One tutor for several subjects", "Coaching centre package", "Online group classes"],
    extra: (x) => `${x} tuition for all subjects Gurgaon`,
  },
];

/** How a parent names each corridor in a search box. */
const SEARCH_PLACE: Record<CorridorKey, string> = {
  gcr: "Golf Course Road", gcer: "Golf Course Extension Road", sohna: "Sohna Road", dlf: "DLF Phase 3", sushant: "Sushant Lok",
  spr: "Southern Peripheral Road", newg: "New Gurgaon", dwarka: "Dwarka Expressway", old: "Palam Vihar", manesar: "Manesar",
};

/** "home tutor" -> "home tutors", "tutor at home" -> "tutors at home". */
/** Case-insensitive dedupe: a base term and a generated phrase can collide ("IB home tutors in Gurgaon"). */
const dedupe = (list: string[]) => [...new Map(list.map((k) => [k.toLowerCase(), k])).values()];

const pluralise = (words: string) => (words.includes(" at home") ? words.replace(/^(\w+)/, "$1s") : `${words}s`);

const COMMON_MUST_COVER = "the `comparison` table (see the guide) plus a prose home vs online vs hybrid comparison for this page's intent";

function corridorsFor(b: Base, f: Format, index: number): CorridorKey[] {
  if (f.everyCorridor === "always" || (f.everyCorridor === "general" && b.general)) return ALL;
  // Rotate three corridors so each board and subject covers every corridor across its pages.
  const start = (index * 3) % ALL.length;
  return [0, 1, 2].map((k) => ALL[(start + k) % ALL.length]);
}

const pick = (options: string[], ok: (s: string) => boolean): string => options.find(ok) ?? options[0];

const built = BASES.flatMap((b, baseIndex) =>
  FORMATS.filter((f) => b.general || !f.generalOnly).map((f, formatIndex) => {
    const x = b.name;
    const corridors = corridorsFor(b, f, baseIndex + formatIndex);
    const phrase = `${x} ${f.words}`;
    const core = `${x} ${f.title} in Gurgaon`;
    const entry: KeywordPage = {
      slug: `${b.slug}-${f.slug}`,
      hub: true,
      board: b.board,
      keyword: `${phrase} gurgaon`.toLowerCase(),
      h1: f.h1(x, b),
      title: pick([`${core} | ${f.tail}`, `${core} | ${b.tail}`, core], (t) => t.length <= 60),
      description: pick(f.descs.map((d) => d(x, b)), (d) => d.length >= 120 && d.length <= 160),
      pageType: b.general ? "city" : "subject",
      focus: `${x} ${f.words} in Gurgaon`,
      subjects: b.subjects,
      programmes: b.board === "IGCSE" ? [] : b.general ? ["PYP", "MYP", "DP"] : ["MYP", "DP"],
      level: b.level,
      intent: `${f.intent(x, b)} ${b.focus}`,
      facts: b.facts,
      mustCover: [...f.mustCover, ...b.mustCover, COMMON_MUST_COVER],
      // Deduped and trimmed to 12; the tail entries are spares for when a phrase collides.
      secondary: dedupe([
        `${phrase} Gurugram`,
        `${phrase} near me`,
        `${x} ${f.sister} Gurgaon`,
        `best ${phrase} in Gurgaon`,
        `${x} online ${f.words.includes("tuition") ? "tuition" : "tutor"} Gurgaon`,
        `${x} ${pluralise(f.words)} in Gurgaon`,
        ...b.terms,
        `${phrase} ${SEARCH_PLACE[corridors[0]]}`,
        `${phrase} ${SEARCH_PLACE[corridors[1]]}`,
        f.extra(x),
        `${pluralise(phrase)} near me`,
        `${phrase} ${SEARCH_PLACE[corridors[2]]}`,
        `${x} ${f.words} Gurgaon Haryana`,
      ]).slice(0, 12),
      corridors,
      comparison: f.columns,
    };
    return { b, f, entry };
  }),
);

export const HUB_PAGES: KeywordPage[] = built.map((p) => p.entry);

function main(): void {
  const slugs = HUB_PAGES.map((e) => e.slug);
  const problems: string[] = [];
  if (slugs.length !== 116) problems.push(`expected 116 pages, got ${slugs.length}`);
  if (new Set([...slugs, ...KEYWORD_PAGES.map((e) => e.slug)]).size !== slugs.length + KEYWORD_PAGES.length) problems.push("slug collides with another keyword page");
  for (const e of HUB_PAGES) {
    if (e.title.length > 60) problems.push(`${e.slug}: title ${e.title.length} chars`);
    if (e.description.length < 120 || e.description.length > 160) problems.push(`${e.slug}: description ${e.description.length} chars: ${e.description}`);
    if (new Set(e.secondary).size !== 12) problems.push(`${e.slug}: ${new Set(e.secondary).size} unique secondary keywords`);
  }
  if (problems.length) throw new Error(problems.join("\n"));

  mkdirSync(path.join(TMP, "briefs"), { recursive: true });
  mkdirSync(path.join(TMP, "agent-out"), { recursive: true });
  for (const { b, f, entry } of built) {
    const summary = (s: KeywordPage) => ({ slug: s.slug, keyword: s.keyword, intent: s.intent });
    const siblings = [
      // Same board and subject, every other format.
      ...built.filter((p) => p.b === b && p.entry !== entry).map((p) => summary(p.entry)),
      // The board-wide page in the same format, for subject pages.
      ...built.filter((p) => !b.general && p.b.general && p.b.board === b.board && p.f === f).map((p) => summary(p.entry)),
      // Root-level keyword pages on the same board (and subject), e.g. /ib-tutor-in-gurgaon/.
      ...KEYWORD_PAGES.filter((k) => k.board === b.board && (b.general || k.slug.startsWith(`${b.slug}-`))).map(summary),
    ];
    const brief = {
      ...entry,
      path: `/gurgaon/${entry.slug}/`,
      corridors: entry.corridors.map((k) => ({ key: k, ...CORRIDORS[k] })),
      schools: [...gurgaonIbIgcseSchools],
      siblings,
    };
    writeFileSync(path.join(TMP, "briefs", `${entry.slug}.json`), `${JSON.stringify(brief, null, 1)}\n`);
  }
  writeFileSync(path.join(TMP, "hub-keys.txt"), `${slugs.join("\n")}\n`);
  console.log(`wrote ${slugs.length} hub briefs -> ${path.relative(ROOT, path.join(TMP, "briefs"))}`);
}

if (/plan-hub\.ts$/.test(process.argv[1] ?? "")) main();
