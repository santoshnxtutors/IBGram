# Performance And Accessibility Audit

## Baseline From Prompt

- Page: `https://www.ibgram.com/` / local homepage
- Performance: 80
- Accessibility: 96
- Best Practices: 100
- SEO: 100
- FCP: 0.4s
- LCP: 0.6s
- Speed Index: 0.5s
- CLS: 0
- Total Blocking Time: 460ms
- Main-thread work: about 2.0s
- Reduce unused JavaScript: about 69 KiB
- Legacy JavaScript: about 10 KiB
- Avoid long main-thread tasks: 9 long tasks
- Avoid non-composited animations: 52 animated elements
- Known UX issue: desktop scrolling feels laggy; mobile feels acceptable.

## Stack Detected

- Next.js 16.2.2 App Router
- React 19.2.4
- Tailwind CSS 4
- Server Components by default with selected Client Components for navigation, carousels, forms, and widgets.
- Local Next docs read:
  - `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
  - `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`

## Components Inspected

- `src/app/layout.tsx`
- `src/app/(marketing)/layout.tsx`
- `src/app/(marketing)/page.tsx`
- `src/app/globals.css`
- `src/components/layout/Header.tsx`
- `src/components/layout/WhatsAppFloatingWidget.tsx`
- `src/components/providers/LenisProvider.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/TrustIndicators.tsx`
- `src/components/home/CourseExplorer.tsx`
- `src/components/home/TutorDiscovery.tsx`
- `src/components/home/AIToolsShowcase.tsx`
- `src/components/home/ReviewsSection.tsx`
- `src/components/home/SuccessStories.tsx`
- `src/components/home/FAQSection.tsx`

## Suspected Causes

- `LenisRuntime` was mounted on every marketing page and runs a `requestAnimationFrame` loop during desktop scrolling.
- `WhatsAppFloatingWidget` was mounted immediately on every public marketing page, adding client state, pathname logic, image loading, and form code during initial load.
- `CourseExplorer`, `SuccessStories`, and `FAQSection` used `framer-motion` for small entrance/accordion animations that can be implemented without the motion runtime.
- Homepage text used animated gradient classes, which likely contributed to Lighthouse non-composited animation warnings through background animation.
- Dev reload logs show first-route compilation and Turbopack cache compaction; that is mostly dev-server behavior, but reducing client component work lowers reload/hydration overhead.

## Expensive Client Components Found

- `Header`: necessary client component for menus, theme, location, and mobile nav.
- `CourseExplorer`: client component for subject tabs.
- `TutorDiscovery`: client component for comparison/profile modal; still uses `framer-motion`.
- `SuccessStories`: carousel behavior; motion removed.
- `FAQSection`: accordion behavior; motion removed.
- `WhatsAppFloatingWidget`: now deferred.
- `LenisRuntime`: removed from marketing layout.

## Changes Completed

- Removed `LenisRuntime` from `src/app/(marketing)/layout.tsx`.
- Added `MarketingDeferredWidgets` to defer the WhatsApp floating widget until idle, first scroll, first pointer interaction, first key press, or 3 seconds.
- Replaced `framer-motion` in `CourseExplorer` with plain React markup.
- Replaced `framer-motion` in `SuccessStories` with CSS transform-based carousel movement and lightweight pointer swipe detection.
- Replaced `framer-motion` in `FAQSection` with plain React accordion rendering.
- Disabled `animate-gradient` and `mesh-gradient-animate` animations while keeping the static gradient appearance.
- Replaced raw blog and tutor-card images on the homepage path with `next/image`.
- Added display fallbacks for missing `/api/media/` tutor images to prevent console 404s on the homepage.

## Local Lighthouse After Changes

Measured against `http://localhost:3055/` using `next build` and `next start`.

### Desktop

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- FCP: 0.4s
- LCP: 0.8s
- TBT: 0ms
- Main-thread work: 0.6s
- Console errors: passed
- Image format / encoding / sizing audits: passed

### Mobile

- Performance: 88
- Accessibility: 100
- Best Practices: 100
- SEO: 100
- FCP: 1.2s
- LCP: 3.9s
- TBT: 80ms
- Main-thread work: 1.8s
- Console errors: passed
- Image format / encoding / sizing audits: passed
- Remaining bottleneck: simulated mobile LCP is the hero `<h1>` text. Lighthouse attributes most of the time to render delay, not image load or blocking JavaScript.

## Accessibility Notes

- Existing accessibility score was already high at 96.
- The changes preserve buttons, labels, alt text, and crawlable links.
- No admin, backend, database, authentication, or API files were modified.
- Remaining contrast issue still needs confirmation from a fresh Lighthouse run because the prompt did not include the exact failing element.

## Manual QA Checklist

- Homepage loads with same visible layout and content.
- Desktop scroll no longer feels delayed or eased by a JavaScript scroll loop.
- WhatsApp floating button appears after idle or first interaction and opens the same enquiry form.
- Header menus and mobile nav still work.
- Course tabs still switch content.
- Success story carousel dots and swipe still work.
- FAQ items open and close.
- No console errors.
- Re-run Lighthouse mobile and desktop on production or `next start`.
