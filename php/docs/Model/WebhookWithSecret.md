# WebhookWithSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional]
**url** | **string** |  | [optional]
**active** | **bool** |  | [optional]
**events** | [**\OpenAPI\Client\Model\WebhookEventType[]**](WebhookEventType.md) |  | [optional]
**has_secret** | **bool** |  | [optional]
**created_at** | **\DateTime** |  | [optional]
**updated_at** | **\DateTime** |  | [optional]
**secret** | **string** | HMAC signing secret. Shown only on creation and on rotate-secret. Store it now. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
