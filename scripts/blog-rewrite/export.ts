// Snapshot every blog post from the DB in DATABASE_URL to scripts/blog-rewrite/backup.json.
//   npx tsx --env-file=.env scripts/blog-rewrite/export.ts
import { writeFileSync } from "node:fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rows = await prisma.blogPost.findMany({ include: { category: true }, orderBy: { createdAt: "asc" } });
  writeFileSync("scripts/blog-rewrite/backup.json", JSON.stringify(rows, null, 1), { encoding: "utf8" });
  for (const r of rows)
    console.log([r.status, r.indexFlag, r.body.split(/\s+/).length, r.authorName ?? "-", r.category?.slug ?? "-", JSON.stringify(r.slug)].join("\t"));
  console.log(rows.length, "posts");
}

main().finally(() => prisma.$disconnect());
