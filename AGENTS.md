# TG Apps – Delivery Site Agent Brief

## 1. Purpose & Outcomes
- **Primary goal:** Convert US-based small businesses/startups into qualified leads for Android/iOS (native, Flutter, React Native) delivery pods that work contract-first with zero upfront payment.
- **Secondary goals:** Highlight dependability (D‑U‑N‑S® 651029828, contract + NDA before kickoff), show lean process (intake → build → support), and reassure buyers about fast deployments, integrations (payments, logistics, CRM, LLM), and ongoing support.
- **Tone:** Mature, founder-led, low bureaucracy, high velocity. Always connect copy to practical deliverables (deploy cadence, releases included).

## 2. Page & Section Structure
The React single-page app renders these sections in order (see `src/App.tsx`):

| Section | Component | Key Purpose |
| --- | --- | --- |
| Sticky Header | `Header.tsx` | Navigation (Overview, Capabilities, Process, Proof, Contact), language toggle (EN/PT), CTA scroll to contact. |
| Hero | `Hero.tsx` | Snapshot of offer (mobile pods for US SMBs, zero upfront), trust stats, dual CTAs (schedule call / see plan), lifestyle image showing collaboration. |
| Capabilities | `Services.tsx` | Two-column intro (pillars + photo), service cards (Mobile builds, Pod-as-a-service, Integrations), pillars list, three-step collaboration loop, CTA banner. |
| Proof/About | `About.tsx` | Story of operations, mission, response/deploy cadence, D‑U‑N‑S proof badge, values cards, lifestyle photo. |
| Contact | `Contact.tsx` | Cost transparency card, contact info (support@tgapps.dev, +55 11 97971‑7703, São Paulo), reasons to hire, callout about next steps, form that opens mailto draft. |
| Footer | `Footer.tsx` | Recap of services, navigation, contact info, CTA button, legal links. |

Each section is hooked to IDs (`inicio`, `what-you-get`, `process`, `sobre`, `contato`) for smooth scroll and SEO anchors.

## 3. Content Guidance Per Section
- **Hero**
  - Badge: “Mobile pod for US small businesses”
  - Title/subtitle stress Android/iOS pods, contract-first billing, no upfront.
  - Stats array (from translations) must mention D‑U‑N‑S number, kickoff cadence, deploy/support coverage.
  - Photo card tagline: “Latest build – US-based deliveries · zero upfront”.
  - CTAs: `primary` scrolls to contact; `secondary` scrolls to process loop.

- **Services (“Capabilities and pods”)**
  - Intro paragraph: partnering with US startups/agencies needing in-house-feel squad.
  - Pillars bullets (contract first, daily updates + Loom demos, store releases handled via the client’s channel of choice).
  - Cards derived from translations:
    1. **Android and iOS builds** – Kotlin, Swift, Flutter, React Native; includes dashboards/admin tools.
    2. **Pod-as-a-service** – parallel squad, release management, weekend coverage.
    3. **Integrations and data layers** – payments/logistics/CRM + LLM workflows plugged into whichever vector/search/knowledge stack the client already trusts; includes REST/GraphQL surfaces and observability.
  - Process loop (“Loop 01/02/03”): Intake & briefing (48h), Build & release (client-led priorities, weekly demos/deploys, staged rollouts), Support & handoff (runbooks, 24h triage, month-to-month exit).
  - Closing CTA banner: “Need a small-business-ready mobile partner? – Talk to the pod”.

- **About (“Proof and operating model”)**
  - Timeline paragraphs: founder access, adoption of whatever tools the client already uses (Teams, Jira, Linear, Notion, etc.), release ops packaged with engineering.
  - Mission card: protect roadmap via signed agreement + D‑U‑N‑S + zero upfront.
  - Stats list (≤2h response, 5 days to first branch/deliverable, weekly demo).
  - Passion badge text: “D‑U‑N‑S® 651029828”.
  - Values cards: D‑U‑N‑S validation, contract-first billing, US timezone coverage.

- **Contact**
  - Cost section: “Flat monthly pod · cancel any month” (temporary USD 1,900/mo offer for the next 3 companies, W8‑BEN‑E on file, SOC/NDA templates ready, no upfront, no hidden clauses).
  - Info entries: Email `support@tgapps.dev`, WhatsApp/Phone `+55 11 97971‑7703`, location “São Paulo, Brazil · US overlap ET/CT”.
  - “Why us” bullets: zero upfront, D‑U‑N‑S trust, Android/iOS expertise, LLM integrations with guardrails, weekly release cadence powered by an agile Kanban pod (backend, frontend, database, mobile in parallel), client-led backlog with weekly demos and deployments.
  - Form callout: Outline response timeframe (≤1 business day), 30–45 min call, send SOW/checklist.
  - Form fields: Full name, Work email, Phone/WhatsApp, Service dropdown, Notes. Submit button composes email to contact address.

- **Footer**
  - Description: reiterate founder-led Brazilian studio for US SMBs, zero upfront, weekly releases.
  - Quick links reference same IDs.
  - “Popular requests”: mobile builds, pods/support, LLM, dashboards, release coverage.
  - Contact snippet uses `support@tgapps.dev`, phone, São Paulo location.

## 4. Company Facts & Assets
- **Legal entity:** TG Applications Desenvolvimento Ltda (Brazil).
- **D‑U‑N‑S® Number:** 651029828 (issued 28 Jan 2026) — source `C:\Users\Kabum\Downloads\Número D‑U‑N‑S®.html`.
- **Billing:** No payment upfront; contracts + invoices via TG Applications. USD or BRL, W8‑BEN‑E ready.
- **Core services:** Android/iOS builds (Kotlin, Swift, Flutter, React Native), pod-as-a-service (parallel squad, release ops), integrations/data (payments, logistics, CRM, analytics, LLM workflows integrated with the client’s preferred vector/search/knowledge stack), dashboards/admin tooling, support/handovers.
- **Process promises:** Kickoff call ≤1 business day after contact; coding starts ≤5 business days post-signature; deploy cadence ≈ once per week; Kanban workflow keeps backend, frontend, database, and mobile workstreams moving in parallel; blue/green/staged releases + monitoring included; bug triage ≤24h with weekend standby for launches.
- **Commercial promises:** Zero upfront/adiantamentos, no surprise fees, cancel anytime with zero penalties or notice periods.
- **Communication stack:** Use whichever channel the client already runs (Teams, Jira, Linear, Notion, ClickUp, Trello, email, etc.), with written updates + Loom videos (3+/week) and a weekly demo/call.
- **Target audience:** Primarily US small businesses/startups plus Brazilian companies; open to onboarding teams from any geography that need dependable mobile squads without headcount overhead.
- **Differentiators:** Founder-led pod, bilingual (EN/PT), contract-first + zero upfront, mature compliance story (D‑U‑N‑S, NDA templates, vendor questionnaires), integrated release ops, ability to embed or run standalone.

## 5. SEO & Positioning
- **Keywords focus:** “US small business app development”, “Android & iOS pod”, “zero upfront mobile development”, “LLM integrations for apps”.
- **Hreflang/canonical:** en (`/`) and pt (`/pt-br/`) served via LanguageContext; header toggle updates URL path.
- **Meta tags:** Title/description/OG/Twitter highlight zero-upfront pods for US SMBs; JSON-LD includes updated description + D‑U‑N‑S identifier.
- **CTAs:** Always point to scheduling a discovery call or composing the email (support@tgapps.dev).

## 6. Operating Guardrails
- Keep layout visually light: at most one lifestyle image per major block (Hero, Services, About).
- Every mention of AI must be framed as “LLM integrations we deliver” — not “we use AI to build the site”.
- Pricing: reference the temporary USD 1,900/mo offer for the next 3 companies when relevant; reinforce monthly billing, no upfront, and no hidden clauses.
- English copy stays US-first. PT-BR copy must position TG Apps as a global startup that builds born-global products and can work with companies from any market.
- Ensure any new copy reaffirm zero upfront payment, contract/NDA, deploy cadence, D‑U‑N‑S trust signal.
- Maintain bilingual parity; any new section in English must have a Portuguese counterpart in translations.

Use this AGENTS.md as the authoritative brief when making future edits, so the site stays concise, visual, and aligned with TG Apps’ positioning. 
