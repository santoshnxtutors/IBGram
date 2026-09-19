/**
 * The second wave of /gurgaon/ hub keyword pages: 221 URLs the user supplied (ib-tutors,
 * ib-tutor-gurgaon, best-igcse-home-tutor, cambridge-igcse-tuition, ib-myp-home-tutor, ...),
 * minus the 14 that already exist. plan-hub.ts covers the first 116.
 *
 * Each slug is parsed into {qualifier, board, mode, noun, suffix} and mapped to ONE angle no other
 * page owns, because many of these URLs are the same Google query spelled differently
 * ("ib-tutor" / "ib-tutors" / "ib-tutor-gurgaon"). Without a distinct angle per page they
 * cannibalise each other and the similarity gate rejects them anyway.
 *
 * Run: npx tsx scripts/gurgaon-keywords/plan-hub2.ts   -> tmp/gurgaon-keywords/briefs/<slug>.json
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { gurgaonIbIgcseSchools } from "../../src/lib/country-seo/countries/gurgaon";
import {
  ALL,
  CORRIDORS,
  DP,
  EE,
  ENGLISH_IGCSE,
  EXAMS,
  FEES_RULE,
  IGCSE,
  KEYWORD_PAGES,
  MATHS_0580,
  MYP,
  MYP_MATHS,
  PYP,
  ROOT,
  SCIENCE_IGCSE,
  TMP,
  TOK,
  type CorridorKey,
  type KeywordPage,
} from "./plan";
import { HUB_PAGES, MYP_LANGUAGE, MYP_SCIENCES } from "./plan-hub";

/* ------------------------------------------------------------------ parsing */

const QUALIFIERS = ["best", "experienced", "qualified", "certified", "expert", "personalized", "personal", "home-based", "one-on-one", "one-to-one", "1-to-1", "home"] as const;
const BOARD_IDS = ["ib-igcse", "ib-dp", "ib-diploma", "ib-myp", "ib-pyp", "cambridge-igcse", "igcse-cambridge", "edexcel-igcse", "igcse-edexcel", "international-school", "international-curriculum", "international-board", "ib", "igcse"] as const;
const MODES = ["home", "private", "online", "academic", "exam"] as const;
const NOUNS = ["tuition-classes", "tutors", "tutor", "tuitions", "tuition", "coaching", "classes"] as const;
const SUFFIXES = ["gurgaon", "near-me", "for-students", "fees", "cost", "agency", "service", "provider"] as const;

type BoardId = (typeof BOARD_IDS)[number];
interface Parsed {
  slug: string;
  qualifier?: string;
  board: BoardId;
  mode?: string;
  noun: string;
  suffix?: string;
}

function parse(slug: string): Parsed {
  let rest = slug;
  const take = (options: readonly string[]): string | undefined => {
    const hit = options.find((o) => rest === o || rest.startsWith(`${o}-`));
    if (hit) rest = rest.slice(hit.length).replace(/^-/, "");
    return hit;
  };
  const takeEnd = (options: readonly string[]): string | undefined => {
    const hit = options.find((o) => rest === o || rest.endsWith(`-${o}`));
    if (hit) rest = rest.slice(0, rest.length - hit.length).replace(/-$/, "");
    return hit;
  };
  const qualifier = take(QUALIFIERS);
  const board = take(BOARD_IDS) as BoardId;
  const suffix = takeEnd(SUFFIXES);
  const noun = takeEnd(NOUNS) ?? "";
  const mode = take(MODES);
  if (!board || !noun || rest !== "") throw new Error(`cannot parse slug "${slug}" (left over: "${rest}")`);
  return { slug, qualifier, board, mode, noun, suffix };
}

/* ------------------------------------------------------------------ boards */

interface Board {
  name: string;
  /** Which homepage's tutor cards the page shows. */
  cards: "IB" | "IGCSE";
  level: string;
  subjects: string[];
  programmes: Array<"PYP" | "MYP" | "DP">;
  facts: string[];
  /** Appended to every intent on this board. */
  focus: string;
  terms: string[];
  /** Short title tail. */
  tail: string;
}

const BOARDS: Record<BoardId, Board> = {
  ib: {
    name: "IB", cards: "IB", level: "PYP, MYP and DP (Grades 1-12)", programmes: ["PYP", "MYP", "DP"],
    subjects: ["IB Mathematics AA and AI", "IB Physics", "IB Chemistry", "IB Biology", "IB English A and B", "TOK and the Extended Essay"],
    facts: [DP, MYP, PYP, EXAMS],
    focus: "Across the IB: which programme stage the student is in, criterion-based MYP marking, DP HL and SL choices, and IA, TOK and Extended Essay deadlines.",
    terms: ["IB DP tutor in Gurgaon", "MYP tutor in Gurgaon", "IB home tutors in Gurgaon"], tail: "PYP, MYP & DP",
  },
  igcse: {
    name: "IGCSE", cards: "IGCSE", level: "Grades 9-10", programmes: [],
    subjects: ["Cambridge IGCSE Mathematics 0580", "Cambridge IGCSE sciences", "Cambridge IGCSE English", "Pearson Edexcel International GCSE subjects"],
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE, ENGLISH_IGCSE],
    focus: "Across IGCSE: Cambridge versus Pearson Edexcel, Core versus Extended tiers, the exam series, and the move to the IB DP, A Levels, CBSE or ISC after Grade 10.",
    terms: ["Cambridge IGCSE tutor Gurgaon", "Edexcel IGCSE tutor Gurugram", "IGCSE Grade 9 and 10 tutor"], tail: "Cambridge & Edexcel",
  },
  "ib-igcse": {
    name: "IB and IGCSE", cards: "IB", level: "IGCSE Grades 9-10 and IB PYP, MYP and DP", programmes: ["MYP", "DP"],
    subjects: ["IB DP subjects", "IB MYP subjects", "Cambridge IGCSE subjects", "Pearson Edexcel International GCSE subjects"],
    facts: [DP, MYP, IGCSE, EXAMS],
    focus: "Both boards in one household view: how IGCSE Grades 9-10 feed into the IB DP, what changes in marking and workload at each move, and why a family often needs different tutors for each stage.",
    terms: ["IB and IGCSE tutor Gurgaon", "IGCSE to IB DP transition tutor", "international board tutor Gurugram"], tail: "Both Boards",
  },
  "ib-dp": {
    name: "IB DP", cards: "IB", level: "DP1 and DP2 (Grades 11-12)", programmes: ["DP"],
    subjects: ["IB DP Mathematics", "IB DP sciences", "IB DP English A", "TOK", "Extended Essay"],
    facts: [DP, TOK, EXAMS],
    focus: "The Diploma Programme's two years specifically: six subjects, HL and SL choices, internal assessments, and the May or November exam session.",
    terms: ["IB DP tutor in Gurgaon", "DP1 and DP2 tutor Gurgaon", "IB DP HL tutor Gurugram"], tail: "DP1 & DP2",
  },
  "ib-diploma": {
    name: "IB Diploma", cards: "IB", level: "The full IB Diploma (Grades 11-12)", programmes: ["DP"],
    subjects: ["Six IB Diploma subjects", "Theory of Knowledge", "Extended Essay", "Creativity, Activity, Service"],
    facts: [DP, TOK, EE, EXAMS],
    focus: "The diploma as a whole rather than one subject: the 45-point structure, the core (TOK, EE, CAS), failing conditions, and how the six subjects and the core compete for the same hours.",
    terms: ["IB Diploma tutor Gurgaon", "IB 45 points tutor", "IB Diploma core support Gurugram"], tail: "45 Points & Core",
  },
  "ib-myp": {
    name: "IB MYP", cards: "IB", level: "MYP 1-5 (roughly Grades 6-10)", programmes: ["MYP"],
    subjects: ["MYP Mathematics", "MYP Sciences", "MYP Language and Literature", "MYP Individuals and Societies"],
    facts: [MYP, MYP_MATHS, MYP_SCIENCES, MYP_LANGUAGE],
    focus: "The Middle Years Programme specifically: four criteria per subject scored 0-8, criterion-related marking rather than percentages, the Personal Project in MYP 5, and preparing for the jump to DP.",
    terms: ["MYP tutor in Gurgaon", "MYP maths tutor in Gurgaon", "MYP home tutor in Gurgaon"], tail: "Criteria A-D",
  },
  "ib-pyp": {
    name: "IB PYP", cards: "IB", level: "PYP (ages 3-12)", programmes: ["PYP"],
    subjects: ["PYP units of inquiry", "Early primary literacy and numeracy", "PYP exhibition preparation"],
    facts: [PYP],
    focus: "The Primary Years Programme specifically: six transdisciplinary themes, units of inquiry, the learner profile, the PYP exhibition, and the fact that there are no external examinations at this stage.",
    terms: ["IB PYP tutor Gurgaon", "PYP home tutor Gurugram", "primary IB tutor Gurgaon"], tail: "Units of Inquiry",
  },
  "cambridge-igcse": {
    name: "Cambridge IGCSE", cards: "IGCSE", level: "Grades 9-10", programmes: [],
    subjects: ["Cambridge IGCSE Mathematics 0580", "Cambridge IGCSE Physics 0625", "Cambridge IGCSE Chemistry 0620", "Cambridge IGCSE Biology 0610", "Cambridge IGCSE First Language English 0500"],
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE, ENGLISH_IGCSE],
    focus: "Cambridge International specifically: syllabus codes, Core and Extended tiers, the February/March India series alongside May/June and October/November, and the practical papers.",
    terms: ["Cambridge IGCSE tutor Gurgaon", "IGCSE 0580 tutor Gurgaon", "Cambridge IGCSE home tutor Gurugram"], tail: "Core & Extended",
  },
  "igcse-cambridge": {
    name: "IGCSE Cambridge", cards: "IGCSE", level: "Grades 9-10", programmes: [],
    subjects: ["Cambridge IGCSE syllabuses", "Pearson Edexcel International GCSE syllabuses"],
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE],
    focus: "Choosing and working within Cambridge when a Gurgaon school offers it: how Cambridge differs from Edexcel in tiers, grading and series, and what that means for a student already enrolled.",
    terms: ["Cambridge or Edexcel IGCSE Gurgaon", "IGCSE board comparison tutor", "Cambridge IGCSE tuition Gurugram"], tail: "vs Edexcel",
  },
  "edexcel-igcse": {
    name: "Edexcel IGCSE", cards: "IGCSE", level: "Grades 9-10", programmes: [],
    subjects: ["Edexcel International GCSE Mathematics A 4MA1", "Edexcel International GCSE Physics 4PH1", "Edexcel International GCSE Chemistry 4CH1", "Edexcel International GCSE Biology 4BI1", "Edexcel International GCSE English Language A 4EA1"],
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE, ENGLISH_IGCSE],
    focus: "Pearson Edexcel specifically: 4-prefixed specification codes, Foundation and Higher tiers in mathematics, untiered sciences, 9-1 grading, and January and May/June series.",
    terms: ["Edexcel IGCSE tutor Gurgaon", "Edexcel 4MA1 tutor", "Edexcel IGCSE home tutor Gurugram"], tail: "9-1 Grading",
  },
  "igcse-edexcel": {
    name: "IGCSE Edexcel", cards: "IGCSE", level: "Grades 9-10", programmes: [],
    subjects: ["Pearson Edexcel International GCSE syllabuses", "Cambridge IGCSE syllabuses"],
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE],
    focus: "Working within Edexcel when a Gurgaon school offers it: Foundation and Higher entry decisions, the January series as a second chance, and how Edexcel grading compares with Cambridge.",
    terms: ["Edexcel or Cambridge IGCSE Gurgaon", "Edexcel IGCSE tuition Gurugram", "IGCSE tier decision help"], tail: "Tiers & Series",
  },
  "international-school": {
    name: "international school", cards: "IB", level: "Grades 1-12 across IB and IGCSE", programmes: ["PYP", "MYP", "DP"],
    subjects: ["IB PYP, MYP and DP subjects", "Cambridge and Edexcel IGCSE subjects"],
    facts: [DP, MYP, PYP, IGCSE],
    focus: "Students at Gurgaon's international schools whatever board the school runs: inquiry-led primary years, criterion marking in the middle years, and externally examined final years.",
    terms: ["international school tutor Gurgaon", "international school home tutor Gurugram", "IB and IGCSE school tutor"], tail: "IB & IGCSE",
  },
  "international-curriculum": {
    name: "international curriculum", cards: "IB", level: "Grades 1-12 across IB and IGCSE", programmes: ["PYP", "MYP", "DP"],
    subjects: ["IB curriculum subjects", "Cambridge and Edexcel IGCSE subjects"],
    facts: [DP, MYP, IGCSE, EXAMS],
    focus: "What an international curriculum demands that a state or national board usually does not: coursework that counts, command terms, criterion or mark-scheme marking, and research-led tasks.",
    terms: ["international curriculum tutor Gurgaon", "international syllabus tutor Gurugram", "IB IGCSE curriculum help"], tail: "Coursework & Command Terms",
  },
  "international-board": {
    name: "international board", cards: "IB", level: "Grades 1-12 across IB and IGCSE", programmes: ["MYP", "DP"],
    subjects: ["IB DP and MYP subjects", "Cambridge and Edexcel IGCSE subjects"],
    facts: [DP, MYP, IGCSE, EXAMS],
    focus: "Families choosing or switching between international boards in Gurgaon: what transfers, what does not, and which year groups make a change realistic.",
    terms: ["international board tutor Gurgaon", "board transfer tutor Gurugram", "CBSE to IB switch help"], tail: "Switching Boards",
  },
};

/* ------------------------------------------------------------------ angles */

const VS_CENTRE = ["Home tutor through IB Gram", "Coaching centre batch", "Live online group class", "Tutor found by word of mouth"];
const VS_ONLINE = ["Live online one-to-one", "Home tutor", "Hybrid (home plus online)", "Recorded video course"];
const VS_SERVICE = ["Matching service like IB Gram", "Local tutoring agency", "Coaching centre", "Finding a tutor yourself"];
const VS_FEES = ["One-to-one home tutor", "Coaching centre batch", "Live online group class", "Recorded video course"];

interface Angle {
  label: string;
  tail: string;
  intent: (n: string) => string;
  mustCover: string[];
  columns: string[];
  /** Cover every corridor, not three. */
  everyCorridor?: boolean;
}

const ANGLES: Record<string, Angle> = {
  core: {
    label: "Tutoring", tail: "Home & Online",
    intent: (n) => `The decision page for ${n} support in Gurgaon: what the board actually demands, what separates a specialist from a general tutor, the questions to ask before a trial lesson, how IB Gram shortlists and matches, and what the first four weeks should show.`,
    mustCover: ["what a specialist in this board knows that a general tutor usually does not", "questions to ask before and after the trial lesson", "a numbered process from first query to regular lessons", "what progress should look like after four weeks"],
    columns: VS_CENTRE,
  },
  plural: {
    label: "Tutors", tail: "Compare & Shortlist",
    intent: (n) => `Comparing several ${n} tutors rather than hiring the first one: how a shortlist of two or three profiles is built, what to compare side by side (board experience, level taught, school familiarity, slot and travel), how to run trial lessons with more than one tutor fairly, and how to switch if the first match is wrong.`,
    mustCover: ["how a shortlist of two or three tutors is built and what each profile should show", "a side-by-side comparison checklist for judging tutors", "running trial lessons with more than one tutor without unsettling the student", "asking for a different tutor when the fit is wrong"],
    columns: VS_CENTRE,
  },
  citywide: {
    label: "Tutors Across Gurgaon", tail: "Sector by Sector",
    intent: (n) => `Coverage across the whole city: corridor by corridor, where ${n} tutoring at home is practical on weekday evenings, which sectors and societies pair well in one tutor's travel plan, how gate entry and traffic shape the slot, and when online is the better call for a given corridor.`,
    mustCover: ["every listed corridor with its sectors and societies and the practical implication for each", "weekday traffic, school buses and society gate entry as real scheduling limits", "which corridors pair naturally in one tutor's weekly route", "a numbered process for fixing a stable weekly slot"],
    columns: VS_CENTRE, everyCorridor: true,
  },
  home: {
    label: "Home Tutoring", tail: "At Your Home",
    intent: (n) => `Lessons in the family's own home for ${n}: how a tutor's profile is verified before a home visit, what parents should check themselves, what the first home session looks like, the study space, and which Gurgaon sectors a home tutor reaches on weekday evenings.`,
    mustCover: ["verification before a home visit and what the parent should check", "the first home session: who is present, the study space, materials", "sectors and societies a home tutor reaches easily, and where travel narrows slots", "a numbered checklist for preparing for the first visit"],
    columns: VS_CENTRE, everyCorridor: true,
  },
  private: {
    label: "Private Tutoring", tail: "Independent 1:1",
    intent: (n) => `A private, independent arrangement for ${n}: an outside tutor compared with the school teacher's own extra classes (including the conflict of interest when a student's own teacher tutors them privately), mapping lessons to the school's scheme of work without doing school tasks, confidentiality, and what to agree in writing.`,
    mustCover: ["an independent private tutor vs the student's own school teacher tutoring privately", "mapping lessons to the school's scheme of work without doing the school's tasks", "what to agree in writing: schedule, cancellations, progress updates, confidentiality", "a numbered process for setting up a private arrangement"],
    columns: ["Independent private tutor", "Own school teacher's classes", "Coaching centre batch", "Small group of 3-4 students"],
  },
  online: {
    label: "Online Tutoring", tail: "Live 1:1 Online",
    intent: (n) => `Live online lessons for ${n} students in Gurgaon: the equipment and setup that makes an online lesson work, shared whiteboards and annotated past papers, which work suits a screen and which does not, why families here choose online (traffic, late slots, access to specialists), and honest limits.`,
    mustCover: ["a practical setup checklist for an online lesson at home", "what works well online and what does not, by task", "why Gurgaon families choose online, with honest limits", "how to tell within three sessions whether online is working"],
    columns: VS_ONLINE,
  },
  academic: {
    label: "Academic Support", tail: "Study Skills & Habits",
    intent: (n) => `Long-term academic support rather than exam cramming for ${n}: study habits, note-taking against criteria or mark schemes, planning a term, catching up after an absence or a board switch, and building independence so the student needs the tutor less over time.`,
    mustCover: ["study habits and note-taking that suit this board's marking", "a term plan mapped to school assessments", "catching up after an absence or a mid-year board switch", "reducing tutoring hours as the student becomes independent"],
    columns: VS_CENTRE,
  },
  exam: {
    label: "Exam Preparation", tail: "Mocks & Finals",
    intent: (n) => `Exam preparation for ${n}: working backwards from the session date, past papers and mark schemes, command terms, timing under pressure, what to do between mocks and finals, and how revision differs from ordinary tuition.`,
    mustCover: ["a countdown plan from mocks to the exam session", "past papers and mark schemes: how to use them properly", "command terms and timing under exam conditions", "what changes in the final six weeks"],
    columns: ["One-to-one exam preparation", "Crash course batch", "Online group revision", "Self-study with past papers"],
  },
  coaching: {
    label: "Coaching", tail: "Batch vs 1:1",
    intent: (n) => `Coaching formats for ${n} in Gurgaon: centre batches versus small groups versus one-to-one, why batches built for CBSE, JEE or NEET fit international boards poorly, when a small group genuinely works, and what structured coaching should include.`,
    mustCover: ["batch coaching vs small group vs one-to-one, with plain trade-offs", "why batches built for other boards fit this one poorly", "which tasks must never be group-coached, for academic integrity", "a numbered checklist for judging any coaching offer"],
    columns: ["One-to-one coaching at home", "Coaching centre batch", "Small group of 3-4", "Online group class"],
  },
  classes: {
    label: "Classes", tail: "Weekly & Revision",
    intent: (n) => `What a term of ${n} classes looks like week by week: frequency by stage, fitting classes around school timings, buses and activities, holiday catch-up, pre-mock and pre-session revision classes, and what a trial class should show.`,
    mustCover: ["weekly class patterns by stage, as ranges with reasons", "a month-by-month outline of a class year", "holiday and revision classes: when they earn their place", "what a trial class should cover"],
    columns: VS_CENTRE,
  },
  "tuition-classes": {
    label: "Tuition Classes", tail: "Structured Terms",
    intent: (n) => `Structured ${n} tuition classes in Gurgaon: how a term is planned, what each class covers, homework and feedback between classes, progress reviews, and how structured classes differ from ad-hoc tutoring booked session by session.`,
    mustCover: ["how a tuition term is structured class by class", "homework and feedback between classes", "progress reviews and what changes after them", "structured classes vs ad-hoc sessions"],
    columns: VS_CENTRE,
  },
  "near-me": {
    label: "Tutors Near You", tail: "Nearby Sectors",
    intent: (n) => `Proximity for ${n}: which sectors and societies a nearby tutor realistically serves, why the nearest tutor is not always the right one for a specialist subject, how location is weighed against subject fit when matching, and when to accept an online specialist instead.`,
    mustCover: ["a corridor-by-corridor walk of what nearby means in practice", "why the nearest tutor is not always the right tutor", "how location is weighed against subject fit in matching", "what to do when the family moves across Gurgaon mid-year"],
    columns: ["Nearby home tutor", "Specialist further away", "Online specialist", "Coaching centre nearby"], everyCorridor: true,
  },
  "for-students": {
    label: "Support for Students", tail: "Grade by Grade",
    intent: (n) => `Written for the student as much as the parent: what ${n} support looks like at each grade, how to ask for help without feeling behind, what to bring to a first session, how to use a tutor between assessments, and what the student should expect to do independently.`,
    mustCover: ["what support looks like at each grade or stage", "what the student should bring to a first session", "using a tutor between assessments rather than only before them", "what stays the student's own work"],
    columns: VS_CENTRE,
  },
  fees: {
    label: "Tutor Fees", tail: "What Sets the Price",
    intent: (n) => `Every factor that moves an ${n} tutor's fee in Gurgaon: stage and level, subject scarcity, the tutor's experience including examining experience, session length, travel versus online, and coursework mentoring. How pricing is structured, and how to judge whether a fee is worth it. No rupee figures anywhere.`,
    mustCover: ["fee factors ordered from biggest to smallest effect", "how pricing is structured: per session, monthly, packages", "what a demo should clarify before any payment", "red flags: fees that look too low or too high, and the questions that expose each"],
    columns: VS_FEES,
  },
  cost: {
    label: "Tuition Cost", tail: "Budgeting a Year",
    intent: (n) => `Budgeting for ${n} tuition across a school year rather than pricing a single session: where support is worth concentrating, how hours rise before mocks and fall after, the cost of changing tutors mid-year, and how to compare the value of formats. No rupee figures anywhere.`,
    mustCover: ["a year-long budgeting timeline showing when support is worth concentrating", "how hours rise and fall around the assessment calendar", "the hidden costs of changing tutor mid-year", "comparing value across formats without quoting amounts"],
    columns: VS_FEES,
  },
  agency: {
    label: "Tutor Agency", tail: "How Matching Works",
    intent: (n) => `How a tutoring agency works for ${n} families, and how to vet one: what an agency does that a classified listing does not, what it should tell you about a tutor before you commit, replacement policy, who you contact when something goes wrong, and the questions that separate a real matching process from a phone list.`,
    mustCover: ["what an agency does beyond handing over a phone number", "what should be disclosed about a tutor before commitment", "replacement policy and who to contact when something goes wrong", "a numbered checklist for vetting any agency"],
    columns: VS_SERVICE,
  },
  service: {
    label: "Tutoring Service", tail: "What to Expect",
    intent: (n) => `What a ${n} tutoring service should actually deliver in Gurgaon: the intake conversation, the shortlist, the trial, scheduling and rescheduling, progress updates to parents, and the service standards a family is entitled to expect at each step.`,
    mustCover: ["the intake conversation and what it should establish", "scheduling, rescheduling and missed sessions", "progress updates: form, frequency and what they should contain", "service standards a family should expect at each step"],
    columns: VS_SERVICE,
  },
  provider: {
    label: "Tuition Provider", tail: "How to Choose One",
    intent: (n) => `Choosing between ${n} tuition providers in Gurgaon: independent tutors, agencies, coaching centres and online platforms compared on verification, continuity, accountability and fit, with the trade-offs stated plainly and the cases where each one is the right answer.`,
    mustCover: ["independent tutor vs agency vs centre vs platform on verification and accountability", "continuity: what happens when a tutor leaves", "who is accountable when progress stalls", "a numbered checklist for choosing a provider"],
    columns: VS_SERVICE,
  },
  best: {
    label: "Choosing the Best Tutor", tail: "How to Judge",
    intent: (n) => `What "best" can honestly mean for an ${n} tutor in Gurgaon: the evidence a family can actually check (board experience, level taught, familiarity with the school's scheme of work, how a trial lesson goes), why rankings and "top tutor" labels are unverifiable, and a scoring approach a parent can apply.`,
    mustCover: ["the checkable evidence that separates tutors, and what cannot be checked", "why 'number one' and 'top rated' claims are unverifiable", "a scoring approach a parent can apply after a trial lesson", "best for whom: different students need different tutors"],
    columns: VS_CENTRE,
  },
  experienced: {
    label: "Experienced Tutors", tail: "What Experience Means",
    intent: (n) => `What experience actually means for an ${n} tutor: years taught versus years taught on this board, examining or moderating experience, breadth across levels, familiarity with the school's calendar, and why a long general career is not the same as board-specific depth.`,
    mustCover: ["years taught vs years taught on this board", "examining or moderating experience and what it changes in feedback", "how to verify claimed experience in a trial lesson", "when a less experienced tutor is the better fit"],
    columns: VS_CENTRE,
  },
  qualified: {
    label: "Qualified Tutors", tail: "Degrees & Subjects",
    intent: (n) => `Qualifications for ${n} tutoring: subject degrees versus teaching qualifications, why a subject degree alone does not guarantee good teaching of this board, what documentation IB Gram verifies, and what a parent can reasonably ask to see.`,
    mustCover: ["subject degrees vs teaching qualifications for this board", "what documentation is verified and what is not", "what a parent can reasonably ask to see", "how qualifications show up in a trial lesson, or fail to"],
    columns: VS_CENTRE,
  },
  certified: {
    label: "Certified Tutors", tail: "Certificates & Checks",
    intent: (n) => `Certification and verification for ${n} tutors: which certificates exist, what an official workshop certificate does and does not prove, what IB Gram checks on a profile, and why no certificate substitutes for a trial lesson.`,
    mustCover: ["which certificates exist for this board and what each proves", "what is verified on a tutor profile", "why a certificate is not a substitute for a trial lesson", "claims about certification that should make a parent cautious"],
    columns: VS_CENTRE,
  },
  expert: {
    label: "Expert Tutors", tail: "Depth at HL",
    intent: (n) => `Subject depth for ${n}: what expertise looks like at the hardest end of the syllabus, the difference between knowing the content and knowing how it is assessed, where depth matters most, and when a highly specialised tutor is more than a student needs.`,
    mustCover: ["what expertise looks like at the hardest end of the syllabus", "knowing the content vs knowing how it is marked", "where depth matters most and where it does not", "when a specialist is more than the student needs"],
    columns: VS_CENTRE,
  },
  personal: {
    label: "Personal Tutor", tail: "Finding the Right Fit",
    intent: (n) => `Finding and starting with a personal ${n} tutor: what to look for in someone who will work with one student for months, how personality and working style matter as much as subject knowledge, what the first month should establish, and how to tell early whether the relationship is working.`,
    mustCover: ["what to look for in a tutor who will stay with one student for months", "personality and working style alongside subject knowledge", "what the first month should establish", "early signs the relationship is or is not working"],
    columns: ["Personal tutor across subjects", "Separate subject tutors", "Coaching centre", "School support only"],
  },
  personalized: {
    label: "Personalised Tuition", tail: "Built for One Student",
    intent: (n) => `Personalised ${n} tuition built around one student: the learning profile (gaps, strengths, pace, confidence, attention), targets the student owns, adapting for learning differences with honest limits, and how the plan changes after each review.`,
    mustCover: ["building a learning profile: gaps, strengths, pace, confidence", "targets the student owns, and how they are reviewed", "adapting for learning differences, with honest limits", "a numbered process for the first month"],
    columns: ["Personalised one-to-one tuition", "Standard batch syllabus", "Online self-paced platform", "School remedial classes"],
  },
  "home-based": {
    label: "Home-Based Tutoring", tail: "Your Study Space",
    intent: (n) => `Teaching ${n} in the family's own space: setting up a study corner that works, managing siblings and household noise, where a parent should and should not sit, keeping materials organised between sessions, and the household routines that make home lessons stick.`,
    mustCover: ["setting up a study space that actually works", "siblings, noise and interruptions", "where a parent should sit, and when to step back", "keeping materials and notes organised between sessions"],
    columns: VS_CENTRE,
  },
  "one-on-one": {
    label: "One-on-One Tutoring", tail: "Full Attention",
    intent: (n) => `What undivided attention changes for an ${n} student: a tutor who sees every mistake as it happens, a student who cannot hide at the back, confidence for quieter students, pace set by one learner, and the honest downside of having nowhere to hide.`,
    mustCover: ["what a tutor notices in one-on-one that is invisible in a group", "confidence and participation for quieter students", "pace set by one learner", "the honest downsides of one-on-one attention"],
    columns: ["One-on-one at home", "One-on-one online", "Small group", "Large coaching batch"],
  },
  "one-to-one": {
    label: "One-to-One Tutoring", tail: "Lesson Mechanics",
    intent: (n) => `The mechanics of a one-to-one ${n} lesson: the diagnostic first session, how a 60 or 90 minute lesson is structured minute by minute, error logs, retrieval practice, marking against real mark schemes or criteria, and how that feedback shows up in school tests.`,
    mustCover: ["the diagnostic first lesson and what it should reveal", "a numbered minute-by-minute structure for a lesson", "error logs, retrieval practice and mark-scheme marking", "how to tell after three or four weeks whether it is working"],
    columns: ["One-to-one at home", "One-to-one online", "Small group", "Large coaching batch"],
  },
  "1-to-1": {
    label: "1:1 Tutoring", tail: "Weekly Hours",
    intent: (n) => `Planning 1:1 hours for ${n}: how many hours a week by stage and exam proximity, how a session splits between new content, practice and past papers, the review every four to six weeks, and blending paid hours with independent study so the student does not become dependent.`,
    mustCover: ["weekly hours by stage and exam proximity, as ranges", "how a session splits between content, practice and papers", "the four-to-six-week review and what changes after it", "blending tutoring with independent study"],
    columns: ["1:1 tuition plan", "Small-group tuition", "Crash course before exams", "Self-study with past papers"],
  },
};

/** Readable H1 tails, one per angle, so every page's H1 differs. */
const H1_TAILS: Record<string, string> = {
  core: "Choosing the Right Tutor",
  plural: "How to Compare and Shortlist",
  citywide: "Corridor by Corridor",
  home: "Lessons at Your Own Home",
  private: "An Independent Arrangement",
  online: "Live One-to-One Lessons",
  academic: "Study Habits That Last",
  exam: "From Mocks to the Final Papers",
  coaching: "Batches, Small Groups and One-to-One",
  classes: "A Term Planned Week by Week",
  "tuition-classes": "What a Structured Term Covers",
  "near-me": "How Near Is Near Enough",
  "for-students": "A Guide for the Student",
  fees: "What Sets the Fee",
  cost: "Budgeting a Whole School Year",
  agency: "How to Vet an Agency",
  service: "What a Service Should Deliver",
  provider: "Comparing the Options",
  best: "What Best Can Honestly Mean",
  experienced: "What Experience Really Means",
  qualified: "Degrees, Training and Proof",
  certified: "Certificates and What They Prove",
  expert: "Depth Where It Matters",
  personal: "Finding the Right Fit",
  personalized: "A Plan Built for One Student",
  "home-based": "Setting Up the Study Space",
  "one-on-one": "Undivided Attention",
  "one-to-one": "Inside the Lesson",
  "1-to-1": "Planning the Weekly Hours",
};

/** The page's own noun drives its label, so "ib-tutor-fees" and "ib-tuition-fees" never read alike. */
const NOUN_LABEL: Record<string, string> = {
  tutor: "Tutoring", tutors: "Tutors", tuition: "Tuition", tuitions: "Tuitions",
  coaching: "Coaching", classes: "Classes", "tuition-classes": "Tuition Classes",
};
const ONE_LABEL: Record<string, string> = {
  tutor: "Tutor", tutors: "Tutor", tuition: "Tuition", tuitions: "Tuition",
  coaching: "Coaching", classes: "Class", "tuition-classes": "Tuition Class",
};

/** How each angle names itself, given this page's noun. */
const LABELS: Record<string, (noun: string, one: string) => string> = {
  core: (noun) => noun,
  plural: (noun) => noun,
  citywide: (noun) => noun,
  home: (noun) => noun,
  private: (noun) => noun,
  online: (noun) => noun,
  academic: (noun) => noun,
  exam: (noun) => noun,
  coaching: (noun) => noun,
  classes: (noun) => noun,
  "tuition-classes": (noun) => noun,
  "near-me": (noun) => `${noun} Near You`,
  "for-students": (noun) => `${noun} for Students`,
  fees: (_noun, one) => `${one} Fees`,
  cost: (_noun, one) => `${one} Cost`,
  agency: (_noun, one) => `${one} Agency`,
  service: (_noun, one) => `${one} Service`,
  provider: (_noun, one) => `${one} Provider`,
  best: (noun) => `Best ${noun}`,
  experienced: (noun) => `Experienced ${noun}`,
  qualified: (noun) => `Qualified ${noun}`,
  certified: (noun) => `Certified ${noun}`,
  expert: (noun) => `Expert ${noun}`,
  personal: (_noun, one) => `Personal ${one}`,
  personalized: (noun) => `Personalised ${noun}`,
  "home-based": (noun) => `Home-Based ${noun}`,
  "one-on-one": (noun) => `One-on-One ${noun}`,
  "one-to-one": (noun) => `One-to-One ${noun}`,
  "1-to-1": (noun) => `1:1 ${noun}`,
};

/** Mode words that sit in front of the angle label: "IB **Home** Tutors". */
const MODE_LABEL: Record<string, string> = { home: "Home", private: "Private", online: "Online", academic: "Academic", exam: "Exam" };

/** How the mode changes the page when the angle is not the mode itself. */
const MODE_CLAUSE: Record<string, string> = {
  home: "Every lesson discussed here happens at the family's own home in Gurgaon, so travel, sector and slot are part of the answer.",
  private: "This is a private, independent arrangement outside the school, not the school's own extra classes.",
  online: "Lessons here run live online rather than at the kitchen table, so setup, screen tools and attention are part of the answer.",
  academic: "The focus is continuing academic support through the year rather than last-minute exam cramming.",
  exam: "The focus is the run-up to examinations rather than routine term-time teaching.",
};

const PLURAL_CLAUSE = "Write it for a family weighing several tutors at once: how to build a shortlist of two or three and compare them side by side, not how to hire a single tutor sight unseen.";

const CITYWIDE_CLAUSE = "Cover this corridor by corridor across the whole of Gurgaon, naming sectors and societies, rather than treating the city as one place.";

/* ------------------------------------------------------------------ build */

const SEARCH_PLACE: Record<CorridorKey, string> = {
  gcr: "Golf Course Road", gcer: "Golf Course Extension Road", sohna: "Sohna Road", dlf: "DLF Phase 3", sushant: "Sushant Lok",
  spr: "Southern Peripheral Road", newg: "New Gurgaon", dwarka: "Dwarka Expressway", old: "Palam Vihar", manesar: "Manesar",
};

const dedupe = (list: string[]) => [...new Map(list.map((k) => [k.toLowerCase(), k])).values()];
const isPlural = (noun: string) => noun === "tutors" || noun === "tuitions";
const nounFamily = (noun: string) => (noun.startsWith("tutor") ? "tutor" : noun.startsWith("tuition") ? "tuition" : noun);

/** The single angle this page owns. Order matters: the first match wins. */
function angleFor(p: Parsed): string {
  if (p.qualifier && p.qualifier !== "home") return p.qualifier;
  if (p.suffix && p.suffix !== "gurgaon") return p.suffix;
  if (isPlural(p.noun)) return "plural";
  if (p.suffix === "gurgaon") return "citywide";
  if (p.noun === "coaching" || p.noun === "classes" || p.noun === "tuition-classes") return p.noun;
  if (p.mode) return p.mode;
  if (p.qualifier === "home") return "home";
  return "core";
}

const requested = readFileSync(path.join(TMP, "hub2-new.txt"), "utf8").split(/\s+/).filter(Boolean);

const built = requested.map((slug, index) => {
  const p = parse(slug);
  const b = BOARDS[p.board];
  const angleKey = angleFor(p);
  const citywide = p.suffix === "gurgaon";
  const modeLabel = p.mode && angleKey !== p.mode ? MODE_LABEL[p.mode] : "";
  const a = ANGLES[angleKey];
  if (!a) throw new Error(`no angle "${angleKey}" for ${slug}`);
  const n = b.name;
  const family = nounFamily(p.noun);
  const corridors: CorridorKey[] = a.everyCorridor || p.suffix === "gurgaon" ? ALL : [0, 1, 2].map((k) => ALL[(index * 3 + k) % ALL.length]);

  // "ib-tutor-fees" -> "ib tutor fees gurgaon"; a slug that already ends in gurgaon keeps it.
  const keyword = `${slug.replace(/^1-to-1/, "1:1").replace(/-/g, " ")}${/(^|\s)gurgaon$/.test(slug.replace(/-/g, " ")) ? "" : " gurgaon"}`.toLowerCase();
  const phrase = slug.replace(/^1-to-1/, "1:1").replace(/-gurgaon$/, "").replace(/-/g, " ");
  const label = `${n} ${modeLabel ? `${modeLabel} ` : ""}${LABELS[angleKey](NOUN_LABEL[p.noun], ONE_LABEL[p.noun])}`;
  const core = `${label} in Gurgaon`;
  const title = [`${core} | ${a.tail}`, `${core} | ${b.tail}`, core].find((t) => t.length <= 60) ?? core.slice(0, 60);
  const h1 = `${core}: ${H1_TAILS[angleKey]}${isPlural(p.noun) && angleKey !== "plural" ? ", and How to Shortlist" : ""}${citywide && angleKey !== "citywide" ? ", Sector by Sector" : ""}`;

  const descs = [
    `${label} in Gurgaon for ${b.level}: verified tutors, a free trial class, and home, online or hybrid lessons across Gurugram.`,
    `${label} in Gurgaon: verified tutors matched to the exact board and level, a free trial class, and home or online lessons.`,
    `${label} in Gurgaon, with verified tutors, a free trial class and home or online lessons in every Gurugram sector.`,
  ];
  const description = descs.find((d) => d.length >= 120 && d.length <= 160) ?? descs[1].slice(0, 160);

  const secondary = dedupe([
    `${phrase} Gurugram`,
    `${phrase} near me`,
    `${n} ${family} in Gurgaon`,
    `best ${phrase} in Gurgaon`,
    `${n} online ${family} Gurgaon`,
    `${n} ${family}s in Gurgaon`,
    ...b.terms,
    `${phrase} ${SEARCH_PLACE[corridors[0]]}`,
    `${phrase} ${SEARCH_PLACE[corridors[1]]}`,
    `${phrase} ${SEARCH_PLACE[corridors[2]]}`,
    `${n} ${family} Gurgaon Haryana`,
    `${n} ${family} for international school students`,
  ]).slice(0, 12);

  const entry: KeywordPage = {
    slug, hub: true, board: b.cards, keyword, h1, title, description,
    pageType: "city", focus: `${label} in Gurgaon`, subjects: b.subjects, programmes: b.programmes, level: b.level,
    intent: [a.intent(n), modeLabel ? MODE_CLAUSE[p.mode as string] : "", isPlural(p.noun) && angleKey !== "plural" ? PLURAL_CLAUSE : "", citywide ? CITYWIDE_CLAUSE : "", b.focus].filter(Boolean).join(" "),
    facts: b.facts,
    mustCover: [...a.mustCover, "the comparison table (see the guide) plus a prose home vs online vs hybrid comparison for this page's intent"],
    secondary, corridors, comparison: a.columns,
  };
  return { p, b, a, angleKey, entry };
});

export const HUB2_PAGES: KeywordPage[] = built.map((x) => x.entry);

function main(): void {
  const problems: string[] = [];
  const seen = new Set<string>();
  for (const { p, angleKey, entry } of built) {
    const key = `${p.board}|${angleKey}|${p.mode ?? ""}|${p.suffix === "gurgaon" ? "citywide" : ""}|${p.noun}`;
    if (seen.has(key)) problems.push(`${entry.slug}: duplicate angle ${key}`);
    seen.add(key);
    if (entry.title.length > 60) problems.push(`${entry.slug}: title ${entry.title.length} chars`);
    if (entry.description.length < 120 || entry.description.length > 160) problems.push(`${entry.slug}: description ${entry.description.length} chars`);
    if (new Set(entry.secondary).size !== 12) problems.push(`${entry.slug}: ${new Set(entry.secondary).size} secondary keywords`);
  }
  const all = [...KEYWORD_PAGES, ...HUB_PAGES, ...HUB2_PAGES];
  if (new Set(all.map((e) => e.slug)).size !== all.length) problems.push("slug collides with an existing keyword page");
  const h1s = all.map((e) => e.h1.toLowerCase());
  const bySlug = new Map<string, string[]>();
  for (const e of all) bySlug.set(e.h1.toLowerCase(), [...(bySlug.get(e.h1.toLowerCase()) ?? []), e.slug]);
  for (const [h1, count] of h1s.reduce((m, h) => m.set(h, (m.get(h) ?? 0) + 1), new Map<string, number>())) {
    if (count > 1) problems.push(`H1 used ${count} times (${bySlug.get(h1)?.join(", ")}): "${h1}"`);
  }
  if (problems.length) throw new Error(problems.slice(0, 25).join("\n"));

  mkdirSync(path.join(TMP, "briefs"), { recursive: true });
  for (const { p, entry } of built) {
    const summary = (s: KeywordPage) => ({ slug: s.slug, keyword: s.keyword, intent: s.intent });
    const siblings = [
      ...built.filter((x) => x.p.board === p.board && x.entry.slug !== entry.slug).map((x) => summary(x.entry)),
      ...HUB_PAGES.filter((s) => s.slug.startsWith(p.board === "ib" ? "ib-" : "igcse-")).slice(0, 14).map(summary),
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
  writeFileSync(path.join(TMP, "hub2-keys.txt"), `${HUB2_PAGES.map((e) => e.slug).join("\n")}\n`);
  console.log(`wrote ${HUB2_PAGES.length} briefs -> ${path.relative(ROOT, path.join(TMP, "briefs"))}`);
}

if (/plan-hub2\.ts$/.test(process.argv[1] ?? "")) main();
