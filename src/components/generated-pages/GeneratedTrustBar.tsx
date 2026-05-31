import { CheckCircle2, Laptop, ShieldCheck, Sparkles } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedTrustBar({ page }: { page: GeneratedSeoPage }) {
  const modesLabel = page.tutoringModes.length > 0
    ? page.tutoringModes
        .map((m) => (m === "home" ? "Home" : m === "online" ? "Online" : "Hybrid"))
        .join(" · ")
    : "Home · Online · Hybrid";

  const programmesLabel = page.programmes.length > 0 ? page.programmes.join(", ") : "IB & IGCSE";

  const items = [
    { icon: ShieldCheck, label: "Verified tutor profiles" },
    { icon: Sparkles, label: `${programmesLabel} support` },
    { icon: Laptop, label: modesLabel },
    { icon: CheckCircle2, label: "Subject-first matching" },
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
