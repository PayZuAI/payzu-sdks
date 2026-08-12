# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Webhook id. | [optional] 
**url** | **str** |  | [optional] 
**active** | **bool** |  | [optional] 
**events** | [**List[WebhookEventType]**](WebhookEventType.md) | Subscribed events. Empty means all events. | [optional] 
**has_secret** | **bool** | Whether the webhook has an HMAC signing secret. | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from payzu_pix.models.webhook import Webhook

# TODO update the JSON string below
json = "{}"
# create an instance of Webhook from a JSON string
webhook_instance = Webhook.from_json(json)
# print the JSON string representation of the object
print(Webhook.to_json())

# convert the object into a dict
webhook_dict = webhook_instance.to_dict()
# create an instance of Webhook from a dict
webhook_from_dict = Webhook.from_dict(webhook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


