# WebhookCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL que vai receber as notificações: http ou https, pública, sem usuário e senha e sem IPv6 literal. | 
**events** | [**List[WebhookEventType]**](WebhookEventType.md) | Eventos a assinar. | [optional] [default to []]
**generate_secret** | **bool** | Gera um segredo de assinatura HMAC para este webhook. | [optional] [default to False]
**active** | **bool** | Se o webhook começa ativo. | [optional] [default to True]

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


