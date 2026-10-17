import Link from "next/link";
import { prisma } from "@/lib/db";
import { normaliseImageUrl } from "@/lib/cms/public-tutors";
import { getCountryByCode } from "@/lib/countries";
import { PersonAvatar } from "@/components/tutors/PersonAvatar";
import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminEmptyState, AdminMetricCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { PublishTutorButton } from "./PublishTutorButton";
import { DeleteAccountButton } from "../_components/DeleteAccountButton";

export const dynamic = "force-dynamic";

/**
 * Tutors who created an account on /signup (email or Google) and the profile
 * they filled in on /tutor/profile. The profile is a normal Tutor row, so it
 * also shows in Tutor Management; publishing here puts it on /tutors.
 */
function loadSignups() {
  return prisma.user.findMany({
    where: { accountType: "tutor", deletedAt: null },
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
      tutorProfile: {
        include: {
          profile: true,
          subjects: { orderBy: { priority: "asc" } },
          curriculums: true,
          locations: { orderBy: { priority: "asc" }, include: { city: { include: { state: true, country: true } } } },
        },
      },
    },
  });
}

type Signup = Awaited<ReturnType<typeof loadSignups>>[number];
type Meta = {
  teachingModes?: string[];
  signupCity?: string;
  countriesCovered?: string[];
  qualifications?: Array<{ title: string; description?: string }>;
};

const fmtDate = (value: Date | null) =>
  value ? new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : null;
const uniq = (values: Array<string | null | undefined>) => [...new Set(values.filter((v): v is string => Boolean(v)))];
const pill = "rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-slate-200 hover:border-emerald-300/50";

function stateOf(tutor: Signup["tutorProfile"]) {
  if (!tutor || tutor.deletedAt) return { key: "none", label: "No profile yet", cls: "border-white/15 text-slate-300" } as const;
  if (tutor.status === "active" && tutor.approved) return { key: "published", label: "Published", cls: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200" } as const;
  return { key: "pending", label: "Awaiting review", cls: "border-amber-300/30 bg-amber-300/10 text-amber-200" } as const;
}

export default async function AdminTutorSignupsPage() {
  let signups: Signup[] = [];
  let dbError: string | null = null;
  try {
    signups = await loadSignups();
  } catch (err) {
    dbError = err instanceof Error ? err.message : String(err);
  }

  const states = signups.map((s) => stateOf(s.tutorProfile).key);
  const count = (key: string) => states.filter((s) => s === key).length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Tutors"
        title="Tutor Signups"
        description="Tutors who signed up on the website and the profile they submitted. Open Full details to see everything, including private contact details. Publish a profile to put it live."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AdminMetricCard label="Total signups" value={signups.length} />
        <AdminMetricCard label="Awaiting review" value={count("pending")} tone="amber" />
        <AdminMetricCard label="Published" value={count("published")} />
        <AdminMetricCard label="No profile yet" value={count("none")} tone="amber" />
      </div>

      <AdminCard>
        {dbError ? (
          <AdminEmptyState title="Could not load signups" detail={dbError} />
        ) : signups.length === 0 ? (
          <AdminEmptyState title="No tutor signups yet" detail="Tutors who sign up at /signup will appear here." />
        ) : (
          <div className="space-y-4">
            {signups.map((signup) => (
              <SignupCard key={signup.id} signup={signup} />
            ))}
          </div>
        )}
      </AdminCard>
    </AdminShell>
  );
}

function SignupCard({ signup }: { signup: Signup }) {
  const tutor = signup.tutorProfile && !signup.tutorProfile.deletedAt ? signup.tutorProfile : null;
  const state = stateOf(signup.tutorProfile);
  const meta = (tutor?.profile?.metadata ?? {}) as Meta;
  const name = tutor?.displayName || [signup.firstName, signup.lastName].filter(Boolean).join(" ") || signup.email;
  const avatar = tutor?.avatarUrl ? normaliseImageUrl(tutor.avatarUrl) : signup.avatarUrl;
  const loc = tutor?.locations[0];
  const place = loc ? [loc.cityName, loc.city.state.name, loc.city.country.name].join(", ") : meta.signupCity ?? null;
  const ib = tutor?.subjects.filter((s) => s.curriculum === "IB").map((s) => s.subjectName) ?? [];
  const igcse = tutor?.subjects.filter((s) => s.curriculum === "IGCSE").map((s) => s.subjectName) ?? [];
  const modes = meta.teachingModes ?? [];
  const profileUrl = tutor ? `/tutor-profile/${tutor.slug}/` : null;
  const faqs = Array.isArray(tutor?.faqs) ? (tutor.faqs as Array<{ question?: string; answer?: string }>) : [];
  const education = tutor?.profile?.education?.split("\n").map((l) => l.trim()).filter(Boolean) ?? [];
  const countries = meta.countriesCovered?.includes("all")
    ? "All countries (worldwide online)"
    : (meta.countriesCovered ?? []).map((c) => getCountryByCode(c)?.name ?? c.toUpperCase()).join(", ");

  return (
    <article className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      {/* Basic info */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <PersonAvatar src={avatar} name={name} className="size-12 text-base" />
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-white">{name}</h3>
            {tutor?.headline && <p className="line-clamp-1 text-sm font-medium text-slate-400">{tutor.headline}</p>}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
          <span className={`rounded-full border px-3 py-1 font-bold uppercase tracking-wide ${state.cls}`}>{state.label}</span>
          <span>Joined {fmtDate(signup.createdAt)}</span>
        </div>
      </div>

      {tutor && (
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-300">
          {(ib.length > 0 || igcse.length > 0) && (
            <span className="min-w-0 break-words">
              <span className="font-bold text-slate-200">Subjects: </span>
              {[...ib, ...igcse].slice(0, 5).join(", ")}
              {ib.length + igcse.length > 5 && ` +${ib.length + igcse.length - 5}`}
            </span>
          )}
          {place && <span className="break-words"><span className="font-bold text-slate-200">Location: </span>{place}</span>}
          {modes.length > 0 && <span className="capitalize"><span className="font-bold normal-case text-slate-200">Modes: </span>{modes.join(", ")}</span>}
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tutor ? (
          <>
            <PublishTutorButton tutorId={tutor.id} published={state.key === "published"} />
            <Link href={`/admin/tutors/${tutor.id}/edit`} className={pill}>Edit full profile</Link>
            {state.key === "published" && profileUrl && (
              <a href={profileUrl} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-300/30 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-300/10">
                View live profile
              </a>
            )}
          </>
        ) : (
          <p className="text-sm font-medium text-slate-400">Signed up but has not submitted a tutor profile yet.</p>
        )}
        <span className="ml-auto">
          <DeleteAccountButton userId={signup.id} name={name} isTutor />
        </span>
      </div>

      {/* Everything else, including private contact details */}
      <details className="group mt-4 rounded-xl border border-white/10 bg-white/[0.02]">
        <summary className="cursor-pointer select-none px-4 py-3 text-sm font-bold text-emerald-300 hover:text-emerald-200">
          Full details
        </summary>
        <div className="space-y-5 border-t border-white/10 p-4">
          <Group title="Contact (private, IB Gram team only)">
            <Row label="WhatsApp" value={tutor?.phone} href={tutor?.phone ? `https://wa.me/${tutor.phone.replace(/\D/g, "")}` : undefined} />
            <Row label="Contact email" value={tutor?.email} href={tutor?.email ? `mailto:${tutor.email}` : undefined} />
            <Row label="Login email" value={signup.email} href={`mailto:${signup.email}`} />
            <Row label="Last login" value={fmtDate(signup.lastLoginAt)} />
          </Group>

          {tutor && (
            <>
              <Group title="Profile">
                <Row label="Profile link" value={profileUrl ? `ibgram.com${profileUrl}` : null} />
                <Row label="Headline" value={tutor.headline} />
                <Row label="Short bio" value={tutor.bio} wide />
                <Row label="About" value={tutor.about} wide />
              </Group>

              <Group title="Teaching">
                <Row label="Curricula" value={uniq(tutor.curriculums.map((c) => c.curriculum)).join(", ")} />
                <Row label="IB programmes" value={uniq(tutor.curriculums.map((c) => c.programme)).join(", ")} />
                <Row label="IB subjects" value={ib.join(", ")} />
                <Row label="IGCSE subjects" value={igcse.join(", ")} />
                <Row label="Teaching modes" value={modes.join(", ")} />
                <Row label="Specialties" value={tutor.profile?.tags.join(", ")} />
                <Row label="Languages" value={tutor.profile?.languages.join(", ")} />
                <Row label="Methodology" value={tutor.profile?.methodology} wide />
              </Group>

              <Group title="Experience, fees & availability">
                <Row label="Experience" value={tutor.experienceYears != null ? `${tutor.experienceYears} years` : null} />
                <Row label="Hourly rate" value={tutor.hourlyRate != null ? `${tutor.currency === "USD" ? "$" : "₹"}${Number(tutor.hourlyRate)}/hr` : null} />
                <Row label="Success rate" value={tutor.profile?.successRate} />
                <Row label="Response time" value={tutor.profile?.responseTime} />
                <Row label="Availability" value={tutor.profile?.availabilityText} />
              </Group>

              <Group title="Location & coverage">
                <Row label="City" value={loc?.cityName ?? meta.signupCity} />
                <Row label="State" value={loc?.city.state.name} />
                <Row label="Country" value={loc?.city.country.name} />
                <Row label="Areas" value={uniq(tutor.locations.map((l) => l.areaName)).join(", ")} />
                <Row label="Sectors" value={uniq(tutor.locations.map((l) => l.sectorName)).join(", ")} />
                <Row label="Societies" value={uniq(tutor.locations.map((l) => l.societyName)).join(", ")} />
                <Row label="Travel notes" value={loc?.notes} />
                <Row label="Countries covered" value={countries} wide />
              </Group>

              {(education.length > 0 || (meta.qualifications?.length ?? 0) > 0) && (
                <Group title="Education & qualifications">
                  {education.length > 0 && <List label="Education" items={education} />}
                  {(meta.qualifications?.length ?? 0) > 0 && (
                    <List label="Qualifications" items={(meta.qualifications ?? []).map((q) => (q.description ? `${q.title}: ${q.description}` : q.title))} />
                  )}
                </Group>
              )}

              {faqs.length > 0 && (
                <Group title={`FAQs (${faqs.length})`}>
                  <div className="space-y-2 sm:col-span-2">
                    {faqs.map((f, i) => (
                      <div key={i} className="min-w-0 rounded-lg bg-white/[0.03] p-3">
                        <p className="break-words font-bold text-slate-200">{f.question}</p>
                        <p className="mt-1 whitespace-pre-line break-words text-slate-400">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </Group>
              )}
            </>
          )}
        </div>
      </details>
    </article>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">{title}</h4>
      <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">{children}</dl>
    </section>
  );
}

function Row({ label, value, href, wide }: { label: string; value?: string | null; href?: string; wide?: boolean }) {
  if (!value) return null;
  return (
    <div className={`flex min-w-0 gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <dt className="w-28 shrink-0 font-bold text-slate-300">{label}</dt>
      <dd className="min-w-0 whitespace-pre-line break-words font-medium text-slate-400">
        {href ? (
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-emerald-300 hover:underline">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex min-w-0 gap-2 sm:col-span-2">
      <dt className="w-28 shrink-0 font-bold text-slate-300">{label}</dt>
      <dd className="min-w-0 space-y-1 font-medium text-slate-400">
        {items.map((item) => (
          <p key={item} className="break-words">• {item}</p>
        ))}
      </dd>
    </div>
  );
}
