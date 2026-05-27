# IBGram UI Humanization Audit

## Current Sections Found

- Header and navigation with curriculum switcher, programme links, course links, tutor links, location selector, account menu and mobile drawer.
- Homepage hero with trust badge, H1, supporting copy, two CTAs, review snippet and a right-column "Why IBGram" card stack.
- Trust indicator strip with four stat cards.
- Curriculum navigator covering PYP, MYP, DP, CP and IB subject groups.
- Tutor discovery cards with profile preview, compare control and expanded modal.
- AI tools showcase with test generator and study planner cards.
- Reviews/testimonials marquee.
- Success stories carousel.
- SEO/platform information section explaining matching.
- Blog insights/resource cards.
- FAQ accordion.
- Footer with programme, platform and support links.

## What Feels AI-Generic

- Several claims sound inflated or unsupported: "world's gold standard", "Dominating", "Top 1%", "dramatically", "partner schools", "global success record" and exact grade jumps.
- AI is described as a magical engine rather than a support layer for planning, practice and matching.
- Tutor language leans toward status labels instead of practical fit: subject, level, mode, IA or exam needs, communication and availability.
- Reviews and success stories sound overly polished, repeat avatar assets and imply unverified outcomes.
- CTA wording is broad and product-like rather than parent/student specific.

## What Should Be Humanized

- Replace hype with academic advisor language grounded in IB and IGCSE family needs.
- Make tutor matching feel thoughtful: subject, level, schedule, mode, school timeline and learning need.
- Make AI tools feel practical between sessions: practice paper builder, study planner, weak-area tracker and revision checklist.
- Add safe trust language around verification, availability and independent platform status.
- Keep claims clear unless real numbers, partnerships or outcomes can be verified.

## Components To Touch

- `src/app/layout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/home/Hero.tsx`
- `src/components/home/TrustIndicators.tsx`
- `src/components/home/CourseExplorer.tsx`
- `src/components/home/TutorDiscovery.tsx`
- `src/components/home/AIToolsShowcase.tsx`
- `src/components/home/ReviewsSection.tsx`
- `src/components/home/SuccessStories.tsx`
- `src/components/home/SEOPlatformInfo.tsx`
- `src/components/home/FAQSection.tsx`
- `src/components/home/BlogInsights.tsx`

## What Will Not Be Changed

- Public route structure and dynamic route files.
- Admin, tutor profile, tutor compare, city, local, IB and IGCSE page routing.
- Core dark premium visual identity.
- Primary green and secondary amber brand accents.
- Homepage section order.
- Existing component boundaries, except for minor copy and styling cleanup inside current components.
- SEO crawlability and internal links.

## Copy Tone Rules

- Write like a real academic advisor.
- Be specific about IB and IGCSE learning needs without keyword stuffing.
- Use parent-facing wording for matching, availability and confidence.
- Use student-facing wording for practice, weak areas, revision and exam habits.
- Mention PYP, MYP, DP, Math AA, Math AI, Physics, Chemistry, Economics and English where useful.
- Keep AI supportive and practical.
- Avoid repeated headings and generic SaaS phrases.

## Visual Rules From Stitch Guidance

- Preserve the premium dark navy base with green and amber accents.
- Use an 8px spacing rhythm for section padding, card padding and content gaps.
- Improve glass-card contrast with subtle white-tinted surfaces and clearer borders.
- Use near-white content surfaces sparingly inside cards for readability, not as a new full theme.
- Keep headings readable with calmer line-height and narrower paragraph widths.
- Make CTA hierarchy obvious: primary parent action first, secondary exploration second.
- Ensure mobile stacking uses comfortable line lengths and accessible tap targets.

## Safety Rules For Claims

- Do not claim guaranteed results, exact grade jumps, official school partnerships or instant placement unless verified.
- Do not claim "top 1%", "world's best", "gold standard", "dominates" or similar unsupported superiority.
- Use caveats for availability: subject, level, schedule, city and preferred tutoring mode all matter.
- Where school names appear elsewhere in the site, keep independent-platform language visible.
- Testimonials should avoid exact outcomes unless real proof is available.
