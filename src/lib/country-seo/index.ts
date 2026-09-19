import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/slug-utils";
import { resolvePageTitle } from "@/lib/seo/page-title";
import type { JsonLdObject } from "@/lib/seo/schema";
import { CONTACT } from "@/lib/contact";
import { countrySeoPages } from "./countries";
import type { CountrySeoPage } from "./types";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");

const pagesBySlug = new Map(countrySeoPages.map((page) => [page.slug, page]));

export const countrySeoSlugs: string[] = countrySeoPages.map((page) => page.slug);

export function getCountrySeoPage(slug: string): CountrySeoPage | undefined {
  return pagesBySlug.get(slug);
}

export function getAllCountrySeoPages(): CountrySeoPage[] {
  return countrySeoPages;
}

/**
 * Slug + display name + flag for the footer country strip. Returns plain data so the client
 * Footer never imports the country content modules (3MB) into the browser bundle.
 */
export function getCountryFooterLinks(): Array<{ slug: string; name: string; flagCode: string }> {
  return countrySeoPages.map((page) => ({
    slug: page.slug,
    name: page.countryName.replace(/^the\s+/i, ""),
    flagCode: page.flagCode,
  }));
}

export function countrySeoPath(page: CountrySeoPage): string {
  return `/${page.slug}/`;
}

export function countrySeoCanonical(page: CountrySeoPage): string {
  return absoluteUrl(countrySeoPath(page));
}

/** English for that country, e.g. "en-GB"; used for inLanguage and hreflang. */
function countryLanguageTag(page: CountrySeoPage): string {
  return `en-${page.countryCode}`;
}

/** "the United Arab Emirates" → "United Arab Emirates" for schema names. */
function countryProperName(page: CountrySeoPage): string {
  return page.countryNameLong.replace(/^the\s+/i, "");
}

export function buildCountrySeoMetadata(page: CountrySeoPage): Metadata {
  const canonical = countrySeoCanonical(page);
  // Every country page lists the whole set, so hreflang tags are reciprocal.
  const languages = Object.fromEntries(
    countrySeoPages.map((other) => [countryLanguageTag(other), countrySeoCanonical(other)]),
  );
  return {
    title: resolvePageTitle(page.title),
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical, ...(countrySeoPages.length > 1 ? { languages } : {}) },
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
      locale: countryLanguageTag(page).replace("-", "_"),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: page.imageAltText }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export function getCountrySeoSitemapEntries(): MetadataRoute.Sitemap {
  return countrySeoPages.map((page) => ({
    url: countrySeoCanonical(page),
    lastModified: page.lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
}

/**
 * JSON-LD graph for a country page: WebPage + EducationalOrganization provider +
 * Service (areaServed = the country) + ItemList of subjects + FAQPage + BreadcrumbList.
 */
export function buildCountrySeoSchema(page: CountrySeoPage): JsonLdObject {
  const canonical = countrySeoCanonical(page);
  const country = {
    "@type": "Country",
    name: countryProperName(page),
    identifier: page.countryCode,
  };
  const provider = {
    "@type": "EducationalOrganization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: "IB Gram",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/ibgramlogo.png"),
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
  };

  const graph: JsonLdObject[] = [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: countryLanguageTag(page),
      about: country,
      keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
      isPartOf: { "@type": "WebSite", name: "IB Gram", url: absoluteUrl("/") },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
      dateModified: page.lastUpdated,
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, caption: page.imageAltText },
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: page.primaryKeyword,
      serviceType: "IB and IGCSE online tutoring",
      provider,
      areaServed: country,
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: canonical,
        availableLanguage: ["English"],
      },
      audience: { "@type": "EducationalAudience", educationalRole: "student", geographicArea: country },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `IB programmes and IGCSE tutored online for students in ${page.countryName}`,
        itemListElement: page.programmes.map((programme) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: `IB ${programme.name} (${programme.code}) tutoring` },
        })),
      },
      url: canonical,
    },
    {
      "@type": "ItemList",
      "@id": `${canonical}#subjects`,
      name: `IB and IGCSE subjects tutored for students in ${page.countryName}`,
      itemListElement: page.subjects.map((subject, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${subject.name} (${subject.levels})`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: `IB & IGCSE Tutors in ${page.countryName}`, item: canonical },
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

export type { CountrySeoPage } from "./types";
