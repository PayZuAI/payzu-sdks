

# CallbackDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique callback ID |  [optional] |
|**url** | **String** | Webhook URL that received the callback |  [optional] |
|**status** | **BigDecimal** | HTTP response status code |  [optional] |
|**transactionId** | **String** | Related transaction ID |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time when the callback log was created |  [optional] |
|**body** | **Object** | Request body sent (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. |  [optional] |
|**responseBody** | **String** | Response body received (string) |  [optional] |
|**responseHeaders** | **Object** | Response headers (parsed JSON). When the content is not valid JSON, it comes as &#x60;{ \&quot;raw\&quot;: \&quot;&lt;text&gt;\&quot; }&#x60;. |  [optional] |
|**responseTime** | **BigDecimal** | Webhook round-trip time in milliseconds |  [optional] |



