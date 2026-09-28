# PayZuPix::WebhookWithSecret

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Webhook identifier. | [optional] |
| **url** | **String** | Address that receives the notifications. | [optional] |
| **active** | **Boolean** | Indicates whether the webhook starts out receiving events. | [optional] |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Events subscribed by this webhook. | [optional] |
| **has_secret** | **Boolean** | Indicates whether the webhook has a signing secret. | [optional] |
| **created_at** | **Time** |  | [optional] |
| **updated_at** | **Time** | Date and time of the last change to the webhook. | [optional] |
| **secret** | **String** | HMAC signing secret. Shown only on creation and on rotate-secret. Store it now. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookWithSecret.new(
  id: cm3w7k1t40000q8f2r5b9x3ad,
  url: https://sualoja.com.br/webhook,
  active: true,
  events: null,
  has_secret: true,
  created_at: null,
  updated_at: null,
  secret: q7Kx2mV9pL4sR8tW1nB6cY3hJ5dF0gZ-aE_uT7iO2kM
)
```

