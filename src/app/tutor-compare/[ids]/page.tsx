import { TutorComparePageContent } from "@/app/tutor-compare/TutorComparePageContent";
import { parseTutorCompareIds } from "@/lib/tutor-compare-url";

type TutorCompareIdsPageProps = {
  params: Promise<{
    ids: string;
  }>;
};

export default async function TutorCompareIdsPage({ params }: TutorCompareIdsPageProps) {
  const { ids } = await params;

  return <TutorComparePageContent tutorIds={parseTutorCompareIds(ids)} />;
}
