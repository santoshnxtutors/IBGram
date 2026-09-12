import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedFAQ } from "./GeneratedFAQ";
import { GeneratedFinalCTA } from "./GeneratedFinalCTA";
import { GeneratedHero } from "./GeneratedHero";
import { GeneratedInternalLinks } from "./GeneratedInternalLinks";
import { GeneratedIntro } from "./GeneratedIntro";
import { GeneratedLocalAreas } from "./GeneratedLocalAreas";
import { GeneratedPrograms } from "./GeneratedPrograms";
import { GeneratedSchoolStrip } from "./GeneratedSchoolStrip";
import { GeneratedSchools } from "./GeneratedSchools";
import { GeneratedSubjects } from "./GeneratedSubjects";
import { GeneratedTrustBar } from "./GeneratedTrustBar";
import { GeneratedTutorMatching } from "./GeneratedTutorMatching";
import { GeneratedVerification } from "./GeneratedVerification";
import { JsonLd } from "./JsonLd";
import { GeneratedBlockSection, GeneratedRemainingBlocks } from "./GeneratedSection";
import { GitBranch, Laptop } from "lucide-react";

export function GeneratedPageRenderer({
  page,
  hideTutorMatching = false,
  tutorSection,
}: {
  page: GeneratedSeoPage;
  /** Set when the caller renders its own tutor section, so the page shows one, not two. */
  hideTutorMatching?: boolean;
  /** Caller-supplied tutor section, rendered in the same slot as the built-in one. */
  tutorSection?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={page.schema} />
      <GeneratedHero page={page} />
      <GeneratedTrustBar page={page} />
      <GeneratedSchoolStrip page={page} />
      <GeneratedIntro page={page} />
      {/* Tutors sit directly under the intro: finding a tutor is why the visitor is
          here, so it should not be buried below the subject and programme sections. */}
      {/* A caller's tutor section replaces the built-in tutor list, not the matching_process
          prose, which no other section renders. */}
      {tutorSection ? (
        <>
          <GeneratedBlockSection page={page} type="matching_process" icon={GitBranch} eyebrow="Matching" fallbackTitle="Tutor Matching Process" tinted />
          {tutorSection}
        </>
      ) : (
        !hideTutorMatching && <GeneratedTutorMatching page={page} />
      )}
      <GeneratedPrograms page={page} />
      <GeneratedSubjects page={page} />
      <GeneratedLocalAreas page={page} />
      <GeneratedSchools page={page} />
      <GeneratedBlockSection page={page} type="tutoring_modes" icon={Laptop} eyebrow="Modes" fallbackTitle="Home and Online Tutoring Options" tinted />
      <GeneratedVerification page={page} />
      <GeneratedRemainingBlocks page={page} />
      {page.schoolDisclaimer && (
        <section className="bg-background py-8">
          <div className="container mx-auto px-4 md:px-6">
            <p className="rounded-2xl border border-secondary/20 bg-secondary/10 p-5 text-sm font-semibold leading-relaxed text-foreground/90">
              {page.schoolDisclaimer}
            </p>
          </div>
        </section>
      )}
      <GeneratedInternalLinks page={page} />
      <GeneratedFAQ page={page} />
      <GeneratedFinalCTA page={page} />
    </div>
  );
}
