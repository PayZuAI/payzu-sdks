# PostInternalTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payer_account_number** | **str** | Conta do pagador. | 
**receiver_account_number** | **str** | Conta de destino. | 
**amount** | **float** | Valor da transferência em BRL, com no máximo 2 casas decimais. | 
**description** | **str** | Descrição opcional da transferência. | [optional] 
**callback_url** | **str** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**client_reference** | **str** | Referência externa para idempotência / reconciliação. | [optional] 
**virtual_account** | **str** | Subconta para separar lojas ou filiais. | [optional] 

## Example

```python
from payzu_pix.models.post_internal_transfer_request import PostInternalTransferRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostInternalTransferRequest from a JSON string
post_internal_transfer_request_instance = PostInternalTransferRequest.from_json(json)
# print the JSON string representation of the object
print(PostInternalTransferRequest.to_json())

# convert the object into a dict
post_internal_transfer_request_dict = post_internal_transfer_request_instance.to_dict()
# create an instance of PostInternalTransferRequest from a dict
post_internal_transfer_request_from_dict = PostInternalTransferRequest.from_dict(post_internal_transfer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


