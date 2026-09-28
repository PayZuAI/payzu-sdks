# PostInternalTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payer_account_number** | **str** | Payer account number (6 digits). Must match the authenticated user&#39;s accountNumber. | 
**receiver_account_number** | **str** | Destination account number (6 digits). | 
**amount** | **float** | Transfer amount in BRL, with at most 2 decimal places. | 
**description** | **str** | Optional transfer description. | [optional] 
**callback_url** | **str** | URL for transaction notifications (http or https). | [optional] 
**client_reference** | **str** | External reference for idempotency / reconciliation. | [optional] 
**virtual_account** | **str** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Example

```python
from payzu_pix.models.post_internal_transfer_request import PostInternalTransferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostInternalTransferRequest from a JSON string
post_internal_transfer_request_instance = PostInternalTransferRequest.from_json(json)
# print the JSON string representation of the object
print(PostInternalTransferRequest.to_json())

# convert the object into a dict
post_internal_transfer_request_dict = post_internal_transfer_request_instance.to_dict()
# create an instance of PostInternalTransferRequest from a dict
post_internal_transfer_request_from_dict = PostInternalTransferRequest.from_dict(post_internal_transfer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


