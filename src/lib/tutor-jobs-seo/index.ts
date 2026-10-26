import type { Metadata, MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/slug-utils";
import { resolvePageTitle } from "@/lib/seo/page-title";
import { resolveMetaDescription } from "@/lib/seo/meta-description";
import type { JsonLdObject } from "@/lib/seo/schema";
import { tutorJobSeoPages } from "./pages";
import type { TutorJobSeoPage } from "./types";

const OG_IMAGE = absoluteUrl("/images/ib-gram-city-og.svg");
const pagesBySlug = new Map(tutorJobSeoPages.map((page) => [page.slug, page]));

export const tutorJobSeoSlugs: string[] = tutorJobSeoPages.map((page) => page.slug);

export function getTutorJobSeoPage(slug: string): TutorJobSeoPage | undefined {
  return pagesBySlug.get(slug);
}

/** Plain links for directories and footers; never ships page bodies. */
export function getTutorJobDirectoryLinks(): Array<{ label: string; href: string }> {
  return tutorJobSeoPages.map((page) => ({ label: page.primaryKeyword, href: `/${page.slug}/` }));
}

const canonicalOf = (page: TutorJobSeoPage) => absoluteUrl(`/${page.slug}/`);

/** ISO 3166-1 alpha-2 for the schema's applicant location. */
const LOCATION_CODES: Record<TutorJobSeoPage["locationScope"], string[]> = {
  india: ["IN"],
  uae: ["AE"],
  worldwide: ["IN", "AE", "GB", "US", "SG", "AU", "CA", "HK", "QA", "SA"],
};

export function buildTutorJobSeoMetadata(page: TutorJobSeoPage): Metadata {
  const canonical = canonicalOf(page);
  return {
    title: resolvePageTitle(page.title),
    description: resolveMetaDescription(page.metaDescription),
    keywords: page.metaKeywords,
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
      // Bulk keyword tag the brief asked for. Google ignores it; Yandex, Naver and several
      // AI crawlers still read it, and it costs one line.
      keywords: page.metaKeywords.join(", "),
      "og:locale:alternate": "en_AE",
    },
  };
}

export function getTutorJobSitemapEntries(): MetadataRoute.Sitemap {
  return tutorJobSeoPages.map((page) => ({
    url: canonicalOf(page),
    lastModified: page.lastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}

/**
 * Schema graph: Organization, WebPage, BreadcrumbList, FAQPage, HowTo.
 *
 * No JobPosting. Google's JobPosting guidelines require a specific, dated vacancy with a
 * validThrough date; these are evergreen category pages describing an open application
 * route, not individual roles. Marking them up as JobPosting across the set is the pattern
 * Google removes from Google Jobs as structured-data spam. Real dated vacancies live at
 * /jobs/<slug>/ and that is where JobPosting belongs.
 */
export function buildTutorJobSeoSchema(page: TutorJobSeoPage): JsonLdObject {
  const canonical = canonicalOf(page);
  const organizationId = `${SITE_URL}/#organization`;

  const graph: JsonLdObject[] = [
    {
      "@type": "EducationalOrganization",
      "@id": organizationId,
      name: "IB Gram",
      url: SITE_URL,
      description:
        "IB Gram matches IB and IGCSE students with subject-specialist tutors for online, home and hybrid lessons.",
      areaServed: LOCATION_CODES[page.locationScope].map((code) => ({ "@type": "Country", name: code })),
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.metaDescription,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": organizationId },
      dateModified: page.lastUpdated,
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE, caption: page.imageAltText },
      // The one-paragraph answer, so extractive engines have a labelled passage to lift.
      abstract: page.directAnswer,
      significantLink: page.internalLinks.map((link) => absoluteUrl(link.href)),
      audience: { "@type": "Audience", audienceType: "Tutors and teachers" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Teach with IB Gram", item: absoluteUrl("/join-as-tutor/") },
        { "@type": "ListItem", position: 3, name: page.scopeLabel, item: canonical },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${canonical}#howto`,
      name: `How to start tutoring with IB Gram${page.scopeLabel === "Worldwide" ? "" : ` (${page.scopeLabel})`}`,
      description: page.processIntro,
      totalTime: "PT20M",
      step: page.process.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
        url: `${canonical}#step-${index + 1}`,
      })),
    },
  ];

  return { "@context": "https://schema.org", "@graph": graph };
}

export type { TutorJobSeoPage } from "./types";
