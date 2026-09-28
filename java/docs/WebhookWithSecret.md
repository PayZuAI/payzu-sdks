

# WebhookWithSecret


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Webhook identifier. |  [optional] |
|**url** | **String** | Address that receives the notifications. |  [optional] |
|**active** | **Boolean** | Indicates whether the webhook starts out receiving events. |  [optional] |
|**events** | **List&lt;WebhookEventType&gt;** | Events subscribed by this webhook. |  [optional] |
|**hasSecret** | **Boolean** | Indicates whether the webhook has a signing secret. |  [optional] |
|**createdAt** | **OffsetDateTime** |  |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the webhook. |  [optional] |
|**secret** | **String** | HMAC signing secret. Shown only on creation and on rotate-secret. Store it now. |  [optional] |



