# PayZuPix::SummaryBlockStatuses

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pending** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma dos valores, em reais, das transações com status PENDING no período consultado. | [optional] |
| **completed** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma das transações concluídas, em reais. | [optional] |
| **canceled** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma das transações canceladas, em reais. | [optional] |
| **expired** | [**SummaryStatus**](SummaryStatus.md) | Contagem e soma das transações expiradas, em reais. | [optional] |
| **refunded** | [**SummaryStatus**](SummaryStatus.md) | Contagem e valor devolvido no período, em reais. | [optional] |

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

