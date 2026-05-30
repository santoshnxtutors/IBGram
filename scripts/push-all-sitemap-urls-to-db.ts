/**
 * Ingest every URL that `src/lib/seo/sitemap.ts` enumerates into the
 * `GeneratedPage` table.
 *
 * The legacy `import-current.ts` only ingested cities + Gurgaon micro-pages
 * + IGCSE city pages = ~251 rows. The full code-derived sitemap covers
 * ~1,610 URLs because it adds:
 *
 *   - IB city focus subpages       (city × programme/subject slugs)
 *   - IB area pages                (per city, only premium + pageEnabled)
 *   - IB school pages              (per city)
 *   - IGCSE tutor city pages
 *   - IGCSE tutor area/sector/society/school pages
 *   - IGCSE tutor subject pages    (per city × subject)   ← largest chunk
 *   - Course pages                 (curriculum × subject)
 *   - Tutor profile pages          (verified+approved tutors)
 *
 * This script creates a `GeneratedPage` row for every URL that doesn't yet
 * have one. Rows are created as `status: 'published', indexFlag: 'index',
 * sitemapIncluded: true` by default — pass `--draft` to ingest as drafts
 * (safer for thin pages until admin reviews them).
 *
 * Idempotent — uses upsert by fullPath. Re-runs are safe.
 *
 * Run with:
 *   npx tsx scripts/push-all-sitemap-urls-to-db.ts
 *   npx tsx scripts/push-all-sitemap-urls-to-db.ts --draft
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient, PageStatus, IndexFlag, PageType, Curriculum } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

function buildConstrainedDbUrl(): string | undefined {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return undefined;
  if (url.includes("connection_limit=")) return url;
  return url.includes("?") ? `${url}&connection_limit=1` : `${url}?connection_limit=1`;
}

const constrainedUrl = buildConstrainedDbUrl();
const prisma = new PrismaClient(
  constrainedUrl ? { datasourceUrl: constrainedUrl } : undefined,
);
const PUBLISH_AS_DRAFT = process.argv.includes("--draft");

// Lazy-load the data sources from src/lib so we don't have to copy them.
async function loadSources() {
  const sitemap = await import("../src/lib/seo/sitemap");
  const cityPages = await import("../src/lib/seo/city-pages");
  const igcseCityPages = await import("../src/lib/seo/igcse-city-pages");
  const igcseRoutes = await import("../src/lib/tutors/igcse-route-helpers");
  const igcseData = await import("../src/app/(marketing)/igcse/data");
  const internalLinks = await import("../src/lib/seo/internal-links");
  const slugUtils = await import("../src/lib/seo/slug-utils");
  const tutorData = await import("../src/lib/tutor-data");
  return { sitemap, cityPages, igcseCityPages, igcseRoutes, igcseData, internalLinks, slugUtils, tutorData };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ibgram.com";

function absolutePath(input: string): string {
  if (input.startsWith("http")) {
    try {
      return new URL(input).pathname;
    } catch {
      return input;
    }
  }
  return input;
}

function normalisePath(input: string): string {
  let p = absolutePath(input);
  if (!p.startsWith("/")) p = `/${p}`;
  if (!p.endsWith("/")) p += "/";
  return p;
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function titleCaseFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((s) => (s.length ? s[0].toUpperCase() + s.slice(1) : s))
    .join(" ");
}

type PageSpec = {
  fullPath: string;
  pageType: PageType;
  curriculum: Curriculum;
  slug: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hasRichContent: boolean;
};

function classifyByPath(fullPath: string): { pageType: PageType; curriculum: Curriculum; slug: string } | null {
  const segments = fullPath.split("/").filter(Boolean);

  // /ib-tutors/<city>/                              → city, IB
  // /ib-tutors/<city>/areas/<area>/                 → area, IB
  // /ib-tutors/<city>/schools/<school>/             → school, IB
  // /ib-tutors/<city>/sectors/<sector>/             → sector, IB
  // /ib-tutors/<city>/societies/<society>/          → society, IB
  // /ib-tutors/<city>/<subpage>/                    → subject, IB (programme/subject focus)
  if (segments[0] === "ib-tutors") {
    if (segments.length === 2) return { pageType: PageType.city, curriculum: Curriculum.IB, slug: segments[1] };
    if (segments.length === 4) {
      if (segments[2] === "areas") return { pageType: PageType.area, curriculum: Curriculum.IB, slug: segments[3] };
      if (segments[2] === "sectors") return { pageType: PageType.sector, curriculum: Curriculum.IB, slug: segments[3] };
      if (segments[2] === "societies") return { pageType: PageType.society, curriculum: Curriculum.IB, slug: segments[3] };
      if (segments[2] === "schools") return { pageType: PageType.school, curriculum: Curriculum.IB, slug: segments[3] };
    }
    if (segments.length === 3) {
      return { pageType: PageType.subject, curriculum: Curriculum.IB, slug: segments[2] };
    }
  }

  // /igcse-tutors/<city>/...
  if (segments[0] === "igcse-tutors") {
    if (segments.length === 2) return { pageType: PageType.city, curriculum: Curriculum.IGCSE, slug: segments[1] };
    if (segments.length === 4) {
      if (segments[2] === "areas") return { pageType: PageType.area, curriculum: Curriculum.IGCSE, slug: segments[3] };
      if (segments[2] === "sectors") return { pageType: PageType.sector, curriculum: Curriculum.IGCSE, slug: segments[3] };
      if (segments[2] === "societies") return { pageType: PageType.society, curriculum: Curriculum.IGCSE, slug: segments[3] };
      if (segments[2] === "schools") return { pageType: PageType.school, curriculum: Curriculum.IGCSE, slug: segments[3] };
    }
    if (segments.length === 3) {
      return { pageType: PageType.subject, curriculum: Curriculum.IGCSE, slug: segments[2] };
    }
  }

  // /igcse-pages/<city>/                            → IGCSE hub city
  if (segments[0] === "igcse-pages" && segments.length === 2) {
    return { pageType: PageType.city, curriculum: Curriculum.IGCSE, slug: segments[1] };
  }

  // /courses/<curriculum>/<subject>/                → programme/subject
  if (segments[0] === "courses" && segments.length === 3) {
    return {
      pageType: PageType.subject,
      curriculum: segments[1] === "igcse" ? Curriculum.IGCSE : Curriculum.IB,
      slug: segments[2],
    };
  }

  return null;
}

function buildSpec(fullPath: string): PageSpec | null {
  const cls = classifyByPath(fullPath);
  if (!cls) return null;
  const segments = fullPath.split("/").filter(Boolean);
  const citySlug = segments[1] ?? cls.slug;
  const placeName = titleCaseFromSlug(cls.slug);
  const cityName = titleCaseFromSlug(citySlug);
  const curriculumLabel = cls.curriculum === Curriculum.IGCSE ? "IGCSE" : "IB";

  let primaryKeyword: string;
  let metaTitle: string;
  let metaDescription: string;
  let h1: string;

  switch (cls.pageType) {
    case PageType.city:
      primaryKeyword = `${curriculumLabel} tutors in ${cityName}`;
      metaTitle = `${curriculumLabel} Tutors in ${cityName} — Home, Online & Hybrid | IB Gram`;
      metaDescription = `Find verified ${curriculumLabel} tutors in ${cityName} for home, online and hybrid lessons. Programme- and subject-aware matching, school-agnostic.`;
      h1 = `${curriculumLabel} tutors in ${cityName}`;
      break;
    case PageType.area:
      primaryKeyword = `${curriculumLabel} tutor near ${placeName} ${cityName}`;
      metaTitle = `${curriculumLabel} Tutors near ${placeName}, ${cityName} | IB Gram`;
      metaDescription = `Find verified ${curriculumLabel} tutors near ${placeName} in ${cityName}. Home, online or hybrid lessons. Subject-first matching, not postcode-first.`;
      h1 = `${curriculumLabel} tutors near ${placeName}, ${cityName}`;
      break;
    case PageType.sector:
      primaryKeyword = `${curriculumLabel} tutor ${placeName} ${cityName}`;
      metaTitle = `${curriculumLabel} Tutors in ${placeName}, ${cityName} | IB Gram`;
      metaDescription = `Find ${curriculumLabel} tutors in ${placeName}, ${cityName}. Home, online and hybrid lessons with verified subject specialists.`;
      h1 = `${curriculumLabel} tutors in ${placeName}, ${cityName}`;
      break;
    case PageType.society:
      primaryKeyword = `${curriculumLabel} tutor ${placeName} ${cityName}`;
      metaTitle = `${curriculumLabel} Tutors at ${placeName}, ${cityName} | IB Gram`;
      metaDescription = `Verified ${curriculumLabel} tutors available at ${placeName}, ${cityName}. Independent platform — not officially affiliated with the society.`;
      h1 = `${curriculumLabel} tutors at ${placeName}, ${cityName}`;
      break;
    case PageType.school:
      primaryKeyword = `${curriculumLabel} tutor near ${placeName}`;
      metaTitle = `${curriculumLabel} Tutors near ${placeName}, ${cityName} | IB Gram`;
      metaDescription = `Find verified ${curriculumLabel} tutors offering home, online and hybrid lessons aligned with ${placeName} timelines in ${cityName}. Independent of the school.`;
      h1 = `${curriculumLabel} tutors near ${placeName}, ${cityName}`;
      break;
    case PageType.subject:
      primaryKeyword = `${curriculumLabel} ${placeName} tutor ${cityName}`;
      metaTitle = `${curriculumLabel} ${placeName} Tutor in ${cityName} | IB Gram`;
      metaDescription = `Find verified ${curriculumLabel} ${placeName} tutors in ${cityName}. HL/SL specialists, IA scaffolding, mock revision. Home, online or hybrid.`;
      h1 = `${curriculumLabel} ${placeName} tutor in ${cityName}`;
      break;
    default:
      return null;
  }

  return {
    fullPath,
    pageType: cls.pageType,
    curriculum: cls.curriculum,
    slug: cls.slug,
    primaryKeyword,
    metaTitle,
    metaDescription,
    h1,
    // Pages from the legacy city seeds carry rich content elsewhere; everything
    // this script ingests at the subject/area/society/school level is a stub
    // until admin enriches it.
    hasRichContent: false,
  };
}

async function main() {
  const { sitemap, igcseRoutes, igcseData } = await loadSources();

  // Enumerate every URL the sitemap would emit. We re-use the sitemap module
  // so this stays in sync with the actual public sitemap.
  const allEntries = sitemap.getSeoSitemapEntries();
  console.log(`Sitemap module reports ${allEntries.length} indexable URLs`);

  // Additionally enumerate IGCSE tutor URLs (which sitemap groups together)
  // so we can classify them precisely.
  const igcseCityParams = igcseRoutes.getIgcseTutorCityStaticParams();
  const igcseSubjects = [...new Set([...(igcseData.cambridgeSubjects ?? []), ...(igcseData.edexcelSubjects ?? [])].map((s) => slugify(s.subject_title)))];

  const igcseSubjectPaths = igcseCityParams.flatMap(({ citySlug }) =>
    igcseSubjects.map((subjectSlug) => `/igcse-tutors/${citySlug}/${subjectSlug}/`),
  );

  // Coalesce all unique paths
  const allPaths = new Set<string>();
  for (const entry of allEntries) allPaths.add(normalisePath(entry.url));
  for (const p of igcseSubjectPaths) allPaths.add(normalisePath(p));

  console.log(`Unique paths to ingest: ${allPaths.size}`);
  console.log(`Mode: ${PUBLISH_AS_DRAFT ? "draft (safe — admin reviews before publishing)" : "published"}\n`);

  const status: PageStatus = PUBLISH_AS_DRAFT ? PageStatus.draft : PageStatus.published;
  const indexFlag: IndexFlag = PUBLISH_AS_DRAFT ? IndexFlag.auto : IndexFlag.index;
  const sitemapIncluded = !PUBLISH_AS_DRAFT;

  let created = 0;
  let updated = 0;
  let skippedCore = 0;
  let skippedNonCmsRoute = 0;

  for (const fullPath of allPaths) {
    // Skip purely marketing / non-CMS routes — they're not GeneratedPage rows
    if (
      fullPath === "/" ||
      fullPath.startsWith("/blog") ||
      fullPath.startsWith("/about") ||
      fullPath.startsWith("/contact") ||
      fullPath.startsWith("/admissions") ||
      fullPath.startsWith("/programmes") ||
      fullPath.startsWith("/jobs") ||
      fullPath.startsWith("/subscription") ||
      fullPath.startsWith("/tutor-compare") ||
      fullPath === "/tutors/" ||
      fullPath === "/ib-tutors/" ||
      fullPath === "/igcse-pages/" ||
      fullPath === "/igcse/" ||
      fullPath.startsWith("/tutor-profile")
    ) {
      skippedCore++;
      continue;
    }

    const spec = buildSpec(fullPath);
    if (!spec) {
      skippedNonCmsRoute++;
      continue;
    }

    const existing = await prisma.generatedPage.findUnique({ where: { fullPath } });
    if (existing) {
      // Don't overwrite content — only flip sitemapIncluded if missing
      if (!existing.sitemapIncluded && existing.status === PageStatus.published && existing.indexFlag === IndexFlag.index) {
        await prisma.generatedPage.update({ where: { id: existing.id }, data: { sitemapIncluded: true } });
      }
      updated++;
      continue;
    }

    await prisma.generatedPage.create({
      data: {
        pageType: spec.pageType,
        curriculum: spec.curriculum,
        status,
        indexFlag,
        slug: spec.slug,
        fullPath,
        canonicalUrl: `${SITE_URL}${fullPath}`,
        primaryKeyword: spec.primaryKeyword,
        secondaryKeywords: [],
        title: spec.metaTitle,
        metaTitle: spec.metaTitle,
        metaDescription: spec.metaDescription,
        h1: spec.h1,
        heroTitle: spec.h1,
        heroSubtitle: spec.metaDescription.slice(0, 200),
        introSummary: spec.metaDescription,
        contentWordCount: 0,
        qualityScore: 0,
        sitemapIncluded,
        robotsTag: PUBLISH_AS_DRAFT ? "noindex, follow" : "index, follow",
        ogTitle: spec.metaTitle,
        ogDescription: spec.metaDescription,
        twitterTitle: spec.metaTitle,
        twitterDescription: spec.metaDescription,
        publishedAt: PUBLISH_AS_DRAFT ? null : new Date(),
        lastGeneratedAt: new Date(),
      },
    });

    // Mirror into PageMetadata for the editor's metadata tab
    const created_page = await prisma.generatedPage.findUnique({ where: { fullPath } });
    if (created_page) {
      await prisma.pageMetadata.upsert({
        where: { pageId: created_page.id },
        create: {
          pageId: created_page.id,
          metaTitle: spec.metaTitle,
          metaDescription: spec.metaDescription,
          canonicalUrl: `${SITE_URL}${fullPath}`,
          robotsTag: PUBLISH_AS_DRAFT ? "noindex, follow" : "index, follow",
          ogTitle: spec.metaTitle,
          ogDescription: spec.metaDescription,
          twitterTitle: spec.metaTitle,
          twitterDescription: spec.metaDescription,
        },
        update: {},
      });
    }

    created++;
    if (created % 100 === 0) console.log(`  …${created} new pages created`);
  }

  const totalPages = await prisma.generatedPage.count();
  const sitemapEligible = await prisma.generatedPage.count({
    where: { status: PageStatus.published, indexFlag: IndexFlag.index, sitemapIncluded: true },
  });

  console.log("\n📊 Summary");
  console.log(`  Newly created:     ${created}`);
  console.log(`  Already in DB:     ${updated}`);
  console.log(`  Skipped core/UI:   ${skippedCore}`);
  console.log(`  Skipped unknown:   ${skippedNonCmsRoute}`);
  console.log(`  ────────────────────────────────`);
  console.log(`  Total in DB:       ${totalPages}`);
  console.log(`  Sitemap eligible:  ${sitemapEligible}`);
  console.log(
    PUBLISH_AS_DRAFT
      ? `\nNew rows were created as DRAFT. Review them in /admin/pages and publish individually.`
      : `\nNew rows were created as PUBLISHED + INDEXED. They appear in /sitemap.xml immediately.`,
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
