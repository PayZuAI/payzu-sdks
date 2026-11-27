# GetUserPixKeys200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pix_key** | **str** | Chave Pix de recebimento da conta. | 
**account_name** | **str** | Titular da conta da chave. | 
**account_document** | **str** | CPF ou CNPJ do titular da conta da chave. | 
**institution_name** | **str** | Instituição da conta da chave. | 

## Example

```python
from payzu_pix.models.get_user_pix_keys200_response import GetUserPixKeys200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserPixKeys200Response from a JSON string
get_user_pix_keys200_response_instance = GetUserPixKeys200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserPixKeys200Response.to_json())

# convert the object into a dict
get_user_pix_keys200_response_dict = get_user_pix_keys200_response_instance.to_dict()
# create an instance of GetUserPixKeys200Response from a dict
get_user_pix_keys200_response_from_dict = GetUserPixKeys200Response.from_dict(get_user_pix_keys200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


