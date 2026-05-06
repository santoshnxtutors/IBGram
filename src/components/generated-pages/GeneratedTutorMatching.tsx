import { GitBranch } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedBlockSection } from "./GeneratedSection";
import { TutorAvailabilitySection } from "@/components/tutors/TutorAvailabilitySection";
import { buildTutorAvailabilityIntro, getTutorsForGeneratedPage, type TutorPageContext } from "@/lib/tutors/tutor-location-matching";

export function GeneratedTutorMatching({ page }: { page: GeneratedSeoPage }) {
  const context = buildContext(page);
  const result = getTutorsForGeneratedPage(context, { limit: 6 });

  return (
    <>
      <GeneratedBlockSection page={page} type="matching_process" icon={GitBranch} eyebrow="Matching" fallbackTitle="Tutor Matching Process" tinted />
      <TutorAvailabilitySection
        title={`IB tutors mapped to ${page.microLocationName ?? page.cityName}`}
        description={buildTutorAvailabilityIntro({
          curriculum: "IB",
          cityName: page.cityName,
          placeName: page.microLocationName,
          pageType: page.pageType,
          areas: page.premiumAreas,
          matchSummary: result.matchSummary,
        })}
        result={result}
        context={context}
      />
    </>
  );
}

function buildContext(page: GeneratedSeoPage): TutorPageContext {
  return {
    curriculum: "IB",
    pageType: page.pageType,
    citySlug: page.citySlug,
    areaSlug: page.pageType === "area" ? page.slug : undefined,
    sectorSlug: page.pageType === "sector" ? page.slug : undefined,
    societySlug: page.pageType === "society" ? page.slug : undefined,
    schoolSlug: page.pageType === "school" ? page.slug : undefined,
    subjectSlug: page.pageType === "subject" ? page.slug : undefined,
    programmeSlug: page.pageType === "programme" ? page.slug : undefined,
  };
}
