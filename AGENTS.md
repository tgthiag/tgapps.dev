# TG Apps – Delivery Site Agent Brief

## 0. Strategic Identity Snapshot
- **Who TG Apps is:** TG Apps is the public brand of TG Applications Desenvolvimento Ltda, a founder-led and team-delivered software studio. The company builds practical custom software for founders, startups, SMBs, agencies, and teams that need real systems delivered with direct communication and disciplined execution.
- **Where TG Apps is positioned now:** The site is being repositioned away from vague "small business app development" and away from "pods" language. The stronger positioning is custom software, CRM, internal tools, app rescue, born-global apps, AI integrations, and on-demand development team capacity.
- **Primary market reality:** English copy should be US-first and buyer-oriented. Portuguese copy should sound natural in Brazil and avoid imported acronyms such as "SMB" in visible PT-BR text.
- **Operating model:** Founder-led does not mean solo. It means direct leadership, product context, accountability, compact core team execution, and scope-based collaborators when a project requires more throughput or specialized expertise.
- **Commercial model:** The current offer can mention USD 2,000/month or $2k/mo when relevant, but it must be framed as an efficient on-demand development team model, not cheap labor and not a vague retainer. Clients who hire TG Apps at the current USD 2,000/month rate keep it fixed while the engagement remains active.
- **Core differentiator:** Output efficiency. TG Apps helps clients get more software delivery per dollar through a compact team model, low bureaucracy, intelligent allocation, direct communication, and disciplined delivery controls.
- **Delivery model:** TG Apps follows the agreed client plan strictly, flags risks and tradeoffs, and shares implementation insights when useful. Speed is a strength, but "fast delivery" is not the main product category; the product is reliable custom software execution.
- **Best public narrative:** "We build the software your operation actually needs: apps, CRM, internal tools, backend, dashboards, automations, AI integrations, and release support, with a compact team, clear scope, weekly demos, and clean handoff."
- **What TG Apps is not:** Not a Telegram client, not a Telegram mod, not an APK distribution site, not an unofficial Telegram service, not only an indie app lab, not only a disposable MVP shop, and not trying to look like a large enterprise consultancy.

## 0.1 Mission, Vision & Values Draft
- **Mission draft:** Help founders, startups, and growing businesses turn operational problems, unfinished apps, and product ideas into useful software that can be launched, used, measured, and evolved.
- **Mission alternative:** Build practical software that replaces fragile spreadsheets, disconnected tools, and stalled codebases with systems that teams can actually operate and own.
- **Vision draft:** Become a trusted LatAm software delivery partner for US and international teams that want direct access, efficient execution, multilingual product thinking, and clean handoff without unnecessary agency overhead.
- **Vision alternative:** Be the compact software team companies call when they need serious execution before hiring a full internal product department.
- **Core value: Execution with ownership.** Build toward working software, releases, documentation, and handoff, not just screens or promises.
- **Core value: Clarity before scale.** Define scope, acceptance criteria, risks, milestones, and responsibilities before adding complexity or headcount.
- **Core value: Direct communication.** Reduce layers between client, product decisions, architecture, and implementation.
- **Core value: Practical quality.** Favor robust, maintainable decisions that match the current project risk instead of overengineering or rushing blindly.
- **Core value: Client-led plan, useful insight.** Follow the agreed plan while sharing delivery experience when it can reduce risk or improve the outcome.
- **Core value: Global from the start when needed.** For born-global apps, treat language, localization, culture, onboarding, app store copy, and international release learning as product concerns, not translation afterthoughts.
- **Core value: No false authority.** Do not exaggerate size, maturity, client list, or capabilities. Earn trust through facts, process, delivery controls, and clear fit/not-a-fit language.

## 1. Purpose & Outcomes
- **Primary goal:** Convert startups and SMB teams into qualified leads for custom software, internal tools, CRM systems, dashboards, mobile apps, AI integrations, app rescue, born-global apps, and on-demand development team capacity that works contract-first with zero upfront payment.
- **Secondary goals:** Highlight dependability (D‑U‑N‑S® 651029828, contract + NDA before kickoff), show lean process (intake → build → support), and reassure buyers about strict plan execution, integrations (payments, logistics, CRM, LLM), useful technical insight, and ongoing support.
- **Tone:** Mature, founder-led, low bureaucracy, disciplined execution. The product is custom software delivery: apps, CRM, internal tools, dashboards, APIs, automations, and integrations. Tight timelines are handled when the client's request and agreed plan require them, but the timeline itself is not the default headline category. Always state that TG Apps follows the agreed client plan strictly and offers implementation insights when experience can help.
- **Team positioning:** “Founder-led” means direct leadership, accountability, and product context. It must not read as solo execution. Mention compact core team, intelligent collaborator allocation, and scope-based specialists when the copy discusses who builds or delivery capacity.

## 1.1 Future Creative Notes
- **Core ad message to preserve:** “Full development team for $2k/month, using an efficient model to reduce costs while maintaining quality. https://www.tgapps.dev”
- **Internal tools creative:** “Build custom internal tools for your business. Replace spreadsheets with real systems. Clear plan, weekly demos, practical execution.”
- **App rescue / launch creative:** TG Apps is a strong fit for individual founders and startups with unfinished apps, rough prototypes, outdated apps, or app drafts that need to be updated, completed, deployed, and published according to a clear plan.
- **Born-global apps creative:** TG Apps has experience building international apps that support multiple languages, contextual translation, localized flows, and cultural adaptation. Use this for founders and startups that need an app to be global from day one rather than translated later.
- **Execution creative:** “Build the software your business needs. We follow the agreed plan, flag risks, and share delivery insights when useful.”
- **Short creative hooks:** “Dev Team Subscription $2k/mo”, “Dev Team Subscription”, and “On-demand development team”.
- This section overrides older “pod” language if any legacy note conflicts with current positioning.
- Use this concept for future ad creatives, social posts, and landing-page experiments when the goal is to make the offer immediately understandable.
- The commercial angle is not “cheap developers” or “we only deliver fast”; it is an efficient, compact full development team model that reduces overhead while maintaining quality, communication, strict plan execution, and delivery accountability.
- When explaining the cost advantage, prefer: “more software delivery per dollar,” “output efficiency,” “cost-efficient delivery model,” and “low overhead through intelligent allocation.” Avoid “cheap” or “low-cost developers.”
- Prefer “development team”, “dev team subscription”, “custom software team”, “dedicated development team”, or “on-demand development team” over “pod/pods” in customer-facing copy.
- In Portuguese, prefer **“time de desenvolvimento sob demanda”** or **“time sob demanda”** over **“desenvolvimento por assinatura”** as visible headline copy. Keep “assinatura” only where useful for SEO, aliases, or explanatory context.
- When mentioning price, use **USD 2,000/month** or **$2k/mo** and clarify when needed that clients who enter at the current rate keep it fixed while the engagement remains active.

## 2. Page & Section Structure
The React single-page app renders these sections in order (see `src/App.tsx`):

| Section | Component | Key Purpose |
| --- | --- | --- |
| Sticky Header | `Header.tsx` | Navigation (Overview, Capabilities, Process, Proof, Contact), language toggle (EN/PT), CTA scroll to contact. |
| Hero | `Hero.tsx` | Snapshot of offer (custom software, internal tools, apps, dev team subscription, zero upfront), trust stats, dual CTAs (schedule call / see plan), lifestyle image showing collaboration. |
| Capabilities | `Services.tsx` | Two-column intro (pillars + photo), service cards (Internal tools/business systems, Mobile/customer apps, App rescue/release execution, Integrations/AI/data), pillars list, three-step collaboration loop, CTA banner. |
| Proof/About | `About.tsx` | Story of operations, mission, response/deploy cadence, D‑U‑N‑S proof badge, values cards, lifestyle photo. |
| Contact | `Contact.tsx` | Cost transparency card, contact info (support@tgapps.dev, +55 11 97971‑7703, São Paulo), reasons to hire, callout about next steps, form that opens mailto draft. |
| Footer | `Footer.tsx` | Recap of services, navigation, contact info, CTA button, legal links. |

Each section is hooked to IDs (`inicio`, `what-you-get`, `process`, `sobre`, `contato`) for smooth scroll and SEO anchors.

## 3. Content Guidance Per Section
- **Hero**
  - Badge should center custom software for startups and SMBs, not pods.
  - Title/subtitle stress internal tools, CRM, mobile apps, business systems, dev team subscription, contract-first billing, and no upfront.
  - Stats array (from translations) must mention D‑U‑N‑S number, kickoff cadence, deploy/support coverage.
  - Photo card tagline: “Latest build – US-based deliveries · zero upfront”.
  - CTAs: `primary` scrolls to contact; `secondary` scrolls to process loop.

- **Services (“Custom software capabilities”)**
  - Intro paragraph: partnering with startups, SMB operators, agencies, and IT leaders needing an in-house-feel software team.
  - Pillars bullets (contract first, daily updates + Loom demos, store releases handled via the client’s channel of choice).
  - Cards derived from translations:
    1. **Internal tools and business systems** – CRM, dashboards, scheduling, lead operations, portals, and admin systems.
    2. **App rescue and release execution** – finish, deploy, validate when applicable, and iterate unfinished apps, rough prototypes, outdated apps, or stalled codebases according to the agreed plan.
    3. **Integrations and data layers** – payments/logistics/CRM + LLM workflows plugged into whichever vector/search/knowledge stack the client already trusts; includes REST/GraphQL surfaces and observability.
  - Process loop (“Loop 01/02/03”): Intake & briefing (48h), Build & release (client-led priorities, weekly demos/deploys, staged rollouts), Support & handoff (runbooks, 24h triage, month-to-month exit).
  - Closing CTA banner: prefer “Need software built around your operation?” or “Need an on-demand development team?”.

- **About (“Proof and operating model”)**
  - Timeline paragraphs: founder access, adoption of whatever tools the client already uses (Teams, Jira, Linear, Notion, etc.), release ops packaged with engineering.
  - Mission card: protect roadmap via signed agreement + D‑U‑N‑S + zero upfront.
  - Stats list (≤2h response, 5 days to first branch/deliverable, weekly demo).
  - Passion badge text: “D‑U‑N‑S® 651029828”.
  - Values cards: D‑U‑N‑S validation, contract-first billing, US timezone coverage.

- **Contact**
  - Cost section: “Dev Team Subscription · $2k/mo” or “Current monthly rate · cancel any month” (current USD 2,000/mo offer, W8‑BEN‑E on file, SOC/NDA templates ready, no upfront, no hidden clauses). Do not call the USD 2,000/mo offer introductory. The correct promise is that clients who hire TG Apps at this rate keep it fixed while the engagement stays active.
  - Info entries: Email `support@tgapps.dev`, WhatsApp/Phone `+55 11 97971‑7703`, location “São Paulo, Brazil · US overlap ET/CT”.
  - “Why us” bullets: zero upfront, D‑U‑N‑S trust, Android/iOS expertise, LLM integrations with guardrails, weekly release cadence powered by a compact Kanban development team (backend, frontend, database, mobile in parallel), client-led backlog with weekly demos and deployments.
  - Form callout: Outline response timeframe (≤1 business day), 30–45 min call, send SOW/checklist.
  - Form fields: Full name, Work email, Phone/WhatsApp, Service dropdown, Notes. Submit button composes email to contact address.

- **Footer**
  - Description: reiterate founder-led Brazilian studio for US SMBs, zero upfront, weekly releases.
  - Quick links reference same IDs.
  - “Popular requests”: custom CRM/internal tools, mobile builds, dev team subscription, LLM/AI integrations, dashboards, release coverage.
  - The footer may link to the visible trust/commercial pages: Why TG Apps, Dev as a Service / Time sob demanda, Company profile, Due diligence, and Founder LinkedIn.
  - Do not show the AI profile as a normal footer/menu navigation item. It is public and indexable, but intended mainly for crawlers, LLMs, due diligence, and direct reference.
  - Contact snippet uses `support@tgapps.dev`, phone, São Paulo location.

## 4. Company Facts & Assets
- **Legal entity:** TG Applications Desenvolvimento Ltda (Brazil).
- **D‑U‑N‑S® Number:** 651029828 (issued 28 Jan 2026) — source `C:\Users\Kabum\Downloads\Número D‑U‑N‑S®.html`.
- **Billing:** No payment upfront; contracts + invoices via TG Applications. USD or BRL, W8‑BEN‑E ready.
- **Core services:** Custom software, CRM/internal tools, app rescue and release execution for unfinished or outdated apps, born-global app development with multilingual UX/contextual translation/cultural adaptation, Android/iOS builds (Kotlin, Swift, Flutter, React Native), on-demand development team subscription (parallel execution, release ops), integrations/data (payments, logistics, CRM, analytics, LLM workflows integrated with the client’s preferred vector/search/knowledge stack), dashboards/admin tooling, support/handovers.
- **Process promises:** Kickoff call ≤1 business day after contact; coding starts ≤5 business days post-signature; deploy cadence ≈ once per week; Kanban workflow keeps backend, frontend, database, and mobile workstreams moving in parallel; blue/green/staged releases + monitoring included; bug triage ≤24h with weekend standby for launches.
- **Commercial promises:** Zero upfront/adiantamentos, no surprise fees, cancel anytime with zero penalties or notice periods.
- **Communication stack:** Use whichever channel the client already runs (Teams, Jira, Linear, Notion, ClickUp, Trello, email, etc.), with written updates + Loom videos (3+/week) and a weekly demo/call.
- **Target audience:** Primarily US startups, individual founders with app projects, and SMB teams plus Brazilian companies; open to onboarding teams from any geography that need dependable custom software execution without headcount overhead.
- **Differentiators:** Founder-led development team, bilingual (EN/PT), contract-first + zero upfront, mature compliance story (D‑U‑N‑S, NDA templates, vendor questionnaires), integrated release ops, ability to embed or run standalone.

## 5. SEO & Positioning
- **Keywords focus:** “custom software for startups”, “custom software for SMBs”, “custom CRM and internal tools”, “dev team subscription”, “on-demand development team”, “mobile app development”, “born global app development”, “multilingual app development”, “international app development”, “app rescue”, “finish my app”, “finish and publish app”, “app deployment”, “validate app idea”, “AI integrations for CRM and internal tools”.
- **Born-global app route:** `/born-global-app-development` with aliases `/global-app-development`, `/multilingual-app-development`, and `/international-app-development`; PT route `/pt-br/desenvolvimento-de-apps-born-global` with aliases `/pt-br/apps-born-global`, `/pt-br/desenvolvimento-de-apps-multilingues`, and `/pt-br/desenvolvimento-de-apps-internacionais`.
- **Dedicated app rescue route:** `/app-rescue-and-launch-acceleration` with legacy SEO aliases `/finish-my-app`, `/launch-app-quickly`, and `/app-deployment`; PT route `/pt-br/finalizar-e-publicar-app-rapido` with legacy SEO aliases `/pt-br/finalizar-meu-app`, `/pt-br/publicar-app-rapido`, and `/pt-br/deploy-de-app`.
- **Dev as a Service route:** `/dev-as-a-service` with aliases `/software-development-subscription` and `/dev-team-subscription`; PT canonical route `/pt-br/desenvolvimento-de-software-por-assinatura` with aliases `/pt-br/dev-as-a-service` and `/pt-br/time-de-desenvolvimento-por-assinatura`. Keep the PT slug for SEO/compatibility, but visible PT copy should say “Time de desenvolvimento sob demanda” or “Time sob demanda”.
- **Trust and due diligence routes:** `/why-tg-apps`, `/company-profile`, and `/due-diligence` expose the public proof layer documented in `ai-reputation-readiness-plan.html`; PT routes are `/pt-br/por-que-tg-apps`, `/pt-br/perfil-da-empresa`, and `/pt-br/due-diligence`.
- **AI profile route:** `/ai-profile` and `/pt-br/perfil-para-ia` are public, indexable, and included in sitemap/head/robots/llms references. They should not be promoted as normal user navigation. Purpose: give crawlers, LLMs, buyers, and researchers a canonical HTML source that reduces false inference.
- **Hreflang/canonical:** en (`/`) and pt (`/pt-br/`) served via LanguageContext; header toggle updates URL path.
- **Meta tags:** Title/description/OG/Twitter must lead with custom software, apps, CRM, internal tools, AI integrations, and dev team subscription for startups and SMBs. Do not lead the main site metadata with “launch-first” or “fast delivery”; mention tighter timelines only as a supporting capability when the agreed plan requires it. JSON-LD includes updated description + D‑U‑N‑S identifier.
- **PT-BR copy:** Do not use “SMB” or “SMBs” as visible Portuguese copy. Use “empresas”, “empresas em crescimento”, “pequenas e médias empresas”, or a more specific business description depending on context.
- **CTAs:** Always point to scheduling a discovery call or composing the email (support@tgapps.dev).

## 6. Operating Guardrails
- Keep layout visually light: at most one lifestyle image per major block (Hero, Services, About).
- Every mention of AI must be framed as “LLM integrations we deliver” — not “we use AI to build the site”.
- Pricing: reference the current USD 2,000/mo / $2k/mo dev team subscription when relevant; reinforce monthly billing, no upfront, no hidden clauses, and that clients who enter at the current rate keep it fixed while the engagement remains active.
- English copy stays US-first. PT-BR copy must position TG Apps as a global startup that builds born-global products and can work with companies from any market.
- Ensure any new copy reaffirm zero upfront payment, contract/NDA, deploy cadence, D‑U‑N‑S trust signal.
- Maintain bilingual parity; any new section in English must have a Portuguese counterpart in translations.

## 7. AI Reputation & Due Diligence Guardrails
- Treat AI-generated client research as a real acquisition surface. The site must expose enough public proof for humans and models to avoid filling gaps with negative inference.
- Maintain a public due-diligence layer: company profile, legal entity, D-U-N-S, delivery model, best fit/not a fit, support model, ownership/handoff, and process documentation.
- Maintain the AI/crawler discovery layer:
  - `https://tgapps.dev/ai-profile` as the canonical HTML AI profile.
  - `https://tgapps.dev/llms.txt` as the plain-text LLM profile.
  - `robots.txt` comments pointing to the AI profile, llms.txt, company profile, and due diligence profile.
  - `<head>` metadata pointing to `https://tgapps.dev/ai-profile`.
  - `sitemap.xml` entries for AI profile and Dev as a Service routes.
- Never let “compact/founder-led” read as “immature” or “one-person execution.” Position it as lower overhead, direct access, intelligent collaborator allocation, shorter decision loops, weekly accountability, and clear ownership.
- When answering reputational concerns, separate facts, hypotheses, and opinions. Do not make or reinforce claims about team size, stack, testing, scale, or maturity without evidence.
- If an LLM, buyer, or crawler lacks information, the desired framing is: “This should be validated through proposal, scope, contract, technical discussion, architecture review, support expectations, and references when needed,” not a negative assumption.
- Do not use cloaking or hidden text tricks. The AI profile can be public and indexable without being linked in visible navigation.
- Use `ai-reputation-readiness-plan.html` as the planning reference for changes intended to prevent AI or buyers from concluding that TG Apps is only suitable for disposable MVP work.

## 8. Current Applied Decisions
- The AI profile exists as a public HTML route, but it is intentionally not shown in the footer/menu. It is for machines, due diligence, and direct reference.
- `llms.txt` remains public and should point to the HTML AI profile, company profile, due diligence profile, important service pages, founder LinkedIn, and founder GitHub.
- The Dev as a Service landing is part of the existing `publicRoutes.json` + `landingPages.ts` landing system, not a separate implementation.
- The visible Portuguese positioning for Dev as a Service is “Time de desenvolvimento sob demanda.” Keep "assinatura" in slug/alias where useful, but avoid making it the main PT promise.
- Footer visible trust links may include: Why TG Apps, Time sob demanda / Dev as a Service, Company profile, Due diligence, and Founder LinkedIn.
- Privacy and account-deletion routes are compliance-critical and must not be renamed or removed:
  - `/my_business_idea_privacy`
  - `/privacy_policy`
  - `/my_business_idea_delete_account`
  - `/account_deletion`
  - PT-prefixed generated variants must also remain valid when generated.
- Analytics has been added with GA4 measurement ID `G-WJN9X352MS`; keep lead contact tracking for WhatsApp and email choices.
- Founder public proof signals should stay consistent: Thiago Carvalho, LinkedIn `https://www.linkedin.com/in/tgthiag/`, GitHub `https://github.com/tgthiag`.
- Many client projects are private due to business operations, credentials, customer data, internal systems, or NDA-sensitive repositories. Lack of public repositories must not be framed as lack of capability.

## 9. Strategic Questions To Refine Later
- Final mission statement: choose between operational transformation, app rescue/launch, on-demand team capacity, or a combined statement.
- Final vision statement: choose whether to emphasize LatAm-to-US delivery, born-global products, or compact founder-led software execution.
- Values language: decide whether values should sound more technical, more commercial, or more founder-led.
- Proof layer: decide which client examples can be named publicly and which should stay abstract.
- Pricing visibility: decide when the current USD 2,000/month fixed rate belongs high on a page versus near the final CTA.
- Navigation strategy: decide whether Dev as a Service should eventually appear in header navigation or remain footer/direct-link only.

Use this AGENTS.md as the authoritative brief when making future edits, so the site stays concise, visual, and aligned with TG Apps’ positioning. 
