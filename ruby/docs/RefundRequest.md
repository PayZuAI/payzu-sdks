# PayZuPix::RefundRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Float** | Amount in BRL to refund. Omit to refund the full transaction amount. Partial refunds are allowed up to the original amount. | [optional] |
| **description** | **String** | Free-text description for the refund. | [optional] |
| **client_reference** | **String** | Idempotency key. Reusing it with the same amount replays the existing refund; reusing it with a different amount is rejected. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::RefundRequest.new(
  amount: 30.5,
  description: Estorno solicitado pelo cliente,
  client_reference: refund-2026-0001
)
```

