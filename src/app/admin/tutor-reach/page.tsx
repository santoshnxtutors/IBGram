import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminEmptyState } from "../_components/AdminPrimitives";
import { TutorReachClient } from "./TutorReachClient";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

type ReachFaq = { question: string; answer: string };

export default async function AdminTutorReachPage() {
  let dbError: string | null = null;
  let items: Array<{
    id: string;
    tutorId: string;
    slug: string;
    subject: string;
    board: string;
    mode: string;
    city: string | null;
    title: string;
    h1: string;
    intro: string | null;
    body: string;
    faqs: ReachFaq[];
    metaTitle: string | null;
    metaDescription: string | null;
    metaKeywords: string[];
    status: string;
    indexFlag: string;
    wordCount: number;
    publishedAt: string | null;
    updatedAt: string;
    tutorName: string;
  }> = [];
  let tutors: Array<{ id: string; displayName: string; slug: string }> = [];

  try {
    const [rows, tutorRows] = await Promise.all([
      prisma.tutorReachPage.findMany({
        orderBy: [{ updatedAt: "desc" }],
        take: 500,
        include: { tutor: { select: { displayName: true } } },
      }),
      prisma.tutor.findMany({
        where: { deletedAt: null },
        orderBy: [{ displayName: "asc" }],
        select: { id: true, displayName: true, slug: true },
        take: 1000,
      }),
    ]);
    tutors = tutorRows;
    items = rows.map((r) => ({
      id: r.id,
      tutorId: r.tutorId,
      slug: r.slug,
      subject: r.subject,
      board: r.board,
      mode: r.mode,
      city: r.city,
      title: r.title,
      h1: r.h1,
      intro: r.intro,
      body: r.body,
      faqs: Array.isArray(r.faqs) ? (r.faqs as unknown as ReachFaq[]) : [],
      metaTitle: r.metaTitle,
      metaDescription: r.metaDescription,
      metaKeywords: r.metaKeywords,
      status: r.status,
      indexFlag: r.indexFlag,
      wordCount: r.wordCount,
      publishedAt: r.publishedAt?.toISOString() ?? null,
      updatedAt: r.updatedAt.toISOString(),
      tutorName: r.tutor.displayName,
    }));
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Content"
        title="Tutor Reach"
        description="Create per-tutor subject/board landing pages (e.g. 'IB DP Maths Home Tutor — Ajay Vatsyayan'). Each page needs its own unique content; thin pages stay out of the sitemap to protect SEO. Published pages live at /tutor/<slug>/."
      />
      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Database not reachable" detail={dbError} />
        ) : (
          <TutorReachClient items={items} tutors={tutors} />
        )}
      </AdminCard>
    </AdminShell>
  );
}
