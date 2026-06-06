import "server-only";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";
import type { Tutor, TutorFaq, TutorLocation as StaticTutorLocation } from "@/lib/tutor-data";

type AnyTutorId = Tutor["id"];

/** Parse the Tutor.faqs JSON column into a clean TutorFaq[]. */
function parsePublicFaqs(value: unknown): TutorFaq[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((f): f is { question?: unknown; answer?: unknown } => typeof f === "object" && f !== null)
    .map((f) => ({ question: String(f.question ?? ""), answer: String(f.answer ?? "") }))
    .filter((f) => f.question.trim() && f.answer.trim());
}

function uniq<T>(values: Array<T | null | undefined>): T[] {
  return [...new Set(values.filter((v): v is T => v !== null && v !== undefined && v !== ""))];
}

/**
 * Normalise an avatar URL stored in DB so `<img src>` always works:
 * - empty / null → ""
 * - already absolute (http*) → unchanged
 * - legacy `/uploads/<key>` static path → rewritten to `/api/media/<key>`
 *   so the route handler serves the file (avoids Turbopack dev manifest gap)
 * - already starts with `/` → unchanged
 * - missing leading slash → prepend "/"
 */
function normaliseImageUrl(value: string | null | undefined): string {
  if (!value) return "";
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  // Rewrite legacy /uploads/<key> to /api/media/<key> — the route handler
  // reads files fresh from disk on every request.
  if (trimmed.startsWith("/uploads/")) return `/api/media/${trimmed.slice("/uploads/".length)}`;
  if (trimmed.startsWith("uploads/")) return `/api/media/${trimmed.slice("uploads/".length)}`;
  if (trimmed.startsWith("/")) return trimmed;
  return `/${trimmed}`;
}

/**
 * Read all visible tutors from Prisma and map them onto the legacy `Tutor`
 * shape the existing TutorsClient / TutorCard / tutor-profile components
 * already understand. Returns null if the DB is unreachable so callers can
 * fall back to the static `allTutors` array.
 *
 * "Visible" = NOT soft-deleted AND status is 'active' (i.e. Published).
 * Drafts / paused / archived tutors stay invisible on the public site.
 */
export const getPublicTutorsFromDb = unstable_cache(
  async (): Promise<Tutor[] | null> => {
    try {
      const rows = await prisma.tutor.findMany({
        where: { deletedAt: null, status: "active", approved: true },
        include: {
          profile: true,
          subjects: true,
          curriculums: true,
          locations: { orderBy: { priority: "asc" } },
        },
        orderBy: [{ rating: "desc" }, { displayName: "asc" }],
      });
      if (rows.length === 0) return null;
      return rows.map(mapPrismaToTutor);
    } catch {
      return null;
    }
  },
  ["public-tutors-from-db"],
  { tags: ["cms:tutors"], revalidate: 300 },
);

export function mapPrismaToTutor(row: Awaited<ReturnType<typeof prisma.tutor.findMany>>[number] & {
  profile: { education: string | null; methodology: string | null; successRate: string | null; responseTime: string | null; availabilityText: string | null; languages: string[]; tags: string[]; metadata?: unknown } | null;
  subjects: Array<{ subjectName: string; curriculum: string; level: string | null }>;
  curriculums: Array<{ curriculum: string; programme: string | null }>;
  locations: Array<{
    cityName: string; citySlug: string; areaName: string | null; areaSlug: string | null;
    sectorName: string | null; sectorSlug: string | null;
    societyName: string | null; societySlug: string | null;
    nearbySchoolName: string | null; nearbySchoolSlug: string | null;
    homeTutoringAvailable: boolean; onlineTutoringAvailable: boolean; hybridTutoringAvailable: boolean;
    serviceRadiusKm: number | null; notes: string | null;
  }>;
}): Tutor {
  const ibSubjects = row.subjects.filter((s) => s.curriculum === "IB").map((s) => s.subjectName);
  const igcseSubjects = row.subjects.filter((s) => s.curriculum === "IGCSE").map((s) => s.subjectName);
  const subjectLevels = uniq(row.subjects.map((s) => s.level));
  const ibProgrammes = uniq(
    row.curriculums.filter((c) => c.curriculum === "IB").map((c) => c.programme),
  ) as Array<"PYP" | "MYP" | "DP">;
  const curriculumKinds = uniq(row.curriculums.map((c) => c.curriculum)) as Array<"IB" | "IGCSE">;
  const curriculumLabel: Tutor["curriculum"] =
    curriculumKinds.length === 2 ? "Both" : curriculumKinds[0] ?? "IB";
  const primaryLoc = row.locations[0];
  const subject = ibSubjects[0] ?? igcseSubjects[0] ?? row.headline ?? "Tuition";
  const grade =
    subjectLevels[0] ??
    (curriculumKinds.includes("IB") ? "IB DP" : curriculumKinds.includes("IGCSE") ? "IGCSE" : "");

  const locations: StaticTutorLocation[] = row.locations.map((loc) => ({
    cityName: loc.cityName,
    citySlug: loc.citySlug,
    areaName: loc.areaName ?? undefined,
    areaSlug: loc.areaSlug ?? undefined,
    sectorName: loc.sectorName ?? undefined,
    sectorSlug: loc.sectorSlug ?? undefined,
    societyName: loc.societyName ?? undefined,
    societySlug: loc.societySlug ?? undefined,
    nearbySchoolName: loc.nearbySchoolName ?? undefined,
    nearbySchoolSlug: loc.nearbySchoolSlug ?? undefined,
    homeTutoringAvailable: loc.homeTutoringAvailable,
    onlineTutoringAvailable: loc.onlineTutoringAvailable,
    hybridTutoringAvailable: loc.hybridTutoringAvailable,
    serviceRadiusKm: loc.serviceRadiusKm ?? undefined,
    notes: loc.notes ?? undefined,
    isActive: true,
  }));

  return {
    id: row.id as unknown as AnyTutorId,
    slug: row.slug,
    name: row.displayName,
    subject,
    grade,
    rating: Number(row.rating ?? 0),
    reviews: row.reviewCount,
    experience: row.experienceYears ? `${row.experienceYears} Yrs` : "",
    bio: row.bio ?? "",
    about: row.about ?? "",
    rate: row.hourlyRate ? `${row.currency === "USD" ? "$" : "₹"}${Number(row.hourlyRate)}/hr` : "",
    image: normaliseImageUrl(row.avatarUrl),
    tags: row.profile?.tags ?? [],
    accent: "bg-primary/10 text-primary border-primary/20",
    education: row.profile?.education ?? "",
    successRate: row.profile?.successRate ?? "",
    availability: row.profile?.availabilityText ?? "",
    responseTime: row.profile?.responseTime ?? "",
    methodology: row.profile?.methodology ?? "",
    curriculum: curriculumLabel,
    faqs: parsePublicFaqs(row.faqs),

    // Enriched fields used by the matching engine
    isActive: row.status === "active",
    verified: row.verified,
    approved: row.approved,
    recentlyActive: undefined,
    curriculums: curriculumKinds,
    ibProgrammes,
    igcseSubjects,
    ibSubjects,
    subjectLevels,
    examBoards: [],
    primaryCity: primaryLoc?.cityName ?? "",
    primaryCitySlug: primaryLoc?.citySlug ?? "",
    stateName: "",
    countryName: "India",
    availableCities: uniq(row.locations.map((l) => l.cityName)),
    availableCitySlugs: uniq(row.locations.map((l) => l.citySlug)),
    availableAreas: uniq(row.locations.map((l) => l.areaName)),
    availableAreaSlugs: uniq(row.locations.map((l) => l.areaSlug)),
    availableSectors: uniq(row.locations.map((l) => l.sectorName)),
    availableSectorSlugs: uniq(row.locations.map((l) => l.sectorSlug)),
    availableSocieties: uniq(row.locations.map((l) => l.societyName)),
    availableSocietySlugs: uniq(row.locations.map((l) => l.societySlug)),
    nearbySchools: uniq(row.locations.map((l) => l.nearbySchoolName)),
    nearbySchoolSlugs: uniq(row.locations.map((l) => l.nearbySchoolSlug)),
    serviceRadiusKm: primaryLoc?.serviceRadiusKm ?? undefined,
    homeTutoringAvailable: primaryLoc?.homeTutoringAvailable ?? false,
    onlineTutoringAvailable: primaryLoc?.onlineTutoringAvailable ?? true,
    hybridTutoringAvailable: primaryLoc?.hybridTutoringAvailable ?? false,
    travelNotes: primaryLoc?.notes ?? "",
    locationAvailabilityNotes: row.profile?.availabilityText ?? "",
    locations,
  };
}
