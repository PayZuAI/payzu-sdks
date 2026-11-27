# GetUserWhitelistCnpj200ResponsePageInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_cursor** | **str** | Cursor da próxima página; não vem na última. | [optional] 
**has_next_page** | **bool** |  | 

## Example

```python
from payzu_pix.models.get_user_whitelist_cnpj200_response_page_info import GetUserWhitelistCnpj200ResponsePageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserWhitelistCnpj200ResponsePageInfo from a JSON string
get_user_whitelist_cnpj200_response_page_info_instance = GetUserWhitelistCnpj200ResponsePageInfo.from_json(json)
# print the JSON string representation of the object
print(GetUserWhitelistCnpj200ResponsePageInfo.to_json())

# convert the object into a dict
get_user_whitelist_cnpj200_response_page_info_dict = get_user_whitelist_cnpj200_response_page_info_instance.to_dict()
# create an instance of GetUserWhitelistCnpj200ResponsePageInfo from a dict
get_user_whitelist_cnpj200_response_page_info_from_dict = GetUserWhitelistCnpj200ResponsePageInfo.from_dict(get_user_whitelist_cnpj200_response_page_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


