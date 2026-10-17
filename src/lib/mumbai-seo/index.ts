import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import { resolvePageTitle } from "@/lib/seo/page-title";
import type { JsonLdObject } from "@/lib/seo/schema";
import { mumbaiSeoPagesMeta } from "./pages-data";
import { mumbaiSeoContentBySlug } from "./pages";
import { SCHOOLS_BY_ZONE } from "./schools";
import type { MumbaiSeoPage, MumbaiSeoPageMeta, MumbaiZoneSlug } from "./types";

export const MUMBAI_SEO_LAST_UPDATED = "2026-10-12";
const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");

/** Mumbai city centre, public coordinates. Describes the city, not an office. */
const MUMBAI_GEO = { latitude: 19.076, longitude: 72.8777 };

export const MUMBAI_HUB_PATH = "/mumbai/";

const metaBySlug = new Map(mumbaiSeoPagesMeta.map((page) => [page.slug, page]));

/** Every planned slug, including "" for the /mumbai/ hub. */
export const mumbaiSeoSlugs: string[] = mumbaiSeoPagesMeta.map((page) => page.slug);

/**
 * Only pages that have written content are routable. The sitemap lists all 2,219 URLs, but
 * content lands wave by wave — serving a planned-but-unwritten page would ship a thin page
 * to Google, which is exactly the "Crawled - currently not indexed" outcome to avoid.
 */
export function getMumbaiSeoPage(slug: string): MumbaiSeoPage | undefined {
  const meta = metaBySlug.get(slug);
  const content = mumbaiSeoContentBySlug[slug];
  if (!meta || !content) return undefined;
  return { ...meta, content };
}

/** Slugs with content, for generateStaticParams on /mumbai/[slug]/. */
export function getMumbaiStaticParams(): Array<{ slug: string }> {
  return mumbaiSeoPagesMeta.filter((p) => p.slug && mumbaiSeoContentBySlug[p.slug]).map((p) => ({ slug: p.slug }));
}

/** True when the hub itself has content written. */
export const hasMumbaiHub = () => Boolean(mumbaiSeoContentBySlug[""]);

/** Schools to show on a page: its locality's list, else its zone's. */
export function schoolsForPage(meta: MumbaiSeoPageMeta): readonly string[] {
  return meta.zone ? (SCHOOLS_BY_ZONE[meta.zone] ?? []) : (SCHOOLS_BY_ZONE["south-mumbai"] ?? []);
}

export function mumbaiSeoCanonical(meta: MumbaiSeoPageMeta): string {
  return absoluteUrl(meta.path);
}

export function buildMumbaiSeoMetadata(meta: MumbaiSeoPageMeta): Metadata {
  const canonical = mumbaiSeoCanonical(meta);
  return {
    title: resolvePageTitle(meta.title),
    description: meta.metaDescription,
    keywords: meta.primaryKeyword,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: meta.title,
      description: meta.metaDescription,
      siteName: "IB Gram",
      locale: "en_IN",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.metaDescription,
      images: [OG_IMAGE],
    },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": meta.locality === "Mumbai" ? "Mumbai, Maharashtra" : `${meta.locality}, Mumbai, Maharashtra`,
      "geo.position": `${MUMBAI_GEO.latitude};${MUMBAI_GEO.longitude}`,
      ICBM: `${MUMBAI_GEO.latitude}, ${MUMBAI_GEO.longitude}`,
    },
  };
}

/**
 * Sibling pages for the "explore more" rail.
 *
 * Reads metadata only. Resolving full pages here would spread every sibling's prose once
 * per page render, which at this corpus size is megabytes of work to choose six links.
 *
 * Mix matters: a locality page links to its subject pages (so the long tail gets inbound
 * links — the reason the earlier corpus sat in "Discovered - currently not indexed"), and a
 * subject page links back to its locality and to its subject siblings.
 */
export function getMumbaiSeoRelated(slug: string, limit = 6): Array<{ label: string; href: string }> {
  const meta = metaBySlug.get(slug);
  if (!meta) return [];
  const written = (m: MumbaiSeoPageMeta) => Boolean(mumbaiSeoContentBySlug[m.slug]);
  const pool = mumbaiSeoPagesMeta.filter((m) => m.slug !== slug && written(m));

  const sameLocality = meta.localitySlug ? pool.filter((m) => m.localitySlug === meta.localitySlug) : [];
  const sameZone = meta.zone ? pool.filter((m) => m.zone === meta.zone && m.localitySlug !== meta.localitySlug) : [];
  const sameSubject = pool.filter((m) => m.subject === meta.subject && m.localitySlug !== meta.localitySlug);

  const out: MumbaiSeoPageMeta[] = [];
  const seen = new Set<string>();
  for (const group of [sameLocality, sameSubject, sameZone, pool]) {
    for (const m of group) {
      if (out.length >= limit) break;
      if (seen.has(m.slug)) continue;
      seen.add(m.slug);
      out.push(m);
    }
  }
  return out.slice(0, limit).map((m) => ({ label: m.h1, href: m.path }));
}

/**
 * The pages that hang beneath this one, grouped for the on-page directory block.
 *
 * `/mumbai/` itself is NOT ours — it is an existing India city page served by the root
 * `[gurgaonSlug]` catch-all from `src/lib/india-cities/cities/mumbai.ts`. So there is no hub of
 * ours to hold one big directory, and the link equity has to flow down the spokes instead:
 *
 *   /mumbai/ (city page, internalLinks)  ->  zone pages  ->  locality pages  ->  subject pages
 *
 * A zone page lists its localities; a locality page lists every subject page in that locality.
 * Without this the 1,400 subject pages have zero inbound links, which is precisely what left
 * the earlier corpus in Google's "Discovered - currently not indexed" bucket.
 */
export function getMumbaiChildLinks(slug: string): Array<{ name: string; links: Array<{ label: string; href: string }> }> {
  const meta = metaBySlug.get(slug);
  if (!meta) return [];
  const written = (m: MumbaiSeoPageMeta) => Boolean(mumbaiSeoContentBySlug[m.slug]);

  if (meta.kind === "zone") {
    const inZone = mumbaiSeoPagesMeta.filter((m) => m.zone === meta.zone && m.slug !== slug && written(m));
    const localities = inZone.filter((m) => m.kind === "locality" || m.kind === "society");
    const subjects = inZone.filter((m) => m.kind === "locality-subject");
    return [
      ...(localities.length ? [{ name: `Areas in ${meta.locality}`, links: localities.map((m) => ({ label: m.h1, href: m.path })) }] : []),
      ...(subjects.length ? [{ name: `Subject pages in ${meta.locality}`, links: subjects.map((m) => ({ label: m.h1, href: m.path })) }] : []),
    ];
  }

  if (meta.kind === "locality" || meta.kind === "society") {
    const subjects = mumbaiSeoPagesMeta.filter((m) => m.localitySlug === meta.localitySlug && m.slug !== slug && written(m));
    return subjects.length ? [{ name: `Every IB & IGCSE tutoring page in ${meta.locality}`, links: subjects.map((m) => ({ label: m.h1, href: m.path })) }] : [];
  }

  return [];
}

/** Zone -> its written pages. Kept for a future /mumbai/ hub of our own, and for audits. */
export function getMumbaiSeoDirectory(): Array<{ name: string; links: Array<{ label: string; href: string }> }> {
  const groups = new Map<string, Array<{ label: string; href: string }>>();
  const zoneName: Record<MumbaiZoneSlug, string> = {
    "south-mumbai": "South Mumbai",
    "western-suburbs": "Western Suburbs",
    "central-suburbs": "Central Suburbs",
    "eastern-suburbs": "Eastern Suburbs",
    "navi-mumbai": "Navi Mumbai",
    thane: "Thane",
  };
  for (const meta of mumbaiSeoPagesMeta) {
    if (!meta.slug || !mumbaiSeoContentBySlug[meta.slug]) continue;
    const name = meta.zone ? zoneName[meta.zone] : "Across Mumbai";
    groups.set(name, [...(groups.get(name) ?? []), { label: meta.h1, href: meta.path }]);
  }
  return [...groups.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([name, links]) => ({ name, links }));
}

/** Sitemap entries for the written pages only. */
export function getMumbaiSeoSitemapEntries(): MetadataRoute.Sitemap {
  return mumbaiSeoPagesMeta
    .filter((m) => mumbaiSeoContentBySlug[m.slug])
    .map((m) => ({
      url: absoluteUrl(m.path),
      lastModified: m.lastUpdated ?? MUMBAI_SEO_LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: m.kind === "hub" ? 0.95 : m.kind === "zone" || m.kind === "locality" ? 0.9 : 0.8,
    }));
}

/**
 * JSON-LD graph: Organization, WebPage, Service, BreadcrumbList and FAQPage.
 *
 * The breadcrumb is three or four levels — Home > Mumbai > zone > page — so Google can see
 * the hub-and-spoke structure rather than 2,219 flat siblings.
 */
export function buildMumbaiSeoSchema(page: MumbaiSeoPage): JsonLdObject {
  const canonical = mumbaiSeoCanonical(page);
  const organizationId = `${SITE_URL}/#organization`;
  const mumbai = {
    "@type": "City",
    name: "Mumbai",
    alternateName: "Bombay",
    containedInPlace: { "@type": "State", name: "Maharashtra", containedInPlace: { "@type": "Country", name: "India" } },
  };
  const place = (name: string) => ({ "@type": "Place", name: `${name}, Mumbai`, containedInPlace: mumbai });
  const zoneLabel: Record<MumbaiZoneSlug, string> = {
    "south-mumbai": "South Mumbai",
    "western-suburbs": "Western Suburbs",
    "central-suburbs": "Central Suburbs",
    "eastern-suburbs": "Eastern Suburbs",
    "navi-mumbai": "Navi Mumbai",
    thane: "Thane",
  };

  const crumbs: JsonLdObject[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "IB & IGCSE Tutors in Mumbai", item: absoluteUrl(MUMBAI_HUB_PATH) },
  ];
  if (page.zone && page.kind !== "zone") {
    crumbs.push({ "@type": "ListItem", position: 3, name: `${zoneLabel[page.zone]}, Mumbai`, item: absoluteUrl(`/mumbai/${page.zone}/`) });
  }
  if (page.kind !== "hub") {
    crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: page.h1, item: canonical });
  }

  const areaServed = page.locality === "Mumbai" ? [mumbai] : [place(page.locality)];

  const graph: JsonLdObject[] = [
    {
      "@type": "EducationalOrganization",
      "@id": organizationId,
      name: "IB Gram",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-512.png`,
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "IB Gram", url: SITE_URL },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
      mainEntity: { "@id": `${canonical}#service` },
      about: [{ "@type": "Thing", name: page.subject }, ...areaServed],
      keywords: [page.primaryKeyword, ...page.content.localKeywords].join(", "),
      dateModified: page.lastUpdated ?? MUMBAI_SEO_LAST_UPDATED,
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: page.primaryKeyword,
      serviceType: `${page.board} home and online tutoring`,
      description: page.metaDescription,
      provider: { "@id": organizationId },
      areaServed,
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      educationalLevel: page.level,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${page.subject} tutoring in ${page.locality}`,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: `${page.subject} tutoring in ${page.locality}`,
              description: page.metaDescription,
              provider: { "@id": organizationId },
              educationalLevel: page.level,
              courseMode: ["onsite", "online"],
              offers: { "@type": "Offer", category: "Paid", availability: "https://schema.org/InStock" },
            },
          },
        ],
      },
      url: canonical,
    },
    { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: crumbs },
  ];

  if (page.content.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
