import { ComparisonView } from "@/components/tutor-compare/ComparisonView";
import { CompareBackButton } from "@/components/tutor-compare/CompareBackButton";
import { CompareUrlCleaner } from "@/components/tutor-compare/CompareUrlCleaner";
import { allTutors } from "@/lib/tutor-data";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";

type TutorComparePageContentProps = {
  tutorIds: string[];
};

export async function TutorComparePageContent({ tutorIds }: TutorComparePageContentProps) {
  const dbTutors = await getPublicTutorsFromDb();
  const tutorPool = dbTutors ?? allTutors;
  const selectedTutors = tutorIds
    .map((id) => tutorPool.find((tutor) => String(tutor.id) === id))
    .filter((tutor): tutor is (typeof tutorPool)[number] => Boolean(tutor));

  return (
    <div className="relative min-h-screen bg-background pb-24 pt-20">
      <CompareUrlCleaner />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.12),transparent_35%)]" />

      <div className="container relative mx-auto mb-8 px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <CompareBackButton />

          <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground md:text-6xl">
            Tutor <span className="text-primary">Comparison</span>
          </h1>
          <p className="max-w-2xl text-base font-medium leading-7 text-muted-foreground md:text-lg">
            Compare the essentials, then book a free trial with the tutor you want to test first.
          </p>
        </div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <ComparisonView tutors={selectedTutors} />
      </div>
    </div>
  );
}
