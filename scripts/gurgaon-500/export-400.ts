/**
 * Exports the original 400 workbook pages into the brief + content layout the 500-page
 * expansion uses, so the upgrade workflow and `compile.ts --set 400` can bring them to the
 * current standard (4,000+ words, AEO/GEO structure).
 *
 * Writes tmp/gurgaon-400/{plan.json, keys.txt, briefs/<slug>.json, content/<slug>.json}.
 * content/ starts as the page's current text and is never overwritten here, so re-running
 * the export cannot clobber a page an agent has already upgraded.
 *
 * Run: npx tsx scripts/gurgaon-500/export-400.ts
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { gurgaonSeoPagesMeta } from "../../src/lib/gurgaon-seo/pages-data";
import { gurgaonSeoContentBySlug } from "../../src/lib/gurgaon-seo/content";
import { ANGLES, SECTION_PLANS } from "./build-plan";

const OUT = path.join(process.cwd(), "tmp", "gurgaon-400");
for (const dir of ["briefs", "content"]) mkdirSync(path.join(OUT, dir), { recursive: true });

const plan = gurgaonSeoPagesMeta.map((m, i) => {
  const near = m.localContext.nearbyAreas;
  const board = m.board.replace(" + ", " and ");
  const head = m.primaryKeyword.replace(/\s+in\s+.*$/i, "");
  return {
    id: m.id,
    key: m.slug,
    slug: m.slug,
    path: m.path,
    board: m.board,
    locality: m.locality,
    localitySlug: m.slug.replace(/^.*-in-/, "").replace(/-gurgaon$/, ""),
    localityKind: "area",
    subject: m.subject,
    level: m.level,
    primaryKeyword: m.primaryKeyword,
    h1: m.h1,
    title: m.title,
    metaDescription: m.metaDescription,
    parentPage: m.parentPage,
    searchIntent: m.searchIntent,
    pageType: m.pageType,
    priority: m.priority,
    uniqueAngle: m.uniqueAngle,
    localContext: m.localContext,
    brief: {
      // Offset from the 500 set's rotation so a locality's old and new pages don't open alike.
      angle: ANGLES[(i * 5 + 11) % ANGLES.length],
      sectionPlan: SECTION_PLANS[(i * 2 + 3) % SECTION_PLANS.length],
      syllabus: `Use the real ${board} ${m.subject} syllabus for ${m.level}: paper and component names, assessment criteria, grade scale and exam session months.`,
      focus: m.uniqueAngle,
      secondaryKeywords: [
        `${head} ${m.locality}`,
        `${m.subject} tutor in ${m.locality}`,
        `${board} home tuition ${m.locality} Gurgaon`,
        `${m.subject} online tutor Gurugram`,
        `best ${m.subject} tutor near ${m.locality}`,
        `${m.subject} tuition ${m.locality} Gurugram`,
        `${board} tutor near ${near[0] ?? "Golf Course Road"}`,
        `${m.subject} ${m.level} tutor Gurgaon`,
        `${m.subject} past paper practice Gurgaon`,
        `one to one ${m.subject} tutor Gurugram`,
        `${m.subject} doubt solving ${m.locality}`,
        `${board} home tutor ${near[1] ?? "Sohna Road"} Gurgaon`,
      ],
    },
  };
});

let exported = 0;
for (const entry of plan) {
  writeFileSync(path.join(OUT, "briefs", `${entry.key}.json`), JSON.stringify(entry, null, 1));
  const contentFile = path.join(OUT, "content", `${entry.key}.json`);
  if (!existsSync(contentFile)) {
    writeFileSync(contentFile, JSON.stringify(gurgaonSeoContentBySlug[entry.slug], null, 1));
    exported += 1;
  }
}
writeFileSync(path.join(OUT, "plan.json"), JSON.stringify(plan, null, 1));
writeFileSync(path.join(OUT, "keys.txt"), plan.map((e) => e.key).join("\n"));

console.log(`plan ${plan.length} | content exported ${exported} (existing files kept: ${plan.length - exported})`);
console.log(`subjects: ${[...new Set(plan.map((e) => e.subject))].join(" | ")}`);
