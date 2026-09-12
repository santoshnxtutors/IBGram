import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import { resolvePageTitle } from "@/lib/seo/page-title";
import type { JsonLdObject } from "@/lib/seo/schema";
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
const allMeta: GurgaonSeoPageMeta[] = [...gurgaonSeoPagesMeta, ...gurgaonSeoExpansionMeta];
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

/** Static params for the dynamic route. */
export function getGurgaonSeoStaticParams(): Array<{ gurgaonSlug: string }> {
  return allMeta.map((page) => ({ gurgaonSlug: page.slug }));
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
  return allMeta.map((meta) => ({
    url: gurgaonSeoCanonical(meta),
    lastModified: meta.lastUpdated ?? GURGAON_SEO_LAST_UPDATED,
    changeFrequency: "weekly",
    priority: meta.priority === "P0" ? 0.8 : meta.priority === "P1" ? 0.74 : 0.66,
  }));
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
  const hubName = page.board === "IB" ? "IB Tutors in Gurugram" : page.board === "IGCSE" ? "IGCSE Tutors in Gurugram" : "IB & IGCSE Tutors in Gurugram";

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
        { "@type": "ListItem", position: 2, name: hubName, item: absoluteUrl(page.parentPage) },
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
