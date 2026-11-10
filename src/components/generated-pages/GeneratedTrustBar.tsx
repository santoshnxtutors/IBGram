import { Icon, type IconName } from "@/components/ui/Icon";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

export function GeneratedTrustBar({ page }: { page: GeneratedSeoPage }) {
  const modesLabel = page.tutoringModes.length > 0
    ? page.tutoringModes
        .map((m) => (m === "home" ? "Home" : m === "online" ? "Online" : "Hybrid"))
        .join(" · ")
    : "Home · Online · Hybrid";

  const programmesLabel = page.programmes.length > 0 ? page.programmes.join(", ") : "IB & IGCSE";

  const items: { icon: IconName; label: string }[] = [
    { icon: "shield-check", label: "Verified tutor profiles" },
    { icon: "sparkles", label: `${programmesLabel} support` },
    { icon: "laptop", label: modesLabel },
    { icon: "circle-check", label: "Subject-first matching" },
  ];

  return (
    <section className="border-y border-border/50 bg-muted/60 py-5">
      <div className="container mx-auto grid gap-3 px-4 md:grid-cols-4 md:px-6">
        {items.map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm font-bold text-foreground/90">
            <Icon name={icon} className="size-4 text-primary" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
