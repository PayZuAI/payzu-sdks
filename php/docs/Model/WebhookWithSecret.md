# WebhookWithSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Webhook identifier. | [optional]
**url** | **string** | Address that receives the notifications. | [optional]
**active** | **bool** | Indicates whether the webhook starts out receiving events. | [optional]
**events** | [**\PayZu\Pix\Model\WebhookEventType[]**](WebhookEventType.md) | Events subscribed by this webhook. | [optional]
**has_secret** | **bool** | Indicates whether the webhook has a signing secret. | [optional]
**created_at** | **\DateTime** |  | [optional]
**updated_at** | **\DateTime** | Date and time of the last change to the webhook. | [optional]
**secret** | **string** | HMAC signing secret. Shown only on creation and on rotate-secret. Store it now. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
