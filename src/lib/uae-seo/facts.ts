/**
 * Ground truth for the /uae/ page set: emirates, their school regulators, the neighbourhoods
 * named in sitemap-uae.xml, and the slug -> subject vocabulary plan.ts parses URLs with.
 *
 * Everything here is public, checkable fact. No claim about IB Gram belongs in this file;
 * facts about the tutoring service live in the writer guide and the written pages.
 *
 * Display names are derived from slugs by title-casing, with an override table for the
 * acronyms and Arabic transliterations that title-casing gets wrong (JBR, DIFC, Al Ain).
 */

import type { UaeEmirateSlug } from "./types";

export interface Emirate {
  slug: UaeEmirateSlug;
  name: string;
  /** How the emirate is referred to in a sentence, e.g. "across Dubai". */
  inPhrase: string;
  /** The authority that licenses and inspects private schools there. */
  regulator: string;
  regulatorShort: string;
  /** Public city-centre coordinates. Describes the city, not an office. */
  geo: { latitude: number; longitude: number };
  /** One line of real local character a writer can build on; not marketing copy. */
  note: string;
}

export const EMIRATES: Record<UaeEmirateSlug, Emirate> = {
  dubai: {
    slug: "dubai",
    name: "Dubai",
    inPhrase: "across Dubai",
    regulator: "Knowledge and Human Development Authority",
    regulatorShort: "KHDA",
    geo: { latitude: 25.2048, longitude: 55.2708 },
    note: "The densest private-school market in the UAE, inspected annually by KHDA on a six-band scale from Outstanding to Very Weak. British-curriculum schools dominate by enrolment, most running IGCSE at 16 before splitting into A Level or IB Diploma.",
  },
  "abu-dhabi": {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    inPhrase: "across Abu Dhabi",
    regulator: "Department of Education and Knowledge",
    regulatorShort: "ADEK",
    geo: { latitude: 24.4539, longitude: 54.3773 },
    note: "ADEK licenses and inspects private schools in the emirate and publishes its own inspection ratings. Enrolment is spread between the island, the Khalifa City and Al Raha corridor, and the newer mainland communities.",
  },
  sharjah: {
    slug: "sharjah",
    name: "Sharjah",
    inPhrase: "across Sharjah",
    regulator: "Sharjah Private Education Authority",
    regulatorShort: "SPEA",
    geo: { latitude: 25.3463, longitude: 55.4209 },
    note: "SPEA regulates private schools in the emirate, including the Kalba and Khor Fakkan exclaves on the east coast. Many families commute into Dubai schools from Al Nahda and Al Majaz, which shapes when a tutoring slot can realistically start.",
  },
  ajman: {
    slug: "ajman",
    name: "Ajman",
    inPhrase: "across Ajman",
    regulator: "Ministry of Education",
    regulatorShort: "MoE",
    geo: { latitude: 25.4052, longitude: 55.5136 },
    note: "The smallest emirate by area, with private schools under federal Ministry of Education oversight. A large share of families work in Dubai or Sharjah, so evening schedules run later than in Abu Dhabi.",
  },
  "ras-al-khaimah": {
    slug: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    inPhrase: "across Ras Al Khaimah",
    // RAK has its own authority, not federal MoE oversight. Per u.ae, the Department of
    // Knowledge "regulates private education in the emirate" and, like SPEA, approves tuition
    // fees, curricula, programmes, courses, activities and assessment methods.
    regulator: "Department of Knowledge",
    regulatorShort: "RAK DoK",
    geo: { latitude: 25.7895, longitude: 55.9432 },
    note: "Northern emirate with its own education regulator and a smaller private-school set concentrated around Al Nakheel, Al Hamra and Mina Al Arab. Specialist subject teachers are genuinely scarce locally, which is why remote one-to-one matters more here than in Dubai.",
  },
  fujairah: {
    slug: "fujairah",
    name: "Fujairah",
    inPhrase: "across Fujairah",
    regulator: "Ministry of Education",
    regulatorShort: "MoE",
    geo: { latitude: 25.1288, longitude: 56.3265 },
    note: "The only emirate on the Gulf of Oman coast, separated from Dubai by the Hajar mountains. The private-school set is small, so students sitting less common IB subjects often have no local specialist at all.",
  },
  "umm-al-quwain": {
    slug: "umm-al-quwain",
    name: "Umm Al Quwain",
    inPhrase: "across Umm Al Quwain",
    regulator: "Ministry of Education",
    regulatorShort: "MoE",
    geo: { latitude: 25.5647, longitude: 55.5532 },
    note: "The least populous emirate. Most internationally-schooled students commute to Sharjah, Ajman or RAK, which compresses the evening window a tutoring session has to fit into.",
  },
  "al-ain": {
    slug: "al-ain",
    name: "Al Ain",
    inPhrase: "across Al Ain",
    regulator: "Department of Education and Knowledge",
    regulatorShort: "ADEK",
    geo: { latitude: 24.1302, longitude: 55.8023 },
    note: "The Garden City, part of the Emirate of Abu Dhabi and therefore under ADEK, 130km inland from the capital. Its private-school set is much smaller than Abu Dhabi island's, so Higher Level DP sciences and the less common languages are the usual gaps.",
  },
};

export const EMIRATE_SLUGS = Object.keys(EMIRATES) as UaeEmirateSlug[];

/** Slugs whose title-cased form is wrong. Everything else title-cases correctly. */
const NAME_OVERRIDES: Record<string, string> = {
  jbr: "JBR",
  jlt: "JLT",
  difc: "DIFC",
  tecom: "TECOM",
  "jumeirah-1": "Jumeirah 1",
  "jumeirah-2": "Jumeirah 2",
  "jumeirah-3": "Jumeirah 3",
  "arabian-ranches-2": "Arabian Ranches 2",
  "arabian-ranches-3": "Arabian Ranches 3",
  "damac-hills-2": "DAMAC Hills 2",
  "damac-hills": "DAMAC Hills",
  "al-quoz-4": "Al Quoz 4",
  "uaq-marina": "UAQ Marina",
  "al-nahda-sharjah": "Al Nahda, Sharjah",
  "al-rashidiya-ajman": "Al Rashidiya, Ajman",
  "mohammed-bin-rashid-city": "Mohammed Bin Rashid City",
  "mohammed-bin-zayed-city": "Mohammed Bin Zayed City",
  "dubai-investment-park": "Dubai Investments Park",
  "the-sustainable-city": "The Sustainable City",
  "al-raha-beach": "Al Raha Beach",
  "al-raha-gardens": "Al Raha Gardens",
  corniche: "the Corniche",
  "eastern-mangroves": "Eastern Mangroves",
  "sharjah-garden-city": "Sharjah Garden City",
  "university-city": "University City",
  "emirates-city": "Emirates City",
  "ajman-corniche": "Ajman Corniche",
  "fujairah-city": "Fujairah City",
  "seih-al-uraibi": "Seih Al Uraibi",
  "knowledge-park": "Dubai Knowledge Park",
  "dubai-academic-city": "Dubai International Academic City",
};

export function displayName(slug: string): string {
  const override = NAME_OVERRIDES[slug];
  if (override) return override;
  return slug
    .split("-")
    .map((word) => (word.length <= 2 && word !== "al" ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
}

/**
 * Neighbourhoods named in sitemap-uae.xml, in the order they appear there. Writers get the
 * siblings in their own cluster as the "nearby areas" to cross-link; adjacency inside a
 * cluster is real, which is what makes those links useful rather than decorative.
 */
export const AREAS_BY_CITY: Record<UaeEmirateSlug, string[]> = {
  dubai: [
    "dubai-marina", "jbr", "jlt", "emirates-hills", "the-springs", "the-meadows", "the-lakes",
    "the-greens", "the-views", "arabian-ranches", "arabian-ranches-2", "arabian-ranches-3",
    "dubai-hills-estate", "palm-jumeirah", "jumeirah-1", "jumeirah-2", "jumeirah-3", "umm-suqeim",
    "al-sufouh", "al-barsha", "al-barsha-south", "tecom", "downtown-dubai", "business-bay", "difc",
    "city-walk", "al-wasl", "al-safa", "al-satwa", "al-manara", "mirdif", "al-garhoud", "deira",
    "bur-dubai", "karama", "oud-metha", "al-mankhool", "al-qusais", "al-nahda", "al-twar",
    "muhaisnah", "al-rashidiya", "al-mizhar", "al-khawaneej", "al-warqa", "nad-al-sheba", "meydan",
    "sobha-hartland", "mohammed-bin-rashid-city", "dubai-creek-harbour", "al-jaddaf",
    "culture-village", "dubai-festival-city", "dubai-silicon-oasis", "dubai-academic-city",
    "international-city", "al-furjan", "discovery-gardens", "jumeirah-park", "jumeirah-islands",
    "jumeirah-golf-estates", "jumeirah-village-circle", "jumeirah-village-triangle", "motor-city",
    "dubai-sports-city", "damac-hills", "damac-hills-2", "town-square", "mudon", "remraam",
    "villanova", "serena", "al-barari", "tilal-al-ghaf", "the-sustainable-city", "the-valley",
    "dubailand", "living-legends", "al-quoz", "dubai-investment-park", "dubai-south", "emaar-south",
    "jebel-ali", "green-community", "dubai-production-city", "bluewaters-island",
    "emaar-beachfront", "dubai-harbour", "la-mer", "pearl-jumeira", "al-habtoor-city",
    "dubai-media-city", "dubai-internet-city", "knowledge-park", "al-mamzar", "hor-al-anz",
    "al-muteena", "al-khail-gate", "al-quoz-4", "nad-al-hamar", "umm-al-sheif",
  ],
  "abu-dhabi": [
    "saadiyat-island", "al-reem-island", "yas-island", "al-raha-beach", "al-raha-gardens",
    "khalifa-city", "mohammed-bin-zayed-city", "al-reef", "al-bateen", "corniche", "al-khalidiyah",
    "al-mushrif", "al-karamah", "al-nahyan", "al-zahiyah", "al-maryah-island", "masdar-city",
    "shakhbout-city", "al-shamkha", "baniyas", "mussafah", "al-falah", "al-bandar", "hydra-village",
    "al-ghadeer", "al-muroor", "al-manaseer", "al-jubail-island", "hudayriyat-island",
    "eastern-mangroves", "al-wahda", "al-rawdah", "madinat-zayed", "al-samha",
  ],
  sharjah: [
    "al-majaz", "al-nahda-sharjah", "al-khan", "al-taawun", "muwaileh", "university-city", "aljada",
    "al-zahia", "tilal-city", "sharjah-garden-city", "al-qasimia", "al-rahmaniya", "al-suyoh",
    "al-nouf", "maryam-island", "al-mamsha", "al-juraina", "al-ramtha", "kalba", "khor-fakkan",
  ],
  ajman: [
    "al-nuaimiya", "al-rashidiya-ajman", "al-jurf", "al-rawda", "al-zorah", "emirates-city",
    "al-yasmeen", "al-mowaihat", "ajman-corniche", "al-helio",
  ],
  "ras-al-khaimah": [
    "al-hamra-village", "mina-al-arab", "al-marjan-island", "al-nakheel", "khuzam", "al-dhait",
    "julphar", "al-qusaidat", "al-mamourah", "seih-al-uraibi",
  ],
  fujairah: ["fujairah-city", "dibba", "al-faseel", "sakamkam", "merashid", "al-gurfa"],
  "umm-al-quwain": ["uaq-marina", "al-salamah", "al-raas", "al-riqqa"],
  "al-ain": [
    "al-jimi", "al-muwaiji", "al-towayya", "al-khabisi", "hili", "al-maqam", "zakher", "falaj-hazza",
    "al-yahar", "al-mutaredh",
  ],
};

export const CITY_BY_AREA: Record<string, UaeEmirateSlug> = Object.fromEntries(
  EMIRATE_SLUGS.flatMap((city) => AREAS_BY_CITY[city].map((area) => [area, city] as const)),
) as Record<string, UaeEmirateSlug>;

/**
 * Dubai is too big for "nearby areas" to mean anything emirate-wide, so its neighbourhoods are
 * grouped by the corridor a family actually lives and commutes in. Used for cross-linking and
 * for the "areas we cover" rail on an area page.
 */
export const DUBAI_CORRIDORS: Record<string, string[]> = {
  "Marina and New Dubai": [
    "dubai-marina", "jbr", "jlt", "emirates-hills", "the-springs", "the-meadows", "the-lakes",
    "the-greens", "the-views", "al-sufouh", "bluewaters-island", "emaar-beachfront", "dubai-harbour",
    "dubai-media-city", "dubai-internet-city", "knowledge-park", "tecom", "al-barsha",
    "al-barsha-south", "jumeirah-golf-estates",
  ],
  "Jumeirah and the coast": [
    "palm-jumeirah", "jumeirah-1", "jumeirah-2", "jumeirah-3", "umm-suqeim", "al-wasl", "al-safa",
    "al-manara", "la-mer", "pearl-jumeira", "city-walk", "al-satwa", "umm-al-sheif", "al-habtoor-city",
  ],
  "Downtown and the central corridor": [
    "downtown-dubai", "business-bay", "difc", "al-quoz", "al-quoz-4", "al-jaddaf", "culture-village",
    "meydan", "nad-al-sheba", "sobha-hartland", "mohammed-bin-rashid-city", "dubai-creek-harbour",
  ],
  "Old Dubai and Deira": [
    "deira", "bur-dubai", "karama", "oud-metha", "al-mankhool", "al-garhoud", "al-mamzar",
    "hor-al-anz", "al-muteena", "al-qusais", "al-nahda", "al-twar", "muhaisnah",
  ],
  "Mirdif and the eastern suburbs": [
    "mirdif", "al-rashidiya", "al-mizhar", "al-khawaneej", "al-warqa", "nad-al-hamar",
    "dubai-festival-city", "international-city", "dubai-silicon-oasis", "dubai-academic-city",
  ],
  "Arabian Ranches and the Dubailand belt": [
    "arabian-ranches", "arabian-ranches-2", "arabian-ranches-3", "dubai-hills-estate", "motor-city",
    "dubai-sports-city", "damac-hills", "damac-hills-2", "town-square", "mudon", "remraam",
    "villanova", "serena", "al-barari", "tilal-al-ghaf", "the-sustainable-city", "the-valley",
    "dubailand", "living-legends", "jumeirah-village-circle", "jumeirah-village-triangle",
    "jumeirah-park", "jumeirah-islands", "al-khail-gate",
  ],
  "Jebel Ali and Dubai South": [
    "al-furjan", "discovery-gardens", "dubai-investment-park", "dubai-south", "emaar-south",
    "jebel-ali", "green-community", "dubai-production-city",
  ],
};

/** The corridor (Dubai) or emirate (everywhere else) an area belongs to. */
export function clusterFor(areaSlug: string): { label: string; siblings: string[] } {
  for (const [label, members] of Object.entries(DUBAI_CORRIDORS)) {
    if (members.includes(areaSlug)) return { label, siblings: members.filter((m) => m !== areaSlug) };
  }
  const city = CITY_BY_AREA[areaSlug];
  if (!city) return { label: "the UAE", siblings: [] };
  return { label: EMIRATES[city].name, siblings: AREAS_BY_CITY[city].filter((m) => m !== areaSlug) };
}

/* ------------------------------------------------------------------ */
/* Slug vocabulary: how plan.ts reads a URL                            */
/* ------------------------------------------------------------------ */

/** Longest-match first, so "math-aa-hl" wins over "math". Keys are slug fragments. */
export const SUBJECTS: Array<[string, string]> = [
  ["math-aa-hl", "Mathematics: Analysis and Approaches HL"],
  ["math-aa-sl", "Mathematics: Analysis and Approaches SL"],
  ["math-ai-hl", "Mathematics: Applications and Interpretation HL"],
  ["math-ai-sl", "Mathematics: Applications and Interpretation SL"],
  ["environmental-systems-and-societies", "Environmental Systems and Societies"],
  ["sports-exercise-and-health-science", "Sports, Exercise and Health Science"],
  ["english-a-language-and-literature", "English A: Language and Literature"],
  ["english-a-literature", "English A: Literature"],
  ["english-first-language-0500", "English as a First Language (0500)"],
  ["english-second-language-0510", "English as a Second Language (0510)"],
  ["english-literature-0475", "English Literature (0475)"],
  ["english-language-a-4ea1", "English Language A (4EA1)"],
  ["english-language-b-4eb1", "English Language B (4EB1)"],
  ["english-literature-4et1", "English Literature (4ET1)"],
  ["arabic-first-language-0508", "Arabic as a First Language (0508)"],
  ["arabic-foreign-language-0544", "Arabic as a Foreign Language (0544)"],
  ["additional-maths-0606", "Additional Mathematics (0606)"],
  ["international-maths-0607", "International Mathematics (0607)"],
  ["coordinated-sciences-0654", "Coordinated Sciences (0654)"],
  ["combined-science-0653", "Combined Science (0653)"],
  ["physical-science-0652", "Physical Science (0652)"],
  ["science-double-award-4sd0", "Science Double Award (4SD0)"],
  ["further-pure-maths-4pm1", "Further Pure Mathematics (4PM1)"],
  ["global-perspectives-0457", "Global Perspectives (0457)"],
  ["environmental-management-0680", "Environmental Management (0680)"],
  ["travel-and-tourism-0471", "Travel and Tourism (0471)"],
  ["business-studies-0450", "Business Studies (0450)"],
  ["computer-science-0478", "Computer Science (0478)"],
  ["computer-science-4cp0", "Computer Science (4CP0)"],
  ["art-and-design-0400", "Art and Design (0400)"],
  ["business-management", "Business Management"],
  ["computer-science", "Computer Science"],
  ["global-politics", "Global Politics"],
  ["digital-society", "Digital Society"],
  ["design-technology", "Design Technology"],
  ["visual-arts", "Visual Arts"],
  ["theory-of-knowledge", "Theory of Knowledge"],
  ["extended-essay", "the Extended Essay"],
  ["internal-assessment", "Internal Assessment"],
  ["personal-project", "the MYP Personal Project"],
  ["language-and-literature", "Language and Literature"],
  ["language-acquisition", "Language Acquisition"],
  ["individuals-and-societies", "Individuals and Societies"],
  ["standard-mathematics", "Standard Mathematics"],
  ["extended-mathematics", "Extended Mathematics"],
  ["maths-a-4ma1", "Mathematics A (4MA1)"],
  ["maths-0580", "Mathematics (0580)"],
  ["physics-0625", "Physics (0625)"],
  ["physics-4ph1", "Physics (4PH1)"],
  ["chemistry-0620", "Chemistry (0620)"],
  ["chemistry-4ch1", "Chemistry (4CH1)"],
  ["biology-0610", "Biology (0610)"],
  ["biology-4bi1", "Biology (4BI1)"],
  ["economics-0455", "Economics (0455)"],
  ["economics-4ec1", "Economics (4EC1)"],
  ["accounting-0452", "Accounting (0452)"],
  ["accounting-4ac1", "Accounting (4AC1)"],
  ["geography-0460", "Geography (0460)"],
  ["geography-4ge1", "Geography (4GE1)"],
  ["history-0470", "History (0470)"],
  ["history-4hi1", "History (4HI1)"],
  ["sociology-0495", "Sociology (0495)"],
  ["psychology-0266", "Psychology (0266)"],
  ["business-4bs1", "Business (4BS1)"],
  ["french-0520", "French (0520)"],
  ["spanish-0530", "Spanish (0530)"],
  ["hindi-0549", "Hindi (0549)"],
  ["ict-0417", "ICT (0417)"],
  ["ict-4it1", "ICT (4IT1)"],
  ["arabic-ab-initio", "Arabic ab initio"],
  ["french-ab-initio", "French ab initio"],
  ["spanish-ab-initio", "Spanish ab initio"],
  ["arabic-a", "Arabic A"],
  ["arabic-b", "Arabic B"],
  ["english-b", "English B"],
  ["french-b", "French B"],
  ["spanish-b", "Spanish B"],
  ["german-b", "German B"],
  ["hindi-b", "Hindi B"],
  ["mandarin-b", "Mandarin B"],
  ["mathematics", "Mathematics"],
  ["economics", "Economics"],
  ["chemistry", "Chemistry"],
  ["physics", "Physics"],
  ["biology", "Biology"],
  ["psychology", "Psychology"],
  ["geography", "Geography"],
  ["philosophy", "Philosophy"],
  ["history", "History"],
  ["sciences", "Sciences"],
  ["science", "Science"],
  ["theatre", "Theatre"],
  ["english", "English"],
  ["arabic", "Arabic"],
  ["french", "French"],
  ["spanish", "Spanish"],
  ["design", "Design"],
  ["music", "Music"],
  ["maths", "Mathematics"],
  ["arts", "Arts"],
  ["film", "Film"],
  ["cas", "CAS"],
  ["tok", "Theory of Knowledge"],
];

/** Programme level, longest match first. */
export const LEVELS: Array<[string, string]> = [
  ["cambridge-igcse", "Cambridge IGCSE"],
  ["edexcel-igcse", "Pearson Edexcel International GCSE"],
  ["ib-diploma", "the IB Diploma Programme"],
  ["ib-dp", "the IB Diploma Programme"],
  ["ib-myp", "the IB Middle Years Programme"],
  ["ib-pyp", "the IB Primary Years Programme"],
  ["ib-cp", "the IB Career-related Programme"],
  ["igcse", "IGCSE"],
  ["ib", "the IB"],
];

/** Four-digit Cambridge codes and Edexcel codes that appear in slugs. */
export const SYLLABUS_CODE = /\b(\d{4}|4[a-z]{2}\d)\b/;

/**
 * Exam sessions as they matter to a UAE family's calendar.
 *
 * Cambridge and Pearson dates below were read from the boards' own key-dates pages.
 * IB session dates are deliberately absent: ibo.org returns 403 to automated fetching, so no
 * IB date has been verified here and no page may state one as fact. Describe the May session
 * as the one UAE schools sit, and point families at their school's exam officer for dates.
 */
export const EXAM_SESSIONS = {
  ibMay: "The May session is the one almost every UAE school sits. Do not publish specific IB exam or results dates - they are not verified here; refer families to their school's DP coordinator.",
  ibNovember: "A November session exists, used mainly by southern-hemisphere-aligned schools and retake candidates. Rare in the UAE.",
  igcseJune: "Cambridge and Pearson Edexcel both run a June series; this is the main one for UAE schools.",
  igcseNovember: "Both boards run a November series, used for resits and November-entry candidates.",
  cambridgeMarch:
    "Cambridge runs a March series (3 February to 4 March 2027; final entries 27 November 2026, forecast grades 27 February 2027). Availability varies by centre and country - confirm with the school before telling a family they can enter.",
} as const;
