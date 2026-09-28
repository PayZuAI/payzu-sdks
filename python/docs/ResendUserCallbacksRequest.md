# ResendUserCallbacksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **datetime** | Start of the period. At most 30 days ago. | 
**created_at_to** | **datetime** | End of the period, on or after createdAtFrom. The window between start and end cannot exceed 7 days. | 
**transaction_ids** | **List[str]** | Restrict to specific transaction IDs | [optional] 
**transaction_types** | **List[str]** | Filter by transaction type | [optional] 
**transaction_status** | **List[str]** | Filter by transaction status | [optional] 
**transaction_end_to_end_ids** | **List[str]** | Restrict to specific Pix end-to-end IDs | [optional] 

## Example

```python
from payzu_pix.models.resend_user_callbacks_request import ResendUserCallbacksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResendUserCallbacksRequest from a JSON string
resend_user_callbacks_request_instance = ResendUserCallbacksRequest.from_json(json)
# print the JSON string representation of the object
print(ResendUserCallbacksRequest.to_json())

# convert the object into a dict
resend_user_callbacks_request_dict = resend_user_callbacks_request_instance.to_dict()
# create an instance of ResendUserCallbacksRequest from a dict
resend_user_callbacks_request_from_dict = ResendUserCallbacksRequest.from_dict(resend_user_callbacks_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


