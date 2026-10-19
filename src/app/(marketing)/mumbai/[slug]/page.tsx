import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MumbaiSeoLanding } from "@/components/mumbai-seo/MumbaiSeoLanding";
import { TutorDiscovery } from "@/components/home/TutorDiscovery";
import {
  buildMumbaiSeoMetadata,
  getMumbaiChildLinks,
  cityWideSeedFor,
  getMumbaiSeoPage,
  getMumbaiSeoRelated,
  getMumbaiStaticParams,
} from "@/lib/mumbai-seo";
import { getMumbaiPageTutors, showsIgcseTutors } from "@/lib/mumbai-seo/tutors";

// Everything under the /mumbai/ hub: zone pages (/mumbai/western-suburbs/), locality pages
// (/mumbai/powai/), keyword pages (/mumbai/ib-dp-physics-sl-private-tutor/) and the
// locality x subject long tail (/mumbai/ib-maths-tutor-in-worli/).
// Only slugs with written content render; the rest 404 until their wave lands.
type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return getMumbaiStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMumbaiSeoPage(slug);
  return page ? buildMumbaiSeoMetadata(page) : {};
}

/** Mumbai tutors when the roster has them, else the board homepage's curated set. */
async function tutorSectionFor(slug: string) {
  const isIgcse = showsIgcseTutors(slug);
  const { tutors, isLocal } = await getMumbaiPageTutors(isIgcse);
  return isIgcse ? (
    <TutorDiscovery
      tutors={tutors}
      heading={isLocal ? "IGCSE Tutors in Mumbai" : "Subject-aware IGCSE Tutors"}
      intro={
        isLocal
          ? "Verified IGCSE tutors available across Mumbai for Cambridge and Pearson Edexcel syllabuses."
          : "Master the Cambridge and Pearson Edexcel syllabuses with tutors who have achieved exceptional results."
      }
      linkLabel="View All Tutors"
    />
  ) : (
    <TutorDiscovery
      tutors={tutors}
      heading={isLocal ? "IB Tutors in Mumbai" : undefined}
      intro={isLocal ? "Verified IB tutors available across Mumbai for PYP, MYP and the Diploma Programme." : undefined}
    />
  );
}

export default async function MumbaiHubChildPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getMumbaiSeoPage(slug);
  if (!page) notFound();

  return (
    <MumbaiSeoLanding
      page={page}
      related={getMumbaiSeoRelated(page.slug, 6)}
      directory={[...getMumbaiChildLinks(slug), ...cityWideSeedFor(slug)]}
      tutorSection={await tutorSectionFor(slug)}
    />
  );
}
