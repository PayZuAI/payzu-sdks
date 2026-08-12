# SentWebhookDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**webhook_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**body** | **Dict[str, object]** |  | [optional] 
**status** | **int** | HTTP status returned by your endpoint. | [optional] 
**response_headers** | **Dict[str, object]** |  | [optional] 
**response_body** | **str** |  | [optional] 
**error** | **str** |  | [optional] 
**response_time** | **int** | Response time of your endpoint, in milliseconds. | [optional] 
**event_type** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 

## Example

```python
from payzu_pix.models.sent_webhook_detail import SentWebhookDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SentWebhookDetail from a JSON string
sent_webhook_detail_instance = SentWebhookDetail.from_json(json)
# print the JSON string representation of the object
print(SentWebhookDetail.to_json())

# convert the object into a dict
sent_webhook_detail_dict = sent_webhook_detail_instance.to_dict()
# create an instance of SentWebhookDetail from a dict
sent_webhook_detail_from_dict = SentWebhookDetail.from_dict(sent_webhook_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


