import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import { resolvePageTitle } from "@/lib/seo/page-title";
import type { JsonLdObject } from "@/lib/seo/schema";
import { CONTACT } from "@/lib/contact";
import type { CountrySeoPage } from "@/lib/country-seo/types";
import { gurgaonSeoPagesMeta } from "./pages-data";
import { gurgaonSeoExpansionMeta } from "./pages-data-expansion";
import { gurgaonSeoContentBySlug } from "./content";
import { gurgaonSeoExpansionContentBySlug } from "./content/expansion";
import type { GurgaonSeoPage, GurgaonSeoPageMeta } from "./types";

export const GURGAON_SEO_LAST_UPDATED = "2026-06-18";
const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");

/**
 * The original 400 workbook pages plus the IB/IGCSE subject x area expansion. Two sources
 * because the workbook set is generated from a spreadsheet and the expansion from
 * scripts/gurgaon-500; everything downstream sees one list.
 */
// The original 400 workbook pages keep their root-level URLs, untouched. Only the 500-page
// expansion lives under the /gurgaon/ hub; its generated data still carries a root path, which
// next.config.ts 301-redirects to the path set here.
const hubMeta: GurgaonSeoPageMeta[] = gurgaonSeoExpansionMeta.map((meta) => ({ ...meta, path: `/gurgaon/${meta.slug}/` }));
const allMeta: GurgaonSeoPageMeta[] = [...gurgaonSeoPagesMeta, ...hubMeta];
const allContent = { ...gurgaonSeoContentBySlug, ...gurgaonSeoExpansionContentBySlug };

export const gurgaonSeoSlugs: string[] = allMeta.map((page) => page.slug);

const metaBySlug = new Map(allMeta.map((page) => [page.slug, page]));

/** Returns the full page (metadata + unique content) for a slug, or undefined. */
export function getGurgaonSeoPage(slug: string): GurgaonSeoPage | undefined {
  const meta = metaBySlug.get(slug);
  const content = allContent[slug];
  if (!meta || !content) return undefined;
  return { ...meta, content };
}

/** Static params for the root route: the original workbook pages, which keep root-level URLs. */
export function getGurgaonSeoStaticParams(): Array<{ gurgaonSlug: string }> {
  return gurgaonSeoPagesMeta.map((page) => ({ gurgaonSlug: page.slug }));
}

/** Static params for /gurgaon/<slug>/: the 500-page expansion only. */
export function getGurgaonHubStaticParams(): Array<{ slug: string }> {
  return hubMeta.map((page) => ({ slug: page.slug }));
}

/** All landing pages, sorted by workbook ID. */
export function getAllGurgaonSeoPages(): GurgaonSeoPage[] {
  return allMeta
    .map((meta) => getGurgaonSeoPage(meta.slug))
    .filter((page): page is GurgaonSeoPage => Boolean(page));
}

/**
 * Sibling pages in the same locality, for the "explore more" rail.
 *
 * Reads metadata only. Going through getAllGurgaonSeoPages() here would spread every
 * page's full prose body once per page rendered — fine at 400 pages, ~810k content
 * spreads at 900, all to choose four links.
 */
export function getGurgaonSeoRelated(slug: string, locality: string, limit = 4): Array<{ label: string; href: string }> {
  return allMeta
    .filter((m) => m.locality === locality && m.slug !== slug)
    .slice(0, limit)
    .map((m) => ({ label: m.h1, href: m.path }));
}

/* ------------------------------------------------------------------ */
/* /gurgaon/ hub: the Gurgaon IB + IGCSE homepage every locality page  */
/* hangs under. Rendered with the country layout, but its metadata and */
/* JSON-LD are Gurgaon-specific rather than country-shaped.            */
/* ------------------------------------------------------------------ */

export const GURGAON_HUB_PATH = "/gurgaon/";
/** Gurugram city centre, public coordinates. Describes the city, not an office. */
const GURUGRAM_GEO = { latitude: 28.4595, longitude: 77.0266 };

/** Locality -> its landing pages, largest localities first (metadata only). */
export function getGurgaonSeoDirectory(): Array<{ name: string; links: Array<{ label: string; href: string }> }> {
  const groups = new Map<string, Array<{ label: string; href: string }>>();
  // allMeta, not hubMeta: the 400 root-level workbook pages had no inbound internal link
  // anywhere on the site, so Google reported them "Discovered - currently not indexed"
  // (referringUrls: 0). The hub directory is the one place that can adopt them.
  for (const meta of allMeta) {
    const links = groups.get(meta.locality) ?? [];
    links.push({ label: meta.h1, href: meta.path });
    groups.set(meta.locality, links);
  }
  return [...groups.entries()]
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([name, links]) => ({ name, links }));
}

export function buildGurgaonHubMetadata(page: CountrySeoPage): Metadata {
  const canonical = absoluteUrl(GURGAON_HUB_PATH);
  return {
    title: resolvePageTitle(page.title),
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title: page.title,
      description: page.metaDescription,
      siteName: "IB Gram",
      locale: "en_IN",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: page.imageAltText }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: [OG_IMAGE],
    },
    other: {
      "geo.region": "IN-HR",
      "geo.placename": "Gurugram (Gurgaon), Haryana",
      "geo.position": `${GURUGRAM_GEO.latitude};${GURUGRAM_GEO.longitude}`,
      ICBM: `${GURUGRAM_GEO.latitude}, ${GURUGRAM_GEO.longitude}`,
    },
  };
}

/**
 * Gurgaon hub graph: Organization, City (Gurugram / Gurgaon), CollectionPage, Service with
 * every locality as areaServed and IB/IGCSE courses as an OfferCatalog, an ItemList of every
 * locality page, BreadcrumbList and FAQPage.
 */
export function buildGurgaonHubSchema(page: CountrySeoPage): JsonLdObject {
  const canonical = absoluteUrl(GURGAON_HUB_PATH);
  const organizationId = `${SITE_URL}/#organization`;
  const cityId = `${canonical}#city`;
  const course = (name: string, description: string, level?: string) => ({
    "@type": "Course",
    name,
    description,
    ...(level ? { educationalLevel: level } : {}),
    provider: { "@id": organizationId },
  });

  const graph: JsonLdObject[] = [
    {
      "@type": "EducationalOrganization",
      "@id": organizationId,
      name: "IB Gram",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-512.png`,
      email: CONTACT.email,
      telephone: CONTACT.phoneTel,
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
      areaServed: { "@id": cityId },
    },
    {
      "@type": "City",
      "@id": cityId,
      name: "Gurugram",
      alternateName: ["Gurgaon"],
      containedInPlace: { "@type": "State", name: "Haryana", containedInPlace: { "@type": "Country", name: "India" } },
      geo: { "@type": "GeoCoordinates", ...GURUGRAM_GEO },
      sameAs: "https://en.wikipedia.org/wiki/Gurgaon",
    },
    {
      "@type": "CollectionPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "IB Gram", url: SITE_URL },
      about: [{ "@id": cityId }, { "@type": "Thing", name: "International Baccalaureate" }, { "@type": "Thing", name: "IGCSE" }],
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, caption: page.imageAltText },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
      mainEntity: { "@id": `${canonical}#directory` },
      keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
      dateModified: page.lastUpdated,
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: page.primaryKeyword,
      serviceType: "IB and IGCSE home, online and hybrid tutoring",
      description: page.metaDescription,
      provider: { "@id": organizationId },
      areaServed: [
        { "@id": cityId },
        ...page.regions.map((region) => ({ "@type": "Place", name: `${region.name}, Gurugram`, containedInPlace: { "@id": cityId } })),
      ],
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IB and IGCSE tutoring in Gurgaon",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "IB and IGCSE programmes",
            itemListElement: page.programmes.map((p) => ({ "@type": "Offer", itemOffered: course(`${p.name} (${p.code}) tutoring in Gurgaon`, p.description, p.ageRange) })),
          },
          {
            "@type": "OfferCatalog",
            name: "IB and IGCSE subjects",
            itemListElement: page.subjects.map((s) => ({ "@type": "Offer", itemOffered: course(`${s.name} tutoring in Gurgaon`, s.description, s.levels) })),
          },
        ],
      },
      url: canonical,
    },
    {
      "@type": "ItemList",
      "@id": `${canonical}#directory`,
      name: "IB and IGCSE home tutor pages for every Gurgaon locality",
      numberOfItems: hubMeta.length,
      itemListElement: hubMeta.map((meta, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(meta.path),
        name: meta.h1,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "IB & IGCSE Tutors in Gurgaon", item: canonical },
      ],
    },
  ];

  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Self-referencing canonical for a page. */
export function gurgaonSeoCanonical(meta: GurgaonSeoPageMeta): string {
  return absoluteUrl(meta.path);
}

/** Next.js Metadata for a landing page: indexable, self-canonical, OG + Twitter. */
export function buildGurgaonSeoMetadata(meta: GurgaonSeoPageMeta): Metadata {
  const canonical = gurgaonSeoCanonical(meta);
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
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

/** Sitemap entries for all Gurgaon SEO landing pages. */
export function getGurgaonSeoSitemapEntries(): MetadataRoute.Sitemap {
  return [
    // The /gurgaon/ hub every expansion page hangs under.
    { url: absoluteUrl(GURGAON_HUB_PATH), lastModified: "2026-09-13", changeFrequency: "weekly" as const, priority: 0.9 },
    ...allMeta.map((meta) => ({
      url: gurgaonSeoCanonical(meta),
      lastModified: meta.lastUpdated ?? GURGAON_SEO_LAST_UPDATED,
      changeFrequency: "weekly" as const,
      priority: meta.priority === "P0" ? 0.8 : meta.priority === "P1" ? 0.74 : 0.66,
    })),
  ];
}

/**
 * JSON-LD graph: Organization, WebPage, Service (offering the subject as a Course),
 * BreadcrumbList and FAQPage.
 *
 * The organisation reuses the site-wide `${SITE_URL}/#organization` @id (see
 * src/lib/seo/schema.ts) so every landing page points at one entity instead of minting
 * an anonymous one. areaServed describes the localities the service covers, not premises:
 * IB Gram has no office in these localities, so no LocalBusiness or PostalAddress is claimed.
 */
export function buildGurgaonSeoSchema(page: GurgaonSeoPage): JsonLdObject {
  const canonical = gurgaonSeoCanonical(page);
  const organizationId = `${SITE_URL}/#organization`;
  const gurugram = {
    "@type": "City",
    name: "Gurugram",
    alternateName: "Gurgaon",
    containedInPlace: { "@type": "State", name: "Haryana", containedInPlace: { "@type": "Country", name: "India" } },
  };
  const place = (name: string) => ({ "@type": "Place", name: `${name}, Gurugram`, containedInPlace: gurugram });

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
      about: [{ "@type": "Thing", name: page.subject }, place(page.locality)],
      keywords: [page.primaryKeyword, ...page.content.localKeywords].join(", "),
      dateModified: page.lastUpdated ?? GURGAON_SEO_LAST_UPDATED,
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: page.primaryKeyword,
      serviceType: `${page.board} home and online tutoring`,
      description: page.metaDescription,
      provider: { "@id": organizationId },
      areaServed: [page.locality, ...page.localContext.nearbyAreas].map(place),
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
              name: `${page.subject} tutoring`,
              description: page.metaDescription,
              provider: { "@id": organizationId },
              educationalLevel: page.level,
            },
          },
        ],
      },
      url: canonical,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        page.path.startsWith("/gurgaon/")
          ? { "@type": "ListItem", position: 2, name: "IB & IGCSE Tutors in Gurgaon", item: absoluteUrl("/gurgaon/") }
          : {
              "@type": "ListItem",
              position: 2,
              name: page.board === "IB" ? "IB Tutors in Gurugram" : page.board === "IGCSE" ? "IGCSE Tutors in Gurugram" : "IB & IGCSE Tutors in Gurugram",
              item: absoluteUrl(page.parentPage),
            },
        { "@type": "ListItem", position: 3, name: page.h1, item: canonical },
      ],
    },
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
