import { getBlogSitemapEntries } from "@/lib/cms/blog";
import { listPublishedDbSitemapEntries } from "@/lib/cms/generated-pages-db";
import { getPublicTutorProfileSitemapEntries } from "@/lib/cms/public-tutors";
import { getTutorReachSitemapEntries } from "@/lib/cms/tutor-reach";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { shouldIncludeInSitemap, normalizeCanonicalUrl } from "@/lib/seo/sitemap-policy";
import { absoluteUrl, normalizeSlug } from "@/lib/seo/slug-utils";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { normalizePath } from "@/lib/seo/canonical";
import { writeFileSync } from "node:fs";

(async () => {
  const [code, blog, reach, profiles, dbPages] = await Promise.all([
    Promise.resolve(getFullPublicSitemapEntries()),
    getBlogSitemapEntries().catch(() => []),
    getTutorReachSitemapEntries().catch(() => []),
    getPublicTutorProfileSitemapEntries().catch(() => []),
    listPublishedDbSitemapEntries().catch(() => []),
  ]);

  // Rebuild exactly as src/app/sitemap.ts does, including the shouldIncludeInSitemap gate.
  const byUrl = new Map<string, string>();
  const add = (url: string) => {
    if (!shouldIncludeInSitemap({ url })) return;
    byUrl.set(normalizeCanonicalUrl(url), url);
  };
  code.forEach((e) => add(e.url));
  blog.forEach((b: { slug: string }) => add(absoluteUrl(`/blog/${b.slug}/`)));
  reach.forEach((r: { slug: string }) => add(absoluteUrl(`/tutor/${r.slug}/`)));
  profiles.forEach((t: { slug: string }) => add(absoluteUrl(`/tutor-profile/${t.slug}/`)));
  dbPages.forEach((p: { canonicalUrl?: string | null; fullPath: string }) => add(normalizeCanonicalUrl(p.canonicalUrl ?? p.fullPath)));

  console.log(`SOURCES  code=${code.length} blog=${blog.length} tutorReach=${reach.length} tutorProfiles=${profiles.length} dbPages=${dbPages.length}`);
  console.log(`TRUE SITEMAP SIZE (post-deploy): ${byUrl.size}\n`);

  const paths = [...byUrl.keys()].map(normalizePath);
  const unsafe = paths.filter((p) => /[<>:"\|?*]|\s/.test(p));
  console.log(`URLs with unsafe characters : ${unsafe.length}`, unsafe.slice(0, 4));

  let idx = 0, noidx = 0; const other: string[] = [];
  for (const p of paths) {
    const g = getGeneratedPageByPath(p);
    if (!g) { other.push(p); continue; }
    if (getGeneratedIndexingDecision(g).index) idx++; else noidx++;
  }
  console.log(`pipeline pages, indexable   : ${idx}`);
  console.log(`pipeline pages, NOINDEX     : ${noidx}`);
  console.log(`served by other systems     : ${other.length}`);
  writeFileSync("scripts/_tmp/true-other.json", JSON.stringify(other.sort(), null, 1));
  void normalizeSlug;
})();
