import { notFound } from "next/navigation";
import { AdminShell } from "../../../_components/AdminShell";
import { AdminPageHeader, AdminCard } from "../../../_components/AdminPrimitives";
import { getPageById } from "../../../_lib/admin-data";

export default async function AdminPagePreview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await getPageById(decodeURIComponent(id));
  if (!page) notFound();
  return (
    <AdminShell>
      <AdminPageHeader eyebrow="Preview" title={page.heroTitle} description={page.heroSubtitle} />
      <AdminCard>
        <h1 className="text-3xl font-black text-white">{page.h1}</h1>
        <p className="mt-3 text-slate-400">{page.introSummary}</p>
        <div className="mt-6 space-y-4">{page.contentBlocks.map((block) => <section key={block.heading}><h2 className="text-xl font-black text-white">{block.heading}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{block.body}</p></section>)}</div>
      </AdminCard>
    </AdminShell>
  );
}

