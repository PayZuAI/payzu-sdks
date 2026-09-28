# PayZuPix::GetUser200ResponseDailyWithdrawLimit

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **limit** | **Float** | Daily outbound cap, in reais, summing withdrawals and internal transfers. | [optional] |
| **used** | **Float** | Total of the cap consumed in the day, in reais, by withdrawals and internal transfers. | [optional] |
| **updated_at** | **Time** | Date and time of the last change to the daily limit. | [optional] |
| **last_reset** | **Time** | Moment of the last reset of the daily usage. | [optional] |

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

