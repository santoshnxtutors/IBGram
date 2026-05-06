import type { LucideIcon } from "lucide-react";
import type { GeneratedContentBlock, GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedBlockSection({
  page,
  type,
  icon: Icon,
  eyebrow,
  fallbackTitle,
  tinted = false,
}: {
  page: GeneratedSeoPage;
  type: GeneratedContentBlock["type"];
  icon: LucideIcon;
  eyebrow: string;
  fallbackTitle: string;
  tinted?: boolean;
}) {
  const block = page.contentBlocks.find((item) => item.type === type);
  if (!block) return null;

  return (
    <section className={`${tinted ? "bg-[#0B0F19]/35" : "bg-background"} py-16 md:py-24`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
            <Icon className="size-3.5" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{block.heading || fallbackTitle}</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{block.body}</p>
        </div>
        {block.items.length > 0 && (
          <div className="grid gap-5 md:grid-cols-3">
            {block.items.map((item) => (
              <div key={item} className="rounded-2xl border border-border/50 bg-background/50 p-5">
                <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
