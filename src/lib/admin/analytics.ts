import "server-only";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";

/**
 * Business-side analytics for the admin dashboard: money, demand, people,
 * moderation queues, activity logs and system health.
 *
 * Deliberately separate from getAdminDashboardSummary (content/SEO metrics) so
 * neither can break the other, and awaited sequentially after it: without
 * PRISMA_CONNECTION_LIMIT the pool is one connection, where two concurrent
 * transactions would queue against each other and can hit pool_timeout.
 *
 * Every read runs inside a `batch()`: production can be a migration behind the
 * schema, and one missing table must never blank the whole dashboard.
 */

export type AdminAnalyticsState = "ok" | "unreachable";

export type Counter = { key: string; count: number };

export type QueueItem = {
  label: string;
  count: number;
  href: string;
  detail: string;
  /** Anything above zero wants an admin's attention. */
  urgent?: boolean;
  /** The source table could not be read, so `count` is unknown rather than zero. */
  unavailable?: boolean;
};

export type SeriesPoint = { bucket: string; label: string; students: number; tutors: number; bookings: number; revenue: number };

export type LoginRow = { id: string; email: string | null; success: boolean; reason: string | null; ipAddress: string | null; createdAt: Date };
export type SignupRow = { id: string; email: string; accountType: string | null; createdAt: Date; status: string };
export type PaymentRow = { id: string; orderId: string; customerName: string; amount: number; currency: string; status: string; tutorName: string | null; createdAt: Date };
export type BookingRow = { id: string; subject: string; status: string; scheduledAt: Date; createdAt: Date; studentName: string; tutorName: string };
export type LeadRow = { id: string; name: string; email: string; inquiryType: string | null; status: string; sourcePage: string | null; createdAt: Date };
export type ReviewRow = { id: string; authorName: string; rating: number; status: string; tutorName: string; createdAt: Date };

export type AdminAnalytics = {
  state: AdminAnalyticsState;
  error: string | null;
  /** Sections whose tables are missing or unreadable, so the UI can say so instead of showing a false zero. */
  degraded: string[];
  generatedAt: string;
  dbLatencyMs: number;
  revenue: {
    currency: string;
    paidTotal: number;
    paidCount: number;
    thisMonth: number;
    lastMonth: number;
    pendingCount: number;
    pendingValue: number;
    failedCount: number;
    averageOrder: number;
  };
  demand: {
    bookings: Counter[];
    bookingsTotal: number;
    bookingsNext7Days: number;
    requests: Counter[];
    requestsTotal: number;
    leads: Counter[];
    leadsTotal: number;
  };
  people: {
    students: number;
    tutors: number;
    staff: number;
    newLast7Days: number;
    newLast30Days: number;
    studentProfiles: Counter[];
    tutorsAwaitingApproval: number;
    activeSessions: number;
  };
  engagement: {
    conversations: number;
    messages: number;
    unreadMessages: number;
    reviews: Counter[];
    reviewsPending: number;
  };
  content: {
    blogPosts: Counter[];
    jobs: number;
    jobApplications: Counter[];
    imports: Counter[];
    generationJobs: Counter[];
  };
  queues: QueueItem[];
  series: SeriesPoint[];
  logs: {
    logins: LoginRow[];
    failedLogins24h: number;
    signups: SignupRow[];
    payments: PaymentRow[];
    bookings: BookingRow[];
    leads: LeadRow[];
    reviews: ReviewRow[];
  };
};

const EMPTY: Omit<AdminAnalytics, "state" | "error" | "degraded" | "generatedAt" | "dbLatencyMs"> = {
  revenue: { currency: "INR", paidTotal: 0, paidCount: 0, thisMonth: 0, lastMonth: 0, pendingCount: 0, pendingValue: 0, failedCount: 0, averageOrder: 0 },
  demand: { bookings: [], bookingsTotal: 0, bookingsNext7Days: 0, requests: [], requestsTotal: 0, leads: [], leadsTotal: 0 },
  people: { students: 0, tutors: 0, staff: 0, newLast7Days: 0, newLast30Days: 0, studentProfiles: [], tutorsAwaitingApproval: 0, activeSessions: 0 },
  engagement: { conversations: 0, messages: 0, unreadMessages: 0, reviews: [], reviewsPending: 0 },
  content: { blogPosts: [], jobs: 0, jobApplications: [], imports: [], generationJobs: [] },
  queues: [],
  series: [],
  logs: { logins: [], failedLogins24h: 0, signups: [], payments: [], bookings: [], leads: [], reviews: [] },
};

type GroupRow = { _count?: { _all?: number | null } | null; _sum?: { amount?: unknown } | null; [key: string]: unknown };

const toCounters = (rows: GroupRow[], field: string): Counter[] =>
  rows
    .map((row) => ({ key: String(row[field] ?? "unknown"), count: row._count?._all ?? 0 }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

const pick = (counters: Counter[], key: string) => counters.find((c) => c.key === key)?.count ?? 0;
const total = (counters: Counter[]) => counters.reduce((acc, c) => acc + c.count, 0);

type RawWeek = { bucket: Date; value: bigint | number | null };

const WEEKS = 12;

/** Monday-start buckets, matching Postgres date_trunc('week', …). */
function weekKeys(): string[] {
  const keys: string[] = [];
  const cursor = new Date();
  cursor.setUTCHours(0, 0, 0, 0);
  cursor.setUTCDate(cursor.getUTCDate() - ((cursor.getUTCDay() + 6) % 7));
  for (let i = WEEKS - 1; i >= 0; i--) {
    const d = new Date(cursor);
    d.setUTCDate(d.getUTCDate() - i * 7);
    keys.push(d.toISOString().slice(0, 10));
  }
  return keys;
}

const toMap = (rows: RawWeek[]): Map<string, number> =>
  new Map(rows.map((r) => [new Date(r.bucket).toISOString().slice(0, 10), Number(r.value ?? 0)]));

/** Run one group of reads; on failure note the section and return the fallback. */
async function batch<T>(name: string, run: () => Promise<T>, fallback: T, degraded: string[]): Promise<T> {
  try {
    return await run();
  } catch {
    degraded.push(name);
    return fallback;
  }
}

const named = (p: { firstName: string | null; lastName: string | null; email: string }) =>
  [p.firstName, p.lastName].filter(Boolean).join(" ") || p.email;

export async function getAdminAnalytics(): Promise<AdminAnalytics> {
  const startedAt = Date.now();
  const degraded: string[] = [];

  try {
    const now = new Date();
    const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const lastMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
    const day = 24 * 60 * 60 * 1000;
    const last24h = new Date(now.getTime() - day);
    const last7d = new Date(now.getTime() - 7 * day);
    const last30d = new Date(now.getTime() - 30 * day);
    const next7d = new Date(now.getTime() + 7 * day);
    const weekFloor = new Date(now.getTime() - WEEKS * 7 * day);

    const noSum = { _sum: { amount: null } };

    // ── money + demand ────────────────────────────────────────────────
    const [paymentRows, bookingRows, requestRows, leadRows, reviewRows] = await Promise.all([
      batch(
        "payments",
        () =>
          prisma.$transaction([
            prisma.payment.groupBy({ by: ["status"], _count: { _all: true }, _sum: { amount: true }, orderBy: { status: "asc" } }),
            prisma.payment.aggregate({ where: { status: "paid", paidAt: { gte: monthStart } }, _sum: { amount: true } }),
            prisma.payment.aggregate({ where: { status: "paid", paidAt: { gte: lastMonthStart, lt: monthStart } }, _sum: { amount: true } }),
          ]) as Promise<[GroupRow[], typeof noSum, typeof noSum]>,
        [[], noSum, noSum] as [GroupRow[], typeof noSum, typeof noSum],
        degraded,
      ),
      batch(
        "demo bookings",
        () =>
          prisma.$transaction([
            prisma.demoBooking.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
            prisma.demoBooking.count({ where: { status: { in: ["requested", "confirmed"] }, scheduledAt: { gte: now, lte: next7d } } }),
          ]) as Promise<[GroupRow[], number]>,
        [[], 0] as [GroupRow[], number],
        degraded,
      ),
      // DemoRequest is not deployed to production yet.
      batch("demo requests", async () => {
        const rows = await prisma.demoRequest.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } });
        return rows as GroupRow[];
      }, [], degraded),
      batch("enquiries", async () => {
        const rows = await prisma.contactLead.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } });
        return rows as GroupRow[];
      }, [], degraded),
      batch("tutor reviews", async () => {
        const rows = await prisma.tutorReview.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } });
        return rows as GroupRow[];
      }, [], degraded),
    ]);

    const [paymentsByStatus, paymentThisMonth, paymentLastMonth] = paymentRows;
    const [bookingsByStatus, bookingsNext7] = bookingRows;

    // ── people, messaging, content, security ──────────────────────────
    const [peopleRows, studentProfileRows, messagingRows, contentRows, opsRows] = await Promise.all([
      batch(
        "accounts",
        () =>
          prisma.$transaction([
            prisma.user.groupBy({ by: ["accountType"], _count: { _all: true }, where: { deletedAt: null }, orderBy: { accountType: "asc" } }),
            prisma.user.count({ where: { deletedAt: null, createdAt: { gte: last7d } } }),
            prisma.user.count({ where: { deletedAt: null, createdAt: { gte: last30d } } }),
            prisma.tutor.count({ where: { deletedAt: null, approved: false } }),
            prisma.session.count({ where: { revokedAt: null, expiresAt: { gte: now } } }),
          ]) as Promise<[GroupRow[], number, number, number, number]>,
        [[], 0, 0, 0, 0] as [GroupRow[], number, number, number, number],
        degraded,
      ),
      // StudentProfile is not deployed to production yet.
      batch("student signups", async () => {
        const rows = await prisma.studentProfile.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } });
        return rows as GroupRow[];
      }, [], degraded),
      batch(
        "messaging",
        () =>
          prisma.$transaction([prisma.conversation.count(), prisma.message.count(), prisma.message.count({ where: { readAt: null } })]) as Promise<
            [number, number, number]
          >,
        [0, 0, 0] as [number, number, number],
        degraded,
      ),
      batch(
        "content",
        () =>
          prisma.$transaction([
            prisma.blogPost.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
            prisma.job.count(),
            prisma.jobApplication.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
            prisma.csvImport.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
            prisma.pageGenerationJob.groupBy({ by: ["status"], _count: { _all: true }, orderBy: { status: "asc" } }),
          ]) as Promise<[GroupRow[], number, GroupRow[], GroupRow[], GroupRow[]]>,
        [[], 0, [], [], []] as [GroupRow[], number, GroupRow[], GroupRow[], GroupRow[]],
        degraded,
      ),
      batch(
        "security",
        () =>
          prisma.$transaction([
            prisma.loginAttempt.count({ where: { success: false, createdAt: { gte: last24h } } }),
            prisma.generatedPage.count({ where: { status: "needs_review" } }),
          ]) as Promise<[number, number]>,
        [0, 0] as [number, number],
        degraded,
      ),
    ]);

    const [usersByType, newUsers7, newUsers30, tutorsAwaitingApproval, activeSessions] = peopleRows;
    const [conversations, messages, unreadMessages] = messagingRows;
    const [blogByStatus, jobsCount, applicationsByStatus, importsByStatus, generationByStatus] = contentRows;
    const [failedLogins24h, pagesNeedingReview] = opsRows;

    // ── activity logs ─────────────────────────────────────────────────
    const [recentLogins, recentSignups, recentPayments, recentBookings, recentLeads, recentReviews] = await Promise.all([
      batch<LoginRow[]>(
        "sign-in log",
        () =>
          prisma.loginAttempt.findMany({
            orderBy: { createdAt: "desc" },
            take: 12,
            select: { id: true, email: true, success: true, reason: true, ipAddress: true, createdAt: true },
          }),
        [],
        degraded,
      ),
      batch<SignupRow[]>(
        "account log",
        () =>
          prisma.user.findMany({
            where: { deletedAt: null },
            orderBy: { createdAt: "desc" },
            take: 10,
            select: { id: true, email: true, accountType: true, createdAt: true, status: true },
          }),
        [],
        degraded,
      ),
      batch<PaymentRow[]>(
        "payment log",
        async () =>
          (
            await prisma.payment.findMany({
              orderBy: { createdAt: "desc" },
              take: 10,
              select: { id: true, orderId: true, customerName: true, amount: true, currency: true, status: true, tutorName: true, createdAt: true },
            })
          ).map((p) => ({ ...p, amount: Number(p.amount) })),
        [],
        degraded,
      ),
      batch<BookingRow[]>(
        "booking log",
        async () =>
          (
            await prisma.demoBooking.findMany({
              orderBy: { createdAt: "desc" },
              take: 10,
              select: {
                id: true,
                subject: true,
                status: true,
                scheduledAt: true,
                createdAt: true,
                student: { select: { firstName: true, lastName: true, email: true } },
                tutor: { select: { firstName: true, lastName: true, email: true } },
              },
            })
          ).map((b) => ({
            id: b.id,
            subject: b.subject,
            status: b.status,
            scheduledAt: b.scheduledAt,
            createdAt: b.createdAt,
            studentName: named(b.student),
            tutorName: named(b.tutor),
          })),
        [],
        degraded,
      ),
      batch<LeadRow[]>(
        "enquiry log",
        () =>
          prisma.contactLead.findMany({
            orderBy: { createdAt: "desc" },
            take: 10,
            select: { id: true, name: true, email: true, inquiryType: true, status: true, sourcePage: true, createdAt: true },
          }),
        [],
        degraded,
      ),
      batch<ReviewRow[]>(
        "review log",
        async () =>
          (
            await prisma.tutorReview.findMany({
              orderBy: { createdAt: "desc" },
              take: 10,
              select: { id: true, authorName: true, rating: true, status: true, createdAt: true, tutor: { select: { displayName: true } } },
            })
          ).map((r) => ({
            id: r.id,
            authorName: r.authorName,
            rating: r.rating,
            status: r.status,
            tutorName: r.tutor?.displayName ?? "—",
            createdAt: r.createdAt,
          })),
        [],
        degraded,
      ),
    ]);

    // ── 12-week trend (raw SQL: Prisma cannot group by a truncated date) ──
    const weekly = (table: string, where: Prisma.Sql, column: Prisma.Sql, dateCol: Prisma.Sql) =>
      prisma.$queryRaw<RawWeek[]>`
        SELECT date_trunc('week', ${dateCol}) AS bucket, ${column} AS value
        FROM ${Prisma.raw(`"${table}"`)}
        WHERE ${where} AND ${dateCol} >= ${weekFloor}
        GROUP BY 1 ORDER BY 1`;

    const [studentWeeks, tutorWeeks, bookingWeeks, revenueWeeks] = await Promise.all([
      batch(
        "signup trend",
        () =>
          weekly(
            "User",
            Prisma.sql`"accountType" = 'student' AND "deletedAt" IS NULL`,
            Prisma.sql`COUNT(*)::int`,
            Prisma.sql`"createdAt"`,
          ),
        [] as RawWeek[],
        degraded,
      ),
      batch(
        "tutor trend",
        () =>
          weekly("User", Prisma.sql`"accountType" = 'tutor' AND "deletedAt" IS NULL`, Prisma.sql`COUNT(*)::int`, Prisma.sql`"createdAt"`),
        [] as RawWeek[],
        degraded,
      ),
      batch("booking trend", () => weekly("DemoBooking", Prisma.sql`TRUE`, Prisma.sql`COUNT(*)::int`, Prisma.sql`"createdAt"`), [] as RawWeek[], degraded),
      batch(
        "revenue trend",
        () =>
          weekly(
            "Payment",
            Prisma.sql`"status" = 'paid'`,
            Prisma.sql`COALESCE(SUM("amount"), 0)::float8`,
            Prisma.sql`COALESCE("paidAt", "createdAt")`,
          ),
        [] as RawWeek[],
        degraded,
      ),
    ]);

    const studentMap = toMap(studentWeeks);
    const tutorMap = toMap(tutorWeeks);
    const bookingMap = toMap(bookingWeeks);
    const revenueMap = toMap(revenueWeeks);

    const series: SeriesPoint[] = weekKeys().map((bucket) => ({
      bucket,
      label: new Date(bucket).toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      students: studentMap.get(bucket) ?? 0,
      tutors: tutorMap.get(bucket) ?? 0,
      bookings: bookingMap.get(bucket) ?? 0,
      revenue: revenueMap.get(bucket) ?? 0,
    }));

    // ── shape it ──────────────────────────────────────────────────────
    const amountOf = (status: string) => {
      const row = paymentsByStatus.find((r) => r.status === status);
      return row?._sum?.amount ? Number(row._sum.amount) : 0;
    };
    const countOf = (status: string) => paymentsByStatus.find((r) => r.status === status)?._count?._all ?? 0;

    const paidTotal = amountOf("paid");
    const paidCount = countOf("paid");

    const bookings = toCounters(bookingsByStatus, "status");
    const requests = toCounters(requestRows, "status");
    const leads = toCounters(leadRows, "status");
    const reviews = toCounters(reviewRows, "status");
    const userTypes = toCounters(usersByType, "accountType");
    const studentProfiles = toCounters(studentProfileRows, "status");
    const applications = toCounters(applicationsByStatus, "status");

    const missing = (section: string) => degraded.includes(section);
    const reviewsPending = pick(reviews, "review") + pick(reviews, "draft");

    const queues: QueueItem[] = [
      { label: "Tutor profiles to approve", count: tutorsAwaitingApproval, href: "/admin/tutor-signups", detail: "Waiting to go live on the directory", urgent: tutorsAwaitingApproval > 0, unavailable: missing("accounts") },
      { label: "Demo requests to confirm", count: pick(bookings, "requested"), href: "/admin/demo-bookings", detail: "Student booked, tutor has not accepted", urgent: pick(bookings, "requested") > 0, unavailable: missing("demo bookings") },
      { label: "Reviews to moderate", count: reviewsPending, href: "/admin/teacher-reviews", detail: "Submitted from a tutor's review link", urgent: reviewsPending > 0, unavailable: missing("tutor reviews") },
      { label: "New enquiries", count: pick(leads, "new"), href: "/admin/leads", detail: "Contact form leads with no reply", urgent: pick(leads, "new") > 0, unavailable: missing("enquiries") },
      { label: "New student signups", count: pick(studentProfiles, "new"), href: "/admin/student-signups", detail: "Not contacted yet", urgent: pick(studentProfiles, "new") > 0, unavailable: missing("student signups") },
      { label: "Demo asks with the team", count: pick(requests, "new"), href: "/admin/demo-bookings", detail: "Tutor has no login — the team schedules these", urgent: pick(requests, "new") > 0, unavailable: missing("demo requests") },
      { label: "Job applications to screen", count: pick(applications, "received"), href: "/admin/job-applications", detail: "Status: received", urgent: pick(applications, "received") > 0, unavailable: missing("content") },
      { label: "Payments pending", count: countOf("pending"), href: "/admin/payments", detail: "Started but never completed", unavailable: missing("payments") },
      { label: "Pages needing review", count: pagesNeedingReview, href: "/admin/pages?status=needs_review", detail: "Approve or revise before publishing", urgent: pagesNeedingReview > 0, unavailable: missing("security") },
    ].sort(
      (a, b) =>
        Number(a.unavailable ?? false) - Number(b.unavailable ?? false) ||
        Number(b.urgent ?? false) - Number(a.urgent ?? false) ||
        b.count - a.count,
    );

    return {
      state: "ok",
      error: null,
      degraded,
      generatedAt: new Date().toISOString(),
      dbLatencyMs: Date.now() - startedAt,
      revenue: {
        currency: recentPayments[0]?.currency ?? "INR",
        paidTotal,
        paidCount,
        thisMonth: Number(paymentThisMonth._sum.amount ?? 0),
        lastMonth: Number(paymentLastMonth._sum.amount ?? 0),
        pendingCount: countOf("pending"),
        pendingValue: amountOf("pending"),
        failedCount: countOf("failed"),
        averageOrder: paidCount > 0 ? Math.round(paidTotal / paidCount) : 0,
      },
      demand: {
        bookings,
        bookingsTotal: total(bookings),
        bookingsNext7Days: bookingsNext7,
        requests,
        requestsTotal: total(requests),
        leads,
        leadsTotal: total(leads),
      },
      people: {
        students: pick(userTypes, "student"),
        tutors: pick(userTypes, "tutor"),
        staff: pick(userTypes, "unknown"),
        newLast7Days: newUsers7,
        newLast30Days: newUsers30,
        studentProfiles,
        tutorsAwaitingApproval,
        activeSessions,
      },
      engagement: { conversations, messages, unreadMessages, reviews, reviewsPending },
      content: {
        blogPosts: toCounters(blogByStatus, "status"),
        jobs: jobsCount,
        jobApplications: applications,
        imports: toCounters(importsByStatus, "status"),
        generationJobs: toCounters(generationByStatus, "status"),
      },
      queues,
      series,
      logs: {
        logins: recentLogins,
        failedLogins24h,
        signups: recentSignups,
        payments: recentPayments,
        bookings: recentBookings,
        leads: recentLeads,
        reviews: recentReviews,
      },
    };
  } catch (err) {
    return {
      state: "unreachable",
      error: err instanceof Error ? err.message : String(err),
      degraded,
      generatedAt: new Date().toISOString(),
      dbLatencyMs: Date.now() - startedAt,
      ...EMPTY,
    };
  }
}
