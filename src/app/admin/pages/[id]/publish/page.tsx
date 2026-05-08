import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminQualityChecklist, AdminConfirmDialog } from "../../../_components/AdminPrimitives";
import { getPageById } from "../../../_lib/admin-data";
import { runPublishChecklist } from "../../../_lib/publish-checklist";

export default async function AdminPagePublish({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  const checklist = runPublishChecklist(page);
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Publish" title={`Publish checklist: ${page.title}`} description="Indexable SEO pages are blocked until core quality, metadata, FAQs, schema, disclaimers and internal links pass." />
      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <AdminCard><AdminQualityChecklist errors={checklist.errors} warnings={checklist.warnings} /></AdminCard>
        <AdminCard><AdminConfirmDialog action={checklist.ok ? "Publish" : "Publishing is blocked"} /></AdminCard>
      </div>
    </AdminShell>
  );
}

