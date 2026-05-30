/**
 * Seeds DB-backed SEO governance rows that the production runtime reads:
 *   - RedirectRule rows for Gurgaon → Gurugram aliases (301)
 *   - CanonicalRule rows pointing Gurgaon aliases at the Gurugram canonical
 *   - RobotsRule rows reproducing the safe default policy + admin/api blocks
 *
 * Run with:  npx tsx database/prisma/seed-seo-rules.ts
 */
import path from "node:path";
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";

const projectRoot = path.resolve(__dirname, "../..");
config({ path: path.join(projectRoot, ".env") });
config({ path: path.join(projectRoot, ".env.local"), override: false });

const prisma = new PrismaClient();

// Every Gurgaon path the Gurugram canonical map collapses to.
// Add new aliases here as the page graph grows.
const GURGAON_GURUGRAM_REDIRECTS: Array<{ from: string; to: string; reason: string }> = [
  // Top-level city pages
  { from: "/ib-tutors/gurgaon/", to: "/ib-tutors/gurugram/", reason: "Gurgaon → Gurugram canonical city slug" },
  { from: "/igcse-tutors/gurgaon/", to: "/igcse-tutors/gurugram/", reason: "Gurgaon → Gurugram canonical city slug" },
  { from: "/igcse-pages/gurgaon/", to: "/igcse-pages/gurugram/", reason: "Gurgaon → Gurugram canonical city slug" },
  // Area aliases
  { from: "/ib-tutors/gurgaon/areas/golf-course-road/", to: "/ib-tutors/gurugram/areas/golf-course-road/", reason: "Gurgaon area alias" },
  { from: "/ib-tutors/gurgaon/areas/dlf-phase-5/", to: "/ib-tutors/gurugram/areas/dlf-phase-5/", reason: "Gurgaon area alias" },
  { from: "/ib-tutors/gurgaon/areas/sector-57/", to: "/ib-tutors/gurugram/areas/sector-57/", reason: "Gurgaon area alias" },
  { from: "/ib-tutors/gurgaon/areas/sohna-road/", to: "/ib-tutors/gurugram/areas/sohna-road/", reason: "Gurgaon area alias" },
  { from: "/ib-tutors/gurgaon/areas/sushant-lok/", to: "/ib-tutors/gurugram/areas/sushant-lok/", reason: "Gurgaon area alias" },
  // School aliases
  { from: "/ib-tutors/gurgaon/schools/lancers-international-school/", to: "/ib-tutors/gurugram/schools/lancers-international-school/", reason: "Gurgaon school alias" },
  { from: "/ib-tutors/gurgaon/schools/scottish-high-international-school/", to: "/ib-tutors/gurugram/schools/scottish-high-international-school/", reason: "Gurgaon school alias" },
  { from: "/ib-tutors/gurgaon/schools/pathways-world-school/", to: "/ib-tutors/gurugram/schools/pathways-world-school/", reason: "Gurgaon school alias" },
];

// Robots: replicate the existing safe default policy
const ROBOTS_RULES: Array<{ userAgent: string; directive: "Allow" | "Disallow"; path: string }> = [
  { userAgent: "*", directive: "Allow", path: "/" },
  { userAgent: "*", directive: "Disallow", path: "/admin/" },
  { userAgent: "*", directive: "Disallow", path: "/admin/api/" },
  { userAgent: "*", directive: "Disallow", path: "/api/" },
  { userAgent: "*", directive: "Disallow", path: "/_next/" },
];

async function seedRedirects() {
  let created = 0;
  let updated = 0;
  for (const rule of GURGAON_GURUGRAM_REDIRECTS) {
    const existing = await prisma.redirectRule.findUnique({ where: { sourcePath: rule.from } });
    await prisma.redirectRule.upsert({
      where: { sourcePath: rule.from },
      create: {
        sourcePath: rule.from,
        targetPath: rule.to,
        statusCode: 301,
        reason: rule.reason,
        isActive: true,
      },
      update: { targetPath: rule.to, statusCode: 301, reason: rule.reason, isActive: true },
    });
    if (existing) updated++;
    else created++;
  }
  console.log(`✓ RedirectRule: created ${created}, updated ${updated}`);
}

async function seedCanonicals() {
  let created = 0;
  let updated = 0;
  for (const rule of GURGAON_GURUGRAM_REDIRECTS) {
    const existing = await prisma.canonicalRule.findUnique({ where: { sourcePath: rule.from } });
    await prisma.canonicalRule.upsert({
      where: { sourcePath: rule.from },
      create: {
        sourcePath: rule.from,
        targetPath: rule.to,
        reason: rule.reason,
        isActive: true,
      },
      update: { targetPath: rule.to, reason: rule.reason, isActive: true },
    });
    if (existing) updated++;
    else created++;
  }
  console.log(`✓ CanonicalRule: created ${created}, updated ${updated}`);
}

async function seedRobots() {
  // Replace all existing rules to keep the policy deterministic across re-runs.
  await prisma.robotsRule.deleteMany({});
  for (const rule of ROBOTS_RULES) {
    await prisma.robotsRule.create({
      data: { userAgent: rule.userAgent, directive: rule.directive, path: rule.path, isActive: true },
    });
  }
  console.log(`✓ RobotsRule: ${ROBOTS_RULES.length} rules seeded`);
}

async function main() {
  console.log("Seeding SEO governance rows...");
  await seedRedirects();
  await seedCanonicals();
  await seedRobots();
  console.log("Done.");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
