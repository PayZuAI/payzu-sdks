# PayZuPix::InfractionListResponsePagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. | [optional] |
| **limit** | **Integer** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. | [optional] |
| **total_items** | **Integer** | Number of infractions that match the filters, counted up to 100,000. | [optional] |
| **total_pages** | **Integer** | Number of pages for the limit provided, taken from totalItems rounded up. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionListResponsePagination.new(
  page: null,
  limit: null,
  total_items: null,
  total_pages: null
)
```

