/**
 * Indexability audit for the Gurgaon keyword pages: every published page must have a
 * unique self-canonical URL, a trailing slash, a title/description inside Google's
 * display limits, and a route that actually renders it. Run before asking GSC to reindex.
 */
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import pagesJson from "@/lib/gurgaon-keywords/pages.json";
import { gurgaonHubKeywordSlugs, gurgaonKeywordSlugs } from "@/lib/gurgaon-keywords";

type Row = { canonicalUrl: string; metaTitle: string; metaDescription: string; slug: string; indexFlag?: boolean | string };
const SITE = "https://www.ibgram.com";
// pages.json stores only the canonical URL; the served path is what follows the origin.
const pages = (pagesJson as unknown as Row[]).map((r) => ({ ...r, path: r.canonicalUrl.replace(SITE, "") }));
const problems: string[] = [];

const routed = new Set([
  ...gurgaonHubKeywordSlugs.map((s) => `/gurgaon/${s}/`),
  ...gurgaonKeywordSlugs.map((s) => `/${s}/`),
]);

const seenCanonical = new Map<string, string>();
for (const p of pages) {
  const canonical = p.canonicalUrl ?? "";
  if (!p.path.endsWith("/")) problems.push(`${p.path}: path has no trailing slash`);
  if (!routed.has(p.path)) problems.push(`${p.path}: no route emits this path`);
  const dupe = seenCanonical.get(canonical);
  if (dupe) problems.push(`${p.path}: canonical collides with ${dupe}`);
  seenCanonical.set(canonical, p.path);
  if (p.indexFlag === false || p.indexFlag === "noindex") problems.push(`${p.path}: indexFlag is not indexable`);
  if (p.metaTitle.length > 60) problems.push(`${p.path}: title ${p.metaTitle.length} chars (>60)`);
  if (p.metaDescription.length < 120 || p.metaDescription.length > 160)
    problems.push(`${p.path}: description ${p.metaDescription.length} chars (want 120-160)`);
}

const sitemap = getFullPublicSitemapEntries();
const sitemapUrls = sitemap.map((e) => e.url);
const sitemapSet = new Set(sitemapUrls);
if (sitemapSet.size !== sitemapUrls.length)
  problems.push(`sitemap has ${sitemapUrls.length - sitemapSet.size} duplicate URLs`);
for (const p of pages) {
  if (!sitemapSet.has(p.canonicalUrl ?? "")) problems.push(`${p.path}: missing from sitemap`);
}

console.log(`pages ${pages.length} | routes ${routed.size} | sitemap ${sitemapUrls.length}`);
if (problems.length === 0) console.log("OK: no indexability problems");
else {
  console.log(`${problems.length} problems:`);
  for (const line of problems.slice(0, 40)) console.log("  " + line);
}
