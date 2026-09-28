# PayZuPix::SummaryBlockGroupedInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **String** | Day (YYYY-MM-DD, America/Sao_Paulo time zone). | [optional] |
| **amount** | **Float** | Sum of the amounts, in reais, of the completed transactions of the day. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SummaryBlockGroupedInner.new(
  date: null,
  amount: null
)
```

