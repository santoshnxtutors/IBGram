import type { Curriculum, IbProgramme } from "../constants/curriculums";

export type TutorStatus = "draft" | "active" | "paused" | "archived";

export type TutorLocationMode = {
  homeTutoringAvailable: boolean;
  onlineTutoringAvailable: boolean;
  hybridTutoringAvailable: boolean;
};

export type TutorSummary = {
  id: string;
  slug: string;
  displayName: string;
  status: TutorStatus;
  curriculums: Curriculum[];
  programmes: IbProgramme[];
  subjects: string[];
  primaryCity?: string | null;
  rating?: number | null;
  verified: boolean;
};
