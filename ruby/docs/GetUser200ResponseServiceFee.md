# PayZuPix::GetUser200ResponseServiceFee

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **cash_in_minimum** | **Float** | Piso da tarifa de entrada, em reais. | [optional] |
| **cash_in_fixed** | **Float** | Parcela fixa da tarifa de entrada, em reais. | [optional] |
| **cash_in_percent** | **Float** | Percentual da tarifa de entrada. | [optional] |
| **cash_out_minimum** | **Float** | Piso da tarifa de saque, em reais. | [optional] |
| **cash_out_fixed** | **Float** | Parcela fixa da tarifa de saque, em reais. | [optional] |
| **cash_out_percent** | **Float** | Percentual da tarifa de saque. | [optional] |

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

