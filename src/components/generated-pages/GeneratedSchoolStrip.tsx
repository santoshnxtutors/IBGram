import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { SchoolStrip } from "@/components/shared/SchoolStrip";
import { gurgaonIbIgcseSchools } from "@/lib/country-seo/countries/gurgaon";
import { getGurgaonNearbySchools } from "@/lib/local-seo/gurgaon/gurgaon-schools";

/**
 * Gurugram only, and deliberately so: on other cities `schoolsMentioned` holds
 * cluster descriptions ("SG Highway international learner corridor"), not school
 * names, and inventing names for a trust strip would be worse than omitting it.
 * Widen this the moment another city carries real school names.
 */
export function GeneratedSchoolStrip({ page }: { page: GeneratedSeoPage }) {
  if (page.citySlug !== "gurugram") return null;

  // /gurgaon/<slug>/ keyword pages show the /gurgaon/ hub's strip: verified IB and IGCSE schools, no padding.
  if (new URL(page.canonicalUrl).pathname.startsWith("/gurgaon/")) {
    return <SchoolStrip schools={gurgaonIbIgcseSchools} place="Gurgaon" />;
  }

  const schools = getGurgaonNearbySchools(page.schoolsMentioned ?? [], 15);
  const place = page.microLocationName?.trim() || page.cityName;

  return <SchoolStrip schools={schools} place={place} />;
}
