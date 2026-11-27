# GetUserWhitelistCnpj200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GetUserWhitelistCnpj200ResponseDataInner]**](GetUserWhitelistCnpj200ResponseDataInner.md) |  | 
**page_info** | [**GetUserWhitelistCnpj200ResponsePageInfo**](GetUserWhitelistCnpj200ResponsePageInfo.md) |  | 

## Example

```python
from payzu_pix.models.get_user_whitelist_cnpj200_response import GetUserWhitelistCnpj200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserWhitelistCnpj200Response from a JSON string
get_user_whitelist_cnpj200_response_instance = GetUserWhitelistCnpj200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserWhitelistCnpj200Response.to_json())

# convert the object into a dict
get_user_whitelist_cnpj200_response_dict = get_user_whitelist_cnpj200_response_instance.to_dict()
# create an instance of GetUserWhitelistCnpj200Response from a dict
get_user_whitelist_cnpj200_response_from_dict = GetUserWhitelistCnpj200Response.from_dict(get_user_whitelist_cnpj200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


