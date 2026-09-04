const BRAND = "IB Gram";
const ENDS_WITH_BRAND = new RegExp(`\\|\\s*${BRAND}\\s*$`, "i");

/**
 * The root layout sets `title.template = "%s | IB Gram"`, so Next appends the brand to
 * every page title. But many titles already end with it — 494 of the generated store
 * pages, every /courses/ entry in subject-content.ts, and several static pages — which
 * shipped 2,028 live titles reading "... | IB Gram | IB Gram" and pushed 755 of them
 * past the length Google will render in a result.
 *
 * Returning an absolute title suppresses the template exactly where it would duplicate,
 * and leaves it working normally for titles that do not carry the brand themselves.
 */
export function resolvePageTitle(title: string): string | { absolute: string } {
  const trimmed = title.trim();
  return ENDS_WITH_BRAND.test(trimmed) ? { absolute: trimmed } : trimmed;
}
