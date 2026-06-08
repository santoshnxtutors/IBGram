export interface TutorFaq {
  question: string;
  answer: string;
}

export interface Tutor {
  id: number | string;
  slug?: string;
  name: string;
  subject: string;
  grade: string;
  rating: number;
  reviews: number;
  experience: string;
  bio: string;
  about?: string;
  rate: string;
  image: string;
  tags: string[];
  accent: string;
  education: string;
  successRate: string;
  availability: string;
  responseTime: string;
  methodology: string;
  curriculum: "IB" | "IGCSE" | "Both";
  faqs?: TutorFaq[];
}

export type TutorCurriculum = "IB" | "IGCSE";
export type TutorLocationPriority = "primary" | "secondary" | "online_only";

export interface TutorLocation {
  cityName: string;
  citySlug: string;
  stateName?: string;
  countryName?: string;
  areaName?: string;
  areaSlug?: string;
  sectorName?: string;
  sectorSlug?: string;
  societyName?: string;
  societySlug?: string;
  nearbySchoolName?: string;
  nearbySchoolSlug?: string;
  areas?: string[];
  areaSlugs?: string[];
  sectors?: string[];
  sectorSlugs?: string[];
  societies?: string[];
  societySlugs?: string[];
  nearbySchools?: string[];
  schoolSlugs?: string[];
  homeTutoringAvailable: boolean;
  onlineTutoringAvailable: boolean;
  hybridTutoringAvailable: boolean;
  serviceRadiusKm?: number;
  priority?: TutorLocationPriority;
  isActive?: boolean;
  notes?: string;
}

export interface Tutor {
  isActive: boolean;
  verified: boolean;
  approved: boolean;
  recentlyActive?: string;
  curriculums: TutorCurriculum[];
  ibProgrammes: Array<"PYP" | "MYP" | "DP">;
  igcseSubjects: string[];
  ibSubjects: string[];
  subjectLevels: string[];
  examBoards?: string[];
  primaryCity: string;
  primaryCitySlug: string;
  stateName: string;
  countryName: string;
  availableCities: string[];
  availableCitySlugs: string[];
  availableAreas: string[];
  availableAreaSlugs: string[];
  availableSectors: string[];
  availableSectorSlugs: string[];
  availableSocieties: string[];
  availableSocietySlugs: string[];
  nearbySchools: string[];
  nearbySchoolSlugs: string[];
  serviceRadiusKm?: number;
  homeTutoringAvailable: boolean;
  onlineTutoringAvailable: boolean;
  hybridTutoringAvailable: boolean;
  travelNotes: string;
  locationAvailabilityNotes: string;
  locations: TutorLocation[];
}

type TutorSeed = Omit<
  Tutor,
  | "isActive"
  | "verified"
  | "approved"
  | "recentlyActive"
  | "curriculums"
  | "ibProgrammes"
  | "igcseSubjects"
  | "ibSubjects"
  | "subjectLevels"
  | "examBoards"
  | "primaryCity"
  | "primaryCitySlug"
  | "stateName"
  | "countryName"
  | "availableCities"
  | "availableCitySlugs"
  | "availableAreas"
  | "availableAreaSlugs"
  | "availableSectors"
  | "availableSectorSlugs"
  | "availableSocieties"
  | "availableSocietySlugs"
  | "nearbySchools"
  | "nearbySchoolSlugs"
  | "serviceRadiusKm"
  | "homeTutoringAvailable"
  | "onlineTutoringAvailable"
  | "hybridTutoringAvailable"
  | "travelNotes"
  | "locationAvailabilityNotes"
  | "locations"
>;

type TutorEnrichment = Partial<
  Pick<
    Tutor,
    | "isActive"
    | "verified"
    | "approved"
    | "recentlyActive"
    | "curriculums"
    | "ibProgrammes"
    | "igcseSubjects"
    | "ibSubjects"
    | "subjectLevels"
    | "examBoards"
    | "travelNotes"
    | "locationAvailabilityNotes"
    | "serviceRadiusKm"
  >
> & {
  locations?: TutorLocation[];
};

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function buildLocation(input: {
  cityName: string;
  stateName: string;
  countryName?: string;
  areas?: string[];
  sectors?: string[];
  societies?: string[];
  nearbySchools?: string[];
  homeTutoringAvailable?: boolean;
  onlineTutoringAvailable?: boolean;
  hybridTutoringAvailable?: boolean;
  serviceRadiusKm?: number;
  priority?: TutorLocationPriority;
  notes?: string;
}): TutorLocation {
  const areaName = input.areas?.[0];
  const sectorName = input.sectors?.[0];
  const societyName = input.societies?.[0];
  const nearbySchoolName = input.nearbySchools?.[0];

  return {
    cityName: input.cityName,
    citySlug: slugify(input.cityName),
    stateName: input.stateName,
    countryName: input.countryName ?? "India",
    areaName,
    areaSlug: areaName ? slugify(areaName) : undefined,
    sectorName,
    sectorSlug: sectorName ? slugify(sectorName) : undefined,
    societyName,
    societySlug: societyName ? slugify(societyName) : undefined,
    nearbySchoolName,
    nearbySchoolSlug: nearbySchoolName ? slugify(nearbySchoolName) : undefined,
    areas: input.areas ?? [],
    areaSlugs: (input.areas ?? []).map(slugify),
    sectors: input.sectors ?? [],
    sectorSlugs: (input.sectors ?? []).map(slugify),
    societies: input.societies ?? [],
    societySlugs: (input.societies ?? []).map(slugify),
    nearbySchools: input.nearbySchools ?? [],
    schoolSlugs: (input.nearbySchools ?? []).map(slugify),
    homeTutoringAvailable: input.homeTutoringAvailable ?? true,
    onlineTutoringAvailable: input.onlineTutoringAvailable ?? true,
    hybridTutoringAvailable: input.hybridTutoringAvailable ?? true,
    serviceRadiusKm: input.serviceRadiusKm,
    priority: input.priority ?? "primary",
    isActive: true,
    notes: input.notes,
  };
}

const locationProfiles = {
  gurugramCore: buildLocation({
    cityName: "Gurugram",
    stateName: "Haryana",
    areas: ["Golf Course Road", "DLF Phase 5"],
    sectors: ["Sector 56", "Sector 57"],
    societies: ["Sushant Lok", "DLF Park Place"],
    nearbySchools: ["Lancers International School", "Scottish High International School", "Pathways World School"],
    serviceRadiusKm: 8,
    notes: "Home tutoring reviewed around Golf Course Road, DLF Phase 5, Sector 56, Sushant Lok and nearby Gurugram areas.",
  }),
  gurugramCity: buildLocation({
    cityName: "Gurugram",
    stateName: "Haryana",
    areas: ["Sushant Lok", "Sohna Road"],
    sectors: ["Sector 57", "Sector 50"],
    societies: ["Nirvana Country"],
    nearbySchools: ["Scottish High International School", "GD Goenka World School"],
    serviceRadiusKm: 10,
    notes: "City-level Gurugram availability with home tutoring reviewed by travel window and online backup available.",
  }),
  gurugramIgcse: buildLocation({
    cityName: "Gurugram",
    stateName: "Haryana",
    areas: ["Golf Course Road", "Sohna Road"],
    sectors: ["Sector 56", "Sector 49"],
    societies: ["Sushant Lok"],
    nearbySchools: ["Lancers International School", "Scottish High International School"],
    serviceRadiusKm: 9,
    notes: "IGCSE home and hybrid tutoring reviewed around central Gurugram, with online lessons available city-wide.",
  }),
  delhiOnline: buildLocation({
    cityName: "Delhi",
    stateName: "Delhi",
    areas: ["South Delhi", "Vasant Vihar"],
    nearbySchools: ["The British School New Delhi"],
    homeTutoringAvailable: false,
    onlineTutoringAvailable: true,
    hybridTutoringAvailable: false,
    serviceRadiusKm: 0,
    priority: "online_only",
    notes: "Online-only support outside Delhi unless a separate home tutoring route is confirmed.",
  }),
  noida: buildLocation({
    cityName: "Noida",
    stateName: "Uttar Pradesh",
    areas: ["Sector 44", "Expressway"],
    sectors: ["Sector 44", "Sector 128"],
    societies: ["Jaypee Greens Wish Town"],
    nearbySchools: ["Pathways School Noida"],
    serviceRadiusKm: 8,
    notes: "Home tutoring reviewed in central Noida and Expressway pockets, with online support available across NCR.",
  }),
  bangalore: buildLocation({
    cityName: "Bangalore",
    stateName: "Karnataka",
    areas: ["Whitefield", "Sarjapur Road"],
    societies: ["Prestige Lakeside Habitat"],
    nearbySchools: ["Indus International School Bangalore", "The International School Bangalore"],
    serviceRadiusKm: 12,
    notes: "Hybrid and online support for Bangalore school corridors, with home tutoring reviewed by commute feasibility.",
  }),
  pune: buildLocation({
    cityName: "Pune",
    stateName: "Maharashtra",
    areas: ["Kalyani Nagar", "Hinjewadi"],
    societies: ["Amanora Park Town"],
    nearbySchools: ["Mercedes-Benz International School"],
    serviceRadiusKm: 10,
    notes: "Home and hybrid support reviewed in Pune's international school corridors.",
  }),
  mumbaiOnline: buildLocation({
    cityName: "Mumbai",
    stateName: "Maharashtra",
    areas: ["Bandra", "Powai"],
    societies: ["Hiranandani Gardens"],
    nearbySchools: ["Oberoi International School"],
    homeTutoringAvailable: false,
    onlineTutoringAvailable: true,
    hybridTutoringAvailable: false,
    serviceRadiusKm: 0,
    priority: "online_only",
    notes: "Online subject-specialist support available outside local Mumbai travel routes.",
  }),
} satisfies Record<string, TutorLocation>;

const tutorEnrichmentById: Record<number, TutorEnrichment> = {
  1: {
    locations: [locationProfiles.gurugramCore],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Mathematics", "Math AA", "Math AI", "Math AA HL", "Math AI HL"],
    subjectLevels: ["HL", "SL", "Year 12", "Year 13"],
  },
  2: {
    locations: [locationProfiles.gurugramIgcse],
    curriculums: ["IGCSE"],
    igcseSubjects: ["Physics", "Mechanics", "Thermodynamics"],
    subjectLevels: ["Grade 9", "Grade 10", "Year 10", "Year 11"],
    examBoards: ["Cambridge IGCSE", "Pearson Edexcel International GCSE"],
  },
  3: {
    locations: [locationProfiles.delhiOnline],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Economics", "Business Management"],
    subjectLevels: ["HL", "SL"],
  },
  4: {
    locations: [locationProfiles.gurugramCity],
    curriculums: ["IB"],
    ibProgrammes: ["MYP"],
    ibSubjects: ["Mathematics", "MYP Mathematics"],
    subjectLevels: ["MYP", "Year 7", "Year 8", "Year 9"],
  },
  5: {
    locations: [locationProfiles.gurugramCore],
    curriculums: ["IB", "IGCSE"],
    ibProgrammes: ["MYP", "DP"],
    ibSubjects: ["English", "English A", "English Literature"],
    igcseSubjects: ["English", "English Literature", "English Language"],
    subjectLevels: ["HL", "SL", "Grade 9", "Grade 10"],
    examBoards: ["Cambridge IGCSE", "Pearson Edexcel International GCSE"],
  },
  6: {
    locations: [locationProfiles.delhiOnline],
    curriculums: ["IGCSE"],
    igcseSubjects: ["Physics", "Mechanics", "Thermodynamics"],
    subjectLevels: ["Grade 9", "Grade 10", "Year 10", "Year 11"],
    examBoards: ["Cambridge IGCSE"],
  },
  7: {
    locations: [locationProfiles.gurugramIgcse],
    curriculums: ["IGCSE"],
    igcseSubjects: ["Physics", "Mechanics", "Thermodynamics"],
    subjectLevels: ["Grade 9", "Grade 10", "Year 10", "Year 11"],
    examBoards: ["Cambridge IGCSE", "Pearson Edexcel International GCSE"],
  },
  8101: {
    locations: [locationProfiles.gurugramCore],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Mathematics", "Math AA", "Math AI", "Math AA HL", "Math AI HL"],
    subjectLevels: ["HL", "SL"],
  },
  8102: {
    locations: [locationProfiles.gurugramCity],
    curriculums: ["IB"],
    ibProgrammes: ["MYP", "DP"],
    ibSubjects: ["Mathematics", "Math AA", "MYP Mathematics"],
    subjectLevels: ["MYP", "HL", "SL"],
  },
  8103: {
    locations: [locationProfiles.bangalore],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Mathematics", "Math AI", "Math AI HL"],
    subjectLevels: ["HL", "SL"],
  },
  8201: {
    locations: [locationProfiles.gurugramCity],
    curriculums: ["IB", "IGCSE"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Physics"],
    igcseSubjects: ["Physics"],
    subjectLevels: ["HL", "SL", "Grade 9", "Grade 10"],
    examBoards: ["Cambridge IGCSE", "Pearson Edexcel International GCSE"],
  },
  8202: {
    locations: [locationProfiles.noida],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Chemistry"],
    subjectLevels: ["HL", "SL"],
  },
  8203: {
    locations: [locationProfiles.pune],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Biology"],
    subjectLevels: ["HL", "SL"],
  },
  8301: {
    locations: [locationProfiles.delhiOnline],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Economics"],
    subjectLevels: ["HL", "SL"],
  },
  8302: {
    locations: [locationProfiles.gurugramCore],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["Business Management", "Economics"],
    subjectLevels: ["HL", "SL"],
  },
  8303: {
    locations: [locationProfiles.mumbaiOnline],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["History"],
    subjectLevels: ["HL", "SL"],
  },
  8401: {
    locations: [locationProfiles.gurugramCore],
    curriculums: ["IB", "IGCSE"],
    ibProgrammes: ["DP"],
    ibSubjects: ["English", "English A", "English Literature"],
    igcseSubjects: ["English", "English Literature", "English Language"],
    subjectLevels: ["HL", "SL", "Grade 9", "Grade 10"],
    examBoards: ["Cambridge IGCSE", "Pearson Edexcel International GCSE"],
  },
  8402: {
    locations: [locationProfiles.noida],
    curriculums: ["IB", "IGCSE"],
    ibProgrammes: ["MYP", "DP"],
    ibSubjects: ["English", "English A", "English Language"],
    igcseSubjects: ["English", "English Language"],
    subjectLevels: ["MYP", "SL", "Grade 9", "Grade 10"],
    examBoards: ["Cambridge IGCSE"],
  },
  8403: {
    locations: [locationProfiles.bangalore],
    curriculums: ["IB"],
    ibProgrammes: ["DP"],
    ibSubjects: ["English", "English A", "English Literature"],
    subjectLevels: ["HL", "SL"],
  },
  8501: {
    locations: [locationProfiles.gurugramCity],
    curriculums: ["IB"],
    ibProgrammes: ["MYP", "DP"],
    ibSubjects: ["Spanish", "Language B"],
    subjectLevels: ["HL", "SL"],
  },
  8502: {
    locations: [locationProfiles.pune],
    curriculums: ["IB"],
    ibProgrammes: ["MYP", "DP"],
    ibSubjects: ["French", "Language B"],
    subjectLevels: ["HL", "SL"],
  },
  8503: {
    locations: [locationProfiles.mumbaiOnline],
    curriculums: ["IB"],
    ibProgrammes: ["MYP", "DP"],
    ibSubjects: ["Arabic", "Language A", "Language B"],
    subjectLevels: ["HL", "SL"],
  },
};

function unique(values: Array<string | undefined>): string[] {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value))));
}

function deriveCurriculums(seed: TutorSeed, enrichment: TutorEnrichment): TutorCurriculum[] {
  if (enrichment.curriculums?.length) return enrichment.curriculums;
  if (seed.curriculum === "Both") return ["IB", "IGCSE"];
  return [seed.curriculum];
}

function deriveProgrammes(seed: TutorSeed, enrichment: TutorEnrichment): Array<"PYP" | "MYP" | "DP"> {
  if (enrichment.ibProgrammes?.length) return enrichment.ibProgrammes;
  const grade = seed.grade.toLowerCase();
  if (grade.includes("pyp") || grade.includes("year 1") || grade.includes("year 2") || grade.includes("year 3")) return ["PYP"];
  if (grade.includes("myp") || grade.includes("year 7") || grade.includes("year 8") || grade.includes("year 9")) return ["MYP"];
  return ["DP"];
}

function deriveSubjects(seed: TutorSeed, curriculum: TutorCurriculum, enrichment: TutorEnrichment): string[] {
  const explicit = curriculum === "IB" ? enrichment.ibSubjects : enrichment.igcseSubjects;
  if (explicit?.length) return explicit;
  return [seed.subject];
}

function deriveDefaultLocation(seed: TutorSeed): TutorLocation {
  if (seed.curriculum === "IGCSE") return locationProfiles.gurugramIgcse;
  if (seed.subject.toLowerCase().includes("math")) return locationProfiles.gurugramCore;
  return locationProfiles.gurugramCity;
}

function seedSlug(seed: TutorSeed): string {
  return `${seed.name}-${seed.id}`
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function createTutor(seed: TutorSeed): Tutor {
  const enrichment = (typeof seed.id === "number" ? tutorEnrichmentById[seed.id] : undefined) ?? {};
  const locations: TutorLocation[] = enrichment.locations?.length ? enrichment.locations : [deriveDefaultLocation(seed)];
  const activeLocations = locations.filter((location) => location.isActive !== false);
  const primaryLocation = activeLocations.find((location) => location.priority === "primary") ?? activeLocations[0] ?? locations[0];
  const curriculums = deriveCurriculums(seed, enrichment);
  const ibSubjects = curriculums.includes("IB") ? deriveSubjects(seed, "IB", enrichment) : [];
  const igcseSubjects = curriculums.includes("IGCSE") ? deriveSubjects(seed, "IGCSE", enrichment) : [];
  const homeTutoringAvailable = activeLocations.some((location) => location.homeTutoringAvailable);
  const onlineTutoringAvailable = activeLocations.some((location) => location.onlineTutoringAvailable);
  const hybridTutoringAvailable = activeLocations.some((location) => location.hybridTutoringAvailable);
  const availableAreas = unique(activeLocations.flatMap((location) => location.areas ?? []));
  const availableSectors = unique(activeLocations.flatMap((location) => location.sectors ?? []));
  const availableSocieties = unique(activeLocations.flatMap((location) => location.societies ?? []));
  const nearbySchools = unique(activeLocations.flatMap((location) => location.nearbySchools ?? []));
  const serviceRadiusKm = enrichment.serviceRadiusKm ?? primaryLocation.serviceRadiusKm;

  return {
    ...seed,
    slug: seedSlug(seed),
    isActive: enrichment.isActive ?? true,
    verified: enrichment.verified ?? true,
    approved: enrichment.approved ?? true,
    recentlyActive: enrichment.recentlyActive ?? "2026-05-06",
    curriculums,
    ibProgrammes: deriveProgrammes(seed, enrichment),
    ibSubjects,
    igcseSubjects,
    subjectLevels: enrichment.subjectLevels ?? [seed.grade],
    examBoards: enrichment.examBoards,
    primaryCity: primaryLocation.cityName,
    primaryCitySlug: primaryLocation.citySlug,
    stateName: primaryLocation.stateName ?? "",
    countryName: primaryLocation.countryName ?? "India",
    availableCities: unique(activeLocations.map((location) => location.cityName)),
    availableCitySlugs: unique(activeLocations.map((location) => location.citySlug)),
    availableAreas,
    availableAreaSlugs: availableAreas.map(slugify),
    availableSectors,
    availableSectorSlugs: availableSectors.map(slugify),
    availableSocieties,
    availableSocietySlugs: availableSocieties.map(slugify),
    nearbySchools,
    nearbySchoolSlugs: nearbySchools.map(slugify),
    serviceRadiusKm,
    homeTutoringAvailable,
    onlineTutoringAvailable,
    hybridTutoringAvailable,
    travelNotes:
      enrichment.travelNotes ??
      (homeTutoringAvailable
        ? `Home tutoring is reviewed within ${serviceRadiusKm ?? "selected"} km of ${primaryLocation.cityName}, subject to timing and route feasibility.`
        : "Home tutoring is not currently listed for this tutor outside confirmed local routes."),
    locationAvailabilityNotes:
      enrichment.locationAvailabilityNotes ??
      `Available in ${primaryLocation.cityName}${availableAreas.length ? `: ${availableAreas.slice(0, 4).join(", ")}` : ""}${
        availableSectors.length ? `, ${availableSectors.slice(0, 3).join(", ")}` : ""
      } and nearby areas. Availability depends on subject, schedule, location and tutor confirmation.`,
    locations,
  };
}

const tutorSeeds: TutorSeed[] = [
  {
    id: 1,
    name: "Dr. Sarah M.",
    subject: "Mathematics",
    grade: "Year 12-13 (IB DP)",
    rating: 5.0,
    reviews: 142,
    experience: "8 Yrs",
    bio: "Oxford alumni with a PhD in Mathematics. Specialized in IB Math HL and SAT preparation with over 8 years of global tutoring experience. Known for breaking down complex calculus concepts into intuitive visual models.",
    rate: "$85/hr",
    image: "/tutor_sarah_avatar_1775559612425.png",
    tags: ["Examiner", "Oxford Alumni", "PhD holder"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "PhD in Mathematics, University of Oxford",
    successRate: "99%",
    availability: "Limited (4 slots left)",
    responseTime: "< 5 mins",
    methodology: "Rigorous exam-centric preparation combined with intuitive concept visualization.",
    curriculum: "IB",
  },
  {
    id: 2,
    name: "James R.",
    subject: "Physics",
    grade: "Year 10-11 (IGCSE)",
    rating: 4.9,
    reviews: 89,
    experience: "5 Yrs",
    bio: "Former lead physics teacher at a top international school. James focuses on kinesthetic learning and interactive simulations. Expert in IGCSE/A-Level mechanics and thermodynamics.",
    rate: "$65/hr",
    image: "/tutor_james_avatar_1775559651647.png",
    tags: ["Interactive", "Fast Replies", "Lead Teacher"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.Sc. in Physics, Imperial College London",
    successRate: "96%",
    availability: "Flexible (10+ slots)",
    responseTime: "< 15 mins",
    methodology: "Kinesthetic learning and interactive simulations for deep conceptual understanding.",
    curriculum: "IGCSE",
  },
  {
    id: 3,
    name: "Elena K.",
    subject: "Economics",
    grade: "Year 12-13 (IB DP)",
    rating: 5.0,
    reviews: 210,
    experience: "12 Yrs",
    bio: "LSE Graduate with extensive experience in international trade and macroeconomics. Elena has helped hundreds of students achieve a 7 in IB Economics through structured essay planning and case study analysis.",
    rate: "$95/hr",
    image: "/tutor_elena_avatar_1775559725738.png",
    tags: ["High Success Rate", "LSE Alumni", "Essay Expert"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in Economics, London School of Economics",
    successRate: "98%",
    availability: "Very Limited (2 slots)",
    responseTime: "< 2 mins",
    methodology: "Structured essay planning and real-world case study analysis to master IB criteria.",
    curriculum: "IB",
  },
  {
    id: 4,
    name: "Daniel K.",
    subject: "Mathematics",
    grade: "Year 7-9 (MYP)",
    rating: 4.8,
    reviews: 56,
    experience: "4 Yrs",
    bio: "Math expert who makes numbers fun. Daniel uses gamified learning techniques to help middle-school students master foundations and prepare for IGCSE/MYP exams.",
    rate: "$55/hr",
    image: "/tutor_sarah_avatar_1775559612425.png",
    tags: ["Math Expert", "MYP Specialist"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "B.Sc. in Math Education, NYU",
    successRate: "94%",
    availability: "Moderate (6 slots)",
    responseTime: "< 30 mins",
    methodology: "Gamified learning techniques to make foundational math foundations engaging and accessible.",
    curriculum: "IB",
  },
  {
    id: 5,
    name: "Sophia L.",
    subject: "English Literature",
    grade: "Year 12-13 (IB DP)",
    rating: 4.9,
    reviews: 124,
    experience: "10 Yrs",
    bio: "Expert in IB English A Literature and Language. Sophia focuses on critical thinking and essay structure, ensuring students can articulate complex themes with clarity.",
    rate: "$75/hr",
    image: "/tutor_elena_avatar_1775559725738.png",
    tags: ["IB Specialist", "Essay Coach"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.A. in English Literature, University of Cambridge",
    successRate: "97%",
    availability: "Moderate (5 slots)",
    responseTime: "< 10 mins",
    methodology: "Critical thinking and textual analysis focused on articulation and essay structuring.",
    curriculum: "IB",
  },
  {
    id: 6,
    name: "Aditya S.",
    subject: "Physics",
    grade: "Year 10-11 (IGCSE)",
    rating: 4.9,
    reviews: 89,
    experience: "5 Yrs",
    bio: "Former lead physics teacher at a top international school. Aditya focuses on kinesthetic learning and interactive simulations. Expert in IGCSE/A-Level mechanics and thermodynamics.",
    rate: "$65/hr",
    image: "",
    tags: ["Interactive", "Fast Replies", "Lead Teacher"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.Sc. in Physics, Imperial College London",
    successRate: "96%",
    availability: "Flexible (10+ slots)",
    responseTime: "< 15 mins",
    methodology: "Kinesthetic learning and interactive simulations for deep conceptual understanding.",
    curriculum: "IGCSE",
  },
  {
    id: 7,
    name: "Ram K.",
    subject: "Physics",
    grade: "Year 10-11 (IGCSE)",
    rating: 4.9,
    reviews: 89,
    experience: "5 Yrs",
    bio: "Former lead physics teacher at a top international school. Ram focuses on kinesthetic learning and interactive simulations. Expert in IGCSE/A-Level mechanics and thermodynamics.",
    rate: "$65/hr",
    image: "",
    tags: ["Interactive", "Fast Replies", "Lead Teacher"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.Sc. in Physics, Imperial College London",
    successRate: "96%",
    availability: "Flexible (10+ slots)",
    responseTime: "< 15 mins",
    methodology: "Kinesthetic learning and interactive simulations for deep conceptual understanding.",
    curriculum: "IGCSE",
  },
  {
    id: 8101,
    name: "Dr. Sarah M.",
    subject: "Mathematics",
    grade: "IB DP AA/AI",
    rating: 5.0,
    reviews: 142,
    experience: "8 Yrs",
    bio: "Oxford alumni with a PhD in Mathematics. Specialized in IB Math AA HL and AI HL with deep experience in calculus, statistics, and exam strategy.",
    rate: "$85/hr",
    image: "/tutor_sarah_avatar_1775559612425.png",
    tags: ["Examiner", "Oxford Alumni", "PhD Holder"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "PhD in Mathematics, University of Oxford",
    successRate: "99%",
    availability: "Limited (4 slots left)",
    responseTime: "< 5 mins",
    methodology: "Rigorous exam-centric preparation combined with intuitive concept visualization for AA and AI pathways.",
    curriculum: "IB",
  },
  {
    id: 8102,
    name: "Aarav K.",
    subject: "Mathematics",
    grade: "IB MYP / DP",
    rating: 4.9,
    reviews: 96,
    experience: "6 Yrs",
    bio: "Known for clear concept breakdowns across algebra, functions, and probability. Aarav helps students bridge MYP foundations into advanced DP-level performance.",
    rate: "$68/hr",
    image: "",
    tags: ["Concept Clarity", "AA Specialist", "Fast Replies"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "B.Sc. in Applied Mathematics, University of Warwick",
    successRate: "95%",
    availability: "Moderate (6 slots)",
    responseTime: "< 20 mins",
    methodology: "Stepwise concept-building with targeted review cycles and exam-style reinforcement.",
    curriculum: "IB",
  },
  {
    id: 8103,
    name: "Maya R.",
    subject: "Mathematics",
    grade: "IB DP AI",
    rating: 4.9,
    reviews: 88,
    experience: "5 Yrs",
    bio: "Focused on AI pathways, internal assessment planning, and question pattern recognition. Maya keeps sessions structured and highly exam-relevant.",
    rate: "$64/hr",
    image: "",
    tags: ["IA Support", "AI Focused", "Interactive"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.Sc. in Statistics, University of Manchester",
    successRate: "94%",
    availability: "Flexible (8 slots)",
    responseTime: "< 25 mins",
    methodology: "Application-first teaching with data interpretation practice and IA coaching.",
    curriculum: "IB",
  },
  {
    id: 8201,
    name: "James R.",
    subject: "Physics",
    grade: "IB DP Physics",
    rating: 4.9,
    reviews: 89,
    experience: "5 Yrs",
    bio: "Former lead physics teacher specializing in mechanics, electricity, and data analysis. Strong fit for IB students who need structure and confidence under timed conditions.",
    rate: "$65/hr",
    image: "/tutor_james_avatar_1775559651647.png",
    tags: ["Interactive", "Fast Replies", "Lead Teacher"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.Sc. in Physics, Imperial College London",
    successRate: "96%",
    availability: "Flexible (10+ slots)",
    responseTime: "< 15 mins",
    methodology: "Kinesthetic learning and interactive simulations for strong conceptual retention.",
    curriculum: "IB",
  },
  {
    id: 8202,
    name: "Nikita S.",
    subject: "Chemistry",
    grade: "IB DP Chemistry",
    rating: 4.9,
    reviews: 104,
    experience: "7 Yrs",
    bio: "Nikita simplifies organic chemistry, stoichiometry, and data-based questions with a very systematic approach tailored for IB marking criteria.",
    rate: "$72/hr",
    image: "",
    tags: ["HL Support", "Practical Skills", "Exam Focused"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.Sc. in Chemistry, University of Bristol",
    successRate: "97%",
    availability: "Moderate (5 slots)",
    responseTime: "< 18 mins",
    methodology: "Structured problem decomposition paired with criterion-driven lab and paper practice.",
    curriculum: "IB",
  },
  {
    id: 8203,
    name: "Rohan P.",
    subject: "Biology",
    grade: "IB DP Biology",
    rating: 4.8,
    reviews: 78,
    experience: "5 Yrs",
    bio: "Helps students master application-style biology questions, command terms, and structured extended responses across core and HL topics.",
    rate: "$63/hr",
    image: "",
    tags: ["Data Analysis", "HL Biology", "Patient"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.Sc. in Molecular Biology, University of Edinburgh",
    successRate: "95%",
    availability: "Flexible (7 slots)",
    responseTime: "< 22 mins",
    methodology: "Concept mapping, command-term drilling, and markscheme-led answer training.",
    curriculum: "IB",
  },
  {
    id: 8301,
    name: "Elena K.",
    subject: "Economics",
    grade: "IB DP Economics",
    rating: 5.0,
    reviews: 210,
    experience: "12 Yrs",
    bio: "LSE graduate with deep experience in macroeconomics, essay planning, and case-study interpretation. Elena is especially strong with 15-mark and 10-mark structure.",
    rate: "$95/hr",
    image: "/tutor_elena_avatar_1775559725738.png",
    tags: ["High Success Rate", "LSE Alumni", "Essay Expert"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in Economics, London School of Economics",
    successRate: "98%",
    availability: "Very Limited (2 slots)",
    responseTime: "< 2 mins",
    methodology: "Structured essay planning and real-world case study analysis to master IB criteria.",
    curriculum: "IB",
  },
  {
    id: 8302,
    name: "Kabir N.",
    subject: "Business Management",
    grade: "IB DP Business",
    rating: 4.9,
    reviews: 91,
    experience: "6 Yrs",
    bio: "Kabir focuses on structure, case analysis, and application-heavy responses for Business Management students preparing for both internal and external assessment.",
    rate: "$69/hr",
    image: "",
    tags: ["Case Analysis", "IA Support", "Exam Focused"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "MBA, University of Bath",
    successRate: "95%",
    availability: "Moderate (6 slots)",
    responseTime: "< 20 mins",
    methodology: "Case-based teaching with criterion-focused writing and decision-making drills.",
    curriculum: "IB",
  },
  {
    id: 8303,
    name: "Hana T.",
    subject: "History",
    grade: "IB DP History",
    rating: 4.8,
    reviews: 73,
    experience: "5 Yrs",
    bio: "Hana helps with source work, essay framing, and evidence recall across modern history units with a calm, highly structured lesson style.",
    rate: "$62/hr",
    image: "",
    tags: ["Essay Coach", "Source Work", "Structured"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in Modern History, King's College London",
    successRate: "94%",
    availability: "Flexible (7 slots)",
    responseTime: "< 25 mins",
    methodology: "Source evaluation drills, essay planning frameworks, and recall systems for paper confidence.",
    curriculum: "IB",
  },
  {
    id: 8401,
    name: "Sophia L.",
    subject: "English Literature",
    grade: "IB DP English A",
    rating: 4.9,
    reviews: 124,
    experience: "10 Yrs",
    bio: "Expert in IB English A Literature and Language. Sophia focuses on critical thinking, literary analysis, and strong essay structure for higher scoring responses.",
    rate: "$75/hr",
    image: "/tutor_elena_avatar_1775559725738.png",
    tags: ["IB Specialist", "Essay Coach", "Close Reading"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.A. in English Literature, University of Cambridge",
    successRate: "97%",
    availability: "Moderate (5 slots)",
    responseTime: "< 10 mins",
    methodology: "Critical thinking and textual analysis focused on articulation and essay structuring.",
    curriculum: "IB",
  },
  {
    id: 8402,
    name: "Ritika P.",
    subject: "English Language",
    grade: "IB MYP / DP",
    rating: 4.8,
    reviews: 82,
    experience: "6 Yrs",
    bio: "Ritika supports commentary writing, thesis building, and timed analysis practice with a clear focus on language precision and interpretation.",
    rate: "$61/hr",
    image: "",
    tags: ["Language Analysis", "Clear Feedback", "Exam Ready"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in English Studies, University of Leeds",
    successRate: "95%",
    availability: "Flexible (8 slots)",
    responseTime: "< 20 mins",
    methodology: "Sentence-level feedback, commentary structure, and timed response refinement.",
    curriculum: "IB",
  },
  {
    id: 8403,
    name: "Oliver D.",
    subject: "English Literature",
    grade: "IB DP English HL",
    rating: 4.9,
    reviews: 77,
    experience: "5 Yrs",
    bio: "Oliver specializes in Paper 1 and Paper 2 preparation, helping students turn ideas into precise, criterion-aware essays with strong textual support.",
    rate: "$66/hr",
    image: "",
    tags: ["Paper 1", "Paper 2", "Textual Analysis"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.A. in Comparative Literature, Durham University",
    successRate: "95%",
    availability: "Moderate (6 slots)",
    responseTime: "< 18 mins",
    methodology: "Paper-specific practice with close reading, annotation, and argument development.",
    curriculum: "IB",
  },
  {
    id: 8501,
    name: "Lucia M.",
    subject: "Spanish",
    grade: "IB Language B",
    rating: 4.9,
    reviews: 86,
    experience: "6 Yrs",
    bio: "Lucia builds fluency, writing control, and oral confidence for IB Spanish students with a strong focus on practical exam application.",
    rate: "$64/hr",
    image: "",
    tags: ["Oral Prep", "Writing Skills", "Interactive"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in Hispanic Studies, University of Barcelona",
    successRate: "95%",
    availability: "Flexible (8 slots)",
    responseTime: "< 18 mins",
    methodology: "Speaking drills, guided writing, and comprehension routines tailored for IB performance.",
    curriculum: "IB",
  },
  {
    id: 8502,
    name: "Amelie R.",
    subject: "French",
    grade: "IB Language B",
    rating: 4.8,
    reviews: 71,
    experience: "5 Yrs",
    bio: "Amelie helps students improve written accuracy, comprehension, and speaking performance with highly practical exam-style routines.",
    rate: "$60/hr",
    image: "",
    tags: ["Speaking Focus", "Grammar Support", "Patient"],
    accent: "bg-secondary/10 text-secondary border-secondary/20",
    education: "M.A. in French Language Teaching, Sorbonne University",
    successRate: "94%",
    availability: "Moderate (7 slots)",
    responseTime: "< 22 mins",
    methodology: "Grammar correction, oral rehearsal, and comprehension pattern training for balanced fluency.",
    curriculum: "IB",
  },
  {
    id: 8503,
    name: "Layla H.",
    subject: "Arabic",
    grade: "IB Language A/B",
    rating: 4.9,
    reviews: 67,
    experience: "5 Yrs",
    bio: "Layla focuses on expression, grammar accuracy, and reading interpretation with a balanced approach to both classroom and exam performance.",
    rate: "$62/hr",
    image: "",
    tags: ["Expression", "Reading Skills", "Fast Replies"],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: "M.A. in Arabic Studies, SOAS University of London",
    successRate: "94%",
    availability: "Flexible (7 slots)",
    responseTime: "< 20 mins",
    methodology: "Balanced reading, writing, and expression routines with exam-focused reinforcement.",
    curriculum: "IB",
  }
];

export const allTutors: Tutor[] = tutorSeeds.map(createTutor);
