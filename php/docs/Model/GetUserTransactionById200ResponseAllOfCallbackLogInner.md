# GetUserTransactionById200ResponseAllOfCallbackLogInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of the delivery record; there is one record per callback attempt of the transaction. | [optional]
**url** | **string** | Address that received the callback: the callbackUrl of the transaction or the URL of the registered webhook. | [optional]
**status** | **int** | HTTP status code returned by the receiver | [optional]
**response_time** | **float** | Round-trip time in ms | [optional]
**created_at** | **\DateTime** | Date and time the callback delivery attempt was recorded. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
