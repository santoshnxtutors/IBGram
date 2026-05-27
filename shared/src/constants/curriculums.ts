export const CURRICULUMS = ["IB", "IGCSE", "BOTH"] as const;

export type Curriculum = (typeof CURRICULUMS)[number];

export const IB_PROGRAMMES = ["PYP", "MYP", "DP"] as const;

export type IbProgramme = (typeof IB_PROGRAMMES)[number];
