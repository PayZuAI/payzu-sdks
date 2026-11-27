# PayZuPix::ResendWebhookCallbacksRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at_from** | **Time** | Início do período das entregas. No máximo 30 dias atrás. |  |
| **created_at_to** | **Time** | Fim do período das entregas, igual ou posterior a createdAtFrom. A janela não pode passar de 7 dias. |  |
| **webhook_ids** | **Array&lt;String&gt;** | Webhooks a reenviar. Omitido: todos os webhooks ativos da conta. | [optional] |
| **transaction_ids** | **Array&lt;String&gt;** | Restringe a IDs de transação específicos. | [optional] |
| **transaction_types** | **Array&lt;String&gt;** | Filtra pelo tipo da transação. | [optional] |
| **transaction_status** | **Array&lt;String&gt;** | Filtra pelo status atual da transação. | [optional] |
| **transaction_end_to_end_ids** | **Array&lt;String&gt;** | Restringe a end-to-end IDs específicos. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ResendWebhookCallbacksRequest.new(
  created_at_from: 2026-08-05T00:00:00Z,
  created_at_to: 2026-08-11T23:59:59Z,
  webhook_ids: null,
  transaction_ids: null,
  transaction_types: null,
  transaction_status: null,
  transaction_end_to_end_ids: null
)
```

