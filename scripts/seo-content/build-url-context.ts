/**
 * Dumps a compact, per-URL local context blob for every non-Gurgaon sitemap URL.
 * Consumed by the content-writing agents so every page is grounded in real local data.
 * Run: npx tsx scripts/seo-content/build-url-context.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { getLiveCitySeoPages, getCitySeoPageBySlug } from "../../src/lib/seo/city-pages";
import { gurgaonAreaPlaces } from "../../src/lib/local-seo/gurgaon/gurgaon-areas";
import { gurgaonSectorPlaces } from "../../src/lib/local-seo/gurgaon/gurgaon-sectors";
import { gurgaonSocietyPlaces } from "../../src/lib/local-seo/gurgaon/gurgaon-societies";

// Gurugram's sectors and societies are not in the city page's premiumAreas, so the
// generic place lookup below finds nothing for them and the brief loses its real
// local facts — the pipeline's primary uniqueness defence. These carry the per-place
// cluster, intent, neighbours and school ecosystem instead.
const GURGAON_PLACES = new Map(
  [...gurgaonAreaPlaces, ...gurgaonSectorPlaces, ...gurgaonSocietyPlaces].map((p) => [`${p.pageType}:${p.slug}`, p]),
);

const ROOT = process.cwd();
const OUT = path.join(ROOT, "tmp", "seo", "url-context.json");

const IB_SUBJECT_LABELS: Record<string, string> = {
  "math-aa-hl": "IB Math AA HL",
  "math-ai-hl": "IB Math AI HL",
  physics: "IB Physics",
  chemistry: "IB Chemistry",
  biology: "IB Biology",
  economics: "IB Economics",
  english: "IB English",
  dp: "IB Diploma Programme (DP)",
  myp: "IB Middle Years Programme (MYP)",
  pyp: "IB Primary Years Programme (PYP)",
  cp: "IB Career-related Programme (CP)",
  subjects: "IB subjects",
};

const IGCSE_SUBJECT_LABELS: Record<string, string> = {
  accounting: "IGCSE Accounting",
  "accounting-9-1": "IGCSE Accounting (9-1)",
  afrikaans: "IGCSE Afrikaans",
  "afrikaans-second-language": "IGCSE Afrikaans Second Language",
  agriculture: "IGCSE Agriculture",
  "arabic-first-language": "IGCSE Arabic First Language",
  biology: "IGCSE Biology",
  "biology-9-1": "IGCSE Biology (9-1)",
  "business-studies": "IGCSE Business Studies",
  chemistry: "IGCSE Chemistry",
  "computer-science": "IGCSE Computer Science",
  economics: "IGCSE Economics",
  english: "IGCSE English",
  "english-first-language": "IGCSE English First Language",
  "english-language-a": "IGCSE English Language A",
  geography: "IGCSE Geography",
  history: "IGCSE History",
  ict: "IGCSE ICT",
  math: "IGCSE Maths",
  mathematics: "IGCSE Mathematics",
  "mathematics-a": "IGCSE Mathematics A",
  physics: "IGCSE Physics",
};

type Ctx = Record<string, unknown>;

function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((p) => (p.length <= 3 && !["and", "the", "for"].includes(p) ? p.toUpperCase() : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(" ");
}

const cityPages = getLiveCitySeoPages();
const cityBySlug = new Map(cityPages.map((c) => [c.citySlug, c]));

function cityContext(citySlug: string): Ctx {
  const c = cityBySlug.get(citySlug) ?? getCitySeoPageBySlug(citySlug);
  if (!c) return { cityName: titleFromSlug(citySlug), citySlug, unknownCity: true };
  return {
    cityName: c.cityName,
    citySlug: c.citySlug,
    stateName: (c as unknown as { stateName?: string }).stateName ?? "",
    latitude: c.latitude,
    longitude: c.longitude,
    gradeRange: c.gradeRange,
    cityOverview: c.cityOverview,
    serviceAreaText: c.serviceAreaText,
    teachingModeNotes: c.teachingModeNotes,
    localCtaText: c.localCtaText,
    examSessionFocus: c.examSessionFocus,
    curriculumNotes: c.curriculumNotes,
    assessmentSupport: c.assessmentSupport,
    mathCoverage: c.mathCoverage,
    scienceCoverage: c.scienceCoverage,
    humanitiesCoverage: c.humanitiesCoverage,
    languageCoverage: c.languageCoverage,
    premiumAreas: c.premiumAreas.map((a) => ({ name: a.name, slug: a.slug, description: a.description, landmarks: a.nearbyLandmarks ?? [] })),
    nearbyAreas: c.nearbyAreas,
    nearbyCities: c.nearbyCities.map((n) => ({ cityName: n.cityName, citySlug: n.citySlug, description: n.description })),
    schools: c.ibSchoolsCity.map((s) => ({ name: s.name, slug: s.slug, area: s.area, description: s.description, typicalNeeds: s.typicalNeeds })),
    schoolDisclaimer: c.schoolDisclaimer,
    subjects: c.ibSubjectsAvailable.map((s) => ({ name: s.name, slug: s.slug, level: s.level, inventory: s.inventory, description: s.description, cityNote: s.cityNote })),
    programmes: c.ibProgramsAvailable.map((p) => ({ name: p.name, slug: p.slug, ageRange: p.ageRange, description: p.description, cityNote: p.cityNote })),
    subjectsWithStrongInventory: c.subjectsWithStrongInventory,
  };
}

const urls = readFileSync(path.join(ROOT, "all_urls.txt"), "utf8").split("\n").map((l) => l.trim()).filter(Boolean);

const out: Ctx[] = [];
for (const url of urls) {
  const p = url.replace(/^https:\/\/ibgram\.com/, "").replace(/\/+$/, "/") || "/";
  const seg = p.split("/").filter(Boolean);
  // Gurugram used to be skipped wholesale because src/lib/gurgaon-seo/ owns the
  // standalone "/cambridge-igcse-maths-tutor-in-<locality>-gurgaon/" landing pages.
  // But that system never covered the /ib-tutors/gurugram/ and /igcse-tutors/gurugram/
  // routes, so 208 of them fell between the two and shipped with no real content.
  // Those routes belong to this pipeline; the standalone landing pages still do not
  // (they are single-segment paths and never appear in all_urls.txt anyway).
  if (seg.length === 1 && /-gurgaon$/.test(seg[0] ?? "")) continue;

  const base: Ctx = { url, path: p.endsWith("/") ? p : `${p}/` };

  if (seg[0] === "ib-tutors" || seg[0] === "igcse-tutors") {
    const curriculum = seg[0] === "ib-tutors" ? "IB" : "IGCSE";
    const citySlug = seg[1];
    if (!citySlug) { out.push({ ...base, pageType: "hub", curriculum }); continue; }
    const city = cityContext(citySlug);
    if (seg.length === 2) { out.push({ ...base, pageType: "city", curriculum, city }); continue; }
    if (seg.length === 3) {
      const slug = seg[2];
      const labels = curriculum === "IB" ? IB_SUBJECT_LABELS : IGCSE_SUBJECT_LABELS;
      const isProgramme = ["pyp", "myp", "dp", "cp"].includes(slug);
      out.push({
        ...base,
        pageType: isProgramme ? "programme" : "subject",
        curriculum,
        subjectSlug: slug,
        subjectName: labels[slug] ?? `${curriculum} ${titleFromSlug(slug)}`,
        city,
      });
      continue;
    }
    const kind = seg[2];
    const slug = seg[3];
    const pageType = kind === "areas" ? "area" : kind === "sectors" ? "sector" : kind === "societies" ? "society" : "school";
    const areaMatch = (city.premiumAreas as Array<{ name: string; slug: string; description: string; landmarks: string[] }> | undefined)?.find((a) => a.slug === slug);
    const schoolMatch = (city.schools as Array<{ name: string; slug: string; area: string; description: string; typicalNeeds: string[] }> | undefined)?.find((s) => s.slug === slug);
    const gp = citySlug === "gurugram" ? GURGAON_PLACES.get(`${pageType}:${slug}`) : undefined;
    out.push({
      ...base,
      pageType,
      curriculum,
      placeSlug: slug,
      placeName: schoolMatch?.name ?? areaMatch?.name ?? gp?.name ?? titleFromSlug(slug),
      // gp.localIntent is written IB-first; retarget it so an IGCSE page never
      // describes itself as an IB one.
      placeDescription:
        schoolMatch?.description ?? areaMatch?.description ?? gp?.localIntent.replace(/\bIB\b/g, curriculum) ?? "",
      placeLandmarks: areaMatch?.landmarks ?? gp?.nearbySocieties ?? [],
      placeArea: schoolMatch?.area ?? gp?.locationCluster ?? "",
      placeTypicalNeeds: schoolMatch?.typicalNeeds ?? [],
      ...(gp
        ? {
            placeCluster: gp.locationCluster,
            placeIntent: gp.localIntent,
            placeNearbyAreas: gp.nearbyAreas,
            placeNearbySectors: gp.nearbySectors,
            placeNearbySocieties: gp.nearbySocieties,
            placeSchoolEcosystem: gp.schoolEcosystem,
            placeParentArea: gp.parentAreaSlug ?? null,
            placeParentSector: gp.parentSectorSlug ?? null,
          }
        : {}),
      city,
    });
    continue;
  }

  if (seg[0] === "igcse-pages") {
    if (seg.length === 1) { out.push({ ...base, pageType: "hub", curriculum: "IGCSE" }); continue; }
    out.push({ ...base, pageType: "city", curriculum: "IGCSE", variant: "igcse-pages", city: cityContext(seg[1]) });
    continue;
  }

  if (seg[0] === "courses") { out.push({ ...base, pageType: "course", curriculum: (seg[1] ?? "").toUpperCase(), subjectSlug: seg[2], subjectName: titleFromSlug(seg[2] ?? "") }); continue; }
  if (seg[0] === "tutor") { out.push({ ...base, pageType: "tutor-profile", tutorSlug: seg[1] }); continue; }
  if (seg[0] === "programmes") { out.push({ ...base, pageType: "programme-core", slug: seg[1] ?? "index" }); continue; }
  if (seg[0] === "blog") { out.push({ ...base, pageType: "blog", slug: seg[1] ?? "index" }); continue; }
  out.push({ ...base, pageType: "core", slug: seg.join("/") || "home" });
}

mkdirSync(path.dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(out, null, 1), "utf8");

const counts: Record<string, number> = {};
out.forEach((o) => { const k = `${o.curriculum ?? "-"}:${o.pageType}`; counts[k] = (counts[k] ?? 0) + 1; });
console.log("Wrote", out.length, "URL contexts ->", OUT);
console.table(counts);
