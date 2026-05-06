import type { MetadataRoute } from "next";
import { getIndexingDecision } from "./indexing";
import { getLiveCitySeoPages } from "./city-pages";
import { getLiveIgcseCityPages } from "./igcse-city-pages";
import { IGCSE_PAGES_HUB } from "./igcse-pages";
import { absoluteUrl } from "./slug-utils";
import { getSitemapGeneratedPages } from "@/lib/generated-pages/store";
import { generatedPageToSitemapEntry } from "./sitemap-utils";

export function getSeoSitemapEntries(): MetadataRoute.Sitemap {
  return [
    getIbTutorsHubSitemapEntry(),
    getIgcsePagesHubSitemapEntry(),
    ...getIndexableCitySitemapEntries(),
    ...getIndexableIgcseCitySitemapEntries(),
    ...getIndexableGeneratedSitemapEntries(),
  ];
}

export function getIbTutorsHubSitemapEntry(): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl("/ib-tutors/"),
    lastModified: "2026-05-04",
    changeFrequency: "weekly",
    priority: 0.88,
  };
}

export function getIgcsePagesHubSitemapEntry(): MetadataRoute.Sitemap[number] {
  return {
    url: IGCSE_PAGES_HUB.canonicalUrl,
    lastModified: IGCSE_PAGES_HUB.lastUpdated,
    changeFrequency: "weekly",
    priority: 0.86,
  };
}

export function getIndexableCitySitemapEntries(): MetadataRoute.Sitemap {
  return getLiveCitySeoPages()
    .filter((page) => getIndexingDecision(page).index)
    .map((page) => ({
      url: page.canonicalUrl,
      lastModified: page.lastUpdated,
      changeFrequency: "weekly",
      priority: Number((page.priorityScore / 10).toFixed(2)),
    }));
}

export function getIndexableIgcseCitySitemapEntries(): MetadataRoute.Sitemap {
  return getLiveIgcseCityPages()
    .filter((page) => page.indexFlag === "index")
    .map((page) => ({
      url: page.canonicalUrl,
      lastModified: page.lastUpdated,
      changeFrequency: "weekly",
      priority: page.priorityScore,
    }));
}

export function getIndexableGeneratedSitemapEntries(): MetadataRoute.Sitemap {
  return getSitemapGeneratedPages().map(generatedPageToSitemapEntry);
}
