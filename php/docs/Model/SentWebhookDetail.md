# SentWebhookDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador desta tentativa de entrega. | [optional]
**webhook_id** | **string** | Webhook que originou a entrega. | [optional]
**transaction_id** | **string** | Transação Pix cujo evento foi notificado. | [optional]
**url** | **string** | Endereço para onde esta entrega foi feita, gravado no momento do disparo. | [optional]
**body** | **string** | Corpo enviado no disparo, em JSON serializado. | [optional]
**status** | **int** | Status HTTP retornado pelo seu endpoint. | [optional]
**response_headers** | **string** | Headers da resposta, em JSON serializado. | [optional]
**response_body** | **string** | Corpo da resposta recebida. | [optional]
**error** | **string** | Mensagem da falha na entrega. | [optional]
**response_time** | **int** | Tempo de resposta do seu endpoint, em milissegundos. | [optional]
**event_type** | **string** | Evento que disparou esta entrega, o mesmo valor enviado no cabeçalho X-Callback-Event. | [optional]
**created_at** | **\DateTime** | Momento da tentativa de entrega. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
