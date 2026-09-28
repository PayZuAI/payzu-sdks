# PayZuPix::InfractionListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **infractions** | [**Array&lt;InfractionDetail&gt;**](InfractionDetail.md) | Infractions of the requested page, each in the same format as the detail. | [optional] |
| **pagination** | [**InfractionListResponsePagination**](InfractionListResponsePagination.md) |  | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionListResponse.new(
  infractions: null,
  pagination: null
)
```

