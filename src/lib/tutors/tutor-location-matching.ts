import { allTutors, type Tutor, type TutorCurriculum } from "@/lib/tutor-data";

export type TutorPageType = "city" | "area" | "sector" | "society" | "school" | "subject" | "programme";
export type TutorMode = "home" | "online" | "hybrid";
export type TutorMatchBand = "exactLocal" | "city" | "onlineFallback";

export interface TutorPageContext {
  curriculum: TutorCurriculum;
  pageType: TutorPageType;
  citySlug: string;
  areaSlug?: string;
  sectorSlug?: string;
  societySlug?: string;
  schoolSlug?: string;
  subjectSlug?: string;
  programmeSlug?: string;
  tutoringMode?: TutorMode;
}

export interface TutorMatchingOptions {
  curriculum?: TutorCurriculum;
  subjectSlug?: string;
  programmeSlug?: string;
  tutoringMode?: TutorMode;
  includeOnlineFallback?: boolean;
  allowCityFallbackForLocal?: boolean;
  tutors?: Tutor[];
  limit?: number;
}

export interface TutorMatchSummary {
  exactLocalMatches: number;
  cityMatches: number;
  onlineFallbackMatches: number;
  totalMatches: number;
}

export interface TutorMatchResult {
  tutors: Tutor[];
  matchSummary: TutorMatchSummary;
}

type ScoredTutor = {
  tutor: Tutor;
  score: number;
  band: TutorMatchBand;
};

const LOCAL_PAGE_TYPES = new Set<TutorPageType>(["area", "sector", "society", "school"]);

export function getTutorsForCity(citySlug: string, options: TutorMatchingOptions = {}): TutorMatchResult {
  return getTutorsForGeneratedPage(
    {
      curriculum: options.curriculum ?? "IB",
      pageType: "city",
      citySlug,
      subjectSlug: options.subjectSlug,
      programmeSlug: options.programmeSlug,
      tutoringMode: options.tutoringMode,
    },
    options,
  );
}

export function getTutorsForArea(citySlug: string, areaSlug: string, options: TutorMatchingOptions = {}): TutorMatchResult {
  return getTutorsForGeneratedPage(
    {
      curriculum: options.curriculum ?? "IB",
      pageType: "area",
      citySlug,
      areaSlug,
      subjectSlug: options.subjectSlug,
      programmeSlug: options.programmeSlug,
      tutoringMode: options.tutoringMode,
    },
    options,
  );
}

export function getTutorsForSector(citySlug: string, sectorSlug: string, options: TutorMatchingOptions = {}): TutorMatchResult {
  return getTutorsForGeneratedPage(
    {
      curriculum: options.curriculum ?? "IB",
      pageType: "sector",
      citySlug,
      sectorSlug,
      subjectSlug: options.subjectSlug,
      programmeSlug: options.programmeSlug,
      tutoringMode: options.tutoringMode,
    },
    options,
  );
}

export function getTutorsForSociety(citySlug: string, societySlug: string, options: TutorMatchingOptions = {}): TutorMatchResult {
  return getTutorsForGeneratedPage(
    {
      curriculum: options.curriculum ?? "IB",
      pageType: "society",
      citySlug,
      societySlug,
      subjectSlug: options.subjectSlug,
      programmeSlug: options.programmeSlug,
      tutoringMode: options.tutoringMode,
    },
    options,
  );
}

export function getTutorsForSchool(citySlug: string, schoolSlug: string, options: TutorMatchingOptions = {}): TutorMatchResult {
  return getTutorsForGeneratedPage(
    {
      curriculum: options.curriculum ?? "IB",
      pageType: "school",
      citySlug,
      schoolSlug,
      subjectSlug: options.subjectSlug,
      programmeSlug: options.programmeSlug,
      tutoringMode: options.tutoringMode,
    },
    options,
  );
}

export function getTutorsForGeneratedPage(pageContext: TutorPageContext, options: TutorMatchingOptions = {}): TutorMatchResult {
  const context: TutorPageContext = {
    ...pageContext,
    citySlug: normalizeSlug(pageContext.citySlug),
    areaSlug: normalizeOptionalSlug(pageContext.areaSlug),
    sectorSlug: normalizeOptionalSlug(pageContext.sectorSlug),
    societySlug: normalizeOptionalSlug(pageContext.societySlug),
    schoolSlug: normalizeOptionalSlug(pageContext.schoolSlug),
    subjectSlug: normalizeOptionalSlug(options.subjectSlug ?? pageContext.subjectSlug),
    programmeSlug: normalizeOptionalSlug(options.programmeSlug ?? pageContext.programmeSlug),
    tutoringMode: options.tutoringMode ?? pageContext.tutoringMode,
    curriculum: options.curriculum ?? pageContext.curriculum,
  };
  const scored = (options.tutors ?? allTutors)
    .map((tutor) => scoreTutor(tutor, context, options))
    .filter((match): match is ScoredTutor => Boolean(match))
    .sort((a, b) => b.score - a.score || b.tutor.rating - a.tutor.rating || b.tutor.reviews - a.tutor.reviews);

  const tutors = scored.slice(0, options.limit ?? scored.length).map((match) => match.tutor);
  const visibleIds = new Set(tutors.map((tutor) => tutor.id));
  const visibleScored = scored.filter((match) => visibleIds.has(match.tutor.id));

  return {
    tutors,
    matchSummary: {
      exactLocalMatches: visibleScored.filter((match) => match.band === "exactLocal").length,
      cityMatches: visibleScored.filter((match) => match.band === "city").length,
      onlineFallbackMatches: visibleScored.filter((match) => match.band === "onlineFallback").length,
      totalMatches: tutors.length,
    },
  };
}

export function getTutorLocationBadges(tutor: Tutor, context: Partial<TutorPageContext> = {}): string[] {
  const badges = [
    tutor.primaryCity,
    findLocalBadge(tutor, context),
    tutor.homeTutoringAvailable ? "Home tutoring" : undefined,
    tutor.onlineTutoringAvailable ? "Online" : undefined,
    tutor.hybridTutoringAvailable ? "Hybrid" : undefined,
    ...tutor.curriculums,
  ];

  return unique(badges).slice(0, 6);
}

export function getTutorServiceLocationDisplay(tutor: Tutor): {
  primaryCity: string;
  areas: string;
  sectors: string;
  societies: string;
  nearbySchools: string;
  modes: string[];
  summary: string;
} {
  const modes = [
    tutor.homeTutoringAvailable ? "Home tutoring" : undefined,
    tutor.onlineTutoringAvailable ? "Online tutoring" : undefined,
    tutor.hybridTutoringAvailable ? "Hybrid tutoring" : undefined,
  ].filter((mode): mode is string => Boolean(mode));

  return {
    primaryCity: `${tutor.primaryCity}${tutor.stateName ? `, ${tutor.stateName}` : ""}`,
    areas: formatList(tutor.availableAreas),
    sectors: formatList(tutor.availableSectors),
    societies: formatList(tutor.availableSocieties),
    nearbySchools: formatList(tutor.nearbySchools),
    modes,
    summary: tutor.locationAvailabilityNotes,
  };
}

export function buildTutorAvailabilityIntro(input: {
  curriculum: TutorCurriculum;
  cityName: string;
  placeName?: string;
  pageType?: TutorPageType;
  areas?: string[];
  matchSummary: TutorMatchSummary;
}): string {
  const curriculumLabel = input.curriculum === "IB" ? "IB" : "IGCSE";
  const safeNote = "Availability depends on subject, schedule, location and tutor confirmation.";

  if (input.placeName) {
    return `Showing tutors available near ${input.placeName}, ${input.cityName}. If an exact home-tutor match is not available for your timing, IB Gram can also review online or hybrid ${curriculumLabel} tutors for the same subject. ${safeNote}`;
  }

  const areaText = input.areas?.length ? `, including home tutoring around ${formatList(input.areas.slice(0, 4))} and nearby areas` : "";
  return `Showing ${curriculumLabel} tutors available in ${input.cityName}${areaText}. ${safeNote}`;
}

function scoreTutor(tutor: Tutor, context: TutorPageContext, options: TutorMatchingOptions): ScoredTutor | undefined {
  if (!tutor.isActive || !tutor.approved) return undefined;
  if (!tutor.curriculums.includes(context.curriculum)) return undefined;
  if (!supportsProgramme(tutor, context)) return undefined;
  if (!supportsSubject(tutor, context)) return undefined;
  if (!supportsMode(tutor, context.tutoringMode)) return undefined;

  const localMatchScore = getLocalMatchScore(tutor, context);
  const cityMatch = matchesCity(tutor, context.citySlug);
  const includeOnlineFallback = options.includeOnlineFallback ?? true;
  const allowCityFallbackForLocal = options.allowCityFallbackForLocal ?? true;
  const isLocalPage = LOCAL_PAGE_TYPES.has(context.pageType);
  const hasLocalTarget = Boolean(context.areaSlug || context.sectorSlug || context.societySlug || context.schoolSlug);
  let band: TutorMatchBand | undefined;
  let score = 0;

  if (localMatchScore > 0) {
    band = "exactLocal";
    score += localMatchScore;
  } else if (cityMatch && (!isLocalPage || allowCityFallbackForLocal || !hasLocalTarget)) {
    band = "city";
    score += 500;
  } else if (includeOnlineFallback && tutor.onlineTutoringAvailable) {
    band = "onlineFallback";
    score += 100;
  }

  if (!band) return undefined;

  score += context.curriculum === "IB" && tutor.curriculums.includes("IB") ? 90 : 0;
  score += context.curriculum === "IGCSE" && tutor.curriculums.includes("IGCSE") ? 90 : 0;
  score += context.subjectSlug && supportsSubject(tutor, context) ? 80 : 0;
  score += context.programmeSlug && supportsProgramme(tutor, context) ? 60 : 0;
  score += tutor.verified ? 45 : 0;
  score += tutor.approved ? 25 : 0;
  score += tutor.tags.some((tag) => /examiner|specialist|lead teacher|high success/i.test(tag)) ? 25 : 0;
  score += Math.round(tutor.rating * 10);
  score += Math.min(tutor.reviews, 250) / 10;

  if (context.tutoringMode === "home" && tutor.homeTutoringAvailable) score += 70;
  if (context.tutoringMode === "online" && tutor.onlineTutoringAvailable) score += 70;
  if (context.tutoringMode === "hybrid" && tutor.hybridTutoringAvailable) score += 70;
  if (band === "onlineFallback") score -= 40;

  return { tutor, score, band };
}

function supportsMode(tutor: Tutor, tutoringMode?: TutorMode): boolean {
  if (!tutoringMode) return true;
  if (tutoringMode === "home") return tutor.homeTutoringAvailable || tutor.onlineTutoringAvailable || tutor.hybridTutoringAvailable;
  if (tutoringMode === "online") return tutor.onlineTutoringAvailable;
  return tutor.hybridTutoringAvailable;
}

function matchesCity(tutor: Tutor, citySlug: string): boolean {
  return tutor.availableCitySlugs.includes(citySlug) || tutor.primaryCitySlug === citySlug;
}

function getLocalMatchScore(tutor: Tutor, context: TutorPageContext): number {
  const locations = tutor.locations.filter((location) => location.isActive !== false && location.citySlug === context.citySlug);
  if (!locations.length) return 0;

  const societySlug = context.societySlug;
  const sectorSlug = context.sectorSlug;
  const areaSlug = context.areaSlug;
  const schoolSlug = context.schoolSlug;

  if (societySlug && locations.some((location) => includesSlug(location.societySlugs, societySlug) || location.societySlug === societySlug)) return 1000;
  if (sectorSlug && locations.some((location) => includesSlug(location.sectorSlugs, sectorSlug) || location.sectorSlug === sectorSlug)) return 900;
  if (areaSlug && locations.some((location) => includesSlug(location.areaSlugs, areaSlug) || location.areaSlug === areaSlug)) return 800;
  if (schoolSlug && locations.some((location) => includesSlug(location.schoolSlugs, schoolSlug) || location.nearbySchoolSlug === schoolSlug)) return 750;

  return context.pageType === "city" ? 500 : 0;
}

function supportsProgramme(tutor: Tutor, context: TutorPageContext): boolean {
  if (context.curriculum !== "IB" || !context.programmeSlug) return true;
  return tutor.ibProgrammes.map((programme) => programme.toLowerCase()).includes(context.programmeSlug);
}

function supportsSubject(tutor: Tutor, context: TutorPageContext): boolean {
  if (!context.subjectSlug) return true;

  const subjectValues = context.curriculum === "IB" ? tutor.ibSubjects : tutor.igcseSubjects;
  const searchable = [
    tutor.subject,
    tutor.grade,
    ...subjectValues,
    ...tutor.subjectLevels,
    ...tutor.tags,
  ].map(normalizeSubjectSlug);
  const target = normalizeSubjectSlug(context.subjectSlug);
  const targetWithoutLevel = target.replace(/-(hl|sl)$/, "");

  return searchable.some((value) => {
    const valueWithoutLevel = value.replace(/-(hl|sl)$/, "");
    return value === target || valueWithoutLevel === targetWithoutLevel || value.includes(targetWithoutLevel) || targetWithoutLevel.includes(valueWithoutLevel);
  });
}

function findLocalBadge(tutor: Tutor, context: Partial<TutorPageContext>): string | undefined {
  const localSlug = context.societySlug ?? context.sectorSlug ?? context.areaSlug ?? context.schoolSlug;
  if (!localSlug) return tutor.availableAreas[0] ?? tutor.availableSectors[0];
  const normalized = normalizeSlug(localSlug);
  const candidates = [
    ...tutor.availableAreas,
    ...tutor.availableSectors,
    ...tutor.availableSocieties,
    ...tutor.nearbySchools,
  ];

  return candidates.find((candidate) => normalizeSlug(candidate) === normalized) ?? tutor.availableAreas[0] ?? tutor.availableSectors[0];
}

function includesSlug(values: string[] | undefined, slug: string): boolean {
  return Boolean(values?.includes(slug));
}

function normalizeOptionalSlug(value?: string): string | undefined {
  return value ? normalizeSlug(value) : undefined;
}

function normalizeSlug(value: string): string {
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

function normalizeSubjectSlug(value: string): string {
  return normalizeSlug(value)
    .replace(/^ib-/, "")
    .replace(/^igcse-/, "")
    .replace(/^cambridge-/, "")
    .replace(/^pearson-edexcel-/, "")
    .replace(/-and-/, "-")
    .replace(/mathematics/g, "math")
    .replace(/maths/g, "math");
}

function formatList(items: string[]): string {
  const visibleItems = items.filter(Boolean);
  if (visibleItems.length <= 1) return visibleItems[0] ?? "";
  if (visibleItems.length === 2) return `${visibleItems[0]} and ${visibleItems[1]}`;
  return `${visibleItems.slice(0, -1).join(", ")} and ${visibleItems[visibleItems.length - 1]}`;
}

function unique(values: Array<string | undefined>): string[] {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value))));
}
