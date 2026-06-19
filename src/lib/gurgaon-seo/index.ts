import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import type { JsonLdObject } from "@/lib/seo/schema";
import { gurgaonSeoPagesMeta } from "./pages-data";
import { gurgaonSeoContentBySlug } from "./content";
import type { GurgaonSeoPage, GurgaonSeoPageMeta } from "./types";

export const GURGAON_SEO_LAST_UPDATED = "2026-06-18";
const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");

export const gurgaonSeoSlugs: string[] = gurgaonSeoPagesMeta.map((page) => page.slug);

const metaBySlug = new Map(gurgaonSeoPagesMeta.map((page) => [page.slug, page]));

/** Returns the full page (metadata + unique content) for a slug, or undefined. */
export function getGurgaonSeoPage(slug: string): GurgaonSeoPage | undefined {
  const meta = metaBySlug.get(slug);
  const content = gurgaonSeoContentBySlug[slug];
  if (!meta || !content) return undefined;
  return { ...meta, content };
}

/** Static params for the dynamic route. */
export function getGurgaonSeoStaticParams(): Array<{ gurgaonSlug: string }> {
  return gurgaonSeoPagesMeta.map((page) => ({ gurgaonSlug: page.slug }));
}

/** All landing pages, sorted by workbook ID. */
export function getAllGurgaonSeoPages(): GurgaonSeoPage[] {
  return gurgaonSeoPagesMeta
    .map((meta) => getGurgaonSeoPage(meta.slug))
    .filter((page): page is GurgaonSeoPage => Boolean(page));
}

/** Self-referencing canonical for a page. */
export function gurgaonSeoCanonical(meta: GurgaonSeoPageMeta): string {
  return absoluteUrl(meta.path);
}

/** Next.js Metadata for a landing page: indexable, self-canonical, OG + Twitter. */
export function buildGurgaonSeoMetadata(meta: GurgaonSeoPageMeta): Metadata {
  const canonical = gurgaonSeoCanonical(meta);
  return {
    title: meta.title,
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
  return gurgaonSeoPagesMeta.map((meta) => ({
    url: gurgaonSeoCanonical(meta),
    lastModified: GURGAON_SEO_LAST_UPDATED,
    changeFrequency: "weekly",
    priority: meta.priority === "P0" ? 0.8 : meta.priority === "P1" ? 0.74 : 0.66,
  }));
}

/** JSON-LD graph: WebPage + Service + FAQPage + BreadcrumbList for a page. */
export function buildGurgaonSeoSchema(page: GurgaonSeoPage): JsonLdObject {
  const canonical = gurgaonSeoCanonical(page);
  const provider = {
    "@type": "EducationalOrganization",
    name: "IB Gram",
    url: absoluteUrl("/"),
  };

  const graph: JsonLdObject[] = [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "IB Gram", url: absoluteUrl("/") },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
      dateModified: GURGAON_SEO_LAST_UPDATED,
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: page.primaryKeyword,
      serviceType: `${page.board} home and online tutoring`,
      provider,
      areaServed: {
        "@type": "Place",
        name: `${page.locality}, Gurugram (Gurgaon), Haryana, India`,
      },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      url: canonical,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "IB & IGCSE Tutors in Gurugram", item: absoluteUrl(page.parentPage) },
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
