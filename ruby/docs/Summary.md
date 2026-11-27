# PayZuPix::Summary

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_transactions** | **Integer** | Quantidade de transações no período. | [optional] |
| **deposit** | [**SummaryBlock**](SummaryBlock.md) | Resumo das entradas da conta no período, ou seja, das transações do tipo DEPOSIT. | [optional] |
| **withdraw** | [**SummaryBlock**](SummaryBlock.md) | Resumo das saídas da conta no período, ou seja, das transações do tipo WITHDRAW. | [optional] |
| **commission** | [**SummaryBlock**](SummaryBlock.md) | Resumo das comissões creditadas à conta no período (transações do tipo COMMISSION). | [optional] |
| **adjustment** | [**SummaryBlock**](SummaryBlock.md) | Resumo dos ajustes no período (transações do tipo ADJUSTMENT). | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Summary.new(
  total_transactions: null,
  deposit: null,
  withdraw: null,
  commission: null,
  adjustment: null
)
```

