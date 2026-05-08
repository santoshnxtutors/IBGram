import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard } from "../../_components/AdminPrimitives";
import { AdminGeneratorWizard } from "../../_components/AdminGeneratorWizard";

export default function AdminNewPage() {
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Pages" title="Create SEO Page" description="Start with the generator-first workflow. It creates structured blocks, metadata, FAQs, schema and internal link suggestions instead of a single HTML blob." />
      <AdminCard>
        <AdminGeneratorWizard />
      </AdminCard>
    </AdminShell>
  );
}


