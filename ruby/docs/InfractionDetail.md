# PayZuPix::InfractionDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da contestação dentro da PayZu, usado nas rotas de consulta e no envio da defesa. | [optional] |
| **protocol** | **String** | Código da contestação no Bacen. | [optional] |
| **status** | **String** | Situação atual da contestação. | [optional] |
| **type** | **String** | Tipo da contestação: REFUND_REQUEST, FRAUD ou REFUND_CANCELLED. | [optional] |
| **reported_by** | **String** | Lado que abriu a contestação: DEBITED_PARTICIPANT ou CREDITED_PARTICIPANT. | [optional] |
| **report_details** | **String** | Motivo informado por quem abriu a contestação, no texto enviado pelo banco parceiro. | [optional] |
| **analysis_result** | **String** | Desfecho da análise: AGREED ou DISAGREED. | [optional] |
| **analysis_details** | **String** | Texto complementar sobre a decisão da análise, quando o banco parceiro envia essa informação. | [optional] |
| **reported_at** | **Time** | Momento em que a contestação foi aberta. | [optional] |
| **expires_at** | **Time** | Prazo final para enviar a defesa desta contestação. | [optional] |
| **transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] |
| **defense_history** | [**Array&lt;DefenseHistoryEntry&gt;**](DefenseHistoryEntry.md) | Defesas já enviadas para esta contestação, com texto, status e anexos de cada uma. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionDetail.new(
  id: null,
  protocol: null,
  status: null,
  type: null,
  reported_by: null,
  report_details: null,
  analysis_result: null,
  analysis_details: null,
  reported_at: null,
  expires_at: null,
  transaction: null,
  defense_history: null
)
```

