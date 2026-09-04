import type { LucideIcon } from "lucide-react";
import type { GeneratedContentBlock, GeneratedSeoPage } from "@/lib/page-generator/types";

/** Block types claimed by a dedicated section in GeneratedPageRenderer. */
const CLAIMED_BLOCK_TYPES: GeneratedContentBlock["type"][] = [
  "programmes",
  "subjects",
  "local_areas",
  "schools",
  "verification",
  "matching_process",
  "tutoring_modes",
];

/**
 * Renders every content block no dedicated section claims (currently intro, trust
 * and cta). Without this the writer's prose for those blocks is dropped silently,
 * which cost roughly 660 words a page. Keyed off the claimed list rather than a
 * hardcoded set so a new block type renders instead of vanishing.
 */
export function GeneratedRemainingBlocks({ page }: { page: GeneratedSeoPage }) {
  const blocks = page.contentBlocks.filter((item) => !CLAIMED_BLOCK_TYPES.includes(item.type));
  if (blocks.length === 0) return null;

  return (
    <section className="bg-background py-10 md:py-14">
      <div className="container mx-auto space-y-12 px-4 md:px-6">
        {blocks.map((block) => (
          <div key={`${block.type}-${block.heading}`} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">{block.heading}</h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{block.body}</p>
            </div>
            {block.items.length > 0 && (
              <div className="flex flex-col gap-3 lg:col-span-5">
                {block.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-border/50 bg-background/50 p-4">
                    <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

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
    <section className={`${tinted ? "bg-[#0B0F19]/35" : "bg-background"} py-10 md:py-14`}>
      {/* Prose left, points stacked right. A full-width heading with a 3-across grid
          under it left a large empty band whenever the item count was not a multiple
          of three, which is most pages. */}
      <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
            <Icon className="size-3.5" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">{block.heading || fallbackTitle}</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{block.body}</p>
        </div>
        {block.items.length > 0 && (
          <div className="flex flex-col gap-3 lg:col-span-5">
            {block.items.map((item) => (
              <div key={item} className="rounded-2xl border border-border/50 bg-background/50 p-4">
                <p className="text-sm font-semibold leading-relaxed text-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
