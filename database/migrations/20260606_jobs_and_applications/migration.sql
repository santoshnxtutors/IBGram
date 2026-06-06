-- Careers and job applications
CREATE TYPE "JobStatus" AS ENUM ('draft', 'published', 'closed', 'archived');

CREATE TYPE "JobApplicationStatus" AS ENUM (
  'received',
  'reviewing',
  'shortlisted',
  'rejected',
  'hired',
  'withdrawn'
);

CREATE TABLE "Job" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "department" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "employmentType" TEXT NOT NULL,
  "level" TEXT,
  "workMode" TEXT,
  "summary" TEXT,
  "roleOverview" TEXT,
  "jobDescription" TEXT NOT NULL,
  "responsibilities" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "requirements" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "niceToHave" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "benefits" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "applicationPrompt" TEXT,
  "status" "JobStatus" NOT NULL DEFAULT 'draft',
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "publishedAt" TIMESTAMP(3),
  "closesAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "JobApplication" (
  "id" TEXT NOT NULL,
  "jobId" TEXT,
  "jobTitleSnapshot" TEXT NOT NULL,
  "status" "JobApplicationStatus" NOT NULL DEFAULT 'received',
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "currentLocation" TEXT,
  "currentRole" TEXT,
  "experienceYears" INTEGER,
  "noticePeriod" TEXT,
  "expectedCompensation" TEXT,
  "linkedInUrl" TEXT,
  "portfolioUrl" TEXT,
  "resumeUrl" TEXT,
  "resumeFilename" TEXT,
  "resumeMimeType" TEXT,
  "resumeSizeBytes" INTEGER,
  "photoUrl" TEXT,
  "photoFilename" TEXT,
  "photoMimeType" TEXT,
  "photoSizeBytes" INTEGER,
  "coverLetter" TEXT,
  "answersJson" JSONB,
  "consentAccepted" BOOLEAN NOT NULL DEFAULT false,
  "adminNotes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Job_slug_key" ON "Job"("slug");
CREATE INDEX "Job_status_idx" ON "Job"("status");
CREATE INDEX "Job_department_idx" ON "Job"("department");
CREATE INDEX "Job_publishedAt_idx" ON "Job"("publishedAt");
CREATE INDEX "Job_sortOrder_idx" ON "Job"("sortOrder");
CREATE INDEX "JobApplication_jobId_idx" ON "JobApplication"("jobId");
CREATE INDEX "JobApplication_status_idx" ON "JobApplication"("status");
CREATE INDEX "JobApplication_email_idx" ON "JobApplication"("email");
CREATE INDEX "JobApplication_createdAt_idx" ON "JobApplication"("createdAt");

ALTER TABLE "JobApplication"
  ADD CONSTRAINT "JobApplication_jobId_fkey"
  FOREIGN KEY ("jobId") REFERENCES "Job"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;
