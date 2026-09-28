# ResendWebhookCallbacksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **datetime** | Start of the delivery period. At most 30 days ago. | 
**created_at_to** | **datetime** | End of the delivery period, on or after createdAtFrom. The window cannot exceed 7 days. | 
**webhook_ids** | **List[str]** | Webhooks to resend. Omitted: all active webhooks of the account. | [optional] 
**transaction_ids** | **List[str]** | Restrict to specific transaction IDs. | [optional] 
**transaction_types** | **List[str]** | Filter by transaction type. | [optional] 
**transaction_status** | **List[str]** | Filter by the current transaction status. | [optional] 
**transaction_end_to_end_ids** | **List[str]** | Restrict to specific end-to-end IDs. | [optional] 

## Example

```python
from payzu_pix.models.resend_webhook_callbacks_request import ResendWebhookCallbacksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResendWebhookCallbacksRequest from a JSON string
resend_webhook_callbacks_request_instance = ResendWebhookCallbacksRequest.from_json(json)
# print the JSON string representation of the object
print(ResendWebhookCallbacksRequest.to_json())

# convert the object into a dict
resend_webhook_callbacks_request_dict = resend_webhook_callbacks_request_instance.to_dict()
# create an instance of ResendWebhookCallbacksRequest from a dict
resend_webhook_callbacks_request_from_dict = ResendWebhookCallbacksRequest.from_dict(resend_webhook_callbacks_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


