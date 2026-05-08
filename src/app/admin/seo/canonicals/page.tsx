import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable } from "../../_components/AdminPrimitives";
import { getPages } from "../../_lib/admin-data";

export default async function AdminCanonicalsPage() {
  const pages = await getPages();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Canonicals" title="Canonical Rules" description="Review canonical targets and possible duplicates." />
      <AdminCard>
        <AdminDataTable columns={["Page", "URL", "Canonical", "Duplicate risk"]} rows={pages.slice(0, 80).map((page) => [page.title, page.url, page.canonicalUrl, page.duplicateRisk])} />
      </AdminCard>
    </AdminShell>
  );
}


