# PayZuPix::EnqueuedCallbackItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **transaction_id** | **String** | Transação cujo callback foi enfileirado. | [optional] |
| **webhook_id** | **String** | Webhook que recebe a entrega. | [optional] |
| **event_type** | [**WebhookEventType**](WebhookEventType.md) | Evento que disparou o callback, quando o log registra. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::EnqueuedCallbackItem.new(
  transaction_id: PAYZU20260811K7M2X9QP4T000000,
  webhook_id: cm3w7k1t40000q8f2r5b9x3ad,
  event_type: null
)
```

