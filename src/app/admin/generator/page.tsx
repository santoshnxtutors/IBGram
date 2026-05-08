import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader } from "../_components/AdminPrimitives";
import { AdminGeneratorWizard } from "../_components/AdminGeneratorWizard";

export default function AdminGeneratorPage() {
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="AI Generator" title="SEO Page Generator" description="Generate city, area, sector, society, school, subject, programme, IB, IGCSE and tutor-location landing page drafts from a few safe fields." />
      <AdminGeneratorWizard />
    </AdminShell>
  );
}


