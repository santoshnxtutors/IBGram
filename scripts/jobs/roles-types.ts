export type Mode = "home" | "hybrid" | "online";

/** One vacancy. See roles-gurgaon.ts / roles-india.ts for the rows. */
export type RoleRow = {
  slug: string;
  title: string;
  /** Shown in the "level" chip, e.g. "IB DP Mathematics AA (HL and SL)". */
  level: string;
  mode: Mode;
  /** The place as a reader would say it: "Golf Course Road, Gurgaon" or "India". */
  where: string;
  /** Home and hybrid only: the exact travel zone we promise not to send you outside of. */
  areas?: string;
  summary: string;
  overview: string;
  /** Role-specific paragraphs. The generator appends the mode and payout paragraphs. */
  notes: string[];
  /** Role-specific subject bar, added to the common ID and reference checks. */
  skills: string[];
  /** Role-specific duties, added to the mode duties. */
  duties: string[];
  nice: string[];
};
