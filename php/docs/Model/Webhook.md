# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Id do webhook. | [optional]
**url** | **string** | Endereço do seu sistema para onde a PayZu envia a notificação do evento. | [optional]
**active** | **bool** | Somente webhooks ativos recebem entregas. | [optional]
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Eventos assinados. | [optional]
**has_secret** | **bool** | Indica se o webhook tem segredo de assinatura HMAC. | [optional]
**created_at** | **\DateTime** | Data e hora em que o webhook foi cadastrado na conta. | [optional]
**updated_at** | **\DateTime** | Data e hora da última alteração do webhook. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
