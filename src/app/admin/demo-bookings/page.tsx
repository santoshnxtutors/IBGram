import Link from "next/link";
import { prisma } from "@/lib/db";
import { normaliseImageUrl } from "@/lib/cms/public-tutors";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { StatusSelect } from "../_components/StatusSelect";
import { ScheduleDemoForm } from "./ScheduleDemoForm";

export const dynamic = "force-dynamic";

const STATUSES = ["new", "contacted", "scheduled", "completed", "cancelled"] as const;
const STATUS_CLS: Record<string, string> = {
  new: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  contacted: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  scheduled: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  completed: "border-violet-300/30 bg-violet-300/10 text-violet-200",
  cancelled: "border-white/15 text-slate-400",
};

/** Every "Book a Demo" sent from the student dashboard, with the student and the tutor they picked. */
function loadRequests() {
  return prisma.demoRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
    include: {
      student: { select: { id: true, email: true, firstName: true, lastName: true, avatarUrl: true, studentProfile: true } },
      tutor: {
        select: {
          id: true,
          slug: true,
          displayName: true,
          headline: true,
          avatarUrl: true,
          phone: true,
          email: true,
          rating: true,
          experienceYears: true,
          userId: true,
          subjects: { select: { subjectName: true }, orderBy: { priority: "asc" } },
        },
      },
    },
  });
}

const fmt = (d: Date) =>
  new Date(d).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

const linkCls = "rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-slate-200 hover:border-emerald-300/50 hover:text-emerald-200";

/** Tutors and student accounts the admin can pair up in the scheduler. */
function loadTutorOptions() {
  return prisma.tutor.findMany({
    where: { deletedAt: null },
    orderBy: { displayName: "asc" },
    select: { id: true, displayName: true, userId: true },
    take: 1000,
  });
}

function loadStudentOptions() {
  return prisma.user.findMany({
    where: { accountType: "student", deletedAt: null },
    orderBy: [{ firstName: "asc" }, { email: "asc" }],
    select: { id: true, email: true, firstName: true, lastName: true },
    take: 1000,
  });
}

export default async function AdminDemoBookingsPage() {
  let requests: Awaited<ReturnType<typeof loadRequests>> = [];
  let dbError: string | null = null;
  let tutorOptions: Awaited<ReturnType<typeof loadTutorOptions>> = [];
  let studentOptions: Awaited<ReturnType<typeof loadStudentOptions>> = [];
  try {
    requests = await loadRequests();
    [tutorOptions, studentOptions] = await Promise.all([loadTutorOptions(), loadStudentOptions()]);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    dbError = message.includes("DemoRequest")
      ? "The DemoRequest table does not exist yet. Run `npx prisma db push --skip-generate --schema database/prisma/schema.prisma` (or deploy) to create it."
      : message;
  }
  const count = (status: string) => requests.filter((r) => r.status === status).length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Students"
        title="Demo Bookings"
        description="Every demo class a student booked from their dashboard: who asked, which tutor they picked, the subject and their preferred time."
      />

      <div className="grid gap-4 sm:grid-cols-5">
        <AdminMetricCard label="Total requests" value={requests.length} />
        <AdminMetricCard label="New" value={count("new")} tone="amber" />
        <AdminMetricCard label="Contacted" value={count("contacted")} />
        <AdminMetricCard label="Scheduled" value={count("scheduled")} />
        <AdminMetricCard label="Completed" value={count("completed")} />
      </div>

      <ScheduleDemoForm
        tutors={tutorOptions.map((t) => ({ id: t.id, displayName: t.displayName, hasLogin: Boolean(t.userId) }))}
        students={studentOptions.map((u) => ({
          id: u.id,
          name: [u.firstName, u.lastName].filter(Boolean).join(" ") || u.email,
          email: u.email,
        }))}
      />

      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Could not load demo bookings" detail={dbError} />
        ) : requests.length === 0 ? (
          <AdminEmptyState title="No demo bookings yet" detail="When a student books a demo from Find a Tutor, it appears here." />
        ) : (
          <div className="space-y-4">
            {requests.map((r) => {
              const s = r.student;
              const sp = s.studentProfile;
              const studentName = [s.firstName, s.lastName].filter(Boolean).join(" ") || s.email;
              const t = r.tutor;
              const subjects = [...new Set(t.subjects.map((x) => x.subjectName))];

              return (
                <article key={r.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">Demo class</p>
                      <h3 className="mt-0.5 text-lg font-bold text-white">{r.subject}</h3>
                      <p className="text-sm font-medium text-slate-400">Preferred: {fmt(r.preferredAt)} IST · Requested {fmt(r.createdAt)}</p>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${STATUS_CLS[r.status] ?? STATUS_CLS.new}`}>{r.status}</span>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    {/* Student */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">Student</p>
                      <div className="mt-2 flex items-center gap-3">
                        <PersonAvatar src={s.avatarUrl} name={studentName} className="size-12 text-base" />
                        <div className="min-w-0">
                          <p className="truncate font-bold text-white">{studentName}</p>
                          <p className="truncate text-sm text-slate-400">
                            <a href={`mailto:${s.email}`} className="hover:text-emerald-300">{s.email}</a>
                          </p>
                        </div>
                      </div>
                      <dl className="mt-3 space-y-1 text-sm">
                        <Row label="Phone" value={sp?.phone} />
                        <Row label="Parent" value={sp?.parentName} />
                        <Row label="Studies" value={sp ? `${sp.curriculum} · ${sp.grade}` : null} />
                        <Row label="School" value={sp?.school} />
                        <Row label="City" value={sp?.city} />
                        <Row label="Learning" value={sp?.learningModes.join(", ")} />
                      </dl>
                      {!sp && <p className="mt-2 text-xs font-medium text-amber-200/80">No student profile filled in yet.</p>}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Link href={`/admin/student-signups/#student-${s.id}`} className={linkCls}>View student profile</Link>
                        {sp?.phone && (
                          <a href={`https://wa.me/${sp.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className={linkCls}>WhatsApp</a>
                        )}
                      </div>
                    </div>

                    {/* Tutor */}
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">Tutor selected</p>
                      <div className="mt-2 flex items-center gap-3">
                        <PersonAvatar src={normaliseImageUrl(t.avatarUrl)} name={t.displayName} className="size-12 text-base" />
                        <div className="min-w-0">
                          <p className="truncate font-bold text-white">{t.displayName}</p>
                          <p className="line-clamp-1 text-sm text-slate-400">{t.headline || "IB & IGCSE Tutor"}</p>
                        </div>
                      </div>
                      <dl className="mt-3 space-y-1 text-sm">
                        <Row label="Subjects" value={subjects.slice(0, 6).join(", ")} />
                        <Row label="Rating" value={t.rating ? `${t.rating.toFixed(1)} / 5` : null} />
                        <Row label="Experience" value={t.experienceYears ? `${t.experienceYears} years` : null} />
                        <Row label="Phone" value={t.phone} />
                        <Row label="Email" value={t.email} />
                      </dl>
                      <p className="mt-2 text-xs font-medium text-slate-500">
                        {t.userId ? "Tutor has a login account: the request is also on their dashboard." : "Tutor has no login account: arrange the demo with them directly."}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a href={`/tutor-profile/${t.slug}/`} target="_blank" rel="noreferrer" className={linkCls}>Public profile</a>
                        <Link href={`/admin/tutors/${t.id}/edit`} className={linkCls}>Edit tutor</Link>
                      </div>
                    </div>
                  </div>

                  {r.notes && (
                    <p className="mt-3 whitespace-pre-line rounded-xl bg-white/[0.03] p-3 text-sm font-medium leading-relaxed text-slate-300">
                      <span className="font-bold text-slate-200">Student notes: </span>
                      {r.notes}
                    </p>
                  )}

                  <div className="mt-4">
                    <StatusSelect endpoint={`/admin/api/demo-bookings/${r.id}/`} status={r.status} options={STATUSES} />
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </AdminCard>
    </AdminShell>
  );
}

function Row({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div className="flex gap-2">
      <dt className="w-20 shrink-0 font-bold text-slate-300">{label}</dt>
      <dd className="min-w-0 break-words font-medium text-slate-400">{value}</dd>
    </div>
  );
}
