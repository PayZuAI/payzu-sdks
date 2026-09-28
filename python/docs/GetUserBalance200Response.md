# GetUserBalance200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance_available** | **float** | Balance free for withdrawals and transfers, in reais, of the account that owns the token. | [optional] 
**balance_blocked** | **float** | Balance held and unavailable, in reais. | [optional] 

## Example

```python
from payzu_pix.models.get_user_balance200_response import GetUserBalance200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserBalance200Response from a JSON string
get_user_balance200_response_instance = GetUserBalance200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserBalance200Response.to_json())

# convert the object into a dict
get_user_balance200_response_dict = get_user_balance200_response_instance.to_dict()
# create an instance of GetUserBalance200Response from a dict
get_user_balance200_response_from_dict = GetUserBalance200Response.from_dict(get_user_balance200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


