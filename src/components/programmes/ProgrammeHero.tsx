import React from "react";

interface ProgrammeHeroProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export function ProgrammeHero({ title, subtitle, description, badge }: ProgrammeHeroProps) {
  return (
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-20 flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-background -z-10" />
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 md:space-y-5">
        {badge && (
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-2">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-2xl">
          {subtitle}
        </h2>
        <p className="text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
