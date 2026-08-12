# WebhookCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | HTTPS URL that will receive the notifications. | 
**events** | [**List[WebhookEventType]**](WebhookEventType.md) | Events to subscribe to. Omit or leave empty to receive all events. | [optional] [default to []]
**generate_secret** | **bool** | Generate an HMAC signing secret for this webhook. | [optional] [default to False]
**active** | **bool** | Whether the webhook starts active. | [optional] 

## Example

```python
from payzu_pix.models.webhook_create_request import WebhookCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookCreateRequest from a JSON string
webhook_create_request_instance = WebhookCreateRequest.from_json(json)
# print the JSON string representation of the object
print(WebhookCreateRequest.to_json())

# convert the object into a dict
webhook_create_request_dict = webhook_create_request_instance.to_dict()
# create an instance of WebhookCreateRequest from a dict
webhook_create_request_from_dict = WebhookCreateRequest.from_dict(webhook_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


