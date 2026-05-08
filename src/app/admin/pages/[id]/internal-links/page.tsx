import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminStatusBadge } from "../../../_components/AdminPrimitives";
import { getPageById } from "../../../_lib/admin-data";

export default async function AdminPageInternalLinks({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Internal links" title={page.title} description="Generate, approve and audit crawlable links for this page." />
      <AdminCard>
        <AdminDataTable columns={["Anchor", "Target", "Type", "Priority", "Follow", "Status"]} rows={page.internalLinks.map((link) => [link.anchorText, link.targetUrl, link.linkType, link.priority, link.followStatus, <AdminStatusBadge key={link.linkId} status={link.linkStatus === "active" ? "published" : "review"} />])} empty="No links for this page yet." />
      </AdminCard>
    </AdminShell>
  );
}

