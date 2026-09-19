/**
 * Indexability audit for the 100 India keyword pages. Every published page must resolve to a
 * route, carry a unique self-canonical with a trailing slash (the site runs trailingSlash: true,
 * so a canonical without one would 308 and show up in GSC as "Page with redirect"), emit
 * "index, follow" through the real indexing decision the page renders, sit in the sitemap exactly
 * once, stay inside Google's title/description display limits, and be reachable by internal link.
 *
 * Run before asking Search Console to reindex:
 *   npx tsx scripts/india-keywords/index-check.ts
 */
import { readFileSync } from "node:fs";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { getIndiaKeywordDirectory, indiaKeywordSlugs } from "@/lib/india-keywords";
import pagesJson from "@/lib/india-keywords/pages.json";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

const SITE = "https://www.ibgram.com";
const pages = pagesJson as unknown as GeneratedSeoPage[];
const problems: string[] = [];

// Paths the /india/[slug] route will actually emit, from the same export the route reads.
const routed = new Set(indiaKeywordSlugs.map((s) => `/india/${s}/`));
// Every path the /india/ hub directory links to, so no page is an orphan.
const linked = new Set(getIndiaKeywordDirectory().flatMap((g) => g.links.map((l) => l.href)));
// The footer must link the hub itself, or the whole tree is orphaned behind the sitemap.
if (!readFileSync("src/components/layout/Footer.tsx", "utf8").includes('href="/india/"')) {
  problems.push('/india/: no sitewide footer link, so the hub and all 100 pages are orphans');
}

const seenCanonical = new Map<string, string>();
for (const page of pages) {
  const path = page.canonicalUrl.replace(SITE, "");
  if (!path.startsWith("/india/")) problems.push(`${path}: not under /india/`);
  if (!path.endsWith("/")) problems.push(`${path}: no trailing slash, will 308 and report as "Page with redirect"`);
  if (!routed.has(path)) problems.push(`${path}: no route emits this path`);
  if (!linked.has(path)) problems.push(`${path}: not linked from the /india/ directory`);

  const dupe = seenCanonical.get(page.canonicalUrl);
  if (dupe) problems.push(`${path}: canonical collides with ${dupe}`);
  seenCanonical.set(page.canonicalUrl, path);

  // The decision the page actually renders, not a re-derived guess.
  const decision = getGeneratedIndexingDecision(page);
  if (decision.robotsTag !== "index, follow") problems.push(`${path}: robots tag is "${decision.robotsTag}" (${decision.reason})`);
  if (decision.canonicalUrl !== page.canonicalUrl) problems.push(`${path}: rendered canonical ${decision.canonicalUrl} != ${page.canonicalUrl}`);

  if (page.metaTitle.length > 60) problems.push(`${path}: title ${page.metaTitle.length} chars (>60)`);
  if (page.metaDescription.length < 120 || page.metaDescription.length > 160) {
    problems.push(`${path}: description ${page.metaDescription.length} chars (want 120-160)`);
  }
  if (!page.h1?.trim()) problems.push(`${path}: no H1`);

  // Structured data: a rich result that references missing content is a GSC error, so the
  // FAQPage entity must match the FAQs the page renders.
  const graph = (page.schema as { "@graph"?: Array<Record<string, unknown>> })["@graph"] ?? [];
  const types = graph.map((node) => node["@type"]);
  for (const required of ["WebPage", "BreadcrumbList", "FAQPage"]) {
    if (!types.includes(required)) problems.push(`${path}: schema missing ${required}`);
  }
  const faqNode = graph.find((node) => node["@type"] === "FAQPage") as { mainEntity?: unknown[] } | undefined;
  if (faqNode && faqNode.mainEntity?.length !== page.faqs.length) {
    problems.push(`${path}: FAQPage has ${faqNode.mainEntity?.length} questions, page renders ${page.faqs.length}`);
  }
  if (page.quality.wordCount < 4000) problems.push(`${path}: ${page.quality.wordCount} words, thin-content risk`);
}

if (pages.length !== 100) problems.push(`${pages.length} pages published, expected 100`);

const sitemapUrls = getFullPublicSitemapEntries().map((e) => e.url);
const sitemapSet = new Set(sitemapUrls);
if (sitemapSet.size !== sitemapUrls.length) problems.push(`sitemap has ${sitemapUrls.length - sitemapSet.size} duplicate URLs`);
for (const page of pages) {
  if (!sitemapSet.has(page.canonicalUrl)) problems.push(`${page.canonicalUrl.replace(SITE, "")}: missing from sitemap`);
}
if (!sitemapSet.has(`${SITE}/india/`)) problems.push("/india/: hub missing from sitemap");

console.log(`pages ${pages.length} | routes ${routed.size} | directory links ${linked.size} | sitemap ${sitemapUrls.length}`);
if (problems.length === 0) {
  console.log("OK: every page is routed, linked, self-canonical, index-follow and in the sitemap");
} else {
  console.log(`${problems.length} problems:`);
  for (const line of problems.slice(0, 50)) console.log(`  ${line}`);
  process.exitCode = 1;
}
