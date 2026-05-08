import { notFound } from "next/navigation";
import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminButtonLink, AdminCard, AdminDataTable, AdminStatusBadge } from "../../_components/AdminPrimitives";
import { getTutors } from "../../_lib/admin-data";

export default async function AdminTutorDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tutor = (await getTutors()).find((item) => item.id === id);
  if (!tutor) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Tutor profile" title={tutor.name} description={tutor.headline} actions={<AdminButtonLink href={`/admin/tutors/${tutor.id}/edit`}>Edit tutor</AdminButtonLink>} />
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <AdminCard>
          <p className="text-slate-400">{tutor.bio}</p>
          <AdminDataTable columns={["Field", "Value"]} rows={[["IB programmes", tutor.ibProgrammes.join(", ")], ["IB subjects", tutor.ibSubjects.join(", ")], ["IGCSE subjects", tutor.igcseSubjects.join(", ")], ["Teaching modes", tutor.teachingModes.join(", ")], ["Nearby schools", tutor.nearbySchools.join(", ")]]} />
        </AdminCard>
        <AdminCard>
          <AdminStatusBadge status={tutor.profileStatus === "active" ? "published" : "draft"} />
          <p className="mt-4 text-sm font-semibold text-slate-400">{tutor.travelNotes}</p>
        </AdminCard>
      </div>
    </AdminShell>
  );
}

