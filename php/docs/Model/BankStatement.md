# BankStatement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identifier of the balance entry. | [optional]
**amount** | **float** | Amount of the entry. | [optional]
**operation** | **string** | INCREMENT credits the balance, DECREMENT debits it. | [optional]
**reason** | **string** | Reason for the ledger entry. | [optional]
**balance_type** | **string** | Balance moved: AVAILABLE or BLOCKED. | [optional]
**previous_balance_available** | **float** | Balance free for use that the account had, in reais, immediately before this entry. | [optional]
**previous_balance_blocked** | **float** | Blocked balance before the entry, in reais. | [optional]
**new_balance_available** | **float** | Available balance after the entry, in reais. | [optional]
**new_balance_blocked** | **float** | Blocked balance after the entry, in reais. | [optional]
**transaction_id** | **string** | Transaction that originated the entry. | [optional]
**infraction_id** | **string** | Infraction related to the entry. | [optional]
**created_at** | **\DateTime** | Date and time the balance movement was recorded. | [optional]
**updated_at** | **\DateTime** | Date and time of the last change to the record. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
