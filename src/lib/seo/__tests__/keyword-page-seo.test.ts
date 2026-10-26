import { describe, expect, it } from "vitest";
import gurgaonPages from "../../gurgaon-keywords/pages.json";
import indiaPages from "../../india-keywords/pages.json";

/**
 * Invariants for the two keyword page stores.
 *
 * These guard the three faults a live Search Console audit found in them:
 * duplicate titles and descriptions across near-identical pages (Google picked
 * none and ranked the whole cluster 40-90), descriptions long enough to be
 * word-clipped into a sentence fragment, and internalLinks: [] on every page,
 * which left 477 URLs with no inbound link and stuck on "Discovered - currently
 * not indexed".
 */

type Faq = { question: string; answer: string };
type Link = { linkId: string; targetUrl: string; anchorText: string; isCrawlable: boolean; linkStatus: string };
type Page = {
  pageId: string;
  slug: string;
  canonicalUrl: string;
  metaTitle: string;
  metaDescription: string;
  faqs: Faq[];
  internalLinks: Link[];
};

/** Google renders ~160 chars; resolveMetaDescription word-clips past 165. */
const MAX_DESCRIPTION = 165;
const MAX_TITLE = 60;
const MIN_INBOUND = 4;

/** Hub pages that live outside these stores and are verified to return 200. */
const EXTERNAL_HUBS = new Set([
  "/gurgaon/",
  "/igcse/",
  "/tutors/",
  "/ib-tutors/",
  "/programmes/myp/",
  "/ib-tutors/gurugram/",
]);

const stores: Array<{ name: string; pages: Page[]; expected: number }> = [
  { name: "gurgaon-keywords", pages: gurgaonPages as unknown as Page[], expected: 377 },
  { name: "india-keywords", pages: indiaPages as unknown as Page[], expected: 100 },
];

const pathOf = (page: Page) => new URL(page.canonicalUrl).pathname;

describe.each(stores)("$name", ({ pages, expected }) => {
  it("keeps every page in the store", () => {
    // The sitemap is built from this file. Dropping entries silently removes
    // live URLs from Google, so the count is pinned deliberately.
    expect(pages).toHaveLength(expected);
  });

  it("gives every page a unique canonical URL, slug and pageId", () => {
    expect(new Set(pages.map(pathOf)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.slug)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.pageId)).size).toBe(pages.length);
  });

  it("gives every page a unique meta title and description", () => {
    const normalise = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    const titles = pages.map((p) => normalise(p.metaTitle));
    const descriptions = pages.map((p) => normalise(p.metaDescription));
    expect(new Set(titles).size).toBe(pages.length);
    expect(new Set(descriptions).size).toBe(pages.length);
  });

  it("keeps titles and descriptions inside what a result renders", () => {
    const longTitles = pages.filter((p) => p.metaTitle.length > MAX_TITLE).map((p) => p.slug);
    const longDescriptions = pages.filter((p) => p.metaDescription.length > MAX_DESCRIPTION).map((p) => p.slug);
    expect(longTitles).toEqual([]);
    expect(longDescriptions).toEqual([]);
  });

  it("ships no empty FAQ question or answer", () => {
    const broken = pages
      .flatMap((p) => (p.faqs ?? []).map((faq) => ({ slug: p.slug, faq })))
      .filter(({ faq }) => !faq.question?.trim() || !faq.answer?.trim())
      .map(({ slug }) => slug);
    expect(broken).toEqual([]);
    expect(pages.filter((p) => (p.faqs ?? []).length === 0)).toEqual([]);
  });

  it("gives every page outbound internal links", () => {
    expect(pages.filter((p) => (p.internalLinks ?? []).length === 0)).toEqual([]);
  });

  it("points every internal link at a page that exists", () => {
    const live = new Set(pages.map(pathOf));
    const broken = pages
      .flatMap((p) => p.internalLinks.map((link) => ({ from: p.slug, to: new URL(link.targetUrl).pathname })))
      .filter(({ to }) => !live.has(to) && !EXTERNAL_HUBS.has(to));
    expect(broken).toEqual([]);
  });

  it("never links a page to itself", () => {
    const selfLinking = pages
      .filter((p) => p.internalLinks.some((link) => new URL(link.targetUrl).pathname === pathOf(p)))
      .map((p) => p.slug);
    expect(selfLinking).toEqual([]);
  });

  it("renders every link (GeneratedInternalLinks filters on these two fields)", () => {
    const hidden = pages
      .flatMap((p) => p.internalLinks)
      .filter((link) => !link.isCrawlable || link.linkStatus !== "active" || !link.anchorText?.trim());
    expect(hidden).toEqual([]);
  });

  it("uses a unique linkId per link, so React keys do not collide", () => {
    const ids = pages.flatMap((p) => p.internalLinks.map((link) => link.linkId));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("leaves no page without inbound links", () => {
    const inbound = new Map(pages.map((p) => [pathOf(p), 0]));
    for (const page of pages) {
      for (const link of page.internalLinks) {
        const target = new URL(link.targetUrl).pathname;
        if (inbound.has(target)) inbound.set(target, inbound.get(target)! + 1);
      }
    }
    const orphans = [...inbound.entries()].filter(([, count]) => count < MIN_INBOUND).map(([url]) => url);
    expect(orphans).toEqual([]);
  });
});
