# EnqueuedCallbackItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction_id** | **str** | Transaction whose callback was queued. | [optional] 
**webhook_id** | **str** | Webhook that receives the delivery. | [optional] 
**event_type** | [**WebhookEventType**](WebhookEventType.md) | Event that triggered the callback, when the log records it. | [optional] 

## Example

```python
from payzu_pix.models.enqueued_callback_item import EnqueuedCallbackItem

# TODO update the JSON string below
json = "{}"
# create an instance of EnqueuedCallbackItem from a JSON string
enqueued_callback_item_instance = EnqueuedCallbackItem.from_json(json)
# print the JSON string representation of the object
print(EnqueuedCallbackItem.to_json())

# convert the object into a dict
enqueued_callback_item_dict = enqueued_callback_item_instance.to_dict()
# create an instance of EnqueuedCallbackItem from a dict
enqueued_callback_item_from_dict = EnqueuedCallbackItem.from_dict(enqueued_callback_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


