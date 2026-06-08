import "server-only";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";
import { mapPrismaToTutor } from "@/lib/cms/public-tutors";
import type { Tutor } from "@/lib/tutor-data";

export const TUTOR_VISIBILITY_CACHE_TAG = "cms:tutor-visibility";

export type TutorVisibilityPlacement = {
  pagePath: string;
  pageLabel?: string;
  sortOrder: number;
  isActive: boolean;
};

export type TutorVisibilityOption = {
  label: string;
  path: string;
};

export const tutorVisibilityPageOptions: TutorVisibilityOption[] = [
  { label: "Homepage", path: "/" },
  { label: "IGCSE homepage", path: "/igcse/" },
  { label: "All programmes", path: "/programmes/" },
  { label: "IB PYP programme", path: "/programmes/pyp/" },
  { label: "IB MYP programme", path: "/programmes/myp/" },
  { label: "IB DP programme", path: "/programmes/dp/" },
  { label: "IB CP programme", path: "/programmes/cp/" },
  { label: "IB Mathematics course", path: "/courses/ib/mathematics/" },
  { label: "IB Sciences course", path: "/courses/ib/sciences/" },
  { label: "IB English course", path: "/courses/ib/english/" },
  { label: "IB Language course", path: "/courses/ib/language/" },
  { label: "IB Individuals and Societies course", path: "/courses/ib/individuals-and-societies/" },
  { label: "IGCSE Mathematics course", path: "/courses/igcse/mathematics/" },
  { label: "IGCSE Sciences course", path: "/courses/igcse/sciences/" },
  { label: "IGCSE English course", path: "/courses/igcse/english/" },
];

export function normalizeTutorVisibilityPath(value: string): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withoutOrigin = trimmed.replace(/^https?:\/\/[^/]+/i, "");
  const withLeadingSlash = withoutOrigin.startsWith("/") ? withoutOrigin : `/${withoutOrigin}`;
  const withoutQuery = withLeadingSlash.split(/[?#]/)[0] || "/";
  return withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;
}

export function parseTutorVisibilityPlacements(metadata: unknown): TutorVisibilityPlacement[] {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return [];
  const raw = (metadata as { visibilityPlacements?: unknown }).visibilityPlacements;
  if (!Array.isArray(raw)) return [];

  return raw
    .filter((item): item is Record<string, unknown> => typeof item === "object" && item !== null && !Array.isArray(item))
    .map((item) => {
      const pagePath = normalizeTutorVisibilityPath(String(item.pagePath ?? ""));
      return {
        pagePath,
        pageLabel: typeof item.pageLabel === "string" ? item.pageLabel : undefined,
        sortOrder: Number.isFinite(Number(item.sortOrder)) ? Number(item.sortOrder) : 0,
        isActive: item.isActive !== false,
      };
    })
    .filter((item) => item.pagePath);
}

export function setTutorVisibilityPlacement(
  metadata: unknown,
  pagePath: string,
  nextPlacement: TutorVisibilityPlacement | null,
): Record<string, unknown> {
  const base = metadata && typeof metadata === "object" && !Array.isArray(metadata) ? { ...(metadata as Record<string, unknown>) } : {};
  const normalizedPath = normalizeTutorVisibilityPath(pagePath);
  const existing = parseTutorVisibilityPlacements(base).filter((item) => item.pagePath !== normalizedPath);
  if (nextPlacement) {
    const next: TutorVisibilityPlacement = {
      pagePath: normalizedPath,
      sortOrder: Math.max(0, Math.round(nextPlacement.sortOrder)),
      isActive: nextPlacement.isActive,
    };
    const pageLabel = nextPlacement.pageLabel?.trim();
    if (pageLabel) next.pageLabel = pageLabel;
    existing.push(next);
  }
  return {
    ...base,
    visibilityPlacements: existing.map((item) => ({
      pagePath: item.pagePath,
      ...(item.pageLabel ? { pageLabel: item.pageLabel } : {}),
      sortOrder: item.sortOrder,
      isActive: item.isActive,
    })),
  };
}

export const getVisibleTutorsForPage = unstable_cache(
  async (pagePath: string): Promise<Tutor[] | null> => {
    const normalizedPath = normalizeTutorVisibilityPath(pagePath);
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

      const selected = rows
        .map((row) => {
          const placement = parseTutorVisibilityPlacements(row.profile?.metadata).find(
            (item) => item.isActive && item.pagePath === normalizedPath,
          );
          return placement ? { row, placement } : null;
        })
        .filter((item): item is { row: (typeof rows)[number]; placement: TutorVisibilityPlacement } => item !== null)
        .sort((a, b) => a.placement.sortOrder - b.placement.sortOrder || a.row.displayName.localeCompare(b.row.displayName))
        .slice(0, 3)
        .map(({ row }) => mapPrismaToTutor(row));

      return selected;
    } catch {
      return null;
    }
  },
  ["visible-tutors-for-page"],
  { tags: [TUTOR_VISIBILITY_CACHE_TAG, "cms:tutors"], revalidate: 300 },
);
