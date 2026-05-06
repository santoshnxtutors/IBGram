import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedInternalLinks({ page }: { page: GeneratedSeoPage }) {
  const links = page.internalLinks.filter((link) => link.isCrawlable && link.linkStatus === "active").slice(0, 20);
  if (links.length === 0) return null;

  return (
    <section className="bg-[#0B0F19]/35 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-secondary">
            <Link2 className="size-3.5" />
            Explore more
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Related IB Gram pages</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link key={link.linkId} href={link.targetUrl} className="group flex items-center justify-between gap-4 rounded-2xl border border-border/50 bg-background/50 p-5 transition-all hover:border-primary/40 hover:bg-primary/5">
              <span className="text-sm font-black leading-relaxed text-foreground group-hover:text-primary">{link.anchorText}</span>
              <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
