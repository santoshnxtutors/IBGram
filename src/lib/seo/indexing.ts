import type { CitySeoPage, IndexingConfig, InternalLink } from "./city-page-types";

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

  const crawlableInternalLinks = countCrawlableInternalLinks(pageData.internalLinksOut);

  if (pageData.demandScore < config.minimumDemandScore) {
    return noindex(pageData, "Demand score is not strong enough for indexing.");
  }

  if (pageData.contentUniquenessScore < config.minimumContentUniquenessScore) {
    return noindex(pageData, "Content uniqueness is not strong enough for indexing.");
  }

  if (crawlableInternalLinks < config.minimumInternalLinks) {
    return noindex(pageData, "The page needs more useful crawlable internal links.");
  }

  if (pageData.cityFaqs.length < config.minimumFaqCount) {
    return noindex(pageData, "The page needs more city-specific FAQs.");
  }

  return {
    index: true,
    follow: true,
    robotsTag: "index, follow",
    canonicalUrl: pageData.canonicalTarget ?? pageData.canonicalUrl,
    reason: "Unique city content, strong demand, FAQs and useful internal links are present.",
  };
}

export function getNoindexSubpageDecision(canonicalUrl: string, reason = "Subpage is future-ready but not yet unique enough to index."): IndexingDecision {
  return {
    index: false,
    follow: true,
    robotsTag: "noindex, follow",
    canonicalUrl,
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
    canonicalUrl: pageData.canonicalTarget ?? pageData.canonicalUrl,
    reason,
  };
}

function countCrawlableInternalLinks(links: InternalLink[]): number {
  return links.filter((link) => link.isCrawlable && link.followStatus === "follow" && link.linkStatus === "active").length;
}
