import Link from "next/link";
import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminButtonLink, AdminCard, AdminDataTable, AdminFilterBar, AdminPill, AdminScoreBadge, AdminStatusBadge } from "../_components/AdminPrimitives";
import { getTutors } from "../_lib/admin-data";

export default async function AdminTutorsPage() {
  const tutors = await getTutors();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Tutors" title="Tutor Management" description="Manage tutor subjects, curriculums, verification, profile status and location matching fields without redesigning public tutor pages." actions={<AdminButtonLink href="/admin/tutors/new">New tutor</AdminButtonLink>} />
      <AdminFilterBar><AdminPill>IB</AdminPill><AdminPill>IGCSE</AdminPill><AdminPill>Home</AdminPill><AdminPill>Online</AdminPill><AdminPill>Verified</AdminPill></AdminFilterBar>
      <AdminCard>
        <AdminDataTable columns={["Tutor", "Curriculum", "Subjects", "Primary city", "Areas", "Modes", "Rating", "Status", "Actions"]} rows={tutors.map((tutor) => [
          <Link key={tutor.id} href={`/admin/tutors/${tutor.id}`} className="font-black text-white hover:text-emerald-300">{tutor.name}</Link>,
          tutor.curriculums,
          [...tutor.ibSubjects, ...tutor.igcseSubjects].slice(0, 4).join(", "),
          tutor.primaryCity,
          tutor.availableAreas.slice(0, 3).join(", ") || "-",
          tutor.teachingModes.join(", "),
          <AdminScoreBadge key={`${tutor.id}-rating`} score={Math.round(tutor.rating * 20)} />,
          <AdminStatusBadge key={`${tutor.id}-status`} status={tutor.profileStatus === "active" ? "published" : "draft"} />,
          <Link key={`${tutor.id}-edit`} href={`/admin/tutors/${tutor.id}/edit`} className="font-bold text-emerald-300">Edit</Link>,
        ])} />
      </AdminCard>
    </AdminShell>
  );
}


