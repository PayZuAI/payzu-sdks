# WebhookCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | HTTPS URL that will receive the notifications. |
**events** | [**\OpenAPI\Client\Model\WebhookEventType[]**](WebhookEventType.md) | Events to subscribe to. Omit or leave empty to receive all events. | [optional]
**generate_secret** | **bool** | Generate an HMAC signing secret for this webhook. | [optional] [default to false]
**active** | **bool** | Whether the webhook starts active. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
