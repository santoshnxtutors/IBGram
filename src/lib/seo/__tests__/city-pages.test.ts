import { describe, expect, it } from "vitest";
import { getCitySeoPageBySlug, getLiveCitySeoPages } from "../city-pages";
import { countWords, getVisibleCityContentText } from "../content-quality";
import { buildCityInternalLinks, groupInternalLinksByContext } from "../internal-links";
import { getIndexingDecision, getNoindexSubpageDecision } from "../indexing";
import { IGCSE_PAGES_HUB } from "../igcse-pages";
import { buildCityMetadata } from "../metadata";
import { buildCitySchema, buildIgcsePagesHubSchema } from "../schema";
import { getIndexableCitySitemapEntries, getSeoSitemapEntries } from "../sitemap";
import { absoluteUrl, normalizeSlug } from "../slug-utils";

describe("city SEO slug lookup", () => {
  it("normalizes city slugs and finds seeded pages", () => {
    expect(normalizeSlug(" Golf Course Road ")).toBe("golf-course-road");
    expect(absoluteUrl("/globe.svg")).toBe("https://ibgram.com/globe.svg");
    ["gurugram", "delhi", "noida", "mumbai", "bangalore"].forEach((slug) => {
      expect(getCitySeoPageBySlug(slug)?.citySlug).toBe(slug);
    });
    expect(getCitySeoPageBySlug("Gurugram")?.cityName).toBe("Gurugram");
    expect(getCitySeoPageBySlug("new-city")).toBeUndefined();
  });
});

describe("city SEO internal links", () => {
  it("builds crawlable city links with descriptive anchors", () => {
    const page = getCitySeoPageBySlug("gurugram");
    expect(page).toBeDefined();

    const links = buildCityInternalLinks(page!);
    const grouped = groupInternalLinksByContext(links);

    expect(links.length).toBeGreaterThanOrEqual(14);
    expect(links.every((link) => link.isCrawlable && link.followStatus === "follow" && link.targetUrl.startsWith("/"))).toBe(true);
    expect(links.every((link) => !/click here|learn more|read more/i.test(link.anchorText))).toBe(true);
    expect(grouped["IB programmes"].some((link) => link.anchorText === "IB DP tutors in Gurugram")).toBe(true);
    expect(grouped["IB subjects"].some((link) => link.targetUrl === "/ib-tutors/gurugram/math-aa-hl/")).toBe(true);
    expect(grouped["Platform links"].some((link) => link.targetUrl === "/ib-tutors/")).toBe(true);
  });
});

describe("city SEO indexing", () => {
  it("indexes strong city pages and noindexes future subpages", () => {
    const page = getCitySeoPageBySlug("gurugram");
    expect(page).toBeDefined();

    const decision = getIndexingDecision(page!);
    expect(decision.index).toBe(true);
    expect(decision.robotsTag).toBe("index, follow");

    const subpageDecision = getNoindexSubpageDecision(page!.canonicalUrl);
    expect(subpageDecision.index).toBe(false);
    expect(subpageDecision.follow).toBe(true);
    expect(subpageDecision.canonicalUrl).toBe(page!.canonicalUrl);
  });
});

describe("city SEO metadata", () => {
  it("generates canonical metadata and robots from indexing decision", () => {
    const page = getCitySeoPageBySlug("delhi");
    expect(page).toBeDefined();

    const metadata = buildCityMetadata(page!, getIndexingDecision(page!));
    expect(metadata.title).toBe("IB Tutors in Delhi for PYP, MYP & DP");
    expect(metadata.alternates?.canonical).toBe("https://ibgram.com/ib-tutors/delhi/");
    expect(metadata.robots).toMatchObject({ index: true, follow: true });
  });

  it("keeps city meta titles and descriptions unique with canonical URLs", () => {
    const pages = getLiveCitySeoPages();
    const titles = new Set(pages.map((page) => page.metaTitle));
    const descriptions = new Set(pages.map((page) => page.metaDescription));

    expect(titles.size).toBe(pages.length);
    expect(descriptions.size).toBe(pages.length);

    pages.forEach((page) => {
      const metadata = buildCityMetadata(page, getIndexingDecision(page));
      expect(metadata.alternates?.canonical).toBe(page.canonicalUrl);
      expect(page.canonicalUrl).toMatch(/^https:\/\/ibgram\.com\/ib-tutors\/[a-z-]+\/$/);
      expect(page.ogImage).toMatch(/^https:\/\/ibgram\.com\/images\/ib-gram-city-og\.svg$/);
    });
  });
});

describe("city SEO schema", () => {
  it("includes webpage, breadcrumbs, service and FAQ graph nodes", () => {
    const page = getCitySeoPageBySlug("mumbai");
    expect(page).toBeDefined();

    const schema = buildCitySchema(page!);
    const graph = schema["@graph"];
    expect(Array.isArray(graph)).toBe(true);
    expect((graph as Array<Record<string, unknown>>).map((item) => item["@type"])).toEqual(
      expect.arrayContaining(["WebPage", "BreadcrumbList", "EducationalOrganization", "Service", "FAQPage"]),
    );
  });

  it("does not emit undefined JSON-LD values and matches visible FAQ count", () => {
    getLiveCitySeoPages().forEach((page) => {
      const schema = buildCitySchema(page);
      const graph = schema["@graph"] as Array<Record<string, unknown>>;
      const faqNode = graph.find((item) => item["@type"] === "FAQPage") as
        | { mainEntity: Array<Record<string, unknown>> }
        | undefined;

      expect(hasUndefinedValue(schema)).toBe(false);
      expect(JSON.stringify(schema)).not.toContain("undefined");
      expect(faqNode?.mainEntity).toHaveLength(page.cityFaqs.length);
      expect(schema).toMatchObject({ "@context": "https://schema.org" });
    });
  });
});

describe("city SEO sitemap", () => {
  it("emits the hub and only indexable city pages", () => {
    const sitemap = getSeoSitemapEntries();
    const citySitemap = getIndexableCitySitemapEntries();
    const liveCities = getLiveCitySeoPages();

    expect(citySitemap).toHaveLength(liveCities.length);
    expect(sitemap.map((entry) => entry.url)).toContain("https://ibgram.com/ib-tutors/");
    expect(sitemap.map((entry) => entry.url)).toContain("https://ibgram.com/igcse-pages/");
    expect(sitemap.map((entry) => entry.url)).toContain("https://ibgram.com/ib-tutors/gurugram/");
    expect(sitemap.map((entry) => entry.url)).toContain("https://ibgram.com/ib-tutors/bangalore/");
    expect(sitemap.some((entry) => entry.url.includes("/areas/"))).toBe(false);
    expect(sitemap.some((entry) => entry.url.includes("/schools/"))).toBe(false);
    expect(sitemap.some((entry) => entry.url.includes("/math-aa-hl/"))).toBe(false);
  });
});

describe("IGCSE pages hub SEO", () => {
  it("uses a canonical URL, useful keywords and valid JSON-LD", () => {
    const schema = buildIgcsePagesHubSchema(IGCSE_PAGES_HUB);
    const graph = schema["@graph"] as Array<Record<string, unknown>>;
    const faqNode = graph.find((item) => item["@type"] === "FAQPage") as
      | { mainEntity: Array<Record<string, unknown>> }
      | undefined;

    expect(IGCSE_PAGES_HUB.canonicalUrl).toBe("https://ibgram.com/igcse-pages/");
    expect(IGCSE_PAGES_HUB.keywords).toEqual(expect.arrayContaining(["IGCSE tutors", "Cambridge IGCSE tutors"]));
    expect(IGCSE_PAGES_HUB.links.every((link) => link.href.startsWith("/") && !/click here/i.test(link.anchorText))).toBe(true);
    expect(graph.map((item) => item["@type"])).toEqual(
      expect.arrayContaining(["WebPage", "BreadcrumbList", "EducationalOrganization", "Service", "FAQPage"]),
    );
    expect(faqNode?.mainEntity).toHaveLength(IGCSE_PAGES_HUB.faqs.length);
    expect(hasUndefinedValue(schema)).toBe(false);
    expect(JSON.stringify(schema)).not.toContain("undefined");
  });
});

describe("city SEO visible content quality", () => {
  it("keeps every seeded city substantial without becoming bloated", () => {
    getLiveCitySeoPages().forEach((page) => {
      const wordCount = countWords(getVisibleCityContentText(page));

      expect(wordCount, `${page.citySlug} visible content word count`).toBeGreaterThanOrEqual(1600);
      expect(wordCount, `${page.citySlug} visible content word count`).toBeLessThanOrEqual(2200);
      expect(page.cityFaqs.length).toBeGreaterThanOrEqual(6);
      expect(page.schoolDisclaimer).toContain("not officially affiliated");
      expect(page.verifiedTutorCountCity).toBe(0);
    });
  });
});

function hasUndefinedValue(value: unknown): boolean {
  if (value === undefined) return true;
  if (Array.isArray(value)) return value.some(hasUndefinedValue);
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).some(hasUndefinedValue);
  }

  return false;
}
