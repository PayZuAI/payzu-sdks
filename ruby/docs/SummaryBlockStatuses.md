# PayZuPix::SummaryBlockStatuses

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pending** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the amounts, in reais, of the transactions with status PENDING in the queried period. | [optional] |
| **completed** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the completed transactions, in reais. | [optional] |
| **canceled** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the canceled transactions, in reais. | [optional] |
| **expired** | [**SummaryStatus**](SummaryStatus.md) | Count and sum of the expired transactions, in reais. | [optional] |
| **refunded** | [**SummaryStatus**](SummaryStatus.md) | Count and refunded amount in the period, in reais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SummaryBlockStatuses.new(
  pending: null,
  completed: null,
  canceled: null,
  expired: null,
  refunded: null
)
```

