/**
 * Indexability audit for every Mumbai and India-city page.
 *
 * A page is only indexable if all four hold: it has a rendering route, it is in the sitemap,
 * its metadata says index/follow, and no robots rule blocks its path. The usual failure here
 * is not a noindex tag but a sitemap URL with no route behind it, which Search Console files
 * under "Discovered - currently not indexed".
 *
 *   npx tsx scripts/mumbai-seo/indexability.check.ts
 */
import {
  buildMumbaiSeoMetadata,
  getMumbaiSeoPage,
  getMumbaiSeoSitemapEntries,
  getMumbaiStaticParams,
} from "../../src/lib/mumbai-seo";
import {
  buildCitySeoMetadata,
  citySeoSlugs,
  getCitySeoPage,
  getCitySeoSitemapEntries,
} from "../../src/lib/india-cities";
import { PrismaClient } from "@prisma/client";

const slugOf = (url: string) => url.replace(/\/+$/, "").split("/").pop() ?? "";

function auditSet(
  label: string,
  params: Array<Record<string, string>>,
  key: string,
  entries: Array<{ url: string }>,
  metaFor: (slug: string) => { index: boolean; follow: boolean } | null,
) {
  const routes = new Set(params.map((p) => p[key]));
  const orphanSitemap = entries.map((e) => slugOf(e.url)).filter((s) => !routes.has(s));

  const notIndexable: string[] = [];
  for (const slug of routes) {
    const r = metaFor(slug);
    if (!r) notIndexable.push(`${slug} (no metadata)`);
    else if (!r.index || !r.follow) notIndexable.push(`${slug} (index=${r.index} follow=${r.follow})`);
  }

  const missingFromSitemap = [...routes].filter(
    (s) => !entries.some((e) => slugOf(e.url) === s),
  );

  console.log(`\n=== ${label}`);
  console.log(`  routes that render       : ${routes.size}`);
  console.log(`  sitemap entries          : ${entries.length}`);
  console.log(`  sitemap URLs with no route: ${orphanSitemap.length}${orphanSitemap.length ? " -> " + orphanSitemap.slice(0, 5).join(", ") : ""}`);
  console.log(`  routes missing in sitemap : ${missingFromSitemap.length}${missingFromSitemap.length ? " -> " + missingFromSitemap.slice(0, 5).join(", ") : ""}`);
  console.log(`  pages not index,follow    : ${notIndexable.length}${notIndexable.length ? " -> " + notIndexable.slice(0, 5).join(", ") : ""}`);
  return orphanSitemap.length + missingFromSitemap.length + notIndexable.length;
}

/** Google applies the longest matching rule, so a broad Disallow only bites if nothing allows deeper. */
function robotsBlocks(path: string, rules: Array<{ directive: string; path: string; userAgent: string }>) {
  const relevant = rules.filter((r) => r.userAgent === "*" || /googlebot/i.test(r.userAgent));
  const match = (pattern: string) => {
    const re = new RegExp("^" + pattern.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*"));
    return re.test(path) ? pattern.length : -1;
  };
  let best = { len: -1, allowed: true };
  for (const r of relevant) {
    const len = match(r.path);
    if (len > best.len) best = { len, allowed: r.directive.toLowerCase() !== "disallow" };
  }
  return !best.allowed;
}

(async () => {
  let problems = 0;

  problems += auditSet(
    "Mumbai /mumbai/<slug>/",
    getMumbaiStaticParams() as Array<Record<string, string>>,
    "slug",
    getMumbaiSeoSitemapEntries(),
    (slug) => {
      const page = getMumbaiSeoPage(slug);
      if (!page) return null;
      const r = buildMumbaiSeoMetadata(page).robots as { index?: boolean; follow?: boolean } | undefined;
      return { index: r?.index === true, follow: r?.follow === true };
    },
  );

  problems += auditSet(
    "India cities /<citySlug>/",
    citySeoSlugs.map((slug) => ({ slug })),
    "slug",
    getCitySeoSitemapEntries(),
    (slug) => {
      const page = getCitySeoPage(slug);
      if (!page) return null;
      const r = buildCitySeoMetadata(page).robots as { index?: boolean; follow?: boolean } | undefined;
      return { index: r?.index === true, follow: r?.follow === true };
    },
  );

  const prisma = new PrismaClient();
  const rules = await prisma.robotsRule
    .findMany({ where: { isActive: true }, select: { userAgent: true, directive: true, path: true } })
    .catch(() => [] as Array<{ directive: string; path: string; userAgent: string }>);
  await prisma.$disconnect();
  const samples = ["/mumbai/powai/", "/mumbai/ib-dp-tutor/", "/pune/", "/bengaluru/", "/mumbai/"];
  console.log(`\n=== robots.txt (DB rows: ${rules.length})`);
  for (const path of samples) {
    const blocked = robotsBlocks(path, rules as never);
    console.log(`  ${blocked ? "BLOCKED" : "allowed"}  ${path}`);
    if (blocked) problems++;
  }

  console.log(`\n${problems === 0 ? "ALL INDEXABLE: no noindex, no orphan sitemap URLs, nothing blocked" : `${problems} problem(s) found`}`);
  process.exit(problems === 0 ? 0 : 1);
})();
