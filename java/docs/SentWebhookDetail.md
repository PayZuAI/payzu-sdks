

# SentWebhookDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador desta tentativa de entrega. |  [optional] |
|**webhookId** | **String** | Webhook que originou a entrega. |  [optional] |
|**transactionId** | **String** | Transação Pix cujo evento foi notificado. |  [optional] |
|**url** | **String** | Endereço para onde esta entrega foi feita, gravado no momento do disparo. |  [optional] |
|**body** | **String** | Corpo enviado no disparo, em JSON serializado. |  [optional] |
|**status** | **Integer** | Status HTTP retornado pelo seu endpoint. |  [optional] |
|**responseHeaders** | **String** | Headers da resposta, em JSON serializado. |  [optional] |
|**responseBody** | **String** | Corpo da resposta recebida. |  [optional] |
|**error** | **String** | Mensagem da falha na entrega. |  [optional] |
|**responseTime** | **Integer** | Tempo de resposta do seu endpoint, em milissegundos. |  [optional] |
|**eventType** | **String** | Evento que disparou esta entrega, o mesmo valor enviado no cabeçalho X-Callback-Event. |  [optional] |
|**createdAt** | **OffsetDateTime** | Momento da tentativa de entrega. |  [optional] |



