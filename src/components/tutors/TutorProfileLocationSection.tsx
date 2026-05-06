import { CheckCircle2, Globe2, Home, Laptop, MapPinned, Route } from "lucide-react";
import type { ReactNode } from "react";
import type { Tutor } from "@/lib/tutor-data";
import { getTutorServiceLocationDisplay } from "@/lib/tutors/tutor-location-matching";

export function TutorProfileLocationSection({ tutor }: { tutor: Tutor }) {
  const display = getTutorServiceLocationDisplay(tutor);

  return (
    <section>
      <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-foreground">
        <MapPinned className="size-6 text-primary" /> Service Locations
      </h3>
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-xl">
        <div className="grid gap-4 md:grid-cols-2">
          <LocationDetail icon={<MapPinned className="size-5 text-primary" />} label="Primary city" value={display.primaryCity} />
          <LocationDetail icon={<Route className="size-5 text-primary" />} label="Areas served" value={display.areas || "Reviewed by request"} />
          <LocationDetail icon={<Home className="size-5 text-secondary" />} label="Sectors served" value={display.sectors || "Reviewed by route"} />
          <LocationDetail icon={<Globe2 className="size-5 text-secondary" />} label="Societies served" value={display.societies || "Nearby areas considered"} />
        </div>

        {display.nearbySchools ? (
          <div className="mt-4 rounded-2xl border border-border/50 bg-muted/10 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">Nearby school support area</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground">{display.nearbySchools}</p>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {display.modes.map((mode) => (
            <span key={mode} className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-primary">
              {mode.includes("Online") ? <Laptop className="size-3.5" /> : <CheckCircle2 className="size-3.5" />}
              {mode}
            </span>
          ))}
        </div>

        <p className="mt-5 text-base font-medium leading-relaxed text-muted-foreground">{display.summary}</p>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/80">{tutor.travelNotes}</p>
      </div>
    </section>
  );
}

function LocationDetail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/50 bg-muted/10 p-4">
      <div className="mb-2 flex items-center gap-2">
        {icon}
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      </div>
      <p className="text-sm font-semibold leading-relaxed text-foreground">{value}</p>
    </div>
  );
}
