# PayZuPix::BankStatementListResponsePagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. | [optional] |
| **limit** | **Integer** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. | [optional] |
| **has_next_page** | **Boolean** | Indicates whether there is a next page, detected by fetching one item beyond the limit. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::BankStatementListResponsePagination.new(
  page: null,
  limit: null,
  has_next_page: null
)
```

