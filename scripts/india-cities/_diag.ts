import path from "node:path";
import { pathToFileURL } from "node:url";

function strings(value: unknown, key = ""): string[] {
  const SKIP = new Set(["slug","flagCode","countryCode","stateCode","href","lastUpdated","wikipedia"]);
  if (typeof value === "string") return SKIP.has(key) ? [] : [value];
  if (Array.isArray(value)) return value.flatMap((v) => strings(v, key));
  if (value && typeof value === "object") return Object.entries(value).flatMap(([k, v]) => strings(v, k));
  return [];
}
function shingles(s: string): Set<string> {
  const words = s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").split(" ").filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 8 <= words.length; i++) out.add(words.slice(i, i + 8).join(" "));
  return out;
}
async function importPage(file: string) {
  const mod = (await import(pathToFileURL(file).href)) as Record<string, unknown>;
  return Object.values(mod).find((v: any) => typeof v?.slug === "string");
}
async function main() {
  const [a, b] = process.argv.slice(2);
  const dir = path.resolve("src/lib/india-cities/cities");
  const pa: any = await importPage(path.join(dir, `${a}.ts`));
  const pb: any = await importPage(path.join(dir, `${b}.ts`));
  const sa = shingles(strings(pa).join("\n"));
  const sb = shingles(strings(pb).join("\n"));
  const shared = [...sa].filter((s) => sb.has(s));
  console.log(`shared: ${shared.length} / ${sa.size}`);
  for (const s of shared) console.log(" - " + s);
}
main();
