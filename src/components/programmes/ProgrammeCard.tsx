import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProgrammeCardProps {
  title: string;
  age: string;
  description: string;
  href: string;
  features: string[];
}

export function ProgrammeCard({ title, age, description, href, features }: ProgrammeCardProps) {
  return (
    <Link 
      href={href}
      className="group block rounded-2xl border border-border/50 bg-card p-8 transition-all hover:bg-muted/10 hover:border-border duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">{title}</h3>
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0 w-fit">{age}</span>
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed min-h-[80px]">
        {description}
      </p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start text-sm text-muted-foreground/80">
            <span className="mr-2 text-primary mt-1">•</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors">
        Explore Programme <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
