# PostPixRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Valor da cobrança, em reais, com no máximo 2 casas decimais. | 
**callback_url** | **str** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**generated_name** | **str** | Nome usado para montar a cobrança. | [optional] 
**generated_email** | **str** | E-mail usado para montar a cobrança. | [optional] 
**generated_document** | **str** | CPF (11 dígitos) ou CNPJ (14 dígitos) do pagador, sem pontuação e com dígitos verificadores válidos. Obrigatório a partir do valor definido na conta (PZD602). | [optional] 
**expires_in** | **int** | Segundos até o QR Code expirar, em número inteiro. | [optional] 
**client_reference** | **str** | Referência externa (pedido, fatura etc.). Um clientReference já usado devolve a transação criada com ele. | [optional] 
**virtual_account** | **str** | Subconta para separar lojas ou filiais. | [optional] 

## Example

```python
from payzu_pix.models.post_pix_request import PostPixRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostPixRequest from a JSON string
post_pix_request_instance = PostPixRequest.from_json(json)
# print the JSON string representation of the object
print(PostPixRequest.to_json())

# convert the object into a dict
post_pix_request_dict = post_pix_request_instance.to_dict()
# create an instance of PostPixRequest from a dict
post_pix_request_from_dict = PostPixRequest.from_dict(post_pix_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


