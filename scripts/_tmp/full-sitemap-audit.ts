import { PrismaClient } from "@prisma/client";
import { getFullPublicSitemapEntries } from "@/lib/seo/sitemap";
import { getGeneratedPageByPath } from "@/lib/generated-pages/store";
import { getGeneratedIndexingDecision } from "@/lib/seo/indexing";
import { normalizePath } from "@/lib/seo/canonical";
import { isPrivateOrUtilityPath } from "@/lib/seo/indexing-policy";
import { writeFileSync } from "node:fs";

const p = new PrismaClient();
(async () => {
  const code = getFullPublicSitemapEntries().map((e) => normalizePath(e.url));

  const blog = (await p.blogPost.findMany({ where: { status: "published", indexFlag: { not: "noindex" } }, select: { slug: true } }).catch(() => []))
    .map((b) => normalizePath(`/blog/${b.slug}/`));
  const reach = (await p.tutorReachPage.findMany({ where: { status: "published" }, select: { slug: true } }).catch(() => []))
    .map((t) => normalizePath(`/tutor/${t.slug}/`));
  const profiles = (await p.tutor.findMany({ select: { slug: true } }).catch(() => []))
    .map((t) => normalizePath(`/tutor-profile/${t.slug}/`));
  const dbPages = (await p.generatedPage.findMany({
    where: { status: "published", indexFlag: "index", sitemapIncluded: true, contentWordCount: { gte: 800 }, canonicalTarget: null },
    select: { fullPath: true },
  }).catch(() => [])).map((r) => normalizePath(r.fullPath));

  const all = new Set([...code, ...blog, ...reach, ...profiles, ...dbPages]);
  console.log(`SOURCES  code=${code.length} blog=${blog.length} tutorReach=${reach.length} tutorProfiles=${profiles.length} dbPages=${dbPages.length}`);
  console.log(`TOTAL UNIQUE SITEMAP URLS: ${all.size}\n`);

  const priv = [...all].filter(isPrivateOrUtilityPath);
  let storeIndexable = 0, storeNoindex = 0, noStorePage = 0;
  const noStore: string[] = [];
  for (const path of all) {
    const g = getGeneratedPageByPath(path);
    if (!g) { noStorePage++; noStore.push(path); continue; }
    if (getGeneratedIndexingDecision(g).index) storeIndexable++; else storeNoindex++;
  }
  console.log(`robots-disallowed in sitemap : ${priv.length}`);
  console.log(`rich store page, indexable   : ${storeIndexable}`);
  console.log(`store page but NOINDEX       : ${storeNoindex}`);
  console.log(`no store page (React/DB/blog): ${noStorePage}`);
  writeFileSync("scripts/_tmp/no-store-urls.json", JSON.stringify(noStore.sort(), null, 1));

  const byPrefix: Record<string, number> = {};
  for (const u of noStore) { const s = u.split("/").filter(Boolean); byPrefix[`/${s[0] ?? ""}`] = (byPrefix[`/${s[0] ?? ""}`] ?? 0) + 1; }
  console.log("\nno-store URLs by section:");
  for (const [k, v] of Object.entries(byPrefix).sort((a, b) => b[1] - a[1])) console.log(`   ${String(v).padStart(4)}  ${k}`);
  await p.$disconnect();
})();
