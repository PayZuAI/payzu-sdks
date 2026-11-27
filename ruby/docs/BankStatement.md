# PayZuPix::BankStatement

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador do lançamento de saldo. | [optional] |
| **amount** | **Float** | Valor do lançamento. | [optional] |
| **operation** | **String** | INCREMENT credita o saldo, DECREMENT debita. | [optional] |
| **reason** | **String** | Motivo do lançamento no extrato. | [optional] |
| **balance_type** | **String** | Saldo movimentado: AVAILABLE ou BLOCKED. | [optional] |
| **previous_balance_available** | **Float** | Saldo livre para uso que a conta tinha, em reais, imediatamente antes deste lançamento. | [optional] |
| **previous_balance_blocked** | **Float** | Saldo bloqueado antes do lançamento, em reais. | [optional] |
| **new_balance_available** | **Float** | Saldo disponível depois do lançamento, em reais. | [optional] |
| **new_balance_blocked** | **Float** | Saldo bloqueado depois do lançamento, em reais. | [optional] |
| **transaction_id** | **String** | Transação que originou o lançamento. | [optional] |
| **infraction_id** | **String** | Infração relacionada ao lançamento. | [optional] |
| **created_at** | **Time** | Data e hora em que a movimentação de saldo foi registrada. | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração do registro. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::BankStatement.new(
  id: null,
  amount: null,
  operation: null,
  reason: null,
  balance_type: null,
  previous_balance_available: null,
  previous_balance_blocked: null,
  new_balance_available: null,
  new_balance_blocked: null,
  transaction_id: null,
  infraction_id: null,
  created_at: null,
  updated_at: null
)
```

