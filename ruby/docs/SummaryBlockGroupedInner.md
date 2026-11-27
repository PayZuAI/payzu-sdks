# PayZuPix::SummaryBlockGroupedInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **String** | Dia (YYYY-MM-DD, fuso America/Sao_Paulo). | [optional] |
| **amount** | **Float** | Soma dos valores, em reais, das transações concluídas no dia. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SummaryBlockGroupedInner.new(
  date: null,
  amount: null
)
```

