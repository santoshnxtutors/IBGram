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
  const tutorPool = [...(dbTutors ?? []), ...allTutors];
  const selectedTutors = tutorIds
    .map((id) => tutorPool.find((tutor) => String(tutor.id) === id))
    .filter((tutor): tutor is (typeof tutorPool)[number] => Boolean(tutor));

  return (
    <div className="min-h-screen pt-24 pb-32 bg-background mesh-gradient relative">
      <CompareUrlCleaner />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <CompareBackButton />

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
            Tutor <span className="text-primary">Comparison</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Compare two tutor profiles side by side, then book a free trial with the teacher you want to test first.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <ComparisonView tutors={selectedTutors} />
      </div>
    </div>
  );
}
