# PostWithdrawQrcodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code** | **str** | Payload do Pix QR Code (formato EMV). | 
**amount** | **float** | Valor em BRL, com no máximo 2 casas decimais. Opcional: sem ele, vale o valor do QR Code. | [optional] 
**callback_url** | **str** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**description** | **str** | Descrição opcional para o pagamento. | [optional] 
**client_reference** | **str** | Referência externa deste saque. Repetida com o mesmo valor e o mesmo QR Code, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional] 
**virtual_account** | **str** | Subconta para separar lojas ou filiais. | [optional] 

## Example

```python
from payzu_pix.models.post_withdraw_qrcode_request import PostWithdrawQrcodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostWithdrawQrcodeRequest from a JSON string
post_withdraw_qrcode_request_instance = PostWithdrawQrcodeRequest.from_json(json)
# print the JSON string representation of the object
print(PostWithdrawQrcodeRequest.to_json())

# convert the object into a dict
post_withdraw_qrcode_request_dict = post_withdraw_qrcode_request_instance.to_dict()
# create an instance of PostWithdrawQrcodeRequest from a dict
post_withdraw_qrcode_request_from_dict = PostWithdrawQrcodeRequest.from_dict(post_withdraw_qrcode_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


