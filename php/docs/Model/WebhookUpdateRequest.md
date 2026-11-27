# WebhookUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Novo endereço de entrega, que passa a valer nos disparos seguintes: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional]
**active** | **bool** | Liga ou pausa as entregas do webhook. | [optional]
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Nova lista de eventos assinados, que substitui a anterior por inteiro. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
