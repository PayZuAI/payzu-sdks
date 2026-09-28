# PayZuPix::SentWebhookDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identifier of this delivery attempt. | [optional] |
| **webhook_id** | **String** | Webhook that originated the delivery. | [optional] |
| **transaction_id** | **String** | Pix transaction whose event was notified. | [optional] |
| **url** | **String** | Address this delivery was sent to, recorded at the time of the dispatch. | [optional] |
| **body** | **String** | Body sent in the delivery, as serialized JSON. | [optional] |
| **status** | **Integer** | HTTP status returned by your endpoint. | [optional] |
| **response_headers** | **String** | Response headers, as serialized JSON. | [optional] |
| **response_body** | **String** | Body of the response received. | [optional] |
| **error** | **String** | Message of the delivery failure. | [optional] |
| **response_time** | **Integer** | Response time of your endpoint, in milliseconds. | [optional] |
| **event_type** | **String** | Event that triggered this delivery, the same value sent in the X-Callback-Event header. | [optional] |
| **created_at** | **Time** | Moment of the delivery attempt. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SentWebhookDetail.new(
  id: null,
  webhook_id: null,
  transaction_id: null,
  url: null,
  body: null,
  status: 200,
  response_headers: null,
  response_body: null,
  error: null,
  response_time: 342,
  event_type: null,
  created_at: null
)
```

