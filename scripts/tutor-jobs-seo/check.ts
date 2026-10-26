/**
 * Quality gate for the tutor-recruitment pages.
 *
 *   npx tsx scripts/tutor-jobs-seo/check.ts
 *
 * Fails the run on anything that would make a page thin, duplicated, un-indexable or
 * internally broken. Run it after editing any page module; it is the smallest thing that
 * breaks if the content regresses.
 */
import { tutorJobSeoPages } from "../../src/lib/tutor-jobs-seo/pages";
import { buildTutorJobSeoSchema } from "../../src/lib/tutor-jobs-seo";
import type { TutorJobSeoPage } from "../../src/lib/tutor-jobs-seo/types";

const MIN_WORDS = 2000;
const MIN_FAQS = 10;
const MIN_KEYWORDS = 20;
const MAX_TITLE = 70;
const MAX_DESCRIPTION = 165;
const MAX_SIMILARITY = 0.4;

const errors: string[] = [];
const warnings: string[] = [];
const fail = (slug: string, message: string) => errors.push(`${slug}: ${message}`);
const warn = (slug: string, message: string) => warnings.push(`${slug}: ${message}`);

/** Every piece of prose a reader actually sees, for word count and similarity. */
function proseOf(page: TutorJobSeoPage): string {
  const sections = [page.intro, page.earnings, ...page.sections];
  return [
    page.h1,
    page.heroSubtitle,
    page.directAnswer,
    ...page.heroTrustPoints,
    ...sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.table ? [section.table.caption, ...section.table.columns, ...section.table.rows.flat()] : []),
    ]),
    page.requirementsIntro,
    ...page.requirements.flatMap((r) => [r.label, r.detail]),
    page.processIntro,
    ...page.process.flatMap((s) => [s.title, s.description]),
    page.policiesIntro,
    ...page.policies.flatMap((p) => [p.heading, p.summary]),
    ...page.whyPoints.flatMap((w) => [w.title, w.description]),
    ...page.faqs.flatMap((f) => [f.question, f.answer]),
    ...page.internalLinks.flatMap((l) => [l.label, l.description]),
    page.closingHeading,
    page.closingBody,
  ].join(" ");
}

const wordsOf = (text: string) => text.split(/\s+/).filter(Boolean);

/** Jaccard overlap on 4-word shingles — catches template reuse that word counts miss. */
function similarity(a: string, b: string): number {
  const shingles = (text: string) => {
    const words = wordsOf(text.toLowerCase().replace(/[^a-z0-9\s]/g, ""));
    return new Set(Array.from({ length: Math.max(0, words.length - 3) }, (_, i) => words.slice(i, i + 4).join(" ")));
  };
  const [setA, setB] = [shingles(a), shingles(b)];
  if (setA.size === 0 || setB.size === 0) return 0;
  let shared = 0;
  for (const shingle of setA) if (setB.has(shingle)) shared += 1;
  return shared / (setA.size + setB.size - shared);
}

const slugs = new Set<string>();
const prose = new Map<string, string>();
const allSlugs = new Set(tutorJobSeoPages.map((page) => page.slug));

for (const page of tutorJobSeoPages) {
  const { slug } = page;

  if (slugs.has(slug)) fail(slug, "duplicate slug");
  slugs.add(slug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(slug, "slug must be lowercase kebab-case");

  const text = proseOf(page);
  prose.set(slug, text);

  const wordCount = wordsOf(text).length;
  if (wordCount < MIN_WORDS) fail(slug, `${wordCount} words, need at least ${MIN_WORDS}`);

  if (page.title.length > MAX_TITLE) warn(slug, `title is ${page.title.length} chars (soft cap ${MAX_TITLE})`);
  if (page.metaDescription.length > MAX_DESCRIPTION) {
    warn(slug, `meta description is ${page.metaDescription.length} chars (soft cap ${MAX_DESCRIPTION})`);
  }
  if (page.metaKeywords.length < MIN_KEYWORDS) {
    fail(slug, `${page.metaKeywords.length} meta keywords, need at least ${MIN_KEYWORDS}`);
  }
  if (new Set(page.metaKeywords).size !== page.metaKeywords.length) fail(slug, "duplicate meta keywords");

  if (page.faqs.length < MIN_FAQS) fail(slug, `${page.faqs.length} FAQs, need at least ${MIN_FAQS}`);
  if (new Set(page.faqs.map((f) => f.question)).size !== page.faqs.length) fail(slug, "duplicate FAQ questions");
  if (page.process.length < 4) fail(slug, "needs at least 4 process steps for the HowTo graph");
  if (page.sections.length < 3) fail(slug, "needs at least 3 long-form sections");
  if (page.heroStats.length !== 4) fail(slug, `heroStats must be exactly 4 (the strip is a 4-column grid)`);
  if (page.policies.length < 5) fail(slug, "needs at least 5 policy summaries");

  // Internal links must point at a sibling job page or a real static route, and never at self.
  for (const link of page.internalLinks) {
    if (!link.href.startsWith("/") || !link.href.endsWith("/")) fail(slug, `link ${link.href} needs leading and trailing slashes`);
    if (link.href === `/${slug}/`) fail(slug, "links to itself");
    const target = link.href.replace(/^\/|\/$/g, "");
    const isStatic = ["join-as-tutor", "tutor-policy", "jobs", "terms-and-conditions", "privacy-policy"].includes(target);
    if (!allSlugs.has(target) && !isStatic) fail(slug, `link ${link.href} points at no known page`);
  }
  if (page.internalLinks.length < 4) fail(slug, "needs at least 4 internal links");

  // Table rows must match their header width, or the rendered table is misaligned.
  for (const section of [page.intro, page.earnings, ...page.sections]) {
    if (!section.table) continue;
    for (const row of section.table.rows) {
      if (row.length !== section.table.columns.length) {
        fail(slug, `table "${section.table.caption}" has a ${row.length}-cell row against ${section.table.columns.length} columns`);
      }
    }
  }

  // Policy anchors must exist on /tutor-policy/, or the deep link lands nowhere.
  const POLICY_ANCHORS = [
    "who-it-covers",
    "home-tuition",
    "online-classes",
    "payouts",
    "tutor-protection",
    "safeguarding",
    "professional-standards",
    "tax",
    "contact",
  ];
  for (const policy of page.policies) {
    if (!POLICY_ANCHORS.includes(policy.anchor)) fail(slug, `policy anchor "${policy.anchor}" is not on /tutor-policy/`);
  }

  // The schema graph must carry the five types we claim, with a question per FAQ.
  const graph = buildTutorJobSeoSchema(page)["@graph"] as Array<Record<string, unknown>>;
  const types = graph.map((node) => node["@type"]);
  for (const required of ["EducationalOrganization", "WebPage", "BreadcrumbList", "FAQPage", "HowTo"]) {
    if (!types.includes(required)) fail(slug, `schema graph is missing ${required}`);
  }
  // JobPosting is deliberately absent: these are evergreen category pages, not dated vacancies.
  if (types.includes("JobPosting")) fail(slug, "JobPosting must not appear on an evergreen category page");
  const faqNode = graph.find((node) => node["@type"] === "FAQPage");
  if ((faqNode?.mainEntity as unknown[])?.length !== page.faqs.length) fail(slug, "FAQPage schema does not match the FAQ list");
}

// Cross-page similarity: the failure mode that killed earlier template sets.
const entries = [...prose.entries()];
for (let i = 0; i < entries.length; i += 1) {
  for (let j = i + 1; j < entries.length; j += 1) {
    const score = similarity(entries[i][1], entries[j][1]);
    if (score > MAX_SIMILARITY) {
      fail(entries[i][0], `${(score * 100).toFixed(1)}% similar to ${entries[j][0]} (cap ${MAX_SIMILARITY * 100}%)`);
    }
  }
}

// ---- Report ----
const counts = entries
  .map(([slug, text]) => `  ${slug.padEnd(34)} ${String(wordsOf(text).length).padStart(5)} words`)
  .join("\n");
console.log(`Checked ${tutorJobSeoPages.length} tutor-recruitment pages.\n${counts}`);

const peak = entries.reduce((max, [slugA, textA], i) => {
  for (let j = i + 1; j < entries.length; j += 1) max = Math.max(max, similarity(textA, entries[j][1]));
  void slugA;
  return max;
}, 0);
console.log(`\nHighest cross-page similarity: ${(peak * 100).toFixed(1)}% (cap ${MAX_SIMILARITY * 100}%)`);

if (warnings.length > 0) console.warn(`\n${warnings.length} warning(s):\n${warnings.map((w) => `  ! ${w}`).join("\n")}`);

if (errors.length > 0) {
  console.error(`\n${errors.length} error(s):\n${errors.map((e) => `  x ${e}`).join("\n")}`);
  process.exit(1);
}
console.log("\nAll checks passed.");
