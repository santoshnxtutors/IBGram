import { describe, expect, it } from "vitest";
import { getGeneratedPageForRoute } from "@/lib/generated-pages/routes";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { getVisibleGeneratedContentText } from "@/lib/page-generator/content-normalizer";
import { countWords } from "@/lib/page-generator/quality-score";
import { getCitySeoPageBySlug } from "@/lib/seo/city-pages";
import { getIndexableGeneratedSitemapEntries } from "@/lib/seo/sitemap";
import { allTutors } from "@/lib/tutor-data";
import { getTutorsForSociety } from "@/lib/tutors/tutor-location-matching";
import {
  getGurgaonIndexablePlaces,
  getGurgaonLocalPagesByType,
  getGurgaonLocalPlace,
  gurgaonGeneratedSeoPages,
} from "../index";

describe("Gurgaon local SEO generated pages", () => {
  it("resolves Gurugram area, sector and society routes through the existing generated renderer store", () => {
    expect(getGeneratedPageForRoute("/ib-tutors/gurugram/areas/golf-course-road/", ["area"])?.pageId).toContain("GURGAON_AREA");
    expect(getGeneratedPageForRoute("/ib-tutors/gurugram/sectors/sector-56/", ["sector"])?.pageId).toContain("GURGAON_SECTOR");
    expect(getGeneratedPageForRoute("/ib-tutors/gurugram/societies/the-aralias/", ["society"])?.pageId).toContain("GURGAON_SOCIETY");
  });

  it("keeps unknown Gurugram localities out of the generated route store", () => {
    expect(getGeneratedPageForRoute("/ib-tutors/gurugram/areas/unknown-lane/", ["area"])).toBeUndefined();
    expect(getGurgaonLocalPlace("sector", "sector-999")).toBeUndefined();
  });

  it("adds all requested Gurugram local data groups", () => {
    expect(getGurgaonLocalPagesByType("area")).toHaveLength(20);
    expect(getGurgaonLocalPagesByType("sector")).toHaveLength(77);
    expect(getGurgaonLocalPagesByType("society")).toHaveLength(71);
    expect(getGurgaonLocalPlace("area", "golf-course-extension-road")?.indexFlag).toBe("index");
    expect(getGurgaonLocalPlace("society", "m3m-golf-estate")?.indexFlag).toBe("index");
    expect(gurgaonGeneratedSeoPages.every((page) => page.indexFlag === "index")).toBe(true);
    expect(gurgaonGeneratedSeoPages.every((page) => page.quality.recommendedIndexFlag === "index")).toBe(true);
  });

  it("has unique metadata, canonical URLs, FAQ data and internal links for indexable pages", () => {
    const indexablePages = gurgaonGeneratedSeoPages.filter((page) => page.indexFlag === "index");
    const titles = new Set(indexablePages.map((page) => page.metaTitle));
    const descriptions = new Set(indexablePages.map((page) => page.metaDescription));

    expect(titles.size).toBe(indexablePages.length);
    expect(descriptions.size).toBe(indexablePages.length);

    indexablePages.forEach((page) => {
      const metadata = buildGeneratedMetadata(page);
      expect(metadata.alternates?.canonical).toBe(page.canonicalUrl);
      expect(page.faqs.length).toBeGreaterThanOrEqual(6);
      expect(page.internalLinks.length).toBeGreaterThanOrEqual(page.pageType === "society" ? 6 : 8);
      expect(page.internalLinks.every((link) => link.isCrawlable && link.targetUrl.startsWith("/") && !/click here/i.test(link.anchorText))).toBe(true);
      expect(page.schema).toMatchObject({ "@context": "https://schema.org" });
      expect(JSON.stringify(page.schema)).toContain("FAQPage");
    });
  });

  it("keeps visible content depth aligned with page type before indexing", () => {
    gurgaonGeneratedSeoPages.filter((page) => page.indexFlag === "index").forEach((page) => {
      const wordCount = countWords(getVisibleGeneratedContentText(page));
      if (page.pageType === "area") expect(wordCount, page.slug).toBeGreaterThanOrEqual(1600);
      if (page.pageType === "sector") expect(wordCount, page.slug).toBeGreaterThanOrEqual(1200);
      if (page.pageType === "society") expect(wordCount, page.slug).toBeGreaterThanOrEqual(1000);
      expect(wordCount, page.slug).toBeLessThanOrEqual(2200);
    });
  });

  it("uses safe society language and avoids false affiliation claims", () => {
    const societyPages = gurgaonGeneratedSeoPages.filter((page) => page.pageType === "society");

    societyPages.forEach((page) => {
      const visible = getVisibleGeneratedContentText(page);
      expect(page.schoolDisclaimer).toContain("not officially affiliated");
      expect(visible).toContain("families in and around this residential community");
      expect(visible).not.toMatch(/official tutor partner|100% result guarantee|guaranteed best|available immediately/i);
    });
  });

  it("adds every Gurugram local page to the generated sitemap", () => {
    const sitemapUrls = new Set(getIndexableGeneratedSitemapEntries().map((entry) => entry.url));

    getGurgaonIndexablePlaces().forEach((place) => {
      const page = gurgaonGeneratedSeoPages.find((item) => item.pageType === place.pageType && item.slug === place.slug);
      expect(page).toBeDefined();
      expect(sitemapUrls.has(page!.canonicalUrl)).toBe(true);
    });

    expect(getGurgaonIndexablePlaces()).toHaveLength(gurgaonGeneratedSeoPages.length);
  });

  it("keeps existing city pages live while adding hyperlocal pages", () => {
    ["gurugram", "delhi", "noida", "mumbai", "bangalore"].forEach((slug) => {
      expect(getCitySeoPageBySlug(slug)?.status).toBe("live");
    });
  });

  it("ranks exact society tutors before broader Gurugram matches when society inventory exists", () => {
    const result = getTutorsForSociety("gurugram", "dlf-park-place", { curriculum: "IB", includeOnlineFallback: true, tutors: allTutors });

    expect(result.matchSummary.exactLocalMatches).toBeGreaterThan(0);
    expect(result.tutors[0].availableSocietySlugs).toContain("dlf-park-place");
  });
});
