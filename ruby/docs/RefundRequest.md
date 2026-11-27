# PayZuPix::RefundRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Float** | Valor a devolver. | [optional] |
| **description** | **String** | Descrição livre da devolução. | [optional] |
| **client_reference** | **String** | Chave de idempotência. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::RefundRequest.new(
  amount: 30.5,
  description: Devolução pedida pelo cliente,
  client_reference: refund-2026-0001
)
```

