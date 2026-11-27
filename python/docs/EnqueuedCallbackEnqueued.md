# EnqueuedCallbackEnqueued


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total de callbacks enviados para enfileiramento. Não é limitado pelo tamanho de items. | [optional] 
**truncated** | **bool** | true quando items lista apenas parte dos callbacks. O reenvio cobre todos mesmo assim. | [optional] 
**items** | [**List[EnqueuedCallbackItem]**](EnqueuedCallbackItem.md) | Callbacks enfileirados, no máximo 500 entradas. | [optional] 

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


