

# Webhook


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Webhook id. |  [optional] |
|**url** | **String** | Address in your system where PayZu sends the event notification. |  [optional] |
|**active** | **Boolean** | Somente webhooks ativos recebem entregas. |  [optional] |
|**events** | **List&lt;WebhookEventType&gt;** | Subscribed events. Empty means all events. |  [optional] |
|**hasSecret** | **Boolean** | Whether the webhook has an HMAC signing secret. |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time the webhook was registered on the account. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the webhook. |  [optional] |



