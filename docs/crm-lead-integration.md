# Integracao do formulario com o CRM

O formulario publico envia para a rota estavel e de mesma origem:

```text
POST /api/contact-lead
```

Em producao, o Apache encaminha somente essa rota ao intake publico versionado
do CRM. O navegador nao recebe credencial nem conhece regras internas do CRM.
Em desenvolvimento, o proxy do Vite usa `CRM_SITE_LEAD_TARGET` e
`CRM_SITE_LEAD_INTEGRATION_ID`.

O corpo envia `name` e `email` como campos obrigatorios, alem dos campos
comerciais opcionais, atribuicao de campanha, um `visitorId` anonimo e uma chave
nova em `Idempotency-Key` para cada tentativa. `selectedPlan` registra qual
plano chamou a atencao (`starter`, `growth`, `embedded` ou `custom`), sem
representar contratacao. A mensagem e opcional, exceto quando `selectedPlan`
for `custom`; nesse caso ela e obrigatoria.

O recibo comum permanece:

```json
{"accepted": true}
```

Quando o backend consegue criar e enviar imediatamente um novo convite do
Portal do Cliente, acrescenta a confirmacao:

```json
{
  "accepted": true,
  "portal_access": {"email_sent": true}
}
```

Somente essa confirmacao autoriza a interface a afirmar que o link foi enviado.
Retornos, repeticoes idempotentes, honeypot e entregas pendentes continuam com o
recibo comum. A fila do CRM permanece responsavel por retentativas que nao forem
confirmadas durante a requisicao.

O campo adicional revela que um novo convite foi entregue para aquela
submissao. Por isso, ele nao deve incluir IDs, existencia previa, etapa comercial
ou detalhes de erro. Rate limit, origem permitida, honeypot e monitoramento do CRM
continuam obrigatorios.
# Ajuste de formulario e convite - 2026-09-06

Nome e email sao obrigatorios. Os demais campos sao opcionais; Custom exige
mensagem. O telefone usa o componente React intl-tel-input com busca por pais,
padrao US em EN e BR em PT, e envia E.164 e countryCode. Detalhes adicionais
ficam recolhidos; firstMilestone aparece apenas para first_milestone_guarantee.
Trocar essa escolha limpa o campo. A confirmacao aparece em popup com overlay,
foco e Escape; texto de acesso ao portal depende de portal_access.email_sent.

O backend provisiona a conta Firebase antes de enviar o link web. A resposta
email_sent=true confirma aceite do envio pelo provedor, nao entrega na caixa
postal. A nova submissao por email existente atualiza o lead sem reenviar.
Teste real em 2026-09-06 confirmou o envio e o valor USD 2000 para Growth.
