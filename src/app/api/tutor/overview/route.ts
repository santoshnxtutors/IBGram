import { prisma } from "@/lib/db";
import { getServerUser } from "@/lib/auth/server";
import { jsonNoStore } from "@/lib/cache/revalidation";

export const dynamic = "force-dynamic";

/**
 * Everything the tutor dashboard shows that is not already reachable from the
 * bookings/chat APIs: public-profile state, review totals (and the review
 * collection link), and paid earnings. All of it real rows — no placeholders.
 */
export async function GET() {
  const user = await getServerUser();
  if (!user || user.accountType !== "tutor") return jsonNoStore({ error: "Not allowed." }, { status: 403 });

  const tutor = await prisma.tutor.findFirst({
    where: { userId: user.id, deletedAt: null },
    select: {
      id: true,
      slug: true,
      displayName: true,
      status: true,
      approved: true,
      verified: true,
      rating: true,
      reviewCount: true,
      currency: true,
      hourlyRate: true,
      avatarUrl: true,
      headline: true,
    },
  });
  if (!tutor) return jsonNoStore({ tutor: null });

  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  const [reviews, agg, paidAll, paidMonth, recentPayments] = await Promise.all([
    prisma.tutorReview.findMany({
      where: { tutorId: tutor.id },
      orderBy: [{ createdAt: "desc" }],
      take: 100,
      select: {
        id: true,
        authorName: true,
        authorRole: true,
        location: true,
        rating: true,
        quote: true,
        status: true,
        featured: true,
        createdAt: true,
      },
    }),
    prisma.tutorReview.aggregate({
      where: { tutorId: tutor.id, status: "published" },
      _avg: { rating: true },
      _count: { _all: true },
    }),
    prisma.payment.aggregate({ where: { tutorId: tutor.id, status: "paid" }, _sum: { amount: true } }),
    prisma.payment.aggregate({
      where: { tutorId: tutor.id, status: "paid", paidAt: { gte: monthStart } },
      _sum: { amount: true },
    }),
    prisma.payment.findMany({
      where: { tutorId: tutor.id, status: "paid" },
      orderBy: [{ paidAt: "desc" }],
      take: 10,
      select: { id: true, orderId: true, amount: true, currency: true, customerName: true, paidAt: true, note: true },
    }),
  ]);

  const publishedCount = agg._count._all;

  return jsonNoStore({
    tutor: {
      id: tutor.id,
      slug: tutor.slug,
      displayName: tutor.displayName,
      headline: tutor.headline,
      avatarUrl: tutor.avatarUrl,
      verified: tutor.verified,
      approved: tutor.approved,
      /** Paused = the tutor hid their own profile; it leaves every public page. */
      hidden: tutor.status === "paused",
      /** "live" once an admin approved it and it is not hidden. */
      publicState: !tutor.approved ? "pending" : tutor.status === "active" ? "live" : tutor.status === "paused" ? "hidden" : "offline",
      currency: tutor.currency,
      hourlyRate: tutor.hourlyRate === null ? null : Number(tutor.hourlyRate),
    },
    reviews: {
      // Published rows are the source of truth; Tutor.rating only fills in for
      // admin-seeded tutors that have no review rows yet.
      // ponytail: an admin publishing a review does not write back Tutor.rating,
      // so public cards can lag the dashboard until the tutor is re-saved.
      rating: publishedCount > 0 ? Number((agg._avg.rating ?? 0).toFixed(1)) : tutor.rating,
      count: publishedCount > 0 ? publishedCount : tutor.reviewCount,
      published: publishedCount,
      pending: reviews.filter((r) => r.status === "review" || r.status === "draft").length,
      items: reviews.map((r) => ({ ...r, createdAt: r.createdAt.toISOString() })),
    },
    earnings: {
      currency: recentPayments[0]?.currency ?? tutor.currency,
      total: Number(paidAll._sum.amount ?? 0),
      thisMonth: Number(paidMonth._sum.amount ?? 0),
      payments: recentPayments.map((p) => ({
        id: p.id,
        orderId: p.orderId,
        amount: Number(p.amount),
        currency: p.currency,
        customerName: p.customerName,
        note: p.note,
        paidAt: p.paidAt?.toISOString() ?? null,
      })),
    },
  });
}
