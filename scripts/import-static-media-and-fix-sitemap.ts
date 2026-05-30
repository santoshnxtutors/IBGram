/**
 * Two production fixes in one script:
 *
 *   1. Populate the Media Library from existing static images in `public/`
 *      (tutor avatars, student review avatars, founder photos, OG defaults,
 *      brand logo). Creates Asset rows and links every Tutor.avatarUrl to its
 *      Asset by URL match.
 *
 *   2. Backfill `sitemapIncluded = true` on every published + index
 *      GeneratedPage row. The legacy `import-current.ts` script (which
 *      ingested 251 pages) did not set this flag, which is why the dashboard
 *      shows 251 published but only 27 sitemap entries.
 *
 * Idempotent. Re-running is safe.
 *
 * Run with:
 *   npx tsx scripts/import-static-media-and-fix-sitemap.ts
 */
import path from "node:path";
import { promises as fs } from "node:fs";
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

// Constrain the script to a single connection so it cooperates with low
// max_connections on shared/remote PostgreSQL.
function buildConstrainedDbUrl(): string | undefined {
  const url = process.env.DATABASE_URL?.trim();
  if (!url) return undefined;
  if (url.includes("connection_limit=")) return url;
  return url.includes("?") ? `${url}&connection_limit=1` : `${url}?connection_limit=1`;
}

const constrainedUrl = buildConstrainedDbUrl();
const prisma = new PrismaClient(
  constrainedUrl ? { datasourceUrl: constrainedUrl } : undefined,
);

const PUBLIC_DIR = path.join(projectRoot, "public");

const MIME_BY_EXT: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".pdf": "application/pdf",
};

type DiscoveredFile = {
  absolutePath: string;
  publicPath: string;
  folder: string;
  filename: string;
  mimeType: string;
  size: number;
};

async function walk(dir: string, rel = ""): Promise<DiscoveredFile[]> {
  const out: DiscoveredFile[] = [];
  let entries: import("node:fs").Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    const next = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      // skip the uploads folder — those are created by the live admin
      if (next === "uploads") continue;
      const nested = await walk(abs, next);
      out.push(...nested);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      const mimeType = MIME_BY_EXT[ext];
      if (!mimeType) continue;
      const stat = await fs.stat(abs);
      out.push({
        absolutePath: abs,
        publicPath: `/${next.replace(/\\/g, "/")}`,
        folder: rel || "root",
        filename: entry.name,
        mimeType,
        size: stat.size,
      });
    }
  }
  return out;
}

function altTextFor(filename: string): string {
  const stem = filename
    .replace(/\.[^.]+$/, "")
    .replace(/_\d{10,}/g, "")
    .replace(/[_-]+/g, " ")
    .trim();
  if (!stem) return "";
  return stem
    .split(" ")
    .map((word) => (word.length ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

async function importMedia() {
  const files = await walk(PUBLIC_DIR);
  console.log(`Discovered ${files.length} static media files in /public`);

  let createdCount = 0;
  let updatedCount = 0;
  for (const file of files) {
    const key = file.publicPath.replace(/^\//, "");
    const existing = await prisma.asset.findUnique({
      where: { provider_key: { provider: "local", key } },
    });

    if (existing) {
      const wantsAlt = !existing.altText ? altTextFor(file.filename) : null;
      if (wantsAlt) {
        await prisma.asset.update({
          where: { id: existing.id },
          data: { altText: wantsAlt },
        });
        updatedCount++;
      }
      continue;
    }

    await prisma.asset.create({
      data: {
        provider: "local",
        key,
        url: file.publicPath,
        filename: file.filename,
        mimeType: file.mimeType,
        sizeBytes: file.size,
        altText: altTextFor(file.filename),
        metadata: { sourceType: "static", folder: file.folder },
      },
    });
    createdCount++;
  }
  console.log(`✓ Asset: ${createdCount} created, ${updatedCount} alt-text backfilled`);
}

async function linkTutorImages() {
  const tutors = await prisma.tutor.findMany({ where: { avatarUrl: { not: null } } });
  if (tutors.length === 0) {
    console.log("✓ Tutor avatars: 0 tutors have avatarUrl (skipped)");
    return;
  }

  let linkedCount = 0;
  let skippedCount = 0;
  for (const tutor of tutors) {
    if (!tutor.avatarUrl) continue;
    const key = tutor.avatarUrl.replace(/^\//, "");
    const asset = await prisma.asset.findUnique({
      where: { provider_key: { provider: "local", key } },
    });
    if (!asset) {
      skippedCount++;
      continue;
    }
    // Upsert TutorAsset to link the avatar
    await prisma.tutorAsset.upsert({
      where: { tutorId_assetId_role: { tutorId: tutor.id, assetId: asset.id, role: "avatar" } },
      create: { tutorId: tutor.id, assetId: asset.id, role: "avatar", sortOrder: 0 },
      update: {},
    });
    linkedCount++;
  }
  console.log(`✓ Tutor avatars: ${linkedCount} linked, ${skippedCount} unmatched (no Asset row for URL)`);
}

async function backfillSitemapInclusion() {
  const result = await prisma.generatedPage.updateMany({
    where: { status: "published", indexFlag: "index", sitemapIncluded: false },
    data: { sitemapIncluded: true },
  });
  const total = await prisma.generatedPage.count({
    where: { status: "published", indexFlag: "index", sitemapIncluded: true },
  });
  console.log(`✓ Sitemap: backfilled ${result.count} pages → ${total} now eligible for sitemap.xml`);
}

async function summarise() {
  // Serial — one connection at a time. Avoids exhausting DB connection slots.
  const assets = await prisma.asset.count();
  const tutors = await prisma.tutor.count();
  const tutorAssets = await prisma.tutorAsset.count({ where: { role: "avatar" } });
  const sitemapEligible = await prisma.generatedPage.count({
    where: { status: "published", indexFlag: "index", sitemapIncluded: true },
  });
  const published = await prisma.generatedPage.count({ where: { status: "published" } });
  console.log("\n📊 After fix:");
  console.log(`  Assets total:           ${assets}`);
  console.log(`  Tutors total:           ${tutors}`);
  console.log(`  Tutor avatar links:     ${tutorAssets}`);
  console.log(`  Published pages:        ${published}`);
  console.log(`  Sitemap-eligible:       ${sitemapEligible}`);
}

async function main() {
  console.log("Importing static media + fixing sitemap inclusion…\n");
  await importMedia();
  await linkTutorImages();
  await backfillSitemapInclusion();
  await summarise();
  console.log("\nDone.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
