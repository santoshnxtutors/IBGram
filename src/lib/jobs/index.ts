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

/**
 * Slugs for the sitemap's `pages` child, which already carries /jobs/ itself.
 *
 * Same filter as getPublishedJobs, so a role that closes drops out of the sitemap on the
 * next revalidate rather than advertising a URL that no longer resolves.
 */
export async function getPublishedJobSitemapEntries() {
  const now = new Date();
  return prisma.job.findMany({
    where: {
      status: "published",
      OR: [{ closesAt: null }, { closesAt: { gte: now } }],
    },
    select: { slug: true, updatedAt: true, publishedAt: true },
    orderBy: { sortOrder: "asc" },
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

/**
 * Search-facing title and description for the roles that earn real impressions.
 *
 * `job.title` and `job.summary` are written for the page itself: the title is the H1
 * role name, and the summary is an opening paragraph (up to 400 chars). Both are the
 * wrong shape for a result snippet, and GSC shows why it costs clicks — e.g.
 * /jobs/ib-igcse-tutor-jobs-india/ took 432 impressions and 13 clicks (3.0% at pos 7.2)
 * while ranking p3.6 for "online tutor jobs" (113 impressions), a phrase the role title
 * never contained. Overriding here rather than renaming the row keeps the visible H1
 * and the JobPosting schema intact.
 *
 * Roles without an entry fall back to the row, clipped by resolveMetaDescription.
 */
export const JOB_SEO: Record<string, { title: string; description: string }> = {
  // "online tutor jobs" 113i p3.6, "online tuition jobs" 9i, "online tutor job vacancy
  // work from home" 3i. Fee split is the differentiator and is stated on the page.
  "ib-igcse-tutor-jobs-india": {
    title: "Online Tutor Jobs in India: IB & IGCSE, Keep 70%",
    description:
      "Online tutor jobs for IB and IGCSE teachers across India. Freelance, you set the fee and keep 70% online or 100% of home tuition after month one. Paid on the 1st.",
  },
  // "work from home jobs delhi for students" 9i p4.3, "any online job for students work
  // from home" 6i, "any work from home jobs for students" 7i.
  "ib-dp-maths-aa-sl-online-tutor-india": {
    title: "IB Maths AA SL Tutor Job: Work From Home, India",
    description:
      "Work-from-home tutoring job teaching IB DP Maths AA SL online across India. Set your own fee, keep 70%, choose your hours. Apply once and get matched students.",
  },
  // "ib tutor jobs" is the category phrase; the row title is 13 chars and reads thin.
  "ib-tutor-jobs": {
    title: "IB Tutor Jobs: Freelance, Online, You Set the Fee",
    description:
      "Freelance IB tutor jobs, online or at home. Apply once, list your programmes and subjects, pass the credential check, then receive matched students. Keep up to 100%.",
  },
  // "igcse maths home tutor noida" cluster, 70i p10.4, zero clicks.
  "igcse-maths-home-tutor-noida": {
    title: "IGCSE Maths Tutor Jobs in Noida: Home Tuition",
    description:
      "IGCSE maths home tutor jobs across Noida, including Additional Mathematics for Year 11. Pick your sectors, set your fee, keep 100% of home tuition after month one.",
  },
};
