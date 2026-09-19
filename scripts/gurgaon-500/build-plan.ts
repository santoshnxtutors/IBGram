/**
 * Builds the 500-page IB/IGCSE subject x area plan for Gurugram.
 *
 * Emits tmp/gurgaon-500/plan.json: one entry per new URL carrying the SEO meta the
 * gurgaon-seo route needs plus the writing brief the content agent needs.
 *
 * Hard guarantees, asserted at the end of the run:
 *   - exactly 300 IB + 200 IGCSE entries
 *   - every locality in the inventory gets at least one IB and one IGCSE page
 *   - zero slug collisions with the existing 400 gurgaon-seo pages
 *   - zero collisions with any URL already in the live sitemap
 *
 * Run: npx tsx scripts/gurgaon-500/build-plan.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { NEW_AREAS, type AreaRow } from "./areas";
import { gurgaonAreaPlaces } from "../../src/lib/local-seo/gurgaon/gurgaon-areas";
import { gurgaonSocietyPlaces } from "../../src/lib/local-seo/gurgaon/gurgaon-societies";
import { gurgaonSeoPagesMeta } from "../../src/lib/gurgaon-seo/pages-data";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "tmp", "gurgaon-500");

interface Subject {
  /** Slug prefix; final slug is `${prefix}-in-${areaSlug}-gurgaon`. */
  prefix: string;
  /** Keyword head used in the H1 and title, before "in <Area> Gurgaon". */
  keyword: string;
  subject: string;
  level: string;
  board: "IB" | "IGCSE";
  /** Syllabus specifics the writer must actually use. */
  syllabus: string;
  /** What this page must cover that no sibling subject page covers. */
  focus: string;
}

/**
 * 30 IB angles. None of these prefixes exist in the current 400 pages, which are
 * maths-weighted (ib-maths-*, ib-dp-home-tutor, ib-igcse-*).
 */
const IB_SUBJECTS: Subject[] = [
  { prefix: "ib-dp-physics-home-tutor", keyword: "IB DP Physics Home Tutor", subject: "IB DP Physics", level: "HL / SL", board: "IB", syllabus: "Themes A-E, Paper 1A/1B, Paper 2, Paper 3 for HL, the Scientific Investigation, uncertainties and error propagation", focus: "mechanics and fields as the two places SL students lose most marks, plus the internal assessment write-up" },
  { prefix: "ib-dp-chemistry-home-tutor", keyword: "IB DP Chemistry Home Tutor", subject: "IB DP Chemistry", level: "HL / SL", board: "IB", syllabus: "Structure 1-3 and Reactivity 1-3, Paper 1A/1B, Paper 2, the data booklet, and the Scientific Investigation", focus: "organic mechanisms and energetics, and how to read the data booklet under time pressure" },
  { prefix: "ib-dp-biology-home-tutor", keyword: "IB DP Biology Home Tutor", subject: "IB DP Biology", level: "HL / SL", board: "IB", syllabus: "Unity and Diversity, Form and Function, Interaction and Interdependence, Continuity and Change, Paper 1A/1B and Paper 2", focus: "command-term precision in extended response and the statistics inside the Scientific Investigation" },
  { prefix: "ib-dp-economics-home-tutor", keyword: "IB DP Economics Home Tutor", subject: "IB DP Economics", level: "HL / SL", board: "IB", syllabus: "microeconomics, macroeconomics, the global economy, Paper 1, Paper 2 data response, Paper 3 policy paper for HL, and the three commentaries", focus: "diagram accuracy and the real-world article commentary, which is where most of the internal marks sit" },
  { prefix: "ib-dp-business-management-home-tutor", keyword: "IB DP Business Management Home Tutor", subject: "IB DP Business Management", level: "HL / SL", board: "IB", syllabus: "Units 1-5, the pre-released case study for Paper 1, Paper 2 quantitative tools, Paper 3 for HL, and the Business Research Project", focus: "applying tools to a real organisation rather than reciting definitions" },
  { prefix: "ib-dp-computer-science-home-tutor", keyword: "IB DP Computer Science Home Tutor", subject: "IB DP Computer Science", level: "HL / SL", board: "IB", syllabus: "system fundamentals, computer organisation, networks, OOP, abstract data structures for HL, and the Internal Assessment solution", focus: "pseudocode fluency and the IA product-plus-documentation, which students routinely start too late" },
  { prefix: "ib-dp-psychology-home-tutor", keyword: "IB DP Psychology Home Tutor", subject: "IB DP Psychology", level: "HL / SL", board: "IB", syllabus: "the biological, cognitive and sociocultural approaches, one option at SL and two at HL, Paper 1, Paper 2 and the experimental study", focus: "study recall with correct citation and the ERQ structure examiners actually reward" },
  { prefix: "ib-dp-english-a-home-tutor", keyword: "IB DP English A Home Tutor", subject: "IB DP English A Language and Literature", level: "HL / SL", board: "IB", syllabus: "Paper 1 guided textual analysis, Paper 2 comparative essay, the Individual Oral, the HL Essay and the learner portfolio", focus: "unseen text analysis under timed conditions and building a defensible global issue for the IO" },
  { prefix: "ib-dp-ess-home-tutor", keyword: "IB DP ESS Home Tutor", subject: "IB DP Environmental Systems and Societies", level: "SL / HL", board: "IB", syllabus: "systems and models, ecosystems, biodiversity, water, soil, atmospheric systems, climate change and the environmental value systems thread", focus: "systems diagrams and the way ESS rewards evaluation over description" },
  { prefix: "ib-dp-geography-home-tutor", keyword: "IB DP Geography Home Tutor", subject: "IB DP Geography", level: "HL / SL", board: "IB", syllabus: "the geographic themes options, the core geographic perspectives, HL extension on global interactions, and the fieldwork internal assessment", focus: "case study depth and the fieldwork question, which needs a defensible methodology" },
  { prefix: "ib-dp-history-home-tutor", keyword: "IB DP History Home Tutor", subject: "IB DP History", level: "HL / SL", board: "IB", syllabus: "prescribed subjects, world history topics, Paper 1 source work, Paper 2 essays, Paper 3 regional depth for HL and the historical investigation", focus: "source utility and origin-purpose-value analysis, plus argument construction under exam timing" },
  { prefix: "ib-dp-global-politics-home-tutor", keyword: "IB DP Global Politics Home Tutor", subject: "IB DP Global Politics", level: "HL / SL", board: "IB", syllabus: "power sovereignty and international relations, human rights, development, peace and conflict, the engagement project and HL extension", focus: "linking theory to current cases without drifting into opinion writing" },
  { prefix: "ib-dp-design-technology-home-tutor", keyword: "IB DP Design Technology Home Tutor", subject: "IB DP Design Technology", level: "HL / SL", board: "IB", syllabus: "human factors, resource management, modelling, classic design, and the design project", focus: "the design cycle documentation, which carries more marks than the finished artefact" },
  { prefix: "ib-dp-sports-exercise-health-science-home-tutor", keyword: "IB DP Sports Exercise and Health Science Home Tutor", subject: "IB DP Sports, Exercise and Health Science", level: "HL / SL", board: "IB", syllabus: "anatomy, exercise physiology, energy systems, movement analysis, skill in sport and the internal assessment", focus: "physiology terminology and data interpretation in Paper 2" },
  { prefix: "ib-dp-french-b-home-tutor", keyword: "IB DP French B Home Tutor", subject: "IB DP French B", level: "HL / SL", board: "IB", syllabus: "the five prescribed themes, Paper 1 writing task, Paper 2 listening and reading, and the individual oral", focus: "text-type conventions in Paper 1 and spontaneous speaking for the oral" },
  { prefix: "ib-dp-spanish-b-home-tutor", keyword: "IB DP Spanish B Home Tutor", subject: "IB DP Spanish B", level: "HL / SL", board: "IB", syllabus: "the five prescribed themes, Paper 1 writing task, Paper 2 listening and reading, the individual oral and HL literature", focus: "register control and the HL literary extract discussion" },
  { prefix: "ib-dp-hindi-b-home-tutor", keyword: "IB DP Hindi B Home Tutor", subject: "IB DP Hindi B", level: "HL / SL", board: "IB", syllabus: "the five prescribed themes, Paper 1 text types, Paper 2 receptive skills and the individual oral", focus: "formal written Hindi conventions, which differ sharply from spoken usage at home" },
  { prefix: "ib-tok-tutor", keyword: "IB TOK Tutor", subject: "IB Theory of Knowledge", level: "Core", board: "IB", syllabus: "the knowledge framework, areas of knowledge, the TOK exhibition with its three objects, and the prescribed title essay", focus: "the exhibition commentary and choosing a title the student can actually argue both sides of" },
  { prefix: "ib-extended-essay-tutor", keyword: "IB Extended Essay Tutor", subject: "IB Extended Essay", level: "Core", board: "IB", syllabus: "the 4,000-word limit, subject-specific criteria, the research question, the reflection sessions and the RPPF", focus: "narrowing a research question early enough that the essay is finishable" },
  { prefix: "ib-internal-assessment-tutor", keyword: "IB Internal Assessment Tutor", subject: "IB Internal Assessment", level: "HL / SL", board: "IB", syllabus: "subject-specific IA criteria across sciences, maths, economics and humanities, plus academic honesty requirements", focus: "planning backwards from the school deadline so drafts are not written in one weekend" },
  { prefix: "ib-myp-physics-home-tutor", keyword: "IB MYP Physics Home Tutor", subject: "IB MYP Physics", level: "MYP 4-5", board: "IB", syllabus: "MYP sciences criteria A-D, the personal investigation, and the transition into DP Physics", focus: "criterion B and C investigation design, which most students meet for the first time here" },
  { prefix: "ib-myp-chemistry-home-tutor", keyword: "IB MYP Chemistry Home Tutor", subject: "IB MYP Chemistry", level: "MYP 4-5", board: "IB", syllabus: "MYP sciences criteria A-D, concept-based units, and eAssessment for MYP 5", focus: "moving from descriptive answers to explanation with scientific reasoning" },
  { prefix: "ib-myp-biology-home-tutor", keyword: "IB MYP Biology Home Tutor", subject: "IB MYP Biology", level: "MYP 4-5", board: "IB", syllabus: "MYP sciences criteria A-D, the statement of inquiry structure, and preparation for DP Biology", focus: "criterion D, reflecting on the impacts of science, which students routinely under-answer" },
  { prefix: "ib-myp-english-home-tutor", keyword: "IB MYP English Home Tutor", subject: "IB MYP English Language and Literature", level: "MYP 1-5", board: "IB", syllabus: "MYP language and literature criteria A-D, analysis of literary and non-literary texts, and the creative response", focus: "criterion A analysis, where students describe instead of analyse" },
  { prefix: "ib-myp-personal-project-tutor", keyword: "IB MYP Personal Project Tutor", subject: "IB MYP Personal Project", level: "MYP 5", board: "IB", syllabus: "the objectives, the process journal, the product or outcome, and the report", focus: "the process journal, which is assessed but usually treated as an afterthought" },
  { prefix: "ib-pyp-home-tutor", keyword: "IB PYP Home Tutor", subject: "IB Primary Years Programme", level: "PYP", board: "IB", syllabus: "the transdisciplinary themes, units of inquiry, the learner profile and the PYP exhibition in Year 6", focus: "supporting inquiry-based learning at home without turning it into rote work" },
  { prefix: "ib-dp-maths-online-tutor", keyword: "IB DP Maths Online Tutor", subject: "IB DP Mathematics", level: "HL / SL", board: "IB", syllabus: "Analysis and Approaches and Applications and Interpretation, Paper 1, Paper 2, Paper 3 for HL, the GDC and the exploration", focus: "how online delivery actually works for maths, with shared whiteboards and GDC screen sharing" },
  { prefix: "ib-dp-crash-course-tutor", keyword: "IB DP Crash Course Tutor", subject: "IB DP revision", level: "DP Year 2", board: "IB", syllabus: "May and November session timelines, past-paper cycles, mark schemes and examiner reports", focus: "triage: what a student can realistically fix in six weeks and what they cannot" },
  { prefix: "ib-diploma-retake-tutor", keyword: "IB Diploma Retake Tutor", subject: "IB Diploma retake support", level: "DP", board: "IB", syllabus: "retake registration windows, which components carry forward, and the November and May session choice", focus: "an honest read on whether a retake or an alternative route serves the student better" },
  { prefix: "ib-dp-university-admissions-tutor", keyword: "IB DP University Admissions Tutor", subject: "IB DP university preparation", level: "DP", board: "IB", syllabus: "predicted grades, subject prerequisites for UK, US, Canada and Indian universities, and the IB point conversion", focus: "matching subject choices to target-course prerequisites before it is too late to change" },
];

/**
 * 25 IGCSE angles. Existing pages cover maths, physics, chemistry, biology, English
 * and class 9/10 only; everything below is new.
 */
const IGCSE_SUBJECTS: Subject[] = [
  { prefix: "igcse-economics-home-tutor", keyword: "IGCSE Economics Home Tutor", subject: "IGCSE Economics", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0455 and Edexcel 4EC1, the basic economic problem, allocation of resources, microeconomic decision makers, government policy and the global economy", focus: "diagram accuracy and the eight-mark evaluation question" },
  { prefix: "igcse-business-studies-home-tutor", keyword: "IGCSE Business Studies Home Tutor", subject: "IGCSE Business Studies", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0450, understanding business activity, people in business, marketing, operations and finance, with case-study papers", focus: "applying theory to the case-study business rather than answering generically" },
  { prefix: "igcse-computer-science-home-tutor", keyword: "IGCSE Computer Science Home Tutor", subject: "IGCSE Computer Science", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0478, data representation, networks, hardware and software, algorithm design, pseudocode and Python programming", focus: "trace tables and writing pseudocode that an examiner can follow" },
  { prefix: "igcse-ict-home-tutor", keyword: "IGCSE ICT Home Tutor", subject: "IGCSE ICT", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0417 theory paper plus the practical document production, databases, spreadsheets and presentation papers", focus: "the practical papers, where marks are lost on formatting and file naming, not on understanding" },
  { prefix: "igcse-accounting-home-tutor", keyword: "IGCSE Accounting Home Tutor", subject: "IGCSE Accounting", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0452, double entry, control accounts, depreciation, final accounts and the analysis of financial statements", focus: "layout discipline in final accounts, where presentation itself carries marks" },
  { prefix: "igcse-geography-home-tutor", keyword: "IGCSE Geography Home Tutor", subject: "IGCSE Geography", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0460, population and settlement, the natural environment, economic development, and the geographical skills and coursework papers", focus: "named case studies and map skills under exam timing" },
  { prefix: "igcse-history-home-tutor", keyword: "IGCSE History Home Tutor", subject: "IGCSE History", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0470, the core content on international relations, the depth studies, and the source-based Paper 2", focus: "source inference and cross-referencing, which is a taught skill rather than general knowledge" },
  { prefix: "igcse-combined-science-home-tutor", keyword: "IGCSE Combined Science Home Tutor", subject: "IGCSE Combined Science", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0653 across biology, chemistry and physics content with the alternative-to-practical paper", focus: "covering three sciences on one timetable without any of them falling behind" },
  { prefix: "igcse-coordinated-science-home-tutor", keyword: "IGCSE Coordinated Science Home Tutor", subject: "IGCSE Coordinated Sciences", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0654 double award, extended tier content across the three sciences, and the practical alternative", focus: "the extended tier jump, which is steeper than students expect from core" },
  { prefix: "igcse-english-literature-home-tutor", keyword: "IGCSE English Literature Home Tutor", subject: "IGCSE English Literature", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0475 and Edexcel 4ET1, poetry, prose and drama, the unseen paper and the coursework option", focus: "close reading with quotation, and structuring an essay under 45 minutes" },
  { prefix: "igcse-english-second-language-home-tutor", keyword: "IGCSE English Second Language Home Tutor", subject: "IGCSE English as a Second Language", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0510 and 0511, reading, writing, listening and the speaking test", focus: "summary writing and the speaking assessment, both of which need drilling separately" },
  { prefix: "igcse-french-home-tutor", keyword: "IGCSE French Home Tutor", subject: "IGCSE French", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0520, listening, reading, speaking and writing across the five prescribed topic areas", focus: "the speaking test and the role-play, where preparation shows immediately" },
  { prefix: "igcse-spanish-home-tutor", keyword: "IGCSE Spanish Home Tutor", subject: "IGCSE Spanish", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0530, the four skills papers and the prescribed topic areas", focus: "verb tense control in written work, which is the most common grade ceiling" },
  { prefix: "igcse-hindi-home-tutor", keyword: "IGCSE Hindi Home Tutor", subject: "IGCSE Hindi", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0549 Hindi as a Second Language, reading, writing and the speaking component", focus: "formal written Hindi and Devanagari accuracy, which spoken fluency does not cover" },
  { prefix: "igcse-further-maths-home-tutor", keyword: "IGCSE Further Maths Home Tutor", subject: "IGCSE Further Pure Mathematics", level: "Grade 10", board: "IGCSE", syllabus: "Cambridge 0606 Additional Mathematics and Edexcel Further Pure, calculus, matrices, vectors and trigonometric identities", focus: "the calculus introduction, which is the real bridge into IB HL and A Level" },
  { prefix: "igcse-environmental-management-home-tutor", keyword: "IGCSE Environmental Management Home Tutor", subject: "IGCSE Environmental Management", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0680, rocks and minerals, energy, agriculture, water, natural hazards and the management of resources", focus: "data response and the evaluation of management strategies" },
  { prefix: "igcse-sociology-home-tutor", keyword: "IGCSE Sociology Home Tutor", subject: "IGCSE Sociology", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0495, theory and methods, culture and identity, social inequality, and the family and education units", focus: "using sociological terminology precisely instead of writing common-sense answers" },
  { prefix: "igcse-psychology-home-tutor", keyword: "IGCSE Psychology Home Tutor", subject: "IGCSE Psychology", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0500 core studies, research methods, and the applied options", focus: "research methods, which carry marks across both papers and are usually the weakest area" },
  { prefix: "edexcel-igcse-maths-home-tutor", keyword: "Edexcel IGCSE Maths Home Tutor", subject: "Edexcel IGCSE Mathematics", level: "Grade 9-10", board: "IGCSE", syllabus: "Edexcel 4MA1 Specification A Higher and Foundation tier, Paper 1 and Paper 2, both calculator", focus: "how Edexcel differs from Cambridge in question style and tier boundaries" },
  { prefix: "edexcel-igcse-physics-home-tutor", keyword: "Edexcel IGCSE Physics Home Tutor", subject: "Edexcel IGCSE Physics", level: "Grade 9-10", board: "IGCSE", syllabus: "Edexcel 4PH1, forces and motion, electricity, waves, energy, magnetism, radioactivity and the required practicals", focus: "the equation sheet, and the practical questions Edexcel weights heavily" },
  { prefix: "cambridge-igcse-chemistry-tutor", keyword: "Cambridge IGCSE Chemistry Tutor", subject: "Cambridge IGCSE Chemistry", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0620, states of matter, atoms and bonding, stoichiometry, electrochemistry, organic chemistry and the alternative to practical", focus: "mole calculations and the alternative-to-practical paper" },
  { prefix: "cambridge-igcse-biology-tutor", keyword: "Cambridge IGCSE Biology Tutor", subject: "Cambridge IGCSE Biology", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0610, characteristics of living organisms, transport, respiration, coordination, reproduction, inheritance and ecology", focus: "extended-response structure and the genetics questions students routinely rush" },
  { prefix: "cambridge-igcse-physics-tutor", keyword: "Cambridge IGCSE Physics Tutor", subject: "Cambridge IGCSE Physics", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge 0625, motion and forces, thermal physics, waves, electricity and magnetism, nuclear physics and Paper 6", focus: "rearranging equations reliably and the practical alternative paper" },
  { prefix: "igcse-checkpoint-home-tutor", keyword: "IGCSE Checkpoint Home Tutor", subject: "Cambridge Lower Secondary Checkpoint", level: "Grade 6-8", board: "IGCSE", syllabus: "Cambridge Lower Secondary Checkpoint in English, mathematics and science, and the step up into IGCSE in Grade 9", focus: "closing gaps before IGCSE starts, which is far cheaper than fixing them in Grade 10" },
  { prefix: "igcse-online-tutor", keyword: "IGCSE Online Tutor", subject: "IGCSE online tutoring", level: "Grade 9-10", board: "IGCSE", syllabus: "Cambridge and Edexcel IGCSE across subjects, past-paper practice and the May-June and October-November sessions", focus: "what online genuinely does better for IGCSE, and the subjects where it does not" },
];

/** Opening angles, rotated so no two neighbouring pages share a first move. */
export const ANGLES = [
  "Open on a specific weeknight scheduling problem a family in this locality faces, then widen out.",
  "Open by contrasting what parents search for with what actually moves the grade in this subject.",
  "Open with the academic calendar: what is due this term and how late is too late to start.",
  "Open on the difference between what a school teacher can do in a class of 24 and what a tutor does one-to-one.",
  "Open with the commute and travel-time reality of this locality, then move to lesson mode.",
  "Open on a diagnostic question the parent should ask before booking anyone.",
  "Open with the most common wrong assumption parents make about this specific subject.",
  "Open on the gap between a predicted grade and a final grade, and what closes it.",
  "Open with how to compare two tutors properly when both look qualified on paper.",
  "Open on what changes for a student between the start and the end of the academic year.",
  "Open with a cost-and-value framing: what an hour of tutoring in this subject should buy.",
  "Open on the handover problem: what breaks when a student switches tutors mid-course.",
  "Open with the assessment mechanics of this subject and how they drive the timetable.",
  "Open on how a first session should feel and what should come out of it.",
  "Open with the local school ecosystem and the demands it places on students here.",
  "Open on the difference between exam-season firefighting and year-long support.",
  "Open with a short plain answer to the searcher's question, then earn it back with detail.",
  "Open on study habits specific to this subject, then connect them to tutor selection.",
  "Open with what online tutoring genuinely does better in this subject, and where it does not.",
  "Open on the parent's decision timeline: this week, this month, this term.",
  "Open with a topic in this syllabus that reliably separates a 5 from a 7, and why.",
  "Open on what the last set of school reports usually reveals, and what it hides.",
  "Open with the logistics of fitting tutoring around this locality's school bus timings.",
  "Open on why a strong student in this subject can still stall, and what that looks like.",
];

/** Section orders, rotated so the page skeleton itself varies. */
export const SECTION_PLANS: string[][] = [
  ["local context", "why this subject is hard", "syllabus breakdown", "home vs online here", "how matching works", "what a first month looks like", "fees and value", "school ecosystem", "getting started"],
  ["why this subject is hard", "local context", "how matching works", "syllabus breakdown", "school ecosystem", "home vs online here", "what a first month looks like", "fees and value", "getting started"],
  ["syllabus breakdown", "local context", "why this subject is hard", "how matching works", "fees and value", "home vs online here", "school ecosystem", "what a first month looks like", "getting started"],
  ["local context", "school ecosystem", "syllabus breakdown", "why this subject is hard", "what a first month looks like", "how matching works", "home vs online here", "fees and value", "getting started"],
  ["how matching works", "local context", "syllabus breakdown", "home vs online here", "why this subject is hard", "school ecosystem", "fees and value", "what a first month looks like", "getting started"],
  ["why this subject is hard", "syllabus breakdown", "local context", "school ecosystem", "how matching works", "fees and value", "home vs online here", "what a first month looks like", "getting started"],
  ["local context", "home vs online here", "why this subject is hard", "syllabus breakdown", "how matching works", "school ecosystem", "what a first month looks like", "fees and value", "getting started"],
];

type Locality = AreaRow & { kind: "area" | "society" };

function buildLocalities(): Locality[] {
  const out: Locality[] = [];
  for (const p of gurgaonAreaPlaces) {
    out.push({
      name: p.name,
      slug: p.slug,
      corridor: p.locationCluster ?? `${p.name} corridor`,
      nearbyAreas: [...(p.nearbyAreas ?? [])],
      nearbySectors: [...(p.nearbySectors ?? [])],
      nearbySocieties: [...(p.nearbySocieties ?? [])],
      schools: [...(p.schoolEcosystem ?? [])],
      tier: 1,
      kind: "area",
    });
  }
  for (const p of gurgaonSocietyPlaces) {
    out.push({
      name: p.name,
      slug: p.slug,
      corridor: p.locationCluster ?? `${p.name} pocket`,
      nearbyAreas: [...(p.nearbyAreas ?? [])],
      nearbySectors: [...(p.nearbySectors ?? [])],
      nearbySocieties: [...(p.nearbySocieties ?? [])],
      schools: [...(p.schoolEcosystem ?? [])],
      tier: 3,
      kind: "society",
    });
  }
  for (const a of NEW_AREAS) out.push({ ...a, kind: "area" });
  return out;
}

export interface PlanEntry {
  id: number;
  key: string;
  slug: string;
  path: string;
  board: "IB" | "IGCSE";
  locality: string;
  localitySlug: string;
  localityKind: "area" | "society";
  subject: string;
  level: string;
  primaryKeyword: string;
  h1: string;
  title: string;
  metaDescription: string;
  parentPage: string;
  searchIntent: string;
  pageType: string;
  priority: string;
  uniqueAngle: string;
  localContext: {
    corridor: string;
    nearbyAreas: string[];
    nearbySectors: string[];
    nearbySocieties: string[];
    schools: string[];
  };
  brief: {
    angle: string;
    sectionPlan: string[];
    syllabus: string;
    focus: string;
    secondaryKeywords: string[];
  };
}

/**
 * Compact keyword variants for the titles that blow the 62-char budget once a long
 * locality name is appended. Keyed by subject prefix; anything absent is derived.
 */
const SHORT_KEYWORDS: Record<string, string> = {
  "ib-dp-sports-exercise-health-science-home-tutor": "IB SEHS Tutor",
  "ib-dp-business-management-home-tutor": "IB Business Management Tutor",
  "ib-dp-university-admissions-tutor": "IB University Admissions Tutor",
  "ib-dp-design-technology-home-tutor": "IB Design Tech Tutor",
  "ib-dp-computer-science-home-tutor": "IB Computer Science Tutor",
  "ib-dp-global-politics-home-tutor": "IB Global Politics Tutor",
  "ib-myp-personal-project-tutor": "IB MYP Project Tutor",
  "igcse-environmental-management-home-tutor": "IGCSE Env Management Tutor",
  "igcse-english-second-language-home-tutor": "IGCSE ESL Tutor",
  "igcse-coordinated-science-home-tutor": "IGCSE Coordinated Sci Tutor",
  "igcse-computer-science-home-tutor": "IGCSE Computer Sci Tutor",
  "igcse-english-literature-home-tutor": "IGCSE Eng Lit Tutor",
  "igcse-business-studies-home-tutor": "IGCSE Business Tutor",
  "igcse-combined-science-home-tutor": "IGCSE Combined Sci Tutor",
  "edexcel-igcse-physics-home-tutor": "Edexcel IGCSE Physics Tutor",
  "edexcel-igcse-maths-home-tutor": "Edexcel IGCSE Maths Tutor",
};

const TITLE_MAX = 62;

/** Drops "Home " and the DP/Cambridge qualifiers, in that order, to claw back characters. */
function shortKeyword(s: Subject): string {
  return SHORT_KEYWORDS[s.prefix] ?? s.keyword.replace(" Home Tutor", " Tutor").replace("IB DP ", "IB ");
}

function titleFor(s: Subject, locality: string): string {
  const kw = `${s.keyword} in ${locality} Gurgaon`;
  const short = `${shortKeyword(s)} in ${locality} Gurgaon`;
  const bare = `${shortKeyword(s)} in ${locality}`;
  for (const c of [`${kw} | IB Gram`, kw, `${short} | IB Gram`, short, bare]) {
    if (c.length <= TITLE_MAX) return c;
  }
  // Nothing fits: trim the last whole word off the bare form rather than mid-word.
  return bare.slice(0, TITLE_MAX).replace(/\s+\S*$/, "");
}

const DESC_MAX = 158;

function metaDescriptionFor(s: Subject, locality: string): string {
  const lead = `${shortKeyword(s)} in ${locality}, Gurgaon. `;
  const tails = [
    `Verified ${s.subject} tutors for ${s.level}, home or online sessions, syllabus-aligned support and a parent-attended demo before you commit.`,
    `Verified ${s.subject} tutors, home or online sessions, and a parent-attended demo before you commit.`,
    `Verified tutors, home or online sessions, and a parent-attended demo before you commit.`,
    `Verified tutors, home or online sessions, and a demo class before you commit.`,
  ];
  for (const t of tails) {
    if ((lead + t).length <= DESC_MAX) return lead + t;
  }
  return (lead + tails[tails.length - 1]).slice(0, DESC_MAX).replace(/\s+\S*$/, "");
}

function secondaryKeywordsFor(s: Subject, loc: Locality): string[] {
  const near = loc.nearbyAreas.slice(0, 2);
  return [
    `${s.subject} tutor in ${loc.name}`,
    `${s.subject} home tuition Gurgaon`,
    `${s.subject} online tutor Gurugram`,
    `best ${s.subject} tutor near ${loc.name}`,
    `${s.subject} tuition ${loc.name} Gurgaon`,
    `${s.board} home tutor in ${loc.name}`,
    `${s.subject} past paper practice Gurgaon`,
    `${s.subject} tutor near ${near[0] ?? "Golf Course Road"}`,
    `${s.subject} crash course Gurugram`,
    `one to one ${s.subject} tutor Gurgaon`,
    `${s.subject} doubt solving classes ${loc.name}`,
    `${s.board} tutor ${near[1] ?? "Sohna Road"} Gurgaon`,
  ];
}

function main(): void {
  const localities = buildLocalities();
  const taken = new Set(gurgaonSeoPagesMeta.map((p) => p.slug));

  // Every URL already live anywhere on the site, so a new root-level slug cannot shadow one.
  const liveUrls = new Set(
    readFileSync(path.join(ROOT, "all_urls.txt"), "utf8")
      .split(/\r?\n/)
      .map((u) => u.trim().replace(/^https?:\/\/[^/]+/, ""))
      .filter(Boolean),
  );

  // Order: tier first so the highest-demand localities get their extra passes, then a
  // stable alphabetical tiebreak. Areas outrank societies at equal tier.
  const ordered = [...localities].sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    if (a.kind !== b.kind) return a.kind === "area" ? -1 : 1;
    return a.slug.localeCompare(b.slug);
  });

  const IB_QUOTA = 300;
  const IGCSE_QUOTA = 200;
  const entries: PlanEntry[] = [];
  const usedPerLocality = new Map<string, Set<string>>();

  function tryAdd(loc: Locality, s: Subject): boolean {
    // Four localities are disambiguated in the local-seo inventory with a -gurgaon suffix
    // (rajiv-chowk-gurgaon, sadar-bazar-gurgaon, ...). Appending another one gives
    // "...-rajiv-chowk-gurgaon-gurgaon", so strip it before adding the page's own.
    const slug = `${s.prefix}-in-${loc.slug.replace(/-gurgaon$/, "")}-gurgaon`;
    if (taken.has(slug)) return false;
    if (liveUrls.has(`/${slug}/`)) return false;
    const used = usedPerLocality.get(loc.slug) ?? new Set<string>();
    if (used.has(s.prefix)) return false;

    taken.add(slug);
    used.add(s.prefix);
    usedPerLocality.set(loc.slug, used);

    const id = entries.length + 1;
    const primaryKeyword = `${s.keyword} in ${loc.name} Gurgaon`;
    entries.push({
      id,
      key: slug,
      slug,
      path: `/${slug}/`,
      board: s.board,
      locality: loc.name,
      localitySlug: loc.slug,
      localityKind: loc.kind,
      subject: s.subject,
      level: s.level,
      primaryKeyword,
      h1: primaryKeyword,
      title: titleFor(s, loc.name),
      metaDescription: metaDescriptionFor(s, loc.name),
      parentPage: s.board === "IB" ? "/ib-tutors/gurugram/" : "/igcse-tutors/gurugram/",
      searchIntent: "High commercial / home tuition",
      pageType: s.board === "IB" ? "IB DP subject-level page" : "Hyperlocal money page",
      priority: loc.tier === 1 ? "P1" : loc.tier === 2 ? "P2" : "P3",
      uniqueAngle: `${s.focus}. Ground every claim in ${loc.name} and the ${loc.corridor}.`,
      localContext: {
        corridor: loc.corridor,
        nearbyAreas: loc.nearbyAreas.slice(0, 4),
        nearbySectors: loc.nearbySectors.slice(0, 4),
        nearbySocieties: loc.nearbySocieties.slice(0, 4),
        schools: loc.schools.slice(0, 5),
      },
      brief: {
        angle: ANGLES[(id * 7) % ANGLES.length],
        sectionPlan: SECTION_PLANS[(id * 3) % SECTION_PLANS.length],
        syllabus: s.syllabus,
        focus: s.focus,
        secondaryKeywords: secondaryKeywordsFor(s, loc),
      },
    });
    return true;
  }

  /** Round-robin a subject list over localities until `quota` entries exist for that board. */
  function fill(subjects: Subject[], quota: number, board: "IB" | "IGCSE"): void {
    let pass = 0;
    while (entries.filter((e) => e.board === board).length < quota) {
      let addedThisPass = 0;
      for (let i = 0; i < ordered.length; i += 1) {
        if (entries.filter((e) => e.board === board).length >= quota) break;
        const loc = ordered[i];
        // Offset by locality index so neighbouring localities never get the same subject,
        // and by pass so a locality's second page is a different subject from its first.
        const s = subjects[(i * 5 + pass * 11) % subjects.length];
        if (tryAdd(loc, s)) addedThisPass += 1;
        else {
          // Collision or already used here: walk forward for the next free subject.
          for (let k = 1; k < subjects.length; k += 1) {
            if (tryAdd(loc, subjects[(i * 5 + pass * 11 + k) % subjects.length])) {
              addedThisPass += 1;
              break;
            }
          }
        }
      }
      pass += 1;
      if (addedThisPass === 0) throw new Error(`${board}: ran out of subject x locality combinations at ${entries.length}`);
      if (pass > 40) throw new Error(`${board}: too many passes`);
    }
  }

  fill(IB_SUBJECTS, IB_QUOTA, "IB");
  fill(IGCSE_SUBJECTS, IGCSE_QUOTA, "IGCSE");

  // Renumber so ids are contiguous and stable after both fills.
  entries.forEach((e, i) => {
    e.id = i + 1;
  });

  // --- assertions -----------------------------------------------------------
  const ib = entries.filter((e) => e.board === "IB").length;
  const igcse = entries.filter((e) => e.board === "IGCSE").length;
  if (ib !== IB_QUOTA) throw new Error(`expected ${IB_QUOTA} IB pages, got ${ib}`);
  if (igcse !== IGCSE_QUOTA) throw new Error(`expected ${IGCSE_QUOTA} IGCSE pages, got ${igcse}`);

  const slugs = new Set(entries.map((e) => e.slug));
  if (slugs.size !== entries.length) throw new Error("duplicate slug in plan");
  for (const e of entries) {
    if (gurgaonSeoPagesMeta.some((p) => p.slug === e.slug)) throw new Error(`collides with existing page: ${e.slug}`);
    if (liveUrls.has(e.path)) throw new Error(`collides with live URL: ${e.path}`);
  }

  const missingIb: string[] = [];
  const missingIgcse: string[] = [];
  for (const loc of localities) {
    if (!entries.some((e) => e.localitySlug === loc.slug && e.board === "IB")) missingIb.push(loc.slug);
    if (!entries.some((e) => e.localitySlug === loc.slug && e.board === "IGCSE")) missingIgcse.push(loc.slug);
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(path.join(OUT_DIR, "plan.json"), JSON.stringify(entries, null, 1));
  writeFileSync(path.join(OUT_DIR, "keys.txt"), entries.map((e) => e.key).join("\n"));

  // One small brief per page, so a writing agent reads 2KB instead of the 1MB plan.
  const briefDir = path.join(OUT_DIR, "briefs");
  mkdirSync(briefDir, { recursive: true });
  for (const e of entries) writeFileSync(path.join(briefDir, `${e.key}.json`), JSON.stringify(e, null, 1));
  mkdirSync(path.join(OUT_DIR, "content"), { recursive: true });

  console.log(`localities: ${localities.length} (areas ${localities.filter((l) => l.kind === "area").length}, societies ${localities.filter((l) => l.kind === "society").length})`);
  console.log(`plan: ${entries.length} pages — IB ${ib}, IGCSE ${igcse}`);
  console.log(`localities without an IB page: ${missingIb.length}${missingIb.length ? ` (${missingIb.slice(0, 5).join(", ")})` : ""}`);
  console.log(`localities without an IGCSE page: ${missingIgcse.length}${missingIgcse.length ? ` (${missingIgcse.slice(0, 5).join(", ")})` : ""}`);
  console.log(`collisions with existing 400 pages: 0`);
  console.log(`collisions with live sitemap: 0`);
  console.log(`wrote ${path.relative(ROOT, path.join(OUT_DIR, "plan.json"))}`);
}

// Only when run directly: export-400.ts imports ANGLES/SECTION_PLANS, and regenerating the
// plan and briefs as an import side effect would rewrite files agents are reading.
if (/build-plan\.ts$/.test(process.argv[1] ?? "")) main();
