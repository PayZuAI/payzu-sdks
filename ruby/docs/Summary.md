# PayZuPix::Summary

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_transactions** | **Integer** | Number of transactions in the period. | [optional] |
| **deposit** | [**SummaryBlock**](SummaryBlock.md) | Summary of the account inflows in the period, that is, of the transactions of type DEPOSIT. | [optional] |
| **withdraw** | [**SummaryBlock**](SummaryBlock.md) | Summary of the account outflows in the period, that is, of the transactions of type WITHDRAW. | [optional] |
| **commission** | [**SummaryBlock**](SummaryBlock.md) | Summary of the commissions credited to the account in the period (transactions of type COMMISSION). | [optional] |
| **adjustment** | [**SummaryBlock**](SummaryBlock.md) | Summary of the adjustments in the period (transactions of type ADJUSTMENT). | [optional] |

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

