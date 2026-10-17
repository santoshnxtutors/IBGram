/**
 * Turns sitemap-mumbai.xml into (a) page metadata for every URL and (b) a per-page brief the
 * writing agents work from.
 *
 * Nothing here invents a URL. The sitemap is the source of truth: every slug it lists gets a
 * page, and no page exists that the sitemap does not list. Run:
 *
 *   npx tsx scripts/mumbai-seo/plan.ts
 *
 * Outputs:
 *   src/lib/mumbai-seo/pages-data.ts     metadata for all pages (committed, renders the site)
 *   tmp/mumbai-seo/briefs/<slug>.json    one brief per page (not committed, agents read these)
 *   tmp/mumbai-seo/waves.json            page slugs grouped into writing waves by priority
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  LOCALITY_BY_SLUG,
  MUMBAI_LOCALITIES,
  MUMBAI_SCHOOLS,
  MUMBAI_ZONES,
  type MumbaiLocality,
  type MumbaiZoneSlug,
} from "./facts";

const ROOT = join(import.meta.dirname, "..", "..");
const SITEMAP = join(ROOT, "sitemap-mumbai.xml");
const OUT_LIB = join(ROOT, "src", "lib", "mumbai-seo");
const OUT_TMP = join(ROOT, "tmp", "mumbai-seo");

/* ------------------------------------------------------------------ */
/* Subject + programme vocabulary                                      */
/* ------------------------------------------------------------------ */

type Board = "IB" | "IGCSE" | "IB + IGCSE";

interface Subject {
  /** Proper display name. */
  name: string;
  /** Syllabus specifics a writer must get right: papers, components, criteria. */
  detail: string;
}

/** IB Diploma Programme subjects, keyed by the slug token the sitemap uses. */
const IB_DP_SUBJECTS: Record<string, Subject> = {
  "math-aa": { name: "Mathematics: Analysis and Approaches", detail: "Papers 1 and 2 (Paper 3 at HL), the no-calculator Paper 1 at HL, proof and calculus weighting, and the exploration (internal assessment) worth 20%" },
  "math-ai": { name: "Mathematics: Applications and Interpretation", detail: "Papers 1 and 2 (Paper 3 at HL), GDC use throughout, statistics and modelling emphasis, and the exploration worth 20%" },
  maths: { name: "Mathematics", detail: "the AA and AI route choice, HL versus SL demand, and the 20% mathematical exploration" },
  physics: { name: "Physics", detail: "Papers 1A/1B, 2 and 3, the HL additional-higher-level topics, and the scientific investigation worth 20%" },
  chemistry: { name: "Chemistry", detail: "Papers 1 and 2 under the Structure and Reactivity framework, and the scientific investigation worth 20%" },
  biology: { name: "Biology", detail: "Papers 1 and 2 under the Unity and Diversity themes, data-based questions, and the scientific investigation worth 20%" },
  "computer-science": { name: "Computer Science", detail: "Papers 1 and 2, the HL case study in Paper 3, and the solution-development internal assessment" },
  economics: { name: "Economics", detail: "Papers 1, 2 and (HL) 3, the policy-paper Paper 3 quantitative demand, and the three-commentary portfolio worth 20-30%" },
  "business-management": { name: "Business Management", detail: "Papers 1 and 2 with the pre-released case study, HL extension topics, and the business research project" },
  "global-politics": { name: "Global Politics", detail: "Papers 1 and 2, the engagement project, and the HL extension presentations" },
  history: { name: "History", detail: "Papers 1 (source paper), 2 and (HL) 3 regional option, and the historical investigation worth 20-25%" },
  geography: { name: "Geography", detail: "Papers 1, 2 and (HL) 3, the HL core extension, and the fieldwork internal assessment" },
  psychology: { name: "Psychology", detail: "Papers 1, 2 and (HL) 3, the approaches and options structure, and the experimental study internal assessment" },
  philosophy: { name: "Philosophy", detail: "Papers 1, 2 and (HL) 3, the core theme and optional themes, and the internal assessment on a non-philosophical stimulus" },
  "digital-society": { name: "Digital Society", detail: "Papers 1, 2 and (HL) 3, the inquiry process, and the internal assessment inquiry project" },
  "environmental-systems-and-societies": { name: "Environmental Systems and Societies", detail: "Papers 1 and 2, the systems-and-models approach, and the individual investigation" },
  "sports-exercise-and-health-science": { name: "Sports, Exercise and Health Science", detail: "Papers 1, 2 and (HL) 3, and the scientific investigation" },
  "design-technology": { name: "Design Technology", detail: "Papers 1, 2 and (HL) 3, and the design project internal assessment worth 40%" },
  "english-a-language-and-literature": { name: "English A: Language and Literature", detail: "Paper 1 guided textual analysis, Paper 2 comparative essay, the individual oral on a global issue, and the HL essay" },
  "english-a-literature": { name: "English A: Literature", detail: "Paper 1 guided literary analysis, Paper 2 comparative essay, the individual oral, and the HL essay" },
  "english-b": { name: "English B", detail: "Paper 1 writing task, Paper 2 listening and reading, and the individual oral on a course theme" },
  "french-b": { name: "French B", detail: "Paper 1 writing task, Paper 2 listening and reading, and the individual oral" },
  "french-ab-initio": { name: "French ab initio", detail: "Paper 1 writing, Paper 2 listening and reading, and the individual oral, from beginner level" },
  "spanish-b": { name: "Spanish B", detail: "Paper 1 writing task, Paper 2 listening and reading, and the individual oral" },
  "spanish-ab-initio": { name: "Spanish ab initio", detail: "Paper 1 writing, Paper 2 listening and reading, and the individual oral, from beginner level" },
  "german-b": { name: "German B", detail: "Paper 1 writing task, Paper 2 listening and reading, and the individual oral" },
  "mandarin-b": { name: "Mandarin B", detail: "Paper 1 writing task, Paper 2 listening and reading, character demand, and the individual oral" },
  "hindi-a": { name: "Hindi A", detail: "Paper 1 guided analysis, Paper 2 comparative essay, and the individual oral" },
  "hindi-b": { name: "Hindi B", detail: "Paper 1 writing task, Paper 2 listening and reading, and the individual oral" },
  sanskrit: { name: "Sanskrit", detail: "the classical-language route, its text-based papers and the research dossier" },
  "visual-arts": { name: "Visual Arts", detail: "the comparative study, the process portfolio and the resolved exhibition" },
  music: { name: "Music", detail: "exploring music in context, experimenting with music, and the presenting-music portfolio" },
  theatre: { name: "Theatre", detail: "the director's notebook, research presentation, collaborative project and (HL) solo theatre piece" },
  film: { name: "Film", detail: "the textual analysis, comparative study, film portfolio and (HL) collaborative film project" },
  "theory-of-knowledge": { name: "Theory of Knowledge (TOK)", detail: "the 1,600-word TOK essay on a prescribed title and the TOK exhibition of three objects" },
  "extended-essay": { name: "Extended Essay (EE)", detail: "the 4,000-word independent research essay, subject choice, the research question, supervisor sessions and the reflections on planning and progress form" },
  cas: { name: "Creativity, Activity, Service (CAS)", detail: "the seven learning outcomes, the CAS project, interviews and portfolio evidence" },
  "internal-assessment": { name: "Internal Assessment (IA)", detail: "subject-by-subject IA weightings, research questions, drafting rounds and academic-honesty requirements" },
};

/** IGCSE subjects with their Cambridge syllabus codes, keyed by slug token. */
const IGCSE_SUBJECTS: Record<string, Subject & { code?: string }> = {
  maths: { name: "Mathematics", code: "0580", detail: "Papers 2 and 4 at Extended tier, the Core/Extended tier decision, and the non-calculator expectations" },
  "international-maths": { name: "International Mathematics", code: "0607", detail: "the graphic display calculator required throughout, the Core/Extended tier decision, and the investigation and modelling papers that 0580 does not carry" },
  "additional-maths": { name: "Additional Mathematics", code: "0606", detail: "Papers 1 and 2, the calculus and trigonometry load, and its role as an IB DP Mathematics bridge" },
  physics: { name: "Physics", code: "0625", detail: "Papers 2/4 theory, the Paper 6 alternative-to-practical, and the formula recall the mark scheme expects" },
  chemistry: { name: "Chemistry", code: "0620", detail: "Papers 2/4 theory, the Paper 6 alternative-to-practical, and qualitative-analysis recall" },
  biology: { name: "Biology", code: "0610", detail: "Papers 2/4 theory, the Paper 6 alternative-to-practical, and the command-word precision the mark scheme rewards" },
  "physical-science": { name: "Physical Science", code: "0652", detail: "the combined Physics and Chemistry content assessed for a single grade, the Core/Extended tier decision, and the Paper 6 alternative-to-practical" },
  "combined-science": { name: "Combined Science", code: "0653", detail: "the single-award structure across all three sciences and its Paper 6 practical component" },
  "coordinated-sciences": { name: "Coordinated Sciences", code: "0654", detail: "the double-award structure, Papers 2/4 and the alternative-to-practical paper" },
  "computer-science": { name: "Computer Science", code: "0478", detail: "Paper 1 theory and Paper 2 algorithms and programming, including pseudocode and trace tables" },
  ict: { name: "Information and Communication Technology (ICT)", code: "0417", detail: "Paper 1 theory and the Papers 2 and 3 practical tests on documents, data and presentations" },
  economics: { name: "Economics", code: "0455", detail: "Paper 1 multiple choice and Paper 2 structured questions, with diagram accuracy carrying the marks" },
  "business-studies": { name: "Business Studies", code: "0450", detail: "Papers 1 and 2, the case-study application demand, and the evaluation marks most students miss" },
  accounting: { name: "Accounting", code: "0452", detail: "Papers 1 and 2, double-entry accuracy, and final-accounts presentation" },
  geography: { name: "Geography", code: "0460", detail: "Paper 1 themes, Paper 2 skills, and the Paper 4 alternative-to-coursework" },
  history: { name: "History", code: "0470", detail: "Paper 1 structured questions, Paper 2 source investigation, and the depth-study choice" },
  "english-first-language": { name: "English First Language", code: "0500", detail: "Paper 1 reading and Paper 2 directed writing and composition, with the reading-for-ideas marks" },
  "english-second-language": { name: "English as a Second Language", code: "0510", detail: "the reading and writing paper, listening and the speaking test" },
  "english-literature": { name: "Literature in English", code: "0475", detail: "Paper 1 poetry and prose, Paper 2 drama, and the unseen or coursework option" },
  "art-and-design": { name: "Art and Design", code: "0400", detail: "the coursework portfolio and the externally set assignment" },
  drama: { name: "Drama", code: "0411", detail: "the written paper on set texts and the practical coursework performances" },
  french: { name: "French", code: "0520", detail: "listening, reading, writing and the speaking test" },
  spanish: { name: "Spanish", code: "0530", detail: "listening, reading, writing and the speaking test" },
  german: { name: "German", code: "0525", detail: "listening, reading, writing and the speaking test" },
  hindi: { name: "Hindi as a Second Language", code: "0549", detail: "the reading and writing paper, listening and the speaking component" },
  "global-perspectives": { name: "Global Perspectives", code: "0457", detail: "the individual report, team project and written examination" },
  "environmental-management": { name: "Environmental Management", code: "0680", detail: "Papers 1 and 2 and the data-response demand" },
  "food-and-nutrition": { name: "Food and Nutrition", code: "0648", detail: "the theory paper and practical coursework" },
  "physical-education": { name: "Physical Education", code: "0413", detail: "the theory paper and the practical performance assessment" },
  music: { name: "Music", code: "0410", detail: "listening, performing and composing components" },
  sociology: { name: "Sociology", code: "0495", detail: "Papers 1 and 2 and the research-methods demand" },
  "development-studies": { name: "Development Studies", code: "0453", detail: "the written papers and their case-study expectations" },
  "religious-studies": { name: "Religious Studies", code: "0490", detail: "the written papers on set traditions and texts" },
  "travel-and-tourism": { name: "Travel and Tourism", code: "0471", detail: "Papers 1 and 2 and their industry case studies" },
  "design-and-technology": { name: "Design and Technology", code: "0445", detail: "the written paper, the design coursework and the making task" },
  "world-literature": { name: "World Literature", code: "0408", detail: "the set texts, the essay portfolio and the unseen paper" },
};

/** Edexcel IGCSE codes the sitemap uses. */
const EDEXCEL_SUBJECTS: Record<string, Subject & { code?: string }> = {
  maths: { name: "Mathematics A", code: "4MA1", detail: "Papers 1 and 2 at Higher tier and the formula sheet Edexcel does and does not provide" },
  physics: { name: "Physics", code: "4PH1", detail: "Papers 1 and 2 and the practical-skills questions embedded in them" },
  chemistry: { name: "Chemistry", code: "4CH1", detail: "Papers 1 and 2 and the calculation-heavy question style" },
  biology: { name: "Biology", code: "4BI1", detail: "Papers 1 and 2 and the extended-response marks" },
  "science-double-award": { name: "Science (Double Award)", code: "4SD0", detail: "the Physics, Chemistry and Biology papers that together carry two IGCSE grades" },
  economics: { name: "Economics", code: "4EC1", detail: "the single written paper and its data-response section" },
  "business-studies": { name: "Business", code: "4BS1", detail: "Papers 1 and 2 and their case-study application" },
  business: { name: "Business", code: "4BS1", detail: "Papers 1 and 2 and their case-study application" },
  geography: { name: "Geography", code: "4GE1", detail: "Papers 1 and 2, the fieldwork questions and the geographical-skills demand" },
  history: { name: "History", code: "4HI1", detail: "Papers 1 and 2, the depth studies and the source work" },
  "english-language-b": { name: "English Language B", code: "4EB1", detail: "the single written paper, its reading passages and the directed and imaginative writing tasks" },
  "english-language": { name: "English Language A", code: "4EA1", detail: "Papers 1 and 2, the anthology texts and the transactional writing task" },
  "english-literature": { name: "English Literature", code: "4ET1", detail: "Papers 1 and 2, the set texts, the poetry anthology and the unseen poetry question" },
  "further-pure-maths": { name: "Further Pure Mathematics", code: "4PM1", detail: "Papers 1 and 2 and its role as an A Level and IB DP bridge" },
  "further-maths": { name: "Further Pure Mathematics", code: "4PM1", detail: "Papers 1 and 2 and its role as an A Level and IB DP bridge" },
  ict: { name: "Information and Communication Technology", code: "4IT1", detail: "the theory paper and the practical paper" },
  "computer-science": { name: "Computer Science", code: "4CP0", detail: "Papers 1 and 2 including the programming component" },
};

/* ------------------------------------------------------------------ */
/* Slug classification                                                 */
/* ------------------------------------------------------------------ */

export type PageKind =
  | "hub"
  | "zone"
  | "locality"
  | "society"
  | "brand"
  | "locality-subject"
  | "school"
  | "keyword";

export interface PageMeta {
  slug: string;
  path: string;
  kind: PageKind;
  board: Board;
  subject: string;
  subjectDetail: string;
  level: string;
  /** Locality display name, or "Mumbai" for city-wide pages. */
  locality: string;
  localitySlug?: string;
  zone?: MumbaiZoneSlug;
  school?: string;
  primaryKeyword: string;
  searchIntent: string;
  h1: string;
  title: string;
  metaDescription: string;
  parentPage: string;
  uniqueAngle: string;
  priority: number;
}

const WORDS: Record<string, string> = {
  tutor: "tutor",
  tutors: "tutors",
  tuition: "tuition",
  coaching: "coaching",
  classes: "classes",
  teacher: "teacher",
};

const titleCase = (slug: string) =>
  slug
    .split("-")
    .map((w) => (w.length <= 2 && w !== "ib" ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");

/** Board implied by the slug. "ib-igcse-" and "international" mean both. */
function boardOf(slug: string): Board {
  const bothPatterns = /ib-igcse|igcse-ib|international-board|international-curriculum|international-school/;
  if (bothPatterns.test(slug)) return "IB + IGCSE";
  const hasIgcse = /(^|-)(igcse|cambridge|edexcel|checkpoint)/.test(slug);
  const hasIb = /(^|-)(ib|myp|pyp|dp)(-|$)/.test(slug) || /ibgram/.test(slug);
  if (hasIgcse && hasIb) return "IB + IGCSE";
  if (hasIgcse) return "IGCSE";
  if (hasIb) return "IB";
  return "IB + IGCSE";
}

/** Programme level implied by the slug. */
function levelOf(slug: string): string {
  if (/-hl(-|$)/.test(slug)) return "IB DP Higher Level (HL)";
  if (/-sl(-|$)/.test(slug)) return "IB DP Standard Level (SL)";
  if (/ib-dp|diploma|dp-year|year-1|year-2/.test(slug)) return "IB Diploma Programme (DP), Years 1-2";
  if (/myp/.test(slug)) return "IB Middle Years Programme (MYP), Years 1-5";
  if (/pyp/.test(slug)) return "IB Primary Years Programme (PYP)";
  if (/grade-9|year-9/.test(slug)) return "IGCSE Year 9 / Grade 9";
  if (/grade-10|year-10/.test(slug)) return "IGCSE Year 10 / Grade 10";
  if (/grade-11|year-11/.test(slug)) return "Year 11 / IB DP1";
  if (/grade-12|year-12/.test(slug)) return "Year 12 / IB DP2";
  if (/checkpoint/.test(slug)) return "Cambridge Lower Secondary Checkpoint";
  if (/igcse/.test(slug)) return "IGCSE Years 9-11";
  return "IB and IGCSE, Years 1-12";
}

/** Subject implied by the slug, with its syllabus detail. */
function subjectOf(slug: string, board: Board): Subject {
  const edexcel = /edexcel/.test(slug);
  const table = edexcel ? EDEXCEL_SUBJECTS : board === "IGCSE" ? IGCSE_SUBJECTS : IB_DP_SUBJECTS;
  // Longest token match first so "english-a-language-and-literature" beats "english".
  const keys = Object.keys(table).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (slug.includes(key)) {
      const s = table[key];
      const code = (s as { code?: string }).code;
      return { name: code ? `${s.name} (${code})` : s.name, detail: s.detail };
    }
  }
  // Non-subject slugs: cross-board tables as a fallback, then a programme-level default.
  for (const t of [IB_DP_SUBJECTS, IGCSE_SUBJECTS]) {
    for (const key of Object.keys(t).sort((a, b) => b.length - a.length)) {
      if (slug.includes(key)) return t[key];
    }
  }
  if (/myp/.test(slug)) return { name: "MYP subject groups", detail: "the eight MYP subject groups, criteria A-D marking, and the personal project in Year 5" };
  if (/pyp/.test(slug)) return { name: "PYP transdisciplinary learning", detail: "the transdisciplinary themes, units of inquiry, the learner profile and the Year 6 exhibition" };
  return { name: "all IB and IGCSE subjects", detail: "subject choice across both boards, HL/SL and Core/Extended decisions, and the internal assessments each one carries" };
}

/** The locality a `-in-<slug>` page targets, if any. */
function localityOf(slug: string): MumbaiLocality | undefined {
  const m = slug.match(/-in-([a-z0-9-]+)$/);
  if (m && LOCALITY_BY_SLUG.has(m[1])) return LOCALITY_BY_SLUG.get(m[1]);
  if (LOCALITY_BY_SLUG.has(slug)) return LOCALITY_BY_SLUG.get(slug);
  return undefined;
}

/** The school a `-for-<slug>-students` page targets, if any. */
function schoolOf(slug: string) {
  const m = slug.match(/-for-([a-z0-9-]+)-students$/);
  if (!m) return undefined;
  return MUMBAI_SCHOOLS.find((s) => s.slug === m[1]);
}

const ZONE_SLUGS = new Set(Object.keys(MUMBAI_ZONES));
const BRAND_SLUGS = new Set(["ibgram", "ibgram-mumbai", "ibgram-contact", "ibgram-results", "ibgram-reviews", "why-choose-ibgram"]);

function kindOf(slug: string, locality?: MumbaiLocality, school?: ReturnType<typeof schoolOf>): PageKind {
  if (slug === "") return "hub";
  if (ZONE_SLUGS.has(slug)) return "zone";
  if (BRAND_SLUGS.has(slug)) return "brand";
  if (school) return "school";
  if (locality && LOCALITY_BY_SLUG.has(slug)) return locality.isSociety ? "society" : "locality";
  if (locality) return "locality-subject";
  return "keyword";
}

/** Service phrase the slug is selling, used in the H1 and title. */
function serviceOf(slug: string): string {
  if (/home-tuition/.test(slug)) return "Home Tuition";
  if (/home-tutor/.test(slug)) return "Home Tutor";
  if (/online-tuition/.test(slug)) return "Online Tuition";
  if (/online-tutor/.test(slug)) return "Online Tutor";
  if (/private-tutor/.test(slug)) return "Private Tutor";
  if (/near-me/.test(slug)) return "Tutors Near Me";
  if (/coaching/.test(slug)) return "Coaching";
  if (/classes/.test(slug)) return "Classes";
  if (/tuition/.test(slug)) return "Tuition";
  if (/tutors(-|$)/.test(slug)) return "Tutors";
  return "Tutor";
}

const boardLabel = (b: Board) => (b === "IB + IGCSE" ? "IB & IGCSE" : b);

/**
 * Short subject label for <title>, which Google truncates around 60 characters.
 * "Information and Communication Technology (ICT) (0417)" -> "ICT (0417)";
 * "Mathematics: Analysis and Approaches" -> "Maths AA".
 */
function shortSubject(name: string): string {
  const acronym = name.match(/\(([A-Z]{2,5})\)/);
  const code = name.match(/\((\d{4})\)/);
  let short = name;
  if (acronym) short = acronym[1];
  else short = name.replace(/\s*\(\d{4}\)/, "");
  short = short
    .replace(/^Mathematics: Analysis and Approaches$/, "Maths AA")
    .replace(/^Mathematics: Applications and Interpretation$/, "Maths AI")
    .replace(/^Additional Mathematics$/, "Add Maths")
    .replace(/^Further Pure Mathematics$/, "Further Pure Maths")
    .replace(/^Literature in English$/, "English Lit")
    .replace(/^English (First Language|Language A)$/, "English Lang")
    .replace(/^English as a Second Language$/, "English (ESL)")
    .replace(/^Information and Communication Technology$/, "ICT")
    .replace(/^Mathematics( A)?$/, "Maths")
    .replace(/^English A: Language and Literature$/, "English A Lang & Lit")
    .replace(/^English A: Literature$/, "English A Lit")
    .replace(/^Environmental Systems and Societies$/, "ESS")
    .replace(/^Sports, Exercise and Health Science$/, "SEHS")
    .replace(/^Creativity, Activity, Service \(CAS\)$/, "CAS")
    .replace(/^Theory of Knowledge \(TOK\)$/, "TOK")
    .replace(/^Extended Essay \(EE\)$/, "EE");
  return code && !/\(\d{4}\)/.test(short) ? `${short} (${code[1]})` : short;
}

/** Short form of a place name for <title>. "Bandra Kurla Complex (BKC)" -> "BKC". */
function shortPlace(name: string): string {
  const acronym = name.match(/\(([A-Z]{2,5})\)/);
  if (acronym) return acronym[1];
  // "Hiranandani Estate, Thane" -> "Hiranandani Estate"; "Santacruz, Juhu, Malad and Thane" -> "Santacruz"
  return name.split(",")[0].trim();
}

/**
 * Keeps a title inside Google's ~60-character display limit: try the full form, then the
 * short form, then drop the brand suffix. Anything still over is truncated at a word
 * boundary rather than mid-word, because a title Google cuts itself reads worse.
 */
function fitTitle(full: string, short: string): string {
  const bare = short.replace(/ \| IB Gram$/, "");
  // Shed the lowest-value tokens in order, never the trailing place name: a title
  // truncated from the right loses "in Mumbai", which is the point of the page.
  // Last resort keeps the tail and elides the middle instead.
  const candidates = [
    full,
    short,
    bare,
    bare.replace(/ \((?:\d{4}|4[A-Z]{2}\d)\)/, ""),              // drop the syllabus code
    bare.replace(/^(?:Cambridge|Edexcel|Pearson Edexcel) /, ""),  // drop the board prefix
    bare.replace(/ \((?:\d{4}|4[A-Z]{2}\d)\)/, "").replace(/^(?:Cambridge|Edexcel|Pearson Edexcel) /, ""),
  ];
  for (const c of candidates) if (c.length <= 60) return c;
  const squeezed = candidates[candidates.length - 1];
  const tail = squeezed.match(/ (?:in|for|near) [^,|]+$/)?.[0] ?? "";
  const head = squeezed.slice(0, squeezed.length - tail.length);
  const room = 60 - tail.length - 1;
  if (room <= 12) return squeezed.slice(0, 60).replace(/[\s,:|]+$/, "");
  return `${head.slice(0, head.lastIndexOf(" ", room)).replace(/[\s,:|]+$/, "")}${tail}`;
}

/** Trim to a word boundary at or before `max`, with no trailing punctuation. */
function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(" ", max);
  return text.slice(0, cut > max * 0.6 ? cut : max).replace(/[\s,:;|]+$/, "");
}

function buildMeta(slug: string, path: string): PageMeta {
  const locality = localityOf(slug);
  const school = schoolOf(slug);
  const kind = kindOf(slug, locality, school);
  const board = boardOf(slug);
  const subject = subjectOf(slug, board);
  const level = levelOf(slug);
  const service = serviceOf(slug);
  // A zone page's own slug IS the zone; deriving it from a locality lookup left it undefined,
  // which emptied the zone -> locality -> subject link chain the long tail depends on.
  const zone = kind === "zone" ? (slug as MumbaiZoneSlug) : locality?.zone;
  const place = locality ? locality.name : kind === "zone" ? MUMBAI_ZONES[slug as MumbaiZoneSlug].name : "Mumbai";
  const keyword = titleCase(slug.replace(/-/g, " ").trim()) || "IB & IGCSE Tutors in Mumbai";

  // Human phrase for the primary keyword, built from the slug the way a parent types it:
  // acronyms upper-cased, the place name spelled as the place spells itself.
  const humanise = (s: string) =>
    s
      .replace(/-/g, " ")
      .replace(/\b(ib|igcse|dp|myp|pyp|hl|sl|tok|ee|cas|ia|ict|aa|ai)\b/g, (w) => w.toUpperCase())
      .replace(/\bibgram\b/g, "IB Gram")
      .replace(/\bmumbai\b/g, "Mumbai");
  // A bare locality or zone slug carries no service words of its own ("/mumbai/powai/"),
  // so naming the service explicitly beats echoing the place twice ("powai in Powai").
  const barePlace = kind === "locality" || kind === "society" || kind === "zone";
  const primaryKeyword =
    kind === "hub"
      ? "IB and IGCSE tutors in Mumbai"
      : barePlace
        ? `IB and IGCSE home tutor in ${place}`
        : (locality
            ? `${humanise(slug.replace(/-in-[a-z0-9-]+$/, ""))} in ${locality.name}`
            : humanise(slug) + (/mumbai/.test(slug) ? "" : " in Mumbai")
          ).replace(/\s+/g, " ");

  let h1: string;
  let title: string;
  let metaDescription: string;
  let searchIntent: string;
  let uniqueAngle: string;
  let parentPage = "/mumbai/";
  let priority = 5;

  switch (kind) {
    case "hub":
      h1 = "IB & IGCSE Home Tutors in Mumbai";
      title = "IB & IGCSE Home Tutors in Mumbai | IB Gram";
      metaDescription =
        "Find verified IB and IGCSE home tutors across Mumbai — South Mumbai, the Western and Central Suburbs, Navi Mumbai and Thane. Subject-specialist tutors for PYP, MYP, DP and IGCSE.";
      searchIntent = "A parent anywhere in Mumbai looking for an IB or IGCSE tutor and deciding where to start.";
      uniqueAngle = "The city-wide hub: every zone, every board, every subject, linking down to all 2,218 Mumbai pages.";
      parentPage = "/";
      priority = 10;
      break;
    case "zone": {
      const z = MUMBAI_ZONES[slug as MumbaiZoneSlug];
      // "South Mumbai, Mumbai" reads wrong; the zone name already carries the city where it should.
      const zonePlace = /mumbai/i.test(z.name) ? z.name : `${z.label.replace(/^the /, "the ")}, Mumbai`;
      h1 = `IB & IGCSE Home Tutors in ${zonePlace}`;
      title = fitTitle(`IB & IGCSE Tutors in ${zonePlace} | Verified Home Tutors`, `IB & IGCSE Tutors in ${z.label} | IB Gram`);
      metaDescription = `Verified IB and IGCSE home tutors across ${z.name}, Mumbai. Subject specialists for PYP, MYP, DP and IGCSE, matched to your locality and your child's school calendar.`;
      searchIntent = `A parent in ${z.name} choosing a tutor and wanting to know which localities and schools are covered.`;
      uniqueAngle = `The ${z.name} zone page: its corridors, its travel reality (${clip(z.travel, 80)}...) and every locality beneath it.`;
      priority = 9;
      break;
    }
    case "locality":
    case "society": {
      const l = locality!;
      h1 = `IB & IGCSE Home Tutors in ${l.name}, Mumbai`;
      title = fitTitle(`IB & IGCSE Tutors in ${l.name}, Mumbai | Verified Home Tutors`, `IB & IGCSE Home Tutors in ${l.name}, Mumbai`);
      metaDescription = `Verified IB and IGCSE home tutors in ${l.name}, ${MUMBAI_ZONES[l.zone].name}. Subject specialists for PYP, MYP, DP and IGCSE who know the ${l.schools[0]} calendar.`;
      searchIntent = `A parent living in ${l.name} looking for a tutor who will come to their home.`;
      uniqueAngle = l.note;
      parentPage = `/mumbai/${l.zone}/`;
      priority = 8;
      break;
    }
    case "brand":
      h1 =
        slug === "why-choose-ibgram"
          ? "Why Mumbai Parents Choose IB Gram"
          : slug === "ibgram-results"
            ? "IB Gram Results: What Mumbai Students Achieve"
            : slug === "ibgram-reviews"
              ? "IB Gram Reviews from Mumbai Parents"
              : slug === "ibgram-contact"
                ? "Contact IB Gram in Mumbai"
                : "IB Gram Mumbai: IB & IGCSE Home Tutors";
      title = `${h1} | IB Gram`;
      metaDescription = `${h1}. How IB Gram matches verified IB and IGCSE tutors to families across Mumbai, what we check, and what we do not promise.`;
      searchIntent = "A parent who has heard of IB Gram and is checking whether it is credible before enquiring.";
      uniqueAngle = "A brand page: honest about the matching process, the verification steps and the limits. No grade guarantees.";
      priority = 7;
      break;
    case "school": {
      const sc = school!;
      h1 = `IB & IGCSE Tutors for ${sc.name} Students`;
      title = fitTitle(`${sc.name} Tutors | IB & IGCSE Support in ${sc.area}`, `${shortPlace(sc.name)} IB & IGCSE Tutors | IB Gram`);
      metaDescription = `Verified IB and IGCSE tutors for ${sc.name} students in ${sc.area}, Mumbai. Tutors who know the ${sc.boards} calendar, its assessment deadlines and its subject pathways.`;
      searchIntent = `A parent whose child attends ${sc.name} looking for subject support aligned to that school's calendar.`;
      uniqueAngle = `Written around ${sc.name} in ${sc.area} and its ${sc.boards} pathway. Must state plainly that IB Gram is independent and not affiliated with the school.`;
      priority = 7;
      break;
    }
    case "locality-subject": {
      const l = locality!;
      // The slug targets HL or SL specifically, so the H1 and title must carry that marker
      // or the page competes with its own SL/HL sibling for the same query.
      const tier = /-hl(-|$)/.test(slug) ? " HL" : /-sl(-|$)/.test(slug) ? " SL" : "";
      const prefix = board === "IB" && /ib-dp/.test(slug) ? "IB DP " : board === "IGCSE" ? `${/edexcel/.test(slug) ? "Edexcel " : /cambridge/.test(slug) ? "Cambridge " : ""}IGCSE ` : `${boardLabel(board)} `;
      // A slug with no subject in it ("ib-home-tutor-in-powai") must not inherit the
      // placeholder subject label, or the H1 reads "all IB and IGCSE subjects Tutor".
      const subjectLabel = subject.name === "all IB and IGCSE subjects" ? "" : `${subject.name}${tier} `;
      const shortLabel = subject.name === "all IB and IGCSE subjects" ? "" : `${shortSubject(subject.name)}${tier} `;
      h1 = `${prefix}${subjectLabel}${service} in ${l.name}, Mumbai`;
      title = fitTitle(`${prefix}${subjectLabel}${service} in ${l.name} | IB Gram`, `${prefix}${shortLabel}${service} in ${shortPlace(l.name)}`);
      metaDescription = `${boardLabel(board)} ${subject.name} ${service.toLowerCase()} in ${l.name}, Mumbai. Verified subject specialists covering ${clip(subject.detail, 70)}. Home, online and hybrid lessons.`;
      searchIntent = `A parent in ${l.name} looking specifically for ${subject.name} help at ${level}.`;
      uniqueAngle = `${subject.name} in ${l.name}: ${l.note}`;
      parentPage = `/mumbai/${l.zone}/`;
      priority = 4;
      break;
    }
    default: {
      // Keyword pages get the same construction as locality pages: board prefix, proper
      // subject name, the HL/SL tier the slug targets, then the service phrase. Building the
      // H1 from the raw slug produced "IB dp Economics sl Home Tuition".
      const tier = /-hl(-|$)/.test(slug) ? " HL" : /-sl(-|$)/.test(slug) ? " SL" : "";
      const prefix = /ib-dp/.test(slug)
        ? "IB DP "
        : /ib-myp/.test(slug)
          ? "IB MYP "
          : /ib-pyp/.test(slug)
            ? "IB PYP "
            : board === "IGCSE"
              ? `${/edexcel/.test(slug) ? "Edexcel " : /cambridge/.test(slug) ? "Cambridge " : ""}IGCSE `
              : board === "IB"
                ? "IB "
                : "IB & IGCSE ";
      const named = subject.name !== "all IB and IGCSE subjects" && subject.name !== "MYP subject groups" && subject.name !== "PYP transdisciplinary learning";
      h1 = named
        ? `${prefix}${subject.name}${tier} ${service} in Mumbai`.replace("all IB and IGCSE subjects ", "")
        : `${titleCase(slug)} in Mumbai`
            .replace(/\b(Ib|Igcse|Dp|Myp|Pyp|Hl|Sl|Tok|Ee|Cas|Ia|Ict)\b/g, (w) => w.toUpperCase())
            .replace(/\bIbgram\b/g, "IB Gram")
            .replace(/ in Mumbai in Mumbai$/, " in Mumbai");
      if (/mumbai/i.test(slug)) h1 = h1.replace(/ in Mumbai$/, "");
      title = fitTitle(`${h1} | IB Gram`, named ? `${prefix}${shortSubject(subject.name)}${tier} ${service} in Mumbai` : h1);
      metaDescription = `${h1}. Verified ${boardLabel(board)} specialists across Mumbai covering ${clip(subject.detail, 80)}. Home, online and hybrid lessons.`;
      searchIntent = `A Mumbai parent searching "${primaryKeyword}".`;
      uniqueAngle = `City-wide keyword page owning the exact intent of "${primaryKeyword}" — ${subject.name} at ${level}.`;
      priority = 6;
      break;
    }
  }

  return {
    slug,
    path,
    kind,
    board,
    subject: subject.name,
    subjectDetail: subject.detail,
    level,
    locality: place,
    localitySlug: locality?.slug,
    zone,
    school: school?.name,
    primaryKeyword,
    searchIntent,
    h1,
    title,
    metaDescription: metaDescription.length > 158 ? `${clip(metaDescription, 155)}...` : metaDescription,
    parentPage,
    uniqueAngle,
    priority,
  };
}

/* ------------------------------------------------------------------ */
/* Briefs                                                             */
/* ------------------------------------------------------------------ */

function secondaryKeywords(m: PageMeta): string[] {
  const place = m.locality;
  const board = m.board === "IB + IGCSE" ? "IB and IGCSE" : m.board;
  const subj = m.subject;
  const out = [
    `${board} home tutor in ${place}`,
    `${board} home tuition in ${place}`,
    `${subj} tutor in ${place}`,
    `${board} online tutor in ${place}`,
    `best ${board} tutor in ${place}`,
    `${board} tutors near me ${place}`,
    `${subj} home classes ${place}`,
    `${board} private tutor ${place}`,
    `${board} tuition fees in ${place}`,
    `${subj} ${m.level} tutor Mumbai`,
    `${board} tutor Mumbai`,
    `home tutor for ${subj} Mumbai`,
  ];
  return [...new Set(out)];
}

function mustCover(m: PageMeta, l?: MumbaiLocality): string[] {
  const base = [
    `What "${m.primaryKeyword}" actually gets the parent: who the tutor is, how they were checked, what the first session looks like.`,
    `${m.subject} specifics: ${m.subjectDetail}.`,
    `How ${m.board === "IB + IGCSE" ? "IB and IGCSE" : m.board} assessment deadlines fall across the Mumbai school year, and which months are the pressure points.`,
    "Home versus online versus hybrid for this exact request, with honest trade-offs rather than a sales pitch.",
    "What fees depend on (board, level, subject scarcity, travel distance, session length) without inventing a price list.",
    "What progress realistically looks like at four weeks, one term and one exam cycle.",
    "What to do when a tutor is not working out, and how a replacement happens.",
    "An explicit statement that IB Gram is an independent platform, not affiliated with any school named, and does not guarantee grades.",
  ];
  if (l) {
    base.push(
      `${l.name} specifics: it sits on the ${l.corridor}, nearest station ${l.station}, and a tutor also covers ${l.nearby.join(", ")}.`,
      `The travel reality: ${MUMBAI_ZONES[l.zone].travel}`,
      `The school ecosystem families here live by: ${l.schools.join(", ")} — named as local context only.`,
      `The one thing that is true here and nowhere else: ${l.note}`,
    );
    if (l.societies?.length) base.push(`Named societies in ${l.name}: ${l.societies.join(", ")} — gate access, visitor passes and where lessons actually happen.`);
    if (l.isSociety) base.push(`This page is about a single residential complex, not a suburb. Write about the building: its towers, its clubhouse or study areas, its visitor protocol, and the schools its residents attend.`);
  } else {
    base.push(
      "Mumbai-wide coverage named precisely: South Mumbai, the Western Suburbs, the Central and Eastern Suburbs, Navi Mumbai and Thane, with at least two named localities in each.",
      "The Mumbai travel reality: Western, Central and Harbour lines, Metro Lines 1, 2A, 3 and 7, the Western and Eastern Express Highways, the Sea Link, the Coastal Road and the Atal Setu.",
    );
  }
  return base;
}

function run() {
  const xml = readFileSync(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const mumbai = locs
    .map((u) => u.replace(/^https?:\/\/[^/]+/, ""))
    .filter((p) => p.startsWith("/mumbai/"))
    .map((p) => (p.endsWith("/") ? p : `${p}/`));

  const seen = new Set<string>();
  const metas: PageMeta[] = [];
  for (const path of mumbai) {
    const slug = path.replace(/^\/mumbai\/?/, "").replace(/\/$/, "");
    if (seen.has(slug)) continue;
    seen.add(slug);
    metas.push(buildMeta(slug, slug ? `/mumbai/${slug}/` : "/mumbai/"));
  }

  // Siblings: pages a writer must not poach from. Keyed by the cluster a page sits in.
  const clusterOf = (m: PageMeta) => (m.localitySlug ? `loc:${m.localitySlug}` : `kind:${m.kind}:${m.subject}`);
  const clusters = new Map<string, PageMeta[]>();
  for (const m of metas) {
    const k = clusterOf(m);
    clusters.set(k, [...(clusters.get(k) ?? []), m]);
  }

  mkdirSync(join(OUT_TMP, "briefs"), { recursive: true });
  mkdirSync(join(OUT_TMP, "agent-out"), { recursive: true });
  mkdirSync(OUT_LIB, { recursive: true });

  for (const m of metas) {
    const l = m.localitySlug ? LOCALITY_BY_SLUG.get(m.localitySlug) : undefined;
    const siblings = (clusters.get(clusterOf(m)) ?? [])
      .filter((s) => s.slug !== m.slug)
      .slice(0, 14)
      .map((s) => ({ slug: s.slug, owns: s.searchIntent }));
    const brief = {
      ...m,
      keyword: m.primaryKeyword,
      secondary: secondaryKeywords(m),
      mustCover: mustCover(m, l),
      siblings,
      locality: l
        ? {
            name: l.name,
            zone: MUMBAI_ZONES[l.zone].name,
            zoneLabel: MUMBAI_ZONES[l.zone].label,
            corridor: l.corridor,
            station: l.station,
            nearby: l.nearby,
            societies: l.societies ?? [],
            schools: l.schools,
            note: l.note,
            travel: MUMBAI_ZONES[l.zone].travel,
            transport: MUMBAI_ZONES[l.zone].transport,
            isSociety: Boolean(l.isSociety),
          }
        : null,
      zones: Object.values(MUMBAI_ZONES).map((z) => ({ name: z.name, label: z.label, travel: z.travel, transport: z.transport })),
      schoolsCitywide: MUMBAI_SCHOOLS.map((s) => `${s.name} (${s.area}, ${s.boards})`),
    };
    writeFileSync(join(OUT_TMP, "briefs", `${m.slug || "index"}.json`), `${JSON.stringify(brief, null, 2)}\n`, "utf8");
  }

  // Waves: money pages first. Hub, zones, localities, brand and schools, then keywords, then the long tail.
  const waves = {
    wave1: metas.filter((m) => m.priority >= 7).map((m) => m.slug || "index"),
    wave2: metas.filter((m) => m.kind === "keyword").map((m) => m.slug),
    wave3: metas.filter((m) => m.kind === "locality-subject").map((m) => m.slug),
  };
  writeFileSync(join(OUT_TMP, "waves.json"), `${JSON.stringify(waves, null, 2)}\n`, "utf8");

  // Metadata ships as JSON + ONE cast, not 2,219 inline TS object literals. As a
  // typed TS array literal this file hit `TS2590: Expression produces a union type
  // that is too complex to represent` and failed the production build outright:
  // 2,219 literals x union-typed fields (kind/board) exceeds what tsc can model.
  // ./pages/*.json already does exactly this for the prose shards. plan.ts stays
  // the guarantor of the shape.
  const dataJson = JSON.stringify(
    metas.map((m) => ({
      slug: m.slug,
      path: m.path,
      kind: m.kind,
      board: m.board,
      subject: m.subject,
      level: m.level,
      locality: m.locality,
      localitySlug: m.localitySlug,
      zone: m.zone,
      school: m.school,
      primaryKeyword: m.primaryKeyword,
      h1: m.h1,
      title: m.title,
      metaDescription: m.metaDescription,
      parentPage: m.parentPage,
      uniqueAngle: m.uniqueAngle,
    })),
    null,
    1,
  );
  writeFileSync(join(OUT_LIB, "pages-data.json"), `${dataJson}
`, "utf8");

  const dataTs = `// GENERATED by scripts/mumbai-seo/plan.ts from sitemap-mumbai.xml. Do not edit by hand.
// ${metas.length} pages under the /mumbai/ hub. Metadata only; prose lives in ./pages/*.json.
// Rows live in ./pages-data.json and are cast once here — inline TS literals at
// this scale trip TS2590 and break the build.
import type { MumbaiSeoPageMeta } from "./types";
import rows from "./pages-data.json";

export const mumbaiSeoPagesMeta = rows as unknown as MumbaiSeoPageMeta[];
`;
  writeFileSync(join(OUT_LIB, "pages-data.ts"), dataTs, "utf8");

  const byKind = metas.reduce<Record<string, number>>((a, m) => ({ ...a, [m.kind]: (a[m.kind] ?? 0) + 1 }), {});
  console.log(`${metas.length} Mumbai pages planned`);
  console.table(byKind);
  console.log(`wave1 (money pages): ${waves.wave1.length}`);
  console.log(`wave2 (keyword pages): ${waves.wave2.length}`);
  console.log(`wave3 (locality x subject): ${waves.wave3.length}`);
  console.log(`briefs -> tmp/mumbai-seo/briefs/`);
}

run();
