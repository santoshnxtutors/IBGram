import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}

export function ProgrammeSection({ title, description, children, icon: Icon }: SectionProps) {
  return (
    <section className="w-full py-10 md:py-16 border-t border-border/40 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-1/3 flex flex-col space-y-3">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-2">
              <Icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <h3 className="text-2xl font-bold tracking-tight text-foreground">{title}</h3>
          {description && (
            <p className="text-[17px] text-muted-foreground leading-relaxed font-medium">
              {description}
            </p>
          )}
        </div>
        <div className="w-full md:w-2/3">
          {children}
        </div>
      </div>
    </section>
  );
}
