import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader } from "../../_components/AdminPrimitives";
import { AdminTutorEditor } from "../../_components/AdminForms";

export default function AdminTutorNewPage() {
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Tutors" title="Create Tutor" description="Add profile, curriculum, IB/IGCSE subjects, modes and location-matching fields." />
      <AdminTutorEditor />
    </AdminShell>
  );
}


