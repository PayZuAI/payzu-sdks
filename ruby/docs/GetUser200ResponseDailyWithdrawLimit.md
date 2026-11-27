# PayZuPix::GetUser200ResponseDailyWithdrawLimit

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **Float** | Teto diário de saída, em reais, somando saques e transferências internas. | [optional] |
| **used** | **Float** | Total consumido do teto no dia, em reais, por saques e transferências internas. | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração do limite diário. | [optional] |
| **last_reset** | **Time** | Momento da última zeragem do consumo diário. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUser200ResponseDailyWithdrawLimit.new(
  limit: null,
  used: null,
  updated_at: null,
  last_reset: null
)
```

