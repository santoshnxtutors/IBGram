/**
 * Ground truth for the /saudi-arabia/ page set: cities, their provinces, the districts named in
 * sitemap-saudi-arabia.xml, and the slug -> subject vocabulary plan.ts parses URLs with.
 *
 * Everything here is public, checkable fact. No claim about IB Gram belongs in this file; facts
 * about the tutoring service live in the writer guide and the written pages.
 *
 * Display names are derived from slugs by title-casing, with an override table for the acronyms
 * and Arabic transliterations that title-casing gets wrong (KAFD, KFUPM, AlUla, NEOM).
 */

import type { SaudiCitySlug } from "./types";

export interface SaudiCity {
  slug: SaudiCitySlug;
  name: string;
  /** How the city is referred to in a sentence, e.g. "across Riyadh". */
  inPhrase: string;
  /** The province (mintaqah) the city sits in. */
  province: string;
  /** ISO 3166-2:SA subdivision code, for the geo.region meta tag. */
  regionCode: string;
  /** Public city-centre coordinates. Describes the city, not an office. */
  geo: { latitude: number; longitude: number };
  /** One line of real local character a writer can build on; not marketing copy. */
  note: string;
}

/**
 * Private and international schools everywhere in the Kingdom are licensed by the Ministry of
 * Education, with school evaluation and accreditation run through the Education and Training
 * Evaluation Commission (ETEC). There is no per-city regulator the way Dubai has KHDA, so the
 * regulator line is national and the local colour sits in `note` instead.
 */
export const NATIONAL_REGULATOR = "the Ministry of Education (MoE) and the Education and Training Evaluation Commission (ETEC)";

export const CITIES: Record<SaudiCitySlug, SaudiCity> = {
  riyadh: {
    slug: "riyadh",
    name: "Riyadh",
    inPhrase: "across Riyadh",
    province: "Riyadh Province",
    regionCode: "SA-01",
    geo: { latitude: 24.7136, longitude: 46.6753 },
    note: "The Kingdom's capital and its largest international-school market, spread over a city that takes an hour to cross north to south. The northern districts around Al Malqa, Hittin and the Diplomatic Quarter hold most of the IB and British-curriculum enrolment, which is why a family in Al Olaya and a family in Al Narjis face completely different commutes to the same school.",
  },
  jeddah: {
    slug: "jeddah",
    name: "Jeddah",
    inPhrase: "across Jeddah",
    province: "Makkah Province",
    regionCode: "SA-02",
    geo: { latitude: 21.4858, longitude: 39.1925 },
    note: "The Kingdom's Red Sea port and its second international-school market, with a long coastal spine from the historic centre up to Obhur. Jeddah's international schools skew British and American, and the IB Diploma cohorts are smaller than Riyadh's, so a student sitting a less common Higher Level subject often has nobody in their year group doing the same one.",
  },
  "al-khobar": {
    slug: "al-khobar",
    name: "Al Khobar",
    inPhrase: "across Al Khobar",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 26.2794, longitude: 50.2083 },
    note: "The retail and residential heart of the Dammam-Khobar-Dhahran conurbation, and the usual home address for families whose children attend school on the Aramco or ISG campuses. The causeway to Bahrain puts a second country inside an hour's drive, which shapes both school choice and weekend study patterns.",
  },
  dammam: {
    slug: "dammam",
    name: "Dammam",
    inPhrase: "across Dammam",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 26.4207, longitude: 50.0888 },
    note: "The Eastern Province capital and its administrative centre. International enrolment here is spread thinly across a wide city rather than concentrated in a few compounds, so families routinely drive to Khobar or Dhahran for school and are back late.",
  },
  dhahran: {
    slug: "dhahran",
    name: "Dhahran",
    inPhrase: "across Dhahran",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 26.2886, longitude: 50.114 },
    note: "Built around the Saudi Aramco main camp and King Fahd University of Petroleum and Minerals. Its school-age population is unusually concentrated and unusually international, and the academic culture is visibly engineering-led - Higher Level Physics, Chemistry and Maths carry more weight in conversations here than anywhere else in the Kingdom.",
  },
  jubail: {
    slug: "jubail",
    name: "Jubail",
    inPhrase: "across Jubail",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 27.0046, longitude: 49.646 },
    note: "An industrial city built around the petrochemical complex, with an expatriate school population serving Jubail Industrial City. The international-school set is small, so the subject combinations a student can take locally are limited by who the school can staff rather than by what the student wants.",
  },
  makkah: {
    slug: "makkah",
    name: "Makkah",
    inPhrase: "across Makkah",
    province: "Makkah Province",
    regionCode: "SA-02",
    geo: { latitude: 21.3891, longitude: 39.8579 },
    note: "The holy city, where the academic calendar bends around Hajj and Umrah seasons in a way it does not anywhere else in the Kingdom. International-curriculum provision is far thinner than in Jeddah, 80km west, and many families there plan around travel restrictions as much as around term dates.",
  },
  madinah: {
    slug: "madinah",
    name: "Madinah",
    inPhrase: "across Madinah",
    province: "Madinah Province",
    regionCode: "SA-03",
    geo: { latitude: 24.5247, longitude: 39.5692 },
    note: "The Kingdom's second holy city, with a growing private-school sector but very few international-curriculum options at Diploma level. Families who want an IB or IGCSE pathway here are usually working around a school that offers the national curriculum plus a handful of international subjects.",
  },
  taif: {
    slug: "taif",
    name: "Taif",
    inPhrase: "across Taif",
    province: "Makkah Province",
    regionCode: "SA-02",
    geo: { latitude: 21.2854, longitude: 40.4183 },
    note: "A highland city at around 1,700 metres, cooler than the coast and a summer destination for families from Jeddah and Makkah. Its private-school set is largely national-curriculum, so international-curriculum students here are often the only ones in their school doing what they are doing.",
  },
  tabuk: {
    slug: "tabuk",
    name: "Tabuk",
    inPhrase: "across Tabuk",
    province: "Tabuk Province",
    regionCode: "SA-07",
    geo: { latitude: 28.3835, longitude: 36.5662 },
    note: "The main city of the north-west and the administrative anchor for the NEOM and Red Sea development zones. Its school market is changing quickly as those projects bring in international staff, but specialist subject teaching at Higher Level has not caught up with the demand.",
  },
  abha: {
    slug: "abha",
    name: "Abha",
    inPhrase: "across Abha",
    province: "'Asir Province",
    regionCode: "SA-14",
    geo: { latitude: 18.2465, longitude: 42.5117 },
    note: "A mountain city at around 2,200 metres in the south-west, with a climate and an academic culture that both differ sharply from the Gulf coast. International-curriculum provision is limited, and families often supplement a national-curriculum school with outside tuition for IGCSE or Diploma subjects.",
  },
  "khamis-mushait": {
    slug: "khamis-mushait",
    name: "Khamis Mushait",
    inPhrase: "across Khamis Mushait",
    province: "'Asir Province",
    regionCode: "SA-14",
    geo: { latitude: 18.3, longitude: 42.7333 },
    note: "The larger of the two 'Asir cities by population, 25km from Abha and sharing its school catchment. Between them they hold a substantial school-age population with very few international-curriculum places, which is why remote specialist teaching matters more here than in Riyadh.",
  },
  yanbu: {
    slug: "yanbu",
    name: "Yanbu",
    inPhrase: "across Yanbu",
    province: "Madinah Province",
    regionCode: "SA-03",
    geo: { latitude: 24.0895, longitude: 38.0618 },
    note: "A Red Sea industrial city built around the refining and petrochemical complex at Yanbu Industrial City, with a school population that tracks the industrial workforce. Like Jubail, the subject range a local school can offer is set by staffing rather than by demand.",
  },
  "thuwal-kaust": {
    slug: "thuwal-kaust",
    name: "Thuwal (KAUST)",
    inPhrase: "in Thuwal and on the KAUST campus",
    province: "Makkah Province",
    regionCode: "SA-02",
    geo: { latitude: 22.3095, longitude: 39.104 },
    note: "The coastal town north of Jeddah that hosts King Abdullah University of Science and Technology. The campus community is small, highly international and research-led, and its school serves the children of faculty and staff from dozens of countries - an unusually academic parent body with unusually specific subject needs.",
  },
  buraidah: {
    slug: "buraidah",
    name: "Buraidah",
    inPhrase: "across Buraidah",
    province: "Al-Qassim Province",
    regionCode: "SA-05",
    geo: { latitude: 26.326, longitude: 43.975 },
    note: "The capital of Al-Qassim, an agricultural province in the centre of the Kingdom. The private-school sector is almost entirely national curriculum, so an IGCSE or Diploma student in Buraidah is usually studying a curriculum their school does not teach.",
  },
  hail: {
    slug: "hail",
    name: "Ha'il",
    inPhrase: "across Ha'il",
    province: "Ha'il Province",
    regionCode: "SA-06",
    geo: { latitude: 27.5114, longitude: 41.7208 },
    note: "A northern city with a university and a growing private-school sector, but no significant international-curriculum provision at Diploma level. Families here are typically preparing for study abroad from a school that cannot support the qualification the destination university wants.",
  },
  najran: {
    slug: "najran",
    name: "Najran",
    inPhrase: "across Najran",
    province: "Najran Province",
    regionCode: "SA-10",
    geo: { latitude: 17.4917, longitude: 44.1322 },
    note: "A southern city near the Yemeni border, geographically distant from every international-school cluster in the Kingdom. Distance is the whole problem here: the nearest specialist teacher for a Higher Level science is several hundred kilometres away.",
  },
  jazan: {
    slug: "jazan",
    name: "Jazan",
    inPhrase: "across Jazan",
    province: "Jazan Province",
    regionCode: "SA-09",
    geo: { latitude: 16.8892, longitude: 42.5611 },
    note: "A Red Sea province capital in the far south-west, with an economic city and a university driving recent growth. International-curriculum provision is minimal and the humid coastal climate makes the long summer break the practical window for catch-up work.",
  },
  "al-ahsa": {
    slug: "al-ahsa",
    name: "Al Ahsa",
    inPhrase: "across Al Ahsa",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 25.3833, longitude: 49.5833 },
    note: "The oasis governorate around Hofuf, one of the largest oases in the world and a UNESCO World Heritage site. It is an hour and a half inland from the Khobar-Dhahran school cluster, which puts a daily commute to an international school out of reach for most families.",
  },
  qatif: {
    slug: "qatif",
    name: "Qatif",
    inPhrase: "across Qatif",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 26.5196, longitude: 49.9962 },
    note: "A coastal governorate north of Dammam with a long agricultural history and a dense set of towns rather than one centre. Families here are close enough to the Dammam-Khobar schools to commute, but far enough that an after-school session has to start late.",
  },
  "ras-tanura": {
    slug: "ras-tanura",
    name: "Ras Tanura",
    inPhrase: "in Ras Tanura",
    province: "Eastern Province",
    regionCode: "SA-04",
    geo: { latitude: 26.7, longitude: 50.1667 },
    note: "An Aramco refinery town on the Gulf coast with its own residential camp and school. The community is small and self-contained, so a student's subject options are decided by a single school's staffing in a way that does not happen in Riyadh or Jeddah.",
  },
  alula: {
    slug: "alula",
    name: "AlUla",
    inPhrase: "in AlUla",
    province: "Madinah Province",
    regionCode: "SA-03",
    geo: { latitude: 26.6167, longitude: 37.9167 },
    note: "A heritage and tourism county in the north-west built around the Hegra archaeological site, developing fast under a dedicated royal commission. Its resident school-age population is small and its international-curriculum provision is newer than almost anywhere else in the Kingdom.",
  },
  neom: {
    slug: "neom",
    name: "NEOM",
    inPhrase: "in NEOM",
    province: "Tabuk Province",
    regionCode: "SA-07",
    geo: { latitude: 28.0, longitude: 35.3 },
    note: "The development region on the Gulf of Aqaba in the Kingdom's north-west corner. Its school community is new, international and growing from a standing start, which means almost no local depth of subject teaching and an unusually high share of families who have moved mid-course.",
  },
};

export const CITY_SLUGS = Object.keys(CITIES) as SaudiCitySlug[];

/** Slugs whose title-cased form is wrong. Everything else title-cases correctly. */
const NAME_OVERRIDES: Record<string, string> = {
  kafd: "KAFD",
  kfupm: "KFUPM",
  neom: "NEOM",
  alula: "AlUla",
  hail: "Ha'il",
  "thuwal-kaust": "Thuwal (KAUST)",
  "doha-dhahran": "Doha, Dhahran",
  "saudi-aramco-main-camp": "Saudi Aramco Main Camp",
  "diplomatic-quarter": "the Diplomatic Quarter",
  "al-khobar-corniche": "Al Khobar Corniche",
  "al-hizam-al-akhdar": "Al Hizam Al Akhdar",
  "north-obhur": "North Obhur",
  "ash-shulah": "Ash Shulah",
  "al-rakah": "Ar Rakah",
  irqah: "Irqah",
  hittin: "Hittin",
  dana: "Dana",
  obhur: "Obhur",
};

export function displayName(slug: string): string {
  const override = NAME_OVERRIDES[slug];
  if (override) return override;
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Districts named in the sitemap, per city. Generated from the sitemap itself - a district is a
 * second segment that also appears as the "-in-<district>" suffix of a sibling slug - and then
 * checked by hand. plan.ts reads this to tell an area hub from a city-keyword page.
 */
export const AREAS_BY_CITY: Record<SaudiCitySlug, string[]> = {
  riyadh: [
    "al-olaya", "al-malqa", "hittin", "al-nakheel", "al-yasmin", "al-narjis", "al-sahafa",
    "al-aqiq", "al-wurud", "al-muruj", "al-sulimaniyah", "diplomatic-quarter", "al-rabi",
    "al-ghadir", "al-mohammadiyah", "al-rawdah", "al-hamra", "al-qirawan", "al-arid", "al-nada",
    "al-falah", "irqah", "al-rahmaniyah", "al-izdihar", "kafd", "al-mursalat", "al-taawun",
    "al-wadi", "al-nuzha", "al-masif", "al-mughrizat", "al-mathar",
  ],
  jeddah: [
    "al-rawdah", "al-zahra", "al-shati", "al-hamra", "obhur", "north-obhur", "al-khalidiyah",
    "al-salamah", "al-naeem", "al-muhammadiyah", "al-basateen", "al-andalus", "al-rehab",
    "al-marwah", "al-safa", "al-faisaliyah", "al-nahda", "al-murjan", "al-baghdadiyah",
    "al-sharafeyah", "al-rawabi", "al-fayhaa", "al-nuzha", "al-mohammadiyah",
  ],
  "al-khobar": [
    "al-rakah", "al-ulaya", "al-thuqbah", "al-hizam-al-akhdar", "al-aqrabiyah", "al-yarmouk",
    "al-khobar-corniche", "al-bandariyah", "al-jisr", "al-hamra",
  ],
  dammam: [
    "al-shati", "al-faisaliyah", "al-mazruiyah", "al-nuzha", "al-jalawiyah", "al-badiyah",
    "al-muraikabat", "al-rayyan", "ash-shulah", "al-aziziyah",
  ],
  dhahran: ["saudi-aramco-main-camp", "kfupm", "doha-dhahran", "dana", "al-qusur"],
  jubail: [],
  makkah: [],
  madinah: [],
  taif: [],
  tabuk: [],
  abha: [],
  "khamis-mushait": [],
  yanbu: [],
  "thuwal-kaust": [],
  buraidah: [],
  hail: [],
  najran: [],
  jazan: [],
  "al-ahsa": [],
  qatif: [],
  "ras-tanura": [],
  alula: [],
  neom: [],
};

/**
 * An area slug alone is ambiguous - "al-rawdah", "al-hamra", "al-nuzha", "al-shati",
 * "al-faisaliyah" and "al-mohammadiyah" each name a district in more than one city. Lookups
 * therefore always go through the city, and this map is only a fallback for slugs that are
 * unique.
 */
export const CITY_BY_AREA: Record<string, SaudiCitySlug> = (() => {
  const counts = new Map<string, SaudiCitySlug[]>();
  for (const city of CITY_SLUGS) {
    for (const area of AREAS_BY_CITY[city]) {
      counts.set(area, [...(counts.get(area) ?? []), city]);
    }
  }
  return Object.fromEntries(
    [...counts].filter(([, cities]) => cities.length === 1).map(([area, cities]) => [area, cities[0]]),
  ) as Record<string, SaudiCitySlug>;
})();

/**
 * Corridors a parent would actually recognise as "near here". Used to give an area page
 * neighbours worth linking to, instead of a random slice of the city's district list.
 */
export const CORRIDORS: Record<string, { city: SaudiCitySlug; areas: string[] }> = {
  "North Riyadh": {
    city: "riyadh",
    areas: [
      "al-malqa", "hittin", "al-nakheel", "al-yasmin", "al-narjis", "al-sahafa", "al-aqiq",
      "kafd", "al-qirawan", "al-arid", "al-nada", "al-rabi", "al-ghadir", "al-rahmaniyah",
    ],
  },
  "Central Riyadh": {
    city: "riyadh",
    areas: [
      "al-olaya", "al-sulimaniyah", "al-wurud", "al-muruj", "al-mursalat", "al-izdihar",
      "al-masif", "al-mughrizat", "al-mathar", "al-nuzha", "al-taawun", "al-wadi",
      "al-mohammadiyah",
    ],
  },
  "West Riyadh": { city: "riyadh", areas: ["irqah", "diplomatic-quarter"] },
  "East Riyadh": { city: "riyadh", areas: ["al-rawdah", "al-hamra", "al-falah"] },
  "North Jeddah": {
    city: "jeddah",
    areas: [
      "obhur", "north-obhur", "al-shati", "al-murjan", "al-nahda", "al-rawabi", "al-marwah",
      "al-naeem", "al-salamah", "al-zahra", "al-khalidiyah", "al-muhammadiyah",
      "al-mohammadiyah", "al-rehab", "al-basateen",
    ],
  },
  "Central Jeddah": {
    city: "jeddah",
    areas: ["al-rawdah", "al-hamra", "al-andalus", "al-safa", "al-faisaliyah", "al-nuzha", "al-fayhaa"],
  },
  "Historic Jeddah and the port": { city: "jeddah", areas: ["al-baghdadiyah", "al-sharafeyah"] },
  "Khobar seafront": {
    city: "al-khobar",
    areas: ["al-khobar-corniche", "al-ulaya", "al-bandariyah", "al-hizam-al-akhdar"],
  },
  "Inland Khobar": {
    city: "al-khobar",
    areas: ["al-rakah", "al-thuqbah", "al-aqrabiyah", "al-yarmouk", "al-jisr", "al-hamra"],
  },
  "Dammam waterfront": {
    city: "dammam",
    areas: ["al-shati", "al-muraikabat", "al-jalawiyah", "al-badiyah"],
  },
  "Western Dammam": {
    city: "dammam",
    areas: ["al-faisaliyah", "al-mazruiyah", "al-nuzha", "al-rayyan", "ash-shulah", "al-aziziyah"],
  },
  "Aramco and KFUPM campuses": { city: "dhahran", areas: ["saudi-aramco-main-camp", "kfupm"] },
  "Dhahran residential": { city: "dhahran", areas: ["doha-dhahran", "dana", "al-qusur"] },
};

/** The corridor an area belongs to, plus its neighbours. Falls back to the whole city. */
export function clusterFor(areaSlug: string, citySlug?: SaudiCitySlug): { label: string; siblings: string[] } {
  for (const [label, { city, areas }] of Object.entries(CORRIDORS)) {
    if ((citySlug === undefined || city === citySlug) && areas.includes(areaSlug)) {
      return { label, siblings: areas.filter((a) => a !== areaSlug) };
    }
  }
  const city = citySlug ?? CITY_BY_AREA[areaSlug];
  if (!city) return { label: "Saudi Arabia", siblings: [] };
  return { label: CITIES[city].name, siblings: AREAS_BY_CITY[city].filter((a) => a !== areaSlug) };
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
  ["maths-aa-hl", "Mathematics: Analysis and Approaches HL"],
  ["maths-aa-sl", "Mathematics: Analysis and Approaches SL"],
  ["maths-ai-hl", "Mathematics: Applications and Interpretation HL"],
  ["maths-ai-sl", "Mathematics: Applications and Interpretation SL"],
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
  ["islamic-studies-0493", "Islamic Studies (0493)"],
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
  ["urdu-0539", "Urdu (0539)"],
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
  ["urdu-b", "Urdu B"],
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
  ["math", "Mathematics"],
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
  ["a-level", "A Level"],
  ["igcse", "IGCSE"],
  ["ib", "the IB"],
];

/** Four-digit Cambridge codes and Edexcel codes that appear in slugs. */
export const SYLLABUS_CODE = /\b(\d{4}|4[a-z]{2}\d)\b/;

/**
 * How the Saudi academic year is shaped, as it matters to a family's planning. Deliberately
 * written without years: a page that names a year is wrong twelve months later, and the gate
 * rejects any month-plus-year pair for exactly that reason.
 *
 * Public schools run the Ministry of Education calendar. International and private schools set
 * their own and most run three terms, so the only safe instruction on a page is to point a
 * family at their own school's published calendar.
 */
export const ACADEMIC_YEAR = {
  schoolWeek:
    "The Saudi school week runs Sunday to Thursday, with Friday and Saturday as the weekend. A UK- or India-based tutor working a Monday-to-Friday week is offering lessons on the two days a Saudi student does not need them and is unavailable on the two days they do.",
  termShape:
    "Ministry of Education public schools run a two-semester year starting in late August and ending in late June. Most international and British-curriculum schools in the Kingdom run three terms instead, so term dates differ school by school - always refer a family to their own school's published calendar rather than quoting one.",
  ramadan:
    "Ramadan moves roughly eleven days earlier each year against the Gregorian calendar, so it drifts across the academic year rather than sitting in one term. School days shorten during it and evening study patterns change completely. Never state a Ramadan date on a page: it is confirmed by moon sighting and differs by a day between countries.",
  ibMay:
    "The May examination session is the one almost every IB school in the Kingdom sits. Do not publish specific IB examination or results dates - none has been verified for this project; refer families to their school's Diploma Programme coordinator.",
  ibNovember:
    "A November session exists, used mainly by southern-hemisphere-aligned schools and retake candidates. It is rare in Saudi Arabia.",
  igcseJune:
    "Cambridge and Pearson Edexcel both run a June series, and this is the main series Saudi schools enter. Entry deadlines sit several months ahead of it and are set per centre.",
  igcseNovember:
    "Both boards run a November series, used for resits and for November-entry candidates.",
  cambridgeMarch:
    "Cambridge's February/March series is available in India only. Saudi candidates sit June and November. Never tell a Saudi family they can enter the March series.",
} as const;

/**
 * The route from an international qualification into a Saudi university. This is the single
 * biggest content gap in the Saudi tutoring SERP and the reason several of these pages exist.
 */
export const UNIVERSITY_PATHWAY = {
  equivalency:
    "A foreign or international school certificate needs an equivalency (mu'adalah) decision from the Ministry of Education before a Saudi university will treat it as equivalent to the Saudi secondary certificate. This applies to the IB Diploma, to A Levels and to an American high school diploma alike.",
  qudurat:
    "Qudurat, the General Aptitude Test, is run by the Education and Training Evaluation Commission through its National Center for Assessment (Qiyas). It tests verbal and quantitative reasoning rather than syllabus content, and it is sat in Arabic or English.",
  tahsili:
    "Tahsili, the Achievement Test, covers the science-stream subjects - mathematics, physics, chemistry, biology and English. Its content follows the Saudi national curriculum, which is why international-curriculum students frequently find it harder than their own examinations: the material overlaps but the framing does not.",
  weighting:
    "Saudi universities publish their own admission formulas combining secondary school grades with Qudurat and Tahsili. The weightings differ by university and by programme, and competitive engineering, medicine and science programmes lean hardest on Tahsili. Always send a family to the specific university's published admission criteria rather than quoting a formula.",
  caution:
    "Do not publish a numeric Qudurat or Tahsili cut-off. Published minimums differ by university, by programme and by year, and third-party sites disagree with each other. Describe the mechanism, not a threshold.",
} as const;
