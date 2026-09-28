# PayZuPix::Webhook

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Webhook id. | [optional] |
| **url** | **String** | Address in your system where PayZu sends the event notification. | [optional] |
| **active** | **Boolean** | Somente webhooks ativos recebem entregas. | [optional] |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Subscribed events. Empty means all events. | [optional] |
| **has_secret** | **Boolean** | Whether the webhook has an HMAC signing secret. | [optional] |
| **created_at** | **Time** | Date and time the webhook was registered on the account. | [optional] |
| **updated_at** | **Time** | Date and time of the last change to the webhook. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Webhook.new(
  id: cm3w7k1t40000q8f2r5b9x3ad,
  url: https://sualoja.com.br/webhook,
  active: true,
  events: null,
  has_secret: true,
  created_at: null,
  updated_at: null
)
```

