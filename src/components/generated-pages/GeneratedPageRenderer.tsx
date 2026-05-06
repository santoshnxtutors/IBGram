import type { GeneratedSeoPage } from "@/lib/page-generator/types";
import { GeneratedFAQ } from "./GeneratedFAQ";
import { GeneratedFinalCTA } from "./GeneratedFinalCTA";
import { GeneratedHero } from "./GeneratedHero";
import { GeneratedInternalLinks } from "./GeneratedInternalLinks";
import { GeneratedIntro } from "./GeneratedIntro";
import { GeneratedLocalAreas } from "./GeneratedLocalAreas";
import { GeneratedPrograms } from "./GeneratedPrograms";
import { GeneratedSchools } from "./GeneratedSchools";
import { GeneratedSubjects } from "./GeneratedSubjects";
import { GeneratedTrustBar } from "./GeneratedTrustBar";
import { GeneratedTutorMatching } from "./GeneratedTutorMatching";
import { GeneratedVerification } from "./GeneratedVerification";
import { JsonLd } from "./JsonLd";
import { GeneratedBlockSection } from "./GeneratedSection";
import { Laptop } from "lucide-react";

export function GeneratedPageRenderer({ page }: { page: GeneratedSeoPage }) {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={page.schema} />
      <GeneratedHero page={page} />
      <GeneratedTrustBar page={page} />
      <GeneratedIntro page={page} />
      <GeneratedPrograms page={page} />
      <GeneratedSubjects page={page} />
      <GeneratedTutorMatching page={page} />
      <GeneratedLocalAreas page={page} />
      <GeneratedSchools page={page} />
      <GeneratedBlockSection page={page} type="tutoring_modes" icon={Laptop} eyebrow="Modes" fallbackTitle="Home and Online Tutoring Options" tinted />
      <GeneratedVerification page={page} />
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
