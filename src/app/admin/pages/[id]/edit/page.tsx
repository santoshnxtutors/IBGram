import { notFound } from "next/navigation";

import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader } from "../../../_components/AdminPrimitives";
import { AdminPageEditor } from "../../../_components/AdminPageEditor";
import { getPageById } from "../../../_lib/admin-data";
import { runPublishChecklist } from "../../../_lib/publish-checklist";

export default async function AdminPageEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  const checklist = runPublishChecklist(page);
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Page editor" title={page.title} description="Structured editing for metadata, hero, content blocks, FAQs, internal links, schema, canonical, robots and publishing state." />
      <AdminPageEditor page={page} checklist={checklist} />
    </AdminShell>
  );
}

