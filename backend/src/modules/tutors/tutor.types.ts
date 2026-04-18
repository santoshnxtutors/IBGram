import type { RecordStatus } from "@prisma/client";

export type TutorPayload = {
  slug: string;
  name: string;
  subject: string;
  grade: string;
  rating: number;
  reviews: number;
  experience: string;
  bio: string;
  rate: string;
  image?: string;
  tags: string[];
  accent: string;
  education: string;
  successRate: string;
  availability: string;
  responseTime: string;
  methodology: string;
  curriculum: string;
  headline?: string;
  isFeatured: boolean;
  status: RecordStatus;
};
