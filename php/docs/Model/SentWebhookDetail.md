# SentWebhookDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of this delivery attempt. | [optional]
**webhook_id** | **string** | Webhook that originated the delivery. | [optional]
**transaction_id** | **string** | Pix transaction whose event was notified. | [optional]
**url** | **string** | Address this delivery was sent to, recorded at the time of the dispatch. | [optional]
**body** | **string** | Body sent in the delivery, as serialized JSON. | [optional]
**status** | **int** | HTTP status returned by your endpoint. | [optional]
**response_headers** | **string** | Response headers, as serialized JSON. | [optional]
**response_body** | **string** | Body of the response received. | [optional]
**error** | **string** | Message of the delivery failure. | [optional]
**response_time** | **int** | Response time of your endpoint, in milliseconds. | [optional]
**event_type** | **string** | Event that triggered this delivery, the same value sent in the X-Callback-Event header. | [optional]
**created_at** | **\DateTime** | Moment of the delivery attempt. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
