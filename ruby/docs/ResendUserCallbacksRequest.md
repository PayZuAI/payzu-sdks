# PayZuPix::ResendUserCallbacksRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **created_at_from** | **Time** | Início do período. No máximo 30 dias atrás. |  |
| **created_at_to** | **Time** | Fim do período, igual ou posterior a createdAtFrom. A janela entre início e fim não pode passar de 7 dias. |  |
| **transaction_ids** | **Array&lt;String&gt;** | Restringe a IDs de transação específicos | [optional] |
| **transaction_types** | **Array&lt;String&gt;** | Filtra por tipo de transação | [optional] |
| **transaction_status** | **Array&lt;String&gt;** | Filtra por status da transação | [optional] |
| **transaction_end_to_end_ids** | **Array&lt;String&gt;** | Restringe a IDs end-to-end Pix específicos | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ResendUserCallbacksRequest.new(
  created_at_from: 2026-08-05T00:00:00Z,
  created_at_to: 2026-08-11T23:59:59Z,
  transaction_ids: null,
  transaction_types: null,
  transaction_status: null,
  transaction_end_to_end_ids: null
)
```

