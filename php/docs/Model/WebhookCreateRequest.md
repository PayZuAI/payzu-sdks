# WebhookCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | URL que vai receber as notificações: http ou https, pública, sem usuário e senha e sem IPv6 literal. |
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Eventos a assinar. | [optional]
**generate_secret** | **bool** | Gera um segredo de assinatura HMAC para este webhook. | [optional] [default to false]
**active** | **bool** | Se o webhook começa ativo. | [optional] [default to true]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
