-- Phase 2: Marketing/CMS additive migration
-- Apply with: psql $DATABASE_URL -f database/migrations/20260529_phase2_cms_marketing/migration.sql
-- Or use: npx prisma migrate dev --schema database/prisma/schema.prisma --name phase2_cms_marketing

CREATE TYPE "ContentStatus" AS ENUM ('draft', 'review', 'published', 'archived');
CREATE TYPE "TestimonialKind" AS ENUM ('review', 'success_story');

CREATE TABLE "Testimonial" (
    "id" TEXT NOT NULL,
    "kind" "TestimonialKind" NOT NULL DEFAULT 'review',
    "authorName" TEXT NOT NULL,
    "authorRole" TEXT,
    "location" TEXT,
    "rating" INTEGER,
    "quote" TEXT NOT NULL,
    "longStory" TEXT,
    "curriculum" "Curriculum",
    "imageAssetId" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'published',
    "useOnHomepage" BOOLEAN NOT NULL DEFAULT false,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Testimonial_status_idx" ON "Testimonial"("status");
CREATE INDEX "Testimonial_useOnHomepage_idx" ON "Testimonial"("useOnHomepage");
CREATE INDEX "Testimonial_featured_idx" ON "Testimonial"("featured");
CREATE INDEX "Testimonial_curriculum_idx" ON "Testimonial"("curriculum");

CREATE TABLE "SuccessStory" (
    "id" TEXT NOT NULL,
    "studentName" TEXT NOT NULL,
    "subject" TEXT,
    "focus" TEXT,
    "outcome" TEXT,
    "nextStep" TEXT,
    "longStory" TEXT,
    "imageAssetId" TEXT,
    "accentClass" TEXT,
    "status" "ContentStatus" NOT NULL DEFAULT 'published',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "SuccessStory_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "SuccessStory_status_idx" ON "SuccessStory"("status");

CREATE TABLE "BlogCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "BlogCategory_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "BlogCategory_name_key" ON "BlogCategory"("name");
CREATE UNIQUE INDEX "BlogCategory_slug_key" ON "BlogCategory"("slug");
CREATE INDEX "BlogCategory_sortOrder_idx" ON "BlogCategory"("sortOrder");

CREATE TABLE "BlogPost" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT,
    "body" TEXT NOT NULL,
    "authorName" TEXT,
    "categoryId" TEXT,
    "featuredImageId" TEXT,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "ogImageAssetId" TEXT,
    "schemaJson" JSONB,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "status" "ContentStatus" NOT NULL DEFAULT 'draft',
    "indexFlag" "IndexFlag" NOT NULL DEFAULT 'auto',
    "readingTimeMinutes" INTEGER,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "BlogPost_slug_key" ON "BlogPost"("slug");
CREATE INDEX "BlogPost_status_idx" ON "BlogPost"("status");
CREATE INDEX "BlogPost_publishedAt_idx" ON "BlogPost"("publishedAt");
CREATE INDEX "BlogPost_categoryId_idx" ON "BlogPost"("categoryId");

CREATE TABLE "FaqItem" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "category" TEXT,
    "citySlug" TEXT,
    "pageId" TEXT,
    "curriculum" "Curriculum",
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "FaqItem_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "FaqItem_status_idx" ON "FaqItem"("status");
CREATE INDEX "FaqItem_category_idx" ON "FaqItem"("category");
CREATE INDEX "FaqItem_citySlug_idx" ON "FaqItem"("citySlug");
CREATE INDEX "FaqItem_pageId_idx" ON "FaqItem"("pageId");

CREATE TABLE "NavigationMenu" (
    "id" TEXT NOT NULL,
    "menuKey" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "position" TEXT NOT NULL DEFAULT 'header',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "NavigationMenu_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "NavigationMenu_menuKey_key" ON "NavigationMenu"("menuKey");

CREATE TABLE "NavigationMenuItem" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "parentItemId" TEXT,
    "label" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "icon" TEXT,
    "isExternal" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "requiresAuth" BOOLEAN NOT NULL DEFAULT false,
    "requiredRole" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "NavigationMenuItem_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "NavigationMenuItem_menuId_idx" ON "NavigationMenuItem"("menuId");
CREATE INDEX "NavigationMenuItem_parentItemId_idx" ON "NavigationMenuItem"("parentItemId");
CREATE INDEX "NavigationMenuItem_sortOrder_idx" ON "NavigationMenuItem"("sortOrder");

CREATE TABLE "FooterBlock" (
    "id" TEXT NOT NULL,
    "blockKey" TEXT NOT NULL,
    "columnTitle" TEXT,
    "body" TEXT,
    "itemsJson" JSONB,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "status" "ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "FooterBlock_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "FooterBlock_blockKey_key" ON "FooterBlock"("blockKey");
CREATE INDEX "FooterBlock_sortOrder_idx" ON "FooterBlock"("sortOrder");

CREATE TABLE "CtaBlock" (
    "id" TEXT NOT NULL,
    "ctaKey" TEXT NOT NULL,
    "heading" TEXT,
    "description" TEXT,
    "buttonText" TEXT NOT NULL,
    "buttonUrl" TEXT NOT NULL,
    "variant" TEXT NOT NULL DEFAULT 'primary',
    "status" "ContentStatus" NOT NULL DEFAULT 'published',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "CtaBlock_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "CtaBlock_ctaKey_key" ON "CtaBlock"("ctaKey");
CREATE INDEX "CtaBlock_status_idx" ON "CtaBlock"("status");

CREATE TABLE "HomepageSection" (
    "id" TEXT NOT NULL,
    "sectionKey" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "sectionType" TEXT NOT NULL,
    "heading" TEXT,
    "subheading" TEXT,
    "body" TEXT,
    "itemsJson" JSONB,
    "mediaAssetId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "status" "ContentStatus" NOT NULL DEFAULT 'published',
    "settingsJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "HomepageSection_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "HomepageSection_sectionKey_key" ON "HomepageSection"("sectionKey");
CREATE INDEX "HomepageSection_sortOrder_idx" ON "HomepageSection"("sortOrder");
CREATE INDEX "HomepageSection_status_idx" ON "HomepageSection"("status");

-- Foreign keys
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_imageAssetId_fkey"
    FOREIGN KEY ("imageAssetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "SuccessStory" ADD CONSTRAINT "SuccessStory_imageAssetId_fkey"
    FOREIGN KEY ("imageAssetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_categoryId_fkey"
    FOREIGN KEY ("categoryId") REFERENCES "BlogCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_featuredImageId_fkey"
    FOREIGN KEY ("featuredImageId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_ogImageAssetId_fkey"
    FOREIGN KEY ("ogImageAssetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "NavigationMenuItem" ADD CONSTRAINT "NavigationMenuItem_menuId_fkey"
    FOREIGN KEY ("menuId") REFERENCES "NavigationMenu"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "NavigationMenuItem" ADD CONSTRAINT "NavigationMenuItem_parentItemId_fkey"
    FOREIGN KEY ("parentItemId") REFERENCES "NavigationMenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "HomepageSection" ADD CONSTRAINT "HomepageSection_mediaAssetId_fkey"
    FOREIGN KEY ("mediaAssetId") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;
