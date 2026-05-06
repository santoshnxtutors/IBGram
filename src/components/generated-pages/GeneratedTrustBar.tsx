import { CheckCircle2, Link2, ShieldCheck, Sparkles } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedTrustBar({ page }: { page: GeneratedSeoPage }) {
  const items = [
    { icon: ShieldCheck, label: "Verified tutor matching" },
    { icon: Sparkles, label: `${page.programmes.join(", ")} support` },
    { icon: Link2, label: `${page.internalLinks.length} internal links` },
    { icon: CheckCircle2, label: page.indexFlag === "index" ? "Index-ready" : "Review before indexing" },
  ];

  return (
    <section className="border-y border-border/50 bg-[#0B0F19]/35 py-5">
      <div className="container mx-auto grid gap-3 px-4 md:grid-cols-4 md:px-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm font-bold text-foreground/90">
            <Icon className="size-4 text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
