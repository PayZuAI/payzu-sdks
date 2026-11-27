# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id do webhook. | [optional] 
**url** | **str** | Endereço do seu sistema para onde a PayZu envia a notificação do evento. | [optional] 
**active** | **bool** | Somente webhooks ativos recebem entregas. | [optional] 
**events** | [**List[WebhookEventType]**](WebhookEventType.md) | Eventos assinados. | [optional] 
**has_secret** | **bool** | Indica se o webhook tem segredo de assinatura HMAC. | [optional] 
**created_at** | **datetime** | Data e hora em que o webhook foi cadastrado na conta. | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração do webhook. | [optional] 

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


