# EnqueuedCallback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enqueued** | [**EnqueuedCallbackEnqueued**](EnqueuedCallbackEnqueued.md) |  | [optional] 

## Example

```python
from payzu_pix.models.enqueued_callback import EnqueuedCallback

# TODO update the JSON string below
json = "{}"
# create an instance of EnqueuedCallback from a JSON string
enqueued_callback_instance = EnqueuedCallback.from_json(json)
# print the JSON string representation of the object
print(EnqueuedCallback.to_json())

# convert the object into a dict
enqueued_callback_dict = enqueued_callback_instance.to_dict()
# create an instance of EnqueuedCallback from a dict
enqueued_callback_from_dict = EnqueuedCallback.from_dict(enqueued_callback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


