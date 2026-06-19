import "server-only";

import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/db";
import { isStaticSafeSlug } from "@/lib/seo/slug-utils";

export const TUTOR_REACH_CACHE_TAG = "cms:tutor-reach";

export type TutorReachFaq = { question: string; answer: string };

export type PublicTutorReachPage = {
  id: string;
  slug: string;
  subject: string;
  board: string;
  mode: string;
  city: string | null;
  title: string;
  h1: string;
  intro: string | null;
  body: string;
  faqs: TutorReachFaq[];
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  indexFlag: string;
  wordCount: number;
  publishedAt: string | null;
  updatedAt: string;
  tutor: {
    id: string;
    slug: string;
    displayName: string;
    headline: string | null;
    avatarUrl: string | null;
    rating: number | null;
    reviewCount: number;
  };
};

// Sitemap quality gate — only well-built pages get indexed, to avoid the
// thin/duplicate-content penalty when many similar tutor pages exist.
export const REACH_MIN_WORDS = 400;

function parseFaqs(value: unknown): TutorReachFaq[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((f): f is { question?: unknown; answer?: unknown } => typeof f === "object" && f !== null)
    .map((f) => ({ question: String(f.question ?? ""), answer: String(f.answer ?? "") }))
    .filter((f) => f.question.trim() && f.answer.trim());
}

function toIso(v: Date | string | null | undefined): string | null {
  if (!v) return null;
  return v instanceof Date ? v.toISOString() : String(v);
}

type RowWithTutor = {
  id: string;
  slug: string;
  subject: string;
  board: string;
  mode: string;
  city: string | null;
  title: string;
  h1: string;
  intro: string | null;
  body: string;
  faqs: unknown;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  indexFlag: string;
  wordCount: number;
  publishedAt: Date | string | null;
  updatedAt: Date | string;
  tutor: {
    id: string;
    slug: string;
    displayName: string;
    headline: string | null;
    avatarUrl: string | null;
    rating: number | null;
    reviewCount: number;
  };
};

function toPublic(row: RowWithTutor): PublicTutorReachPage {
  return {
    id: row.id,
    slug: row.slug,
    subject: row.subject,
    board: row.board,
    mode: row.mode,
    city: row.city,
    title: row.title,
    h1: row.h1,
    intro: row.intro,
    body: row.body,
    faqs: parseFaqs(row.faqs),
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    metaKeywords: row.metaKeywords ?? [],
    indexFlag: row.indexFlag,
    wordCount: row.wordCount,
    publishedAt: toIso(row.publishedAt),
    updatedAt: toIso(row.updatedAt) ?? new Date().toISOString(),
    tutor: row.tutor,
  };
}

const tutorSelect = {
  id: true,
  slug: true,
  displayName: true,
  headline: true,
  avatarUrl: true,
  rating: true,
  reviewCount: true,
} as const;

/** Single published tutor-reach page by slug. */
export const getTutorReachPageBySlug = unstable_cache(
  async (slug: string): Promise<PublicTutorReachPage | null> => {
    try {
      const row = await prisma.tutorReachPage.findUnique({
        where: { slug },
        include: { tutor: { select: tutorSelect } },
      });
      if (!row || row.status !== "published") return null;
      if (row.publishedAt && new Date(row.publishedAt).getTime() > Date.now()) return null;
      return toPublic(row as RowWithTutor);
    } catch {
      return null;
    }
  },
  ["public-tutor-reach-by-slug"],
  { tags: [TUTOR_REACH_CACHE_TAG], revalidate: 120 },
);

/** Published reach pages for one tutor (shown on the tutor profile). */
export const getTutorReachPagesForTutor = unstable_cache(
  async (tutorId: string): Promise<PublicTutorReachPage[]> => {
    try {
      const rows = await prisma.tutorReachPage.findMany({
        where: { tutorId, status: "published" },
        orderBy: [{ board: "asc" }, { subject: "asc" }],
        include: { tutor: { select: tutorSelect } },
      });
      const now = Date.now();
      return rows
        .filter((r) => !r.publishedAt || new Date(r.publishedAt).getTime() <= now)
        .map((r) => toPublic(r as RowWithTutor));
    } catch {
      return [];
    }
  },
  ["public-tutor-reach-for-tutor"],
  { tags: [TUTOR_REACH_CACHE_TAG], revalidate: 120 },
);

/** Slugs of published pages — for generateStaticParams. */
export async function getPublishedTutorReachSlugs(): Promise<string[]> {
  try {
    const rows = await prisma.tutorReachPage.findMany({
      where: { status: "published" },
      select: { slug: true },
      take: 2000,
    });
    // Skip slugs with filesystem-illegal characters so the static build never
    // emits a prerendered file that breaks the deploy artifact upload.
    return rows.map((r) => r.slug).filter(isStaticSafeSlug);
  } catch {
    return [];
  }
}

/**
 * Sitemap entries — only published, indexable pages that clear the quality
 * gate (enough unique words). This is the safeguard against thin/duplicate
 * tutor pages being indexed.
 */
export async function getTutorReachSitemapEntries(): Promise<Array<{ slug: string; lastModified: string }>> {
  try {
    const rows = await prisma.tutorReachPage.findMany({
      where: {
        status: "published",
        // "Always index" (indexFlag=index) forces inclusion. "auto" applies the
        // word-count quality gate. "noindex" is always excluded.
        OR: [
          { indexFlag: "index" },
          { indexFlag: "auto", wordCount: { gte: REACH_MIN_WORDS } },
        ],
      },
      select: { slug: true, updatedAt: true, publishedAt: true },
      take: 2000,
    });
    const now = Date.now();
    return rows
      .filter((r) => !r.publishedAt || new Date(r.publishedAt).getTime() <= now)
      .filter((r) => isStaticSafeSlug(r.slug))
      .map((r) => ({ slug: r.slug, lastModified: r.updatedAt.toISOString() }));
  } catch {
    return [];
  }
}

/** Count words in plain text / markdown body. */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
