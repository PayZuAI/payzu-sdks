# PostWithdrawRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Valor em BRL, com no máximo 2 casas decimais. Mínimo de 0,01. | 
**pix_key** | **str** | Chave Pix de destino no formato do pixType: CPF ou CNPJ com dígitos verificadores válidos e sem pontuação, celular como +55 seguido de DDD e número, e-mail ou chave aleatória (EVP). | 
**pix_type** | **str** | Tipo da chave Pix. | 
**callback_url** | **str** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**client_reference** | **str** | Referência externa deste saque. Repetida com o mesmo valor e a mesma chave, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional] 
**description** | **str** | Descrição opcional. | [optional] 
**virtual_account** | **str** | Subconta para separar lojas ou filiais. | [optional] 

## Example

```python
from payzu_pix.models.post_withdraw_request import PostWithdrawRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostWithdrawRequest from a JSON string
post_withdraw_request_instance = PostWithdrawRequest.from_json(json)
# print the JSON string representation of the object
print(PostWithdrawRequest.to_json())

# convert the object into a dict
post_withdraw_request_dict = post_withdraw_request_instance.to_dict()
# create an instance of PostWithdrawRequest from a dict
post_withdraw_request_from_dict = PostWithdrawRequest.from_dict(post_withdraw_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


