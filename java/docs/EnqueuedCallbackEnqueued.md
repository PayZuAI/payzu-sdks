

# EnqueuedCallbackEnqueued


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**count** | **Integer** | Total number of callbacks sent for queueing. Not limited by the size of items. |  [optional] |
|**truncated** | **Boolean** | True when items lists only part of the callbacks. The resend still covers all of them. |  [optional] |
|**items** | [**List&lt;EnqueuedCallbackItem&gt;**](EnqueuedCallbackItem.md) | Queued callbacks, capped at 500 entries. |  [optional] |



