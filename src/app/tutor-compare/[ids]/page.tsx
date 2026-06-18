import type { Metadata } from "next";
import { TutorComparePageContent } from "@/app/tutor-compare/TutorComparePageContent";
import { parseTutorCompareIds } from "@/lib/tutor-compare-url";

export const metadata: Metadata = {
  title: "Tutor Compare | IB Gram",
  robots: { index: false, follow: true },
  alternates: { canonical: "/tutor-compare/" },
};

type TutorCompareIdsPageProps = {
  params: Promise<{
    ids: string;
  }>;
};

export default async function TutorCompareIdsPage({ params }: TutorCompareIdsPageProps) {
  const { ids } = await params;

  return <TutorComparePageContent tutorIds={parseTutorCompareIds(ids)} />;
}
