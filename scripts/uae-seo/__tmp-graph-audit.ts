/** throwaway audit: inbound @id references per top-level graph node. delete after. */
import { buildUaeSeoSchema, getUaeSeoPage, uaeSeoSlugs, hasUaeContent } from "../../src/lib/uae-seo";

type Node = Record<string, unknown>;

function collectRefs(value: unknown, out: Set<string>, skipTopId: string | undefined, depth: number): void {
  if (Array.isArray(value)) {
    for (const v of value) collectRefs(v, out, skipTopId, depth + 1);
    return;
  }
  if (!value || typeof value !== "object") return;
  const obj = value as Node;
  for (const [k, v] of Object.entries(obj)) {
    if (k === "@id" && typeof v === "string") {
      // the node's own identity at depth 0 is not a reference
      if (!(depth === 0 && v === skipTopId)) out.add(v);
      continue;
    }
    collectRefs(v, out, skipTopId, depth + 1);
  }
}

const live = uaeSeoSlugs.filter(hasUaeContent);
// deterministic spread across the whole corpus
const N = 400;
const step = Math.max(1, Math.floor(live.length / N));
const sample = live.filter((_, i) => i % step === 0).slice(0, N);

const tally = new Map<string, { total: number; unref: number }>();
const missingProps = { breadcrumb: 0, mainEntity: 0, publisher: 0, isPartOf: 0, about: 0 };
let pages = 0;
const websiteIds = new Set<string>();

for (const slug of sample) {
  const page = getUaeSeoPage(slug);
  if (!page) continue;
  pages++;
  const graph = (buildUaeSeoSchema(page) as { "@graph": Node[] })["@graph"];

  // every @id mentioned anywhere, per source node, excluding that node's own top-level @id
  const refsFromOthers = new Map<string, Set<string>>();
  for (const n of graph) {
    const s = new Set<string>();
    collectRefs(n, s, n["@id"] as string | undefined, 0);
    refsFromOthers.set(String(n["@id"]), s);
  }

  for (const n of graph) {
    const id = String(n["@id"]);
    const type = String(n["@type"]);
    let referenced = false;
    for (const [srcId, refs] of refsFromOthers) {
      if (srcId === id) continue;
      if (refs.has(id)) { referenced = true; break; }
    }
    const t = tally.get(type) ?? { total: 0, unref: 0 };
    t.total++;
    if (!referenced) t.unref++;
    tally.set(type, t);
  }

  const web = graph.find((n) => n["@type"] === "WebPage") as Node | undefined;
  if (web) {
    for (const k of Object.keys(missingProps) as Array<keyof typeof missingProps>) {
      if (web[k] === undefined) missingProps[k]++;
    }
    const ip = web.isPartOf as Node | undefined;
    if (ip && typeof ip["@id"] === "string") websiteIds.add(ip["@id"] as string);
  }
}

console.log(`live pages: ${live.length}  sampled: ${pages}`);
console.log("node type -> occurrences / with NO inbound @id reference");
for (const [type, t] of [...tally].sort()) console.log(`  ${type.padEnd(28)} ${t.total} / ${t.unref}`);
console.log("WebPage props ABSENT on n sampled pages:", missingProps);
console.log("WebSite @ids seen:", [...websiteIds]);
