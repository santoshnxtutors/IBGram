/**
 * Indexability audit for every written /uae/ page.
 *
 * A page is indexable only if all five hold: it has a rendering route, it is in the sitemap,
 * its metadata says index/follow, no robots rule blocks its path, and its canonical points at
 * itself. The usual failure is not a noindex tag but a sitemap URL with no route behind it,
 * which Search Console files under "Discovered - currently not indexed".
 *
 *   npx tsx scripts/uae-seo/indexability.check.ts
 *
 * Exits non-zero on any finding, so the deploy can gate on it.
 */
import {
  buildUaeSeoMetadata,
  buildUaeSeoSchema,
  getUaeSeoPage,
  getUaeSeoSitemapEntries,
  getUaeStaticParams,
  uaeSeoProgress,
} from "../../src/lib/uae-seo";
import { uaeSeoPagesMeta } from "../../src/lib/uae-seo/pages-data";

const pathOf = (url: string) => url.replace(/^https?:\/\/[^/]+/, "");

function main(): void {
  const { planned, written } = uaeSeoProgress();
  const routes = getUaeStaticParams().map((p) => p.path.join("/"));
  const entries = getUaeSeoSitemapEntries();
  const sitemapPaths = new Set(entries.map((e) => pathOf(String(e.url))));
  const metaByPath = new Map(uaeSeoPagesMeta.map((m) => [m.path, m]));

  const problems: string[] = [];

  // 1. Every route is in the sitemap, and every sitemap URL has a route.
  const routePaths = new Set(routes.map((slug) => `/uae/${slug}/`));
  for (const path of routePaths) if (!sitemapPaths.has(path)) problems.push(`route not in sitemap: ${path}`);
  for (const path of sitemapPaths) if (!routePaths.has(path)) problems.push(`sitemap URL with no route: ${path}`);

  // 2. Metadata says index,follow and the canonical is self-referencing.
  let noFaqSchema = 0;
  for (const slug of routes) {
    const page = getUaeSeoPage(slug);
    if (!page) {
      problems.push(`${slug}: route exists but getUaeSeoPage returned nothing`);
      continue;
    }
    const meta = buildUaeSeoMetadata(page);
    const robots = meta.robots as { index?: boolean; follow?: boolean } | undefined;
    if (robots?.index !== true || robots?.follow !== true) problems.push(`${slug}: robots index=${robots?.index} follow=${robots?.follow}`);

    const canonical = String(meta.alternates?.canonical ?? "");
    if (pathOf(canonical) !== page.path) problems.push(`${slug}: canonical is "${canonical}", expected ${page.path}`);

    if (!Array.isArray(meta.keywords) || meta.keywords.length < 8) problems.push(`${slug}: only ${(meta.keywords as string[] | undefined)?.length ?? 0} meta keywords`);

    // 3. The FAQ graph must carry every FAQ on the page, or the rich result will not validate.
    const graph = (buildUaeSeoSchema(page) as { "@graph": Array<Record<string, unknown>> })["@graph"];
    const faqNode = graph.find((n) => n["@type"] === "FAQPage");
    const inGraph = Array.isArray(faqNode?.mainEntity) ? (faqNode!.mainEntity as unknown[]).length : 0;
    if (inGraph !== page.content.faqs.length) problems.push(`${slug}: FAQPage has ${inGraph} questions, page has ${page.content.faqs.length}`);
    if (inGraph === 0) noFaqSchema += 1;

    // 4. Breadcrumbs must resolve, or the trail renders broken in the SERP.
    const crumbs = graph.find((n) => n["@type"] === "BreadcrumbList");
    const trail = Array.isArray(crumbs?.itemListElement) ? (crumbs!.itemListElement as unknown[]).length : 0;
    if (trail < 3) problems.push(`${slug}: breadcrumb trail has only ${trail} steps`);
  }

  // 5. Every page's parent must exist in the plan, or the "up" link is a dead end.
  for (const slug of routes) {
    const meta = metaByPath.get(`/uae/${slug}/`);
    if (!meta) continue;
    if (meta.parentPath !== "/uae/" && !metaByPath.has(meta.parentPath)) {
      problems.push(`${slug}: parent ${meta.parentPath} is not in the plan`);
    }
  }

  console.log(`\n/uae/ indexability\n`);
  console.log(`  planned pages          : ${planned}`);
  console.log(`  written and routable   : ${written}`);
  console.log(`  sitemap entries        : ${entries.length}`);
  console.log(`  pages with no FAQ schema: ${noFaqSchema}`);
  console.log(`  problems               : ${problems.length}`);
  for (const p of problems.slice(0, 40)) console.log(`    - ${p}`);
  if (problems.length > 40) console.log(`    ... and ${problems.length - 40} more`);

  if (problems.length > 0) process.exitCode = 1;
}

main();
