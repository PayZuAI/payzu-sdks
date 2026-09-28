

# WebhookCreateRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**url** | **URI** | URL (http or https) that will receive the notifications. |  |
|**events** | **List&lt;WebhookEventType&gt;** | Events to subscribe to. Omit or leave empty to receive all events. |  [optional] |
|**generateSecret** | **Boolean** | Generate an HMAC signing secret for this webhook. |  [optional] |
|**active** | **Boolean** | Whether the webhook starts active. |  [optional] |



