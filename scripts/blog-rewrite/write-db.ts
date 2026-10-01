// Publish rewritten posts that pass the gate to the DB in DATABASE_URL (the live DB).
//   npx tsx --env-file=.env scripts/blog-rewrite/write-db.ts           # dry run: list what would change
//   npx tsx --env-file=.env scripts/blog-rewrite/write-db.ts --write   # update the rows
//   npx tsx --env-file=.env scripts/blog-rewrite/write-db.ts --undo    # restore every post from backup.json
// Rows are matched by their stored slug, so the three title-style slugs are renamed in place
// (the post page 301s the old URLs).
import { existsSync, readFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";
import { gate, readPost } from "./check";
import { PLAN } from "./plan";

const prisma = new PrismaClient();
const mode = process.argv.includes("--write") ? "write" : process.argv.includes("--undo") ? "undo" : "dry";

type BackupRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  authorName: string | null;
  categoryId: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string[];
  tags: string[];
  status: "draft" | "review" | "published" | "archived";
  indexFlag: "auto" | "index" | "noindex";
  readingTimeMinutes: number | null;
  publishedAt: string | null;
};
const backup: BackupRow[] = JSON.parse(readFileSync("scripts/blog-rewrite/backup.json", "utf8"));

async function undo() {
  for (const r of backup) {
    await prisma.blogPost.update({
      where: { id: r.id },
      data: {
        slug: r.slug,
        title: r.title,
        excerpt: r.excerpt,
        body: r.body,
        authorName: r.authorName,
        categoryId: r.categoryId,
        metaTitle: r.metaTitle,
        metaDescription: r.metaDescription,
        metaKeywords: r.metaKeywords,
        tags: r.tags,
        status: r.status,
        indexFlag: r.indexFlag,
        readingTimeMinutes: r.readingTimeMinutes,
        publishedAt: r.publishedAt ? new Date(r.publishedAt) : null,
      },
    });
  }
  console.log(`restored ${backup.length} posts`);
}

async function publish() {
  const categories = new Map((await prisma.blogCategory.findMany()).map((c) => [c.slug, c.id]));
  const written = PLAN.filter((p) => existsSync(`scripts/blog-rewrite/posts/${p.key}.md`));
  const results = gate(written.map((p) => p.key));
  let done = 0;
  for (const e of written) {
    const errs = results.get(e.key)!;
    if (errs.length) {
      console.log(`SKIP ${e.key} (fails gate: ${errs.length} problems)`);
      continue;
    }
    const old = backup.find((r) => r.slug === (e.old ?? e.key));
    if (!old) throw new Error(`no backup row for ${e.old ?? e.key}`);
    const post = readPost(`scripts/blog-rewrite/posts/${e.key}.md`);
    const words = post.body.split(/\s+/).filter(Boolean).length;
    const data = {
      slug: e.key,
      title: post.title,
      excerpt: post.excerpt,
      body: post.body,
      authorName: e.ajay ? "Ajay Vatsyayan" : "IB Gram Editorial",
      categoryId: categories.get(e.cat) ?? old.categoryId,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      metaKeywords: post.metaKeywords,
      // home-ib / home-igcse decide which home page features the post; keep them.
      tags: [...new Set([...post.tags, ...old.tags.filter((t) => t.startsWith("home-"))])],
      status: "published" as const,
      indexFlag: "index" as const,
      readingTimeMinutes: Math.max(1, Math.round(words / 200)),
      publishedAt: old.publishedAt ? new Date(old.publishedAt) : new Date(),
    };
    console.log(`${mode === "write" ? "WRITE" : "would write"} ${e.key} (${words} words${e.old ? `, renamed from "${e.old}"` : ""}${old.status !== "published" ? `, ${old.status} -> published` : ""})`);
    if (mode === "write") await prisma.blogPost.update({ where: { id: old.id }, data });
    done++;
  }
  console.log(`\n${done}/${PLAN.length} posts ${mode === "write" ? "written" : "ready"}, ${PLAN.length - written.length} not written yet`);
}

(mode === "undo" ? undo() : publish()).finally(() => prisma.$disconnect());
