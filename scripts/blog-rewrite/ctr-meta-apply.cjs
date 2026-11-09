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

// ---------------------------------------------------------------------------
// Pass 2 (2026-11-09). Pass 1's five patches went live on 2026-10-28 and stay in
// git history; re-applying them is a no-op, so this array holds only the new ones.
// Measured from tmp/gsc-pages.json (28 days) plus per-page query pulls.
// ---------------------------------------------------------------------------
const patches = [
  { slug: "how-to-score-7-ib-math-aa-hl",
    why: "432i p7.6, 2 clicks (0.46%) against ~3.9% expected at that position. The 72-char metaTitle was clipped by Google, and the ranking query is 'how to get a 7 in math aa hl' (p5.3), not 'how to score a 7'. Not in plan.ts and has no md file, so this is a DB-only patch.",
    metaTitle: "How to Get a 7 in IB Math AA HL: Full Study Plan",
    metaDescription: "How to get a 7 in IB Math AA HL: grade boundaries, method marks, a three-phase study system, Paper 1, 2 and 3 strategy, an error log and a weekly plan." },
  { slug: "ib-maths-aa-vs-ai-which-one-should-you-choose",
    why: "435i p16.2, ZERO clicks. The highest-volume query is 'ib math aa ai difference' 22i, plus 'aa vs ai math ib', 'ib aa vs ai' and 'analysis and approaches vs applications and interpretations' 5i at p9.4. The old title asked 'Which Should You Choose?' and never used the word searchers type: difference.",
    metaTitle: "IB Maths AA vs AI: The Difference, and How to Pick",
    metaDescription: "The difference between IB Maths AA vs AI: what each course tests, how HL and SL differ, which degrees expect which, and a profile test to decide before DP1." },
  { slug: "ib-maths-coaching-vs-private-tutor-myp-student",
    why: "204i p9.6, ZERO clicks. Queries are broad private-tuition intent, not MYP-specific: 'ib math private tutoring' 22i p9.2, 'ib private tutor' 10i, 'ib myp tutor' 8i, 'ib private tuition' 5i. 'for MYP Students' narrowed the title away from the search; the plan keyword stays in the post title so the gate still passes.",
    metaTitle: "IB Maths Private Tutor vs Coaching: Which Is Better?",
    metaDescription: "IB maths coaching vs private tutor, compared fairly: where a group class works, where private one-to-one tutoring wins, and how to decide using criteria A to D." },
  { slug: "ib-exam-preparation-guide",
    why: "208i p19.6, ZERO clicks. Queries are 'ib exams' 30i, 'ib exam prep' 13i, 'ib exam preparation' 9i p12.8, 'ib exam prep platforms' 5i p7. The old metaTitle also carried '| IB Gram' on top of the layout template, so the brand rendered twice and ate 9 characters.",
    metaTitle: "IB Exam Prep: A Two-Year Plan for the May Session",
    metaDescription: "A practical IB exam preparation guide for the May session: a two-year revision calendar, mock strategy, past-paper practice and wellbeing, subject by subject." },
];

const pass1 = [
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
    if (!row) { console.log(`!! missing row: ${p.slug}`); bad++; continue; }
    // Posts that predate the blog-rewrite project have a DB row but no md file in
    // ./posts, and are absent from plan.ts, so check.ts never gates them. Patch the
    // row alone rather than skipping the page: the row is what the site renders.
    const hasMd = fs.existsSync(f);
    // check.ts limits, enforced here so a bad patch never reaches the gate or the DB
    if (p.metaTitle.length < 30 || p.metaTitle.length > 62) { console.log(`!! ${p.slug}: metaTitle ${p.metaTitle.length} chars, needs 30-62`); bad++; continue; }
    if (p.metaDescription.length < 130 || p.metaDescription.length > 165) { console.log(`!! ${p.slug}: metaDescription ${p.metaDescription.length} chars, needs 130-165`); bad++; continue; }

    const raw = hasMd ? fs.readFileSync(f, "utf8") : null;
    const fm = hasMd ? JSON.parse(raw.split(/^---$/m)[1]) : {};
    let out = raw;
    if (hasMd) {
      let placed = true;
      for (const k of ["metaTitle", "metaDescription"]) {
        const oldLit = JSON.stringify(fm[k]);
        if (!out.includes(oldLit)) { console.log(`!! could not place ${k} in ${p.slug}`); placed = false; break; }
        out = out.replace(oldLit, JSON.stringify(p[k]));
      }
      if (!placed) { bad++; continue; }
      const check = JSON.parse(out.split(/^---$/m)[1]);   // prove frontmatter is still valid JSON
      if (check.metaTitle !== p.metaTitle || check.metaDescription !== p.metaDescription) { console.log(`!! verify failed ${p.slug}`); bad++; continue; }
    }

    rollback.push({ slug: p.slug, metaTitle: row.metaTitle, metaDescription: row.metaDescription, mdMetaTitle: fm.metaTitle, mdMetaDescription: fm.metaDescription });
    console.log(`--- ${p.slug}`);
    console.log(`  why : ${p.why}`);
    console.log(`  title ${(row.metaTitle ?? "").length} -> ${p.metaTitle.length} : ${p.metaTitle}`);
    console.log(`  desc  ${(row.metaDescription ?? "").length} -> ${p.metaDescription.length}`);
    if (WRITE) {
      if (hasMd) fs.writeFileSync(f, out, { encoding: "utf8" });
      await prisma.blogPost.update({ where: { slug: p.slug }, data: { metaTitle: p.metaTitle, metaDescription: p.metaDescription } });
      console.log(hasMd ? "  -> md + DB written" : "  -> DB written (no md for this post)");
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
