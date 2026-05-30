import "server-only";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/db";
import type {
  GeneratedSeoPage,
  GeneratedPageType,
  GeneratedPageStatus,
} from "@/lib/page-generator/types";

// Map the legacy status enum to the Prisma PageStatus enum
function mapStatusToPrisma(status: GeneratedPageStatus): "draft" | "published" | "needs_review" | "paused" {
  switch (status) {
    case "published":
      return "published";
    case "review":
      return "needs_review";
    case "paused":
      return "paused";
    default:
      return "draft";
  }
}

const VALID_PAGE_TYPES = new Set<GeneratedPageType>([
  "city",
  "area",
  "sector",
  "society",
  "school",
  "subject",
  "programme",
]);

function normalisePath(path: string): string {
  if (!path) return "/";
  let p = path.startsWith("/") ? path : `/${path}`;
  if (!p.endsWith("/")) p += "/";
  return p;
}

/**
 * Writes a GeneratedSeoPage to the Prisma database.
 *
 * Idempotent — upserts by fullPath. Replaces all child rows (blocks, faqs,
 * metadata, schemas, source links) on every write so the database row mirrors
 * the in-memory page exactly.
 *
 * Silently swallows DB errors and logs to stderr — the legacy JSON store is
 * still the source of truth during phase 2/3 migration, and a DB outage must
 * not break the admin save flow.
 */
export async function writeGeneratedPageToDb(page: GeneratedSeoPage): Promise<{ ok: boolean; id?: string; error?: string }> {
  try {
    if (!VALID_PAGE_TYPES.has(page.pageType)) {
      return { ok: false, error: `Unsupported page type: ${page.pageType}` };
    }

    const fullPath = normalisePath(page.canonicalUrl.replace(/^https?:\/\/[^/]+/i, ""));
    const status = mapStatusToPrisma(page.status);
    const indexFlag = page.indexFlag === "index" ? "index" : "noindex";

    const row = await prisma.generatedPage.upsert({
      where: { fullPath },
      create: {
        pageType: page.pageType,
        curriculum: "IB",
        status,
        indexFlag,
        slug: page.slug,
        fullPath,
        canonicalUrl: page.canonicalUrl,
        canonicalTarget: page.canonicalTarget ?? null,
        primaryKeyword: page.primaryKeyword,
        secondaryKeywords: page.secondaryKeywords ?? [],
        searchIntent: "informational",
        title: page.h1,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        h1: page.h1,
        heroTitle: page.heroTitle,
        heroSubtitle: page.heroSubtitle,
        introSummary: page.introSummary,
        contentWordCount: page.quality.wordCount,
        qualityScore: page.quality.seoScore,
        localDepthScore: page.quality.localDepthScore,
        readabilityScore: page.quality.readabilityScore,
        internalLinkScore: page.quality.internalLinkScore,
        duplicateRisk: page.quality.duplicateRisk,
        sitemapIncluded: status === "published" && indexFlag === "index",
        robotsTag: indexFlag === "index" ? "index, follow" : "noindex, follow",
        ogTitle: page.ogTitle,
        ogDescription: page.ogDescription,
        twitterTitle: page.twitterTitle,
        twitterDescription: page.twitterDescription,
        publishedAt: status === "published" ? new Date() : null,
        lastGeneratedAt: new Date(),
        lastReviewedAt: new Date(),
      },
      update: {
        status,
        indexFlag,
        canonicalUrl: page.canonicalUrl,
        canonicalTarget: page.canonicalTarget ?? null,
        primaryKeyword: page.primaryKeyword,
        secondaryKeywords: page.secondaryKeywords ?? [],
        title: page.h1,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        h1: page.h1,
        heroTitle: page.heroTitle,
        heroSubtitle: page.heroSubtitle,
        introSummary: page.introSummary,
        contentWordCount: page.quality.wordCount,
        qualityScore: page.quality.seoScore,
        sitemapIncluded: status === "published" && indexFlag === "index",
        robotsTag: indexFlag === "index" ? "index, follow" : "noindex, follow",
        ogTitle: page.ogTitle,
        ogDescription: page.ogDescription,
        twitterTitle: page.twitterTitle,
        twitterDescription: page.twitterDescription,
        publishedAt: status === "published" ? new Date() : null,
        lastReviewedAt: new Date(),
      },
    });

    // Replace child collections
    await prisma.pageBlock.deleteMany({ where: { pageId: row.id } });
    if (page.contentBlocks.length > 0) {
      await prisma.pageBlock.createMany({
        data: page.contentBlocks.map((block, index) => ({
          pageId: row.id,
          blockType: block.type,
          heading: block.heading || null,
          body: block.body || null,
          items: block.items as unknown as object,
          sortOrder: index,
        })),
      });
    }

    await prisma.pageFaq.deleteMany({ where: { pageId: row.id } });
    if (page.faqs.length > 0) {
      await prisma.pageFaq.createMany({
        data: page.faqs.map((faq, index) => ({
          pageId: row.id,
          question: faq.question,
          answer: faq.answer,
          sortOrder: index,
        })),
      });
    }

    await prisma.pageMetadata.upsert({
      where: { pageId: row.id },
      create: {
        pageId: row.id,
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        canonicalUrl: page.canonicalUrl,
        robotsTag: indexFlag === "index" ? "index, follow" : "noindex, follow",
        ogTitle: page.ogTitle,
        ogDescription: page.ogDescription,
        twitterTitle: page.twitterTitle,
        twitterDescription: page.twitterDescription,
      },
      update: {
        metaTitle: page.metaTitle,
        metaDescription: page.metaDescription,
        canonicalUrl: page.canonicalUrl,
        robotsTag: indexFlag === "index" ? "index, follow" : "noindex, follow",
        ogTitle: page.ogTitle,
        ogDescription: page.ogDescription,
        twitterTitle: page.twitterTitle,
        twitterDescription: page.twitterDescription,
      },
    });

    if (page.schema && Object.keys(page.schema).length > 0) {
      await prisma.pageSchema.deleteMany({ where: { pageId: row.id } });
      await prisma.pageSchema.create({
        data: {
          pageId: row.id,
          schemaType: "Page",
          schemaJson: page.schema as unknown as object,
          status: "published",
        },
      });
    }

    await prisma.pageInternalLink.deleteMany({ where: { sourcePageId: row.id } });
    if (page.internalLinks.length > 0) {
      await prisma.pageInternalLink.createMany({
        data: page.internalLinks.map((link) => ({
          sourcePageId: row.id,
          targetUrl: link.targetUrl,
          anchorText: link.anchorText,
          context: link.linkContext || null,
        })),
      });
    }

    await prisma.pagePublishLog.create({
      data: {
        pageId: row.id,
        action: status === "published" ? "publish" : "edit",
        toStatus: status,
        notes: "Saved via admin page editor",
      },
    });

    // Invalidate caches
    revalidateTag("cms:generated-pages");
    revalidateTag("seo:sitemap");

    return { ok: true, id: row.id };
  } catch (err) {
    console.error("[writeGeneratedPageToDb] Failed:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
