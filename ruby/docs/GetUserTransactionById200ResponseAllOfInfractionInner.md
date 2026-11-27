# PayZuPix::GetUserTransactionById200ResponseAllOfInfractionInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da infração ligada a esta transação. | [optional] |
| **status** | **String** | Situação atual da infração. | [optional] |
| **created_at** | **Time** | Data e hora em que a infração foi registrada na PayZu. | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração no registro da infração. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserTransactionById200ResponseAllOfInfractionInner.new(
  id: null,
  status: null,
  created_at: null,
  updated_at: null
)
```

