import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import writtenDatesJson from "./pages/written-dates.json";
import { resolvePageTitle } from "@/lib/seo/page-title";
import { resolveMetaDescription } from "@/lib/seo/meta-description";
import type { JsonLdObject } from "@/lib/seo/schema";
import type { CountrySeoPage } from "@/lib/country-seo/types";
import { saudiSeoPagesMeta } from "./pages-data";
import { getSaudiContent, hasSaudiContent, saudiWrittenSlugs } from "./pages";
import { AREAS_BY_CITY, CITIES, clusterFor, displayName } from "./facts";
import type { SaudiSeoPage, SaudiSeoPageMeta } from "./types";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.png");

/** The one IB Gram entity, shared with src/lib/seo/schema.ts so every page reinforces it. */
const ORG_ID = `${SITE_URL}/#organization`;

export const SAUDI_HUB_PATH = "/saudi-arabia/";

/**
 * When each page was actually written, stamped at compile time from the source file.
 * pages-data.json carries one constant for all 2,492 rows, which would make every <lastmod> and
 * every dateModified identical - a recrawl signal Google correctly ignores.
 */
const writtenDates = writtenDatesJson as Record<string, string>;
const dateFor = (slug: string, fallback: string) => writtenDates[slug] ?? fallback;

const metaBySlug = new Map(saudiSeoPagesMeta.map((page) => [page.slug, page]));
const metaByPath = new Map(saudiSeoPagesMeta.map((page) => [page.path, page]));

/** Every planned slug, written or not. The sitemap only lists the written ones. */
export const saudiSeoSlugs: string[] = saudiSeoPagesMeta.map((page) => page.slug);

/**
 * Only pages with written content are routable. The plan covers 2,492 URLs but content lands
 * wave by wave, and serving a planned-but-unwritten page would ship a thin page to Google -
 * exactly the "Crawled - currently not indexed" outcome this whole set exists to avoid.
 *
 * Async because the prose lives in a shard loaded on demand; see ./pages/index.ts for why.
 */
export async function getSaudiSeoPage(slug: string): Promise<SaudiSeoPage | undefined> {
  const meta = metaBySlug.get(slug);
  if (!meta || !hasSaudiContent(slug)) return undefined;
  const content = await getSaudiContent(slug);
  return content ? { ...meta, content } : undefined;
}

export const getSaudiSeoMeta = (slug: string): SaudiSeoPageMeta | undefined => metaBySlug.get(slug);

/** Slugs with content, for generateStaticParams on /saudi-arabia/[...path]/. */
export function getSaudiStaticParams(): Array<{ path: string[] }> {
  return saudiSeoPagesMeta.filter((p) => hasSaudiContent(p.slug)).map((p) => ({ path: p.segments }));
}

export { hasSaudiContent };

export function saudiSeoCanonical(meta: SaudiSeoPageMeta): string {
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
 * Saudi parent demonstrably types - "<phrase> near me", "<subject> tutor in <district>",
 * "<syllabus code> tutor <city>". Variants are only generated from facts already on the page,
 * so nothing here promises a term the body does not support.
 *
 * Capped at 25. A keywords list long enough to look like a dump is worth less than a short one
 * that matches the body.
 */
export function saudiKeywordsFor(page: SaudiSeoPage): string[] {
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

export function buildSaudiSeoMetadata(page: SaudiSeoPage): Metadata {
  const canonical = saudiSeoCanonical(page);
  const title = page.content.title ?? page.title;
  const description = page.content.metaDescription ?? page.metaDescription;
  const city = page.citySlug ? CITIES[page.citySlug] : undefined;
  const place = page.area ?? page.city;

  return {
    title: resolvePageTitle(title),
    description: resolveMetaDescription(description),
    keywords: saudiKeywordsFor(page),
    applicationName: "IB Gram",
    authors: [{ name: "IB Gram", url: SITE_URL }],
    creator: "IB Gram",
    publisher: "IB Gram",
    category: "Education",
    // Self-referencing canonical plus an explicit en-SA alternate. x-default points at the same
    // URL because there is exactly one language version of this page.
    alternates: {
      canonical,
      languages: { "en-SA": canonical, "x-default": canonical },
    },
    // Every page in this set is meant to be indexed. Nothing here is ever noindex: a page that
    // is not ready simply does not route (getSaudiSeoPage returns undefined).
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
      locale: "en_SA",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: page.content.h1 ?? page.h1 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
    // Geo meta tags. Not a Google ranking factor, but Bing and several local directories and AI
    // crawlers still read them, and they cost four lines.
    other: {
      "geo.region": city ? city.regionCode : "SA",
      "geo.placename": place === "Saudi Arabia" ? "Saudi Arabia" : `${place}, Saudi Arabia`,
      ...(city
        ? {
            "geo.position": `${city.geo.latitude};${city.geo.longitude}`,
            ICBM: `${city.geo.latitude}, ${city.geo.longitude}`,
          }
        : {}),
      "content-language": "en-SA",
      "revisit-after": "7 days",
    },
  };
}

/* ------------------------------------------------------------------ */
/* Schema                                                              */
/* ------------------------------------------------------------------ */

/**
 * One graph per page: the service, the place it serves, the breadcrumb trail and the FAQs.
 * FAQPage is the one that earns a rich result, and it only validates when every question on the
 * page is in the graph - so all of them go in, not a sample.
 */
export function buildSaudiSeoSchema(page: SaudiSeoPage): JsonLdObject {
  const canonical = saudiSeoCanonical(page);
  const city = page.citySlug ? CITIES[page.citySlug] : undefined;
  const placeName = page.area ?? page.city;

  const crumbs = [
    { name: "Home", item: SITE_URL },
    { name: "IB & IGCSE Tutors in Saudi Arabia", item: absoluteUrl(SAUDI_HUB_PATH) },
  ];
  if (page.citySlug && page.kind !== "city") {
    crumbs.push({ name: CITIES[page.citySlug].name, item: absoluteUrl(`${SAUDI_HUB_PATH}${page.citySlug}/`) });
  }
  if (page.areaSlug && page.kind !== "area") {
    crumbs.push({
      name: page.area as string,
      item: absoluteUrl(`${SAUDI_HUB_PATH}${page.citySlug}/${page.areaSlug}/`),
    });
  }
  crumbs.push({ name: page.content.h1 ?? page.h1, item: canonical });

  return {
    "@context": "https://schema.org",
    "@graph": [
      // ONE organization entity for the whole site, not one per page. Minting `${canonical}#org`
      // per page produces thousands of separate "IB Gram" organizations at thousands of URLs,
      // none of which consolidates. AI engines resolve a brand by @id and sameAs, so a thousand
      // one-page orgs resolve to nothing. This is the same @id the rest of the site uses.
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
          { "@type": "Country", name: "Saudi Arabia" },
          { "@type": "Place", name: `${placeName}, Saudi Arabia` },
          ...(city
            ? [
                {
                  "@type": "Place",
                  name: city.name,
                  geo: { "@type": "GeoCoordinates", latitude: city.geo.latitude, longitude: city.geo.longitude },
                },
              ]
            : []),
        ],
        // Saudi delivery is online; saying so in the graph keeps the markup honest.
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
        inLanguage: "en-SA",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website`, name: "IB Gram", url: SITE_URL },
        dateModified: dateFor(page.slug, page.lastUpdated),
        primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
        keywords: saudiKeywordsFor(page).join(", "),
        // Marks the lead paragraph and the FAQ block as the parts worth reading aloud or
        // quoting. Assistants answering "who tutors IB in Al Olaya" pull from here.
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".faq-answer"] },
        about: {
          "@type": "Thing",
          name: page.subject || (page.board === "IGCSE" ? "IGCSE tutoring" : "International Baccalaureate tutoring"),
        },
      },
      // A Course node only when the page really is about one named subject. Emitting it on a
      // generic "IB tutor in Riyadh" page would be markup that does not match the content.
      ...(page.subject
        ? [
            {
              "@type": "Course",
              "@id": `${canonical}#course`,
              name: `${page.subject} tutoring for ${placeName} students`,
              description: page.content.metaDescription ?? page.metaDescription,
              provider: { "@id": ORG_ID },
              inLanguage: "en-SA",
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

export interface SaudiLink {
  label: string;
  href: string;
  description: string;
}

/**
 * Deterministic rotation offset for a slug, so every page starts its tier at a different point.
 *
 * Without this, each tier is read from the top and hundreds of pages link to the SAME first few
 * results - the failure mode that left most of the UAE set with zero inbound links while a
 * handful collected hundreds, and a page nothing links to is the "Discovered - currently not
 * indexed" bucket. Offsetting by a hash of the slug spreads the links evenly, and because the
 * hash is stable the link set does not reshuffle on every build.
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

export function getSaudiSeoRelated(slug: string, limit = 8): SaudiLink[] {
  const meta = metaBySlug.get(slug);
  if (!meta) return [];
  const written = saudiSeoPagesMeta.filter((p) => p.slug !== slug && hasSaudiContent(p.slug));
  const keywordHead = meta.primaryKeyword.split(" in ")[0];

  // Districts in the same corridor. Area pages orphan easily because the "same city" tier below
  // excludes them and a city hub only lists so many - Riyadh has 32 districts and 645 pages.
  // Corridor neighbours are genuinely related (same schools, same commute), which makes these
  // links useful rather than filler.
  const corridorAreas = meta.areaSlug ? new Set(clusterFor(meta.areaSlug, meta.citySlug).siblings) : null;

  const tiers = [
    written.filter((p) => meta.areaSlug && p.areaSlug === meta.areaSlug && p.citySlug === meta.citySlug),
    written.filter(
      (p) =>
        corridorAreas !== null &&
        p.citySlug === meta.citySlug &&
        p.areaSlug !== undefined &&
        p.areaSlug !== meta.areaSlug &&
        corridorAreas.has(p.areaSlug),
    ),
    written.filter((p) => p.citySlug === meta.citySlug && !p.areaSlug),
    written.filter((p) => p.primaryKeyword.split(" in ")[0] === keywordHead),
    // Same kind of page: the tier that actually reciprocates. A Kingdom-wide keyword page has no
    // city or district, so without this it falls straight through to the hubs, links nowhere
    // useful, and nothing links back to it.
    written.filter((p) => p.kind === meta.kind),
    written.filter((p) => p.subject !== "" && p.subject === meta.subject),
    written.filter((p) => p.board === meta.board),
    written.filter((p) => p.kind === "city" || p.kind === "saudi-keyword"),
  ];

  const out: SaudiLink[] = [];
  const seen = new Set<string>();
  const take = (tier: SaudiSeoPageMeta[], upTo: number) => {
    // Rotate each tier so two pages sharing a tier do not emit identical link lists.
    for (const p of rotated(tier, slug)) {
      if (out.length >= upTo) break;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      out.push({ label: p.h1, href: p.path, description: p.primaryKeyword });
    }
  };

  // The hub tier is last in `tiers`, so with 8-12 slots and seven earlier tiers it would never
  // be reached and whole islands of pages would lose their route back up to a hub. Reserve the
  // first slots for it.
  const HUB_SLOTS = 3;
  take(tiers[tiers.length - 1], Math.min(HUB_SLOTS, limit));

  // A guaranteed ring over every written page, in registry order. Rotation alone spreads links
  // but cannot promise that each page is some other page's TARGET. Linking each page to its
  // immediate successor makes the whole set one cycle, so reachability is structural rather
  // than probabilistic.
  const order = saudiSeoPagesMeta.filter((p) => hasSaudiContent(p.slug));
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

/** Written children of this page (city -> its districts and keywords; district -> its keywords). */
export function getSaudiChildLinks(slug: string, limit = 24): SaudiLink[] {
  // The /saudi-arabia/ hub is the hand-written country page and is not in this registry, so a
  // lookup for it returns undefined and the hub would link to NONE of its children - leaving the
  // whole set with no crawl entry point. Treat the empty slug as the hub.
  const parentPath = slug === "" ? SAUDI_HUB_PATH : metaBySlug.get(slug)?.path;
  if (!parentPath) return [];
  const children = saudiSeoPagesMeta.filter((p) => p.parentPath === parentPath && hasSaudiContent(p.slug));

  // Round-robin by kind rather than slicing registry order. Riyadh has 32 districts and several
  // hundred keyword pages; taking the first N in registry order gives N keyword pages and not
  // one district, so the district pages get no inbound link from their own city hub.
  const byKind = new Map<string, SaudiSeoPageMeta[]>();
  for (const p of children) {
    if (!byKind.has(p.kind)) byKind.set(p.kind, []);
    byKind.get(p.kind)!.push(p);
  }
  const queues = [...byKind.values()].map((q) => rotated(q, slug));
  const out: SaudiSeoPageMeta[] = [];
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

/**
 * The directory the /saudi-arabia/ country page renders beneath its content.
 *
 * Without this the whole set has exactly one inbound path - the sitemap - and a URL that is in a
 * sitemap but linked from nowhere is the textbook "Discovered - currently not indexed" case.
 * The hub is the one page with enough authority to pass to 500 children in a single hop, so it
 * lists all of them, split by kind so the block reads as a directory rather than a link dump.
 *
 * Returns undefined while nothing is written, so the hub renders exactly as it does today until
 * there is something to link to.
 */
export function getSaudiHubDirectory():
  | { eyebrow: string; title: string; lead: string; groups: Array<{ name: string; links: Array<{ label: string; href: string }> }> }
  | undefined {
  const children = saudiSeoPagesMeta.filter((p) => p.parentPath === SAUDI_HUB_PATH && hasSaudiContent(p.slug));
  if (children.length === 0) return undefined;

  const cities = children.filter((p) => p.kind === "city");
  const keywords = children.filter((p) => p.kind === "saudi-keyword");

  const groups = [
    cities.length > 0
      ? { name: "Cities and regions we cover", links: cities.map((p) => ({ label: p.city, href: p.path })) }
      : null,
    keywords.length > 0
      ? {
          name: "What families search for",
          links: keywords.map((p) => ({ label: p.primaryKeyword.split(" in ")[0], href: p.path })),
        }
      : null,
  ].filter((g): g is { name: string; links: Array<{ label: string; href: string }> } => g !== null);

  return {
    eyebrow: "Browse Saudi Arabia",
    title: "IB and IGCSE tutoring across the Kingdom",
    lead: "Every page below answers a different question Saudi families ask, with its own syllabus detail, costs in riyals and local school context.",
    groups,
  };
}

/** The parent page, when it has content. Gives every page an "up" link for crawl depth. */
export function getSaudiParentLink(slug: string): SaudiLink | undefined {
  const meta = metaBySlug.get(slug);
  if (!meta) return undefined;
  if (meta.parentPath === SAUDI_HUB_PATH) {
    return {
      label: "IB & IGCSE tutors in Saudi Arabia",
      href: SAUDI_HUB_PATH,
      description: "The Saudi Arabia hub page",
    };
  }
  const parent = metaByPath.get(meta.parentPath);
  if (!parent || !hasSaudiContent(parent.slug)) return undefined;
  return { label: parent.h1, href: parent.path, description: parent.primaryKeyword };
}

/* ------------------------------------------------------------------ */
/* Renderer adapter                                                    */
/* ------------------------------------------------------------------ */

/**
 * Builds the CountrySeoPage the shared <CountryLanding> renderer takes, so
 * /saudi-arabia/<anything>/ looks exactly like /saudi-arabia/ itself. Identity fields come from
 * the plan; every content block comes from the written page - nothing is boilerplate.
 */
export function toCountrySeoPage(page: SaudiSeoPage): CountrySeoPage {
  const c = page.content;
  const city = page.citySlug ? CITIES[page.citySlug] : undefined;
  return {
    slug: page.slug,
    countryName: page.area ?? page.city,
    countryNameLong: page.area
      ? `${page.area}, ${page.city}`
      : page.city === "Saudi Arabia"
        ? "the Kingdom of Saudi Arabia"
        : `${page.city}, Saudi Arabia`,
    demonym: "Saudi",
    flagCode: "sa",
    countryCode: "SA",
    region: city ? city.province : "Saudi Arabia",
    timezoneLabel: "Arabia Standard Time (UTC+3, no daylight saving)",
    schedulingNote: "Sunday-to-Thursday evenings and Friday or Saturday mornings, on Arabia Standard Time",
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
    regionsTitle:
      c.regionsTitle ??
      (page.area ? `Nearby districts we cover around ${page.area}` : `Areas we cover across ${page.city}`),
    schoolClusters: c.schoolClusters,
    schoolDisclaimer: c.schoolDisclaimer,
    modes: c.modes,
    modesIntro: c.modesIntro,
    sections: c.sections,
    process: c.process,
    whyPoints: c.whyPoints,
    faqs: c.faqs,
    internalLinks: getSaudiSeoRelated(page.slug, 8).map((l) => ({
      label: l.label,
      href: l.href,
      description: l.description,
    })),
    closingHeading: c.closingHeading,
    closingBody: c.closingBody,
    tutorsIntro: c.tutorsIntro,
  };
}

/** Named schools for the sliding strip under the hero, pulled from the written clusters. */
export function schoolStripFor(page: SaudiSeoPage): { schools: readonly string[]; place: string } | undefined {
  const schools = page.content.schoolClusters.flatMap((cluster) => cluster.schools);
  if (schools.length < 4) return undefined;
  return { schools: [...new Set(schools)], place: page.area ?? page.city };
}

/* ------------------------------------------------------------------ */
/* Sitemap                                                             */
/* ------------------------------------------------------------------ */

const PRIORITY: Record<SaudiSeoPageMeta["kind"], number> = {
  city: 0.92,
  "saudi-keyword": 0.86,
  "city-keyword": 0.82,
  area: 0.78,
  "area-keyword": 0.74,
};

/**
 * Rows for sitemap-saudi.xml. Only written pages - a sitemap entry for a 404 is the fastest way
 * to lose crawl budget. The /saudi-arabia/ hub itself is included so every Saudi URL the site
 * serves sits in one submitted file, which is what makes the per-sitemap indexed count in
 * Search Console mean something.
 */
export function getSaudiSeoSitemapEntries(): MetadataRoute.Sitemap {
  const hub: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(SAUDI_HUB_PATH),
      lastModified: new Date().toISOString().slice(0, 10),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
  ];
  return [
    ...hub,
    ...saudiSeoPagesMeta
      .filter((p) => hasSaudiContent(p.slug))
      .map((p) => ({
        url: absoluteUrl(p.path),
        lastModified: dateFor(p.slug, p.lastUpdated),
        changeFrequency: "weekly" as const,
        priority: PRIORITY[p.kind],
      })),
  ];
}

/** How many of the planned pages are live, for the deploy gate and progress reporting. */
export function saudiSeoProgress(): { planned: number; written: number } {
  return { planned: saudiSeoPagesMeta.length, written: saudiWrittenSlugs.length };
}

export { AREAS_BY_CITY, CITIES, clusterFor, displayName };
