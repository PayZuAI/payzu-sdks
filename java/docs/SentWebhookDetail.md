

# SentWebhookDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of this delivery attempt. |  [optional] |
|**webhookId** | **String** | Webhook that originated the delivery. |  [optional] |
|**transactionId** | **String** | Pix transaction whose event was notified. |  [optional] |
|**url** | **String** | Address this delivery was sent to, recorded at the time of the dispatch. |  [optional] |
|**body** | **String** | Body sent in the delivery, as serialized JSON. |  [optional] |
|**status** | **Integer** | HTTP status returned by your endpoint. |  [optional] |
|**responseHeaders** | **String** | Response headers, as serialized JSON. |  [optional] |
|**responseBody** | **String** | Body of the response received. |  [optional] |
|**error** | **String** | Message of the delivery failure. |  [optional] |
|**responseTime** | **Integer** | Response time of your endpoint, in milliseconds. |  [optional] |
|**eventType** | **String** | Event that triggered this delivery, the same value sent in the X-Callback-Event header. |  [optional] |
|**createdAt** | **OffsetDateTime** | Moment of the delivery attempt. |  [optional] |



