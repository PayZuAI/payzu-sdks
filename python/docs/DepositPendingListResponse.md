# DepositPendingListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**has_next_page** | **bool** |  | [optional] 
**data** | [**List[DepositPending]**](DepositPending.md) |  | [optional] 

## Example

```python
from payzu_pix.models.deposit_pending_list_response import DepositPendingListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DepositPendingListResponse from a JSON string
deposit_pending_list_response_instance = DepositPendingListResponse.from_json(json)
# print the JSON string representation of the object
print(DepositPendingListResponse.to_json())

# convert the object into a dict
deposit_pending_list_response_dict = deposit_pending_list_response_instance.to_dict()
# create an instance of DepositPendingListResponse from a dict
deposit_pending_list_response_from_dict = DepositPendingListResponse.from_dict(deposit_pending_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


