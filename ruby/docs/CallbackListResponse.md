# PayZuPix::CallbackListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pagination** | [**CallbackListResponsePagination**](CallbackListResponsePagination.md) |  | [optional] |
| **callbacks** | [**Array&lt;CallbackDetail&gt;**](CallbackDetail.md) | Array de logs de callback | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackListResponse.new(
  pagination: null,
  callbacks: null
)
```

