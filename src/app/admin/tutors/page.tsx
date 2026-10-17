import Link from "next/link";
import { AdminShell } from "../_components/AdminShell";
import {
  AdminPageHeader,
  AdminButtonLink,
  AdminCard,
  AdminDataTable,
  AdminFilterBar,
  AdminPill,
  AdminScoreBadge,
  AdminStatusBadge,
  adminFilterHref,
} from "../_components/AdminPrimitives";
import { getTutors } from "../_lib/admin-data";
import type { AdminTutorRecord } from "../_types/admin";

export const dynamic = "force-dynamic";

const BASE = "/admin/tutors";

/** Everything an admin might type: name, subject, city, area, sector, society, school, headline. */
function haystack(t: AdminTutorRecord): string {
  return [
    t.name,
    t.slug,
    t.headline,
    t.curriculums,
    t.primaryCity,
    ...t.ibProgrammes,
    ...t.ibSubjects,
    ...t.igcseSubjects,
    ...t.availableCities,
    ...t.availableAreas,
    ...t.availableSectors,
    ...t.availableSocieties,
    ...t.nearbySchools,
    ...t.teachingModes,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function matchesCurriculum(t: AdminTutorRecord, value: string): boolean {
  const c = (t.curriculums ?? "").toLowerCase();
  if (c.includes("both")) return true;
  if (value === "ib") return c.includes("ib") || t.ibSubjects.length > 0;
  return c.includes("igcse") || t.igcseSubjects.length > 0;
}

export default async function AdminTutorsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const one = (key: string) => {
    const value = params[key];
    return (Array.isArray(value) ? value[0] : value)?.trim() || undefined;
  };

  const q = one("q");
  const current = { q, curriculum: one("curriculum"), mode: one("mode"), status: one("status") };

  const all = await getTutors();
  const needle = q?.toLowerCase();

  const tutors = all.filter((t) => {
    if (needle && !haystack(t).includes(needle)) return false;
    if (current.curriculum && !matchesCurriculum(t, current.curriculum)) return false;
    if (current.mode && !t.teachingModes.includes(current.mode)) return false;
    if (current.status === "verified" && t.verificationStatus !== "verified") return false;
    if (current.status === "active" && t.profileStatus !== "active") return false;
    if (current.status === "draft" && t.profileStatus === "active") return false;
    return true;
  });

  const chip = (label: string, param: keyof typeof current, value: string) => ({
    label,
    href: adminFilterHref(BASE, current, param, value),
    active: current[param] === value,
  });

  const filters = [
    chip("IB", "curriculum", "ib"),
    chip("IGCSE", "curriculum", "igcse"),
    chip("Home", "mode", "home"),
    chip("Online", "mode", "online"),
    chip("Hybrid", "mode", "hybrid"),
    chip("Verified", "status", "verified"),
    chip("Live", "status", "active"),
    chip("Draft", "status", "draft"),
  ];

  const filtered = tutors.length !== all.length;

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Tutors"
        title="Tutor Management"
        description="Manage tutor subjects, curriculums, verification, profile status and location matching fields without redesigning public tutor pages."
        actions={<AdminButtonLink href="/admin/tutors/new">New tutor</AdminButtonLink>}
      />

      <AdminFilterBar
        action={BASE}
        query={q}
        placeholder="Search by name, subject, city, area, sector, society or school"
        filters={filters}
        hidden={{ curriculum: current.curriculum, mode: current.mode, status: current.status }}
      >
        <AdminPill>
          {tutors.length} / {all.length}
        </AdminPill>
        {filtered && (
          <Link href={BASE} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-300 hover:text-emerald-100">
            Clear
          </Link>
        )}
      </AdminFilterBar>

      <AdminCard>
        <AdminDataTable
          columns={["Tutor", "Curriculum", "Subjects", "Primary city", "Areas", "Modes", "Rating", "Status", "Actions"]}
          empty={q || filtered ? "No tutor matches this search. Clear the filters to see everyone." : "No tutors yet."}
          rows={tutors.map((tutor) => [
            <Link key={tutor.id} href={`/admin/tutors/${tutor.id}`} className="font-black text-white hover:text-emerald-300">
              {tutor.name}
            </Link>,
            tutor.curriculums,
            [...new Set([...tutor.ibSubjects, ...tutor.igcseSubjects])].slice(0, 4).join(", "),
            tutor.primaryCity,
            tutor.availableAreas.slice(0, 3).join(", ") || "-",
            tutor.teachingModes.join(", "),
            <AdminScoreBadge key={`${tutor.id}-rating`} score={Math.round(tutor.rating * 20)} />,
            <AdminStatusBadge key={`${tutor.id}-status`} status={tutor.profileStatus === "active" ? "published" : "draft"} />,
            <Link key={`${tutor.id}-edit`} href={`/admin/tutors/${tutor.id}/edit`} className="font-bold text-emerald-300">
              Edit
            </Link>,
          ])}
        />
      </AdminCard>
    </AdminShell>
  );
}
