import Link from "next/link";
import { Eye, FilePenLine, Rocket, Wand2 } from "lucide-react";

import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminButtonLink, AdminCard, AdminDataTable, AdminFilterBar, AdminPill, AdminScoreBadge, AdminStatusBadge } from "../_components/AdminPrimitives";
import { getPages } from "../_lib/admin-data";

export default async function AdminPagesPage() {
  const pages = await getPages();
  const indexablePages = pages.filter((page) => page.indexFlag === "index").length;
  const generatedPages = pages.filter((page) => page.source === "generated").length;
  const tutorProfiles = pages.filter((page) => page.pageType === "tutor_profile").length;
  const localPages = pages.filter((page) => ["ib_city", "igcse_city", "area", "sector", "society", "school"].includes(page.pageType)).length;

  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Pages" title="Page Operations" description={`Showing ${pages.length} public and generated IB Gram pages from the admin adapter: static routes, IB and IGCSE tutor pages, local SEO pages, course pages, tutor profiles and generator records.`} actions={<AdminButtonLink href="/admin/pages/new">New page</AdminButtonLink>} />
      <AdminFilterBar>
        <AdminPill>{pages.length} total</AdminPill>
        <AdminPill>{indexablePages} indexable</AdminPill>
        <AdminPill>{localPages} local pages</AdminPill>
        <AdminPill>{generatedPages} generated</AdminPill>
        <AdminPill>{tutorProfiles} tutor profiles</AdminPill>
      </AdminFilterBar>
      <AdminCard>
        <AdminDataTable
          columns={["Title", "Type", "URL", "Location", "Curriculum", "Status", "Index", "SEO", "Words", "Links", "Schema", "Updated", "Actions"]}
          rows={pages.map((page) => [
            <Link key={page.id} href={`/admin/pages/${encodeURIComponent(page.id)}`} className="font-black text-white hover:text-emerald-300">{page.title}</Link>,
            page.pageType,
            <span key={`${page.id}-url`} className="font-mono text-xs">{page.url}</span>,
            page.city || page.locality || "-",
            page.curriculum,
            <AdminStatusBadge key={`${page.id}-status`} status={page.status} />,
            <AdminStatusBadge key={`${page.id}-index`} indexFlag={page.indexFlag} />,
            <AdminScoreBadge key={`${page.id}-score`} score={page.seoScore} />,
            page.wordCount,
            page.internalLinksCount,
            page.hasSchema ? "Ready" : "Missing",
            page.lastUpdated,
            <div key={`${page.id}-actions`} className="flex gap-2">
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}`} title="View"><Eye className="size-4 text-slate-300" /></Link>
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}/edit`} title="Edit"><FilePenLine className="size-4 text-emerald-300" /></Link>
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}/seo`} title="Regenerate SEO"><Wand2 className="size-4 text-amber-300" /></Link>
              <Link href={`/admin/pages/${encodeURIComponent(page.id)}/publish`} title="Publish"><Rocket className="size-4 text-sky-300" /></Link>
            </div>,
          ])}
        />
      </AdminCard>
    </AdminShell>
  );
}


