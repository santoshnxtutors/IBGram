import { Info } from "lucide-react";

export const DEFAULT_SCHOOL_DISCLAIMER =
  "IB Gram is an independent tutoring platform and is not officially affiliated with any school mentioned unless specifically stated.";

type SchoolDisclaimerProps = {
  text?: string;
  schoolName?: string;
  className?: string;
};

export function SchoolDisclaimer({ text, schoolName, className }: SchoolDisclaimerProps) {
  const body =
    text ??
    (schoolName
      ? `IB Gram is an independent tutoring platform and is not officially affiliated with ${schoolName} unless specifically stated.`
      : DEFAULT_SCHOOL_DISCLAIMER);

  return (
    <aside
      role="note"
      aria-label="Independent platform disclosure"
      className={`mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm font-medium leading-relaxed text-amber-200/90 ${className ?? ""}`}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-amber-300" aria-hidden />
      <p>{body}</p>
    </aside>
  );
}
