/**
 * Creates the /jobs/ listings from the ten tutor-jobs SEO pages.
 *
 * The Job table was empty, so /jobs/ rendered "No roles matching your criteria"
 * while ten recruitment pages sat in the sitemap with nothing behind them.
 *
 * Everything except the duty lines is lifted verbatim from the SEO page, so the
 * listing and the landing page cannot drift apart or contradict each other.
 * THIS WRITES TO THE LIVE DATABASE - listings become public immediately.
 *
 *   npx tsx scripts/jobs/seed-from-seo.ts            dry run
 *   npx tsx scripts/jobs/seed-from-seo.ts --write
 */
import { PrismaClient } from "@prisma/client";
import { tutorJobSeoPages } from "../../src/lib/tutor-jobs-seo/pages";

const WRITE = process.argv.includes("--write");
const db = new PrismaClient();

const LOCATION: Record<string, string> = {
  india: "India (home or online)",
  uae: "UAE (home or online)",
  worldwide: "Worldwide (online)",
};

/** Duties, composed only from claims the page itself already makes. */
function responsibilitiesFor(page: any): string[] {
  const base = [
    `Teach ${page.scopeLabel} students one to one, matched to you by programme, subject and level before you accept.`,
    "Plan each session around the student's current school unit rather than a fixed syllabus of your own.",
    "Prepare students for the assessment model of their stage, including internal assessment and exam technique where it applies.",
    "Set and publish your own fee, and decline any student who is not a fit.",
    "Keep agreed session times, and give notice through IB Gram if a session must move.",
    "Report progress to the family at the review points agreed at the start of the engagement.",
  ];
  if (page.locationScope === "worldwide") base.push("Teach online across time zones using your own device and connection.");
  if (page.jobFamily === "subject") base.push(`Cover ${page.scopeLabel} across the levels you list on your profile, including Higher Level where you claim it.`);
  return base;
}

const rows = (Array.isArray(tutorJobSeoPages) ? tutorJobSeoPages : Object.values(tutorJobSeoPages as any)) as any[];

async function main() {
  const planned = rows.map((page, i) => {
    const paragraphs = [
      page.directAnswer,
      ...(page.intro?.paragraphs ?? []),
      page.earnings?.heading ? `\n${page.earnings.heading}` : "",
      ...(page.earnings?.paragraphs ?? []),
    ].filter(Boolean);

    return {
      slug: page.slug,
      title: page.h1.replace(/\s*[—–:].*$/, "").replace(/^(.)/, (c: string) => c.toUpperCase()).slice(0, 120),
      department: "Tutoring",
      location: LOCATION[page.locationScope] ?? "Worldwide (online)",
      employmentType: "Freelance, part time or full time",
      level: page.scopeLabel,
      workMode: page.locationScope === "worldwide" ? "Online" : "Home, online or hybrid",
      summary: page.directAnswer?.slice(0, 400) ?? page.heroSubtitle?.slice(0, 400),
      roleOverview: page.heroSubtitle,
      jobDescription: paragraphs.join("\n\n"),
      responsibilities: responsibilitiesFor(page),
      requirements: (page.requirements ?? []).filter((r: any) => r.required !== false).map((r: any) => `${r.label}. ${r.detail}`),
      niceToHave: (page.requirements ?? []).filter((r: any) => r.required === false).map((r: any) => `${r.label}. ${r.detail}`),
      benefits: [...(page.heroTrustPoints ?? []), ...(page.policies ?? []).slice(0, 4).map((p: any) => p.heading)],
      applicationPrompt: page.closingBody?.slice(0, 500) ?? null,
      status: "published" as const,
      sortOrder: i,
      publishedAt: new Date(),
    };
  });

  console.log(`Job rows currently in DB: ${await db.job.count()}`);
  console.log(`planned: ${planned.length}\n`);
  for (const r of planned) {
    console.log(`  ${r.slug}`);
    console.log(`     title        ${r.title}`);
    console.log(`     location     ${r.location}   type ${r.employmentType}   mode ${r.workMode}`);
    console.log(`     description  ${r.jobDescription.length} chars | responsibilities ${r.responsibilities.length} | requirements ${r.requirements.length} | benefits ${r.benefits.length}`);
  }

  if (!WRITE) { console.log("\nDRY RUN - nothing written. Pass --write to publish to the LIVE database."); await db.$disconnect(); return; }

  let created = 0, updated = 0;
  for (const r of planned) {
    const existing = await db.job.findUnique({ where: { slug: r.slug } });
    if (existing) { await db.job.update({ where: { slug: r.slug }, data: { ...r, publishedAt: existing.publishedAt ?? r.publishedAt } }); updated++; }
    else { await db.job.create({ data: r }); created++; }
  }
  console.log(`\ncreated ${created}, updated ${updated}, total now ${await db.job.count()}`);
  await db.$disconnect();
}
main();
