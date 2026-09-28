# SentWebhookDetailResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sent_webhook_details** | [**SentWebhookDetail**](SentWebhookDetail.md) |  | 

## Example

```python
from payzu_pix.models.sent_webhook_detail_response import SentWebhookDetailResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SentWebhookDetailResponse from a JSON string
sent_webhook_detail_response_instance = SentWebhookDetailResponse.from_json(json)
# print the JSON string representation of the object
print(SentWebhookDetailResponse.to_json())

# convert the object into a dict
sent_webhook_detail_response_dict = sent_webhook_detail_response_instance.to_dict()
# create an instance of SentWebhookDetailResponse from a dict
sent_webhook_detail_response_from_dict = SentWebhookDetailResponse.from_dict(sent_webhook_detail_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


