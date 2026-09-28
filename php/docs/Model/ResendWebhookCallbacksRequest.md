# ResendWebhookCallbacksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **\DateTime** | Start of the delivery period. At most 30 days ago. |
**created_at_to** | **\DateTime** | End of the delivery period, on or after createdAtFrom. The window cannot exceed 7 days. |
**webhook_ids** | **string[]** | Webhooks to resend. Omitted: all active webhooks of the account. | [optional]
**transaction_ids** | **string[]** | Restrict to specific transaction IDs. | [optional]
**transaction_types** | **string[]** | Filter by transaction type. | [optional]
**transaction_status** | **string[]** | Filter by the current transaction status. | [optional]
**transaction_end_to_end_ids** | **string[]** | Restrict to specific end-to-end IDs. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
