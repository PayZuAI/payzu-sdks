# BankStatement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of the balance entry. | [optional] 
**amount** | **float** | Amount of the entry. | [optional] 
**operation** | **str** | INCREMENT credits the balance, DECREMENT debits it. | [optional] 
**reason** | **str** | Reason for the ledger entry. | [optional] 
**balance_type** | **str** | Balance moved: AVAILABLE or BLOCKED. | [optional] 
**previous_balance_available** | **float** | Balance free for use that the account had, in reais, immediately before this entry. | [optional] 
**previous_balance_blocked** | **float** | Blocked balance before the entry, in reais. | [optional] 
**new_balance_available** | **float** | Available balance after the entry, in reais. | [optional] 
**new_balance_blocked** | **float** | Blocked balance after the entry, in reais. | [optional] 
**transaction_id** | **str** | Transaction that originated the entry. | [optional] 
**infraction_id** | **str** | Infraction related to the entry. | [optional] 
**created_at** | **datetime** | Date and time the balance movement was recorded. | [optional] 
**updated_at** | **datetime** | Date and time of the last change to the record. | [optional] 

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


