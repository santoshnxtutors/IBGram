/**
 * Writes agent-authored UAE blog posts into the database as DRAFTS.
 *
 *   npx tsx scripts/uae-blogs/write.ts            dry run, reports what would change
 *   npx tsx scripts/uae-blogs/write.ts --write    upserts
 *
 * Drafts on purpose: status stays `draft` so nothing is public until a human
 * publishes it from admin. THIS TALKS TO THE LIVE DATABASE.
 *
 * Agents write one JSON file per post into tmp/uae-blogs/agent-out/<slug>.json.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "@prisma/client";

const AGENT_OUT = join(import.meta.dirname, "..", "..", "tmp", "uae-blogs", "agent-out");
const WRITE = process.argv.includes("--write");
const db = new PrismaClient();

type BlogDraft = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  tags: string[];
};

function load(): BlogDraft[] {
  if (!existsSync(AGENT_OUT)) return [];
  return readdirSync(AGENT_OUT)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(join(AGENT_OUT, f), "utf8")) as BlogDraft);
}

async function main(): Promise<void> {
  const drafts = load();
  if (drafts.length === 0) {
    console.log("nothing in tmp/uae-blogs/agent-out yet");
    return;
  }

  let created = 0;
  let updated = 0;
  for (const d of drafts) {
    const words = d.body.trim().split(/\s+/).filter(Boolean).length;
    const existing = await db.blogPost.findUnique({ where: { slug: d.slug }, select: { id: true } });
    console.log(`${existing ? "update" : "create"}  ${String(words).padStart(5)}w  ${d.slug}`);
    if (!WRITE) {
      existing ? updated++ : created++;
      continue;
    }
    const data = {
      title: d.title,
      excerpt: d.excerpt,
      body: d.body,
      country: "uae",
      metaTitle: d.metaTitle,
      metaDescription: d.metaDescription,
      metaKeywords: d.metaKeywords ?? [],
      tags: d.tags ?? [],
      authorName: "IB Gram",
      readingTimeMinutes: Math.max(1, Math.round(words / 200)),
      // draft: nothing is public until a human publishes it from admin
      status: "draft" as const,
    };
    if (existing) {
      await db.blogPost.update({ where: { id: existing.id }, data });
      updated++;
    } else {
      await db.blogPost.create({ data: { slug: d.slug, ...data } });
      created++;
    }
  }

  console.log(`\n${WRITE ? "WROTE" : "DRY RUN"}: ${created} to create, ${updated} to update`);
  if (!WRITE) console.log("re-run with --write to apply");
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
