# GetUserTransactions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Number of transactions that match the query filters. | [optional] 
**pages** | **int** | Number of pages for the limit provided, computed from total rounded up. | [optional] 
**transactions** | [**List[Transaction]**](Transaction.md) | Items of the requested page, ordered by sortBy and sortDirection. | [optional] 

## Example

```python
from payzu_pix.models.get_user_transactions200_response import GetUserTransactions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserTransactions200Response from a JSON string
get_user_transactions200_response_instance = GetUserTransactions200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserTransactions200Response.to_json())

# convert the object into a dict
get_user_transactions200_response_dict = get_user_transactions200_response_instance.to_dict()
# create an instance of GetUserTransactions200Response from a dict
get_user_transactions200_response_from_dict = GetUserTransactions200Response.from_dict(get_user_transactions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


