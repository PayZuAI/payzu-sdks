# ApiErrorDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | Caminho do campo rejeitado na validação, sem a barra inicial. | 
**message** | **str** | Motivo da rejeição daquele campo, em português. | 

## Example

```python
from payzu_pix.models.api_error_details_inner import ApiErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiErrorDetailsInner from a JSON string
api_error_details_inner_instance = ApiErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(ApiErrorDetailsInner.to_json())

# convert the object into a dict
api_error_details_inner_dict = api_error_details_inner_instance.to_dict()
# create an instance of ApiErrorDetailsInner from a dict
api_error_details_inner_from_dict = ApiErrorDetailsInner.from_dict(api_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


