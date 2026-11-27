# PayZuPix::InfractionChangedData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da infração na PayZu. Use em GET /user/infractions/{id} e na defesa. |  |
| **protocol** | **String** | Código da infração no Bacen. |  |
| **status** | **String** | Situação da infração. Só &#x60;OPEN&#x60; aceita defesa, e &#x60;CLOSED&#x60; traz o resultado em &#x60;analysisResult&#x60;. |  |
| **type** | **String** | Tipo informado na abertura. |  |
| **report_details** | **String** | Motivo informado por quem abriu a infração. |  |
| **reported_by** | **String** | Quem abriu: &#x60;DEBITED_PARTICIPANT&#x60;, a instituição da conta debitada, ou &#x60;CREDITED_PARTICIPANT&#x60;, a da conta creditada. |  |
| **analysis_result** | **String** | Resultado da análise: &#x60;AGREED&#x60;, a contestação procede e a devolução ao pagador segue, avisada em &#x60;TRANSACTION_REFUNDED&#x60;; &#x60;DISAGREED&#x60;, a contestação não procede. |  |
| **analysis_details** | **String** | Texto da decisão, quando a instituição envia. |  |
| **reported_at** | **Time** | Abertura da infração. |  |
| **expires_at** | **Time** | Prazo final para enviar a defesa. |  |
| **created_at** | **Time** | Registro da infração na PayZu. |  |
| **updated_at** | **Time** | Última mudança da infração. Com &#x60;infraction.id&#x60;, serve para deduplicar e ordenar. |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionChangedData.new(
  id: null,
  protocol: null,
  status: null,
  type: null,
  report_details: null,
  reported_by: null,
  analysis_result: null,
  analysis_details: null,
  reported_at: null,
  expires_at: null,
  created_at: null,
  updated_at: null
)
```

