CREATE TABLE IF NOT EXISTS "ibgram_app"."Conversation" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "permanent" BOOLEAN NOT NULL DEFAULT false,
    "lastMessageAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "ibgram_app"."Message" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "Conversation_studentId_tutorId_key" ON "ibgram_app"."Conversation"("studentId", "tutorId");
CREATE INDEX IF NOT EXISTS "Conversation_studentId_idx"     ON "ibgram_app"."Conversation"("studentId");
CREATE INDEX IF NOT EXISTS "Conversation_tutorId_idx"       ON "ibgram_app"."Conversation"("tutorId");
CREATE INDEX IF NOT EXISTS "Conversation_lastMessageAt_idx" ON "ibgram_app"."Conversation"("lastMessageAt");
CREATE INDEX IF NOT EXISTS "Message_conversationId_createdAt_idx" ON "ibgram_app"."Message"("conversationId", "createdAt");
CREATE INDEX IF NOT EXISTS "Message_senderId_idx"           ON "ibgram_app"."Message"("senderId");

ALTER TABLE "ibgram_app"."Conversation" DROP CONSTRAINT IF EXISTS "Conversation_studentId_fkey";
ALTER TABLE "ibgram_app"."Conversation" ADD CONSTRAINT "Conversation_studentId_fkey"
  FOREIGN KEY ("studentId") REFERENCES "ibgram_app"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ibgram_app"."Conversation" DROP CONSTRAINT IF EXISTS "Conversation_tutorId_fkey";
ALTER TABLE "ibgram_app"."Conversation" ADD CONSTRAINT "Conversation_tutorId_fkey"
  FOREIGN KEY ("tutorId") REFERENCES "ibgram_app"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ibgram_app"."Message" DROP CONSTRAINT IF EXISTS "Message_conversationId_fkey";
ALTER TABLE "ibgram_app"."Message" ADD CONSTRAINT "Message_conversationId_fkey"
  FOREIGN KEY ("conversationId") REFERENCES "ibgram_app"."Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ibgram_app"."Message" DROP CONSTRAINT IF EXISTS "Message_senderId_fkey";
ALTER TABLE "ibgram_app"."Message" ADD CONSTRAINT "Message_senderId_fkey"
  FOREIGN KEY ("senderId") REFERENCES "ibgram_app"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Rich messages: media attachments, voice notes and Meet cards. Additive only.
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "kind"           TEXT NOT NULL DEFAULT 'text';
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "attachmentUrl"  TEXT;
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "attachmentName" TEXT;
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "attachmentMime" TEXT;
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "attachmentSize" INTEGER;
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "meta"           JSONB;
ALTER TABLE "ibgram_app"."Message" ALTER COLUMN "body" SET DEFAULT '';

-- Reply quoting and unsend. Additive only.
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "replyToId" TEXT;
ALTER TABLE "ibgram_app"."Message" ADD COLUMN IF NOT EXISTS "deletedAt" TIMESTAMP(3);
ALTER TABLE "ibgram_app"."Message" DROP CONSTRAINT IF EXISTS "Message_replyToId_fkey";
ALTER TABLE "ibgram_app"."Message" ADD CONSTRAINT "Message_replyToId_fkey"
  FOREIGN KEY ("replyToId") REFERENCES "ibgram_app"."Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
