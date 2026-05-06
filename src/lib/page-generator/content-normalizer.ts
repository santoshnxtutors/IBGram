import type { GeneratedSeoPage } from "./types";

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function normalizeGeneratedPageContent(page: GeneratedSeoPage): GeneratedSeoPage {
  return {
    ...page,
    metaTitle: stripHtml(page.metaTitle),
    metaDescription: stripHtml(page.metaDescription),
    h1: stripHtml(page.h1),
    heroTitle: stripHtml(page.heroTitle),
    heroSubtitle: stripHtml(page.heroSubtitle),
    introSummary: stripHtml(page.introSummary),
    finalCta: stripHtml(page.finalCta),
    contentBlocks: page.contentBlocks.map((block) => ({
      ...block,
      heading: stripHtml(block.heading),
      body: stripHtml(block.body),
      items: block.items.map(stripHtml),
    })),
    faqs: page.faqs.map((faq) => ({
      question: stripHtml(faq.question),
      answer: stripHtml(faq.answer),
    })),
  };
}

export function getVisibleGeneratedContentText(page: GeneratedSeoPage): string {
  return [
    page.h1,
    page.heroSubtitle,
    page.introSummary,
    ...page.contentBlocks.flatMap((block) => [block.heading, block.body, ...block.items]),
    ...page.faqs.flatMap((faq) => [faq.question, faq.answer]),
    page.finalCta,
  ].join(" ");
}
