# BankStatementListResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**has_next_page** | **bool** |  | [optional] 

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


