# GetUserWhitelistPixKey200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GetUserWhitelistPixKey200ResponseDataInner]**](GetUserWhitelistPixKey200ResponseDataInner.md) |  | 
**page_info** | [**GetUserWhitelistPixKey200ResponsePageInfo**](GetUserWhitelistPixKey200ResponsePageInfo.md) |  | 

## Example

```python
from payzu_pix.models.get_user_whitelist_pix_key200_response import GetUserWhitelistPixKey200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserWhitelistPixKey200Response from a JSON string
get_user_whitelist_pix_key200_response_instance = GetUserWhitelistPixKey200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserWhitelistPixKey200Response.to_json())

# convert the object into a dict
get_user_whitelist_pix_key200_response_dict = get_user_whitelist_pix_key200_response_instance.to_dict()
# create an instance of GetUserWhitelistPixKey200Response from a dict
get_user_whitelist_pix_key200_response_from_dict = GetUserWhitelistPixKey200Response.from_dict(get_user_whitelist_pix_key200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


