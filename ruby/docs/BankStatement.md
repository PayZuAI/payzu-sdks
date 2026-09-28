# PayZuPix::BankStatement

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identifier of the balance entry. | [optional] |
| **amount** | **Float** | Amount of the entry. | [optional] |
| **operation** | **String** | INCREMENT credits the balance, DECREMENT debits it. | [optional] |
| **reason** | **String** | Reason for the ledger entry. | [optional] |
| **balance_type** | **String** | Balance moved: AVAILABLE or BLOCKED. | [optional] |
| **previous_balance_available** | **Float** | Balance free for use that the account had, in reais, immediately before this entry. | [optional] |
| **previous_balance_blocked** | **Float** | Blocked balance before the entry, in reais. | [optional] |
| **new_balance_available** | **Float** | Available balance after the entry, in reais. | [optional] |
| **new_balance_blocked** | **Float** | Blocked balance after the entry, in reais. | [optional] |
| **transaction_id** | **String** | Transaction that originated the entry. | [optional] |
| **infraction_id** | **String** | Infraction related to the entry. | [optional] |
| **created_at** | **Time** | Date and time the balance movement was recorded. | [optional] |
| **updated_at** | **Time** | Date and time of the last change to the record. | [optional] |

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

