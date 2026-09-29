import path from "node:path";
import { pathToFileURL } from "node:url";

function strings(value: unknown, key = ""): string[] {
  const SKIP_KEYS = new Set(["slug", "flagCode", "countryCode", "stateCode", "href", "lastUpdated", "wikipedia"]);
  if (typeof value === "string") return SKIP_KEYS.has(key) ? [] : [value];
  if (Array.isArray(value)) return value.flatMap((v) => strings(v, key));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => strings(v, k));
  return [];
}
const text = (page: unknown) => strings(page).join("\n");

function shingles(s: string): Map<string, number> {
  const words = s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").split(" ").filter(Boolean);
  const out = new Map<string, number>();
  for (let i = 0; i + 8 <= words.length; i++) {
    const g = words.slice(i, i + 8).join(" ");
    out.set(g, (out.get(g) ?? 0) + 1);
  }
  return out;
}

async function importPage(file: string): Promise<any> {
  const mod = (await import(pathToFileURL(file).href)) as Record<string, unknown>;
  return Object.values(mod).find((v: any) => typeof v?.slug === "string");
}

async function main() {
  const [a, b] = process.argv.slice(2);
  const DIR = path.resolve("src/lib/india-cities/cities");
  const pa = await importPage(path.join(DIR, `${a}.ts`));
  const pb = await importPage(path.join(DIR, `${b}.ts`));
  const sa = shingles(text(pa));
  const sb = shingles(text(pb));
  const shared: string[] = [];
  for (const g of sa.keys()) if (sb.has(g)) shared.push(g);
  console.log(`${a} vs ${b}: ${shared.length} shared shingles out of ${sa.size}`);
  for (const g of shared) console.log("  " + g);
}
main();
