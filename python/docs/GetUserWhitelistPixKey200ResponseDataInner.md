# GetUserWhitelistPixKey200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**pix_key** | **str** |  | 
**pix_type** | **str** |  | 
**description** | **str** |  | [optional] 
**active** | **bool** |  | 
**created_at** | **datetime** |  | 

## Example

```python
from payzu_pix.models.get_user_whitelist_pix_key200_response_data_inner import GetUserWhitelistPixKey200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserWhitelistPixKey200ResponseDataInner from a JSON string
get_user_whitelist_pix_key200_response_data_inner_instance = GetUserWhitelistPixKey200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(GetUserWhitelistPixKey200ResponseDataInner.to_json())

# convert the object into a dict
get_user_whitelist_pix_key200_response_data_inner_dict = get_user_whitelist_pix_key200_response_data_inner_instance.to_dict()
# create an instance of GetUserWhitelistPixKey200ResponseDataInner from a dict
get_user_whitelist_pix_key200_response_data_inner_from_dict = GetUserWhitelistPixKey200ResponseDataInner.from_dict(get_user_whitelist_pix_key200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


