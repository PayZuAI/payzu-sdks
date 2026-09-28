# PayZuPix::SummaryStatus

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** | Number of transactions in that state within the period. | [optional] |
| **amount** | **Float** | Sum of the amounts of those transactions. | [optional] |
| **service_fee_charged** | **Float** | Sum of the fees charged on those transactions, in BRL. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SummaryStatus.new(
  count: null,
  amount: null,
  service_fee_charged: null
)
```

