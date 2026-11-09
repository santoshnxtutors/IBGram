/**
 * The one guarantee that keeps a programmatic page set out of "Crawled - currently not indexed":
 * every page in the set is some other page's link target.
 *
 * Curated "related" lists cannot promise that. Whoever is left out of every curation is left out
 * of the link graph too, and a page with zero inbound links is the exact shape Search Console
 * reports as crawled-but-not-indexed. A wrap-around slice does promise it: page i links to
 * i+1 … i+limit, so page j is linked by the `limit` pages before it, forever, however the set
 * grows. Order the input by whatever makes neighbours contextual (same state, same option block)
 * and the links read as editorial rather than as a ring.
 *
 * `getUaeSeoRelated` already does this inline for the UAE set; this is that idea, extracted.
 */
export function ringNeighbours<T>(items: readonly T[], index: number, limit = 12): T[] {
  if (index < 0 || items.length < 2) return [];
  const take = Math.min(limit, items.length - 1);
  const out: T[] = [];
  for (let i = 1; i <= take; i += 1) out.push(items[(index + i) % items.length]);
  return out;
}

/* istanbul ignore next -- self-check: `npx tsx src/lib/seo/related-links.ts` */
if (process.argv[1]?.replace(/\\/g, "/").endsWith("src/lib/seo/related-links.ts")) {
  const set = ["a", "b", "c", "d", "e"];
  const inbound = new Map(set.map((s) => [s, 0]));
  set.forEach((_, i) => ringNeighbours(set, i, 2).forEach((t) => inbound.set(t, inbound.get(t)! + 1)));
  console.assert([...inbound.values()].every((n) => n === 2), "every member must be linked, got", inbound);
  console.assert(!ringNeighbours(set, 0, 2).includes("a"), "must not link to itself");
  console.assert(ringNeighbours(set, -1).length === 0, "unknown member links nothing");
  console.assert(ringNeighbours(["solo"], 0).length === 0, "a one-page set has no neighbours");
  console.assert(ringNeighbours(set, 4, 2).join() === "a,b", "must wrap past the end");
  console.log("related-links self-check ok");
}
