import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import { resolvePageTitle } from "@/lib/seo/page-title";
import type { JsonLdObject } from "@/lib/seo/schema";
import { CONTACT } from "@/lib/contact";
import { citySeoPages } from "./cities";
import type { CitySeoPage } from "./types";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");
const pagesBySlug = new Map(citySeoPages.map((page) => [page.slug, page]));

export const citySeoSlugs: string[] = citySeoPages.map((page) => page.slug);

export function getCitySeoPage(slug: string): CitySeoPage | undefined {
  return pagesBySlug.get(slug);
}

/** Plain links for directories (the /india/ strip, neighbouring cities); never ships page bodies. */
export function getCityDirectoryLinks(): Array<{ label: string; href: string }> {
  return citySeoPages.map((page) => ({ label: `IB & IGCSE Tutors in ${page.countryName}`, href: `/${page.slug}/` }));
}

const canonicalOf = (page: CitySeoPage) => absoluteUrl(`/${page.slug}/`);

export function buildCitySeoMetadata(page: CitySeoPage): Metadata {
  const canonical = canonicalOf(page);
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
    twitter: { card: "summary_large_image", title: page.title, description: page.metaDescription, images: [OG_IMAGE] },
    other: {
      "geo.region": page.stateCode,
      "geo.placename": `${page.countryName}, ${page.state}`,
      "geo.position": `${page.geo.latitude};${page.geo.longitude}`,
      ICBM: `${page.geo.latitude}, ${page.geo.longitude}`,
    },
  };
}

export function getCitySeoSitemapEntries(): MetadataRoute.Sitemap {
  return citySeoPages.map((page) => ({
    url: canonicalOf(page),
    lastModified: page.lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
}

/** City graph: Organization, City, WebPage, Service (city + localities) with course catalog, BreadcrumbList, FAQPage. */
export function buildCitySeoSchema(page: CitySeoPage): JsonLdObject {
  const canonical = canonicalOf(page);
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
    },
    {
      "@type": "City",
      "@id": cityId,
      name: page.countryName,
      ...(page.alternateNames?.length ? { alternateName: page.alternateNames } : {}),
      containedInPlace: { "@type": "State", name: page.state, identifier: page.stateCode, containedInPlace: { "@type": "Country", name: "India", identifier: "IN" } },
      geo: { "@type": "GeoCoordinates", ...page.geo },
      ...(page.wikipedia ? { sameAs: page.wikipedia } : {}),
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "en-IN",
      isPartOf: { "@type": "WebSite", name: "IB Gram", url: SITE_URL },
      about: [{ "@id": cityId }, { "@type": "Thing", name: "International Baccalaureate" }, { "@type": "Thing", name: "IGCSE" }],
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, caption: page.imageAltText },
      breadcrumb: { "@id": `${canonical}#breadcrumb` },
      keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
      dateModified: page.lastUpdated,
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: page.primaryKeyword,
      serviceType: "IB and IGCSE private tutoring",
      description: page.metaDescription,
      provider: { "@id": organizationId },
      areaServed: [
        { "@id": cityId },
        ...page.regions.map((region) => ({ "@type": "Place", name: `${region.name}, ${page.countryName}`, containedInPlace: { "@id": cityId } })),
      ],
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `IB and IGCSE tutoring in ${page.countryName}`,
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "IB programmes",
            itemListElement: page.programmes.map((p) => ({ "@type": "Offer", itemOffered: course(`${p.name} (${p.code}) tutoring in ${page.countryName}`, p.description, p.ageRange) })),
          },
          {
            "@type": "OfferCatalog",
            name: "IB and IGCSE subjects",
            itemListElement: [...page.subjects, ...(page.igcseSubjects ?? [])].map((s) => ({ "@type": "Offer", itemOffered: course(`${s.name} tutoring in ${page.countryName}`, s.description, s.levels) })),
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
        { "@type": "ListItem", position: 2, name: "India", item: absoluteUrl("/india/") },
        { "@type": "ListItem", position: 3, name: `IB & IGCSE Tutors in ${page.countryName}`, item: canonical },
      ],
    },
  ];

  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export type { CitySeoPage } from "./types";
