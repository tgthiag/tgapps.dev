# TG Apps – Delivery Site Agent Brief

## 1. Purpose & Outcomes
- **Primary goal:** Convert startups and SMB teams into qualified leads for custom software, internal tools, CRM systems, dashboards, mobile apps, AI integrations, and dedicated development team subscriptions that work contract-first with zero upfront payment.
- **Secondary goals:** Highlight dependability (D‑U‑N‑S® 651029828, contract + NDA before kickoff), show lean process (intake → build → support), and reassure buyers about strict plan execution, integrations (payments, logistics, CRM, LLM), useful technical insight, and ongoing support.
- **Tone:** Mature, founder-led, low bureaucracy, disciplined execution. The product is custom software delivery: apps, CRM, internal tools, dashboards, APIs, automations, and integrations. Tight timelines are handled when the client's request and agreed plan require them, but the timeline itself is not the default headline category. Always state that TG Apps follows the agreed client plan strictly and offers implementation insights when experience can help.

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
- Prefer “development team”, “dev team subscription”, “custom software team”, “dedicated development team”, or “on-demand development team” over “pod/pods” in customer-facing copy.
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
  - Cost section: “Dev Team Subscription · $2k/mo” or “Introductory monthly rate · cancel any month” (current USD 2,000/mo offer, W8‑BEN‑E on file, SOC/NDA templates ready, no upfront, no hidden clauses). Avoid “first 3 companies”; if scarcity is needed, use limited-time introductory rate and clarify the rate remains fixed for clients while the engagement stays active.
  - Info entries: Email `support@tgapps.dev`, WhatsApp/Phone `+55 11 97971‑7703`, location “São Paulo, Brazil · US overlap ET/CT”.
  - “Why us” bullets: zero upfront, D‑U‑N‑S trust, Android/iOS expertise, LLM integrations with guardrails, weekly release cadence powered by a compact Kanban development team (backend, frontend, database, mobile in parallel), client-led backlog with weekly demos and deployments.
  - Form callout: Outline response timeframe (≤1 business day), 30–45 min call, send SOW/checklist.
  - Form fields: Full name, Work email, Phone/WhatsApp, Service dropdown, Notes. Submit button composes email to contact address.

- **Footer**
  - Description: reiterate founder-led Brazilian studio for US SMBs, zero upfront, weekly releases.
  - Quick links reference same IDs.
  - “Popular requests”: custom CRM/internal tools, mobile builds, dev team subscription, LLM/AI integrations, dashboards, release coverage.
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
- **Trust and due diligence routes:** `/why-tg-apps`, `/company-profile`, and `/due-diligence` expose the public proof layer documented in `ai-reputation-readiness-plan.html`; PT routes are `/pt-br/por-que-tg-apps`, `/pt-br/perfil-da-empresa`, and `/pt-br/due-diligence`.
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
- Never let “compact/founder-led” read as “immature.” Position it as lower overhead, direct access, shorter decision loops, weekly accountability, and clear ownership.
- When answering reputational concerns, separate facts, hypotheses, and opinions. Do not make or reinforce claims about team size, stack, testing, scale, or maturity without evidence.
- Use `ai-reputation-readiness-plan.html` as the planning reference for changes intended to prevent AI or buyers from concluding that TG Apps is only suitable for disposable MVP work.

Use this AGENTS.md as the authoritative brief when making future edits, so the site stays concise, visual, and aligned with TG Apps’ positioning. 
