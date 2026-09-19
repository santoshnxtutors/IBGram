/**
 * The 40 Gurgaon keyword pages: one standalone root-level URL per search phrase
 * (/ib-tutor-in-gurgaon/, /igcse-tuition-in-gurgaon/, ...). They render with the city-page
 * renderer but belong to no city route.
 *
 * Several phrases are near-synonyms ("ib tutor" / "ib coaching" / "ib classes"), so every entry
 * carries an `intent` its siblings must not compete for. Without it the pages cannibalise each
 * other in Google and none of them ranks.
 *
 * Run: npx tsx scripts/gurgaon-keywords/plan.ts   -> tmp/gurgaon-keywords/briefs/<slug>.json
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

/** Gurugram corridors with the sectors, localities and societies that sit on them. */
export const CORRIDORS = {
  gcr: { name: "Golf Course Road", areas: ["DLF Phase 5", "DLF Phase 1", "Sector 42", "Sector 43", "Sector 53", "Sector 54", "Ardee City", "Wazirabad"], societies: ["DLF The Magnolias", "DLF The Aralias", "DLF Park Place", "DLF The Crest", "DLF The Belaire"] },
  gcer: { name: "Golf Course Extension Road", areas: ["Sector 56", "Sector 57", "Sector 58", "Sector 59", "Sector 60", "Sector 62", "Sector 65", "Sushant Lok 3", "Ghata", "Gwal Pahari"], societies: ["M3M Golf Estate", "Ireo Grand Arch", "Ireo Skyon"] },
  sohna: { name: "Sohna Road", areas: ["Sector 47", "Sector 48", "Sector 49", "Sector 50", "Nirvana Country", "South City 2", "Rosewood City", "Uppal Southend", "Vatika Chowk", "Badshahpur"], societies: ["Central Park Resorts", "Orchid Petals", "Vatika City", "Malibu Towne", "Vipul Greens", "The Close"] },
  dlf: { name: "DLF Phases 2 to 4, MG Road and Cyber City", areas: ["DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "MG Road", "Cyber City", "Sikanderpur", "Chakkarpur", "Sector 24", "Sector 27", "Sector 28"], societies: ["DLF Beverly Park", "Heritage City", "DLF Hamilton Court", "DLF Regency Park", "DLF Richmond Park", "Ambience Caitriona"] },
  sushant: { name: "Sushant Lok, South City 1 and Millennium City Centre", areas: ["Sushant Lok 1", "Sushant Lok 2", "South City 1", "Sector 29", "Sector 40", "Sector 45", "Sector 46", "Greenwood City"], societies: [] },
  spr: { name: "Southern Peripheral Road (SPR)", areas: ["Sector 66", "Sector 67", "Sector 68", "Sector 69", "Sector 70", "Sector 72", "Ansal Esencia", "Bhondsi"], societies: ["Tata Primanti"] },
  newg: { name: "New Gurgaon", areas: ["Sector 82", "Sector 83", "Sector 84", "Sector 85", "Sector 86", "Sector 89", "Sector 90", "Kherki Daula", "Pataudi Road"], societies: ["Vatika India Next", "Godrej Air"] },
  dwarka: { name: "Dwarka Expressway", areas: ["Sector 102", "Sector 103", "Sector 104", "Sector 106", "Sector 108", "Sector 109", "Sector 110", "Sector 113"], societies: ["Godrej Summit", "Sobha City", "ATS Kocoon"] },
  old: { name: "Old Gurgaon and Palam Vihar", areas: ["Palam Vihar", "Civil Lines", "Sadar Bazar", "Jacobpura", "Rajendra Park", "Ashok Vihar", "Sector 4", "Sector 14", "Sector 15", "Sector 22", "Sector 23"], societies: [] },
  manesar: { name: "Manesar and NH-48 south", areas: ["IMT Manesar", "Hero Honda Chowk", "Sector 33", "Sector 34", "Sector 37"], societies: [] },
} as const;

export type CorridorKey = keyof typeof CORRIDORS;
export const ALL: CorridorKey[] = Object.keys(CORRIDORS) as CorridorKey[];

/** Context only. The guide forbids saying which programme any of these schools offers. */
const IB_SCHOOLS = ["Pathways World School", "Lancers International School", "Scottish High International School", "GD Goenka World School", "The Shri Ram School, Aravali", "Heritage Xperiential Learning School"];
const IGCSE_SCHOOLS = ["Scottish High International School", "Pathways World School", "Lancers International School", "GD Goenka World School", "DPS International Edge", "Excelsior American School"];

// --- verified syllabus facts, shared across entries ---------------------------------------

export const DP = "IB Diploma Programme (DP): a two-year course (DP1 and DP2) of six subjects from six groups, three or four at Higher Level (HL, 240 recommended teaching hours) and the rest at Standard Level (SL, 150 hours). Each subject is graded 1-7. Theory of Knowledge (TOK) and the Extended Essay (EE) combine for up to 3 more points, so the maximum is 45; 24 points is the minimum for the diploma, subject to the IB's failing conditions. Creativity, Activity, Service (CAS) must also be completed. Exam sessions run in May (the session most Gurgaon IB schools use) and November. May results are released in early July.";
export const MYP = "IB Middle Years Programme (MYP): five years (MYP 1-5, roughly ages 11-16) across eight subject groups. Every subject is assessed against four criteria (A-D), each scored 0-8; the criterion total out of 32 converts to a final 1-7 grade through IB grade boundaries. The Personal Project comes in MYP 5 (the Community Project in MYP 3 or 4). MYP eAssessment in MYP 5 (on-screen examinations plus ePortfolios) is optional, and each school decides whether to offer it.";
export const PYP = "IB Primary Years Programme (PYP): ages 3-12. Learning is organised around six transdisciplinary themes (Who we are; Where we are in place and time; How we express ourselves; How the world works; How we organize ourselves; Sharing the planet) through units of inquiry, with the ten attributes of the IB learner profile. Students complete the PYP exhibition in the final year. There are no external examinations.";
export const DP_SCIENCE = "DP sciences (first assessed 2025): Paper 1 has two parts, 1A multiple choice and 1B data-based questions; Paper 2 has short-answer and extended-response questions. The internal assessment (IA) is the scientific investigation, worth 20%, marked on four criteria of 6 marks each (Research design, Data analysis, Conclusion, Evaluation), with a maximum of 3,000 words. Students may investigate in groups of up to three, but each writes an individual report. HL and SL share the assessment structure; HL adds Additional Higher Level (AHL) content.";
export const BIOLOGY = "DP Biology is organised into four themes (A Unity and diversity, B Form and function, C Interaction and interdependence, D Continuity and change) studied across four levels of organisation: molecules, cells, organisms and ecosystems.";
export const MATHS_IA = "The mathematics exploration (IA) is the same task for Analysis and Approaches (AA) and Applications and Interpretation (AI), SL and HL: 20% of the final grade, 12-20 pages, marked out of 20 on five criteria: A Presentation (4), B Mathematical communication (4), C Personal engagement (3), D Reflection (3), E Use of mathematics (6). HL work is judged against a higher standard on criterion E. The teacher can comment on one draft, and the work must be the student's own.";
export const TOK = "Theory of Knowledge (TOK) has two assessments. The exhibition uses three objects linked to one of 35 IA prompts, up to 950 words, internally assessed, one third of the TOK grade. The essay answers one of six prescribed titles released for each exam session, up to 1,600 words, externally assessed, two thirds of the grade. The course covers the core theme (knowledge and the knower), two of five optional themes, and five areas of knowledge (history, the human sciences, the natural sciences, mathematics, the arts). TOK and EE grades (A-E) combine for up to 3 diploma points, and an E in either is a failing condition.";
export const EE = "The Extended Essay (EE) is an independent research essay of up to 4,000 words and roughly 40 hours of work, supervised by a teacher at the student's school, with reflection sessions recorded along the way. It is written in one DP subject or as an interdisciplinary essay, graded A-E, and combined with TOK for up to 3 points. The EE guide was updated for first assessment in 2027, so never quote criterion mark allocations; tell families to follow the version their DP coordinator issues.";
const CS_DP = "DP Computer Science was redesigned for first assessment in 2027. Students program in Python or Java, and the course is built around Theme A (Concepts of computer science) and Theme B (Computational thinking and problem-solving), assessed through Paper 1, Paper 2 and an internal assessment in which the student builds a computational solution. Earlier cohorts followed the previous guide, so families should confirm which guide the school uses. Never quote paper weightings or durations.";
export const MYP_MATHS = "MYP Mathematics criteria: A Knowing and understanding, B Investigating patterns, C Communicating, D Applying mathematics in real-life contexts, each 0-8. Schools often split MYP 4-5 maths into standard and extended mathematics; extended covers additional topics that prepare for DP Mathematics AA.";
export const ENGLISH_A = "DP Studies in Language and Literature: English A Language and Literature, or English A Literature. Paper 1 is guided textual analysis of unseen passages (one at SL, two at HL); Paper 2 is a comparative essay on two studied works; the Individual Oral is 15 minutes (a 10-minute analysis linked to a global issue, then 5 minutes of questions); HL students also write the HL essay of 1,200-1,500 words. The learner portfolio is required but not directly assessed.";
export const ENGLISH_B = "Students whose first language is not English take Language Acquisition in the IB: English B (SL or HL) or, for genuine beginners, English ab initio (SL only). English B is built around five themes: Identities, Experiences, Human ingenuity, Social organization, Sharing the planet. Assessment is Paper 1 (a writing task, productive skills), Paper 2 (listening and reading, receptive skills) and the individual oral; HL students also study two literary works. In the MYP the equivalent is Language Acquisition, taught in phases 1-6. The IB has no subject called ESL; parents search for it when they mean this support.";
const ECONOMICS = "DP Economics has four units (Introduction to economics, Microeconomics, Macroeconomics, The global economy). Paper 1 is extended response, Paper 2 is data response, and Paper 3, a policy paper, is HL only. The internal assessment is a portfolio of three commentaries, each up to 800 words, on published news articles, each drawing on a different syllabus unit and a different one of the nine key concepts (scarcity, choice, efficiency, equity, economic well-being, sustainability, change, interdependence, intervention).";
export const EXAMS = "Most Gurgaon IB schools enter students for the May session; November is used by a minority of schools and by retake candidates. Each school sets its own DP2 mock examination dates, usually several months before May. Past papers, markschemes and subject reports come through the school or the IB's official channels and show how marks are awarded. Command terms (define, describe, explain, evaluate, discuss, to what extent) set the depth each answer needs. May results are released in early July.";
const RETAKE = "A DP candidate who missed the diploma, or who wants a higher subject grade, can register for a later session through a school, normally the one they sat the exams with, most often the following November. Internal assessment marks are usually carried forward, so a retake mainly targets the externally assessed papers. The IB limits how many sessions a candidate may sit, and the DP coordinator confirms eligibility, deadlines and costs. Before retaking, families can ask the coordinator about an enquiry upon results (a re-mark), which has a short deadline after results come out. Never state deadline dates, the number of permitted sessions or any fee.";

export const IGCSE = "IGCSE in Gurgaon means Cambridge IGCSE (Cambridge International Education) or Pearson Edexcel International GCSE, usually a two-year course across Grades 9 and 10, often followed by the IB DP, A Levels or a move to CBSE or ISC in Class 11. Cambridge exam series run in February/March (a series offered only in India), May/June and October/November; Pearson Edexcel International GCSE series run in January and May/June. Cambridge grades most syllabuses A*-G (some syllabuses have 9-1 versions under different codes); Edexcel International GCSE grades 9-1. Many Cambridge subjects have Core and Extended tiers: Core tops out at grade C, Extended reaches A*.";
export const MATHS_0580 = "Cambridge IGCSE Mathematics 0580 (from the 2025 exams): Core candidates sit Paper 1 (non-calculator) and Paper 3 (calculator); Extended candidates sit Paper 2 (non-calculator) and Paper 4 (calculator). Pearson Edexcel International GCSE Mathematics A (4MA1) is tiered Foundation or Higher, two calculator papers per tier.";
const ADD_MATHS = "Cambridge IGCSE Additional Mathematics 0606 has no tiers, two written papers with a calculator allowed, and is graded A*-E. Content: functions, quadratic functions, factors of polynomials, equations, inequalities and graphs, simultaneous equations, logarithmic and exponential functions, straight-line graphs, coordinate geometry of the circle, circular measure, trigonometry, permutations and combinations, series, vectors in two dimensions, differentiation and integration. It is usually taken alongside 0580 Extended by students heading for IB Mathematics AA HL or A Level Mathematics. Pearson Edexcel's nearest equivalent is International GCSE Further Pure Mathematics (4PM1).";
export const SCIENCE_IGCSE = "Cambridge IGCSE sciences (syllabuses examined from 2023): Paper 1 multiple choice (Core) or Paper 2 multiple choice (Extended), Paper 3 theory (Core) or Paper 4 theory (Extended), and practical assessment through Paper 5 (practical test) or Paper 6 (alternative to practical), chosen by the school. Weighting: multiple choice 30%, theory 50%, practical 20%. Pearson Edexcel International GCSE sciences are untiered, with Paper 1 and Paper 2 for the separate science and practical skills assessed inside the written papers.";
export const BIOLOGY_0610 = "Cambridge IGCSE Biology 0610 topics: characteristics and classification of living organisms; organisation of the organism; movement into and out of cells; biological molecules; enzymes; plant nutrition; human nutrition; transport in plants; transport in animals; diseases and immunity; gas exchange in humans; respiration; excretion in humans; coordination and response; drugs; reproduction; inheritance; variation and selection; organisms and their environment; human influences on ecosystems; biotechnology and genetic modification. Pearson Edexcel equivalent: 4BI1.";
export const PHYSICS_0625 = "Cambridge IGCSE Physics 0625 topics: motion, forces and energy; thermal physics; waves; electricity and magnetism; nuclear physics; space physics. Students must recall and rearrange the equations in the syllabus. Pearson Edexcel equivalent: 4PH1.";
export const CHEMISTRY_0620 = "Cambridge IGCSE Chemistry 0620 topics: states of matter; atoms, elements and compounds; stoichiometry (including the mole); electrochemistry; chemical energetics; chemical reactions; acids, bases and salts; the Periodic Table; metals; chemistry of the environment; organic chemistry; experimental techniques and chemical analysis. Pearson Edexcel equivalent: 4CH1.";
export const ENGLISH_IGCSE = "English at IGCSE is several different syllabuses: Cambridge IGCSE First Language English 0500 (a reading paper, then directed writing and composition or a coursework portfolio), English as a Second Language 0510 and 0511 (reading and writing plus listening; 0511 counts speaking into the grade, 0510 reports speaking separately), and Literature in English 0475. Pearson Edexcel offers International GCSE English Language A (4EA1), English Language B (4EB1) and English as a Second Language (4ES1).";
const ECONOMICS_0455 = "Cambridge IGCSE Economics 0455: Paper 1 multiple choice (30%) and Paper 2 structured questions with data (70%). Six topics: the basic economic problem; the allocation of resources; microeconomic decision-makers; government and the macroeconomy; economic development; international trade and globalisation. Pearson Edexcel International GCSE Economics (4EC1): Paper 1 Microeconomics and business economics, Paper 2 Macroeconomics and the global economy.";
const BUSINESS_0450 = "Cambridge IGCSE Business Studies 0450: Paper 1 short answer and data response and Paper 2 case study, 50% each, across six areas: understanding business activity; people in business; marketing; operations management; financial information and decisions; external influences on business activity. Pearson Edexcel International GCSE Business (4BS1): Paper 1 Investigating small businesses, Paper 2 Investigating large businesses. Calculations include break-even, cash-flow forecasts, profit and ratios.";
const CS_0478 = "Cambridge IGCSE Computer Science 0478 (examined from 2023): Paper 1 Computer systems (data representation, data transmission, hardware, software, the internet and its uses, automated and emerging technologies) and Paper 2 Algorithms, programming and logic (algorithm design and problem-solving, pseudocode, programming, databases and SQL, Boolean logic). The pre-release material was removed; practice uses a language such as Python, Java or Visual Basic. Pearson Edexcel International GCSE Computer Science (4CP0) pairs a written paper with an on-screen practical programming paper in Python.";

export const FEES_RULE = "Never quote a rupee amount or a price range. Explain what moves the fee and how to judge value.";

export type BlockType = "intro" | "programmes" | "subjects" | "local_areas" | "schools" | "matching_process" | "verification" | "tutoring_modes" | "trust" | "cta";

export interface KeywordPage {
  slug: string;
  board: "IB" | "IGCSE";
  /** The search phrase, as typed. */
  keyword: string;
  h1: string;
  /** Without the brand; the site title template appends it. */
  title: string;
  description: string;
  pageType: "city" | "subject" | "programme";
  /** Service name for schema and breadcrumbs. */
  focus: string;
  subjects: string[];
  programmes: Array<"PYP" | "MYP" | "DP">;
  level: string;
  /** What this page answers that no sibling page competes for. */
  intent: string;
  /** Verified facts the writer must use; nothing outside them may be stated as fact. */
  facts: string[];
  mustCover: string[];
  secondary: string[];
  corridors: CorridorKey[];
  /** Lives under /gurgaon/<slug>/ (plan-hub.ts) instead of the site root. */
  hub?: boolean;
  /** Hub pages only: the comparison table's columns, the page's own offer first. */
  comparison?: string[];
}

const p = (e: Omit<KeywordPage, "pageType" | "programmes"> & Partial<Pick<KeywordPage, "pageType" | "programmes">>): KeywordPage => ({
  pageType: "subject",
  programmes: e.board === "IB" ? ["DP"] : [],
  ...e,
});

export const KEYWORD_PAGES: KeywordPage[] = [
  // ------------------------------------------------------------------ IB: general intent
  p({
    slug: "ib-tutor-in-gurgaon", board: "IB", keyword: "ib tutor in gurgaon", pageType: "city", programmes: ["PYP", "MYP", "DP"],
    h1: "IB Tutor in Gurgaon for PYP, MYP and DP Students", title: "IB Tutor in Gurgaon | PYP, MYP & DP Home or Online",
    description: "Find an IB tutor in Gurgaon for PYP, MYP and DP: subject specialists for HL and SL, IA and TOK help, and home or online sessions across every Gurugram sector.",
    focus: "IB tutoring in Gurgaon", subjects: ["IB Mathematics AA and AI", "IB Physics", "IB Chemistry", "IB Biology", "IB Economics", "IB English A"], level: "PYP, MYP and DP (Grades 1-12)",
    intent: "The pillar page. Complete, decision-ready guide to hiring an IB tutor anywhere in Gurgaon: what separates an IB tutor from a general board tutor, which stage (PYP, MYP, DP) needs what, how to choose, how IB Gram matches, and how the three lesson modes compare. Summarise fees, online lessons, coaching and exam preparation in a paragraph each and leave depth to the sibling pages.",
    facts: [DP, MYP, PYP, TOK],
    mustCover: ["what an IB tutor does that a CBSE/ICSE tutor usually cannot (criterion-based marking, command terms, IA, TOK)", "a stage-by-stage table in prose: PYP vs MYP vs DP tutoring needs", "a numbered 5-6 step process for finding and trialling an IB tutor in Gurgaon", "home vs online vs hybrid for IB families across the corridors, with a plain trade-off", "subjects Gurgaon DP students most often need help in, and why (Maths AA/AI HL, sciences, Economics, English A)", "how to judge progress after four weeks"],
    secondary: ["IB tutors in Gurgaon", "IB home tutor Gurgaon", "IB online tutor Gurugram", "best IB tutor in Gurgaon", "IB DP tutor Gurugram", "IB MYP tutor Gurgaon", "IB PYP tutor Gurgaon", "IB tuition Gurgaon", "IB private tutor Gurugram", "IB Maths tutor Gurgaon", "IB Physics tutor Gurgaon", "IB tutor Golf Course Road"],
    corridors: ALL,
  }),
  p({
    slug: "ib-tutor-near-me-gurgaon", board: "IB", keyword: "ib tutor near me gurgaon", pageType: "city", programmes: ["PYP", "MYP", "DP"],
    h1: "IB Tutor Near Me in Gurgaon: Home Tutors by Sector", title: "IB Tutor Near Me in Gurgaon | Home Tutors by Area",
    description: "Looking for an IB tutor near you in Gurgaon? See which sectors and societies home tutors reach, when online is faster, and how a nearby match is made.",
    focus: "IB home tutors near you in Gurgaon", subjects: ["IB Mathematics", "IB Sciences", "IB Economics", "IB English"], level: "PYP, MYP and DP",
    intent: "Proximity. A corridor-by-corridor guide to where a nearby IB home tutor is realistic in Gurgaon: which sectors and societies are easy to serve together, how travel time on weekday evenings shapes slot choice, what happens when the nearest suitable specialist is across the city, and how location is weighed against subject fit in matching. Not a general 'how to choose an IB tutor' page.",
    facts: [DP, MYP],
    mustCover: ["a walk through every corridor listed, naming sectors and societies and the practical tutoring implication for each", "why the nearest tutor is not always the right tutor for DP HL subjects, and when to accept online instead", "society gate entry, visitor registration and parking as real scheduling factors, stated generally", "a numbered process for how a 'near me' request is matched (location radius, subject, level, slot)", "a comparison of a nearby generalist, a farther specialist at home, and an online specialist", "what to do when the family moves across Gurgaon mid-year"],
    secondary: ["IB tutor near me", "IB home tutor near me Gurgaon", "IB tuition near me Gurugram", "IB tutor Golf Course Extension Road", "IB tutor Sohna Road", "IB tutor DLF Phase 5", "IB tutor Dwarka Expressway", "IB tutor Sushant Lok", "IB tutor New Gurgaon", "IB tutor South City", "nearby IB tutor for DP", "home IB tutor in my sector Gurgaon"],
    corridors: ALL,
  }),
  p({
    slug: "ib-online-tutor-in-gurgaon", board: "IB", keyword: "ib online tutor in gurgaon", pageType: "city", programmes: ["PYP", "MYP", "DP"],
    h1: "IB Online Tutor in Gurgaon for Live One-to-One Lessons", title: "IB Online Tutor in Gurgaon | Live 1:1 PYP, MYP, DP",
    description: "IB online tutor for Gurgaon students: live one-to-one lessons on a shared whiteboard, specialist HL tutors without the commute, and flexible evening slots.",
    focus: "Online IB tutoring for Gurgaon students", subjects: ["IB Mathematics AA and AI", "IB Physics", "IB Chemistry", "IB Economics", "IB English A", "TOK"], level: "PYP, MYP and DP",
    intent: "Online delivery only. How live online IB tutoring actually works for a Gurgaon student: equipment (laptop, stylus or tablet, headset), shared whiteboards, screen-sharing a graphic display calculator, annotated past papers, session recordings subject to family consent, attention spans by age, and which IB work suits online (IA feedback, TOK discussion, Maths) versus where home lessons win (young PYP learners, some hands-on science).",
    facts: [DP, TOK, MATHS_IA],
    mustCover: ["a practical setup checklist for an online IB lesson at home", "subject by subject: what works well online and what does not", "why Gurgaon families choose online (weekday traffic, late slots after activities, access to HL specialists) with honest limits", "a direct comparison of online, home and hybrid for IB in Gurgaon", "how to tell within three sessions whether online is working", "screen time and focus for PYP and MYP children"],
    secondary: ["online IB tutor Gurgaon", "IB online tuition Gurugram", "live online IB classes Gurgaon", "IB DP online tutor", "online IB Maths tutor Gurgaon", "online IB Physics tutor", "IB online coaching Gurugram", "one to one online IB tutor", "IB MYP online tutor Gurgaon", "IB PYP online classes", "virtual IB tutor Gurgaon", "online TOK tutor Gurgaon"],
    corridors: ["dwarka", "newg", "manesar", "spr"],
  }),
  p({
    slug: "ib-tutor-fees-in-gurgaon", board: "IB", keyword: "ib tutor fees in gurgaon", pageType: "city", programmes: ["PYP", "MYP", "DP"],
    h1: "IB Tutor Fees in Gurgaon: What Sets the Price", title: "IB Tutor Fees in Gurgaon | What Affects the Cost",
    description: "What do IB tutors charge in Gurgaon? See how programme, HL or SL level, IA and EE help, session length and home or online mode change the fee you pay.",
    focus: "IB tutor fees in Gurgaon", subjects: ["IB DP subjects", "IB MYP subjects", "IB PYP", "IA and EE mentoring"], level: "PYP, MYP and DP",
    intent: "Cost and value only. Every factor that moves an IB tutoring fee in Gurgaon (programme stage, HL vs SL, subject scarcity, tutor experience including examining experience, session length, home travel vs online, IA/EE/TOK mentoring, crash revision), how pricing is structured (per session, monthly, packages), how to budget across DP1 and DP2, and how to judge whether a fee is worth it. No rupee figures anywhere.",
    facts: [DP, FEES_RULE],
    mustCover: ["an ordered list of fee factors from biggest to smallest effect, explained", "why HL Maths AA, Physics and Chemistry tutors are usually priced higher than SL tutors, framed as a tendency, not a rule", "what a demo or consultation should clarify before any payment", "a budgeting timeline across DP1 and DP2 showing when support is worth concentrating", "how home travel versus online changes cost and value in Gurgaon", "red flags: fees that seem too low or too high, and what questions expose each"],
    secondary: ["IB tuition fees Gurgaon", "IB tutor cost Gurugram", "IB home tutor charges Gurgaon", "IB DP tuition fees", "IB online tutor fees", "IB Maths tutor fees Gurgaon", "how much does an IB tutor cost", "IB tutor per hour Gurgaon", "IB coaching fees Gurugram", "IA help fees", "affordable IB tutor Gurgaon", "IB MYP tuition fees"],
    corridors: ["gcr", "gcer", "sohna", "dwarka"],
  }),
  p({
    slug: "ib-coaching-in-gurgaon", board: "IB", keyword: "ib coaching in gurgaon", pageType: "city", programmes: ["MYP", "DP"],
    h1: "IB Coaching in Gurgaon: One-to-One and Small-Group Options", title: "IB Coaching in Gurgaon | 1:1 and Small-Group IB Prep",
    description: "Compare IB coaching in Gurgaon: coaching centre batches, small groups and one-to-one IB tutors, and which format suits DP subjects, IA work and exam prep.",
    focus: "IB coaching in Gurgaon", subjects: ["IB Mathematics AA and AI", "IB Physics", "IB Chemistry", "IB Economics", "TOK"], level: "MYP 4-5 and DP",
    intent: "Format comparison. Coaching-centre batches versus small groups versus one-to-one for IB in Gurgaon: why batch coaching built for CBSE, JEE or NEET often fits IB poorly (criterion-based marking, HL/SL mixes, IA, command terms), when a small group genuinely works (TOK discussion, Economics case practice, peers at the same school and level), and what structured IB coaching should include. Not a general tutor-hiring page.",
    facts: [DP, TOK, ECONOMICS],
    mustCover: ["a comparison of batch coaching, small group and one-to-one for IB, with plain trade-offs", "why HL and SL students in one batch slows both", "which IB tasks must never be group-coached (IA and EE drafts, for academic integrity)", "a numbered checklist for judging any IB coaching offer in Gurgaon", "how a structured coaching term is planned around DP deadlines", "honest limits of one-to-one (cost, no peer discussion)"],
    secondary: ["IB coaching Gurugram", "IB coaching centre Gurgaon", "IB DP coaching Gurgaon", "IB Maths coaching Gurgaon", "IB Physics coaching", "IB small group classes Gurgaon", "one to one IB coaching", "IB Economics coaching Gurugram", "IB exam coaching Gurgaon", "IB TOK coaching", "best IB coaching in Gurgaon", "IB coaching Golf Course Road"],
    corridors: ["gcr", "sushant", "sohna", "dlf"],
  }),
  p({
    slug: "ib-classes-in-gurgaon", board: "IB", keyword: "ib classes in gurgaon", pageType: "city", programmes: ["PYP", "MYP", "DP"],
    h1: "IB Classes in Gurgaon: Weekly, Holiday and Revision Plans", title: "IB Classes in Gurgaon | Weekly and Revision Classes",
    description: "IB classes in Gurgaon for PYP, MYP and DP: weekly subject classes, holiday catch-up and pre-exam revision, scheduled around school timings, home or online.",
    focus: "IB classes in Gurgaon", subjects: ["IB Mathematics", "IB Sciences", "IB English", "IB Economics"], level: "PYP, MYP and DP",
    intent: "Class planning and timetables. What a term of IB classes looks like week by week at each stage: frequency and length by programme, fitting classes around school timings, school buses and activities, summer and winter holiday catch-up, pre-mock and pre-May revision classes, and a trial class. Organised around the calendar, not around choosing a tutor or comparing coaching formats.",
    facts: [DP, MYP, PYP, EXAMS],
    mustCover: ["recommended weekly class patterns for PYP, MYP and DP, as ranges and reasons, not prescriptions", "a month-by-month outline of an IB DP2 year of classes", "how to use summer holidays between DP1 and DP2", "what a trial class should cover and what the parent should see afterwards", "fitting evening classes around Gurgaon school timings and traffic, corridor by corridor for the listed corridors", "when to pause or reduce classes"],
    secondary: ["IB classes Gurugram", "IB tuition classes Gurgaon", "IB weekly classes", "IB revision classes Gurgaon", "IB holiday classes", "IB summer classes Gurgaon", "IB DP classes Gurugram", "IB MYP classes", "IB PYP classes Gurgaon", "IB Maths classes Gurgaon", "IB online classes Gurgaon", "IB home classes Gurugram"],
    corridors: ["gcer", "spr", "old", "newg"],
  }),

  // ------------------------------------------------------------------ IB: programmes
  p({
    slug: "ib-dp-tutor-in-gurgaon", board: "IB", keyword: "ib dp tutor in gurgaon", pageType: "programme", programmes: ["DP"],
    h1: "IB DP Tutor in Gurgaon for DP1 and DP2 Students", title: "IB DP Tutor in Gurgaon | HL & SL Diploma Support",
    description: "IB DP tutor in Gurgaon for DP1 and DP2: HL and SL subject teaching, IA and EE planning, TOK support and May exam preparation, at home or online.",
    focus: "IB Diploma Programme tutoring", subjects: ["IB DP Mathematics AA and AI", "IB DP Physics", "IB DP Chemistry", "IB DP Biology", "IB DP Economics", "IB DP English A"], level: "DP1 and DP2 (Grades 11-12)",
    intent: "The Diploma Programme as a whole: the 45-point structure, HL/SL choices and their university consequences, the DP1 and DP2 calendar (IA season, EE, mocks, predicted grades, May exams), and the difference between a single-subject tutor and a DP mentor who manages the whole load. Subject depth stays light.",
    facts: [DP, TOK, EE, DP_SCIENCE],
    mustCover: ["how the 45 points are made up, and what 24 means", "a DP1 to DP2 timeline with the pressure points", "HL and SL subject choices and how to judge a change early in DP1", "predicted grades and why they matter for university applications", "single-subject tutor vs DP mentor, with when each makes sense", "managing four or five IA deadlines at once"],
    secondary: ["IB Diploma tutor Gurgaon", "IB DP home tutor Gurugram", "IB DP online tutor", "IBDP tutor Gurgaon", "DP1 tutor Gurgaon", "DP2 tutor Gurgaon", "IB HL tutor Gurgaon", "IB SL tutor Gurugram", "IB DP Maths tutor", "IB DP Physics tutor Gurgaon", "IB predicted grades help", "IB DP exam preparation Gurgaon"],
    corridors: ["gcr", "gcer", "dlf", "spr"],
  }),
  p({
    slug: "ib-myp-tutor-in-gurgaon", board: "IB", keyword: "ib myp tutor in gurgaon", pageType: "programme", programmes: ["MYP"],
    h1: "IB MYP Tutor in Gurgaon for MYP 1 to MYP 5", title: "IB MYP Tutor in Gurgaon | MYP 1-5 and eAssessment",
    description: "IB MYP tutor in Gurgaon for MYP 1 to 5: criterion-based assignment help, Personal Project guidance and eAssessment preparation, at home or online.",
    focus: "IB Middle Years Programme tutoring", subjects: ["MYP Mathematics", "MYP Sciences", "MYP Language and Literature", "MYP Individuals and Societies", "MYP Personal Project"], level: "MYP 1-5 (Grades 6-10)",
    intent: "The MYP across subjects: how criteria A-D and the 1-7 grade work, why students coming from CBSE or ICSE struggle with criterion-based tasks, the Personal Project, eAssessment in MYP 5 where the school offers it, and preparing for DP subject choices. Maths-specific depth belongs to the MYP Maths page.",
    facts: [MYP, DP],
    mustCover: ["how an MYP criterion score becomes a 1-7 grade, explained simply", "the move from CBSE or ICSE into MYP and what goes wrong first", "Personal Project: what a tutor may and may not do", "eAssessment preparation for MYP 5, where offered", "how MYP 4-5 choices shape DP subject and HL/SL decisions", "home vs online vs hybrid for MYP learners"],
    secondary: ["IB MYP tutor Gurugram", "MYP home tutor Gurgaon", "MYP online tutor", "IB MYP tuition Gurgaon", "MYP Personal Project help", "MYP eAssessment tutor", "MYP science tutor Gurgaon", "MYP English tutor Gurgaon", "MYP criteria help", "MYP 5 tutor Gurugram", "Grade 8 IB tutor Gurgaon", "IB middle years tutor"],
    corridors: ["sohna", "sushant", "dwarka", "gcer"],
  }),
  p({
    slug: "ib-myp-maths-tutor-in-gurgaon", board: "IB", keyword: "ib myp maths tutor in gurgaon", programmes: ["MYP"],
    h1: "IB MYP Maths Tutor in Gurgaon: Standard and Extended", title: "IB MYP Maths Tutor in Gurgaon | Standard & Extended",
    description: "IB MYP Maths tutor in Gurgaon: help with criteria A-D, standard or extended maths in MYP 4-5, eAssessment practice and a strong start for DP Maths AA or AI.",
    focus: "IB MYP Mathematics tutoring", subjects: ["MYP Mathematics", "MYP Standard Mathematics", "MYP Extended Mathematics"], level: "MYP 1-5",
    intent: "MYP Mathematics only: the four maths criteria (A Knowing and understanding, B Investigating patterns, C Communicating, D Applying mathematics in real-life contexts), standard versus extended mathematics in MYP 4-5 and how that choice feeds DP Maths AA or AI and HL or SL, investigation tasks, and the on-screen maths eAssessment where offered.",
    facts: [MYP, MYP_MATHS, MATHS_IA],
    mustCover: ["each maths criterion with an example of what full marks needs", "standard vs extended mathematics and the DP consequences", "investigating-patterns tasks: rule, justification, verification", "common gaps for students arriving from CBSE or ICSE maths", "a numbered plan for a term of MYP Maths support", "home vs online for maths at this age"],
    secondary: ["MYP Maths tutor Gurgaon", "IB MYP Maths tuition Gurugram", "MYP extended maths tutor", "MYP standard maths help", "MYP maths criteria help", "MYP maths eAssessment tutor", "IB middle years maths tutor", "MYP Maths home tutor Gurgaon", "MYP Maths online tutor", "Grade 9 IB Maths tutor Gurgaon", "MYP 5 Maths tutor", "IB Maths tutor for MYP"],
    corridors: ["gcr", "spr", "dwarka", "sushant"],
  }),
  p({
    slug: "ib-pyp-tutor-in-gurgaon", board: "IB", keyword: "ib pyp tutor in gurgaon", pageType: "programme", programmes: ["PYP"],
    h1: "IB PYP Tutor in Gurgaon for Ages 3 to 12", title: "IB PYP Tutor in Gurgaon | Inquiry-Based Home Support",
    description: "IB PYP tutor in Gurgaon for children aged 3 to 12: reading, maths and inquiry support that fits units of inquiry and the PYP exhibition, not rote worksheets.",
    focus: "IB Primary Years Programme tutoring", subjects: ["PYP literacy", "PYP mathematics", "Units of inquiry", "PYP exhibition"], level: "PYP (ages 3-12)",
    intent: "The PYP only: when a young IB learner benefits from a tutor and when they do not, supporting inquiry at home without turning it into worksheets, reading and numeracy foundations, the PYP exhibition in the final year, and the move into MYP or another board. Written for parents of primary-age children.",
    facts: [PYP, MYP],
    mustCover: ["signs a PYP child needs support, and signs they do not", "what an inquiry-friendly session looks like, with a concrete example", "reading and numeracy foundations, and why home lessons suit this age", "supporting the PYP exhibition without doing the child's work", "moving from PYP into MYP, or to CBSE or ICSE", "session length, frequency and attention for ages 5-11"],
    secondary: ["PYP tutor Gurgaon", "IB PYP home tutor Gurugram", "PYP tuition Gurgaon", "IB primary years tutor", "PYP exhibition help", "IB PYP maths tutor", "IB PYP English tutor", "PYP online tutor", "IB Grade 3 tutor Gurgaon", "IB Grade 5 tutor Gurgaon", "primary IB home tuition", "PYP inquiry learning support"],
    corridors: ["gcr", "sohna", "dlf", "newg"],
  }),

  // ------------------------------------------------------------------ IB: core and assessment
  p({
    slug: "ib-maths-ia-tutor-in-gurgaon", board: "IB", keyword: "ib maths ia tutor in gurgaon",
    h1: "IB Maths IA Tutor in Gurgaon for AA and AI Explorations", title: "IB Maths IA Tutor in Gurgaon | AA & AI Exploration",
    description: "IB Maths IA tutor in Gurgaon: topic selection, criteria A-E, personal engagement and reflection for AA and AI explorations, with academic integrity intact.",
    focus: "IB Mathematics IA mentoring", subjects: ["IB Mathematics AA exploration", "IB Mathematics AI exploration"], level: "DP1 and DP2, SL and HL",
    intent: "The mathematics exploration only: choosing a topic with enough mathematics at the right level (AA vs AI, SL vs HL), each of the five criteria, personal engagement that is not just a hobby story, reflection, data and technology, the school draft deadline, and exactly where legitimate mentoring stops and ghostwriting starts.",
    facts: [MATHS_IA, DP],
    mustCover: ["each criterion A-E with what moves a mark", "topic selection: three workable topic types and two that usually fail, with reasons", "AA vs AI explorations and SL vs HL expectations", "a numbered timeline from topic to final submission around the school's draft date", "academic integrity: what a tutor can and cannot do", "home vs online for IA mentoring"],
    secondary: ["IB Maths IA help Gurgaon", "IB Maths exploration tutor", "Maths IA topic ideas help", "IB Maths AA IA tutor", "IB Maths AI IA tutor", "IB Maths IA criteria", "IB Maths IA mentor Gurugram", "IB internal assessment Maths", "Maths IA HL help", "IB Maths IA online tutor", "IB Maths IA feedback", "IB Maths tutor Gurgaon"],
    corridors: ["gcer", "gcr", "spr"],
  }),
  p({
    slug: "ib-tok-tutor-in-gurgaon", board: "IB", keyword: "ib tok tutor in gurgaon",
    h1: "IB TOK Tutor in Gurgaon for the Exhibition and Essay", title: "IB TOK Tutor in Gurgaon | Exhibition & Essay Help",
    description: "IB TOK tutor in Gurgaon: build knowledge questions, choose exhibition objects and plan the 1,600-word prescribed title essay, in home or online sessions.",
    focus: "IB Theory of Knowledge tutoring", subjects: ["Theory of Knowledge exhibition", "Theory of Knowledge essay"], level: "DP1 and DP2",
    intent: "Theory of Knowledge only: what TOK asks (knowledge questions, not opinions), the exhibition, the prescribed-title essay, areas of knowledge and optional themes, the TOK/EE matrix and the E failing condition, and why TOK tutoring is discussion-led. Never write a sample essay or exhibition.",
    facts: [TOK, DP],
    mustCover: ["what a knowledge question is, with one worked example", "the exhibition: choosing objects and linking them to one prompt", "planning the essay: claims, counterclaims, real-life examples", "how TOK points combine with the EE", "why TOK suits discussion, and how online discussion works", "a numbered essay-planning process"],
    secondary: ["TOK tutor Gurgaon", "Theory of Knowledge tutor Gurugram", "TOK essay help Gurgaon", "TOK exhibition help", "IB TOK online tutor", "TOK knowledge questions help", "IB TOK coaching", "TOK prescribed titles help", "IB TOK home tutor", "TOK essay structure", "IB core tutor Gurgaon", "TOK and EE points"],
    corridors: ["dlf", "sohna", "dwarka"],
  }),
  p({
    slug: "ib-extended-essay-tutor-in-gurgaon", board: "IB", keyword: "ib extended essay tutor in gurgaon",
    h1: "IB Extended Essay Tutor in Gurgaon: Research to Final Draft", title: "IB Extended Essay Tutor in Gurgaon | EE Mentoring",
    description: "IB Extended Essay tutor in Gurgaon: narrow a research question, plan sources, structure the 4,000-word essay and prepare reflections, without ghostwriting.",
    focus: "IB Extended Essay mentoring", subjects: ["Extended Essay research", "Extended Essay writing"], level: "DP1 and DP2",
    intent: "The Extended Essay only: choosing a subject and narrowing a research question, the school supervisor's role versus an outside mentor's, sources and citation, structure within 4,000 words, reflection sessions, the DP1-to-DP2 timeline, and academic integrity. Never promise specific criterion marks.",
    facts: [EE, TOK],
    mustCover: ["from topic to research question, with a worked narrowing example", "school supervisor vs external mentor", "sources, citation and avoiding plagiarism", "a numbered EE timeline from DP1 to submission", "subject-specific expectations for sciences, economics and English essays", "what to do if the research question stops working"],
    secondary: ["Extended Essay tutor Gurgaon", "IB EE help Gurugram", "IB EE mentor", "Extended Essay research question help", "IB EE writing support", "EE supervisor help", "IB Extended Essay online tutor", "EE citation help", "IB EE timeline", "IB Economics EE help", "IB Biology EE help", "IB core EE Gurgaon"],
    corridors: ["gcer", "old", "sushant"],
  }),
  p({
    slug: "ib-physics-ia-tutor-in-gurgaon", board: "IB", keyword: "ib physics ia tutor in gurgaon",
    h1: "IB Physics IA Tutor in Gurgaon for the Scientific Investigation", title: "IB Physics IA Tutor in Gurgaon | Investigation Help",
    description: "IB Physics IA tutor in Gurgaon: design a workable investigation, handle uncertainties and error bars, and meet the four criteria in a 3,000-word report.",
    focus: "IB Physics IA mentoring", subjects: ["IB Physics scientific investigation"], level: "DP1 and DP2, SL and HL",
    intent: "The Physics internal assessment only: a feasible research question with a controllable independent variable, uncertainties and error propagation, graphs with error bars and lines of best and worst fit, simulations or databases when school lab time is short, collaborative work with individual reports, and each criterion. Physics theory teaching stays out.",
    facts: [DP_SCIENCE, "DP Physics themes: A Space, time and motion; B The particulate nature of matter; C Wave behaviour; D Fields; E Nuclear and quantum physics."],
    mustCover: ["research question design with a worked example", "uncertainty handling: absolute, fractional, percentage, propagation", "graphing and gradient uncertainty", "each of the four criteria with what moves a mark", "a numbered IA timeline around the school's lab and draft dates", "academic integrity limits"],
    secondary: ["IB Physics IA help Gurgaon", "Physics internal assessment tutor", "IB Physics IA ideas", "IB Physics uncertainty help", "IB Physics IA criteria", "IB Physics HL IA", "IB Physics SL IA", "Physics IA online tutor", "IB science IA tutor Gurugram", "IB Physics IA report", "IB Physics tutor Gurgaon", "error bars IB Physics"],
    corridors: ["gcr", "dwarka", "spr"],
  }),
  p({
    slug: "ib-chemistry-ia-tutor-in-gurgaon", board: "IB", keyword: "ib chemistry ia tutor in gurgaon",
    h1: "IB Chemistry IA Tutor in Gurgaon: Design, Data and Evaluation", title: "IB Chemistry IA Tutor in Gurgaon | Investigation Help",
    description: "IB Chemistry IA tutor in Gurgaon: choose a feasible research question, process titration or kinetics data, and evaluate the investigation against the criteria.",
    focus: "IB Chemistry IA mentoring", subjects: ["IB Chemistry scientific investigation"], level: "DP1 and DP2, SL and HL",
    intent: "The Chemistry internal assessment only: feasible investigations (titration, rates of reaction, calorimetry, colorimetry) given school lab access and safety rules, uncertainties from volumetric glassware and balances, processing and presenting data, database investigations, evaluation, and each criterion. No experiments at home involving hazardous chemicals.",
    facts: [DP_SCIENCE, "DP Chemistry: Structure 1-3 (models of the particulate nature of matter, bonding and structure, classification of matter) and Reactivity 1-3 (what drives chemical reactions; how much, how fast and how far; the mechanisms of chemical change)."],
    mustCover: ["investigation types that tend to work, and why", "uncertainty from glassware and instruments, with an example", "data processing and presentation", "each criterion with what moves a mark", "safety: all practical work happens at school under supervision", "a numbered IA plan around school lab slots"],
    secondary: ["IB Chemistry IA help Gurgaon", "Chemistry internal assessment tutor", "IB Chemistry IA ideas", "IB Chemistry titration IA", "IB Chemistry kinetics IA", "IB Chemistry IA criteria", "Chemistry IA online tutor", "IB Chemistry HL IA", "IB Chemistry SL IA", "IB science IA help Gurugram", "IB Chemistry tutor Gurgaon", "IB Chemistry IA uncertainty"],
    corridors: ["sohna", "gcer", "newg"],
  }),

  // ------------------------------------------------------------------ IB: subjects
  p({
    slug: "ib-biology-hl-tutor-in-gurgaon", board: "IB", keyword: "ib biology hl tutor in gurgaon",
    h1: "IB Biology HL Tutor in Gurgaon for Higher Level Students", title: "IB Biology HL Tutor in Gurgaon | Higher Level Support",
    description: "IB Biology HL tutor in Gurgaon: themes A to D with Additional Higher Level content, data-based questions, extended responses and the scientific investigation.",
    focus: "IB Biology HL tutoring", subjects: ["IB Biology HL"], level: "DP, Higher Level",
    intent: "Biology at Higher Level: the volume of AHL content on top of SL, extended responses in Paper 2, data-based questions, why HL Biology matters for students aiming at medicine, life sciences and related degrees abroad, managing HL Biology alongside HL Chemistry, and keeping the IA on schedule.",
    facts: [DP_SCIENCE, BIOLOGY, DP],
    mustCover: ["what HL adds over SL and where students fall behind", "extended-response technique with command terms", "data-based question practice", "HL Biology for medicine and life-science applications, framed carefully", "a weekly revision structure for HL content load", "home vs online for HL Biology"],
    secondary: ["IB Biology HL tutor", "IB Biology HL tuition Gurgaon", "IB Biology Higher Level help", "IB Biology HL online tutor", "IB Biology HL home tutor", "IB Biology AHL content", "IB Biology Paper 2 help", "IB Biology tutor Gurugram", "IB Biology HL for medicine", "IB Biology HL revision", "IB Biology data-based questions", "IB DP Biology tutor Gurgaon"],
    corridors: ["gcr", "gcer", "sohna"],
  }),
  p({
    slug: "ib-biology-sl-tutor-in-gurgaon", board: "IB", keyword: "ib biology sl tutor in gurgaon",
    h1: "IB Biology SL Tutor in Gurgaon for Standard Level Students", title: "IB Biology SL Tutor in Gurgaon | Standard Level Help",
    description: "IB Biology SL tutor in Gurgaon: efficient coverage of themes A to D, command-term precision, data-based questions and IA support for Standard Level students.",
    focus: "IB Biology SL tutoring", subjects: ["IB Biology SL"], level: "DP, Standard Level",
    intent: "Biology at Standard Level: students taking it as their science alongside non-science HL subjects, efficient study when Biology is not their main subject, precise command-term answers, data-based questions, moving from SL to HL or HL to SL (and when that is still possible, via the school), and a realistic route to a 6 or 7 at SL.",
    facts: [DP_SCIENCE, BIOLOGY, DP],
    mustCover: ["who typically takes Biology SL, and what they need", "efficient study for a non-major subject", "command terms and data-based questions", "switching between SL and HL: what to ask the coordinator", "a lighter weekly plan that still covers the syllabus", "home vs online for SL Biology"],
    secondary: ["IB Biology SL tutor", "IB Biology SL tuition Gurgaon", "IB Biology Standard Level help", "IB Biology SL online tutor", "IB Biology SL home tutor", "IB Biology SL revision", "IB Biology SL exam help", "IB Biology tutor Gurugram", "IB Biology SL IA help", "IB science SL tutor", "IB Biology Paper 1 help", "IB DP Biology SL Gurgaon"],
    corridors: ["dlf", "sushant", "dwarka"],
  }),
  p({
    slug: "ib-computer-science-tutor-in-gurgaon", board: "IB", keyword: "ib computer science tutor in gurgaon",
    h1: "IB Computer Science Tutor in Gurgaon for HL and SL", title: "IB Computer Science Tutor in Gurgaon | HL & SL",
    description: "IB Computer Science tutor in Gurgaon: programming in Python or Java, computational thinking, exam papers and the internal assessment solution, HL and SL.",
    focus: "IB Computer Science tutoring", subjects: ["IB Computer Science HL", "IB Computer Science SL"], level: "DP, HL and SL",
    intent: "DP Computer Science: the course redesigned for first assessment in 2027, Python or Java, computational thinking and problem-solving, programming fluency versus conceptual theory, the internal assessment solution with a real problem, and why strong coders still lose exam marks. MYP Design and IGCSE Computer Science stay out.",
    facts: [CS_DP, DP],
    mustCover: ["what changed in the course first assessed 2027, stated only as the facts allow", "Python or Java: why the school's choice matters for tutor matching", "programming practice versus exam theory", "planning the internal assessment solution", "why good coders still lose marks, and the fix", "online lessons with screen-sharing and live coding"],
    secondary: ["IB Computer Science tutor", "IB CS tutor Gurgaon", "IB Computer Science HL tutor", "IB Computer Science SL tutor", "IB Computer Science IA help", "IB CS Python tutor", "IB CS Java tutor", "IB Computer Science online tutor", "IB Computer Science home tutor Gurugram", "IB programming tutor Gurgaon", "IB DP Computer Science", "computational thinking tutor"],
    corridors: ["dlf", "gcer", "newg"],
  }),
  p({
    slug: "ib-esl-tutor-in-gurgaon", board: "IB", keyword: "ib esl tutor in gurgaon", programmes: ["MYP", "DP"],
    h1: "IB ESL Tutor in Gurgaon for English B and Ab Initio", title: "IB ESL Tutor in Gurgaon | English B & Ab Initio Help",
    description: "IB ESL tutor in Gurgaon for students learning English as an additional language: English B, ab initio, MYP language acquisition, writing and oral practice.",
    focus: "IB English language acquisition tutoring", subjects: ["IB English B", "IB English ab initio", "MYP Language Acquisition English"], level: "MYP and DP",
    intent: "English as an additional language inside the IB: the IB has no subject named ESL, so explain English B, English ab initio and MYP Language Acquisition; students relocating to Gurgaon from other countries or arriving from non-English-medium schooling; academic English for other subjects; writing text types; listening and reading; the individual oral. Not English A literature analysis.",
    facts: [ENGLISH_B, MYP],
    mustCover: ["what 'IB ESL' actually refers to, stated as a direct answer", "English B vs ab initio vs English A: who belongs where", "text-type writing for Paper 1 with examples", "speaking confidence and the individual oral", "academic English for other IB subjects", "home vs online for language learners"],
    secondary: ["IB ESL tutor", "IB English B tutor Gurgaon", "IB English ab initio tutor", "English as a second language tutor Gurgaon", "MYP language acquisition English tutor", "IB English B HL help", "IB English B SL help", "IB English oral practice", "EAL tutor Gurgaon", "English tutor for international students Gurugram", "IB English B online tutor", "spoken English tutor IB"],
    corridors: ["gcr", "gcer", "dlf"],
  }),
  p({
    slug: "ib-english-home-tutor-in-gurgaon", board: "IB", keyword: "ib english home tutor in gurgaon",
    h1: "IB English Home Tutor in Gurgaon for English A", title: "IB English Home Tutor in Gurgaon | English A Support",
    description: "IB English home tutor in Gurgaon for English A: Paper 1 textual analysis, Paper 2 comparative essays, the Individual Oral and the HL essay, taught at home.",
    focus: "IB English A home tutoring", subjects: ["IB English A Language and Literature", "IB English A Literature"], level: "DP, HL and SL",
    intent: "English A taught at home: Language and Literature versus Literature, Paper 1 unseen analysis, Paper 2 comparative essays, the Individual Oral and the HL essay, and why face-to-face lessons suit English (handwritten timed essays marked beside the student, reading aloud, oral rehearsal). Not language acquisition.",
    facts: [ENGLISH_A, DP],
    mustCover: ["Language and Literature vs Literature", "a Paper 1 analysis approach with a worked mini-example", "Paper 2 comparison planning", "rehearsing the Individual Oral at home", "HL essay: choosing a line of inquiry", "why home lessons help English, and when online is fine"],
    secondary: ["IB English tutor Gurgaon", "IB English A home tutor", "IB English Lang Lit tutor", "IB English Literature tutor Gurugram", "IB English Paper 1 help", "IB English Paper 2 help", "IB English IO help", "IB English HL essay help", "IB English home tuition Gurgaon", "IB English online tutor", "IB DP English tutor", "IB English essay tutor"],
    corridors: ["gcr", "sohna", "spr"],
  }),
  p({
    slug: "ib-economics-home-tutor-in-gurgaon", board: "IB", keyword: "ib economics home tutor in gurgaon",
    h1: "IB Economics Home Tutor in Gurgaon for HL and SL", title: "IB Economics Home Tutor in Gurgaon | HL & SL at Home",
    description: "IB Economics home tutor in Gurgaon: diagrams, Paper 1 to Paper 3 technique and IA commentaries built on real news articles, taught face to face at home.",
    focus: "IB Economics home tutoring", subjects: ["IB Economics HL", "IB Economics SL"], level: "DP, HL and SL",
    intent: "IB Economics taught at home: accurate diagrams drawn and corrected on paper, Paper 1 extended response, Paper 2 data response, Paper 3 policy calculations at HL, the three IA commentaries on news articles and key concepts, and using Indian and global examples. Why home lessons work for diagram-heavy economics, and when online does.",
    facts: [ECONOMICS, DP],
    mustCover: ["diagram accuracy: the errors that cost marks", "Paper 1, Paper 2 and HL Paper 3 technique", "choosing news articles and key concepts for the IA commentaries", "real-world examples students can use responsibly", "a numbered weekly home-lesson structure", "home vs online for Economics"],
    secondary: ["IB Economics tutor Gurgaon", "IB Economics home tuition Gurugram", "IB Economics HL tutor", "IB Economics SL tutor", "IB Economics IA help", "IB Economics diagrams help", "IB Economics Paper 3 help", "IB Economics online tutor", "IB Economics commentary help", "IB DP Economics tutor", "Economics home tutor Gurgaon", "IB Economics revision"],
    corridors: ["gcr", "dlf", "sushant"],
  }),
  p({
    slug: "ib-biology-home-tutor-in-gurgaon", board: "IB", keyword: "ib biology home tutor in gurgaon", programmes: ["MYP", "DP"],
    h1: "IB Biology Home Tutor in Gurgaon for MYP and DP", title: "IB Biology Home Tutor in Gurgaon | MYP & DP at Home",
    description: "IB Biology home tutor in Gurgaon: face-to-face lessons for MYP sciences and DP Biology, with diagram practice, data questions and a weekly study routine.",
    focus: "IB Biology home tutoring", subjects: ["IB DP Biology", "IB MYP Sciences (Biology)"], level: "MYP 4-5 and DP",
    intent: "Home lessons for IB Biology across MYP sciences and DP: how a face-to-face biology lesson runs (labelled diagrams, active recall, flashcards, past data questions), the study routine a tutor can set up at home, the MYP-to-DP Biology bridge, and the home logistics in Gurgaon. HL and SL depth belongs to the level-specific pages.",
    facts: [BIOLOGY, DP_SCIENCE, MYP],
    mustCover: ["what one home biology lesson looks like, minute by minute in prose", "study habits a tutor can build: active recall, spaced repetition, diagrams", "MYP sciences criteria and the jump to DP Biology", "handling large content volume without rote learning", "home logistics across the listed corridors", "when online is a better fit than home"],
    secondary: ["IB Biology home tutor", "IB Biology tutor Gurgaon", "IB Biology home tuition Gurugram", "MYP Biology tutor Gurgaon", "IB DP Biology home tutor", "IB Biology private tutor", "IB Biology revision at home", "IB Biology online tutor", "IB science home tutor Gurgaon", "IB Biology HL SL tutor", "Biology tutor for IB students", "IB Biology diagrams help"],
    corridors: ["sohna", "newg", "dwarka"],
  }),

  // ------------------------------------------------------------------ IB: exams
  p({
    slug: "ib-exam-preparation-tutor-in-gurgaon", board: "IB", keyword: "ib exam preparation tutor in gurgaon",
    h1: "IB Exam Preparation Tutor in Gurgaon for Mocks and May", title: "IB Exam Preparation Tutor in Gurgaon | Mocks to May",
    description: "IB exam preparation tutor in Gurgaon: past papers, markschemes, command terms and timed practice from DP2 mocks to the May session, subject by subject.",
    focus: "IB exam preparation", subjects: ["IB DP Mathematics", "IB DP Sciences", "IB DP Economics", "IB DP English A"], level: "DP2",
    intent: "Exam preparation for the DP2 run-in only: mocks, past papers, markschemes and subject reports, command terms, timed practice, triage when time is short, study leave, the week-by-week plan to May, and exam-day technique. Not retakes and not general tutoring.",
    facts: [EXAMS, DP],
    mustCover: ["a numbered revision plan from mocks to May", "how to use markschemes and subject reports properly", "command terms with an example of the difference in depth", "triage: what to fix first with six weeks left", "timed practice and exam-day technique", "stress, sleep and realistic daily revision hours"],
    secondary: ["IB exam preparation Gurgaon", "IB exam prep tutor", "IB past paper practice Gurgaon", "IB mock exam preparation", "IB revision tutor Gurugram", "IB May exams preparation", "IB DP2 revision", "IB crash course Gurgaon", "IB markscheme practice", "IB command terms help", "IB exam tutor online", "IB final exam preparation"],
    corridors: ["gcer", "spr", "sohna", "dlf"],
  }),
  p({
    slug: "ib-retake-tutor-in-gurgaon", board: "IB", keyword: "ib retake tutor in gurgaon",
    h1: "IB Retake Tutor in Gurgaon for the November Session", title: "IB Retake Tutor in Gurgaon | November Resit Support",
    description: "IB retake tutor in Gurgaon: plan a November or May resit, decide between a re-mark and a retake, and rebuild the exam papers that cost the grade.",
    focus: "IB retake preparation", subjects: ["IB DP retake subjects"], level: "DP graduates and DP2 candidates",
    intent: "Retakes only: the decision between an enquiry upon results and a retake, what carries forward, choosing which subjects to resit, rebuilding the specific papers that lost marks, the November timeline, conditional university offers and gap-year planning, and keeping motivation up after a disappointing July. Honest about when a retake is not the best route.",
    facts: [RETAKE, DP],
    mustCover: ["re-mark or retake: a plain decision guide", "diagnosing which papers and skills cost the grade", "a numbered November retake plan from July onwards", "university offers and gap-year conversations, generally", "motivation and structure when school has ended", "when a retake is not worth it"],
    secondary: ["IB retake tutor", "IB November retake Gurgaon", "IB resit tutor Gurugram", "IB retake exam preparation", "IB diploma retake help", "IB subject retake", "IB enquiry upon results", "IB retake online tutor", "IB failed diploma help", "IB retake Maths tutor", "IB retake Physics tutor", "IB retake planning"],
    corridors: ["dwarka", "old", "manesar"],
  }),

  // ------------------------------------------------------------------ IGCSE: general intent
  p({
    slug: "igcse-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse tutor in gurgaon", pageType: "city",
    h1: "IGCSE Tutor in Gurgaon for Cambridge and Edexcel", title: "IGCSE Tutor in Gurgaon | Cambridge & Edexcel Help",
    description: "IGCSE tutor in Gurgaon for Cambridge and Pearson Edexcel: Grades 9 and 10, Core or Extended tiers, past-paper practice, home or online across Gurugram.",
    focus: "IGCSE tutoring in Gurgaon", subjects: ["IGCSE Mathematics", "IGCSE Physics", "IGCSE Chemistry", "IGCSE Biology", "IGCSE English", "IGCSE Economics"], level: "Grades 9-10",
    intent: "The IGCSE pillar page: what an IGCSE tutor needs to know (board, syllabus code, tier), Cambridge versus Edexcel, subjects Gurgaon students most often need help in, choosing and trialling a tutor, lesson modes, and the exam series including the India-only March series. Fees, online lessons and coaching get a paragraph each, with depth left to the sibling pages.",
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE],
    mustCover: ["why the syllabus code and tier matter before booking anyone", "Cambridge vs Edexcel in plain terms", "a numbered process to find and trial an IGCSE tutor in Gurgaon", "home vs online vs hybrid across the corridors", "the two-year IGCSE timeline and exam series choices", "how to judge progress after a month"],
    secondary: ["IGCSE tutors in Gurgaon", "IGCSE home tutor Gurgaon", "IGCSE online tutor Gurugram", "best IGCSE tutor Gurgaon", "Cambridge IGCSE tutor Gurgaon", "Edexcel IGCSE tutor Gurugram", "IGCSE Maths tutor Gurgaon", "IGCSE science tutor Gurgaon", "IGCSE tuition Gurugram", "IGCSE private tutor Gurgaon", "Grade 10 IGCSE tutor", "IGCSE tutor Golf Course Road"],
    corridors: ALL,
  }),
  p({
    slug: "igcse-tutor-near-me-gurgaon", board: "IGCSE", keyword: "igcse tutor near me gurgaon", pageType: "city",
    h1: "IGCSE Tutor Near Me in Gurgaon: Home Tutors by Area", title: "IGCSE Tutor Near Me in Gurgaon | Home Tutors by Area",
    description: "Need an IGCSE tutor near you in Gurgaon? See which sectors, societies and roads home tutors cover, when online is quicker, and how a local match is made.",
    focus: "IGCSE home tutors near you in Gurgaon", subjects: ["IGCSE Mathematics", "IGCSE Sciences", "IGCSE English", "IGCSE Economics"], level: "Grades 9-10",
    intent: "Proximity for IGCSE families: corridor-by-corridor coverage for home IGCSE tutors, grouping several subjects with one nearby tutor versus separate specialists, travel time and evening slots, sibling scheduling, and when the right Additional Maths or Computer Science specialist is far away and online makes more sense. Not a general 'how to choose' page.",
    facts: [IGCSE],
    mustCover: ["every corridor listed, with sectors, societies and the practical implication", "one nearby tutor for Maths and sciences vs separate specialists", "a numbered 'near me' matching process", "a comparison of a nearby tutor, a farther specialist at home, and online", "siblings on IGCSE and IB in one household", "moving house mid-course"],
    secondary: ["IGCSE tutor near me", "IGCSE home tutor near me Gurgaon", "IGCSE tuition near me Gurugram", "IGCSE tutor Sohna Road", "IGCSE tutor Golf Course Extension Road", "IGCSE tutor DLF Phase 4", "IGCSE tutor Dwarka Expressway", "IGCSE tutor South City", "IGCSE tutor Palam Vihar", "IGCSE tutor New Gurgaon", "nearby IGCSE Maths tutor", "home IGCSE tutor in my sector"],
    corridors: ALL,
  }),
  p({
    slug: "igcse-online-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse online tutor in gurgaon", pageType: "city",
    h1: "IGCSE Online Tutor in Gurgaon for Live Lessons", title: "IGCSE Online Tutor in Gurgaon | Live 1:1 Lessons",
    description: "IGCSE online tutor for Gurgaon students: live one-to-one Cambridge and Edexcel lessons, annotated past papers and evening slots without the traffic.",
    focus: "Online IGCSE tutoring for Gurgaon students", subjects: ["IGCSE Mathematics", "IGCSE Additional Mathematics", "IGCSE Sciences", "IGCSE Computer Science", "IGCSE English"], level: "Grades 9-10",
    intent: "Online IGCSE delivery only: live lessons with digital past papers, annotation and shared whiteboards, topic-wise past-paper drilling, Computer Science live coding, the limits for practical papers and hands-on science, attention and accountability for 14-16 year olds, and why families in newer sectors often choose online.",
    facts: [IGCSE, SCIENCE_IGCSE, CS_0478],
    mustCover: ["setup for an online IGCSE lesson", "subject by subject: what works online, what does not", "past-paper drilling online, with a routine", "accountability: homework, tests and parent updates", "online vs home vs hybrid for IGCSE in Gurgaon", "signs online is not working, and the switch"],
    secondary: ["online IGCSE tutor Gurgaon", "IGCSE online tuition Gurugram", "live online IGCSE classes", "Cambridge IGCSE online tutor", "Edexcel IGCSE online tutor", "online IGCSE Maths tutor", "online IGCSE Physics tutor", "IGCSE online coaching Gurgaon", "one to one online IGCSE tutor", "virtual IGCSE tutor", "IGCSE online past paper practice", "IGCSE Computer Science online tutor"],
    corridors: ["dwarka", "newg", "spr", "manesar"],
  }),
  p({
    slug: "igcse-coaching-in-gurgaon", board: "IGCSE", keyword: "igcse coaching in gurgaon", pageType: "city",
    h1: "IGCSE Coaching in Gurgaon: Batches, Groups or One-to-One", title: "IGCSE Coaching in Gurgaon | Groups and 1:1 Options",
    description: "Compare IGCSE coaching in Gurgaon: coaching centre batches, small groups and one-to-one tutors, and which suits Cambridge or Edexcel exam preparation.",
    focus: "IGCSE coaching in Gurgaon", subjects: ["IGCSE Mathematics", "IGCSE Physics", "IGCSE Chemistry", "IGCSE Biology"], level: "Grades 9-10",
    intent: "Format comparison for IGCSE: coaching-centre batches versus small groups versus one-to-one, the problem with batches that mix boards (CBSE Class 10 alongside IGCSE) or tiers (Core with Extended), when a small group works (same syllabus code, same tier, same series), topic-wise past-paper coaching, and pre-series crash batches.",
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE],
    mustCover: ["batch vs small group vs one-to-one for IGCSE, with trade-offs", "why mixed-board or mixed-tier batches hurt", "a numbered checklist for evaluating an IGCSE coaching offer", "topic-wise past-paper coaching done well", "crash coaching before March or May/June: what is realistic", "the limits of one-to-one"],
    secondary: ["IGCSE coaching Gurugram", "IGCSE coaching centre Gurgaon", "Cambridge IGCSE coaching", "IGCSE Maths coaching Gurgaon", "IGCSE science coaching", "IGCSE small group classes", "one to one IGCSE coaching", "IGCSE crash course Gurgaon", "IGCSE exam coaching", "best IGCSE coaching in Gurgaon", "Edexcel IGCSE coaching", "IGCSE coaching Sohna Road"],
    corridors: ["sohna", "sushant", "gcr", "old"],
  }),
  p({
    slug: "igcse-tuition-in-gurgaon", board: "IGCSE", keyword: "igcse tuition in gurgaon", pageType: "city",
    h1: "IGCSE Tuition in Gurgaon Through Grades 9 and 10", title: "IGCSE Tuition in Gurgaon | Weekly Subject Tuition",
    description: "IGCSE tuition in Gurgaon: regular weekly tuition for Maths, sciences, English and more across the two-year course, with progress checks before each exam.",
    focus: "IGCSE tuition in Gurgaon", subjects: ["IGCSE Mathematics", "IGCSE Sciences", "IGCSE English", "IGCSE Humanities and Business"], level: "Grades 9-10",
    intent: "Regular, ongoing tuition across the two-year IGCSE course: how many subjects to cover and how often, bundling Maths with sciences, a month-by-month two-year tuition calendar, progress checks and parent updates, school mocks, and adjusting tuition as the chosen series approaches. Organised around the long run, not choosing a tutor or format.",
    facts: [IGCSE, MATHS_0580],
    mustCover: ["how many subjects need tuition, and how to decide", "a two-year tuition calendar in prose", "bundling subjects with one tutor vs specialists", "progress checks that mean something", "adjusting before school mocks and the final series", "home vs online tuition across the listed corridors"],
    secondary: ["IGCSE tuition Gurugram", "IGCSE tuition classes Gurgaon", "IGCSE home tuition", "IGCSE online tuition", "IGCSE Maths tuition Gurgaon", "IGCSE science tuition", "IGCSE English tuition", "Cambridge IGCSE tuition Gurgaon", "Grade 9 IGCSE tuition", "Grade 10 IGCSE tuition", "weekly IGCSE tuition", "IGCSE tuition centre Gurgaon"],
    corridors: ["gcer", "dlf", "newg", "old"],
  }),
  p({
    slug: "igcse-class-9-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse class 9 tutor in gurgaon",
    h1: "IGCSE Class 9 Tutor in Gurgaon for the First IGCSE Year", title: "IGCSE Class 9 Tutor in Gurgaon | Grade 9 Foundations",
    description: "IGCSE Class 9 tutor in Gurgaon: subject choices, Core or Extended decisions and strong foundations in the first year of the IGCSE course, home or online.",
    focus: "IGCSE Class 9 tutoring", subjects: ["Grade 9 IGCSE Mathematics", "Grade 9 IGCSE Sciences", "Grade 9 IGCSE English"], level: "Grade 9 (Class 9)",
    intent: "The first IGCSE year only: subject choices and how many subjects, Core versus Extended tier decisions, students arriving from CBSE, ICSE or Cambridge Lower Secondary, the new skills IGCSE papers demand, school assessments in Grade 9, and building foundations so Grade 10 is not a rescue job.",
    facts: [IGCSE, MATHS_0580, SCIENCE_IGCSE],
    mustCover: ["subject choices and their consequences for IB DP, A Levels or CBSE Class 11", "Core vs Extended: who decides, when, and what to watch", "the move from CBSE or ICSE Class 8 into IGCSE", "foundation topics in Maths and sciences that Grade 10 builds on", "a numbered Grade 9 support plan", "how much tuition a Grade 9 student actually needs"],
    secondary: ["IGCSE Class 9 tutor", "IGCSE Grade 9 tutor Gurgaon", "Class 9 IGCSE tuition Gurugram", "IGCSE Grade 9 Maths tutor", "IGCSE Grade 9 science tutor", "IGCSE Class 9 home tutor", "IGCSE Class 9 online tutor", "IGCSE subject choices help", "Core or Extended IGCSE", "CBSE to IGCSE Class 9", "Year 10 IGCSE tutor", "first year IGCSE support"],
    corridors: ["sohna", "gcer", "dwarka"],
  }),
  p({
    slug: "best-igcse-home-tutor-in-gurgaon", board: "IGCSE", keyword: "best igcse home tutor in gurgaon", pageType: "city",
    h1: "Best IGCSE Home Tutor in Gurgaon: How to Choose One", title: "Best IGCSE Home Tutor in Gurgaon | How to Choose",
    description: "How to find the best IGCSE home tutor in Gurgaon: the checks that matter, what a trial lesson should show, red flags, and questions to ask before you commit.",
    focus: "Choosing the best IGCSE home tutor in Gurgaon", subjects: ["IGCSE Mathematics", "IGCSE Sciences", "IGCSE English", "IGCSE Additional Mathematics"], level: "Grades 9-10",
    intent: "Evaluation. What 'best' means for an IGCSE home tutor in practice: syllabus-code fluency, tier and series familiarity, past-paper and markscheme command, lesson structure, feedback to parents, punctuality and professional conduct in the home, and an evidence-based trial. Includes questions to ask, red flags, and why the best tutor for one child is wrong for another. Never claims IB Gram's tutors are the best.",
    facts: [IGCSE, MATHS_0580],
    mustCover: ["a scored checklist of what makes a home tutor good for IGCSE", "questions to ask before the first home lesson", "what a trial lesson should produce", "red flags, including in-home conduct", "why 'best' depends on the student", "how verification and matching work at IB Gram, stated conditionally"],
    secondary: ["best IGCSE home tutor", "best IGCSE tutor Gurgaon", "top IGCSE home tutor Gurugram", "how to choose an IGCSE tutor", "experienced IGCSE home tutor", "IGCSE home tuition Gurgaon", "verified IGCSE tutor Gurgaon", "IGCSE Maths home tutor", "IGCSE science home tutor", "IGCSE tutor trial lesson", "IGCSE private home tutor", "good IGCSE tutor questions"],
    corridors: ["gcr", "gcer", "sohna", "dlf"],
  }),

  // ------------------------------------------------------------------ IGCSE: subjects
  p({
    slug: "igcse-biology-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse biology tutor in gurgaon",
    h1: "IGCSE Biology Tutor in Gurgaon for 0610 and 4BI1", title: "IGCSE Biology Tutor in Gurgaon | Cambridge 0610",
    description: "IGCSE Biology tutor in Gurgaon for Cambridge 0610 and Edexcel 4BI1: topic teaching, extended theory answers, practical papers and past-paper practice.",
    focus: "IGCSE Biology tutoring", subjects: ["Cambridge IGCSE Biology 0610", "Edexcel International GCSE Biology 4BI1"], level: "Grades 9-10",
    intent: "IGCSE Biology: the 0610 topic list and 4BI1, Core vs Extended theory papers, practical and alternative-to-practical skills, keyword-precise answers, genetics and data questions, and the move to IB DP Biology or A Level Biology.",
    facts: [SCIENCE_IGCSE, BIOLOGY_0610, IGCSE],
    mustCover: ["topics where marks are most often lost, and why", "keyword precision in theory answers", "Paper 6 alternative to practical skills", "0610 vs 4BI1 differences for tutoring", "a numbered past-paper routine", "home vs online for Biology"],
    secondary: ["IGCSE Biology tutor", "Cambridge IGCSE Biology tutor Gurgaon", "IGCSE Biology 0610 tutor", "Edexcel IGCSE Biology tutor", "IGCSE Biology home tutor Gurugram", "IGCSE Biology online tutor", "IGCSE Biology past papers help", "IGCSE Biology Extended tutor", "IGCSE Biology practical help", "IGCSE Biology tuition", "IGCSE science tutor Gurgaon", "IGCSE Biology revision"],
    corridors: ["sohna", "dwarka", "gcr"],
  }),
  p({
    slug: "igcse-english-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse english tutor in gurgaon",
    h1: "IGCSE English Tutor in Gurgaon for Language, ESL and Literature", title: "IGCSE English Tutor in Gurgaon | 0500, 0510, 0475",
    description: "IGCSE English tutor in Gurgaon for First Language English, English as a Second Language and Literature: reading, directed writing and exam technique.",
    focus: "IGCSE English tutoring", subjects: ["Cambridge IGCSE First Language English 0500", "Cambridge IGCSE English as a Second Language 0510/0511", "Cambridge IGCSE Literature in English 0475", "Edexcel International GCSE English Language A"], level: "Grades 9-10",
    intent: "IGCSE English across its separate syllabuses: identifying which English the student sits, reading and inference, directed writing and composition, summary writing, ESL listening and speaking, literature essays, and why tutoring differs for each.",
    facts: [ENGLISH_IGCSE, IGCSE],
    mustCover: ["which English syllabus your child is on, and why it changes tutoring", "reading and inference technique", "directed writing and composition, with a short worked example", "ESL speaking and listening practice", "literature essay structure", "home vs online for English"],
    secondary: ["IGCSE English tutor", "IGCSE First Language English tutor", "IGCSE ESL tutor Gurgaon", "IGCSE English Literature tutor", "Cambridge IGCSE English tutor Gurugram", "Edexcel IGCSE English tutor", "IGCSE English home tutor", "IGCSE English online tutor", "IGCSE directed writing help", "IGCSE English 0500 help", "IGCSE English 0510 tutor", "IGCSE English tuition Gurgaon"],
    corridors: ["gcr", "dlf", "spr"],
  }),
  p({
    slug: "igcse-economics-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse economics tutor in gurgaon",
    h1: "IGCSE Economics Tutor in Gurgaon for 0455 and 4EC1", title: "IGCSE Economics Tutor in Gurgaon | Cambridge 0455",
    description: "IGCSE Economics tutor in Gurgaon for Cambridge 0455 and Edexcel 4EC1: diagrams, data response, structured answers and the evaluation marks students miss.",
    focus: "IGCSE Economics tutoring", subjects: ["Cambridge IGCSE Economics 0455", "Edexcel International GCSE Economics 4EC1"], level: "Grades 9-10",
    intent: "IGCSE Economics: the six 0455 topics and 4EC1 papers, demand and supply diagrams, analysis and evaluation in structured questions, data response, current examples from India and abroad, and a bridge to IB Economics or A Level Economics.",
    facts: [ECONOMICS_0455, IGCSE],
    mustCover: ["the diagrams students must draw accurately", "analysis vs evaluation marks, with an example", "multiple choice technique for Paper 1", "using real examples without writing opinion", "a numbered weekly Economics routine", "home vs online for Economics"],
    secondary: ["IGCSE Economics tutor", "Cambridge IGCSE Economics tutor Gurgaon", "IGCSE Economics 0455 tutor", "Edexcel IGCSE Economics tutor", "IGCSE Economics home tutor", "IGCSE Economics online tutor", "IGCSE Economics past papers", "IGCSE Economics diagrams help", "IGCSE Economics tuition Gurugram", "IGCSE Economics revision", "IGCSE Economics evaluation questions", "Economics tutor Grade 10"],
    corridors: ["gcer", "sushant", "newg"],
  }),
  p({
    slug: "igcse-business-studies-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse business studies tutor in gurgaon",
    h1: "IGCSE Business Studies Tutor in Gurgaon for 0450 and 4BS1", title: "IGCSE Business Studies Tutor in Gurgaon | 0450 Help",
    description: "IGCSE Business Studies tutor in Gurgaon for Cambridge 0450 and Edexcel 4BS1: case-study answers, business calculations and applying theory to the scenario.",
    focus: "IGCSE Business Studies tutoring", subjects: ["Cambridge IGCSE Business Studies 0450", "Edexcel International GCSE Business 4BS1"], level: "Grades 9-10",
    intent: "IGCSE Business Studies: the six 0450 areas and 4BS1 papers, applying theory to the case-study business instead of writing generic answers, calculations (break-even, cash flow, ratios), justified recommendations, and how Business links to IB Business Management later.",
    facts: [BUSINESS_0450, IGCSE],
    mustCover: ["application to the case study, with a before-and-after example", "calculations students must master", "justified recommendations and evaluation", "0450 vs 4BS1 for tutoring", "a numbered case-study practice routine", "home vs online for Business Studies"],
    secondary: ["IGCSE Business Studies tutor", "Cambridge IGCSE Business Studies tutor Gurgaon", "IGCSE Business 0450 tutor", "Edexcel IGCSE Business tutor", "IGCSE Business Studies home tutor", "IGCSE Business Studies online tutor", "IGCSE Business case study help", "IGCSE Business calculations", "IGCSE Business Studies tuition Gurugram", "IGCSE Business revision", "Business Studies tutor Grade 10", "IGCSE commerce tutor Gurgaon"],
    corridors: ["dlf", "sohna", "old"],
  }),
  p({
    slug: "igcse-additional-maths-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse additional maths tutor in gurgaon",
    h1: "IGCSE Additional Maths Tutor in Gurgaon for 0606", title: "IGCSE Additional Maths Tutor in Gurgaon | 0606 Help",
    description: "IGCSE Additional Maths tutor in Gurgaon for Cambridge 0606: functions, logarithms, trigonometry and calculus, and a strong bridge to IB Maths AA HL.",
    focus: "IGCSE Additional Mathematics tutoring", subjects: ["Cambridge IGCSE Additional Mathematics 0606", "Edexcel International GCSE Further Pure Mathematics 4PM1"], level: "Grades 9-10",
    intent: "Additional Mathematics 0606: who should take it, the jump from 0580 Extended, the topics that hurt most (logarithms, trigonometric identities, calculus, vectors), algebraic fluency, and its value as preparation for IB Mathematics AA HL or A Level Mathematics. Edexcel Further Pure Mathematics gets a short comparison.",
    facts: [ADD_MATHS, MATHS_0580, IGCSE],
    mustCover: ["who should take Additional Maths, and who should not", "the hardest topics with one worked idea each", "algebra fluency as the real bottleneck", "how 0606 prepares for IB AA HL", "a numbered study plan alongside 0580", "home vs online for Additional Maths"],
    secondary: ["IGCSE Additional Maths tutor", "Cambridge IGCSE Additional Mathematics tutor Gurgaon", "IGCSE 0606 tutor", "IGCSE Add Maths tutor", "Additional Maths home tutor Gurugram", "Additional Maths online tutor", "IGCSE Further Pure Maths tutor", "IGCSE calculus tutor", "Additional Maths past papers help", "IGCSE Additional Maths tuition", "Add Maths tutor Grade 10", "IGCSE advanced maths tutor"],
    corridors: ["gcr", "gcer", "spr"],
  }),
  p({
    slug: "igcse-computer-science-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse computer science tutor in gurgaon",
    h1: "IGCSE Computer Science Tutor in Gurgaon for 0478 and 4CP0", title: "IGCSE Computer Science Tutor in Gurgaon | 0478 Help",
    description: "IGCSE Computer Science tutor in Gurgaon for Cambridge 0478 and Edexcel 4CP0: pseudocode, Python, trace tables, logic gates and both exam papers.",
    focus: "IGCSE Computer Science tutoring", subjects: ["Cambridge IGCSE Computer Science 0478", "Edexcel International GCSE Computer Science 4CP0"], level: "Grades 9-10",
    intent: "IGCSE Computer Science: 0478 Paper 1 theory and Paper 2 algorithms and programming, pseudocode that follows the syllabus conventions, trace tables, logic gates and truth tables, SQL basics, and Edexcel's on-screen Python paper. Why fluent gamers and coders still drop marks.",
    facts: [CS_0478, IGCSE],
    mustCover: ["pseudocode conventions and why they matter", "trace tables with a short worked example", "logic gates and truth tables", "theory topics students underestimate", "0478 vs 4CP0 tutoring differences", "online live-coding lessons"],
    secondary: ["IGCSE Computer Science tutor", "Cambridge IGCSE Computer Science tutor Gurgaon", "IGCSE 0478 tutor", "Edexcel IGCSE Computer Science tutor", "IGCSE CS Python tutor", "IGCSE pseudocode help", "IGCSE Computer Science online tutor", "IGCSE Computer Science home tutor", "IGCSE CS past papers", "IGCSE programming tutor Gurugram", "IGCSE trace tables help", "IGCSE Computer Science tuition"],
    corridors: ["dlf", "dwarka", "newg"],
  }),
  p({
    slug: "igcse-maths-home-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse maths home tutor in gurgaon",
    h1: "IGCSE Maths Home Tutor in Gurgaon for Core and Extended", title: "IGCSE Maths Home Tutor in Gurgaon | 0580 and 4MA1",
    description: "IGCSE Maths home tutor in Gurgaon for Cambridge 0580 and Edexcel 4MA1: Core or Extended, Foundation or Higher, non-calculator practice, taught at home.",
    focus: "IGCSE Mathematics home tutoring", subjects: ["Cambridge IGCSE Mathematics 0580", "Edexcel International GCSE Mathematics A 4MA1"], level: "Grades 9-10",
    intent: "IGCSE Maths taught at home: 0580 Core and Extended with the non-calculator papers from 2025, Edexcel 4MA1 Foundation and Higher, working and method marks on paper, error logs, and why a tutor sitting beside the student catches mistakes online lessons miss. When online is still the better call.",
    facts: [MATHS_0580, IGCSE],
    mustCover: ["the non-calculator papers and the skills they test", "Core vs Extended and Foundation vs Higher tier decisions", "method marks and showing working", "an error-log routine a home tutor can run", "a numbered structure for a one-hour home Maths lesson", "home vs online for Maths"],
    secondary: ["IGCSE Maths home tutor", "IGCSE Maths tutor Gurgaon", "Cambridge IGCSE Maths tutor", "IGCSE 0580 tutor", "Edexcel IGCSE Maths tutor Gurugram", "IGCSE Maths home tuition", "IGCSE Maths Extended tutor", "IGCSE Maths online tutor", "IGCSE Maths past papers help", "IGCSE non-calculator practice", "IGCSE Maths private tutor", "Grade 10 IGCSE Maths tutor"],
    corridors: ["sohna", "gcer", "sushant"],
  }),
  p({
    slug: "igcse-physics-home-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse physics home tutor in gurgaon",
    h1: "IGCSE Physics Home Tutor in Gurgaon for 0625 and 4PH1", title: "IGCSE Physics Home Tutor in Gurgaon | 0625 at Home",
    description: "IGCSE Physics home tutor in Gurgaon for Cambridge 0625 and Edexcel 4PH1: equations, practical skills, extended theory answers and past papers, at home.",
    focus: "IGCSE Physics home tutoring", subjects: ["Cambridge IGCSE Physics 0625", "Edexcel International GCSE Physics 4PH1"], level: "Grades 9-10",
    intent: "IGCSE Physics taught at home: recalling and rearranging equations, units and significant figures, practical and alternative-to-practical skills, explanation questions, space physics, and simple, safe household demonstrations that make abstract ideas concrete. When online works as well.",
    facts: [PHYSICS_0625, SCIENCE_IGCSE, IGCSE],
    mustCover: ["equation recall and rearrangement practice", "units, significant figures and graph skills", "explanation questions and how they are marked", "safe everyday demonstrations at home, clearly limited", "a numbered home Physics lesson structure", "home vs online for Physics"],
    secondary: ["IGCSE Physics home tutor", "IGCSE Physics tutor Gurgaon", "Cambridge IGCSE Physics tutor", "IGCSE 0625 tutor", "Edexcel IGCSE Physics tutor Gurugram", "IGCSE Physics home tuition", "IGCSE Physics online tutor", "IGCSE Physics past papers help", "IGCSE Physics equations help", "IGCSE Physics Extended tutor", "IGCSE Physics private tutor", "Grade 10 IGCSE Physics tutor"],
    corridors: ["gcr", "spr", "dwarka"],
  }),
  p({
    slug: "igcse-chemistry-home-tutor-in-gurgaon", board: "IGCSE", keyword: "igcse chemistry home tutor in gurgaon",
    h1: "IGCSE Chemistry Home Tutor in Gurgaon for 0620 and 4CH1", title: "IGCSE Chemistry Home Tutor in Gurgaon | 0620 at Home",
    description: "IGCSE Chemistry home tutor in Gurgaon for Cambridge 0620 and Edexcel 4CH1: moles, bonding, organic chemistry and practical questions, taught at home.",
    focus: "IGCSE Chemistry home tutoring", subjects: ["Cambridge IGCSE Chemistry 0620", "Edexcel International GCSE Chemistry 4CH1"], level: "Grades 9-10",
    intent: "IGCSE Chemistry taught at home: mole calculations and stoichiometry, bonding and structure, electrochemistry, organic chemistry, chemical tests and the alternative-to-practical paper, using models and diagrams at the table. No home experiments with chemicals. When online works as well.",
    facts: [CHEMISTRY_0620, SCIENCE_IGCSE, IGCSE],
    mustCover: ["mole calculations with a worked example", "bonding and structure explained with models", "chemical tests and practical-paper skills without home experiments", "organic chemistry basics students confuse", "a numbered home Chemistry lesson structure", "home vs online for Chemistry"],
    secondary: ["IGCSE Chemistry home tutor", "IGCSE Chemistry tutor Gurgaon", "Cambridge IGCSE Chemistry tutor", "IGCSE 0620 tutor", "Edexcel IGCSE Chemistry tutor Gurugram", "IGCSE Chemistry home tuition", "IGCSE Chemistry online tutor", "IGCSE Chemistry past papers help", "IGCSE mole calculations help", "IGCSE Chemistry Extended tutor", "IGCSE Chemistry private tutor", "Grade 10 IGCSE Chemistry tutor"],
    corridors: ["dlf", "sohna", "newg"],
  }),
];

export function schoolsFor(board: KeywordPage["board"]): string[] {
  return board === "IB" ? IB_SCHOOLS : IGCSE_SCHOOLS;
}

export const ROOT = process.cwd();
export const TMP = path.join(ROOT, "tmp", "gurgaon-keywords");

function main(): void {
  const slugs = KEYWORD_PAGES.map((e) => e.slug);
  const problems: string[] = [];
  if (slugs.length !== 40) problems.push(`expected 40 pages, got ${slugs.length}`);
  if (new Set(slugs).size !== slugs.length) problems.push("duplicate slug");
  for (const e of KEYWORD_PAGES) {
    if (e.title.length > 60) problems.push(`${e.slug}: title ${e.title.length} chars`);
    if (e.description.length < 120 || e.description.length > 160) problems.push(`${e.slug}: description ${e.description.length} chars`);
    if (e.secondary.length !== 12) problems.push(`${e.slug}: ${e.secondary.length} secondary keywords`);
  }
  if (problems.length) throw new Error(problems.join("\n"));

  mkdirSync(path.join(TMP, "briefs"), { recursive: true });
  mkdirSync(path.join(TMP, "agent-out"), { recursive: true });
  for (const e of KEYWORD_PAGES) {
    const siblings = KEYWORD_PAGES.filter((s) => s.board === e.board && s.slug !== e.slug).map((s) => ({ slug: s.slug, keyword: s.keyword, intent: s.intent }));
    const brief = {
      ...e,
      corridors: e.corridors.map((k) => ({ key: k, ...CORRIDORS[k] })),
      schools: schoolsFor(e.board),
      siblings,
    };
    writeFileSync(path.join(TMP, "briefs", `${e.slug}.json`), `${JSON.stringify(brief, null, 1)}\n`);
  }
  writeFileSync(path.join(TMP, "keys.txt"), `${slugs.join("\n")}\n`);
  console.log(`wrote ${slugs.length} briefs -> ${path.relative(ROOT, path.join(TMP, "briefs"))}`);
}

if (/plan\.ts$/.test(process.argv[1] ?? "")) main();
