import type { CitySeoPage } from "./city-page-types";
import type { IgcseCitySeoPage } from "./igcse-city-pages";
import type { IgcsePagesHubData } from "./igcse-pages";
import { absoluteUrl, buildCityPath, normalizeSlug, SITE_URL } from "./slug-utils";

export type JsonLdObject = Record<string, unknown>;

export type TutorLandingPageSchemaInput = {
  canonicalUrl: string;
  title: string;
  description: string;
  breadcrumbItems: Array<{ name: string; url: string }>;
  serviceName: string;
  serviceType: string;
  areaServed: string[];
  subjects: string[];
  educationalLevel: string;
  faqs?: Array<{ question: string; answer: string }>;
  dateModified?: string;
};

export function stripUndefinedFromJsonLd(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stripUndefinedFromJsonLd);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .filter(([, entry]) => entry !== undefined)
        .map(([key, entry]) => [key, stripUndefinedFromJsonLd(entry)]),
    );
  }

  return value;
}

export function normalizeJsonLdUrls(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(normalizeJsonLdUrls);

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
        key,
        shouldNormalizeJsonLdUrl(key, entry) ? absoluteUrl(String(entry)) : normalizeJsonLdUrls(entry),
      ]),
    );
  }

  return value;
}

function shouldNormalizeJsonLdUrl(key: string, value: unknown): boolean {
  if (typeof value !== "string") return false;
  if (!["url", "item", "image", "logo", "@id"].includes(key)) return false;
  return /^(https?:\/\/(www\.)?ibgram\.com|https?:\/\/localhost|https?:\/\/127\.0\.0\.1|\/)/i.test(value);
}

/** Properties a promoted Course keeps from its nested source, when the source has them. */
const CARRIED_COURSE_PROPERTIES = [
  "educationalLevel",
  "educationalCredentialAwarded",
  "about",
  "teaches",
  "audience",
  "coursePrerequisites",
  "hasCourseInstance",
  "offers",
  "numberOfCredits",
  "timeRequired",
] as const;

/** Collects Course nodes from anywhere under `node`, without descending into a Course. */
function collectNestedCourses(node: unknown, out: JsonLdObject[]): void {
  if (Array.isArray(node)) {
    for (const entry of node) collectNestedCourses(entry, out);
    return;
  }

  if (!node || typeof node !== "object") return;

  const obj = node as JsonLdObject;
  if (obj["@type"] === "Course") {
    out.push(obj);
    return;
  }

  for (const value of Object.values(obj)) collectNestedCourses(value, out);
}

/**
 * Lifts Courses that are buried inside `Service > hasOfferCatalog > Offer > itemOffered`
 * into one top-level Course-List `ItemList`.
 *
 * Every page set here already describes its subjects as Courses, but only in that nested
 * position, where Google's Course rich result does not see them -- which is why GSC
 * Enhancements reports Breadcrumbs and Job Postings only. Nothing new is asserted: name,
 * description and every carried property come from the nested Course that is already
 * emitted, the provider from the graph's own organization node, and the URL from the page.
 *
 * Runs at render time (via `prepareJsonLd`) rather than in each builder, because the
 * generated-page set serves a pre-baked `schema` object out of pages/*.json -- the same
 * reason `speakable` is injected in GeneratedPageRenderer.
 */
export function promoteCoursesToGraph(value: unknown): unknown {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;

  const root = value as JsonLdObject;
  const graph = root["@graph"];
  if (!Array.isArray(graph)) return value;

  const nodes = graph.filter((node): node is JsonLdObject => !!node && typeof node === "object" && !Array.isArray(node));

  // Already Course-eligible, or already promoted: leave it alone so this stays idempotent.
  if (nodes.some((node) => node["@type"] === "Course")) return value;
  if (nodes.some((node) => node["@type"] === "ItemList" && String(node["@id"] ?? "").endsWith("#courses"))) return value;

  const nested: JsonLdObject[] = [];
  for (const node of nodes) collectNestedCourses(node["hasOfferCatalog"], nested);
  if (nested.length === 0) return value;

  const page = nodes.find(
    (node) =>
      typeof node["url"] === "string" &&
      /^(WebPage|CollectionPage|ItemPage|ProfilePage|AboutPage)$/.test(String(node["@type"])),
  );
  const pageUrl = typeof page?.["url"] === "string" ? (page["url"] as string) : undefined;
  if (!pageUrl) return value;

  const organization = nodes.find((node) => /Organization$/.test(String(node["@type"])) && typeof node["@id"] === "string");
  const provider = organization
    ? { "@id": organization["@id"] as string }
    : { "@type": "Organization", name: "IB Gram", url: SITE_URL };
  const pageDescription = typeof page?.["description"] === "string" ? (page["description"] as string) : undefined;

  const seen = new Set<string>();
  const courses: JsonLdObject[] = [];

  for (const source of nested) {
    const name = typeof source["name"] === "string" ? source["name"].trim() : "";
    if (!name) continue;

    const slug = normalizeSlug(name);
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);

    const course: JsonLdObject = {
      "@type": "Course",
      "@id": `${pageUrl}#course-${slug}`,
      name,
      // Google wants a description per Course; the page's own description of this
      // offering is the honest fallback when the nested Course carries none.
      description: typeof source["description"] === "string" ? source["description"] : pageDescription,
      url: pageUrl,
      inLanguage: "en",
      provider,
    };

    for (const property of CARRIED_COURSE_PROPERTIES) {
      if (source[property] !== undefined) course[property] = source[property];
    }

    courses.push(course);
    // ponytail: 25 is Google's practical carousel ceiling and keeps the duplicated
    // Course block off the page weight; raise it if a page genuinely lists more.
    if (courses.length >= 25) break;
  }

  if (courses.length === 0) return value;

  const catalogName = nodes
    .map((node) => node["hasOfferCatalog"])
    .find((catalog): catalog is JsonLdObject => !!catalog && typeof catalog === "object" && !Array.isArray(catalog));

  return {
    ...root,
    "@graph": [
      ...graph,
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#courses`,
        name: typeof catalogName?.["name"] === "string" ? (catalogName["name"] as string) : "Tutoring courses",
        numberOfItems: courses.length,
        itemListElement: courses.map((course, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: course,
        })),
      },
    ],
  };
}

/**
 * The one pipeline every `<script type="application/ld+json">` on the site goes through.
 * Promote first, then clean, so promoted nodes get the same undefined-stripping and
 * absolute-URL normalisation as hand-built ones.
 */
export function prepareJsonLd(value: unknown): unknown {
  return normalizeJsonLdUrls(stripUndefinedFromJsonLd(promoteCoursesToGraph(value)));
}

export function buildCitySchema(page: CitySeoPage): JsonLdObject {
  const organizationId = `${SITE_URL}/#organization`;
  const webpageId = `${page.canonicalUrl}#webpage`;
  const serviceId = `${page.canonicalUrl}#service`;
  const breadcrumbId = `${page.canonicalUrl}#breadcrumb`;

  const graph: JsonLdObject[] = [
    buildWebPageSchema(page, webpageId, breadcrumbId, serviceId),
    buildBreadcrumbSchema(page, breadcrumbId),
    buildEducationalOrganizationSchema(page, organizationId),
    buildServiceSchema(page, serviceId, organizationId),
  ];

  if (page.schema.schemaFaqJson && page.cityFaqs.length > 0) {
    graph.push(buildFaqSchema(page));
  }

  return normalizeJsonLdUrls(stripUndefinedFromJsonLd({
    "@context": "https://schema.org",
    "@graph": graph,
  })) as JsonLdObject;
}

export function buildWebPageSchema(
  page: CitySeoPage,
  webpageId = `${page.canonicalUrl}#webpage`,
  breadcrumbId = `${page.canonicalUrl}#breadcrumb`,
  serviceId = `${page.canonicalUrl}#service`,
): JsonLdObject {
  return {
    "@type": "WebPage",
    "@id": webpageId,
    url: page.canonicalUrl,
    name: page.schema.schemaName,
    description: page.schema.schemaDescription,
    inLanguage: "en",
    dateModified: page.lastUpdated,
    breadcrumb: {
      "@id": breadcrumbId,
    },
    mainEntity: {
      "@id": serviceId,
    },
    about: page.schema.schemaSubjects.map((subject) => ({
      "@type": "Thing",
      name: subject,
    })),
  };
}

export function buildBreadcrumbSchema(page: CitySeoPage, breadcrumbId = `${page.canonicalUrl}#breadcrumb`): JsonLdObject {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IB Tutors",
        item: `${SITE_URL}/ib-tutors/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.cityName,
        item: `${SITE_URL}${buildCityPath(page.citySlug)}`,
      },
    ],
  };
}

export function buildEducationalOrganizationSchema(page: CitySeoPage, organizationId = `${SITE_URL}/#organization`): JsonLdObject {
  return {
    "@type": "EducationalOrganization",
    "@id": organizationId,
    name: page.schema.schemaOrganizationName,
    url: SITE_URL,
    logo: page.schema.schemaLogoUrl,
    email: page.schema.schemaContactEmail,
    contactPoint: page.schema.schemaContactPhone
      ? [
          {
            "@type": "ContactPoint",
            telephone: page.schema.schemaContactPhone,
            contactType: "customer support",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ]
      : undefined,
  };
}

export function buildServiceSchema(
  page: CitySeoPage,
  serviceId = `${page.canonicalUrl}#service`,
  organizationId = `${SITE_URL}/#organization`,
): JsonLdObject {
  return {
    "@type": "Service",
    "@id": serviceId,
    name: page.schema.schemaServiceName,
    serviceType: "IB tutoring",
    provider: {
      "@id": organizationId,
    },
    areaServed: page.schema.schemaAreaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    educationalLevel: page.gradeRange,
    description: page.metaDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IB tutoring subjects",
      itemListElement: page.ibSubjectsAvailable.map((subject) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: subject.name,
          description: subject.description,
        },
      })),
    },
  };
}

export function buildFaqSchema(page: CitySeoPage): JsonLdObject {
  return {
    "@type": "FAQPage",
    mainEntity: page.cityFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildIgcsePagesHubSchema(page: IgcsePagesHubData): JsonLdObject {
  const organizationId = `${SITE_URL}/#organization`;
  const webpageId = `${page.canonicalUrl}#webpage`;
  const serviceId = `${page.canonicalUrl}#service`;
  const breadcrumbId = `${page.canonicalUrl}#breadcrumb`;
  const faqId = `${page.canonicalUrl}#faq`;

  return normalizeJsonLdUrls(stripUndefinedFromJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: page.canonicalUrl,
        name: page.ogTitle,
        description: page.metaDescription,
        inLanguage: "en",
        dateModified: page.lastUpdated,
        breadcrumb: {
          "@id": breadcrumbId,
        },
        mainEntity: [
          {
            "@id": serviceId,
          },
          {
            "@id": faqId,
          },
        ],
        about: page.keywords.map((keyword) => ({
          "@type": "Thing",
          name: keyword,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IGCSE",
            item: `${SITE_URL}/igcse/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "IGCSE Pages",
            item: page.canonicalUrl,
          },
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": organizationId,
        name: "IB Gram",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-512.png`,
        email: "support@ibgram.com",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "IGCSE tutoring and exam preparation",
        serviceType: "IGCSE tutoring",
        provider: {
          "@id": organizationId,
        },
        areaServed: [
          {
            "@type": "Place",
            name: "Online",
          },
          {
            "@type": "Country",
            name: "India",
          },
        ],
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
        educationalLevel: "IGCSE, International GCSE, Grades 9-10",
        description: page.metaDescription,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IGCSE support pages",
          itemListElement: page.links.map((link) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: link.title,
              description: link.description,
              url: link.href.startsWith("http") ? link.href : `${SITE_URL}${link.href}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  })) as JsonLdObject;
}

export function buildIgcseCityPageSchema(page: IgcseCitySeoPage): JsonLdObject {
  const organizationId = `${SITE_URL}/#organization`;
  const webpageId = `${page.canonicalUrl}#webpage`;
  const serviceId = `${page.canonicalUrl}#service`;
  const breadcrumbId = `${page.canonicalUrl}#breadcrumb`;
  const faqId = `${page.canonicalUrl}#faq`;

  return normalizeJsonLdUrls(stripUndefinedFromJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: page.canonicalUrl,
        name: page.ogTitle,
        description: page.metaDescription,
        inLanguage: "en",
        dateModified: page.lastUpdated,
        breadcrumb: {
          "@id": breadcrumbId,
        },
        mainEntity: [
          {
            "@id": serviceId,
          },
          {
            "@id": faqId,
          },
        ],
        about: page.keywords.map((keyword) => ({
          "@type": "Thing",
          name: keyword,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "IGCSE Pages",
            item: `${SITE_URL}/igcse-pages/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.cityName,
            item: page.canonicalUrl,
          },
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": organizationId,
        name: "IB Gram",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-512.png`,
        email: "support@ibgram.com",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: `IGCSE tutoring in ${page.cityName}`,
        serviceType: "IGCSE tutoring",
        provider: {
          "@id": organizationId,
        },
        areaServed: page.areaNotes.map((area) => ({
          "@type": "Place",
          name: area.name,
        })),
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
        educationalLevel: "IGCSE, International GCSE, Grades 9-10",
        description: page.metaDescription,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "IGCSE tutoring subjects",
          itemListElement: page.subjects.map((subject) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: subject.name,
              description: subject.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  })) as JsonLdObject;
}

export function buildTutorLandingPageSchema(input: TutorLandingPageSchemaInput): JsonLdObject {
  const organizationId = `${SITE_URL}/#organization`;
  const webpageId = `${input.canonicalUrl}#webpage`;
  const serviceId = `${input.canonicalUrl}#service`;
  const breadcrumbId = `${input.canonicalUrl}#breadcrumb`;
  const faqId = input.faqs?.length ? `${input.canonicalUrl}#faq` : undefined;

  const graph: JsonLdObject[] = [
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: input.canonicalUrl,
      name: input.title,
      description: input.description,
      inLanguage: "en",
      dateModified: input.dateModified,
      breadcrumb: {
        "@id": breadcrumbId,
      },
      mainEntity: faqId ? [{ "@id": serviceId }, { "@id": faqId }] : { "@id": serviceId },
      about: input.subjects.map((subject) => ({
        "@type": "Thing",
        name: subject,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: input.breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
    {
      "@type": "EducationalOrganization",
      "@id": organizationId,
      name: "IB Gram",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-512.png`,
      email: "support@ibgram.com",
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: input.serviceName,
      serviceType: input.serviceType,
      provider: {
        "@id": organizationId,
      },
      areaServed: input.areaServed.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
      educationalLevel: input.educationalLevel,
      description: input.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${input.serviceName} subjects`,
        itemListElement: input.subjects.map((subject) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: subject,
          },
        })),
      },
    },
  ];

  if (input.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: input.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return normalizeJsonLdUrls(stripUndefinedFromJsonLd({
    "@context": "https://schema.org",
    "@graph": graph,
  })) as JsonLdObject;
}
