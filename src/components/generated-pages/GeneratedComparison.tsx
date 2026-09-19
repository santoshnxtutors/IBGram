import { Scale } from "lucide-react";
import type { GeneratedSeoPage } from "@/lib/page-generator/types";

/**
 * Side-by-side comparison of the ways a family can get this help (home tutor, coaching centre,
 * online group class...). A real <table>, so search engines and AI answers can lift a row.
 * The first column is the page's own offer and is tinted; the rest are categories, never brands.
 */
export function GeneratedComparison({ page }: { page: GeneratedSeoPage }) {
  const comparison = page.comparison;
  if (!comparison || comparison.rows.length === 0) return null;

  return (
    <section className="bg-background py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-amber-800">
            <Scale className="size-3.5" />
            Compare
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">{comparison.heading}</h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{comparison.intro}</p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border/60">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <caption className="sr-only">{comparison.heading}</caption>
            <thead className="bg-muted/60">
              <tr>
                <th scope="col" className="w-44 p-4 font-black text-foreground">What matters</th>
                {comparison.columns.map((column, index) => (
                  <th key={column} scope="col" className={`p-4 font-black text-foreground ${index === 0 ? "bg-secondary/15" : ""}`}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-t border-border/50">
                  <th scope="row" className="p-4 align-top font-bold text-foreground">{row.label}</th>
                  {row.cells.map((cell, index) => (
                    <td key={index} className={`p-4 align-top font-medium leading-relaxed ${index === 0 ? "bg-secondary/5 text-foreground/90" : "text-muted-foreground"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
