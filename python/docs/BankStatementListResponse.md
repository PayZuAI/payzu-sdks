# BankStatementListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**BankStatementListResponsePagination**](BankStatementListResponsePagination.md) |  | [optional] 
**bank_statements** | [**List[BankStatement]**](BankStatement.md) |  | [optional] 

## Example

```python
from payzu_pix.models.bank_statement_list_response import BankStatementListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BankStatementListResponse from a JSON string
bank_statement_list_response_instance = BankStatementListResponse.from_json(json)
# print the JSON string representation of the object
print(BankStatementListResponse.to_json())

# convert the object into a dict
bank_statement_list_response_dict = bank_statement_list_response_instance.to_dict()
# create an instance of BankStatementListResponse from a dict
bank_statement_list_response_from_dict = BankStatementListResponse.from_dict(bank_statement_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


