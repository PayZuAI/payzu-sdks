# PayZuPix::GetUser200ResponseServiceFee

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **cash_in_minimum** | **Float** | Floor of the cash-in fee, in reais. | [optional] |
| **cash_in_fixed** | **Float** | Fixed part of the cash-in fee, in reais. | [optional] |
| **cash_in_percent** | **Float** | Percentage of the cash-in fee. | [optional] |
| **cash_out_minimum** | **Float** | Floor of the withdrawal fee, in reais. | [optional] |
| **cash_out_fixed** | **Float** | Fixed part of the withdrawal fee, in reais. | [optional] |
| **cash_out_percent** | **Float** | Percentage of the withdrawal fee. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUser200ResponseServiceFee.new(
  cash_in_minimum: null,
  cash_in_fixed: null,
  cash_in_percent: null,
  cash_out_minimum: null,
  cash_out_fixed: null,
  cash_out_percent: null
)
```

