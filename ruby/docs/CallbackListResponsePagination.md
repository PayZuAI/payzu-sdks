# PayZuPix::CallbackListResponsePagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Current page | [optional] |
| **limit** | **Integer** | Items per page | [optional] |
| **has_next_page** | **Boolean** | Indicates if there is a next page | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackListResponsePagination.new(
  page: null,
  limit: null,
  has_next_page: null
)
```

