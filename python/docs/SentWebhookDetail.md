# SentWebhookDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador desta tentativa de entrega. | [optional] 
**webhook_id** | **str** | Webhook que originou a entrega. | [optional] 
**transaction_id** | **str** | Transação Pix cujo evento foi notificado. | [optional] 
**url** | **str** | Endereço para onde esta entrega foi feita, gravado no momento do disparo. | [optional] 
**body** | **str** | Corpo enviado no disparo, em JSON serializado. | [optional] 
**status** | **int** | Status HTTP retornado pelo seu endpoint. | [optional] 
**response_headers** | **str** | Headers da resposta, em JSON serializado. | [optional] 
**response_body** | **str** | Corpo da resposta recebida. | [optional] 
**error** | **str** | Mensagem da falha na entrega. | [optional] 
**response_time** | **int** | Tempo de resposta do seu endpoint, em milissegundos. | [optional] 
**event_type** | **str** | Evento que disparou esta entrega, o mesmo valor enviado no cabeçalho X-Callback-Event. | [optional] 
**created_at** | **datetime** | Momento da tentativa de entrega. | [optional] 

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


