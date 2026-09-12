const BRAND = "IB Gram";
// Titles in the content data end with either "| IB Gram" or the unspaced "| IBGram".
const ENDS_WITH_BRAND = /\|\s*IB\s?Gram\s*$/i;

/**
 * The root layout sets `title.template = "%s | IB Gram"`, so Next appends the brand to
 * every page title. But many titles already end with it — 494 of the generated store
 * pages, every /courses/ entry in subject-content.ts, and several static pages — which
 * shipped 2,028 live titles reading "... | IB Gram | IB Gram" and pushed 755 of them
 * past the length Google will render in a result.
 *
 * Returning an absolute title suppresses the template exactly where it would duplicate,
 * and normalises the unspaced variant to "IB Gram" so every tab reads the same.
 */
export function resolvePageTitle(title: string): string | { absolute: string } {
  const trimmed = title.trim();
  return ENDS_WITH_BRAND.test(trimmed) ? { absolute: trimmed.replace(ENDS_WITH_BRAND, `| ${BRAND}`) } : trimmed;
}
