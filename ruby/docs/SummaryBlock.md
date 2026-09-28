# PayZuPix::SummaryBlock

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_amount** | **Float** | Sum of the amounts in the period. | [optional] |
| **total_transactions** | **Integer** | Number of transactions of that type in the period, also summing all statuses. | [optional] |
| **statuses** | [**SummaryBlockStatuses**](SummaryBlockStatuses.md) |  | [optional] |
| **grouped** | [**Array&lt;SummaryBlockGroupedInner&gt;**](SummaryBlockGroupedInner.md) | Present only when grouped&#x3D;true. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SummaryBlock.new(
  total_amount: null,
  total_transactions: null,
  statuses: null,
  grouped: null
)
```

