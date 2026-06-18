/**
 * SEO Batch 1 — manifest builder.
 *
 * Reads the ordered IB target URL lists (areas -> societies -> cities -> subjects),
 * pulls accurate per-URL seed data from the project's own data sources, and emits
 * tmp/batch1/manifest.json. Each manifest entry is a complete SeoGeneratorInput
 * plus a `writerBrief` of real local context for the writer agent, and the exact
 * pageId to use (reusing existing store pageIds so JSON-store entries override).
 *
 * Read-only against the codebase. No DB, no network.
 *
 * Run: npx tsx scripts/seo-batch/build-manifest.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..", "..");
const TMP = path.join(ROOT, "tmp", "batch1");

type Manifest = {
  url: string;
  routeKey: string;
  pageType: "area" | "society" | "city" | "subject" | "programme";
  citySlug: string;
  cityName: string;
  slug: string;
  pageId: string;
  reusedPageId: boolean;
  input: Record<string, unknown>;
  writerBrief: Record<string, unknown>;
};

function readList(file: string): string[] {
  try {
    return readFileSync(path.join(ROOT, file), "utf8").split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => (/^\d+$/.test(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function routeKeyFromUrl(url: string): string {
  const p = url.replace(/^https?:\/\/[^/]+/i, "");
  return p.endsWith("/") ? p : `${p}/`;
}

const PROGRAMME_SLUGS = new Set(["pyp", "myp", "dp", "cp"]);

async function main() {
  const store = await import("../../src/lib/generated-pages/store");
  const cityPages = await import("../../src/lib/seo/city-pages");

  const existing = store.getAllGeneratedPages();
  const byRoute = new Map<string, (typeof existing)[number]>();
  for (const p of existing) {
    const rk = routeKeyFromUrl(p.canonicalUrl);
    byRoute.set(rk, p);
  }

  const areas = readList("tmp_ib_areas.txt");
  const societies = readList("tmp_ib_societies.txt");
  const cities = readList("tmp_ib_cities.txt");
  const subjects = readList("tmp_ib_subjects.txt");

  // Batch 1 order: areas (all) -> societies (all) -> cities (all) -> subjects (fill to 300)
  const ordered: { url: string; type: Manifest["pageType"] }[] = [
    ...areas.map((url) => ({ url, type: "area" as const })),
    ...societies.map((url) => ({ url, type: "society" as const })),
    ...cities.map((url) => ({ url, type: "city" as const })),
    ...subjects.map((url) => ({ url, type: "subject" as const })),
  ];

  const BATCH_SIZE = 300;
  const batch = ordered.slice(0, BATCH_SIZE);

  const manifest: Manifest[] = [];
  const skipped: { url: string; reason: string }[] = [];

  for (const { url, type } of batch) {
    const routeKey = routeKeyFromUrl(url);
    // path: /ib-tutors/<city>/...
    const segs = routeKey.split("/").filter(Boolean); // e.g. ib-tutors, city, areas, slug
    const citySlug = segs[1];
    const city = cityPages.getCitySeoPageBySlug(citySlug) as any;
    if (!city) {
      skipped.push({ url, reason: `No city seed data for citySlug=${citySlug}` });
      continue;
    }
    const cityName: string = city.cityName;
    const ex = byRoute.get(routeKey);

    let pageType: Manifest["pageType"] = type;
    let slug = "";
    let microLocationName: string | undefined;
    let microLocationType: string | undefined;
    let serviceFocus = "IB tutors";
    let primaryKeyword = "";
    let subjectsList: string[] = [];
    const programmes: string[] = ["PYP", "MYP", "DP"];
    const writerBrief: Record<string, unknown> = {};

    const citySubjects: string[] = (city.ibSubjectsAvailable ?? []).map((s: any) => s.name);
    const cityPremiumAreas: string[] = (city.premiumAreas ?? []).filter((a: any) => a.pageEnabled).map((a: any) => a.name);
    const cityNearbyAreas: string[] = city.nearbyAreas ?? [];
    const cityNearbyCities: string[] = (city.nearbyCities ?? []).map((c: any) => c.cityName);
    const citySchools: string[] = (city.ibSchoolsCity ?? []).map((s: any) => s.name ?? s.schoolName ?? titleCase(s.slug ?? "")).filter(Boolean);
    const schoolDisclaimer: string = city.schoolDisclaimer ?? "IB Gram is an independent tutoring platform and is not officially affiliated with any school, the IB Organization, or exam boards unless specifically stated.";

    if (type === "area") {
      pageType = "area";
      slug = segs[3];
      microLocationType = "area";
      const areaSeed = (city.premiumAreas ?? []).find((a: any) => a.slug === slug);
      microLocationName = ex?.microLocationName ?? areaSeed?.name ?? titleCase(slug);
      serviceFocus = "IB tutors";
      primaryKeyword = `IB tutors near ${microLocationName} ${cityName}`;
      subjectsList = (ex?.subjects?.length ? ex.subjects : citySubjects) ?? [];
      writerBrief.areaDescription = areaSeed?.description ?? ex?.introSummary ?? "";
      writerBrief.nearbyLandmarks = areaSeed?.nearbyLandmarks ?? [];
      writerBrief.nearbyAreas = ex?.nearbyAreas?.length ? ex.nearbyAreas : cityNearbyAreas;
      writerBrief.schoolsMentioned = ex?.schoolsMentioned?.length ? ex.schoolsMentioned : citySchools;
      writerBrief.existingHeroSubtitle = ex?.heroSubtitle ?? "";
    } else if (type === "society") {
      pageType = "society";
      slug = segs[3];
      microLocationType = "society";
      microLocationName = ex?.microLocationName ?? titleCase(slug);
      serviceFocus = "IB tutors";
      primaryKeyword = `IB tutors near ${microLocationName} ${cityName}`;
      subjectsList = (ex?.subjects?.length ? ex.subjects : citySubjects) ?? [];
      writerBrief.societyType = "premium residential society/condominium";
      writerBrief.nearbyAreas = ex?.nearbyAreas?.length ? ex.nearbyAreas : cityNearbyAreas;
      writerBrief.schoolsMentioned = ex?.schoolsMentioned?.length ? ex.schoolsMentioned : citySchools;
      writerBrief.existingHeroSubtitle = ex?.heroSubtitle ?? "";
    } else if (type === "city") {
      pageType = "city";
      slug = "";
      serviceFocus = "IB tutors";
      primaryKeyword = `IB tutors in ${cityName}`;
      subjectsList = citySubjects;
      writerBrief.cityOverview = city.cityOverview ?? [];
      writerBrief.cityAcademicIntro = city.cityAcademicIntro ?? [];
      writerBrief.premiumAreas = (city.premiumAreas ?? []).map((a: any) => ({ name: a.name, description: a.description }));
      writerBrief.schoolsMentioned = citySchools;
      writerBrief.subjectsDetail = (city.ibSubjectsAvailable ?? []).map((s: any) => ({ name: s.name, level: s.level, note: s.cityNote }));
    } else if (type === "subject") {
      slug = segs[2];
      const programmeMatch = PROGRAMME_SLUGS.has(slug);
      pageType = programmeMatch ? "programme" : "subject";
      const subjDetail = (city.ibSubjectsAvailable ?? []).find((s: any) => s.slug === slug);
      const progDetail = (city.ibProgramsAvailable ?? []).find((s: any) => s.slug === slug);
      const focus = subjDetail ?? progDetail;
      serviceFocus = focus?.name ?? titleCase(slug);
      primaryKeyword = programmeMatch ? `IB ${serviceFocus} tutors in ${cityName}` : `IB ${serviceFocus} tutor in ${cityName}`;
      subjectsList = programmeMatch ? citySubjects : [serviceFocus];
      writerBrief.subjectName = serviceFocus;
      writerBrief.subjectLevel = focus?.level ?? "";
      writerBrief.subjectDescription = focus?.description ?? "";
      writerBrief.subjectCityNote = focus?.cityNote ?? "";
      writerBrief.premiumAreas = cityPremiumAreas;
      writerBrief.schoolsMentioned = citySchools;
    }

    const pageId =
      ex?.pageId ??
      ["IBG", cityName, pageType, slug || "city", serviceFocus]
        .map((s) => s.toString().toUpperCase().replace(/[^A-Z0-9]+/g, "_"))
        .join("_")
        .replace(/_+/g, "_")
        .replace(/^_|_$/g, "");

    const secondaryKeywords =
      pageType === "subject"
        ? [`IB ${serviceFocus} HL tutor ${cityName}`, `IB ${serviceFocus} SL tutor ${cityName}`, `IB ${serviceFocus} online tutor`, `${serviceFocus} IB home tutor ${cityName}`]
        : pageType === "programme"
        ? [`IB ${serviceFocus} tutor ${cityName}`, `IB ${serviceFocus} home tutor ${cityName}`, `IB ${serviceFocus} online tutoring`]
        : pageType === "city"
        ? [`IB home tutors ${cityName}`, `IB DP tutor ${cityName}`, `IB Math AA tutor ${cityName}`, `IB online tutors ${cityName}`]
        : [`IB home tutor ${microLocationName}`, `IB DP tutor near ${microLocationName}`, `IB Math AA tutor ${microLocationName}`, `IB online tutors ${cityName}`];

    const input: Record<string, unknown> = {
      pageType,
      cityName,
      citySlug,
      parentLocation: pageType === "area" || pageType === "society" ? cityName : undefined,
      microLocationName,
      microLocationType: pageType === "area" || pageType === "society" ? microLocationType : undefined,
      primaryKeyword,
      secondaryKeywords,
      serviceFocus,
      programmes,
      subjects: subjectsList.length ? subjectsList : citySubjects,
      tutoringModes: ["home", "online", "hybrid"],
      premiumAreas: cityPremiumAreas,
      nearbyAreas: (writerBrief.nearbyAreas as string[]) ?? cityNearbyAreas,
      nearbyCities: cityNearbyCities,
      schoolsMentioned: (writerBrief.schoolsMentioned as string[]) ?? citySchools,
      ctaFocus: "Book a free academic consultation",
      publishMode: "publish",
      indexPreference: "index",
    };

    writerBrief.cityName = cityName;
    writerBrief.citySubjects = citySubjects;
    writerBrief.cityNearbyCities = cityNearbyCities;
    writerBrief.schoolDisclaimer = schoolDisclaimer;

    manifest.push({ url, routeKey, pageType, citySlug, cityName, slug, pageId, reusedPageId: Boolean(ex), input, writerBrief });
  }

  mkdirSync(TMP, { recursive: true });
  mkdirSync(path.join(TMP, "content"), { recursive: true });
  writeFileSync(path.join(TMP, "manifest.json"), JSON.stringify(manifest, null, 2));

  // Summary
  const counts: Record<string, number> = {};
  let reused = 0;
  for (const m of manifest) {
    counts[m.pageType] = (counts[m.pageType] || 0) + 1;
    if (m.reusedPageId) reused++;
  }
  console.log("Manifest entries:", manifest.length);
  console.log("By type:", JSON.stringify(counts));
  console.log("Reused existing pageIds (override):", reused);
  console.log("Skipped:", skipped.length, JSON.stringify(skipped.slice(0, 10)));
  // pageId uniqueness check
  const ids = new Set<string>();
  const dupes: string[] = [];
  for (const m of manifest) {
    if (ids.has(m.pageId)) dupes.push(m.pageId);
    ids.add(m.pageId);
  }
  console.log("Duplicate pageIds:", dupes.length, JSON.stringify(dupes.slice(0, 10)));
}

main().catch((e) => {
  console.error("MANIFEST ERROR:", e);
  process.exit(1);
});
