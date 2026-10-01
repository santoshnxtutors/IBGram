// Gate for rewritten blog posts in scripts/blog-rewrite/posts/<key>.md
// (a JSON header between --- lines, then the markdown body).
//   npx tsx scripts/blog-rewrite/check.ts <key> [<key>...]   # gate these posts
//   npx tsx scripts/blog-rewrite/check.ts --all              # gate every written post (+ cross-post similarity)
// Prints PASS or a list of problems per post. Exit code 1 if any post fails.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Markdown } from "../../src/components/blog/Markdown";
import { PLAN, REFERENCE, TAG_VOCAB } from "./plan";

const DIR = "scripts/blog-rewrite/posts";
const MIN_WORDS = 3600;
const ROUTES = new Set(readFileSync("scripts/blog-rewrite/routes.txt", "utf8").split(/\r?\n/).filter(Boolean));
const BLOG_LINKS = new Set([...PLAN.map((p) => `/blog/${p.key}/`), `/blog/${REFERENCE}/`]);
const EXTERNAL_OK = new Set([
  "https://www.ibo.org/",
  "https://www.ibo.org/programmes/diploma-programme/",
  "https://www.ibo.org/programmes/middle-years-programme/",
  "https://www.cambridgeinternational.org/",
  "https://qualifications.pearson.com/",
]);
const BANNED = `in today's fast-paced|delve into|unlock|navigate the complexities|it is important to note|it's worth noting|in conclusion|in summary,|moreover,|furthermore,|additionally,|firstly,|the landscape of|educational landscape|tapestry|a testament to|elevate your|seamless|robust solution|leverage the|game-changer|game changer|look no further|rest assured|dive into|embark on|at the end of the day|cutting-edge|state-of-the-art|world-class|unparalleled|plethora|myriad of|harness the power|revolutionize|revolutionise|paradigm shift|in the realm of|boasts a|nestled in|vibrant city|bustling city|in essence|crucially,|notably,|first and foremost|the key takeaway|one thing is clear|in the heart of|stands as a|plays a vital role|academic journey|learning journey|empower|we understand that|top-notch|second to none|one-stop|hassle-free|peace of mind|needless to say|top-rated|number one|no\\. ?1\\b|#1\\b|india's leading|transforming education`
  .split("|");
const BANNED_RE = new RegExp(`(${BANNED.join("|")})`, "gi");

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  metaKeywords: string[];
  tags: string[];
  body: string;
};

export function readPost(file: string): Post {
  const m = readFileSync(file, "utf8").replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error("file must start with a --- JSON header --- block, then the body");
  return { ...JSON.parse(m[1]), body: m[2].trim() + "\n" };
}

const words = (s: string) => s.split(/\s+/).filter(Boolean).length;
const lc = (s: string) => s.toLowerCase();

function shingles(text: string, n = 8): Set<string> {
  const w = lc(text).replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(" "));
  return out;
}
const overlap = (a: Set<string>, b: Set<string>) => {
  let hit = 0;
  for (const s of a) if (b.has(s)) hit++;
  return a.size ? hit / a.size : 0;
};

export function checkPost(key: string): string[] {
  const entry = PLAN.find((p) => p.key === key);
  if (!entry) return [`no plan entry for ${key}`];
  const file = `${DIR}/${key}.md`;
  if (!existsSync(file)) return [`missing ${file}`];
  let post: Post;
  try {
    post = readPost(file);
  } catch (e) {
    return [`unreadable post file: ${(e as Error).message}`];
  }
  const errs: string[] = [];
  const need = (ok: unknown, msg: string) => {
    if (!ok) errs.push(msg);
  };
  for (const k of ["slug", "title", "metaTitle", "metaDescription", "excerpt", "body"] as const)
    need(typeof post[k] === "string" && post[k].trim(), `missing ${k}`);
  for (const k of ["metaKeywords", "tags"] as const) need(Array.isArray(post[k]), `${k} must be an array`);
  if (errs.length) return errs;

  const { body } = post;
  const kw = lc(entry.kw);
  need(post.slug === key, `slug must be exactly "${key}"`);
  need(post.title.length >= 40 && post.title.length <= 110, `title is ${post.title.length} chars, needs 40-110`);
  need(post.metaTitle.length >= 30 && post.metaTitle.length <= 62, `metaTitle is ${post.metaTitle.length} chars, needs 30-62`);
  need(post.metaDescription.length >= 130 && post.metaDescription.length <= 165, `metaDescription is ${post.metaDescription.length} chars, needs 130-165`);
  need(post.excerpt.length >= 120 && post.excerpt.length <= 320, `excerpt is ${post.excerpt.length} chars, needs 120-320`);
  need(lc(post.title).includes(kw) || lc(post.metaTitle).includes(kw), `primary keyword "${entry.kw}" must appear in title or metaTitle`);
  need(lc(post.metaDescription).includes(kw), `primary keyword "${entry.kw}" must appear in metaDescription`);
  need(post.metaKeywords.length >= 5 && post.metaKeywords.length <= 12, `metaKeywords: ${post.metaKeywords.length}, needs 5-12`);
  need(post.metaKeywords.some((k) => lc(k) === kw), `metaKeywords must include "${entry.kw}" exactly`);
  need(post.tags.length >= 4 && post.tags.length <= 8, `tags: ${post.tags.length}, needs 4-8`);
  for (const t of post.tags) need(TAG_VOCAB.has(t), `tag "${t}" is not in the tag vocabulary`);

  const n = words(body);
  need(n >= MIN_WORDS, `body is ${n} words, needs ${MIN_WORDS}+ (aim 4,200+)`);
  need(!/^#\s/m.test(body), "body must not contain an H1 (# ...); the page renders the title as H1");
  const h2s = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
  need(h2s.length >= 12, `${h2s.length} H2s, needs 12+`);
  need(h2s.filter((h) => h.endsWith("?")).length >= 3, "needs 3+ H2s phrased as questions (ending with ?)");
  need(h2s.filter((h) => lc(h).includes(kw)).length <= 3, "primary keyword in more than 3 H2s (stuffing)");
  const faqIdx = body.search(/^## Frequently Asked Questions\s*$/m);
  need(faqIdx >= 0, 'needs an H2 exactly "## Frequently Asked Questions"');
  if (faqIdx >= 0) {
    const faq = body.slice(faqIdx).split(/^##\s+/m)[1] ?? "";
    const qs = [...faq.matchAll(/^###\s+(.+)$/gm)].map((m) => m[1].trim());
    need(qs.length >= 8, `FAQ has ${qs.length} ### questions, needs 8+`);
    for (const q of qs) need(q.endsWith("?"), `FAQ question must end with "?": ${q}`);
  }
  const first = lc(body.split(/\s+/).slice(0, 110).join(" "));
  need(first.includes(kw), `primary keyword "${entry.kw}" must appear in the first 100 words`);
  const kwCount = lc(body).split(kw).length - 1;
  need(kwCount >= 4 && kwCount <= 16, `primary keyword appears ${kwCount} times in body, needs 4-16`);
  const dashes = (body.match(/—/g) ?? []).length;
  need(dashes <= 12, `${dashes} em dashes, max 12`);

  // Figures and tables
  const openers = [...body.matchAll(/^:::(bars|steps|stats|timeline)\s+(.+)$/gm)];
  const kinds = new Set(openers.map((m) => m[1]));
  need(openers.length >= 3, `${openers.length} data figures, needs 3+`);
  need(kinds.size >= 2, "data figures must use 2+ different kinds (bars, steps, stats, timeline)");
  for (const m of openers) {
    const rest = body.slice(m.index! + m[0].length);
    const close = rest.search(/^:::\s*$/m);
    if (close < 0) {
      errs.push(`figure "${m[2]}" has no closing ::: line`);
      continue;
    }
    const rows = rest.slice(0, close).split("\n").map((l) => l.trim()).filter((l) => l.includes("|"));
    need(rows.length >= 2 && rows.length <= 6, `figure "${m[2]}" has ${rows.length} rows, needs 2-6`);
    if (m[1] === "bars")
      for (const r of rows) need(/^\s*\d+(\.\d+)?\s*$/.test(r.split("|")[1] ?? ""), `bars row needs a 0-100 number second: "${r}"`);
  }
  const tables = (body.match(/^\s*\|[\s:|-]+\|\s*$/gm) ?? []).length;
  need(tables >= 2, `${tables} tables, needs 2+`);
  const sig = body.includes(":::figure signature-ajay:::");
  if (sig && !entry.ajay) errs.push("signature-ajay is only for posts bylined to Ajay Vatsyayan");

  // Links
  const links = [...body.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
  const internal = links.filter((h) => h.startsWith("/"));
  for (const h of links) {
    if (h.startsWith("/")) {
      if (!ROUTES.has(h) && !BLOG_LINKS.has(h)) errs.push(`internal link not a live route: ${h} (grep scripts/blog-rewrite/routes.txt)`);
      if (h === `/blog/${key}/`) errs.push("post links to itself");
    } else if (!EXTERNAL_OK.has(h)) errs.push(`external link not allowed: ${h}`);
  }
  const blogLinks = new Set(internal.filter((h) => h.startsWith("/blog/")));
  need(internal.length >= 10, `${internal.length} internal links, needs 10+`);
  need(blogLinks.size >= 4, `${blogLinks.size} distinct /blog/ links, needs 4+`);
  need(new Set(internal.filter((h) => !h.startsWith("/blog/"))).size >= 3, "needs 3+ distinct non-blog internal links (tutor, programme, city pages)");
  if (entry.pillar) {
    const sibs = PLAN.filter((p) => p.cluster === entry.cluster && p.key !== key);
    for (const s of sibs) need(blogLinks.has(`/blog/${s.key}/`), `pillar post must link to sibling /blog/${s.key}/`);
  }
  if (entry.ajay && entry.cluster === "ib-maths") need(blogLinks.has(`/blog/${REFERENCE}/`), `IB maths posts must link to /blog/${REFERENCE}/`);

  // Honesty
  const banned = [...new Set([...body.matchAll(BANNED_RE)].map((m) => lc(m[1])))];
  if (banned.length) errs.push(`banned phrases: ${banned.join(", ")}`);
  for (const s of body.split(/(?<=[.!?])\s+/)) {
    if (/guarantee/i.test(s) && !s.trim().endsWith("?") && !/\b(no|not|never|cannot|can't|nobody|no one|neither|nor|wary|caution|warning|red flag|beware|avoid)\b/i.test(s))
      errs.push(`un-negated guarantee claim: "${s.slice(0, 140)}"`);
    if (/\b\d[\d,]*\+?\s+(tutors|students|families|parents)\b/i.test(s) && /ib ?gram|our|we\b/i.test(s))
      errs.push(`count claim about IB Gram: "${s.slice(0, 140)}"`);
  }
  if (key !== "why-ib-myp-maths-tutor-charges-5000-per-hour" && /(₹|\bRs\.?\s?\d|\bINR\s?\d)/.test(body)) errs.push("rupee amounts are not allowed");

  // Rendered output
  const html = renderToStaticMarkup(React.createElement(Markdown, { content: body }));
  const text = html.replace(/<[^>]+>/g, " ");
  need(!text.includes(":::"), "unparsed ::: left in rendered output (check figure syntax)");
  need(!/\]\(\//.test(text), "unparsed markdown link left in rendered output");
  need(!/\|\s*-{3}/.test(text), "unparsed table left in rendered output");
  const figures = (html.match(/<figure/g) ?? []).length;
  need(figures >= 3, `${figures} figures rendered, needs 3+`);

  return errs;
}

function similarity(keys: string[]): string[] {
  const ref = readFileSync("src/content/blog/how-to-score-7-ib-math-aa-hl.md", "utf8");
  const docs = new Map<string, Set<string>>([[REFERENCE, shingles(ref)]]);
  for (const f of readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
    try {
      docs.set(f.replace(/\.md$/, ""), shingles(readPost(`${DIR}/${f}`).body));
    } catch {}
  }
  const out: string[] = [];
  for (const k of keys) {
    const a = docs.get(k);
    if (!a) continue;
    for (const [o, b] of docs) {
      if (o === k) continue;
      const v = overlap(a, b);
      if (v > 0.08) out.push(`${k}: ${(v * 100).toFixed(1)}% of its 8-word phrases also appear in ${o} (max 8%), rewrite the shared passages`);
    }
  }
  return out;
}

/** Every problem with these posts, similarity included. */
export function gate(keys: string[]): Map<string, string[]> {
  const sim = similarity(keys);
  return new Map(keys.map((k) => [k, [...checkPost(k), ...sim.filter((s) => s.startsWith(`${k}:`))]]));
}

if (process.argv[1]?.endsWith("check.ts")) {
  const args = process.argv.slice(2);
  const keys = args.includes("--all")
    ? PLAN.map((p) => p.key).filter((k) => existsSync(`${DIR}/${k}.md`))
    : args;
  let failed = 0;
  for (const [k, errs] of gate(keys)) {
    if (errs.length) failed++;
    console.log(errs.length ? `FAIL ${k}\n  - ${errs.join("\n  - ")}` : `PASS ${k}`);
  }
  if (args.includes("--all")) console.log(`\n${keys.length - failed}/${keys.length} pass, ${PLAN.length - keys.length} not written`);
  process.exit(failed ? 1 : 0);
}
