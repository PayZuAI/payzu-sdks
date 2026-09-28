# SentWebhookDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of this delivery attempt. | [optional] 
**webhook_id** | **str** | Webhook that originated the delivery. | [optional] 
**transaction_id** | **str** | Pix transaction whose event was notified. | [optional] 
**url** | **str** | Address this delivery was sent to, recorded at the time of the dispatch. | [optional] 
**body** | **str** | Body sent in the delivery, as serialized JSON. | [optional] 
**status** | **int** | HTTP status returned by your endpoint. | [optional] 
**response_headers** | **str** | Response headers, as serialized JSON. | [optional] 
**response_body** | **str** | Body of the response received. | [optional] 
**error** | **str** | Message of the delivery failure. | [optional] 
**response_time** | **int** | Response time of your endpoint, in milliseconds. | [optional] 
**event_type** | **str** | Event that triggered this delivery, the same value sent in the X-Callback-Event header. | [optional] 
**created_at** | **datetime** | Moment of the delivery attempt. | [optional] 

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


