# WebhookWithSecret


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador do webhook. | [optional] 
**url** | **str** | Endereço que recebe as notificações. | [optional] 
**active** | **bool** | Indica se o webhook já começa recebendo eventos. | [optional] 
**events** | [**List[WebhookEventType]**](WebhookEventType.md) | Eventos assinados por este webhook. | [optional] 
**has_secret** | **bool** | Indica se o webhook tem segredo de assinatura. | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração do webhook. | [optional] 
**secret** | **str** | Segredo de assinatura HMAC. | [optional] 

## Example

```python
from payzu_pix.models.webhook_with_secret import WebhookWithSecret

# TODO update the JSON string below
json = "{}"
# create an instance of WebhookWithSecret from a JSON string
webhook_with_secret_instance = WebhookWithSecret.from_json(json)
# print the JSON string representation of the object
print(WebhookWithSecret.to_json())

# convert the object into a dict
webhook_with_secret_dict = webhook_with_secret_instance.to_dict()
# create an instance of WebhookWithSecret from a dict
webhook_with_secret_from_dict = WebhookWithSecret.from_dict(webhook_with_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


