import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminJsonViewer } from "../../../_components/AdminPrimitives";
import { getPageById } from "../../../_lib/admin-data";

export default async function AdminPageSchema({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Schema" title={page.title} description="Inspect JSON-LD and FAQ schema readiness." />
      <AdminCard><AdminJsonViewer value={page.schema} /></AdminCard>
    </AdminShell>
  );
}

