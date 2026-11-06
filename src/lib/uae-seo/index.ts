import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import writtenDatesJson from "./pages/written-dates.json";
import { resolvePageTitle } from "@/lib/seo/page-title";
import { resolveMetaDescription } from "@/lib/seo/meta-description";
import type { JsonLdObject } from "@/lib/seo/schema";
import type { CountrySeoPage } from "@/lib/country-seo/types";
import { uaeSeoPagesMeta } from "./pages-data";
import { uaeSeoContentBySlug } from "./pages";
import { AREAS_BY_CITY, EMIRATES, clusterFor, displayName } from "./facts";
import type { UaeSeoPage, UaeSeoPageMeta } from "./types";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.png");

/** The one IB Gram entity, shared with src/lib/seo/schema.ts so every page reinforces it. */
const ORG_ID = `${SITE_URL}/#organization`;

/**
 * When each page was actually written, stamped at compile time from the source file.
 * pages-data.json carries one constant for all 2,654 rows, which made every <lastmod> and every
 * dateModified identical - a recrawl signal Google correctly ignores.
 */
const writtenDates = writtenDatesJson as Record<string, string>;
const dateFor = (slug: string, fallback: string) => writtenDates[slug] ?? fallback;

export const UAE_HUB_PATH = "/uae/";

const metaBySlug = new Map(uaeSeoPagesMeta.map((page) => [page.slug, page]));
const metaByPath = new Map(uaeSeoPagesMeta.map((page) => [page.path, page]));

/** Every planned slug, written or not. The sitemap only lists the written ones. */
export const uaeSeoSlugs: string[] = uaeSeoPagesMeta.map((page) => page.slug);

/**
 * Only pages with written content are routable. The plan covers 2,654 URLs but content lands
 * wave by wave, and serving a planned-but-unwritten page would ship a thin page to Google -
 * which is exactly the "Crawled - currently not indexed" outcome this whole set exists to avoid.
 */
export function getUaeSeoPage(slug: string): UaeSeoPage | undefined {
  const meta = metaBySlug.get(slug);
  const content = uaeSeoContentBySlug[slug];
  if (!meta || !content) return undefined;
  return { ...meta, content };
}

export const getUaeSeoMeta = (slug: string): UaeSeoPageMeta | undefined => metaBySlug.get(slug);

/** Slugs with content, for generateStaticParams on /uae/[...path]/. */
export function getUaeStaticParams(): Array<{ path: string[] }> {
  return uaeSeoPagesMeta.filter((p) => uaeSeoContentBySlug[p.slug]).map((p) => ({ path: p.segments }));
}

export const hasUaeContent = (slug: string) => Boolean(uaeSeoContentBySlug[slug]);

export function uaeSeoCanonical(meta: UaeSeoPageMeta): string {
  return absoluteUrl(meta.path);
}

/* ------------------------------------------------------------------ */
/* Keywords                                                            */
/* ------------------------------------------------------------------ */

/**
 * The published keyword set for one page.
 *
 * Three sources, in descending order of value: the phrase the URL targets, the long-tail
 * phrases the writer actually wove into the body, and a small set of mechanical variants a
 * UAE parent demonstrably types - "<phrase> near me", "<subject> tutor in <area>",
 * "<syllabus code> tutor <city>". Variants are only generated from facts already on the page,
 * so nothing here promises a term the body does not support.
 *
 * Capped at 25. A keywords list long enough to look like a dump is worth less than a short one
 * that matches the body.
 */
export function uaeKeywordsFor(page: UaeSeoPage): string[] {
  const place = page.area ?? page.city;
  const city = page.city;
  const head = page.primaryKeyword.split(" in ")[0];
  const boardWord = page.board === "IB + IGCSE" ? "IB IGCSE" : page.board;

  const variants = [
    page.primaryKeyword,
    `${head} near me`,
    `${boardWord} tutor in ${place}`,
    `${boardWord} tuition ${place}`,
    `online ${boardWord} tutor ${city}`,
    ...(page.area ? [`${boardWord} tutor ${page.area} ${city}`, `home tutor ${page.area}`] : []),
    ...(page.subject ? [`${page.subject} tutor ${place}`, `${page.subject} tuition ${city}`] : []),
    ...(page.syllabusCode ? [`${page.syllabusCode} tutor ${city}`, `${page.syllabusCode} past papers ${city}`] : []),
    ...(page.level ? [`${page.level.replace(/^the /, "")} tutor ${place}`] : []),
  ];

  return [...new Set([...variants, ...page.content.localKeywords].map((k) => k.replace(/\s{2,}/g, " ").trim()))]
    .filter(Boolean)
    .slice(0, 25);
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

export function buildUaeSeoMetadata(page: UaeSeoPage): Metadata {
  const canonical = uaeSeoCanonical(page);
  const title = page.content.title ?? page.title;
  const description = page.content.metaDescription ?? page.metaDescription;
  const emirate = page.citySlug ? EMIRATES[page.citySlug] : undefined;
  const place = page.area ?? page.city;

  return {
    title: resolvePageTitle(title),
    description: resolveMetaDescription(description),
    keywords: uaeKeywordsFor(page),
    applicationName: "IB Gram",
    authors: [{ name: "IB Gram", url: SITE_URL }],
    creator: "IB Gram",
    publisher: "IB Gram",
    category: "Education",
    // Self-referencing canonical plus an explicit en-AE alternate. x-default points at the
    // same URL because there is exactly one language version of this page.
    alternates: {
      canonical,
      languages: { "en-AE": canonical, "x-default": canonical },
    },
    // Every page in this set is meant to be indexed. Nothing here is ever noindex:
    // a page that is not ready simply does not route (getUaeSeoPage returns undefined).
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "IB Gram",
      locale: "en_AE",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: page.content.h1 ?? page.h1 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
    // Geo meta tags. Not a Google ranking factor, but Bing and several local directories and
    // AI crawlers still read them, and they cost four lines.
    other: {
      "geo.region": emirate ? `AE-${emirateRegionCode(emirate.slug)}` : "AE",
      "geo.placename": place === "the UAE" ? "United Arab Emirates" : `${place}, United Arab Emirates`,
      ...(emirate ? { "geo.position": `${emirate.geo.latitude};${emirate.geo.longitude}`, ICBM: `${emirate.geo.latitude}, ${emirate.geo.longitude}` } : {}),
      "content-language": "en-AE",
      "revisit-after": "7 days",
    },
  };
}

/** ISO 3166-2:AE subdivision codes, for the geo.region meta tag. */
function emirateRegionCode(slug: string): string {
  const codes: Record<string, string> = {
    dubai: "DU",
    "abu-dhabi": "AZ",
    "al-ain": "AZ",
    sharjah: "SH",
    ajman: "AJ",
    "ras-al-khaimah": "RK",
    fujairah: "FU",
    "umm-al-quwain": "UQ",
  };
  return codes[slug] ?? "AE";
}

/* ------------------------------------------------------------------ */
/* Schema                                                              */
/* ------------------------------------------------------------------ */

/**
 * One graph per page: the service, the place it serves, the breadcrumb trail and the FAQs.
 * FAQPage is the one that earns a rich result, and it only validates when every question on
 * the page is in the graph - so all of them go in, not a sample.
 */
export function buildUaeSeoSchema(page: UaeSeoPage): JsonLdObject {
  const canonical = uaeSeoCanonical(page);
  const emirate = page.citySlug ? EMIRATES[page.citySlug] : undefined;
  const placeName = page.area ?? page.city;

  const crumbs = [
    { name: "Home", item: SITE_URL },
    { name: "IB & IGCSE Tutors in the UAE", item: absoluteUrl("/uae/") },
  ];
  if (page.citySlug && page.kind !== "city") crumbs.push({ name: EMIRATES[page.citySlug].name, item: absoluteUrl(`/uae/${page.citySlug}/`) });
  if (page.areaSlug && page.kind !== "area") crumbs.push({ name: page.area!, item: absoluteUrl(`/uae/${page.citySlug}/${page.areaSlug}/`) });
  crumbs.push({ name: page.content.h1 ?? page.h1, item: canonical });

  return {
    "@context": "https://schema.org",
    "@graph": [
      // ONE organization entity for the whole site, not one per page. Every page used to mint
      // `${canonical}#org` - 1,377 separate "IB Gram" organizations at 1,377 different URLs, none
      // of which consolidates. AI engines resolve a brand by @id and sameAs, so a thousand
      // one-page orgs resolve to nothing. This is the same @id the rest of the site uses
      // (src/lib/seo/schema.ts), so the UAE pages now reinforce the real entity.
      // areaServed belongs on the Service below, which is what is actually offered per place.
      {
        "@type": "EducationalOrganization",
        "@id": ORG_ID,
        name: "IB Gram",
        url: SITE_URL,
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: page.content.h1 ?? page.h1,
        serviceType: page.subject ? `${page.subject} tutoring` : "IB and IGCSE tutoring",
        provider: { "@id": ORG_ID },
        areaServed: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Place", name: `${placeName}, United Arab Emirates` },
          ...(emirate ? [{ "@type": "Place", name: emirate.name, geo: { "@type": "GeoCoordinates", latitude: emirate.geo.latitude, longitude: emirate.geo.longitude } }] : []),
        ],
        // UAE delivery is online; saying so in the graph keeps the markup honest.
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: canonical,
          availableLanguage: [{ "@type": "Language", name: "English" }],
        },
        audience: { "@type": "EducationalAudience", educationalRole: "student" },
      },
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: page.content.title ?? page.title,
        description: page.content.metaDescription ?? page.metaDescription,
        inLanguage: "en-AE",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website`, name: "IB Gram", url: SITE_URL },
        dateModified: dateFor(page.slug, page.lastUpdated),
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        keywords: uaeKeywordsFor(page).join(", "),
        // Marks the lead paragraph and the FAQ block as the parts worth reading aloud or
        // quoting. Assistants answering "who tutors IB in Dubai Marina" pull from here.
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".faq-answer"] },
        about: {
          "@type": "Thing",
          name: page.subject || (page.board === "IGCSE" ? "IGCSE tutoring" : "International Baccalaureate tutoring"),
        },
      },
      // A Course node only when the page really is about one named subject. Emitting it on a
      // generic "IB tutor in Dubai" page would be markup that does not match the content.
      ...(page.subject
        ? [
            {
              "@type": "Course",
              "@id": `${canonical}#course`,
              name: `${page.subject} tutoring for ${placeName} students`,
              description: page.content.metaDescription ?? page.metaDescription,
              provider: { "@id": ORG_ID },
              inLanguage: "en-AE",
              educationalLevel: page.level || page.board,
              ...(page.syllabusCode ? { courseCode: page.syllabusCode } : {}),
              hasCourseInstance: {
                "@type": "CourseInstance",
                courseMode: "online",
                courseWorkload: "PT1H30M",
                location: { "@type": "VirtualLocation", url: canonical },
              },
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: page.content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  } as JsonLdObject;
}

/* ------------------------------------------------------------------ */
/* Internal linking                                                    */
/* ------------------------------------------------------------------ */

export interface UaeLink {
  label: string;
  href: string;
  description: string;
}

/**
 * Related pages for the footer rail. Written pages only - an internal link to a 404 is worse
 * than no link. Order: same area, then same city, then the same keyword in another place.
 */
/**
 * Deterministic rotation offset for a slug, so every page starts its tier at a different point.
 *
 * Without this, each tier was read from the top and hundreds of pages linked to the SAME first
 * few results - one page collected 397 inbound links while 306 of 423 had none at all, and a
 * page nothing links to is the "Discovered - currently not indexed" bucket. Offsetting by a
 * hash of the slug spreads the links evenly, and because the hash is stable the link set does
 * not reshuffle on every build.
 */
function rotation(slug: string, length: number): number {
  if (length === 0) return 0;
  let h = 2166136261;
  for (let i = 0; i < slug.length; i += 1) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % length;
}

/** Reads `items` starting at a slug-derived offset and wrapping, instead of always from index 0. */
function rotated<T>(items: T[], slug: string): T[] {
  const start = rotation(slug, items.length);
  return [...items.slice(start), ...items.slice(0, start)];
}

export function getUaeSeoRelated(slug: string, limit = 8): UaeLink[] {
  const meta = metaBySlug.get(slug);
  if (!meta) return [];
  const written = uaeSeoPagesMeta.filter((p) => p.slug !== slug && uaeSeoContentBySlug[p.slug]);
  const keywordHead = meta.primaryKeyword.split(" in ")[0];

  // Neighbourhoods in the same corridor. Area pages were orphaning because the "same city"
  // tier below excludes them (`!p.areaSlug`) and a city hub only lists its first 18 areas -
  // Dubai has 101 - so the rest had nothing pointing at them at all. Corridor neighbours are
  // genuinely related (same schools, same commute), which makes these links useful, not filler.
  const corridorAreas = meta.areaSlug ? new Set(clusterFor(meta.areaSlug).siblings) : null;

  const tiers = [
    written.filter((p) => meta.areaSlug && p.areaSlug === meta.areaSlug),
    written.filter((p) => corridorAreas !== null && p.areaSlug !== undefined && p.areaSlug !== meta.areaSlug && corridorAreas.has(p.areaSlug)),
    written.filter((p) => p.citySlug === meta.citySlug && !p.areaSlug),
    written.filter((p) => p.primaryKeyword.split(" in ")[0] === keywordHead),
    // Same kind of page: the tier that actually reciprocates. A UAE-wide keyword page has no
    // city or area, so before this it fell straight through to the hubs and linked nowhere
    // useful - and nothing linked back to it.
    written.filter((p) => p.kind === meta.kind),
    written.filter((p) => p.board === meta.board),
    written.filter((p) => p.kind === "city" || p.kind === "uae-keyword"),
  ];

  const out: UaeLink[] = [];
  const seen = new Set<string>();
  const take = (tier: UaeSeoPageMeta[], upTo: number) => {
    // Rotate each tier so two pages sharing a tier do not emit identical link lists.
    for (const p of rotated(tier, slug)) {
      if (out.length >= upTo) break;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      out.push({ label: p.h1, href: p.path, description: p.primaryKeyword });
    }
  };

  // The hub tier is last in `tiers`, so with 12 slots and six earlier tiers it was never
  // reached: 355 of 1,106 pages ended up unreachable from any emirate hub, in nine
  // disconnected islands, and 129 of the 137 UAE-wide keyword pages had no inbound path at
  // all. Reserve the first slots for it so every page keeps a route back up to a hub.
  const HUB_SLOTS = 3;
  take(tiers[tiers.length - 1], Math.min(HUB_SLOTS, limit));

  // A guaranteed ring over every written page, in registry order. Rotation alone spreads links
  // but cannot promise that each page is some other page's TARGET, so 601 pages stayed
  // unreachable from /uae/ even with the hub fixed. Linking each page to its immediate successor
  // makes the whole set one cycle, so reachability is structural rather than probabilistic.
  const order = uaeSeoPagesMeta.filter((p) => uaeSeoContentBySlug[p.slug]);
  const here = order.findIndex((p) => p.slug === slug);
  if (here !== -1 && order.length > 1) {
    const next = order[(here + 1) % order.length];
    if (!seen.has(next.slug) && out.length < limit) {
      seen.add(next.slug);
      out.push({ label: next.h1, href: next.path, description: next.primaryKeyword });
    }
  }
  for (const tier of tiers.slice(0, -1)) take(tier, limit);
  take(tiers[tiers.length - 1], limit);
  return out;
}

/** Written children of this page (city -> its areas and keywords; area -> its keywords). */
export function getUaeChildLinks(slug: string, limit = 24): UaeLink[] {
  // The /uae/ hub is the hand-written country page and is not in this registry, so a lookup for
  // it returned undefined and the hub linked to NONE of its 1,106 children - the whole set had
  // no crawl entry point. Treat the empty slug as the hub and serve its top-level children.
  const parentPath = slug === "" ? UAE_HUB_PATH : metaBySlug.get(slug)?.path;
  if (!parentPath) return [];
  const children = uaeSeoPagesMeta.filter((p) => p.parentPath === parentPath && uaeSeoContentBySlug[p.slug]);

  // Round-robin by kind rather than slicing registry order. Dubai has 101 neighbourhoods and
  // several hundred keyword pages; taking the first 18 in registry order gave 18 keyword pages
  // and not one neighbourhood, so the area pages had no inbound link from their own city hub.
  const byKind = new Map<string, UaeSeoPageMeta[]>();
  for (const p of children) {
    if (!byKind.has(p.kind)) byKind.set(p.kind, []);
    byKind.get(p.kind)!.push(p);
  }
  const queues = [...byKind.values()].map((q) => rotated(q, slug));
  const out: UaeSeoPageMeta[] = [];
  for (let i = 0; out.length < limit; i += 1) {
    const before = out.length;
    for (const q of queues) {
      if (out.length >= limit) break;
      if (q[i]) out.push(q[i]);
    }
    if (out.length === before) break; // every queue exhausted
  }
  return out.map((p) => ({ label: p.h1, href: p.path, description: p.primaryKeyword }));
}

/** The parent page, when it has content. Gives every page an "up" link for crawl depth. */
export function getUaeParentLink(slug: string): UaeLink | undefined {
  const meta = metaBySlug.get(slug);
  if (!meta) return undefined;
  if (meta.parentPath === UAE_HUB_PATH) {
    return { label: "IB & IGCSE tutors in the UAE", href: UAE_HUB_PATH, description: "The UAE hub page" };
  }
  const parent = metaByPath.get(meta.parentPath);
  if (!parent || !uaeSeoContentBySlug[parent.slug]) return undefined;
  return { label: parent.h1, href: parent.path, description: parent.primaryKeyword };
}

/* ------------------------------------------------------------------ */
/* Renderer adapter                                                    */
/* ------------------------------------------------------------------ */

/**
 * Builds the CountrySeoPage the shared <CountryLanding> renderer takes, so /uae/<anything>/
 * looks exactly like /uae/ itself. Identity fields come from the plan; every content block
 * comes from the written page - nothing is filled in with boilerplate.
 */
export function toCountrySeoPage(page: UaeSeoPage): CountrySeoPage {
  const c = page.content;
  const emirate = page.citySlug ? EMIRATES[page.citySlug] : undefined;
  return {
    slug: page.slug,
    countryName: page.area ?? page.city,
    countryNameLong: page.area ? `${page.area}, ${page.city}` : page.city === "the UAE" ? "the United Arab Emirates" : `${page.city}, the United Arab Emirates`,
    demonym: "UAE",
    flagCode: "ae",
    countryCode: "AE",
    region: emirate ? emirate.name : "United Arab Emirates",
    timezoneLabel: "Gulf Standard Time (UTC+4)",
    schedulingNote: "Weekday evenings and weekend mornings in Gulf Standard Time",
    lastUpdated: dateFor(page.slug, page.lastUpdated),

    title: c.title ?? page.title,
    metaDescription: c.metaDescription ?? page.metaDescription,
    h1: c.h1 ?? page.h1,
    heroEyebrow: c.heroEyebrow,
    heroSubtitle: c.heroSubtitle,
    primaryKeyword: page.primaryKeyword,
    secondaryKeywords: c.localKeywords,
    imageAltText: `One-to-one online ${page.board} lesson for a student in ${page.area ?? page.city}`,

    heroTrustPoints: c.heroTrustPoints,
    heroStats: c.heroStats,
    intro: c.intro,
    programmes: c.programmes,
    programmesIntro: c.programmesIntro,
    subjects: c.subjects,
    subjectsIntro: c.subjectsIntro,
    igcseSubjects: c.igcseSubjects,
    igcseSubjectsIntro: c.igcseSubjectsIntro,
    regions: c.regions,
    regionsIntro: c.regionsIntro,
    regionsTitle: c.regionsTitle ?? (page.area ? `Nearby areas we cover around ${page.area}` : `Areas we cover across ${page.city}`),
    schoolClusters: c.schoolClusters,
    schoolDisclaimer: c.schoolDisclaimer,
    modes: c.modes,
    modesIntro: c.modesIntro,
    sections: c.sections,
    process: c.process,
    whyPoints: c.whyPoints,
    faqs: c.faqs,
    internalLinks: getUaeSeoRelated(page.slug, 8).map((l) => ({ label: l.label, href: l.href, description: l.description })),
    closingHeading: c.closingHeading,
    closingBody: c.closingBody,
    tutorsIntro: c.tutorsIntro,
  };
}

/** Named schools for the sliding strip under the hero, pulled from the written clusters. */
export function schoolStripFor(page: UaeSeoPage): { schools: readonly string[]; place: string } | undefined {
  const schools = page.content.schoolClusters.flatMap((cluster) => cluster.schools);
  if (schools.length < 4) return undefined;
  return { schools: [...new Set(schools)], place: page.area ?? page.city };
}

/* ------------------------------------------------------------------ */
/* Sitemap                                                             */
/* ------------------------------------------------------------------ */

const PRIORITY: Record<UaeSeoPageMeta["kind"], number> = {
  city: 0.92,
  "uae-keyword": 0.86,
  "city-keyword": 0.82,
  area: 0.78,
  "area-keyword": 0.74,
};

/** Only written pages. A sitemap entry for a 404 is the fastest way to lose crawl budget. */
export function getUaeSeoSitemapEntries(): MetadataRoute.Sitemap {
  return uaeSeoPagesMeta
    .filter((p) => uaeSeoContentBySlug[p.slug])
    .map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: dateFor(p.slug, p.lastUpdated),
      changeFrequency: "weekly" as const,
      priority: PRIORITY[p.kind],
    }));
}

/** How many of the planned pages are live, for the deploy gate and progress reporting. */
export function uaeSeoProgress(): { planned: number; written: number } {
  return { planned: uaeSeoPagesMeta.length, written: uaeSeoPagesMeta.filter((p) => uaeSeoContentBySlug[p.slug]).length };
}

export { AREAS_BY_CITY, EMIRATES, clusterFor, displayName };
