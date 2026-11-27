# PayZuPix::InfractionListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **infractions** | [**Array&lt;InfractionDetail&gt;**](InfractionDetail.md) | Contestações da página solicitada, cada uma no mesmo formato do detalhe. | [optional] |
| **pagination** | [**InfractionListResponsePagination**](InfractionListResponsePagination.md) |  | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionListResponse.new(
  infractions: null,
  pagination: null
)
```

