import type { Metadata } from "next";
import { TutorComparePageContent } from "@/app/tutor-compare/TutorComparePageContent";
import { parseTutorCompareIds } from "@/lib/tutor-compare-url";

export const metadata: Metadata = {
  title: "Tutor Compare | IB Gram",
  robots: { index: false, follow: true },
  alternates: { canonical: "/tutor-compare/" },
};

type TutorComparePageProps = {
  searchParams: Promise<{
    ids?: string;
  }>;
};

export default async function TutorComparePage({ searchParams }: TutorComparePageProps) {
  const params = await searchParams;

  return <TutorComparePageContent tutorIds={parseTutorCompareIds(params.ids)} />;
}
