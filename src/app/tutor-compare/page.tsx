import { TutorComparePageContent } from "@/app/tutor-compare/TutorComparePageContent";
import { parseTutorCompareIds } from "@/lib/tutor-compare-url";

type TutorComparePageProps = {
  searchParams: Promise<{
    ids?: string;
  }>;
};

export default async function TutorComparePage({ searchParams }: TutorComparePageProps) {
  const params = await searchParams;

  return <TutorComparePageContent tutorIds={parseTutorCompareIds(params.ids)} />;
}
