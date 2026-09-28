# EnqueuedCallbackEnqueued


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total number of callbacks sent for queueing. Not limited by the size of items. | [optional] 
**truncated** | **bool** | True when items lists only part of the callbacks. The resend still covers all of them. | [optional] 
**items** | [**List[EnqueuedCallbackItem]**](EnqueuedCallbackItem.md) | Queued callbacks, capped at 500 entries. | [optional] 

## Example

```python
from payzu_pix.models.enqueued_callback_enqueued import EnqueuedCallbackEnqueued

# TODO update the JSON string below
json = "{}"
# create an instance of EnqueuedCallbackEnqueued from a JSON string
enqueued_callback_enqueued_instance = EnqueuedCallbackEnqueued.from_json(json)
# print the JSON string representation of the object
print(EnqueuedCallbackEnqueued.to_json())

# convert the object into a dict
enqueued_callback_enqueued_dict = enqueued_callback_enqueued_instance.to_dict()
# create an instance of EnqueuedCallbackEnqueued from a dict
enqueued_callback_enqueued_from_dict = EnqueuedCallbackEnqueued.from_dict(enqueued_callback_enqueued_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


