# PayZuPix::SummaryBlock

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_amount** | **Float** | Soma dos valores no período. | [optional] |
| **total_transactions** | **Integer** | Quantidade de transações desse tipo no período, também somando todos os status. | [optional] |
| **statuses** | [**SummaryBlockStatuses**](SummaryBlockStatuses.md) |  | [optional] |
| **grouped** | [**Array&lt;SummaryBlockGroupedInner&gt;**](SummaryBlockGroupedInner.md) | Presente apenas quando grouped&#x3D;true. | [optional] |

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

