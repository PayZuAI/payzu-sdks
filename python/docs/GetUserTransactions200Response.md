# GetUserTransactions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | Quantidade de transações que atendem aos filtros da consulta. | [optional] 
**pages** | **int** | Número de páginas para o limit informado, calculado a partir de total arredondado para cima. | [optional] 
**transactions** | [**List[Transaction]**](Transaction.md) | Itens da página pedida, ordenados por sortBy e sortDirection. | [optional] 

## Example

```python
from payzu_pix.models.get_user_transactions200_response import GetUserTransactions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserTransactions200Response from a JSON string
get_user_transactions200_response_instance = GetUserTransactions200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserTransactions200Response.to_json())

# convert the object into a dict
get_user_transactions200_response_dict = get_user_transactions200_response_instance.to_dict()
# create an instance of GetUserTransactions200Response from a dict
get_user_transactions200_response_from_dict = GetUserTransactions200Response.from_dict(get_user_transactions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


