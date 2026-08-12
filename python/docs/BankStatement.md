# BankStatement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 
**operation** | **str** | INCREMENT credits the balance, DECREMENT debits it. | [optional] 
**reason** | **str** | Internal reason for the credit/debit. | [optional] 
**balance_type** | **str** |  | [optional] 
**previous_balance_available** | **float** |  | [optional] 
**previous_balance_blocked** | **float** |  | [optional] 
**new_balance_available** | **float** |  | [optional] 
**new_balance_blocked** | **float** |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**infraction_id** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from payzu_pix.models.bank_statement import BankStatement

# TODO update the JSON string below
json = "{}"
# create an instance of BankStatement from a JSON string
bank_statement_instance = BankStatement.from_json(json)
# print the JSON string representation of the object
print(BankStatement.to_json())

# convert the object into a dict
bank_statement_dict = bank_statement_instance.to_dict()
# create an instance of BankStatement from a dict
bank_statement_from_dict = BankStatement.from_dict(bank_statement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


