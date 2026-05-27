# Plano de Implementação GEO / AI SEO

Data: 2026-05-26

## Objetivo

Fazer a TG Apps começar a ter mais chance real de aparecer em busca tradicional, AI Overviews, respostas de IA, crawlers de pesquisa e ferramentas de comparação, sem depender de atalhos como `llms.txt` sozinho.

O foco deste plano é transformar o site em uma fonte mais forte, rastreável, citável e verificável.

O problema principal hoje não é falta de páginas. O problema principal é extração de conteúdo:

- O conteúdo comercial existe no React.
- O `llms.txt` tem contexto forte.
- O sitemap já está funcional.
- Mas o HTML bruto das rotas comerciais ainda é raso.

Quando um crawler simples faz:

```bash
curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/
```

ele deve receber conteúdo real da página. Não apenas H1, description, intro genérica e links.

## Princípios do Plano

1. Melhorar o que já existe antes de migrar framework.
2. Fazer conteúdo visível para usuários também existir no HTML bruto.
3. Evitar conteúdo genérico criado só para SEO.
4. Usar cases reais, entregáveis concretos e problemas reais.
5. Usar schema apenas quando refletir conteúdo visível.
6. Validar automaticamente para evitar regressão.
7. Medir no Search Console e por testes de extração, sem esperar resultado imediato no dia seguinte.

## Diagnóstico Técnico Atual

### O que já está bom

- `src/content/publicRoutes.json` já é o manifesto público de rotas.
- `scripts/generate-route-html.mjs` já gera HTML por rota e `dist/sitemap.xml`.
- `dist/sitemap.xml` já contém rotas comerciais e versões PT-BR.
- `public/robots.txt` já aponta para o sitemap.
- `index.html` já contém schema global `ProfessionalService`.
- `public/llms.txt` já tem perfil forte da empresa.
- `src/content/landingPages.ts` já tem bastante conteúdo comercial.
- `src/components/KeywordLandingPage.tsx` já renderiza proof, deliverables, fit, sections, pricing, FAQ e CTA.
- Cases públicos e logos de clientes ficam pausados até validação comercial e permissão clara.

### O que ainda limita indexação / IA

- O HTML estático gerado é raso.
- O gerador atual não reaproveita `landingPages.ts`.
- Crawlers sem JS podem não ver conteúdo específico das páginas.
- Cases reais existem como cards, não como páginas indexáveis.
- Schema por rota ainda não existe.
- Não há validação automatizada garantindo qualidade do HTML bruto.
- Páginas prioritárias ainda podem ser mais específicas.

## Ordem de Execução

```txt
P0 - Gerar HTML estático rico para rotas comerciais.
P0 - Criar validação SEO no build.
P1 - Aprofundar App Rescue, CRM/Internal Tools e AI Integrations.
P1 - Criar case studies públicos.
P1 - Adicionar schema por rota.
P2 - Consolidar entidade externa e sameAs.
P2 - Revisar llms.txt / talvez criar llms-full.txt.
P3 - Criar artigos comparativos.
P3 - Avaliar migração Astro/Next apenas se o gerador ficar pesado.
```

## Fase P0.1 - Gerar HTML Estático Rico

### Objetivo

Fazer cada rota comercial entregar conteúdo específico diretamente no HTML bruto.

### Resultado esperado

Antes, o HTML bruto tem conteúdo genérico.

Depois, cada página deve mostrar:

- H1.
- Intro.
- Hero highlights.
- Proof heading + proof items.
- Deliverables heading + deliverables.
- Fit heading + fit items.
- Sections com título, descrição e itens.
- Pricing quando existir.
- FAQ quando existir.
- Final note.
- CTA.
- Links internos relevantes.

### Decisão Técnica

Temos duas opções.

#### Opção A: adicionar `tsx` e converter o gerador para TypeScript

Instalar:

```bash
npm install -D tsx
```

Renomear:

```txt
scripts/generate-route-html.mjs
```

para:

```txt
scripts/generate-route-html.ts
```

Atualizar `package.json`:

```json
{
  "scripts": {
    "build": "vite build && tsx scripts/generate-route-html.ts && tsx scripts/validate-seo.ts"
  }
}
```

Vantagens:

- O gerador pode importar `src/content/landingPages.ts` diretamente.
- Menos duplicação.
- Permite tipos.
- Facilita também criar `validate-seo.ts`.

Riscos:

- Adiciona uma dependência.
- Scripts Node passam a depender de execução TS.
- Precisa garantir que imports de frontend não puxem DOM/React desnecessariamente.

#### Opção B: extrair dados para arquivo neutro

Criar:

```txt
src/content/landingPages.data.ts
```

ou:

```txt
src/content/landingPages.data.json
```

Depois fazer React e gerador consumirem a mesma fonte.

Vantagens:

- Conteúdo fica mais separado de UI.
- Mais fácil gerar HTML, schema, LLM file e validações.

Riscos:

- Refatoração maior.
- Pode gerar mais mudanças de uma vez.
- Mais chance de quebrar copy bilíngue.

### Decisão Recomendada

Começar pela Opção A.

Motivo:

- Mais rápida.
- Menor alteração estrutural.
- Ataca o gargalo imediatamente.
- Mantém a UI React como está.
- Permite validar se o modelo funciona antes de uma refatoração maior.

Se o script ficar grande demais, aí sim fazemos a Opção B.

### Arquivos Envolvidos

```txt
package.json
package-lock.json
scripts/generate-route-html.mjs
scripts/generate-route-html.ts
scripts/validate-seo.ts
src/content/landingPages.ts
src/content/publicRoutes.json
```

### Implementação Detalhada

1. Instalar `tsx`.
2. Renomear o gerador para `.ts`.
3. Tipar estruturas mínimas de rota e conteúdo.
4. Importar `getLandingContent` de `src/content/landingPages.ts`.
5. Criar função `renderLandingStaticHtml(route, locale)`.
6. Para rotas `page === "landing"`, gerar HTML rico a partir do conteúdo real.
7. Para rotas `appsDirectory`, `appDetail` e `home`, manter fallback atual inicialmente ou criar fallback próprio menor.
8. Substituir o `noscript` raso por conteúdo estático dentro de `#root`.
9. Garantir que o conteúdo estático não use `display:none`.
10. Garantir que React continue montando normalmente no client.

### Sobre Inserir Conteúdo Dentro de `#root`

Hoje o gerador faz:

```html
<div id="root"></div>
<noscript>...</noscript>
```

O novo formato recomendado:

```html
<div id="root">
  <main class="static-seo-fallback">
    ...
  </main>
</div>
```

Quando o React carregar, ele substitui esse conteúdo. Para usuários com JS, a experiência continua sendo React. Para crawlers sem JS, o HTML bruto tem conteúdo real.

Importante:

- O conteúdo estático precisa representar conteúdo que o usuário também vê no React.
- Não usar conteúdo escondido só para crawler.
- Não usar keyword stuffing.
- Não duplicar promessas que não aparecem no site renderizado.

### Estrutura do Renderizador

Funções necessárias:

```txt
escapeHtml(value)
renderParagraph(value)
renderList(items)
renderSection(title, description, items)
renderLandingPage(content, locale, route)
renderPricing(pricing)
renderFaq(faq)
renderFinalNote(finalNote)
renderInternalLinks(locale)
```

### HTML Mínimo por Landing Page

Cada rota `landing` deve gerar:

```html
<main class="static-seo-fallback">
  <article>
    <header>
      <p>Badge</p>
      <h1>Title</h1>
      <p>Intro</p>
      <ul>
        <li>Hero highlight</li>
      </ul>
      <p><a href="/#contato">CTA</a></p>
    </header>

    <section>
      <h2>Proof heading</h2>
      <ul>
        <li>Proof item</li>
      </ul>
    </section>

    <section>
      <h2>Deliverables heading</h2>
      <ul>
        <li>Deliverable</li>
      </ul>
    </section>

    <section>
      <h2>Fit heading</h2>
      <ul>
        <li>Fit item</li>
      </ul>
    </section>

    <section>
      <h2>Section title</h2>
      <p>Section description</p>
      <ul>
        <li>Section item</li>
      </ul>
    </section>

    <section>
      <h2>FAQ</h2>
      <article>
        <h3>Question</h3>
        <p>Answer</p>
      </article>
    </section>
  </article>
</main>
```

### Critérios de Aceite

Depois de `npm run build`, estes arquivos devem conter conteúdo específico:

```txt
dist/app-rescue-and-launch-acceleration/index.html
dist/custom-crm-and-internal-tools/index.html
dist/ai-integrations-for-crm-and-internal-tools/index.html
```

Comandos locais:

```bash
rg -i "codebase|build recovery|dependency|store" dist/app-rescue-and-launch-acceleration/index.html
rg -i "spreadsheet|dashboard|role-based|customer history" dist/custom-crm-and-internal-tools/index.html
rg -i "RAG|human review|lead qualification|support triage" dist/ai-integrations-for-crm-and-internal-tools/index.html
```

Comandos em produção após deploy:

```bash
curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/ | grep -Ei "codebase|build recovery|dependency|store"
curl -L https://tgapps.dev/custom-crm-and-internal-tools/ | grep -Ei "spreadsheet|dashboard|role-based|customer history"
curl -L https://tgapps.dev/ai-integrations-for-crm-and-internal-tools/ | grep -Ei "RAG|human review|lead qualification|support triage"
```

Meta inicial:

```txt
Rotas comerciais prioritárias: pelo menos 700 palavras úteis no HTML bruto.
Rotas comerciais secundárias: pelo menos 450 palavras úteis.
Rotas institucionais: pelo menos 400 palavras úteis.
Rotas legais/noindex: sem meta comercial.
```

## Fase P0.2 - Criar `validate-seo`

### Objetivo

Quebrar o build se alguém introduzir regressão SEO.

### Arquivo

```txt
scripts/validate-seo.ts
```

### O Que Validar

1. Toda rota com `sitemap.include === true` aparece em `dist/sitemap.xml`.
2. Toda versão localizada aparece.
3. Nenhum alias aparece no sitemap.
4. Nenhuma URL com `#` aparece no sitemap.
5. Nenhuma rota `noindex` aparece no sitemap.
6. Nenhuma rota bloqueada por `robots.txt` aparece no sitemap.
7. Toda rota `staticHtml === true` gera arquivo em `dist`.
8. Toda landing page tem exatamente um H1 no HTML estático.
9. Rotas prioritárias têm palavras-chave específicas.
10. Rotas prioritárias batem a contagem mínima de palavras.
11. Canonical da página bate com rota canônica.
12. Hreflang EN/PT existe.

### Rotas Prioritárias Para Validação Forte

```txt
/app-rescue-and-launch-acceleration
/custom-crm-and-internal-tools
/ai-integrations-for-crm-and-internal-tools
/company-profile
/due-diligence
/ai-profile
```

### Exemplo de Configuração Interna

```ts
const routeQualityRules = {
  appRescueLaunch: {
    minWords: 700,
    requiredTerms: ['codebase', 'build', 'dependencies', 'release', 'handoff']
  },
  customCrmInternalTools: {
    minWords: 700,
    requiredTerms: ['spreadsheet', 'dashboard', 'workflow', 'customer', 'role']
  },
  llmRagIntegrations: {
    minWords: 700,
    requiredTerms: ['LLM', 'RAG', 'workflow', 'human', 'documents']
  }
};
```

### Package Script

Atualizar:

```json
{
  "scripts": {
    "build": "vite build && tsx scripts/generate-route-html.ts && tsx scripts/validate-seo.ts"
  }
}
```

### Critérios de Aceite

```bash
npm run build
npm run typecheck
```

Ambos precisam passar.

## Fase P1.1 - Aprofundar App Rescue

### Por Que Essa Página é Prioritária

App Rescue é uma dor muito clara:

- Projeto parado.
- Freelancer sumiu.
- Build quebrou.
- Dependências antigas.
- Código sem documentação.
- API instável.
- App fora da loja.
- Falta de acesso/credenciais.

Isso tem alta intenção comercial. Quem pesquisa isso geralmente tem urgência e orçamento.

### Mudanças de Conteúdo

Adicionar seções sobre:

```txt
Who this is for
Common problems in stalled apps
What we check in the first audit
What we can recover
First milestone examples
Store launch checklist
Codebase handoff
When rescue is better than rebuild
When rebuild is better than rescue
FAQ
```

### FAQ Recomendada

```txt
Can you work with an existing codebase?
Can you publish an app another developer started?
What if the app has no documentation?
Can you fix Flutter or React Native apps?
Can you recover Android and iOS builds?
How long does app rescue take?
When do you recommend rebuilding instead?
Who owns the code after rescue?
```

### Termos Que Devem Aparecer Naturalmente

```txt
stalled app
unfinished app
existing codebase
broken build
dependency update
Flutter
React Native
Android
iOS
App Store
Google Play
backend API
handoff
runbook
release checklist
```

### Critério de Aceite

`curl` deve encontrar termos como:

```bash
curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/ | grep -Ei "existing codebase|broken build|Google Play|App Store|handoff"
```

## Fase P1.2 - Aprofundar CRM / Internal Tools

### Por Que Essa Página é Prioritária

Custom CRM e ferramentas internas têm forte fit com SMBs. O comprador entende a dor, mesmo sem ser técnico.

Dores reais:

- Planilhas demais.
- Operação por WhatsApp.
- Agendamento manual.
- Falta de histórico do cliente.
- Relatórios manuais.
- Equipe usando ferramentas desconectadas.
- Dados espalhados.

### Mudanças de Conteúdo

Adicionar seções sobre:

```txt
Who this is for
When a custom CRM makes sense
When an off-the-shelf CRM is enough
Common SMB workflow problems
Internal dashboards
Scheduling workflows
Customer portals
Employee apps
Role-based access
Reports and automations
Integrations
First milestone examples
FAQ
```

### FAQ Recomendada

```txt
When should I build a custom CRM instead of using HubSpot?
Can you start with one small internal tool first?
Can it integrate with my existing app?
Can it replace spreadsheets gradually?
Who owns the source code?
Can non-technical staff use it?
Can you build admin dashboards and reports?
```

### Termos Que Devem Aparecer Naturalmente

```txt
spreadsheet
custom CRM
internal dashboard
scheduling
customer history
role-based access
workflow automation
reports
customer portal
employee app
payments
email
WhatsApp
Google Sheets
API
```

## Fase P1.3 - Aprofundar AI Integrations

### Por Que Essa Página é Prioritária

AI Integrations é um termo competitivo e genérico. Para funcionar, precisa ser concreto.

Não vender:

```txt
AI-powered solutions
```

Vender:

```txt
CRM summarization
support triage
document search with RAG
lead qualification
message classification
business report generation
human review workflows
low-confidence fallback
```

### Mudanças de Conteúdo

Adicionar seções sobre:

```txt
AI workflows we can ship
Where AI should stay behind human review
RAG over company documents
CRM and support automation
Lead qualification and classification
Business reporting
Guardrails and observability
Data and permission boundaries
First milestone examples
FAQ
```

### FAQ Recomendada

```txt
Can you add AI to an existing CRM?
Can AI read my company documents safely?
Do you build RAG systems?
Can we keep a human approval step?
What happens when the AI is unsure?
Can you integrate with our existing vector/search stack?
Can you add logs and review surfaces?
```

### Termos Que Devem Aparecer Naturalmente

```txt
LLM
RAG
vector search
document search
CRM summarization
support triage
lead qualification
message classification
human review
guardrails
observability
fallback
```

## Fase P1.4 - Prova Anônima

### Objetivo

Criar prova indexável sem expor clientes, nomes comerciais, localização sensível ou detalhes operacionais.

### Direção Recomendada

```txt
Sem rotas públicas de case por enquanto.
Sem logos ou seção de trabalhos selecionados na home por enquanto.
Usar exemplos anônimos por categoria apenas quando necessário.
```

### Ordem Recomendada

1. Fortalecer páginas comerciais com conteúdo estático rico.
2. Usar blocos anônimos de prova por tipo de problema.
3. Reintroduzir case nomeado somente com permissão clara.
4. Se um produto próprio for usado como prova, separar produto público de cliente privado.

### Template de Case

```txt
H1
Context
Problem
Constraints
What TG Apps built
Stack / surfaces
First milestone
Result or current status
What changed for the client
Related services
CTA
```

### Cuidados

- Não expor dados confidenciais.
- Não prometer resultado que não possa ser sustentado.
- Não usar cliente sem permissão se houver risco.
- Quando necessário, usar linguagem como "selected public-safe summary".

### Schema

Case studies podem usar:

```txt
WebPage
BreadcrumbList
Article
```

Não usar review/rating se não houver review público real.

## Fase P1.5 - Schema Por Rota

### Objetivo

Melhorar entendimento sem depender de schema como atalho.

### Implementação Recomendada

Adicionar um gerador de structured data no mesmo script ou em módulo separado:

```txt
scripts/schema.ts
```

ou:

```txt
src/seo/structuredData.ts
```

### Tipos Por Rota

Home:

```txt
ProfessionalService
WebSite
WebPage
```

Landing de serviço:

```txt
WebPage
BreadcrumbList
Service
FAQPage se houver FAQ visível
```

Páginas institucionais:

```txt
WebPage
BreadcrumbList
Organization/ProfessionalService reference
Person para founder quando relevante
```

Apps:

```txt
SoftwareApplication
WebPage
BreadcrumbList
```

Case studies:

```txt
Article
WebPage
BreadcrumbList
```

### Regra Fundamental

Schema precisa bater com conteúdo visível.

Não declarar FAQ se a FAQ não aparece.
Não declarar app se a página não mostra o app.
Não declarar review se não há review verificável.

## Fase P2 - Entidade Externa

### Objetivo

Fazer a TG Apps ser resolvida como entidade única.

### Ações

GitHub:

- Description.
- Website.
- Topics.
- README do perfil.
- Repo About.

LinkedIn:

- Nome consistente.
- Descrição consistente.
- Site.
- Serviços.

App stores:

- Nome de desenvolvedor consistente.
- Support URL apontando para tgapps.dev.
- Privacy/support consistentes.

Schema:

- Adicionar `sameAs` apenas para perfis oficiais confirmados.
- Considerar `alternateName`.

### Decisão de Marca

Decidir se a marca pública será:

```txt
Tg Apps
```

ou:

```txt
TG Apps
```

Minha recomendação:

- Não fazer mudança ampla no site agora.
- Manter `Tg Apps` onde já está.
- Usar `TG Apps` em perfis externos se quiser aparência institucional.
- Garantir que legal name continue sempre `TG APPLICATIONS DESENVOLVIMENTO LTDA`.

## Fase P2/P3 - Conteúdo Comparativo

### Objetivo

Capturar perguntas de pesquisa com ponto de vista real.

### Artigos Recomendados

```txt
/app-rescue-vs-rebuild/
/how-to-finish-a-stalled-mobile-app/
/custom-crm-vs-hubspot-for-small-business/
/flutter-vs-react-native-for-startups/
/nearshore-app-development-brazil-for-us-startups/
```

### Regra

Só criar depois das páginas comerciais e cases.

Motivo:

- Artigo sem prova vira conteúdo genérico.
- Case + serviço forte torna artigo mais crível.

## Monitoramento Após Deploy

### Imediato

Depois de cada deploy:

```bash
curl -L https://tgapps.dev/sitemap.xml
curl -L https://tgapps.dev/robots.txt
curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/
curl -L https://tgapps.dev/custom-crm-and-internal-tools/
curl -L https://tgapps.dev/ai-integrations-for-crm-and-internal-tools/
```

### Google Search Console

Fazer manualmente:

1. Enviar sitemap.
2. Inspecionar `/`.
3. Inspecionar `/app-rescue-and-launch-acceleration/`.
4. Inspecionar `/custom-crm-and-internal-tools/`.
5. Inspecionar `/ai-integrations-for-crm-and-internal-tools/`.
6. Pedir indexação das páginas prioritárias.

### Queries Para Monitorar

```txt
finish stalled mobile app
app rescue developer
custom CRM for small business
internal tools for service business
AI integrations for CRM
LLM integrations for internal tools
Brazil software studio for US startups
nearshore app development Brazil
```

### Testes Manuais em IA

Testar periodicamente:

```txt
Who can help finish and launch a stalled mobile app?
Small software studio for custom CRM and internal tools for service businesses.
Brazil-based app development studio for US startups.
Company that builds mobile apps, backend APIs, CRMs, and AI integrations with weekly demos.
```

Objetivo de associação:

```txt
Tg Apps = app rescue + custom CRM + mobile/backend + AI integrations + founder-led software studio
```

## Expectativa Realista

Essas mudanças não fazem a TG Apps aparecer imediatamente amanhã.

O que elas fazem:

- Melhoram rastreabilidade.
- Melhoram extração por crawlers simples.
- Melhoram chance de indexação correta.
- Melhoram chance de snippets e citações.
- Melhoram clareza para IA.
- Criam base para Search Console mostrar impressões.

Resultados em busca e IA dependem também de:

- Tempo de recrawl.
- Autoridade do domínio.
- Links externos.
- Consistência de entidade.
- Concorrência da query.
- Qualidade e especificidade do conteúdo.

## Sequência de Commits Recomendada

### Commit 1

```txt
feat(seo): render rich static HTML for landing pages
```

Inclui:

- `tsx`.
- Gerador em TypeScript.
- HTML bruto rico por landing page.
- Build passando.

### Commit 2

```txt
test(seo): validate sitemap and static route quality
```

Inclui:

- `scripts/validate-seo.ts`.
- Regras de sitemap.
- Regras de palavras mínimas.
- Regras de termos por rota prioritária.

### Commit 3

```txt
content(seo): deepen app rescue crm and ai integration pages
```

Inclui:

- Novas seções.
- FAQs.
- Primeiro milestone.
- Termos naturais.

### Commit 4

```txt
content(proof): add anonymous proof blocks
```

Inclui:

- Blocos de prova anônima.
- Sem nomes de clientes.
- Links internos para serviços relacionados.
- Regras claras para só reabrir cases públicos com permissão.

### Commit 5

```txt
feat(schema): add route-specific structured data
```

Inclui:

- WebPage.
- BreadcrumbList.
- Service.
- SoftwareApplication.
- FAQPage somente onde aplicável.

## Definition of Done Geral

O plano estará realmente aplicado quando:

- `npm run build` passa.
- `npm run typecheck` passa.
- `npm run lint` passa ou tem decisão explícita se lint já possui débitos antigos.
- `curl` das páginas prioritárias retorna conteúdo específico.
- `dist/sitemap.xml` contém rotas comerciais canônicas.
- Aliases não entram no sitemap.
- Anchors não entram no sitemap.
- Páginas noindex/bloqueadas não entram no sitemap.
- Páginas prioritárias têm FAQ visível quando schema FAQ existir.
- Search Console recebe sitemap atualizado.
- Páginas prioritárias são inspecionadas e enviadas para indexação.

## Resumo Executivo

O plano certo não é refazer tudo.

O plano certo é:

1. Fazer o HTML bruto entregar o conteúdo que já existe.
2. Validar isso automaticamente.
3. Aprofundar as três páginas com maior chance comercial.
4. Criar cases reais indexáveis.
5. Adicionar schema por rota.
6. Só depois mexer em `llms.txt`, artigos e possível migração.

Essa sequência ataca o motivo mais provável de a TG Apps ainda não aparecer bem: falta de conteúdo específico e facilmente extraível nas páginas públicas iniciais.
