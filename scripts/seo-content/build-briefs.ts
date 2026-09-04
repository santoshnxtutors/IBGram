/**
 * Turns tmp/seo/url-context.json into one compact writing brief per URL.
 * Each brief carries the real local facts, the keyword set, and a rotation "angle"
 * so no two pages share an opening move or section order.
 * Run: npx tsx scripts/seo-content/build-briefs.ts
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CTX = path.join(ROOT, "tmp", "seo", "url-context.json");
const OUT_DIR = path.join(ROOT, "tmp", "seo", "briefs");

type Any = Record<string, any>;

/** Distinct opening angles - rotated so neighbouring pages never read alike. */
const ANGLES = [
  "Open on a specific scheduling problem a local family faces on a school night, then widen out.",
  "Open by contrasting what parents usually search for with what actually fixes the grade.",
  "Open with the academic calendar: what is due this term and how late is too late to start.",
  "Open on the difference between a school teacher's job and a tutor's job for this cohort.",
  "Open with the commute and travel-time reality of this locality, then move to lesson mode.",
  "Open on a diagnostic question: what does a parent actually need to know before booking?",
  "Open with the most common wrong assumption parents make about this subject or programme.",
  "Open on the gap between a predicted grade and a final grade, and what closes it.",
  "Open with the shortlisting process itself: how to compare two tutors properly.",
  "Open on what changes for a student between the start and the end of an academic year here.",
  "Open with a cost-and-value framing: what an hour of tutoring should actually buy.",
  "Open on the handover problem: what breaks when a student switches tutors mid-course.",
  "Open with the assessment mechanics (IA, coursework, papers) that drive the timetable.",
  "Open on how a first session should feel and what should come out of it.",
  "Open with the local school ecosystem and the demands it places on students.",
  "Open on the difference between exam-season firefighting and year-long support.",
  "Open with a short, plain answer to the searcher's question, then earn it back with detail.",
  "Open on study habits specific to this stage, then connect them to tutor selection.",
  "Open with what online tutoring genuinely does better, and where it does not.",
  "Open on the parent's decision timeline: this week, this month, this term.",
];

/** Section orders - rotated so the page skeleton itself varies. */
const BLOCK_ORDERS: string[][] = [
  ["intro", "matching_process", "subjects", "programmes", "local_areas", "tutoring_modes", "schools", "verification", "trust", "cta"],
  ["intro", "subjects", "programmes", "tutoring_modes", "matching_process", "local_areas", "verification", "schools", "trust", "cta"],
  ["intro", "programmes", "local_areas", "subjects", "schools", "matching_process", "tutoring_modes", "trust", "verification", "cta"],
  ["intro", "local_areas", "tutoring_modes", "subjects", "matching_process", "programmes", "schools", "verification", "trust", "cta"],
  ["intro", "matching_process", "programmes", "tutoring_modes", "subjects", "schools", "local_areas", "trust", "verification", "cta"],
  ["intro", "subjects", "matching_process", "local_areas", "programmes", "verification", "tutoring_modes", "schools", "trust", "cta"],
  ["intro", "tutoring_modes", "subjects", "local_areas", "programmes", "matching_process", "trust", "schools", "verification", "cta"],
];

const IB_SUBJECT_KEYWORDS: Record<string, string[]> = {
  "math-aa-hl": ["IB Math AA HL tutor", "IB Maths AA tutor", "Math Analysis and Approaches tutor"],
  "math-ai-hl": ["IB Math AI HL tutor", "Math Applications and Interpretation tutor", "IB Maths AI tutor"],
  physics: ["IB Physics HL tutor", "IB Physics SL tutor", "IB Physics IA help"],
  chemistry: ["IB Chemistry HL tutor", "IB Chemistry SL tutor", "IB Chemistry IA help"],
  economics: ["IB Economics HL tutor", "IB Economics IA tutor", "IB Economics SL tutor"],
  biology: ["IB Biology HL tutor", "IB Biology SL tutor", "IB Biology IA help"],
  english: ["IB English A tutor", "IB English Language and Literature tutor", "IB English Paper 1 tutor"],
  dp: ["IB DP tutor", "IB Diploma tutor", "IB DP home tuition"],
  myp: ["IB MYP tutor", "MYP eAssessment tutor", "IB MYP home tuition"],
  pyp: ["IB PYP tutor", "IB PYP home tuition", "primary years IB tutor"],
  cp: ["IB CP tutor", "IB Career-related Programme tutor"],
  subjects: ["IB subject tutor", "IB subject tuition"],
};

function subjectKeywords(curriculum: string, slug: string, name: string): string[] {
  if (curriculum === "IB" && IB_SUBJECT_KEYWORDS[slug]) return IB_SUBJECT_KEYWORDS[slug];
  return [`${name} tutor`, `${name} tuition`, `${name} online tutor`];
}

function keywordsFor(item: Any): { primary: string; secondary: string[] } {
  const cur = item.curriculum ?? "IB";
  const city = item.city?.cityName ?? "";
  const place = item.placeName ?? "";
  const subject = item.subjectName ?? "";
  const type = item.pageType;

  if (type === "city") {
    return {
      primary: `${cur} tutors in ${city}`,
      secondary: [
        `${cur} home tutor in ${city}`, `${cur} online tutor ${city}`, `${cur} home tuition ${city}`,
        `best ${cur} tutors in ${city}`, `${cur} tuition classes ${city}`, `${cur} private tutor ${city}`,
        `${cur} tutor near me ${city}`, `${cur} maths tutor ${city}`, `${cur} science tutor ${city}`,
        `${cur} English tutor ${city}`, `${cur} tutoring fees ${city}`, `${cur} exam preparation ${city}`,
      ],
    };
  }
  if (["area", "sector", "society", "school"].includes(type)) {
    return {
      primary: `${cur} tutors in ${place} ${city}`,
      secondary: [
        `${cur} home tutor ${place}`, `${cur} tuition near ${place}`, `${cur} online tutor ${place} ${city}`,
        `${cur} home tuition ${place} ${city}`, `${cur} private tutor near ${place}`, `${cur} tutor near me ${place}`,
        `best ${cur} tutor ${place}`, `${cur} maths tutor ${place}`, `${cur} science tutor ${place}`,
        `${cur} tutors ${city}`, `${cur} coaching ${place}`, `${cur} tuition centre near ${place}`,
      ],
    };
  }
  const subs = subjectKeywords(cur, item.subjectSlug ?? "", subject);
  return {
    primary: `${subject} tutor in ${city}`,
    secondary: [
      ...subs.map((k) => `${k} in ${city}`),
      `${subject} home tutor ${city}`, `${subject} online tuition ${city}`, `${subject} tuition ${city}`,
      `${subject} tutor near me ${city}`, `best ${subject} tutor ${city}`, `${subject} exam preparation ${city}`,
      `${subject} past paper practice ${city}`, `${subject} private tutor ${city}`, `${cur} tutors in ${city}`,
    ].slice(0, 12),
  };
}

function keyFor(p: string): string {
  return p.replace(/^\/|\/$/g, "").replace(/\//g, "__") || "home";
}

const items: Any[] = JSON.parse(readFileSync(CTX, "utf8"));
const PROGRAMMATIC = new Set(["city", "area", "sector", "society", "school", "subject", "programme"]);

rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const index: Any[] = [];
let n = 0;

for (const item of items) {
  if (!PROGRAMMATIC.has(item.pageType)) continue;
  const city = item.city ?? {};
  const kw = keywordsFor(item);
  const key = keyFor(item.path);
  const angle = ANGLES[n % ANGLES.length];
  const blockOrder = BLOCK_ORDERS[n % BLOCK_ORDERS.length];
  n += 1;

  const brief = {
    key,
    url: item.url,
    path: item.path,
    pageType: item.pageType,
    curriculum: item.curriculum,
    cityName: city.cityName,
    citySlug: city.citySlug,
    stateName: city.stateName,
    placeName: item.placeName ?? null,
    placeType: ["area", "sector", "society", "school"].includes(item.pageType) ? item.pageType : null,
    placeDescription: item.placeDescription || null,
    placeLandmarks: item.placeLandmarks ?? [],
    placeArea: item.placeArea || null,
    placeTypicalNeeds: item.placeTypicalNeeds ?? [],
    // Gurugram sectors and societies carry their own neighbour and school-ecosystem
    // facts (see build-url-context.ts). They were being dropped here, which left the
    // writer with only placeArea and placeLandmarks to tell 296 neighbouring places
    // apart — the single biggest lever against near-duplicate copy.
    placeCluster: item.placeCluster ?? null,
    placeNearbyAreas: item.placeNearbyAreas ?? [],
    placeNearbySectors: item.placeNearbySectors ?? [],
    placeNearbySocieties: item.placeNearbySocieties ?? [],
    placeSchoolEcosystem: item.placeSchoolEcosystem ?? [],
    subjectName: item.subjectName ?? null,
    subjectSlug: item.subjectSlug ?? null,
    primaryKeyword: kw.primary,
    secondaryKeywords: kw.secondary,
    angle,
    blockOrder,
    localFacts: {
      gradeRange: city.gradeRange,
      examSessionFocus: city.examSessionFocus,
      curriculumNotes: city.curriculumNotes,
      assessmentSupport: city.assessmentSupport,
      serviceAreaText: city.serviceAreaText,
      teachingModeNotes: city.teachingModeNotes,
      cityOverview: (city.cityOverview ?? []).slice(0, 3),
      premiumAreas: (city.premiumAreas ?? []).map((a: Any) => ({ name: a.name, landmarks: a.landmarks })),
      nearbyAreas: (city.nearbyAreas ?? []).slice(0, 8),
      nearbyCities: (city.nearbyCities ?? []).map((c: Any) => c.cityName),
      schools: (city.schools ?? []).map((s: Any) => ({ name: s.name, area: s.area })),
      subjects: (city.subjects ?? []).map((s: Any) => s.name),
      programmes: (city.programmes ?? []).map((p: Any) => `${p.name} (${p.ageRange})`),
    },
    schoolDisclaimer: city.schoolDisclaimer,
  };

  writeFileSync(path.join(OUT_DIR, `${key}.json`), JSON.stringify(brief, null, 1), "utf8");
  index.push({ key, path: item.path, pageType: item.pageType, curriculum: item.curriculum, city: city.citySlug, subject: item.subjectSlug ?? null, place: item.placeSlug ?? null });
}

// ---------------------------------------------------------------------------
// National pages: /courses/<curriculum>/<subject>/ and /programmes/<slug>/.
// Same renderer and store, but scoped to India rather than one city.
// ---------------------------------------------------------------------------

const NATIONAL_LABELS: Record<string, string> = {
  biology: "Biology", chemistry: "Chemistry", physics: "Physics", economics: "Economics",
  english: "English", mathematics: "Mathematics", "math-aa-hl": "Math AA HL", "math-ai-hl": "Math AI HL",
  sciences: "Sciences", language: "Language Acquisition", individuals: "Individuals and Societies",
  "individuals-and-societies": "Individuals and Societies", pyp: "Primary Years Programme",
  myp: "Middle Years Programme", dp: "Diploma Programme", cp: "Career-related Programme",
};

const allCities = [...new Set(items.map((i: Any) => i.city?.cityName).filter(Boolean))] as string[];
const topCities = allCities.slice(0, 12);

for (const item of items) {
  if (item.pageType !== "course" && item.pageType !== "programme-core") continue;
  const isProgrammeCore = item.pageType === "programme-core";
  const slug = isProgrammeCore ? item.slug : item.subjectSlug;
  const cur = isProgrammeCore ? "IB" : (item.curriculum || "IB");
  const label = NATIONAL_LABELS[slug] ?? titleFromSlugLocal(slug ?? "index");
  const isProgramme = ["pyp", "myp", "dp", "cp"].includes(slug ?? "");
  const subjectName = slug === "index" || !slug ? `${cur} programmes` : `${cur} ${label}`;
  const key = keyFor(item.path);
  const angle = ANGLES[n % ANGLES.length];
  const blockOrder = BLOCK_ORDERS[n % BLOCK_ORDERS.length];
  n += 1;

  const brief = {
    key,
    url: item.url,
    path: item.path,
    pageType: isProgramme || isProgrammeCore ? "programme" : "subject",
    curriculum: cur,
    scope: "national",
    cityName: "India",
    citySlug: "india",
    stateName: "",
    placeName: null,
    placeType: null,
    placeDescription: null,
    placeLandmarks: [],
    placeArea: null,
    placeTypicalNeeds: [],
    subjectName,
    subjectSlug: slug,
    primaryKeyword: `${subjectName} tutors`,
    secondaryKeywords: [
      `${subjectName} tutor online`, `${subjectName} home tutor`, `${subjectName} tuition India`,
      `online ${subjectName} classes`, `${subjectName} tutor near me`, `best ${subjectName} tutor`,
      `${subjectName} exam preparation`, `${subjectName} past papers help`, `${subjectName} private tutor`,
      `${cur} online tutoring India`, `${subjectName} revision course`, `${subjectName} one to one tuition`,
    ],
    angle,
    blockOrder,
    localFacts: {
      gradeRange: isProgramme || isProgrammeCore ? "Programme-specific age bands" : "Grade 6 to Grade 12",
      examSessionFocus: cur === "IB"
        ? "May and November IB examination sessions, with internal assessment deadlines set by each school."
        : "May/June and October/November Cambridge and Pearson Edexcel series.",
      curriculumNotes: cur === "IB"
        ? "IB tutoring must respect concept-based learning, academic honesty, command terms and criterion-related assessment."
        : "IGCSE tutoring works to published Cambridge and Pearson Edexcel syllabus objectives, assessment objectives and mark schemes.",
      assessmentSupport: "IA and coursework planning, past-paper practice, mark-scheme technique, mock preparation and weekly goal setting",
      serviceAreaText: "Online tutoring is available across India and to families abroad. Home tutoring depends on tutor availability in the city.",
      teachingModeNotes: "Online tutoring gives access to specialist subject tutors regardless of city. Home tutoring suits younger learners and families near a tutor's travel route. Hybrid plans combine both.",
      cityOverview: [],
      premiumAreas: [],
      nearbyAreas: [],
      nearbyCities: topCities,
      schools: [],
      subjects: [],
      programmes: [],
    },
    schoolDisclaimer: "IB Gram is an independent tutoring platform and is not officially affiliated with the IB Organization, Cambridge International or Pearson Edexcel.",
  };

  writeFileSync(path.join(OUT_DIR, `${key}.json`), JSON.stringify(brief, null, 1), "utf8");
  index.push({ key, path: item.path, pageType: brief.pageType, curriculum: cur, city: "india", subject: slug ?? null, place: null });
}

function titleFromSlugLocal(slug: string): string {
  return slug.split("-").filter(Boolean).map((p) => (p.length <= 3 ? p.toUpperCase() : p[0].toUpperCase() + p.slice(1))).join(" ");
}

writeFileSync(path.join(ROOT, "tmp", "seo", "brief-index.json"), JSON.stringify(index, null, 1), "utf8");
console.log(`Wrote ${index.length} briefs -> ${OUT_DIR}`);
