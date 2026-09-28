# PayZuPix::WebhookCreateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url** | **String** | URL (http or https) that will receive the notifications. |  |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Events to subscribe to. Omit or leave empty to receive all events. | [optional] |
| **generate_secret** | **Boolean** | Generate an HMAC signing secret for this webhook. | [optional][default to false] |
| **active** | **Boolean** | Whether the webhook starts active. | [optional][default to true] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookCreateRequest.new(
  url: https://sualoja.com.br/webhook,
  events: null,
  generate_secret: null,
  active: true
)
```

