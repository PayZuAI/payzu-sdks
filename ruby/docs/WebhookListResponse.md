# PayZuPix::WebhookListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **webhooks** | [**Array&lt;Webhook&gt;**](Webhook.md) | Webhooks registered on the account. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookListResponse.new(
  webhooks: null
)
```

