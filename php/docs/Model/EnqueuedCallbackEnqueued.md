# EnqueuedCallbackEnqueued

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of callbacks sent for queueing. Not limited by the size of items. | [optional]
**truncated** | **bool** | True when items lists only part of the callbacks. The resend still covers all of them. | [optional]
**items** | [**\PayZu\Pix\Model\EnqueuedCallbackItem[]**](EnqueuedCallbackItem.md) | Queued callbacks, capped at 500 entries. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
