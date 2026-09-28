# PayZuPix::CallbackDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Unique callback ID | [optional] |
| **url** | **String** | Webhook URL that received the callback | [optional] |
| **status** | **Float** | HTTP response status code | [optional] |
| **transaction_id** | **String** | Related transaction ID | [optional] |
| **created_at** | **Time** | Date and time when the callback log was created | [optional] |
| **body** | **Object** | Request body sent (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional] |
| **response_body** | **String** | Response body received (string) | [optional] |
| **response_headers** | **Object** | Response headers (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. | [optional] |
| **response_time** | **Float** | Webhook round-trip time in milliseconds | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackDetail.new(
  id: null,
  url: null,
  status: null,
  transaction_id: null,
  created_at: null,
  body: null,
  response_body: null,
  response_headers: null,
  response_time: null
)
```

