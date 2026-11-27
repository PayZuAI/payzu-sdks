# PayZuPix::SummaryStatus

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **count** | **Integer** | Quantidade de transações nessa situação dentro do período. | [optional] |
| **amount** | **Float** | Soma dos valores dessas transações. | [optional] |
| **service_fee_charged** | **Float** | Soma das taxas cobradas nessas transações, em reais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SummaryStatus.new(
  count: null,
  amount: null,
  service_fee_charged: null
)
```

