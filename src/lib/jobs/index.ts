import "server-only";

import { prisma } from "@/lib/db";

export const JOBS_CACHE_TAG = "jobs";

export function splitListText(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String).map((item) => item.trim()).filter(Boolean);
  if (typeof value !== "string") return [];
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function slugifyJobTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 180);
}

export async function getPublishedJobs() {
  const now = new Date();
  return prisma.job.findMany({
    where: {
      status: "published",
      OR: [{ closesAt: null }, { closesAt: { gte: now } }],
    },
    orderBy: [{ sortOrder: "asc" }, { publishedAt: "desc" }, { createdAt: "desc" }],
  });
}

export async function getPublishedJobBySlug(slug: string) {
  const now = new Date();
  return prisma.job.findFirst({
    where: {
      slug,
      status: "published",
      OR: [{ closesAt: null }, { closesAt: { gte: now } }],
    },
  });
}
