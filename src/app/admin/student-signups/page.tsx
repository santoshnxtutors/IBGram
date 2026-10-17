import { prisma } from "@/lib/db";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { StatusSelect } from "../_components/StatusSelect";
import { DeleteAccountButton } from "../_components/DeleteAccountButton";

export const dynamic = "force-dynamic";

/** Students who created an account on /signup and the profile they filled in on /student/profile. */
function loadSignups() {
  return prisma.user.findMany({
    where: { accountType: "student", deletedAt: null },
    orderBy: { createdAt: "desc" },
    take: 500,
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      avatarUrl: true,
      createdAt: true,
      lastLoginAt: true,
      studentProfile: true,
      _count: { select: { demosAsStudent: true } },
    },
  });
}

const fmtDate = (value: Date | null) =>
  value ? new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : null;

const STATUS_CLS: Record<string, string> = {
  new: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  contacted: "border-sky-300/30 bg-sky-300/10 text-sky-200",
  matched: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  closed: "border-white/15 text-slate-400",
};

export default async function AdminStudentSignupsPage() {
  let signups: Awaited<ReturnType<typeof loadSignups>> = [];
  let dbError: string | null = null;
  try {
    signups = await loadSignups();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    dbError = message.includes("StudentProfile")
      ? "The StudentProfile table does not exist yet. Run `npm run db:push` (or deploy) to create it."
      : message;
  }

  const count = (status: string) => signups.filter((s) => s.studentProfile?.status === status).length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Students"
        title="Student Signups"
        description="Students and parents who signed up on the website, with the profile they filled in. Move each one through the pipeline as you match them with a tutor."
      />

      <div className="grid gap-4 sm:grid-cols-5">
        <AdminMetricCard label="Total signups" value={signups.length} />
        <AdminMetricCard label="New" value={count("new")} tone="amber" />
        <AdminMetricCard label="Contacted" value={count("contacted")} />
        <AdminMetricCard label="Matched" value={count("matched")} />
        <AdminMetricCard label="No profile yet" value={signups.filter((s) => !s.studentProfile).length} tone="amber" />
      </div>

      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Could not load student signups" detail={dbError} />
        ) : signups.length === 0 ? (
          <AdminEmptyState title="No student signups yet" detail="Students who sign up at /signup will appear here." />
        ) : (
          <div className="space-y-4">
            {signups.map((signup) => {
              const profile = signup.studentProfile;
              const name = [signup.firstName, signup.lastName].filter(Boolean).join(" ") || signup.email;

              return (
                <article key={signup.id} id={`student-${signup.id}`} className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.02] p-5 target:border-emerald-300/60 target:bg-emerald-300/[0.04]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {signup.avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={signup.avatarUrl} alt="" className="size-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="grid size-12 place-items-center rounded-full bg-white/10 text-lg font-black">{name.charAt(0).toUpperCase()}</div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-white">{name}</h3>
                        <p className="mt-0.5 text-sm font-medium text-slate-400">
                          <a href={`mailto:${signup.email}`} className="hover:text-emerald-300">{signup.email}</a>
                          {profile?.phone && (
                            <>
                              {" · "}
                              <a href={`tel:${profile.phone}`} className="hover:text-emerald-300">{profile.phone}</a>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                      <span className={`rounded-full border px-3 py-1 font-bold uppercase tracking-wide ${profile ? STATUS_CLS[profile.status] ?? STATUS_CLS.new : "border-white/15 text-slate-300"}`}>
                        {profile ? profile.status : "No profile yet"}
                      </span>
                      <span>Joined {fmtDate(signup.createdAt)}</span>
                      {signup.lastLoginAt && <span>· Last login {fmtDate(signup.lastLoginAt)}</span>}
                    </div>
                  </div>

                  {profile ? (
                    <>
                      <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                        <Row label="Parent / guardian" value={profile.parentName} />
                        <Row label="Curriculum" value={profile.curriculum} />
                        <Row label="Grade / year" value={profile.grade} />
                        <Row label="School" value={profile.school} />
                        <Row label="Subjects" value={profile.subjects.join(", ")} />
                        <Row label="Learning modes" value={profile.learningModes.join(", ")} />
                        <Row label="City" value={profile.city} />
                        <Row label="Demo requests" value={String(signup._count.demosAsStudent)} />
                      </dl>
                      {profile.goals && (
                        <p className="mt-3 whitespace-pre-line rounded-xl bg-white/[0.03] p-3 text-sm font-medium leading-relaxed text-slate-300">{profile.goals}</p>
                      )}
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <StatusSelect endpoint={`/admin/api/student-signups/${profile.id}/`} status={profile.status} options={["new", "contacted", "matched", "closed"]} />
                        <a
                          href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-slate-200 hover:border-emerald-300/50"
                        >
                          WhatsApp
                        </a>
                        <DeleteAccountButton userId={signup.id} name={name} isTutor={false} />
                      </div>
                    </>
                  ) : (
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-slate-400">Signed up but has not filled in a profile yet.</p>
                      <DeleteAccountButton userId={signup.id} name={name} isTutor={false} />
                    </div>
                  )}
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
      <dt className="shrink-0 font-bold text-slate-300">{label}:</dt>
      <dd className="font-medium text-slate-400">{value}</dd>
    </div>
  );
}
