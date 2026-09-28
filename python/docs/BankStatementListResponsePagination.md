# BankStatementListResponsePagination

Page and limit used, and whether there is a next page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. | [optional] 
**limit** | **int** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. | [optional] 
**has_next_page** | **bool** | Indicates whether there is a next page, detected by fetching one item beyond the limit. | [optional] 

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


