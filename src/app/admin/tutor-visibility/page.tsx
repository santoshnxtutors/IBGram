import { AdminShell } from "../_components/AdminShell";
import { AdminCard, AdminPageHeader } from "../_components/AdminPrimitives";
import { TutorVisibilityClient } from "./TutorVisibilityClient";

export default function AdminTutorVisibilityPage() {
  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Tutors"
        title="Tutor Visibility"
        description="Choose the top 3 tutor profiles shown on homepage, programme pages, IGCSE and course pages. Public pages fall back to the existing tutor cards when no visibility rule is saved."
      />
      <AdminCard>
        <TutorVisibilityClient />
      </AdminCard>
    </AdminShell>
  );
}
