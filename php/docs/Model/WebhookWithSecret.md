# WebhookWithSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador do webhook. | [optional]
**url** | **string** | Endereço que recebe as notificações. | [optional]
**active** | **bool** | Indica se o webhook já começa recebendo eventos. | [optional]
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Eventos assinados por este webhook. | [optional]
**has_secret** | **bool** | Indica se o webhook tem segredo de assinatura. | [optional]
**created_at** | **\DateTime** |  | [optional]
**updated_at** | **\DateTime** | Data e hora da última alteração do webhook. | [optional]
**secret** | **string** | Segredo de assinatura HMAC. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
