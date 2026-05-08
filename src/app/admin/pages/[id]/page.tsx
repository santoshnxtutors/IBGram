import Link from "next/link";
import { notFound } from "next/navigation";

import { AdminShell } from "../../_components/AdminShell";
import { AdminPageHeader, AdminButtonLink, AdminCard, AdminDataTable, AdminJsonViewer, AdminSeoScoreCard, AdminStatusBadge } from "../../_components/AdminPrimitives";
import { getPageById } from "../../_lib/admin-data";

export default async function AdminPageDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow={page.pageType} title={page.title} description={page.introSummary} actions={<AdminButtonLink href={`/admin/pages/${encodeURIComponent(page.id)}/edit`}>Edit page</AdminButtonLink>} />
      <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <AdminCard>
            <div className="flex flex-wrap gap-2">
              <AdminStatusBadge status={page.status} />
              <AdminStatusBadge indexFlag={page.indexFlag} />
              <span className="rounded-md border border-white/10 px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-slate-300">{page.curriculum}</span>
            </div>
            <h2 className="mt-4 text-2xl font-black text-white">{page.h1}</h2>
            <p className="mt-2 text-sm font-semibold text-slate-400">{page.url}</p>
          </AdminCard>
          <AdminCard>
            <h2 className="mb-4 text-xl font-black text-white">Content blocks</h2>
            <AdminDataTable columns={["Type", "Heading", "Items"]} rows={page.contentBlocks.map((block) => [block.type, block.heading, block.items.length])} />
          </AdminCard>
          <AdminCard>
            <h2 className="mb-4 text-xl font-black text-white">FAQs</h2>
            <AdminDataTable columns={["Question", "Answer"]} rows={page.faqs.map((faq) => [faq.question, faq.answer])} />
          </AdminCard>
        </div>
        <aside className="space-y-5">
          <AdminSeoScoreCard score={page.seoScore} warnings={page.duplicateRisk !== "low" ? [`Duplicate risk is ${page.duplicateRisk}.`] : []} />
          <AdminCard>
            <h2 className="mb-3 text-xl font-black text-white">Quick actions</h2>
            <div className="grid gap-2">
              {["preview", "seo", "internal-links", "schema", "publish"].map((item) => (
                <Link key={item} href={`/admin/pages/${encodeURIComponent(page.id)}/${item}`} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-black text-white hover:bg-white/[0.08]">{item}</Link>
              ))}
            </div>
          </AdminCard>
          <AdminCard>
            <h2 className="mb-3 text-xl font-black text-white">Schema</h2>
            <AdminJsonViewer value={page.schema} />
          </AdminCard>
        </aside>
      </div>
    </AdminShell>
  );
}

