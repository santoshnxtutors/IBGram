import { notFound } from "next/navigation";
import { allTutors } from "@/lib/tutor-data";
import { getPublicTutorsFromDb } from "@/lib/cms/public-tutors";
import { getTutorReviewsForPublic } from "@/lib/cms/public-reviews";
import TutorProfileClient from "./TutorProfileClient";

export const dynamic = "force-dynamic";
export const revalidate = 300;

type TutorProfileProps = {
   params: Promise<{ id: string }>;
};

export default async function TutorProfilePage({ params }: TutorProfileProps) {
   const { id } = await params;
   const decodedId = decodeURIComponent(id);

   // 1. Try Prisma first — match by cuid, numeric id, OR slug.
   const dbTutors = await getPublicTutorsFromDb();
   let tutor = dbTutors?.find((t) => String(t.id) === decodedId || t.slug === decodedId);

   // 2. Fall back to static allTutors — match by numeric id, string id, OR slug.
   if (!tutor) {
      const numericId = Number.parseInt(decodedId, 10);
      tutor =
         (!Number.isNaN(numericId) ? allTutors.find((t) => t.id === numericId) : undefined) ??
         allTutors.find((t) => String(t.id) === decodedId) ??
         allTutors.find((t) => t.slug === decodedId);
   }

   if (!tutor) notFound();

   const reviews = (await getTutorReviewsForPublic(String(tutor.id))) ?? [];

   return <TutorProfileClient tutor={tutor} reviews={reviews} />;
}
