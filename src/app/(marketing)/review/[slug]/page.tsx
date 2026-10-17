import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ReviewFormClient } from "./ReviewFormClient";

// A utility page a tutor shares by link/QR — never a search result.
export const metadata: Metadata = {
  title: "Leave a review | IB Gram",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function LeaveReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const tutor = await prisma.tutor
    .findFirst({
      where: { deletedAt: null, OR: [{ slug }, { id: slug }] },
      select: { id: true, slug: true, displayName: true, headline: true, avatarUrl: true, verified: true },
    })
    .catch(() => null);
  if (!tutor) notFound();

  const agg = await prisma.tutorReview
    .aggregate({ where: { tutorId: tutor.id, status: "published" }, _avg: { rating: true }, _count: { _all: true } })
    .catch(() => null);

  return (
    <ReviewFormClient
      tutor={tutor}
      rating={agg?._count._all ? Number((agg._avg.rating ?? 0).toFixed(1)) : null}
      count={agg?._count._all ?? 0}
    />
  );
}
