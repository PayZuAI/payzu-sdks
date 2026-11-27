

# Webhook


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Id do webhook. |  [optional] |
|**url** | **String** | Endereço do seu sistema para onde a PayZu envia a notificação do evento. |  [optional] |
|**active** | **Boolean** | Somente webhooks ativos recebem entregas. |  [optional] |
|**events** | **List&lt;WebhookEventType&gt;** | Eventos assinados. |  [optional] |
|**hasSecret** | **Boolean** | Indica se o webhook tem segredo de assinatura HMAC. |  [optional] |
|**createdAt** | **OffsetDateTime** | Data e hora em que o webhook foi cadastrado na conta. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Data e hora da última alteração do webhook. |  [optional] |



