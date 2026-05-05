import { BookOpenCheck, GraduationCap, Home, Laptop, MapPinned } from "lucide-react";
import type { CitySeoPage } from "@/lib/seo/city-page-types";

export function CityTrustBar({ page }: { page: CitySeoPage }) {
  const stats = [
    {
      icon: GraduationCap,
      value: page.ibProgramsAvailable.length.toString(),
      label: "IB programmes",
    },
    {
      icon: BookOpenCheck,
      value: page.ibSubjectsAvailable.length.toString(),
      label: "priority subjects",
    },
    {
      icon: MapPinned,
      value: page.premiumAreas.length.toString(),
      label: "city areas mapped",
    },
    {
      icon: page.onlineTutorAvailable ? Laptop : Home,
      value: page.hybridTutorAvailable ? "Hybrid" : page.onlineTutorAvailable ? "Online" : "Home",
      label: "learning mode",
    },
  ];

  return (
    <section className="border-y border-border/20 bg-background py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/20 text-primary">
                <stat.icon className="size-4" />
              </div>
              <div>
                <div className="text-xl font-black leading-none text-foreground md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
