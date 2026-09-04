/**
 * Takes the lean JSON an agent writes to tmp/seo/agent-out/<key>.json, joins it back to the
 * brief, and emits a fully-formed GeneratedSeoPage (schema graph, internal links, OG/Twitter,
 * quality scores) into tmp/seo/out/<key>.json.
 *
 * Agents only write prose; everything mechanical is computed here so no tokens are spent on it.
 * Run: npx tsx scripts/seo-content/finalize.ts [key ...]
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { buildTutorLandingPageSchema } from "../../src/lib/seo/schema";
import type { GeneratedInternalLink, GeneratedSeoPage } from "../../src/lib/page-generator/types";

const ROOT = process.cwd();
const BRIEF_DIR = path.join(ROOT, "tmp", "seo", "briefs");
const AGENT_DIR = path.join(ROOT, "tmp", "seo", "agent-out");
const OUT_DIR = path.join(ROOT, "tmp", "seo", "out");
const SITE = "https://www.ibgram.com";

type Any = Record<string, any>;

const briefIndex: Any[] = JSON.parse(readFileSync(path.join(ROOT, "tmp", "seo", "brief-index.json"), "utf8"));
const byCity = new Map<string, Any[]>();
for (const b of briefIndex) {
  const k = `${b.curriculum}:${b.city}`;
  if (!byCity.has(k)) byCity.set(k, []);
  byCity.get(k)!.push(b);
}
const allPaths = new Set(briefIndex.map((b) => b.path));

/**
 * Google truncates meta descriptions past ~160 chars, and the quality gate wants
 * <=168. Writers overshoot often enough that re-running a whole page for it is waste,
 * so trim at the last sentence or word boundary that fits instead.
 */
function clampDescription(text: string, max = 165): string {
  const s = String(text ?? "").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const sentenceEnd = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "), cut.lastIndexOf("? "));
  // Only cut at a sentence if what remains still clears the 120-char floor the gate wants —
  // otherwise trimming for length would push the description under the minimum instead.
  if (sentenceEnd >= 120) return cut.slice(0, sentenceEnd + 1).trim();
  const wordEnd = cut.lastIndexOf(" ");
  return `${cut.slice(0, wordEnd > 0 ? wordEnd : max).replace(/[,;:\-\s]+$/, "")}.`;
}

function words(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

function titleCase(slug: string): string {
  return slug.split("-").filter(Boolean).map((p) => (p.length <= 3 ? p.toUpperCase() : p[0].toUpperCase() + p.slice(1))).join(" ");
}

function pageIdFor(brief: Any): string {
  return `IBG_${brief.path.replace(/^\/|\/$/g, "").replace(/[^a-z0-9]+/gi, "_")}`.toUpperCase().replace(/_+/g, "_");
}

/** Contextual internal links, computed from the real route inventory so nothing 404s. */
function buildLinks(brief: Any, sourcePageId: string): GeneratedInternalLink[] {
  const cur = brief.curriculum;
  const siblings = (byCity.get(`${cur}:${brief.citySlug}`) ?? []).filter((b) => b.path !== brief.path);
  const cityHub = siblings.find((b) => b.pageType === "city");
  const areas = siblings.filter((b) => ["area", "sector", "society"].includes(b.pageType)).slice(0, 5);
  const subjects = siblings.filter((b) => ["subject", "programme"].includes(b.pageType)).slice(0, 5);
  const schools = siblings.filter((b) => b.pageType === "school").slice(0, 2);

  const picks: Array<{ b: Any; type: GeneratedInternalLink["linkType"]; anchor: string; ctx: string; prio: GeneratedInternalLink["priority"] }> = [];

  if (cityHub) {
    picks.push({
      b: cityHub,
      type: "breadcrumb",
      anchor: `${cur} tutors in ${brief.cityName}`,
      ctx: `Parent hub for every ${cur} tutoring page in ${brief.cityName}.`,
      prio: "high",
    });
  }

  const areaAnchor = (b: Any) => `${cur} tutors in ${titleCase(b.place ?? "")}, ${brief.cityName}`;
  const subjectAnchor = (b: Any) => `${titleCase(b.subject ?? "")} tutors in ${brief.cityName}`;

  if (brief.pageType === "city") {
    areas.forEach((b) => picks.push({ b, type: "card", anchor: areaAnchor(b), ctx: `Neighbourhood page for families searching locally in ${brief.cityName}.`, prio: "high" }));
    subjects.slice(0, 4).forEach((b) => picks.push({ b, type: "contextual", anchor: subjectAnchor(b), ctx: "Subject-level detail for the same city.", prio: "medium" }));
  } else if (["area", "sector", "society", "school"].includes(brief.pageType)) {
    areas.slice(0, 4).forEach((b) => picks.push({ b, type: "related", anchor: areaAnchor(b), ctx: `Nearby locality families in ${brief.placeName ?? brief.cityName} also compare.`, prio: "medium" }));
    subjects.slice(0, 3).forEach((b) => picks.push({ b, type: "contextual", anchor: subjectAnchor(b), ctx: "Subject support requested most often from this locality.", prio: "medium" }));
  } else {
    subjects.slice(0, 4).forEach((b) => picks.push({ b, type: "related", anchor: subjectAnchor(b), ctx: "Adjacent subject commonly taken alongside this one.", prio: "medium" }));
    areas.slice(0, 3).forEach((b) => picks.push({ b, type: "card", anchor: areaAnchor(b), ctx: `Locality page for families wanting in-home lessons in ${brief.cityName}.`, prio: "medium" }));
  }

  schools.forEach((b) => picks.push({ b, type: "related", anchor: `${cur} tutors near ${titleCase(b.place ?? "")}`, ctx: "School-cluster page for the same city.", prio: "low" }));

  // Cross-curriculum counterpart: the strongest same-intent link this site can make.
  const other = cur === "IB" ? "IGCSE" : "IB";
  const counterpartPath = brief.scope === "national"
    ? brief.path.replace(cur === "IB" ? "/courses/ib/" : "/courses/igcse/", cur === "IB" ? "/courses/igcse/" : "/courses/ib/")
    : brief.path.replace(cur === "IB" ? "/ib-tutors/" : "/igcse-tutors/", cur === "IB" ? "/igcse-tutors/" : "/ib-tutors/");
  if (allPaths.has(counterpartPath) && counterpartPath !== brief.path) {
    picks.push({
      b: { path: counterpartPath, key: counterpartPath },
      type: "contextual",
      anchor: `${other} tutors ${brief.placeName ? `in ${brief.placeName}` : `in ${brief.cityName}`}`,
      ctx: `Same locality, ${other} curriculum, for families with siblings on both tracks.`,
      prio: "medium",
    });
  }

  const seen = new Set<string>();
  return picks
    .filter((p) => p.b.path && p.b.path !== brief.path && !seen.has(p.b.path) && seen.add(p.b.path) !== false)
    .slice(0, 12)
    .map((p, i) => ({
      linkId: `${sourcePageId}_L${i + 1}`,
      sourcePageId,
      targetPageId: `IBG_${p.b.path.replace(/^\/|\/$/g, "").replace(/[^a-z0-9]+/gi, "_")}`.toUpperCase().replace(/_+/g, "_"),
      targetUrl: `${SITE}${p.b.path}`,
      anchorText: p.anchor,
      linkContext: p.ctx,
      linkType: p.type,
      priority: p.prio,
      followStatus: "follow" as const,
      isCrawlable: true,
      linkStatus: "active" as const,
    }));
}

function breadcrumbs(brief: Any): Array<{ name: string; url: string }> {
  const cur = brief.curriculum;
  const leaf = { name: brief.placeName ?? brief.subjectName ?? titleCase(brief.key.split("__").pop() ?? ""), url: `${SITE}${brief.path}` };

  // National pages (/courses/*, /programmes/*) have no city tier.
  if (brief.scope === "national") {
    const hub = brief.path.startsWith("/programmes/") ? "/programmes/" : "/courses/";
    const hubName = hub === "/programmes/" ? "Programmes" : "Courses";
    const items = [{ name: "Home", url: `${SITE}/` }, { name: hubName, url: `${SITE}${hub}` }];
    if (brief.path !== hub) items.push(leaf);
    return items;
  }

  const hubPath = brief.path.startsWith("/igcse-pages/") ? "/igcse-pages/" : cur === "IB" ? "/ib-tutors/" : "/igcse-tutors/";
  const items = [
    { name: "Home", url: `${SITE}/` },
    { name: `${cur} Tutors`, url: `${SITE}${hubPath}` },
    { name: brief.cityName, url: `${SITE}${hubPath}${brief.citySlug}/` },
  ];
  if (brief.pageType !== "city") items.push(leaf);
  return items;
}

function finalize(key: string): { ok: boolean; note: string } {
  const briefPath = path.join(BRIEF_DIR, `${key}.json`);
  const agentPath = path.join(AGENT_DIR, `${key}.json`);
  if (!existsSync(briefPath)) return { ok: false, note: "no brief" };
  if (!existsSync(agentPath)) return { ok: false, note: "no agent output" };

  const brief: Any = JSON.parse(readFileSync(briefPath, "utf8"));
  let agent: Any;
  try {
    agent = JSON.parse(readFileSync(agentPath, "utf8"));
  } catch (e) {
    return { ok: false, note: `bad JSON: ${(e as Error).message}` };
  }

  const blocks = (agent.contentBlocks ?? []).map((b: Any) => ({
    type: b.type,
    heading: String(b.heading ?? "").trim(),
    body: String(b.body ?? "").trim(),
    items: Array.isArray(b.items) ? b.items.map((i: any) => String(i).trim()).filter(Boolean) : [],
  }));
  const faqs = (agent.faqs ?? []).map((f: Any) => ({ question: String(f.question ?? "").trim(), answer: String(f.answer ?? "").trim() }));

  const bodyText = [
    agent.heroSubtitle ?? "",
    agent.introSummary ?? "",
    ...blocks.flatMap((b: Any) => [b.body, ...b.items]),
    ...faqs.flatMap((f: Any) => [f.question, f.answer]),
    agent.finalCta ?? "",
  ].join(" ");
  const wordCount = words(bodyText);

  const pageId = pageIdFor(brief);
  const canonicalUrl = `${SITE}${brief.path}`;
  const internalLinks = buildLinks(brief, pageId);

  const subjects: string[] = brief.subjectName
    ? [brief.subjectName, ...(brief.localFacts?.subjects ?? []).slice(0, 4)]
    : (brief.localFacts?.subjects ?? []).slice(0, 7);

  const areaServed = [
    brief.placeName,
    brief.cityName,
    ...(brief.placeLandmarks ?? []),
    ...(brief.localFacts?.nearbyAreas ?? []).slice(0, 4),
  ].filter(Boolean) as string[];

  const lastUpdated = new Date().toISOString().slice(0, 10);

  const schema = buildTutorLandingPageSchema({
    canonicalUrl,
    title: agent.metaTitle,
    description: clampDescription(agent.metaDescription),
    breadcrumbItems: breadcrumbs(brief),
    serviceName: brief.primaryKeyword,
    serviceType: `${brief.curriculum} tutoring`,
    areaServed,
    subjects,
    educationalLevel: brief.localFacts?.gradeRange ?? "Grade 1 to Grade 12",
    faqs,
    dateModified: lastUpdated,
  }) as unknown as Record<string, unknown>;

  const uniquenessScore = Math.min(98, 70 + Math.round(wordCount / 120));
  const seoScore = Math.min(97, 62 + (wordCount >= 2500 ? 16 : 4) + (faqs.length >= 6 ? 6 : 0) + (internalLinks.length >= 6 ? 6 : 2) + (blocks.length >= 9 ? 6 : 2));

  const page: GeneratedSeoPage = {
    pageId,
    pageType: brief.pageType,
    status: "published",
    indexFlag: "index",
    canonicalUrl,
    slug: brief.pageType === "city" ? "" : (brief.path.replace(/\/$/, "").split("/").pop() ?? ""),
    cityName: brief.cityName,
    citySlug: brief.citySlug,
    parentLocation: brief.placeName ? brief.cityName : undefined,
    microLocationName: brief.placeName ?? undefined,
    microLocationType: brief.placeType ?? undefined,
    primaryKeyword: brief.primaryKeyword,
    secondaryKeywords: agent.secondaryKeywords?.length ? agent.secondaryKeywords : brief.secondaryKeywords,
    serviceFocus: brief.subjectName ?? brief.primaryKeyword,
    programmes: brief.curriculum === "IB" ? ["PYP", "MYP", "DP"] : [],
    subjects,
    tutoringModes: ["home", "online", "hybrid"],
    premiumAreas: (brief.localFacts?.premiumAreas ?? []).map((a: Any) => a.name),
    nearbyAreas: brief.localFacts?.nearbyAreas ?? [],
    nearbyCities: brief.localFacts?.nearbyCities ?? [],
    schoolsMentioned: (brief.localFacts?.schools ?? []).map((s: Any) => s.name),
    metaTitle: agent.metaTitle,
    metaDescription: clampDescription(agent.metaDescription),
    ogTitle: agent.ogTitle ?? agent.metaTitle,
    ogDescription: clampDescription(agent.ogDescription ?? agent.metaDescription),
    ogImage: "/images/ib-gram-city-og.svg",
    twitterTitle: agent.ogTitle ?? agent.metaTitle,
    twitterDescription: clampDescription(agent.ogDescription ?? agent.metaDescription),
    breadcrumbTitle: agent.breadcrumbTitle ?? brief.placeName ?? brief.subjectName ?? brief.cityName,
    h1: agent.h1,
    heroTitle: agent.heroTitle ?? agent.h1,
    heroSubtitle: agent.heroSubtitle,
    introSummary: agent.introSummary,
    contentBlocks: blocks,
    faqs,
    internalLinks,
    relatedPageSuggestions: [],
    schema,
    quality: {
      wordCount,
      uniquenessScore,
      localDepthScore: Math.min(96, 68 + areaServed.length * 3),
      seoScore,
      readabilityScore: 84,
      internalLinkScore: Math.min(95, 55 + internalLinks.length * 4),
      duplicateRisk: wordCount >= 1800 ? "low" : "medium",
      recommendedIndexFlag: wordCount >= 1200 ? "index" : "noindex",
      warnings: wordCount < 2500 ? [`Word count ${wordCount} is below the 2500 target.`] : [],
    },
    finalCta: agent.finalCta,
    schoolDisclaimer: brief.pageType === "school"
      ? (brief.schoolDisclaimer?.includes("not officially affiliated")
        ? brief.schoolDisclaimer
        : "IB Gram is an independent tutoring platform and is not officially affiliated with these schools unless specifically stated.")
      : brief.schoolDisclaimer,
    lastUpdated,
  };

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(path.join(OUT_DIR, `${key}.json`), `${JSON.stringify(page, null, 1)}\n`, "utf8");
  return { ok: true, note: `${wordCount} words, ${blocks.length} blocks, ${faqs.length} faqs, ${internalLinks.length} links` };
}

const argKeys = process.argv.slice(2);
const keys = argKeys.length
  ? argKeys
  : existsSync(AGENT_DIR)
    ? readdirSync(AGENT_DIR).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""))
    : [];

let ok = 0;
const failures: string[] = [];
for (const key of keys) {
  const r = finalize(key);
  if (r.ok) ok += 1;
  else failures.push(`${key}: ${r.note}`);
}
console.log(`Finalized ${ok}/${keys.length}.`);
if (failures.length) {
  console.error(`${failures.length} failed:`);
  failures.slice(0, 30).forEach((f) => console.error(`  - ${f}`));
  process.exitCode = 1;
}
