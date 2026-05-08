import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader } from "../../../_components/AdminPrimitives";
import { AdminTutorEditor } from "../../../_components/AdminForms";
import { getTutors } from "../../../_lib/admin-data";

export default async function AdminTutorEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tutor = (await getTutors()).find((item) => item.id === id);
  if (!tutor) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Tutor editor" title={tutor.name} description="Edit tutor profile, verification, curriculum and location matching fields." />
      <AdminTutorEditor tutor={tutor} />
    </AdminShell>
  );
}

