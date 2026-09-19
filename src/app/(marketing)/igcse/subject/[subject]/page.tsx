import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GeneratedPageRenderer } from "@/components/generated-pages/GeneratedPageRenderer";
import { buildGeneratedMetadata } from "@/lib/page-generator/metadata-generator";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import {
  filterTutorsForIgcseSubject,
  getIgcseSubjectCatalogEntry,
  getIgcseSubjectPage,
  liveIgcseSubjectSlugs,
} from "@/lib/igcse-subjects";
import { CourseTutorSection } from "../../../courses/[curriculum]/[subject]/course-tutor-section";

export const revalidate = 3600;
export const dynamicParams = false;

type SubjectProps = { params: Promise<{ subject: string }> };

export function generateStaticParams() {
  return liveIgcseSubjectSlugs.map((subject) => ({ subject }));
}

export async function generateMetadata({ params }: SubjectProps): Promise<Metadata> {
  const { subject } = await params;
  const page = getIgcseSubjectPage(subject);
  if (!page) return {};
  return buildGeneratedMetadata(page);
}

export default async function IgcseSubjectPage({ params }: SubjectProps) {
  const { subject } = await params;
  const entry = getIgcseSubjectCatalogEntry(subject);
  const page = getIgcseSubjectPage(subject);
  if (!entry || !page) notFound();

  // Tutors are mapped from their own IGCSE subject tags rather than a per-page
  // admin placement, so a new subject page is populated the moment a tutor is
  // tagged with that subject. Three cards, as on the other subject pages — the
  // rest are one click away behind "View All Tutors".
  const allTutors = (await getPublicTutorsFromDb()) ?? [];
  const subjectTutors = filterTutorsForIgcseSubject(allTutors, entry).slice(0, 3);

  return (
    <GeneratedPageRenderer
      page={page}
      hideTutorMatching
      tutorSection={
        <CourseTutorSection curriculum="igcse" subjectSlug={entry.slug} tutors={subjectTutors} />
      }
    />
  );
}
