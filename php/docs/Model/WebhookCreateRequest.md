# WebhookCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | URL (http or https) that will receive the notifications. |
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Events to subscribe to. Omit or leave empty to receive all events. | [optional]
**generate_secret** | **bool** | Generate an HMAC signing secret for this webhook. | [optional] [default to false]
**active** | **bool** | Whether the webhook starts active. | [optional] [default to true]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
