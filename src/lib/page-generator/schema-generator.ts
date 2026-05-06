import { SITE_URL } from "@/lib/seo/slug-utils";
import { stripUndefinedFromJsonLd, type JsonLdObject } from "@/lib/seo/schema";
import type { GeneratedSeoPage } from "./types";

export function buildGeneratedPageSchema(page: GeneratedSeoPage): JsonLdObject {
  const organizationId = `${SITE_URL}/#organization`;
  const webpageId = `${page.canonicalUrl}#webpage`;
  const breadcrumbId = `${page.canonicalUrl}#breadcrumb`;
  const serviceId = `${page.canonicalUrl}#service`;
  const graph: JsonLdObject[] = [
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: page.canonicalUrl,
      name: page.h1,
      description: page.metaDescription,
      inLanguage: "en",
      dateModified: page.lastUpdated,
      breadcrumb: { "@id": breadcrumbId },
      mainEntity: { "@id": serviceId },
      about: [...page.programmes, ...page.subjects].map((name) => ({ "@type": "Thing", name })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: buildBreadcrumbItems(page),
    },
    {
      "@type": "EducationalOrganization",
      "@id": organizationId,
      name: "IB Gram",
      url: SITE_URL,
      logo: `${SITE_URL}/globe.svg`,
      email: "ibgram24@gmail.com",
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: page.serviceFocus,
      serviceType: "IB tutoring",
      provider: { "@id": organizationId },
      areaServed: [page.cityName, page.microLocationName, ...page.nearbyAreas, ...page.nearbyCities]
        .filter(Boolean)
        .map((name) => ({ "@type": "Place", name })),
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
      educationalLevel: page.programmes.join(", ") || "IB PYP, MYP and DP",
      description: page.metaDescription,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IB tutoring support",
        itemListElement: page.subjects.map((subject) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: subject,
            description: `${subject} support for IB students in ${page.cityName}.`,
          },
        })),
      },
    },
  ];

  if (page.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return stripUndefinedFromJsonLd({ "@context": "https://schema.org", "@graph": graph }) as JsonLdObject;
}

function buildBreadcrumbItems(page: GeneratedSeoPage): JsonLdObject[] {
  const items: JsonLdObject[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "IB Tutors", item: `${SITE_URL}/ib-tutors/` },
    { "@type": "ListItem", position: 3, name: page.cityName, item: `${SITE_URL}/ib-tutors/${page.citySlug}/` },
  ];

  if (page.pageType !== "city") {
    items.push({
      "@type": "ListItem",
      position: 4,
      name: page.breadcrumbTitle,
      item: page.canonicalUrl,
    });
  }

  return items;
}
