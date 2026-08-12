# RefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL to refund. Omit to refund the full transaction amount. Partial refunds are allowed up to the original amount. | [optional]
**description** | **string** | Free-text description for the refund. | [optional]
**client_reference** | **string** | Idempotency key. Reusing it with the same amount replays the existing refund; reusing it with a different amount is rejected. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
