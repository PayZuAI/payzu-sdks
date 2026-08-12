# Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Webhook id. | [optional]
**url** | **string** |  | [optional]
**active** | **bool** |  | [optional]
**events** | [**\OpenAPI\Client\Model\WebhookEventType[]**](WebhookEventType.md) | Subscribed events. Empty means all events. | [optional]
**has_secret** | **bool** | Whether the webhook has an HMAC signing secret. | [optional]
**created_at** | **\DateTime** |  | [optional]
**updated_at** | **\DateTime** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
