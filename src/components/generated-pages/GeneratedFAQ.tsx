import { MessageCircleQuestion } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedFAQ({ page }: { page: GeneratedSeoPage }) {
  return (
    <section className="bg-background py-10 md:py-14" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-amber-800">
            <MessageCircleQuestion className="size-3.5" />
            FAQs
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">{page.canonicalUrl.includes("igcse") ? "IGCSE" : "IB"} tutoring FAQs for {page.cityName}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {page.faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-border/50 bg-card p-5 transition-all open:border-primary/30 open:bg-card">
              <summary className="cursor-pointer list-none text-base font-black leading-relaxed text-foreground marker:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-border text-xs text-primary group-open:bg-primary group-open:text-primary-foreground">+</span>
                </span>
              </summary>
              <p className="mt-4 border-t border-border/40 pt-4 text-sm font-medium leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
