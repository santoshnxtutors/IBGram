import { prisma } from "@/lib/db";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { TUTOR_APPLICATION_TITLE } from "@/lib/tutor-applications";
import { DeleteApplicationButton } from "./DeleteApplicationButton";

export const dynamic = "force-dynamic";

/**
 * Applications from the public "Join as tutor" page.
 *
 * These are JobApplication rows written with jobId null and a fixed
 * jobTitleSnapshot, so they are separated from real job postings by that filter.
 * The tutor-specific answers live in answersJson.
 */
type TutorAnswers = {
  country?: string;
  state?: string;
  city?: string;
  addressLine?: string;
  postalCode?: string;
  curricula?: string[];
  subjects?: string;
  highestQualification?: string;
  university?: string;
  teachingModes?: string[];
  feesRange?: string;
  availability?: string;
};

export default async function AdminNewTutorAppsPage() {
  let items: Awaited<ReturnType<typeof prisma.jobApplication.findMany>> = [];
  let dbError: string | null = null;

  try {
    items = await prisma.jobApplication.findMany({
      where: { jobId: null, jobTitleSnapshot: TUTOR_APPLICATION_TITLE },
      orderBy: [{ createdAt: "desc" }],
      take: 300,
    });
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const newCount = items.filter((item) => item.status === "received").length;
  const withResume = items.filter((item) => item.resumeUrl).length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Tutors"
        title="New Tutor Apps"
        description="Applications submitted from the public Join as Tutor page, newest first."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <AdminMetricCard label="Total applications" value={items.length} />
        <AdminMetricCard label="Awaiting review" value={newCount} tone="amber" />
        <AdminMetricCard label="With CV attached" value={withResume} />
      </div>

      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Could not load applications" detail={dbError} />
        ) : items.length === 0 ? (
          <AdminEmptyState
            title="No tutor applications yet"
            detail="Applications from the Join as Tutor page will appear here."
          />
        ) : (
          <div className="space-y-4">
            {items.map((item) => {
              const answers = (item.answersJson ?? {}) as TutorAnswers;
              const address = [answers.addressLine, answers.city, answers.state, answers.postalCode, answers.country]
                .filter(Boolean)
                .join(", ");

              return (
                <article key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {item.firstName} {item.lastName}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                        {item.phone ? <a href={`tel:${item.phone}`} className="hover:text-primary">{item.phone}</a> : null}
                        {item.phone && item.email ? " · " : null}
                        {item.email ? <a href={`mailto:${item.email}`} className="hover:text-primary">{item.email}</a> : null}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground/80">
                        {item.status}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {new Date(item.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                  </div>

                  <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                    <Row label="Subjects" value={answers.subjects} />
                    <Row label="Curricula" value={answers.curricula?.join(", ")} />
                    <Row label="Qualification" value={[answers.highestQualification, answers.university].filter(Boolean).join(" — ")} />
                    <Row label="Fees range" value={answers.feesRange} />
                    <Row label="Experience" value={item.experienceYears != null ? `${item.experienceYears} years` : null} />
                    <Row label="Teaching modes" value={answers.teachingModes?.join(", ")} />
                    <Row label="Availability" value={answers.availability} />
                    <Row label="Address" value={address} />
                  </dl>

                  {item.coverLetter && (
                    <p className="mt-3 whitespace-pre-line rounded-xl bg-white/[0.03] p-3 text-sm font-medium leading-relaxed text-muted-foreground">
                      {item.coverLetter}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.resumeUrl && (
                      <a
                        href={item.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0B0F19] hover:bg-white/90"
                      >
                        Download CV{item.resumeFilename ? ` (${item.resumeFilename})` : ""}
                      </a>
                    )}
                    {item.photoUrl && (
                      <a
                        href={item.photoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-foreground/80 hover:border-primary/50"
                      >
                        View photo
                      </a>
                    )}
                    {item.linkedInUrl && (
                      <a
                        href={item.linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-foreground/80 hover:border-primary/50"
                      >
                        LinkedIn
                      </a>
                    )}
                    <DeleteApplicationButton id={item.id} name={`${item.firstName} ${item.lastName}`} />
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
      <dt className="shrink-0 font-bold text-foreground/70">{label}:</dt>
      <dd className="font-medium text-muted-foreground">{value}</dd>
    </div>
  );
}
