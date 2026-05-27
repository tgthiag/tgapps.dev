# Análise Expandida das Propostas de GEO / AI SEO

Data: 2026-05-26

## Veredito Geral

A análise enviada está correta na direção estratégica, mas mistura três tipos de coisa:

1. Problemas reais que ainda existem no projeto.
2. Problemas que já foram resolvidos no estado atual do site.
3. Recomendações boas, mas que não deveriam ser prioridade agora.

O ponto mais importante: o site já tem uma base forte de GEO / AI SEO. Existe manifesto de rotas, sitemap gerado, páginas bilíngues, `llms.txt`, `company-profile`, `due-diligence`, `ai-profile`, D-U-N-S, CNPJ, canonical, hreflang e schema global. A exposição pública de clientes/cases fica pausada por enquanto.

O gargalo real hoje não é “falta de GEO”. O gargalo é que o conteúdo mais forte ainda está muito dependente do React e do `llms.txt`. O HTML estático que bots simples enxergam ainda é raso.

Em termos práticos, eu não começaria refazendo sitemap nem migrando tudo para Astro/Next agora. Eu começaria fazendo o gerador atual produzir HTML estático rico usando o conteúdo que já existe em `landingPages.ts`.

## O Que Estava Errado ou Desatualizado na Análise Original

### Erro principal: sitemap

A análise dizia que o sitemap estava incompleto, com anchors e páginas legais bloqueadas. Isso não bate com o build atual.

No estado atual do projeto, `scripts/generate-route-html.mjs` gera `dist/sitemap.xml` a partir de `src/content/publicRoutes.json`. Esse sitemap tem 38 URLs localizadas, inclui as páginas comerciais principais e não inclui anchors como `/#inicio` nem rotas legais bloqueadas por `robots.txt`.

O que pode ter acontecido:

- A análise olhou um arquivo antigo versionado.
- A análise olhou uma versão pública anterior ao último deploy.
- A análise confundiu `public/sitemap.xml` antigo com `dist/sitemap.xml` gerado.
- A análise avaliou o GitHub e não o build final.

Conclusão: a ideia de validar sitemap é correta, mas a afirmação de que o sitemap atual está incompleto está desatualizada.

### Erro secundário: peso excessivo em `llms.txt`

A análise está certa ao dizer que `llms.txt` não resolve tudo. Mas ela trata o arquivo como se fosse quase um problema central.

Na prática, o `llms.txt` da TG Apps é uma vantagem. O problema não é ele existir ou ser longo. O problema é que parte das informações dele ainda não existe com a mesma força em páginas HTML públicas.

Conclusão: não devemos “corrigir” o `llms.txt` primeiro. Devemos fazer o conteúdo dele aparecer melhor em HTML rastreável.

### Erro de prioridade: migrar para SSG

A análise sugere Astro/Next como caminho ideal. Tecnicamente faz sentido, mas não é o melhor primeiro passo.

O projeto atual já tem:

- Manifesto de rotas.
- Geração de HTML por rota.
- Geração de sitemap.
- Conteúdo estruturado em TypeScript.
- Páginas comerciais renderizadas em React.

Antes de migrar framework, dá para ganhar muito melhorando o gerador atual.

Conclusão: SSG real pode ser futuro, mas não é a primeira implementação.

### Erro de leitura: páginas comerciais não estão vazias

A análise dá a entender que as páginas são muito rasas. Isso é parcialmente verdade apenas para o HTML bruto gerado.

No React, as páginas comerciais já têm:

- Hero.
- Destaques.
- Blocos de prova.
- Entregáveis.
- Fit / not fit.
- Seções de explicação.
- Pricing em algumas páginas.
- FAQ em algumas páginas.
- CTA.

O problema é que esse conteúdo não aparece inteiro no HTML inicial.

Conclusão: não é necessário reescrever tudo do zero. O primeiro passo é expor melhor o conteúdo que já existe.

## Análise Por Item

## 1. Sitemap Incompleto

### O Que a Proposta Dizia

A proposta dizia que o sitemap estava incompleto, com poucas páginas, anchors da home e páginas legais bloqueadas.

### O Que Está Correto

A preocupação é correta. Sitemap precisa ser gerado automaticamente e precisa refletir as URLs canônicas que queremos indexar.

Também é correto dizer que sitemap manual costuma ficar defasado. Quando o site tem muitas rotas, o sitemap deve vir do mesmo manifesto que controla as páginas.

### O Que Estava Errado

No projeto atual, o sitemap já é gerado a partir de `publicRoutes.json`. Ele já inclui as páginas comerciais e versões PT-BR. Ele não inclui anchors. Ele não inclui as páginas legais bloqueadas.

Portanto, isso não é mais um P0 de correção direta. É um P0 de validação para impedir regressão.

### Recomendação

Adicionar uma validação automática:

- Toda rota com `sitemap.include === true` precisa aparecer no sitemap.
- Alias não deve entrar no sitemap.
- Anchor não deve entrar no sitemap.
- Página `noindex` não deve entrar no sitemap.
- Página bloqueada por `robots.txt` não deve entrar no sitemap.

### Prioridade

P0, mas como validação, não como reconstrução do sitemap.

## 2. Conflito Entre Sitemap e Robots

### O Que a Proposta Dizia

A proposta dizia que o sitemap incluía páginas bloqueadas no `robots.txt`.

### O Que Está Correto

É verdade que sitemap e robots precisam estar alinhados. Se uma página está bloqueada por robots, não faz sentido pedir indexação dela no sitemap.

Também é verdade que `robots.txt` não é o melhor mecanismo para remover página do índice. Para isso, o correto costuma ser `noindex`, desde que o crawler consiga acessar a página e ler a tag.

### O Que Estava Errado

O sitemap gerado atual não inclui as páginas legais bloqueadas. Então o conflito descrito não está presente no build atual.

O que existe é uma decisão estratégica: as páginas legais de app estão bloqueadas por `robots.txt` e também têm `noindex,follow` no SEO dinâmico. Se o bot não puder acessar, ele não lê o `noindex`.

### Recomendação

Se a preocupação for apenas não gastar crawl budget com páginas legais, manter como está é aceitável.

Se a preocupação for garantir que o Google leia `noindex`, o melhor seria remover o `Disallow` dessas páginas e confiar em `noindex,follow`.

Como são páginas públicas exigidas por app stores, eu não esconderia com senha.

### Prioridade

P2, a menos que o Search Console mostre essas URLs aparecendo em resultados.

## 3. HTML Estático Raso

### O Que a Proposta Dizia

A proposta dizia que o HTML bruto das páginas é raso e repetitivo.

### O Que Está Correto

Esse é o ponto mais correto da análise.

O script `generate-route-html.mjs` hoje injeta um fallback estático simples com:

- H1.
- Description.
- Intro genérica.
- CTA.
- Links de serviços.
- Links de confiança.

Isso é melhor do que uma SPA vazia, mas ainda é pouco para crawlers simples e ferramentas de IA que não executam React.

### O Que Estava Errado

A análise dá a entender que o site não tem conteúdo. Na verdade, o conteúdo existe no React. O problema é que ele não está sendo exportado para HTML bruto.

Essa diferença importa:

- “Falta conteúdo” exigiria escrever tudo do zero.
- “O conteúdo existe mas não está no HTML inicial” exige melhorar o gerador.

O segundo caso é mais fácil e mais rápido.

### Recomendação

Fazer o gerador usar o conteúdo de `landingPages.ts`.

O HTML bruto de cada rota deveria incluir:

- Título.
- Intro.
- Hero highlights.
- Proof items.
- Deliverables.
- Fit items.
- Sections.
- Pricing quando existir.
- FAQ quando existir.
- Final note.
- CTA.

Isso deixaria `curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/` muito mais útil.

### Prioridade

P0.

## 4. Conteúdo Forte Concentrado no `llms.txt`

### O Que a Proposta Dizia

A proposta dizia que o `llms.txt` está bom, mas carrega peso demais.

### O Que Está Correto

Está correto. O `llms.txt` não deve ser a fonte mais completa do site. Ele deve orientar, resumir e apontar para páginas canônicas.

Google não exige `llms.txt` para AI Overviews ou AI Mode. A base continua sendo conteúdo útil, rastreável e indexável.

### O Que Estava Errado

A análise passa a impressão de que devemos dividir ou encurtar o `llms.txt` agora. Eu não faria isso primeiro.

O arquivo está forte e ajuda. O problema é que o HTML público precisa alcançar o mesmo nível de clareza.

### Recomendação

Manter `/llms.txt` como está por enquanto.

Depois que as páginas HTML estiverem mais fortes:

- Deixar `/llms.txt` mais curto e canônico.
- Criar `/llms-full.txt` se fizer sentido.
- Garantir que toda informação importante do LLM file exista também em HTML público.

### Prioridade

P2.

## 5. Falta de Cases em Páginas Próprias

### O Que a Proposta Dizia

A proposta dizia que faltam cases reais indexáveis.

### O Que Está Correto

Correto em tese. Cases ajudam GEO/SEO quando podem ser publicados com segurança, porque dão contexto, problema, solução e resultado.

### O Que Estava Errado

A análise fala como se não houvesse prova nenhuma. Existe prova na home e no `llms.txt`. O problema é a profundidade e a indexabilidade.

Outro cuidado: nem todo case sugerido deve virar página pública sem validação. MASP, por exemplo, só deve ser usado se houver segurança comercial e permissão/contexto suficiente.

### Recomendação Atualizada

Pausar cases públicos por enquanto. A recomendação passa a ser:

- não publicar rotas de estudo de caso com nomes de clientes;
- não mostrar logos ou seção de trabalhos selecionados na home até haver autorização e revisão;
- usar prova anônima por categoria quando necessário;
- reintroduzir cases nomeados somente depois de validação comercial e permissão clara.

Cada case deve ter:

- Contexto.
- Problema.
- Restrições.
- O que foi construído.
- Stack ou superfícies.
- Primeiro milestone.
- Resultado ou status atual.
- O que mudou para o cliente.
- Serviços relacionados.
- CTA.

### Prioridade

P1.

## 6. Páginas de Serviço Mais Específicas

### O Que a Proposta Dizia

A proposta dizia que App Rescue, CRM/Internal Tools e AI Integrations precisam ser mais específicas.

### O Que Está Correto

Correto. Essas três páginas são provavelmente as melhores oportunidades comerciais.

Elas atacam dores reais:

- App parado.
- Operação em planilha/WhatsApp.
- IA aplicada a fluxo interno real.

São temas que comprador entende e que IA consegue associar com intenção forte.

### O Que Estava Errado

A análise subestima o que já existe. As páginas já têm estrutura e conteúdo, mas podem ser mais concretas.

Não precisamos criar páginas novas do zero. Precisamos aprofundar as existentes.

### Recomendação

Expandir primeiro:

1. App Rescue.
2. Custom CRM and Internal Tools.
3. AI Integrations.

App Rescue deve falar de:

- Auditoria de codebase.
- Build quebrado.
- Dependências antigas.
- API desconectada.
- Publicação App Store / Play Store.
- Crash fixing.
- Documentação de handoff.
- Rescue vs rebuild.

CRM/Internal Tools deve falar de:

- Planilhas demais.
- Operação por WhatsApp.
- Falta de histórico central.
- Agendamento manual.
- Relatórios manuais.
- Dashboard interno.
- Permissões por função.
- Portal de cliente/equipe.

AI Integrations deve falar de:

- Resumo de CRM.
- Triagem de suporte.
- Busca em documentos com RAG.
- Qualificação de leads.
- Classificação de mensagens.
- Relatórios de negócio.
- Revisão humana.
- O que acontece quando a IA não tem confiança.

### Prioridade

P1, depois de melhorar o HTML estático.

## 7. Schema Por Página

### O Que a Proposta Dizia

A proposta dizia que o schema global é bom, mas falta schema específico por rota.

### O Que Está Correto

Correto.

Hoje existe schema global `ProfessionalService` no `index.html`. Também existe `FAQPage` no componente `KeywordLandingPage` quando a página tem FAQ.

Mas ainda falta schema por rota para explicar melhor cada página.

### O Que Estava Errado

A análise pode dar a impressão de que schema resolveria GEO sozinho. Não resolve.

Structured data ajuda a organizar informação, mas precisa bater com conteúdo visível. Não deve substituir conteúdo real.

### Recomendação

Adicionar com cuidado:

- `WebPage` para páginas públicas.
- `BreadcrumbList` para rotas internas.
- `Service` para páginas de serviço.
- `FAQPage` apenas quando FAQ está visível.
- `SoftwareApplication` para AnyLanguage e apps próprios.

Não colocar schema que prometa coisa não visível na página.

### Prioridade

P1.

## 8. Entidade Externa e Consistência de Marca

### O Que a Proposta Dizia

A proposta dizia que há inconsistência entre `Tg Apps`, `TG Apps`, `TgApps` e `TG APPLICATIONS`.

### O Que Está Correto

Correto. Para entity resolution, consistência ajuda.

O ideal é que Google, GitHub, LinkedIn, app stores e o próprio site apontem para a mesma entidade.

### O Que Estava Errado

Isso não é P0. Também não é só uma questão técnica. É decisão de marca.

O site usa `Tg Apps` de forma consistente em muitos pontos. Trocar tudo para `TG Apps` pode gerar churn visual e textual.

### Recomendação

Definir convenção:

- Marca pública: decidir entre `Tg Apps` ou `TG Apps`.
- Razão social: sempre `TG APPLICATIONS DESENVOLVIMENTO LTDA`.
- Founder: `Thiago Carvalho`.
- Site: `https://tgapps.dev`.
- E-mail: `support@tgapps.dev`.

Minha sugestão pragmática:

- Manter `Tg Apps` no site por enquanto.
- Usar `TG Apps` em perfis externos se quiser aparência mais institucional.
- Adicionar `alternateName` no schema no futuro, se necessário.

### Prioridade

P2.

## 9. GitHub Repo About e Topics

### O Que a Proposta Dizia

A proposta dizia que o GitHub público poderia estar melhor preenchido.

### O Que Está Correto

Provavelmente correto. GitHub é um sinal externo útil, principalmente para empresa técnica.

Repo description, website e topics ajudam crawlers e humanos a entenderem a entidade.

### O Que Estava Errado

Isso não é ajuste do site em si e não dá para resolver apenas editando este repositório local. Precisa mexer no GitHub.

Também não é o maior gargalo. Antes disso, o HTML público do próprio site deve ficar mais forte.

### Recomendação

Atualizar no GitHub:

- Description.
- Website.
- Topics.
- README se o repo for público e estratégico.

Sugestão de description:

`TG Apps builds and ships apps, CRM systems, internal tools, backend APIs, and AI integrations for founders, startups, and SMBs.`

Topics:

- `tgapps`
- `custom-software`
- `mobile-app-development`
- `flutter`
- `react-native`
- `crm`
- `ai-integrations`
- `app-rescue`
- `nearshore-development`

### Prioridade

P2.

## 10. Conteúdo Comparativo com Opinião Real

### O Que a Proposta Dizia

A proposta sugeriu artigos como app rescue vs rebuild, CRM customizado vs HubSpot, Flutter vs React Native e nearshore Brazil.

### O Que Está Correto

É uma boa ideia. Esse tipo de conteúdo pode funcionar bem para SEO e AI search porque responde perguntas reais com ponto de vista.

Também ajuda a posicionar a TG Apps como empresa que entende tradeoffs, não só como fornecedora genérica.

### O Que Estava Errado

Está cedo para isso ser prioridade. Antes de criar artigos, as páginas comerciais e cases precisam estar fortes.

Se criarmos artigos antes da base, viram conteúdo informativo sem prova suficiente.

### Recomendação

Fazer depois de:

1. HTML estático rico.
2. Páginas App Rescue / CRM / AI mais específicas.
3. Cases publicados.

Primeiros artigos recomendados:

- App rescue vs rebuild.
- How to finish a stalled mobile app.
- Custom CRM vs HubSpot for small business.
- Flutter vs React Native for startups.
- Nearshore app development Brazil for US startups.

### Prioridade

P2/P3.

## 11. Migração Para Astro ou Next SSG

### O Que a Proposta Dizia

A proposta disse que a arquitetura ideal seria Astro/Next SSG.

### O Que Está Correto

Do ponto de vista técnico, SSG real é mais limpo para SEO. Cada página nasce como HTML completo e o React passa a ser opcional ou hidratado por partes.

### O Que Estava Errado

Não é o melhor próximo passo.

O projeto atual já tem uma solução intermediária: Vite + React + script de geração de rotas. Ela é frágil, mas pode ser melhorada rapidamente.

Migrar agora custaria mais e desviaria do objetivo comercial imediato.

### Recomendação

Melhorar primeiro o gerador atual.

Reconsiderar Astro/Next se:

- O número de páginas crescer muito.
- O gerador ficar complexo demais.
- Precisarmos de blog/cases/editorial em escala.
- A manutenção do SEO por script começar a atrapalhar o desenvolvimento.

### Prioridade

P3.

## Ordem de Execução Revisada

### Fase 1: Fundação Técnica de Extração

Objetivo: fazer crawlers simples e IAs enxergarem o conteúdo real sem depender de React.

Tarefas:

- Refatorar o gerador para incluir conteúdo real das landing pages no HTML.
- Adicionar validação de sitemap.
- Adicionar validação de rotas estáticas.
- Garantir que rotas comerciais tenham HTML bruto substancial.

Prioridade: P0.

### Fase 2: Páginas Comerciais de Alta Intenção

Objetivo: tornar as páginas mais citáveis e específicas.

Páginas:

- App Rescue.
- CRM/Internal Tools.
- AI Integrations.

Tarefas:

- Adicionar FAQ.
- Adicionar exemplos de primeiro milestone.
- Adicionar dores reais.
- Adicionar stack/superfícies de integração.
- Adicionar handoff/processo.

Prioridade: P1.

### Fase 3: Prova Anônima

Objetivo: criar prova indexável sem expor clientes ou detalhes sensíveis.

Exemplos possíveis:

- plataforma operacional para empresa de serviços;
- resgate e lançamento de app inacabado;
- fluxo de documentos com IA em domínio regulado;
- experiência multilíngue com IA.

Prioridade: P1.

### Fase 4: Schema Por Rota

Objetivo: reforçar entendimento sem exagerar structured data.

Tarefas:

- `WebPage`.
- `BreadcrumbList`.
- `Service`.
- `FAQPage` quando houver FAQ visível.
- `SoftwareApplication` para apps.

Prioridade: P1.

### Fase 5: Entidade Externa

Objetivo: consolidar a TG Apps fora do site.

Tarefas:

- GitHub.
- LinkedIn.
- App stores.
- Perfis oficiais.
- `sameAs` no schema quando links estiverem definidos.

Prioridade: P2.

### Fase 6: `llms.txt` e Conteúdo Comparativo

Objetivo: complementar, não substituir, o HTML público.

Tarefas:

- Avaliar `/llms-full.txt`.
- Criar artigos comparativos.
- Evitar páginas genéricas em massa.

Prioridade: P2/P3.

## Próximo Ticket Recomendado

### Título

Gerar HTML estático rico para rotas comerciais.

### Escopo

Fazer `scripts/generate-route-html.mjs` renderizar no HTML bruto o conteúdo real de cada rota.

Para cada landing page, incluir:

- H1.
- Intro.
- Hero highlights.
- Proof items.
- Deliverables.
- Fit items.
- Sections.
- Pricing.
- FAQ.
- Final note.
- CTA.

### Critério de Pronto

Os comandos abaixo devem retornar conteúdo específico da página, não apenas H1, description e links:

```bash
curl -L https://tgapps.dev/app-rescue-and-launch-acceleration/
curl -L https://tgapps.dev/custom-crm-and-internal-tools/
curl -L https://tgapps.dev/ai-integrations-for-crm-and-internal-tools/
```

Também precisa continuar verdadeiro:

- Sitemap inclui rotas canônicas comerciais.
- Sitemap não inclui aliases.
- Sitemap não inclui anchors.
- Sitemap não inclui páginas bloqueadas/noindex.
- Build passa.
- Typecheck passa.

## Conclusão

A análise original acertou o diagnóstico macro: GEO / AI SEO depende de conteúdo útil, rastreável, indexável, específico e verificável. Mas errou ou ficou desatualizada em pontos importantes, principalmente sitemap.

O melhor caminho agora é pragmático:

1. Não migrar framework ainda.
2. Não reescrever tudo.
3. Não mexer mais em `llms.txt` como prioridade.
4. Fazer o HTML bruto refletir o conteúdo forte que já existe.
5. Depois aprofundar páginas e cases.

Isso dá o maior ganho com menor risco.
