# GEO / AI SEO Adjustment Analysis

Date: 2026-05-26

## Executive Verdict

The proposal is directionally right, but several P0 claims are outdated against the current codebase.

TG Apps already has a better-than-average GEO / AI SEO foundation: route manifest, generated sitemap, bilingual routes, trust pages, `llms.txt`, canonical / hreflang handling, D-U-N-S, CNPJ, company profile, due diligence page, and AI profile. Public client/case exposure is intentionally paused for now.

The real bottleneck is not missing route architecture. It is that the strongest page content still lives mostly in React-rendered content and in `llms.txt`, while the generated HTML fallback is shallow. This limits what simple crawlers, non-JS parsers, AI extraction tools, and some audit tools can read directly from the initial HTML.

Recommended priority:

1. P0 - Generate richer static HTML per commercial route from existing landing content.
2. P0 - Add validation so sitemap, robots, static routes, canonical URLs, and generated HTML cannot drift.
3. P1 - Expand the three highest-intent pages: app rescue, CRM/internal tools, AI integrations.
4. P1 - Add anonymous proof blocks only after the commercial pages are stronger.
5. P1 - Add route-specific structured data where it matches visible content.
6. P2 - Split `llms.txt` only after HTML pages carry the same facts.
7. P2 - Standardize external entity profiles and repository metadata.

## Official Search Context

Google's current guidance supports the strategic direction, but not the idea that `llms.txt` or special AI markup is required.

- Google says SEO fundamentals remain relevant for AI Overviews and AI Mode, and there are no additional technical requirements beyond being indexed and eligible for snippets.
- Google explicitly says special machine-readable AI files, AI text files, Markdown files, and special schema are not required for generative AI search.
- Google recommends crawlable content, internal links, textual content, visible structured data alignment, and strong page experience.
- Google says sitemaps should contain preferred canonical URLs and should be generated automatically for larger sites.
- Google warns that `robots.txt` should not be used as a way to hide web pages from Search results; use `noindex` or protection when the goal is removal from results.

Sources:

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/robots/intro
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

## Current Project Facts

Relevant local files:

- `src/content/publicRoutes.json`: route manifest for public canonical routes, aliases, SEO metadata, robots, static HTML generation, and sitemap settings.
- `scripts/generate-route-html.mjs`: generates static HTML files and `dist/sitemap.xml`.
- `src/content/landingPages.ts`: real commercial page content rendered by React.
- `src/components/KeywordLandingPage.tsx`: renders the landing page sections and `FAQPage` JSON-LD when a route has FAQ content.
- `index.html`: global `ProfessionalService` JSON-LD.
- `public/robots.txt`: crawl directives and sitemap reference.
- `public/llms.txt`: AI-readable company profile.
- Public case/client exposure is intentionally paused until each example is cleared for public use.

Current generated sitemap state:

- `dist/sitemap.xml` is generated from `publicRoutes.json`.
- It contains 38 localized URLs.
- It includes commercial routes such as app rescue, CRM/internal tools, backend/API, AI integrations, Dev as a Service, company profile, due diligence, AI profile, apps, and AnyLanguage.
- It does not include homepage anchors.
- It does not include the disallowed privacy/account deletion legal routes.

Current robots state:

- `public/robots.txt` allows the public site.
- It disallows app privacy/account deletion routes and source maps.
- It references `https://tgapps.dev/sitemap.xml`.
- It includes comments pointing to AI profile, `llms.txt`, company profile, due diligence, and First Milestone Guarantee.

Current HTML-static state:

- The generated route HTML only injects a compact `noscript` fallback with H1, meta description, generic intro, CTA, service links, and trust links.
- The full commercial content from `landingPages.ts` is rendered by React, not by the generated HTML fallback.
- This is acceptable for Google when JavaScript is processed, but weaker for simple crawlers, AI tools, text extractors, and audit tools.

## Proposal-by-Proposal Analysis

### 1. Sitemap incomplete / misaligned

Assessment: Mostly outdated for the current local build.

The proposal says the sitemap is incomplete and lists only home, anchors, PT-BR, and legal pages. That does not match the current generated `dist/sitemap.xml`.

What is true:

- A stale manually versioned sitemap would be a risk if it exists in production or in a different branch.
- Sitemap generation should remain tied to the route manifest.
- Validation should fail the build if an indexable route is missing from the generated sitemap.

What is not true in the current local build:

- Commercial pages are not missing from the generated sitemap.
- Anchors are not being included as sitemap URLs.
- Blocked legal pages are not being included in the generated sitemap.

Recommendation:

- Keep sitemap generation in `scripts/generate-route-html.mjs` or split it into `scripts/generate-sitemap.mjs`.
- Add a validation script that compares `publicRoutes.json` against `dist/sitemap.xml`.
- Add checks for: canonical route included, localized route included, aliases excluded, anchors excluded, and no `robots: noindex` / disallowed routes included.

Priority: P0 for validation, not for rebuilding the sitemap from scratch.

### 2. Conflict between sitemap and robots

Assessment: Not present in the current generated sitemap, but the robots strategy deserves a decision.

The current generated sitemap does not include the privacy/account deletion URLs that are disallowed in `robots.txt`.

The remaining question is strategic: those legal/app compliance pages currently have `noindex,follow` in React SEO config, but are also blocked by `robots.txt`. Since disallowed pages may not be crawled, Google may not see the `noindex` meta.

Options:

- If we do not care whether those app compliance URLs appear as bare URLs in search, keep the current `Disallow`.
- If we want Google to definitively process `noindex`, remove those disallow rules and rely on `noindex,follow`.
- If the pages should be private, use authentication or remove them. That is not the case here because app stores need public URLs.

Recommendation:

- For app compliance pages, prefer `noindex,follow` without `Disallow` if search-result cleanliness matters.
- Keep them out of sitemap either way.

Priority: P2 unless Search Console shows these URLs appearing in results.

### 3. Static HTML is shallow

Assessment: Correct and important.

This is the strongest technical point in the proposal.

Current `generate-route-html.mjs` creates useful metadata, canonical links, hreflang links, a global schema block, and a small `noscript` fallback. It does not render the actual landing page sections from `landingPages.ts` into the HTML file.

Impact:

- Google can process JavaScript, but JavaScript sites are more complex for SEO.
- Simple crawlers and AI text extractors may see thin repeated pages.
- The source HTML does not expose the rich route-specific content that already exists in the React app.
- The static fallback repeats similar service/trust link blocks across routes, which can look generic.

Recommendation:

- Short-term: expand `generate-route-html.mjs` to render route-specific static content from the same content source used by React.
- Better implementation: move landing page content into a JSON/TS module that can be used by both React and the static generator without duplication.
- Best long-term: migrate public marketing pages to a real SSG layer such as Astro or Next static export.

Minimum static HTML per commercial page:

- H1 and route-specific summary.
- Who this is for.
- Problems solved.
- What TG Apps delivers.
- Example first milestone.
- Process.
- Stack / integration surfaces where relevant.
- Pricing fit or plan fit.
- FAQ if available.
- CTA.

Priority: P0.

### 4. `llms.txt` carries too much weight

Assessment: Correct, with nuance.

`llms.txt` is strong and useful as a low-cost AI-readable profile. However, Google says machine-readable AI files are not required and are not special requirements for generative AI search. The important content should also exist in crawlable HTML pages.

Current issue:

- `llms.txt` has valuable positioning that should also exist in public HTML pages.
- Named examples should not carry the proof layer unless they are explicitly cleared for public use.

Recommendation:

- Keep `/llms.txt`.
- Do not spend more time optimizing it before improving HTML pages.
- Consider `/llms-full.txt` only after the public HTML routes carry the same facts.
- If splitting later, keep `/llms.txt` concise and canonical, and move long background/context to `/llms-full.txt`.

Priority: P2.

### 5. Public case studies

Assessment: strategically useful, but currently paused.

The original proposal recommended turning prior work into public case-study pages. That can help GEO/SEO, but it also exposes client names, locations, operational details, and project context. The current decision is to remove public case exposure for now and only use anonymous proof patterns until each example is approved for public use.

Why this matters:

- LLMs and buyers need contextual proof: problem, constraint, what was built, stack, first milestone, result, and related service.
- Case pages create internal links between proof and service pages.
- Cases provide first-hand, non-commodity content, which aligns with Google's guidance to create unique, useful content.

Recommended public-safe direction:

- Do not publish named case-study routes yet.
- Do not link client logos or a selected-work section on the homepage yet.
- Use anonymous proof language by category, such as operations platform, app rescue, health document workflow, AI assistant, or internal dashboard.
- Reintroduce named examples only after permission, review of sensitive details, and a clear public-safe description.

Minimum case template:

- Context.
- Problem.
- Constraints.
- What TG Apps built.
- Stack / surfaces.
- First milestone.
- Result or current status.
- What changed for the client.
- Related services.
- CTA.

Priority: P1.

### 6. Service pages need more specificity

Assessment: Correct, but implementation should reuse the existing landing page model.

The current service pages already have route-specific copy, proof items, deliverables, fit items, sections, pricing where relevant, and FAQ for some pages. They are not empty. However, the three highest-intent pages should be deeper and more concrete.

Highest-priority pages:

- `/app-rescue-and-launch-acceleration/`
- `/custom-crm-and-internal-tools/`
- `/ai-integrations-for-crm-and-internal-tools/`

App Rescue should emphasize:

- Existing codebase audit.
- Broken build recovery.
- Dependency updates.
- API reconnection.
- App Store / Play Store publishing.
- Crash fixing.
- Handoff documentation.
- Rescue vs rebuild decision.

CRM/Internal Tools should emphasize:

- Spreadsheets everywhere.
- WhatsApp-based operations.
- No central customer history.
- Manual scheduling/reporting.
- Admin dashboards.
- Role-based access.
- Customer/employee portals.
- Integrations with payments, email, WhatsApp, Google Sheets, APIs.

AI Integrations should emphasize concrete workflows:

- CRM summarization.
- Customer support triage.
- Document search / RAG.
- Lead qualification.
- Message classification.
- Business report generation.
- Human review / approval step.
- Fallback behavior when confidence is low.

Recommendation:

- Expand these routes first, but avoid generic 1,500-word filler.
- Add route-specific FAQ to all three.
- Make the static HTML generator output those details.

Priority: P1, after P0 static HTML generation.

### 7. Schema should be per page

Assessment: Correct, with guardrails.

Current state:

- Global `ProfessionalService` JSON-LD exists in `index.html`.
- `KeywordLandingPage.tsx` outputs `FAQPage` JSON-LD when `content.faq` exists.
- There is no route-specific `Service`, `WebPage`, or `BreadcrumbList` JSON-LD generated for each public route.
- App pages could use `SoftwareApplication` where visible app content supports it.

Recommendation:

- Add route-specific structured data only where it matches visible content.
- Start with `WebPage`, `BreadcrumbList`, and `Service` for service pages.
- Add `FAQPage` only where the FAQ is visibly rendered.
- Add `SoftwareApplication` for app detail pages like AnyLanguage.
- Keep global `ProfessionalService` as site-level entity.

Priority: P1.

### 8. External entity consistency

Assessment: Correct.

There is some internal variation between `Tg Apps` and `TG Apps`. Legal entity is correctly uppercase as `TG APPLICATIONS DESENVOLVIMENTO LTDA`.

Recommended public convention:

- Brand display: `TG Apps` for external profiles, repository descriptions, app store profiles, LinkedIn, GitHub, and schema name if we decide to standardize.
- Legal name: `TG APPLICATIONS DESENVOLVIMENTO LTDA`.
- Website: `https://tgapps.dev`.
- Support: `support@tgapps.dev`.
- Founder: `Thiago Carvalho`.

Important nuance:

- The site currently uses `Tg Apps` widely. Changing all user-facing brand text to `TG Apps` is a branding decision, not just SEO.
- We should avoid noisy churn unless the public brand is intentionally changing.

Recommendation:

- First standardize external profiles and schema aliases.
- Add `alternateName` in schema if useful.
- Then decide whether site copy should move from `Tg Apps` to `TG Apps`.

Priority: P2.

### 9. GitHub repo About / topics

Assessment: Likely useful, but outside this codebase.

The proposal says the public GitHub repo appears without strong About metadata. That cannot be fully verified or changed from this local workspace without using GitHub tools or the browser.

Recommendation:

- Add repo description: `TG Apps builds and ships apps, CRM systems, internal tools, backend APIs, and AI integrations for founders, startups, and SMBs.`
- Add website: `https://tgapps.dev`.
- Add topics: `tgapps`, `custom-software`, `mobile-app-development`, `flutter`, `react-native`, `crm`, `ai-integrations`, `app-rescue`, `nearshore-development`.

Priority: P2.

### 10. Comparative / opinionated content

Assessment: Good idea, but should not precede stronger service pages and cases.

Comparison articles can attract high-intent informational queries and provide unique point of view. They should be written from real delivery experience, not generic SEO content.

Recommended article order:

- `/app-rescue-vs-rebuild/`
- `/how-to-finish-a-stalled-mobile-app/`
- `/custom-crm-vs-hubspot-for-small-business/`
- `/flutter-vs-react-native-for-startups/`
- `/nearshore-app-development-brazil-for-us-startups/`

Priority: P2/P3 after service pages and cases.

## Revised Execution Plan

### Phase 1 - Technical Extraction Foundation

Goal: make existing content easier for crawlers and AI tools to extract without depending on React execution.

Tasks:

- Expand static route generation to include route-specific sections from landing content.
- Add build validation for sitemap route coverage.
- Add build validation that each static route contains more than just H1/description/link lists.
- Add build validation that all `sitemap.include === true` routes are `index,follow`.
- Add build validation that aliases are generated as HTML but excluded from sitemap.

Expected result:

- The current route architecture becomes much more useful to crawlers without a framework migration.

Priority: P0.

### Phase 2 - Highest-Intent Page Expansion

Goal: turn the best commercial pages into specific, citeable sources.

Pages:

- App Rescue.
- Custom CRM and Internal Tools.
- AI Integrations.

Tasks:

- Add deeper sections to each route.
- Add FAQ to each route.
- Add concrete first milestone examples.
- Add process / handoff / stack details where relevant.
- Make sure static HTML includes all of it.

Priority: P1.

### Phase 3 - Anonymous Proof Layer

Goal: add proof without exposing client names or sensitive project details.

Recommended examples:

- Operations platform for a service business.
- App rescue and launch support for an unfinished consumer app.
- AI-assisted document workflow for a regulated domain.
- Multilingual AI product experience.

Tasks:

- Add anonymous proof blocks only after the commercial pages are stronger.
- Keep them generic enough to avoid exposing client identity.
- Link proof blocks to relevant service pages, not to named case-study routes.
- Add named case-study routes later only when public permission is clear.

Priority: P1.

### Phase 4 - Route-Specific Structured Data

Goal: help search engines understand each route without overdoing schema.

Tasks:

- Generate `WebPage` JSON-LD per route.
- Generate `BreadcrumbList` JSON-LD per route.
- Generate `Service` JSON-LD for service pages.
- Keep `FAQPage` only for visible FAQ.
- Generate `SoftwareApplication` JSON-LD for app pages.
- Validate with Rich Results Test / schema validators.

Priority: P1.

### Phase 5 - External Entity Cleanup

Goal: make TG Apps easier to resolve as one entity across the web.

Tasks:

- Standardize GitHub profile, repo About, LinkedIn, app stores, support pages.
- Add consistent brand/legal/founder/contact facts.
- Add official store/profile links to site and schema `sameAs` where applicable.
- Decide whether the public brand is `Tg Apps` or `TG Apps`.

Priority: P2.

### Phase 6 - `llms.txt` Split

Goal: keep LLM files useful without treating them as the primary strategy.

Tasks:

- Keep `/llms.txt` concise.
- Add `/llms-full.txt` only if needed.
- Ensure all important facts in LLM files also exist in public HTML pages.

Priority: P2.

## What I Would Not Do First

I would not start by migrating to Astro or Next immediately.

Reason:

- The current project already has a route manifest and static generation script.
- The fastest gain is improving the generator and content model.
- A migration is justified only if the generator becomes too complex or if the site needs editorial scale.

I would not create dozens of generic SEO pages.

Reason:

- Google specifically warns against creating many pages just to capture search variations.
- TG Apps will benefit more from fewer, stronger, experience-backed pages.

I would not spend more time polishing `llms.txt` before improving public HTML.

Reason:

- Google does not treat `llms.txt` as a special requirement for AI features.
- The same facts need to exist in visible, crawlable HTML.

## Final Priority Table

| Proposal | Status | Recommended Priority | Action |
| --- | --- | --- | --- |
| Fix sitemap | Mostly already solved | P0 validation | Add route/sitemap drift checks |
| Fix sitemap/robots conflict | Not present in generated sitemap | P2 | Decide legal-page crawl strategy |
| Rich static HTML | Correct and important | P0 | Render route-specific content in generated HTML |
| Split `llms.txt` | Useful later | P2 | Do after HTML pages are stronger |
| Case studies | Correct | P1 | Create standalone case routes |
| Expand service pages | Correct | P1 | Start with App Rescue, CRM, AI |
| Per-page schema | Correct | P1 | Add WebPage/Breadcrumb/Service/SoftwareApplication |
| External entity cleanup | Correct | P2 | Standardize profiles and repo metadata |
| Comparative articles | Useful later | P2/P3 | Publish after cases and core pages |
| Migrate to SSG | Maybe later | P3 | Reconsider after generator improvements |

## Recommended Next Implementation Ticket

Title: Generate rich static HTML for landing routes

Scope:

- Refactor the content model so `scripts/generate-route-html.mjs` can access route-specific landing content.
- For each `landing` route, output H1, intro, hero highlights, proof items, deliverables, fit items, sections, pricing highlights, FAQ, final note, and CTA into the generated HTML.
- Keep the React UI unchanged.
- Keep sitemap generation from `publicRoutes.json`.
- Add validation that static HTML for priority routes includes route-specific sections.

Definition of done:

- `curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/` shows substantial route-specific text in raw HTML.
- `curl -L https://tgapps.dev/custom-crm-and-internal-tools/` shows substantial route-specific text in raw HTML.
- `curl -L https://tgapps.dev/ai-integrations-for-crm-and-internal-tools/` shows substantial route-specific text in raw HTML.
- Sitemap still contains all canonical commercial routes and no aliases/anchors.
- Build and typecheck pass.
