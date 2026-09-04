import { canonicalUrl } from "@/lib/seo/canonical";
import { normalizeJsonLdUrls, stripUndefinedFromJsonLd, type JsonLdObject } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/slug-utils";
import type { GeneratedSeoPage } from "./types";

// The curriculum and hub were hardcoded to IB, so every IGCSE page built by the admin
// generator emitted serviceType "IB tutoring" and a breadcrumb pointing at /ib-tutors/
// with the wrong URL. Derive both from the canonical path instead.
function curriculumOf(canonical: string): { label: "IB" | "IGCSE"; hubPath: string; hubName: string } {
  if (/\/igcse-tutors\//i.test(canonical)) return { label: "IGCSE", hubPath: "/igcse-tutors/", hubName: "IGCSE Tutors" };
  if (/\/igcse-pages\//i.test(canonical)) return { label: "IGCSE", hubPath: "/igcse-pages/", hubName: "IGCSE Pages" };
  return { label: "IB", hubPath: "/ib-tutors/", hubName: "IB Tutors" };
}

export function buildGeneratedPageSchema(page: GeneratedSeoPage): JsonLdObject {
  const canonical = canonicalUrl(page.canonicalUrl);
  const curriculum = curriculumOf(canonical);
  const organizationId = `${SITE_URL}/#organization`;
  const webpageId = `${canonical}#webpage`;
  const breadcrumbId = `${canonical}#breadcrumb`;
  const serviceId = `${canonical}#service`;
  const graph: JsonLdObject[] = [
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: canonical,
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
      itemListElement: buildBreadcrumbItems(page, curriculum),
    },
    {
      "@type": "EducationalOrganization",
      "@id": organizationId,
      name: "IB Gram",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-512.png`,
      email: "ibgram24@gmail.com",
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: page.serviceFocus,
      serviceType: `${curriculum.label} tutoring`,
      provider: { "@id": organizationId },
      areaServed: [page.cityName, page.microLocationName, ...page.nearbyAreas, ...page.nearbyCities]
        .filter(Boolean)
        .map((name) => ({ "@type": "Place", name })),
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
      educationalLevel: page.programmes.join(", ") || (curriculum.label === "IB" ? "IB PYP, MYP and DP" : "IGCSE Grade 9 and Grade 10"),
      description: page.metaDescription,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${curriculum.label} tutoring support`,
        itemListElement: page.subjects.map((subject) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: subject,
            description: `${subject} support for ${curriculum.label} students in ${page.cityName}.`,
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

  return normalizeJsonLdUrls(stripUndefinedFromJsonLd({ "@context": "https://schema.org", "@graph": graph })) as JsonLdObject;
}

function buildBreadcrumbItems(page: GeneratedSeoPage, curriculum: ReturnType<typeof curriculumOf>): JsonLdObject[] {
  const items: JsonLdObject[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: curriculum.hubName, item: `${SITE_URL}${curriculum.hubPath}` },
    { "@type": "ListItem", position: 3, name: page.cityName, item: `${SITE_URL}${curriculum.hubPath}${page.citySlug}/` },
  ];

  if (page.pageType !== "city") {
    items.push({
      "@type": "ListItem",
      position: 4,
      name: page.breadcrumbTitle,
      item: canonicalUrl(page.canonicalUrl),
    });
  }

  return items;
}
