# PayZuPix::WebhookUpdateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url** | **String** | New delivery address, which applies to the following dispatches. | [optional] |
| **active** | **Boolean** | Turns the webhook deliveries on or pauses them. | [optional] |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | New list of subscribed events, which replaces the previous one entirely. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookUpdateRequest.new(
  url: https://sualoja.com.br/webhook,
  active: true,
  events: null
)
```

