import { describe, expect, it } from "vitest";
import { validateGeneratorInput, validateGeneratedSeoResult } from "../validators";
import { normalizeGeneratedSlug, buildGeneratedCanonicalPath } from "../slug";
import { buildInternalLinksForInput } from "../internal-link-engine";
import { scoreGeneratedPage } from "../quality-score";
import { resolveGeneratedPageStatus, resolveIndexFlag } from "../page-status";
import { buildGeneratedPageSchema } from "../schema-generator";
import { buildGeneratedMetadata } from "../metadata-generator";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { getIndexableGeneratedSitemapEntries } from "@/lib/seo/sitemap";
import type { GeneratedSeoPage, SeoGeneratorInput } from "../types";

const input: SeoGeneratorInput = {
  pageType: "sector",
  cityName: "Gurugram",
  citySlug: "gurugram",
  parentLocation: "Gurugram",
  microLocationName: "Sector 56",
  microLocationType: "sector",
  primaryKeyword: "IB tutors in Sector 56 Gurugram",
  secondaryKeywords: ["IB home tutors Sector 56"],
  serviceFocus: "IB tutors",
  programmes: ["PYP", "MYP", "DP"],
  subjects: ["Math AA", "Math AI", "Physics", "Chemistry", "Economics", "English"],
  tutoringModes: ["home", "online", "hybrid"],
  premiumAreas: ["Golf Course Road", "DLF Phase 5"],
  nearbyAreas: ["Sector 55", "Sector 57", "Sushant Lok"],
  nearbyCities: ["Delhi"],
  schoolsMentioned: ["Scottish High International School"],
  ctaFocus: "Book a free academic consultation",
  publishMode: "publish",
  indexPreference: "auto",
};

describe("generated page slugs and urls", () => {
  it("normalizes city, sector and phase slugs", () => {
    expect(normalizeGeneratedSlug(" Sector 56 ")).toBe("sector-56");
    expect(normalizeGeneratedSlug("DLF Phase 5")).toBe("dlf-phase-5");
    expect(buildGeneratedCanonicalPath({ pageType: "sector", citySlug: "Gurugram", slug: "Sector 56" })).toBe(
      "/ib-tutors/gurugram/sectors/sector-56/",
    );
    expect(buildGeneratedCanonicalPath({ pageType: "subject", citySlug: "Gurugram", slug: "math-aa-hl" })).toBe(
      "/ib-tutors/gurugram/math-aa-hl/",
    );
  });
});

describe("generated input and output validation", () => {
  it("validates admin input and generated JSON", () => {
    const normalized = validateGeneratorInput(input);
    expect(normalized.citySlug).toBe("gurugram");

    const page = makePage();
    expect(validateGeneratedSeoResult({ page }).page.pageId).toBe(page.pageId);
  });
});

describe("generated internal links", () => {
  it("creates crawlable descriptive links without click-here anchors", () => {
    const links = buildInternalLinksForInput(input, "IBG_TEST");
    expect(links.length).toBeGreaterThanOrEqual(8);
    expect(links.every((link) => link.isCrawlable && link.followStatus === "follow" && link.linkStatus === "active")).toBe(true);
    expect(links.every((link) => !/click here/i.test(link.anchorText))).toBe(true);
    expect(links.some((link) => link.targetUrl === "/ib-tutors/gurugram/")).toBe(true);
  });
});

describe("generated quality and indexing", () => {
  it("scores thin content as noindex and keeps publish blocked", () => {
    const page = makePage();
    const quality = scoreGeneratedPage(page, input);
    const status = resolveGeneratedPageStatus({ publishMode: "publish", quality, validationPassed: true });
    const indexFlag = resolveIndexFlag({ preference: "auto", quality, status });

    expect(quality.recommendedIndexFlag).toBe("noindex");
    expect(status).not.toBe("published");
    expect(indexFlag).toBe("noindex");
  });

  it("builds metadata, schema and indexing decisions", () => {
    const page = makePage();
    const metadata = buildGeneratedMetadata(page);
    const schema = buildGeneratedPageSchema(page);
    const decision = getGeneratedIndexingDecision(page);

    expect(metadata.alternates?.canonical).toBe(page.canonicalTarget);
    expect(schema["@context"]).toBe("https://schema.org");
    expect(JSON.stringify(schema)).not.toContain("undefined");
    expect(decision.index).toBe(false);
  });
});

describe("generated sitemap entries", () => {
  it("includes published Gurugram local generated pages in sitemap", () => {
    const urls = getIndexableGeneratedSitemapEntries().map((entry) => entry.url);
    expect(urls).toContain("https://ibgram.com/ib-tutors/gurugram/sectors/sector-56/");
    expect(urls).toContain("https://ibgram.com/ib-tutors/gurugram/sectors/sector-29/");
  });
});

function makePage(): GeneratedSeoPage {
  const internalLinks = buildInternalLinksForInput(input, "IBG_TEST");
  return {
    pageId: "IBG_TEST",
    pageType: "sector",
    status: "review",
    indexFlag: "noindex",
    canonicalUrl: "https://ibgram.com/ib-tutors/gurugram/sectors/sector-56/",
    canonicalTarget: "https://ibgram.com/ib-tutors/gurugram/",
    slug: "sector-56",
    cityName: "Gurugram",
    citySlug: "gurugram",
    parentLocation: "Gurugram",
    microLocationName: "Sector 56",
    microLocationType: "sector",
    primaryKeyword: input.primaryKeyword,
    secondaryKeywords: input.secondaryKeywords,
    serviceFocus: input.serviceFocus,
    programmes: input.programmes,
    subjects: input.subjects,
    tutoringModes: input.tutoringModes,
    premiumAreas: input.premiumAreas,
    nearbyAreas: input.nearbyAreas,
    nearbyCities: input.nearbyCities,
    schoolsMentioned: input.schoolsMentioned,
    metaTitle: "IB Tutors in Sector 56 Gurugram | IB Gram",
    metaDescription: "Find IB tutors in Sector 56 Gurugram for PYP, MYP and DP students with home, online and hybrid support.",
    ogTitle: "IB Tutors in Sector 56 Gurugram | IB Gram",
    ogDescription: "IB tutors in Sector 56 Gurugram with verified tutor matching.",
    ogImage: "https://ibgram.com/images/ib-gram-city-og.svg",
    twitterTitle: "IB Tutors in Sector 56 Gurugram | IB Gram",
    twitterDescription: "IB tutors in Sector 56 Gurugram with verified tutor matching.",
    breadcrumbTitle: "IB Tutors in Sector 56",
    h1: "IB Tutors in Sector 56 Gurugram",
    heroTitle: "Find IB Tutors in Sector 56",
    heroSubtitle: "Sector 56 IB tutor matching for PYP, MYP and DP families.",
    introSummary: "Sector 56 families may need practical home, online and hybrid tutoring around Gurugram school timelines.",
    contentBlocks: [
      { type: "intro", heading: "Local context", body: "Sector 56 Gurugram families need IB tutoring near Golf Course Road and Sector 57.", items: [] },
    ],
    faqs: [
      { question: "Is home tutoring available?", answer: "It may be available depending on tutor travel and timing." },
    ],
    internalLinks,
    relatedPageSuggestions: [],
    schema: {},
    quality: {
      wordCount: 0,
      uniquenessScore: 0,
      localDepthScore: 0,
      seoScore: 0,
      readabilityScore: 0,
      internalLinkScore: 0,
      duplicateRisk: "medium",
      recommendedIndexFlag: "noindex",
      warnings: [],
    },
    finalCta: "Book a free academic consultation",
    lastUpdated: "2026-05-05",
  };
}
