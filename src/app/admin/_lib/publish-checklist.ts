import type { AdminPageRecord, PublishCheckResult } from "../_types/admin";

export function runPublishChecklist(page: AdminPageRecord): PublishCheckResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!page.title.trim()) errors.push("Page title is required.");
  if (!page.metaTitle.trim()) errors.push("Meta title is required.");
  if (!page.metaDescription.trim()) errors.push("Meta description is required.");
  if (!page.h1.trim()) errors.push("H1 is required.");
  if (!page.canonicalUrl.trim()) errors.push("Canonical URL is required.");
  if (!page.url.trim()) errors.push("Page URL is required.");
  if (page.wordCount < 700) errors.push("Content is too thin for an indexable SEO page.");
  if (page.indexFlag === "index" && !page.faqs.length) errors.push("FAQs are required before publishing an indexable SEO page.");
  if (page.indexFlag === "index" && !page.internalLinks.length) errors.push("Internal links are required before publishing.");
  if (page.indexFlag === "index" && !page.hasSchema) errors.push("Schema is required before publishing.");
  if (page.duplicateRisk === "high") errors.push("Duplicate risk is high. Improve uniqueness before publishing.");
  if ((page.pageType === "school" || page.pageType === "society") && !page.safeDisclaimer) {
    errors.push("School and society pages need a safe independent-platform disclaimer.");
  }
  if (page.internalLinks.some((link) => link.linkStatus === "broken")) errors.push("Broken internal links must be fixed.");

  if (page.seoScore < 75) warnings.push("SEO score is below the preferred publishing threshold.");
  if (page.localDepthScore < 70) warnings.push("Local depth is weak. Add area, school ecosystem, tutor availability and nearby links.");
  if (page.metaDescription.length > 165) warnings.push("Meta description may be too long for search snippets.");

  return { ok: errors.length === 0, errors, warnings };
}
