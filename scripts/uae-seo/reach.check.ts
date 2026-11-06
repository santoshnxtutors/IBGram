/**
 * Can a crawler actually walk from /uae/ to every live page?
 *
 *   npx tsx scripts/uae-seo/reach.check.ts
 *
 * links.check.ts counts INBOUND links per page, which is not the same question. A set can have
 * zero orphans by that measure and still be several disconnected islands, none of them reachable
 * from the hub - which is exactly what happened here: 0 orphans reported, 355 pages (32%)
 * unreachable, 9 components. Google crawls by walking links from a known page, so reachability
 * from the hub is the measure that decides whether a page gets discovered at all.
 *
 * Fails the build if any live page cannot be reached from /uae/.
 */
import {
  getUaeChildLinks,
  getUaeParentLink,
  getUaeSeoRelated,
  getUaeStaticParams,
} from "../../src/lib/uae-seo";

const HUB = "";

function main(): void {
  const slugs = getUaeStaticParams().map((p) => p.path.join("/"));
  if (slugs.length === 0) {
    console.log("no pages compiled yet - run build.ts --compile first");
    return;
  }
  const live = new Set(slugs);
  const toSlug = (href: string) => href.replace(/^\/uae\/?/, "").replace(/\/$/, "");

  const edges = new Map<string, string[]>();
  for (const slug of slugs) {
    const parent = getUaeParentLink(slug);
    const out = [...(parent ? [parent] : []), ...getUaeChildLinks(slug, slug === "" || !slug.includes("/") ? 240 : 18), ...getUaeSeoRelated(slug, 12)]
      .map((l) => toSlug(l.href))
      .filter((s) => live.has(s));
    edges.set(slug, out);
  }

  // The hub itself is not in the registry; it reaches whatever its own children list reaches.
  const seeds = getUaeChildLinks(HUB, 1000).map((l) => toSlug(l.href)).filter((s) => live.has(s));

  const seen = new Set<string>(seeds);
  const queue = [...seeds];
  while (queue.length) {
    for (const next of edges.get(queue.shift()!) ?? []) {
      if (seen.has(next)) continue;
      seen.add(next);
      queue.push(next);
    }
  }

  const unreachable = slugs.filter((s) => !seen.has(s));
  console.log(`\n/uae/ reachability across ${slugs.length} live pages\n`);
  console.log(`  hub links directly to   : ${seeds.length}`);
  console.log(`  reachable from the hub  : ${seen.size}`);
  console.log(`  UNREACHABLE             : ${unreachable.length}`);
  for (const s of unreachable.slice(0, 12)) console.log(`      /uae/${s}/`);
  if (unreachable.length > 12) console.log(`      ... and ${unreachable.length - 12} more`);

  if (unreachable.length > 0) {
    console.log("\n  FAIL - a page nothing links to lands in 'Discovered - currently not indexed'\n");
    process.exitCode = 1;
  } else {
    console.log("\n  PASS - every live page is reachable from /uae/\n");
  }
}

main();
