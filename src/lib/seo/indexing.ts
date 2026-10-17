import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import type { CitySeoPage, IndexingConfig, InternalLink } from "./city-page-types";
import { canonicalUrl as toCanonicalUrl } from "./canonical";

export interface IndexingDecision {
  index: boolean;
  follow: boolean;
  robotsTag: "index, follow" | "noindex, follow";
  canonicalUrl: string;
  reason: string;
}

export const DEFAULT_INDEXING_CONFIG: IndexingConfig = {
  minimumDemandScore: 65,
  minimumContentUniquenessScore: 75,
  minimumInternalLinks: 8,
  minimumFaqCount: 6,
};

export function getIndexingDecision(
  pageData: Pick<
    CitySeoPage,
    | "status"
    | "indexFlag"
    | "canonicalUrl"
    | "canonicalTarget"
    | "demandScore"
    | "contentUniquenessScore"
    | "cityFaqs"
    | "internalLinksOut"
  >,
  config: IndexingConfig = DEFAULT_INDEXING_CONFIG,
): IndexingDecision {
  if (pageData.status !== "live") {
    return noindex(pageData, "Page is not live.");
  }

  if (pageData.indexFlag === "noindex") {
    return noindex(pageData, "Page is intentionally marked noindex.");
  }

  // The demand / uniqueness / internal-link / FAQ thresholds used to emit
  // `noindex, follow` here. They were the single biggest source of Search
  // Console's "Excluded by 'noindex' tag" bucket: the sitemap advertised the
  // URL while the page told Google to drop it. A live page that is published
  // is now always indexable; the same thresholds still run, but only as a
  // content-quality signal (see isCityPageThin), never as a robots directive.
  return {
    index: true,
    follow: true,
    robotsTag: "index, follow",
    canonicalUrl: toCanonicalUrl(pageData.canonicalTarget ?? pageData.canonicalUrl),
    reason: "Page is live and not flagged noindex.",
  };
}

/**
 * The old getIndexingDecision thresholds, kept as a pure quality signal for
 * admin reporting and sitemap prioritisation. It never produces a robots tag.
 */
export function isCityPageThin(
  pageData: Pick<
    CitySeoPage,
    "demandScore" | "contentUniquenessScore" | "cityFaqs" | "internalLinksOut"
  >,
  config: IndexingConfig = DEFAULT_INDEXING_CONFIG,
): boolean {
  return (
    pageData.demandScore < config.minimumDemandScore ||
    pageData.contentUniquenessScore < config.minimumContentUniquenessScore ||
    countCrawlableInternalLinks(pageData.internalLinksOut) < config.minimumInternalLinks ||
    pageData.cityFaqs.length < config.minimumFaqCount
  );
}

export function getGeneratedIndexingDecision(page: GeneratedSeoPage): IndexingDecision {
  if (page.status !== "published") {
    return generatedNoindex(page, "Generated page is not published.");
  }
  if (page.indexFlag === "noindex") {
    return generatedNoindex(page, "Generated page is intentionally noindex.");
  }
  // The quality checker's recommendation and the seoScore/duplicateRisk gate
  // used to emit `noindex, follow` from here. They no longer do: a published
  // generated page is always indexable. The predicate survives as
  // isGeneratedPageThin, which generated-pages-db.ts still uses to decide
  // whether a thin DB row may shadow the richer compiled static page.
  return {
    index: true,
    follow: true,
    robotsTag: "index, follow",
    canonicalUrl: toCanonicalUrl(page.canonicalTarget ?? page.canonicalUrl),
    reason: "Generated page is published and not flagged noindex.",
  };
}

/**
 * Quality signal only — never a robots directive. A `true` means the page is
 * weak enough that a DB row carrying it must not shadow the compiled static
 * page for the same path.
 */
export function isGeneratedPageThin(page: GeneratedSeoPage): boolean {
  return (
    page.quality.recommendedIndexFlag === "noindex" ||
    page.quality.seoScore < 70 ||
    page.quality.duplicateRisk === "high"
  );
}

export function getNoindexSubpageDecision(canonicalUrl: string, reason = "Subpage is future-ready but not yet unique enough to index."): IndexingDecision {
  return {
    index: false,
    follow: true,
    robotsTag: "noindex, follow",
    canonicalUrl: toCanonicalUrl(canonicalUrl),
    reason,
  };
}

function noindex(
  pageData: Pick<CitySeoPage, "canonicalUrl" | "canonicalTarget">,
  reason: string,
): IndexingDecision {
  return {
    index: false,
    follow: true,
    robotsTag: "noindex, follow",
    canonicalUrl: toCanonicalUrl(pageData.canonicalTarget ?? pageData.canonicalUrl),
    reason,
  };
}

function generatedNoindex(page: GeneratedSeoPage, reason: string): IndexingDecision {
  return {
    index: false,
    follow: true,
    robotsTag: "noindex, follow",
    canonicalUrl: toCanonicalUrl(page.canonicalTarget ?? page.canonicalUrl),
    reason,
  };
}

function countCrawlableInternalLinks(links: InternalLink[]): number {
  return links.filter((link) => link.isCrawlable && link.followStatus === "follow" && link.linkStatus === "active").length;
}
