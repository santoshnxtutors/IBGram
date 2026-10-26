/**
 * Publishes the fifty tutoring vacancies behind /jobs/ - 20 in Gurgaon, 30 across India.
 *
 * The rows live in roles-gurgaon.ts and roles-india.ts and write their own copy. This file
 * only adds the parts that are identical in fact for every listing: the payout arithmetic,
 * the ID and reference checks, and the two ways to apply. Those facts are lifted from the
 * /ib-tutor-jobs/ SEO pages so a listing can never contradict the landing page.
 *
 * THIS WRITES TO THE LIVE DATABASE - listings become public immediately.
 *
 *   npx tsx scripts/jobs/seed-roles.ts            dry run
 *   npx tsx scripts/jobs/seed-roles.ts --write
 */
import { PrismaClient, type Prisma } from "@prisma/client";
import { GURGAON_ROLES } from "./roles-gurgaon";
import { INDIA_ROLES } from "./roles-india";
import type { Mode, RoleRow } from "./roles-types";

const WRITE = process.argv.includes("--write");
const db = new PrismaClient();

/** Existing rows start at sortOrder 0, so the fifty new ones queue behind them. */
const SORT_OFFSET = 100;

const MODE_LABEL: Record<Mode, string> = {
  home: "Home (in person)",
  hybrid: "Home, online or hybrid",
  online: "Online",
};

const PAYOUT: Record<Mode, string> = {
  home: "The first month's fee for each new student is split 50-50. That is our one-time charge for finding the family, arranging the demo and setting up the match. From the second month you keep 100% of the fee for as long as you teach that student, which works out at roughly 98% of a two-year engagement. Payouts land on the 1st of each month with an itemised statement.",
  hybrid:
    "In-person students follow the home tuition split: the first month is 50-50, then 100% is yours for as long as the engagement lasts. Online sessions pay you 70% of the fee with no first-month split. Both are paid out on the 1st of each month with an itemised statement.",
  online:
    "Online classes pay you 70% of the fee every month, with no first-month split and no joining fee. You set the fee, we publish it unchanged, and payouts land on the 1st of each month with an itemised statement.",
};

function modeParagraph(row: RoleRow): string {
  if (row.mode === "online") {
    return `All teaching on this role is online, from your own device and connection. Families expect a shared whiteboard, screen share and written working they can keep afterwards, not a camera pointed at a notebook.`;
  }
  const areas = row.areas ?? row.where;
  if (row.mode === "home") {
    return `This is in-person teaching at the student's home. You list the areas you can genuinely reach and we only send you requests inside ${areas}. Declining a location, a society or a timing costs you nothing and needs no explanation.`;
  }
  return `You decide per student whether you teach at their home, online, or a mix of the two. Most engagements on this role start in person and move revision sessions online. In-person requests only come from ${areas}.`;
}

function modeDuties(row: RoleRow): string[] {
  const shared = [
    "Plan each session around the student's current school unit rather than a syllabus order of your own.",
    "Set and publish your own fee, and decline any student who is not a fit.",
    "Report progress to the family at the review points agreed when the engagement starts.",
  ];
  if (row.mode === "online") {
    return [
      ...shared,
      "Teach from a quiet space with a stable connection, and send written working after each session.",
    ];
  }
  return [
    ...shared,
    "Keep agreed session times and give at least 24 hours' notice through IB Gram if a session has to move.",
  ];
}

function requirements(row: RoleRow): string[] {
  const common = [
    "A degree in the subject or a closely related one. Teaching experience counts, but subject knowledge is checked first.",
    "Verified government ID and at least one credential we can confirm with the issuing institution.",
    "Two references we can contact, at least one from a school, college or family you have taught.",
  ];
  if (row.mode === "online") {
    common.push(
      "A quiet room, a connection that holds a video call, and a device that handles screen share and a writing tablet.",
    );
  } else {
    common.push("Reliable travel to the listed areas at the times you have offered, in real traffic.");
  }
  return [...row.skills, ...common];
}

function benefits(row: RoleRow): string[] {
  const base = [
    "You set your own fee and we publish it unchanged, so there is no negotiation after you have taught.",
    "Students are matched to you by programme, subject and level before you accept.",
    "No joining fee, no subscription and no exclusivity - teach elsewhere as well.",
    "Monthly payouts on the 1st with an itemised statement.",
  ];
  if (row.mode === "home") base.push("You define your travel zones and can change them whenever you like.");
  if (row.mode === "hybrid") base.push("You choose per student whether the engagement is in person, online or mixed.");
  if (row.mode === "online") base.push("Teach from anywhere, in the hours you have told us you are available.");
  return base;
}

function location(row: RoleRow): string {
  if (row.mode === "online") return `${row.where} (online)`;
  if (row.mode === "hybrid") return `${row.where} (home, hybrid or online)`;
  return `${row.where} (home tuition)`;
}

function toJob(row: RoleRow, index: number): Prisma.JobCreateInput {
  const jobDescription = [...row.notes, modeParagraph(row), PAYOUT[row.mode]].join("\n\n");

  return {
    slug: row.slug,
    title: row.title,
    department: "Tutoring",
    location: location(row),
    employmentType: "Freelance, part time or full time",
    level: row.level,
    workMode: MODE_LABEL[row.mode],
    summary: row.summary,
    roleOverview: row.overview,
    jobDescription,
    responsibilities: [...row.duties, ...modeDuties(row)],
    requirements: requirements(row),
    niceToHave: [
      ...row.nice,
      "Experience with the specific school's internal assessment calendar.",
      "Availability for a longer weekend slot in the eight weeks before mocks.",
    ],
    benefits: benefits(row),
    applicationPrompt:
      "You can apply to this role directly with the form below, or create a tutor profile and we will match you to every role like this one as it opens. A profile also lets you list your subjects, levels, fee and travel areas once instead of per application.",
    status: "published",
    sortOrder: SORT_OFFSET + index,
    publishedAt: new Date(),
  };
}

async function main() {
  const rows = [...GURGAON_ROLES, ...INDIA_ROLES];
  const planned = rows.map(toJob);

  const slugs = new Set(planned.map((job) => job.slug));
  if (slugs.size !== planned.length) throw new Error("duplicate slug in the role data");

  const before = await db.job.count();
  console.log(`Job rows currently in DB: ${before}`);
  console.log(`planned: ${planned.length} (${GURGAON_ROLES.length} Gurgaon, ${INDIA_ROLES.length} India)\n`);

  for (const job of planned) {
    console.log(`  ${job.slug}`);
    console.log(`     ${job.title}`);
    console.log(
      `     ${job.location} | ${job.workMode} | desc ${job.jobDescription.length} chars | ` +
        `duties ${(job.responsibilities as string[]).length} | reqs ${(job.requirements as string[]).length}`,
    );
  }

  if (!WRITE) {
    console.log("\nDRY RUN - nothing written. Pass --write to publish to the LIVE database.");
    await db.$disconnect();
    return;
  }

  let created = 0;
  let updated = 0;
  for (const job of planned) {
    const existing = await db.job.findUnique({ where: { slug: job.slug } });
    if (existing) {
      await db.job.update({
        where: { slug: job.slug },
        data: { ...job, publishedAt: existing.publishedAt ?? job.publishedAt },
      });
      updated++;
    } else {
      await db.job.create({ data: job });
      created++;
    }
  }

  console.log(`\ncreated ${created}, updated ${updated}, published total now ${await db.job.count()}`);
  await db.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await db.$disconnect();
  process.exit(1);
});
