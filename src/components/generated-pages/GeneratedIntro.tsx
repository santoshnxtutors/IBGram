import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedIntro({ page }: { page: GeneratedSeoPage }) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
            Local academic context
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.heroTitle}</h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{page.introSummary}</p>
        </div>
      </div>
    </section>
  );
}
