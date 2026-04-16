export interface CourseTutorProfile {
  id: number;
  name: string;
  subject: string;
  grade: string;
  rating: number;
  reviews: number;
  experience: string;
  bio: string;
  rate: string;
  image: string;
  tags: string[];
  accent: string;
  curriculum: "IB" | "IGCSE";
}
