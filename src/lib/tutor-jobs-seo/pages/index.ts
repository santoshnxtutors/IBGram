import type { TutorJobSeoPage } from "../types";
import { ibTutorJobs } from "./ib-tutor-jobs";
import { igcseTuitionJobs } from "./igcse-tuition-jobs";
import { ibDpTutorJobs } from "./ib-dp-tutor-jobs";
import { ibIgcseHomeTuitionJobs } from "./ib-igcse-home-tuition-jobs";
import { ibIgcseOnlineTutorJobs } from "./ib-igcse-online-tutor-jobs";
import { femaleIbIgcseTutorJobs } from "./female-ib-igcse-tutor-jobs";
import { ibIgcseTutorJobsIndia } from "./ib-igcse-tutor-jobs-india";
import { ibIgcseTutorJobsUae } from "./ib-igcse-tutor-jobs-uae";
import { ibIgcseTutorJobsWorldwide } from "./ib-igcse-tutor-jobs-worldwide";
import { ibIgcseMathsTutorJobs } from "./ib-igcse-maths-tutor-jobs";

/**
 * The tutor-recruitment pages, in the order they appear in directories and sitemaps:
 * boards first, then modes, then persona, then regions, then subject.
 */
export const tutorJobSeoPages: TutorJobSeoPage[] = [
  ibTutorJobs,
  igcseTuitionJobs,
  ibDpTutorJobs,
  ibIgcseHomeTuitionJobs,
  ibIgcseOnlineTutorJobs,
  femaleIbIgcseTutorJobs,
  ibIgcseTutorJobsIndia,
  ibIgcseTutorJobsUae,
  ibIgcseTutorJobsWorldwide,
  ibIgcseMathsTutorJobs,
];
