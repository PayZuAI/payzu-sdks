# ResendWebhookCallbacksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_from** | **datetime** | Início do período das entregas. No máximo 30 dias atrás. | 
**created_at_to** | **datetime** | Fim do período das entregas, igual ou posterior a createdAtFrom. A janela não pode passar de 7 dias. | 
**webhook_ids** | **List[str]** | Webhooks a reenviar. Omitido: todos os webhooks ativos da conta. | [optional] 
**transaction_ids** | **List[str]** | Restringe a IDs de transação específicos. | [optional] 
**transaction_types** | **List[str]** | Filtra pelo tipo da transação. | [optional] 
**transaction_status** | **List[str]** | Filtra pelo status atual da transação. | [optional] 
**transaction_end_to_end_ids** | **List[str]** | Restringe a end-to-end IDs específicos. | [optional] 

## Example

```python
from payzu_pix.models.resend_webhook_callbacks_request import ResendWebhookCallbacksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResendWebhookCallbacksRequest from a JSON string
resend_webhook_callbacks_request_instance = ResendWebhookCallbacksRequest.from_json(json)
# print the JSON string representation of the object
print(ResendWebhookCallbacksRequest.to_json())

# convert the object into a dict
resend_webhook_callbacks_request_dict = resend_webhook_callbacks_request_instance.to_dict()
# create an instance of ResendWebhookCallbacksRequest from a dict
resend_webhook_callbacks_request_from_dict = ResendWebhookCallbacksRequest.from_dict(resend_webhook_callbacks_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


