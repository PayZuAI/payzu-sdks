# WebhookUpdateRequest

Informe pelo menos um campo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Novo endereço de entrega, que passa a valer nos disparos seguintes: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**active** | **bool** | Liga ou pausa as entregas do webhook. | [optional] 
**events** | [**List[WebhookEventType]**](WebhookEventType.md) | Nova lista de eventos assinados, que substitui a anterior por inteiro. | [optional] 

## Example

```python
from payzu_pix.models.webhook_update_request import WebhookUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookUpdateRequest from a JSON string
webhook_update_request_instance = WebhookUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(WebhookUpdateRequest.to_json())

# convert the object into a dict
webhook_update_request_dict = webhook_update_request_instance.to_dict()
# create an instance of WebhookUpdateRequest from a dict
webhook_update_request_from_dict = WebhookUpdateRequest.from_dict(webhook_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


