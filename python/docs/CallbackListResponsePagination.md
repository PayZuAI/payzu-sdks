# CallbackListResponsePagination

Página e limite usados, e se há próxima página.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Página atual | [optional] 
**limit** | **int** | Itens por página | [optional] 
**has_next_page** | **bool** | Indica se há uma próxima página | [optional] 

## Example

```python
from payzu_pix.models.callback_list_response_pagination import CallbackListResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackListResponsePagination from a JSON string
callback_list_response_pagination_instance = CallbackListResponsePagination.from_json(json)
# print the JSON string representation of the object
print(CallbackListResponsePagination.to_json())

# convert the object into a dict
callback_list_response_pagination_dict = callback_list_response_pagination_instance.to_dict()
# create an instance of CallbackListResponsePagination from a dict
callback_list_response_pagination_from_dict = CallbackListResponsePagination.from_dict(callback_list_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


