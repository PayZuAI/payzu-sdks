# BankStatementListResponsePagination

Página e limite usados, e se há próxima página.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. | [optional] 
**limit** | **int** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. | [optional] 
**has_next_page** | **bool** | Indica se existe página seguinte, detectada buscando um item além do limit. | [optional] 

## Example

```python
from payzu_pix.models.bank_statement_list_response_pagination import BankStatementListResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of BankStatementListResponsePagination from a JSON string
bank_statement_list_response_pagination_instance = BankStatementListResponsePagination.from_json(json)
# print the JSON string representation of the object
print(BankStatementListResponsePagination.to_json())

# convert the object into a dict
bank_statement_list_response_pagination_dict = bank_statement_list_response_pagination_instance.to_dict()
# create an instance of BankStatementListResponsePagination from a dict
bank_statement_list_response_pagination_from_dict = BankStatementListResponsePagination.from_dict(bank_statement_list_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


