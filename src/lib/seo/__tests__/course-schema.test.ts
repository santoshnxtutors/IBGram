import { describe, expect, it } from "vitest";
import { buildCitySeoSchema } from "@/lib/india-cities";
import { buildGeneratedPageSchema } from "@/lib/page-generator/schema-generator";
import {
  buildTutorLandingPageSchema,
  prepareJsonLd,
  promoteCoursesToGraph,
  type JsonLdObject,
} from "@/lib/seo/schema";

type Graph = { "@context": string; "@graph": JsonLdObject[] };

function graphOf(value: unknown): JsonLdObject[] {
  const graph = (value as Graph)["@graph"];
  expect(Array.isArray(graph)).toBe(true);
  return graph;
}

function nodeOfType(value: unknown, type: string): JsonLdObject | undefined {
  return graphOf(value).find((node) => node["@type"] === type);
}

function courseListOf(value: unknown): JsonLdObject[] {
  const list = graphOf(value).find(
    (node) => node["@type"] === "ItemList" && String(node["@id"]).endsWith("#courses"),
  );
  expect(list, "graph has no promoted #courses ItemList").toBeDefined();
  const items = list!["itemListElement"] as Array<{ item: JsonLdObject }>;
  return items.map((entry) => entry.item);
}

/** Every key, at every depth, so nothing can hide an undefined or a bare path. */
function walk(value: unknown, path: string, visit: (path: string, key: string, value: unknown) => void): void {
  if (Array.isArray(value)) {
    value.forEach((entry, index) => walk(entry, `${path}[${index}]`, visit));
    return;
  }
  if (!value || typeof value !== "object") return;
  for (const [key, entry] of Object.entries(value as JsonLdObject)) {
    visit(`${path}.${key}`, key, entry);
    walk(entry, `${path}.${key}`, visit);
  }
}

function assertClean(value: unknown, label: string): void {
  walk(value, label, (path, key, entry) => {
    expect(entry, `${path} is undefined`).not.toBeUndefined();
    expect(entry, `${path} is null`).not.toBeNull();

    if (typeof entry === "string" && ["url", "item", "image", "logo", "@id"].includes(key)) {
      expect(entry.startsWith("/"), `${path} is a relative URL: ${entry}`).toBe(false);
      if (entry.includes("ibgram.com")) {
        expect(entry.startsWith("https://www.ibgram.com"), `${path} is not canonical: ${entry}`).toBe(true);
      }
    }
  });
}

const TUTOR_LANDING_INPUT = {
  canonicalUrl: "https://www.ibgram.com/ib-tutors/gurugram/sectors/sector-65/",
  title: "IB tutors in Sector 65, Gurugram",
  description: "IB PYP, MYP and DP tutors for families in Sector 65, Gurugram.",
  breadcrumbItems: [
    { name: "Home", url: "https://www.ibgram.com/" },
    { name: "IB Tutors", url: "https://www.ibgram.com/ib-tutors/" },
    { name: "Sector 65", url: "https://www.ibgram.com/ib-tutors/gurugram/sectors/sector-65/" },
  ],
  serviceName: "IB tutoring in Sector 65",
  serviceType: "IB tutoring",
  areaServed: ["Sector 65", "Gurugram"],
  subjects: ["IB Mathematics", "IB Physics", "IB English"],
  educationalLevel: "Grade 6 to Grade 12",
  faqs: [{ question: "Do you teach HL Physics?", answer: "Yes, HL and SL Physics are both covered." }],
  dateModified: "2026-11-01",
};

const GENERATED_PAGE = {
  canonicalUrl: "/igcse-tutors/mumbai/accounting/",
  pageType: "subject",
  h1: "IGCSE Accounting tutors in Mumbai",
  metaDescription: "IGCSE Accounting tutors in Mumbai for Cambridge and Edexcel boards.",
  breadcrumbTitle: "IGCSE Accounting",
  lastUpdated: "2026-11-01",
  cityName: "Mumbai",
  citySlug: "mumbai",
  microLocationName: "",
  nearbyAreas: ["Bandra"],
  nearbyCities: ["Thane"],
  serviceFocus: "IGCSE Accounting tutoring",
  programmes: ["IGCSE"],
  subjects: ["IGCSE Accounting", "IGCSE Business Studies"],
  faqs: [{ question: "Which boards?", answer: "Cambridge and Edexcel." }],
};

describe("prepareJsonLd", () => {
  it("promotes the Courses buried in hasOfferCatalog into a top-level Course List", () => {
    const before = buildTutorLandingPageSchema(TUTOR_LANDING_INPUT);
    expect(nodeOfType(before, "Course"), "builder should still nest its Courses").toBeUndefined();

    const after = prepareJsonLd(before);
    const courses = courseListOf(after);

    expect(courses).toHaveLength(TUTOR_LANDING_INPUT.subjects.length);
    expect(courses.map((course) => course.name)).toEqual(TUTOR_LANDING_INPUT.subjects);

    for (const course of courses) {
      // Google's Course required set.
      expect(course["@type"]).toBe("Course");
      expect(typeof course.name).toBe("string");
      expect((course.name as string).length).toBeGreaterThan(0);
      expect(typeof course.description).toBe("string");
      expect(course.provider).toBeDefined();
      expect(course.url).toBe(TUTOR_LANDING_INPUT.canonicalUrl);
      expect(course.inLanguage).toBe("en");
      // @id must be stable and unique per course.
      expect(String(course["@id"]).startsWith(`${TUTOR_LANDING_INPUT.canonicalUrl}#course-`)).toBe(true);
    }

    const ids = courses.map((course) => course["@id"]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("points every promoted Course at the organization already in the graph", () => {
    const after = prepareJsonLd(buildTutorLandingPageSchema(TUTOR_LANDING_INPUT));
    const organizationId = nodeOfType(after, "EducationalOrganization")?.["@id"];

    expect(organizationId).toBe("https://www.ibgram.com/#organization");
    for (const course of courseListOf(after)) {
      expect(course.provider).toEqual({ "@id": organizationId });
    }
  });

  it("emits no undefined, no null and no relative URL anywhere in the graph", () => {
    assertClean(prepareJsonLd(buildTutorLandingPageSchema(TUTOR_LANDING_INPUT)), "tutorLanding");
    assertClean(prepareJsonLd(buildGeneratedPageSchema(GENERATED_PAGE as never)), "generatedPage");
  });

  it("covers the generated-page set, whose schema is served pre-baked from pages/*.json", () => {
    const courses = courseListOf(prepareJsonLd(buildGeneratedPageSchema(GENERATED_PAGE as never)));

    expect(courses.map((course) => course.name)).toEqual(GENERATED_PAGE.subjects);
    for (const course of courses) {
      expect(course.url).toBe("https://www.ibgram.com/igcse-tutors/mumbai/accounting/");
      expect(typeof course.description).toBe("string");
      expect(course.provider).toBeDefined();
    }
  });

  it("covers the india-cities set and keeps the FAQ and Breadcrumb nodes intact", () => {
    const page = buildCitySeoSchema(INDIA_CITY_PAGE as never);
    const after = prepareJsonLd(page);

    expect(courseListOf(after).length).toBeGreaterThan(0);
    expect(nodeOfType(after, "BreadcrumbList")).toBeDefined();
    expect(nodeOfType(after, "FAQPage")).toBeDefined();
    assertClean(after, "indiaCity");
  });

  it("is idempotent, so a second render does not stack Course Lists", () => {
    const once = promoteCoursesToGraph(buildTutorLandingPageSchema(TUTOR_LANDING_INPUT));
    const twice = promoteCoursesToGraph(once);

    expect(graphOf(twice)).toHaveLength(graphOf(once).length);
  });

  it("leaves a graph with no nested Courses untouched", () => {
    const blogGraph = {
      "@context": "https://schema.org",
      "@graph": [{ "@type": "BlogPosting", headline: "MYP maths criteria", url: "https://www.ibgram.com/blog/x/" }],
    };

    expect(promoteCoursesToGraph(blogGraph)).toBe(blogGraph);
    expect(graphOf(prepareJsonLd(blogGraph))).toHaveLength(1);
  });

  it("never invents a rating, a review count or a price", () => {
    const serialised = JSON.stringify(prepareJsonLd(buildTutorLandingPageSchema(TUTOR_LANDING_INPUT)));

    for (const forbidden of ["aggregateRating", "ratingValue", "reviewCount", "priceCurrency", '"price"']) {
      expect(serialised).not.toContain(forbidden);
    }
  });
});

const INDIA_CITY_PAGE = {
  canonicalUrl: "/pune/",
  citySlug: "pune",
  countryName: "Pune",
  cityName: "Pune",
  state: "Maharashtra",
  stateCode: "MH",
  geo: { latitude: 18.5204, longitude: 73.8567 },
  h1: "IB & IGCSE tutors in Pune",
  metaDescription: "IB and IGCSE tutors in Pune for PYP, MYP, DP and IGCSE.",
  imageAltText: "IB and IGCSE tutors in Pune",
  lastUpdated: "2026-11-01",
  primaryKeyword: "IB tutors in Pune",
  secondaryKeywords: ["IGCSE tutors in Pune", "IB MYP tuition Pune"],
  regions: [{ name: "Kothrud" }],
  programmes: [{ name: "Middle Years Programme", code: "MYP", description: "MYP support", ageRange: "11-16" }],
  subjects: [{ name: "Mathematics", description: "Maths support", levels: "HL and SL" }],
  igcseSubjects: [],
  faqs: [{ question: "Do you teach IGCSE?", answer: "Yes, Cambridge and Edexcel." }],
};
