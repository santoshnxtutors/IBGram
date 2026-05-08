import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard, AdminDataTable, AdminFilterBar, AdminPill, AdminStatusBadge } from "../_components/AdminPrimitives";
import { getInternalLinks, getSeoHealth } from "../_lib/admin-data";

export default async function AdminInternalLinksPage() {
  const [links, seo] = await Promise.all([getInternalLinks(), getSeoHealth()]);
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Internal links" title="Internal Link Management" description="Audit source pages, target pages, anchor text, hierarchy, crawlability, follow state, broken links and approval status." />
      <AdminFilterBar><AdminPill>Orphan pages</AdminPill><AdminPill>Low incoming</AdminPill><AdminPill>Broken</AdminPill><AdminPill>Repeated anchors</AdminPill><AdminPill>City hierarchy</AdminPill></AdminFilterBar>
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <AdminCard>
          <AdminDataTable columns={["Source", "Target", "Anchor", "Type", "Priority", "Crawlable", "Follow", "Status"]} rows={links.map((link) => [link.sourceTitle, link.targetUrl, link.anchorText, link.linkType, link.priority, link.isCrawlable ? "Yes" : "No", link.followStatus, <AdminStatusBadge key={link.linkId} status={link.status === "approved" ? "published" : "review"} />])} />
        </AdminCard>
        <AdminCard>
          <h2 className="text-xl font-black text-white">Tools</h2>
          <div className="mt-3 space-y-2 text-sm font-semibold text-slate-300">
            <p>Find orphan pages: {seo.weakInternalLinks.length}</p>
            <p>Broken links: {seo.brokenInternalLinks.length}</p>
            <p>Missing city-to-area links: ready</p>
            <p>Missing area-to-sector links: ready</p>
            <p>Missing sector-to-society links: ready</p>
            <p>Missing IB/IGCSE subject links: ready</p>
          </div>
        </AdminCard>
      </div>
    </AdminShell>
  );
}


