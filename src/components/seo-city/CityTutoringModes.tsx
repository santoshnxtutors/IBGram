import { Home, Laptop, Shuffle } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityTutoringModes({ page }: { page: CitySeoPage }) {
  const modes = [
    {
      icon: Home,
      title: "Home tutoring",
      enabled: page.homeTutorAvailable,
      text: `Reviewed area by area in ${page.cityName}. Best for younger students, weekly accountability and families who have realistic travel windows.`,
    },
    {
      icon: Laptop,
      title: "Online tutoring",
      enabled: page.onlineTutorAvailable,
      text: "Available across the city for supported IB subjects. Often strongest for DP specialists, IA review, past-paper practice and urgent doubt clearing.",
    },
    {
      icon: Shuffle,
      title: "Hybrid tutoring",
      enabled: page.hybridTutorAvailable,
      text: "Combines in-person structure with online specialist access, which is useful when school schedules, traffic or rare subject needs make one mode too restrictive.",
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            Home tuition and online IB tutoring in {page.cityName}
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{page.teachingModeNotes}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {modes.map((mode) => (
            <div key={mode.title} className="rounded-2xl border border-border/50 bg-muted/10 p-6">
              <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <mode.icon className="size-5" />
              </div>
              <h3 className="mb-2 text-xl font-black text-foreground">{mode.title}</h3>
              <p className="mb-4 text-sm font-medium leading-relaxed text-muted-foreground">{mode.text}</p>
              <span className={`inline-flex rounded-lg border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${mode.enabled ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-muted/30 text-muted-foreground"}`}>
                {mode.enabled ? "available by fit" : "limited"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
