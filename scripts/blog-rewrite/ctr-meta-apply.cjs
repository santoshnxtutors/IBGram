/* eslint-disable @typescript-eslint/no-require-imports -- plain CommonJS maintenance script, run with bare node */
// Retitles blog posts whose ranking queries ask for something their title did not
// promise, and keeps the md frontmatter and the live DB row in step. Each patch cites
// the GSC queries that justify it. Descriptions must keep the post's PLAN primary
// keyword and stay 130-165 chars or scripts/blog-rewrite/check.ts rejects the post.
//
//   node scripts/blog-rewrite/ctr-meta-apply.cjs            dry run
//   node scripts/blog-rewrite/ctr-meta-apply.cjs --write     patch md + DB, write rollback
const fs = require("node:fs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const WRITE = process.argv.includes("--write");

const patches = [
  { slug: "the-gdc-advantage-in-ib-dp-mathematics-aa-hl",
    why: "341i p7.2, 4 clicks. Queries are definitional: 'gdc meaning math' 15i, 'what is gdc math' 15i, 'gdc math' 12i, 'what does gdc stand for math' 18i. Old title sold 'GDC Skills ... | Gurgaon Tutor' to a global audience asking what GDC means.",
    metaTitle: "What Is a GDC in Maths? IB Calculator Guide",
    metaDescription: "GDC stands for Graphic Display Calculator. What the GDC in IB Math AA HL actually does, which model to choose, and the Paper 2 marks it wins or loses." },
  { slug: "ib-myp-maths-criteria-a-b-c-d-explained-for-parents",
    why: "1997i p7.3, 19 clicks. 88i come from generic 'ib criterion/criteria a b c d'. 'for Parents' narrowed a title students also search; 'Maths' stays because the content is maths-specific.",
    metaTitle: "IB MYP Maths Criteria A, B, C and D Explained",
    metaDescription: "MYP maths criteria explained for parents: what each criterion measures, how levels become a 1-7 grade, and why strong students still score middling." },
  { slug: "ib-dp-core-planning-timeline",
    why: "1830i p8.1, 10 clicks. Top query is 'dp core' 107i at p4, plus 39i across 'tok ee cas' variants: definitional intent. Old title led with a planning timeline instead of what the Core is.",
    metaTitle: "What Is the IB DP Core? TOK, EE and CAS Explained",
    metaDescription: "An IB DP core timeline for TOK, the Extended Essay and CAS: what each one demands, where they collide, and how to plan from DP1 to the final mocks." },
  { slug: "igcse-revision-six-week-plan",
    why: "1120i, 4 clicks. Highest-volume phrasing is 'igcse study plan' 61i and 'igcse study schedule' 15i, not 'revision plan'. Same content, matched to how people search.",
    metaTitle: "IGCSE Study Plan: A 6-Week Revision Schedule",
    metaDescription: "A six-week IGCSE revision plan and study schedule: triage your weakest subjects in week 1, rebuild topics, then move to timed past papers and technique." },
  { slug: "stem-subject-choice-ib-dp",
    why: "602i p8.3, 1 click (0.17%). Old title was 71 chars so Google clipped it. Ranking query is STEM subjects for university admission, which the page's four pathway sections cover.",
    metaTitle: "IB DP STEM Subjects: Maths AA or AI, Physics, Chemistry",
    metaDescription: "IB DP STEM subject choice by university pathway: engineering, medicine, computer science or research. Maths AA vs AI, HL picks and combinations to avoid." },
];

(async () => {
  const rollback = [];
  let bad = 0;
  for (const p of patches) {
    const f = `scripts/blog-rewrite/posts/${p.slug}.md`;
    const row = await prisma.blogPost.findUnique({ where: { slug: p.slug }, select: { metaTitle: true, metaDescription: true } });
    if (!row || !fs.existsSync(f)) { console.log(`!! missing row or file: ${p.slug}`); bad++; continue; }
    // check.ts limits, enforced here so a bad patch never reaches the gate or the DB
    if (p.metaTitle.length < 30 || p.metaTitle.length > 62) { console.log(`!! ${p.slug}: metaTitle ${p.metaTitle.length} chars, needs 30-62`); bad++; continue; }
    if (p.metaDescription.length < 130 || p.metaDescription.length > 165) { console.log(`!! ${p.slug}: metaDescription ${p.metaDescription.length} chars, needs 130-165`); bad++; continue; }

    const raw = fs.readFileSync(f, "utf8");
    const fm = JSON.parse(raw.split(/^---$/m)[1]);
    let out = raw;
    let placed = true;
    for (const k of ["metaTitle", "metaDescription"]) {
      const oldLit = JSON.stringify(fm[k]);
      if (!out.includes(oldLit)) { console.log(`!! could not place ${k} in ${p.slug}`); placed = false; break; }
      out = out.replace(oldLit, JSON.stringify(p[k]));
    }
    if (!placed) { bad++; continue; }
    const check = JSON.parse(out.split(/^---$/m)[1]);   // prove frontmatter is still valid JSON
    if (check.metaTitle !== p.metaTitle || check.metaDescription !== p.metaDescription) { console.log(`!! verify failed ${p.slug}`); bad++; continue; }

    rollback.push({ slug: p.slug, metaTitle: row.metaTitle, metaDescription: row.metaDescription, mdMetaTitle: fm.metaTitle, mdMetaDescription: fm.metaDescription });
    console.log(`--- ${p.slug}`);
    console.log(`  why : ${p.why}`);
    console.log(`  title ${(row.metaTitle ?? "").length} -> ${p.metaTitle.length} : ${p.metaTitle}`);
    console.log(`  desc  ${(row.metaDescription ?? "").length} -> ${p.metaDescription.length}`);
    if (WRITE) {
      fs.writeFileSync(f, out, { encoding: "utf8" });
      await prisma.blogPost.update({ where: { slug: p.slug }, data: { metaTitle: p.metaTitle, metaDescription: p.metaDescription } });
      console.log("  -> md + DB written");
    }
  }
  // No rollback file is written on purpose: re-running this script would record the
  // already-patched values as the "previous" state and silently become useless.
  // Git is the rollback. To revert these five posts:
  //   git checkout HEAD -- scripts/blog-rewrite/posts/<slug>.md
  //   npx tsx --env-file=.env scripts/blog-rewrite/write-db.ts --write
  // To revert the whole blog deploy instead: write-db.ts --undo (from backup.json).
  if (WRITE && rollback.length) console.log(`\nprevious values printed above; revert with git checkout HEAD -- scripts/blog-rewrite/posts/<slug>.md then write-db.ts --write`);
  console.log(`\n${patches.length - bad}/${patches.length} ok${WRITE ? "" : "  (DRY RUN, re-run with --write)"}`);
  await prisma.$disconnect();
})();
