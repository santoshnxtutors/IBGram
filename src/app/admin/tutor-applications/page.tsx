import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { TutorApplicationsClient } from "./TutorApplicationsClient";

export const dynamic = "force-dynamic";

export default function AdminTutorApplicationsPage() {
  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Tutors"
        title="Tutor Applications"
        description="Approve tutor profiles submitted from tutor dashboards, and create logins for existing catalog tutors."
      />
      <AdminCard>
        <TutorApplicationsClient />
      </AdminCard>
    </AdminShell>
  );
}
