import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { SchoolStrip } from "@/components/shared/SchoolStrip";
import { getGurgaonNearbySchools } from "@/lib/local-seo/gurgaon/gurgaon-schools";

/**
 * Gurugram only, and deliberately so: on other cities `schoolsMentioned` holds
 * cluster descriptions ("SG Highway international learner corridor"), not school
 * names, and inventing names for a trust strip would be worse than omitting it.
 * Widen this the moment another city carries real school names.
 */
export function GeneratedSchoolStrip({ page }: { page: GeneratedSeoPage }) {
  if (page.citySlug !== "gurugram") return null;

  const schools = getGurgaonNearbySchools(page.schoolsMentioned ?? [], 15);
  const place = page.microLocationName?.trim() || page.cityName;

  return <SchoolStrip schools={schools} place={place} />;
}
