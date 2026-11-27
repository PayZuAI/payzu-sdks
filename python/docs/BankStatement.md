# BankStatement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identificador do lançamento de saldo. | [optional] 
**amount** | **float** | Valor do lançamento. | [optional] 
**operation** | **str** | INCREMENT credita o saldo, DECREMENT debita. | [optional] 
**reason** | **str** | Motivo do lançamento no extrato. | [optional] 
**balance_type** | **str** | Saldo movimentado: AVAILABLE ou BLOCKED. | [optional] 
**previous_balance_available** | **float** | Saldo livre para uso que a conta tinha, em reais, imediatamente antes deste lançamento. | [optional] 
**previous_balance_blocked** | **float** | Saldo bloqueado antes do lançamento, em reais. | [optional] 
**new_balance_available** | **float** | Saldo disponível depois do lançamento, em reais. | [optional] 
**new_balance_blocked** | **float** | Saldo bloqueado depois do lançamento, em reais. | [optional] 
**transaction_id** | **str** | Transação que originou o lançamento. | [optional] 
**infraction_id** | **str** | Infração relacionada ao lançamento. | [optional] 
**created_at** | **datetime** | Data e hora em que a movimentação de saldo foi registrada. | [optional] 
**updated_at** | **datetime** | Data e hora da última alteração do registro. | [optional] 

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


