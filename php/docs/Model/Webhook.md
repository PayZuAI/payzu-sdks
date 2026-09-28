# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Webhook id. | [optional]
**url** | **string** | Address in your system where PayZu sends the event notification. | [optional]
**active** | **bool** | Somente webhooks ativos recebem entregas. | [optional]
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Subscribed events. Empty means all events. | [optional]
**has_secret** | **bool** | Whether the webhook has an HMAC signing secret. | [optional]
**created_at** | **\DateTime** | Date and time the webhook was registered on the account. | [optional]
**updated_at** | **\DateTime** | Date and time of the last change to the webhook. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
