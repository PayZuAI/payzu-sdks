

# WebhookWithSecret


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador do webhook. |  [optional] |
|**url** | **String** | Endereço que recebe as notificações. |  [optional] |
|**active** | **Boolean** | Indica se o webhook já começa recebendo eventos. |  [optional] |
|**events** | **List&lt;WebhookEventType&gt;** | Eventos assinados por este webhook. |  [optional] |
|**hasSecret** | **Boolean** | Indica se o webhook tem segredo de assinatura. |  [optional] |
|**createdAt** | **OffsetDateTime** |  |  [optional] |
|**updatedAt** | **OffsetDateTime** | Data e hora da última alteração do webhook. |  [optional] |
|**secret** | **String** | Segredo de assinatura HMAC. |  [optional] |



