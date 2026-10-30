/**
 * Audits internal linking across the live /uae/ pages.
 *
 *   npx tsx scripts/uae-seo/links.check.ts
 *
 * A page with no inbound internal link is an orphan: Google finds it in the sitemap, sees
 * nothing pointing at it, and files it under "Discovered - currently not indexed". That is the
 * bucket earlier batches on this site landed in, so it is worth measuring rather than assuming.
 *
 * Reports, per page: outbound links (up, down, sideways) and inbound links from other /uae/
 * pages. Flags anything with zero inbound or thin outbound.
 */
import {
  getUaeChildLinks,
  getUaeParentLink,
  getUaeSeoRelated,
  getUaeStaticParams,
} from "../../src/lib/uae-seo";

function main(): void {
  const slugs = getUaeStaticParams().map((p) => p.path.join("/"));
  if (slugs.length === 0) {
    console.log("no pages compiled yet - run build.ts --compile first");
    return;
  }

  const inbound = new Map<string, number>();
  const outbound = new Map<string, { up: number; down: number; side: number }>();
  for (const slug of slugs) inbound.set(slug, 0);

  const pathToSlug = (path: string) => path.replace(/^\/uae\//, "").replace(/\/$/, "");

  for (const slug of slugs) {
    const parent = getUaeParentLink(slug);
    const children = getUaeChildLinks(slug, 18);
    const related = getUaeSeoRelated(slug, 12);

    outbound.set(slug, { up: parent ? 1 : 0, down: children.length, side: related.length });

    for (const link of [...(parent ? [parent] : []), ...children, ...related]) {
      const target = pathToSlug(link.href);
      if (inbound.has(target)) inbound.set(target, (inbound.get(target) ?? 0) + 1);
    }
  }

  const orphans = slugs.filter((s) => (inbound.get(s) ?? 0) === 0);
  const thin = slugs.filter((s) => {
    const o = outbound.get(s)!;
    return o.up + o.down + o.side < 5;
  });

  const inboundCounts = slugs.map((s) => inbound.get(s) ?? 0).sort((a, b) => a - b);
  const median = inboundCounts[Math.floor(inboundCounts.length / 2)];
  const total = inboundCounts.reduce((a, b) => a + b, 0);

  console.log(`\n/uae/ internal linking across ${slugs.length} live pages\n`);
  console.log(`  total internal links     : ${total}`);
  console.log(`  average inbound per page : ${(total / slugs.length).toFixed(1)}`);
  console.log(`  median inbound per page  : ${median}`);
  console.log(`  fewest inbound           : ${inboundCounts[0]}`);
  console.log(`  most inbound             : ${inboundCounts[inboundCounts.length - 1]}`);
  console.log("");
  console.log(`  ORPHANS (zero inbound)   : ${orphans.length}`);
  for (const s of orphans.slice(0, 10)) console.log(`      /uae/${s}/`);
  if (orphans.length > 10) console.log(`      ... and ${orphans.length - 10} more`);
  console.log("");
  console.log(`  thin outbound (<5 links) : ${thin.length}`);
  for (const s of thin.slice(0, 10)) {
    const o = outbound.get(s)!;
    console.log(`      /uae/${s}/  up:${o.up} down:${o.down} side:${o.side}`);
  }

  if (orphans.length > 0) process.exitCode = 1;
  else console.log("\n  PASS - every live page has at least one inbound internal link\n");
}

main();
