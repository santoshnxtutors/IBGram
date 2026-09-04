import { absoluteUrl } from "@/lib/seo/slug-utils";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import type { CourseSubjectContent } from "./subject-content";

/**
 * Renders a static CourseSubjectContent entry through the same GeneratedPageRenderer
 * layout the DB/compiled course pages use, so a subject that has no generated page yet
 * (currently IB Arts) does not land on a visually different template.
 */

const SIBLING_LINKS: { slug: string; label: string }[] = [
  { slug: "mathematics", label: "Mathematics" },
  { slug: "sciences", label: "Sciences" },
  { slug: "individuals", label: "Individuals & Societies" },
  { slug: "english", label: "English" },
  { slug: "language", label: "Language" },
  { slug: "arts", label: "Arts" },
];

function countWords(parts: string[]): number {
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export function courseContentToGeneratedPage(
  curriculum: string,
  subject: string,
  content: CourseSubjectContent,
): GeneratedSeoPage {
  const curriculumSlug = curriculum.toLowerCase();
  const subjectSlug = subject.toLowerCase();
  const path = `/courses/${curriculumSlug}/${subjectSlug}/`;
  const url = absoluteUrl(path);
  const pageId = `IBG_COURSES_${curriculumSlug}_${subjectSlug}`.toUpperCase().replace(/[^A-Z0-9_]/g, "_");
  const curriculumLabel = curriculumSlug === "igcse" ? "IGCSE" : "IB";
  // "The Arts" would read as "IB The Arts" in every generated heading.
  const focus = `${curriculumLabel} ${content.subjectLabel.replace(/^The\s+/i, "")}`;
  const [para1, para2, para3, para4] = content.introParagraphs;

  const fallbackBlocks: GeneratedSeoPage["contentBlocks"] = [
    {
      type: "subjects",
      heading: `Inside ${focus}: what tutoring actually covers`,
      body: para2 ?? para1 ?? "",
      items: content.syllabusTracks.map((track) => `${track.name} — ${track.body}`),
    },
    {
      // "intro" is unclaimed by a dedicated section, so it renders as a plain
      // heading + prose + points block. "matching_process" is claimed but never drawn.
      type: "intro",
      heading: `How ${focus} sessions are planned`,
      body: para3 ?? para1 ?? "",
      items: content.studyApproach.map((item) => `${item.title} — ${item.body}`),
    },
    {
      type: "local_areas",
      heading: `Where ${focus} tutors are matched`,
      body:
        para4 ??
        `Tutor density differs by city, so matching balances subject fit against travel. Online and hybrid plans cover families outside the strongest in-person clusters without trading down on subject depth.`,
      items: content.cityNotes.map((note) => `${note.city} — ${note.body}`),
    },
    {
      type: "trust",
      heading: `What families say about ${focus} tutoring`,
      body:
        "Reviews are shared as written by families, with no score guarantees attached. Tutoring changes how a student works; it does not promise a grade, and no tutor should claim otherwise.",
      items: content.reviews.map((review) => `“${review.quote}” — ${review.label}, ${review.location}`),
    },
  ];
  // Purpose-written blocks render in the same layout as the compiled pages; the
  // derived blocks above are the fallback for subjects that do not have them yet.
  const contentBlocks = (content.pageBlocks ?? fallbackBlocks).filter(
    (block) => block.body || block.items.length > 0,
  );

  const internalLinks: GeneratedSeoPage["internalLinks"] = SIBLING_LINKS.filter(
    (item) => item.slug !== subjectSlug,
  ).map((item, index) => ({
    linkId: `${pageId}_L${index + 1}`,
    sourcePageId: pageId,
    targetPageId: `IBG_COURSES_${curriculumSlug}_${item.slug}`.toUpperCase(),
    targetUrl: `/courses/${curriculumSlug}/${item.slug}/`,
    anchorText: `${curriculumLabel} ${item.label} tutors`,
    linkContext: "Adjacent subject group in the same curriculum.",
    linkType: "related",
    priority: "medium",
    followStatus: "follow",
    isCrawlable: true,
    linkStatus: "active",
  }));

  return {
    pageId,
    pageType: "subject",
    status: "published",
    indexFlag: "index",
    canonicalUrl: url,
    slug: subjectSlug,
    cityName: "Global",
    citySlug: "india",
    primaryKeyword: `${focus} tutors`,
    secondaryKeywords: content.metaKeywords,
    serviceFocus: focus,
    programmes: ["PYP", "MYP", "DP"],
    subjects: [focus],
    tutoringModes: ["home", "online", "hybrid"],
    premiumAreas: [],
    nearbyAreas: [],
    nearbyCities: content.cityNotes.map((note) => note.city),
    schoolsMentioned: [],
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    ogTitle: content.metaTitle,
    ogDescription: content.metaDescription,
    ogImage: absoluteUrl("/images/ib-gram-city-og.svg"),
    twitterTitle: content.metaTitle,
    twitterDescription: content.metaDescription,
    breadcrumbTitle: focus,
    h1: content.pageTitle,
    // The hero already carries pageTitle as the H1; the intro section needs its own line.
    heroTitle: `${focus} Tutoring, Built Around Your Syllabus`,
    heroSubtitle: content.heroSummary,
    introSummary: para1 ?? content.heroSummary,
    contentBlocks,
    faqs: content.faqs,
    internalLinks,
    relatedPageSuggestions: [],
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: content.metaTitle,
          description: content.metaDescription,
          inLanguage: "en",
          breadcrumb: { "@id": `${url}#breadcrumb` },
          mainEntity: [{ "@id": `${url}#service` }, { "@id": `${url}#faq` }],
          about: [{ "@type": "Thing", name: focus }],
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Courses", item: absoluteUrl("/courses/") },
            { "@type": "ListItem", position: 3, name: focus, item: url },
          ],
        },
        {
          "@type": "EducationalOrganization",
          "@id": absoluteUrl("/#organization"),
          name: "IB Gram",
          url: absoluteUrl("/"),
          logo: absoluteUrl("/logo-512.png"),
          email: "ibgram24@gmail.com",
        },
        {
          "@type": "Service",
          "@id": `${url}#service`,
          name: `${focus} tutors`,
          serviceType: `${curriculumLabel} tutoring`,
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: [{ "@type": "Place", name: "Global" }],
          audience: { "@type": "EducationalAudience", educationalRole: "student" },
          educationalLevel: "Grade 6 to Grade 12",
          description: content.metaDescription,
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${focus} courses`,
            itemListElement: content.syllabusTracks.map((track) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Course", name: track.name },
            })),
          },
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: content.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    },
    quality: {
      wordCount: countWords([
        content.heroSummary,
        ...content.introParagraphs,
        ...contentBlocks.flatMap((block) => [block.body, ...block.items]),
        ...content.faqs.flatMap((faq) => [faq.question, faq.answer]),
        content.ctaCopy,
      ]),
      uniquenessScore: 98,
      localDepthScore: 70,
      seoScore: 92,
      readabilityScore: 84,
      internalLinkScore: 75,
      duplicateRisk: "low",
      recommendedIndexFlag: "index",
      warnings: [],
    },
    finalCta: content.ctaCopy,
    schoolDisclaimer:
      "IB Gram is an independent tutoring platform and is not officially affiliated with the IB Organization, Cambridge International or Pearson Edexcel.",
    lastUpdated: new Date().toISOString().slice(0, 10),
  };
}
