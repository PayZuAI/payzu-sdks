# BankStatement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Identificador do lançamento de saldo. | [optional]
**amount** | **float** | Valor do lançamento. | [optional]
**operation** | **string** | INCREMENT credita o saldo, DECREMENT debita. | [optional]
**reason** | **string** | Motivo do lançamento no extrato. | [optional]
**balance_type** | **string** | Saldo movimentado: AVAILABLE ou BLOCKED. | [optional]
**previous_balance_available** | **float** | Saldo livre para uso que a conta tinha, em reais, imediatamente antes deste lançamento. | [optional]
**previous_balance_blocked** | **float** | Saldo bloqueado antes do lançamento, em reais. | [optional]
**new_balance_available** | **float** | Saldo disponível depois do lançamento, em reais. | [optional]
**new_balance_blocked** | **float** | Saldo bloqueado depois do lançamento, em reais. | [optional]
**transaction_id** | **string** | Transação que originou o lançamento. | [optional]
**infraction_id** | **string** | Infração relacionada ao lançamento. | [optional]
**created_at** | **\DateTime** | Data e hora em que a movimentação de saldo foi registrada. | [optional]
**updated_at** | **\DateTime** | Data e hora da última alteração do registro. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
