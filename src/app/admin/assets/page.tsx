import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader, AdminCard } from "../_components/AdminPrimitives";
import { MediaLibrary } from "../_components/MediaLibrary";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function AssetsPage() {
  let initial: { items: Awaited<ReturnType<typeof prisma.asset.findMany>>; total: number; take: number; skip: number } | null = null;
  try {
    const [items, total] = await Promise.all([
      prisma.asset.findMany({ orderBy: { createdAt: "desc" }, take: 60 }),
      prisma.asset.count(),
    ]);
    initial = { items, total, take: 60, skip: 0 };
  } catch {
    initial = null;
  }

  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Media"
        title="Media Library"
        description="Drag-drop or pick files to upload directly. Images go to /public/uploads/<folder>/. Each upload creates an Asset row with alt text, dimensions and mime type."
      />
      <AdminCard>
        <MediaLibrary
          initial={
            initial
              ? {
                  ...initial,
                  items: initial.items.map((a) => ({
                    id: a.id,
                    filename: a.filename,
                    url: a.url,
                    mimeType: a.mimeType,
                    sizeBytes: a.sizeBytes,
                    altText: a.altText,
                    width: a.width,
                    height: a.height,
                    createdAt: a.createdAt.toISOString(),
                  })),
                }
              : null
          }
        />
      </AdminCard>
    </AdminShell>
  );
}
