# PayZuPix::GetUserTransactions200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total** | **Integer** | Number of transactions that match the query filters. | [optional] |
| **pages** | **Integer** | Number of pages for the limit provided, computed from total rounded up. | [optional] |
| **transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) | Items of the requested page, ordered by sortBy and sortDirection. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserTransactions200Response.new(
  total: null,
  pages: null,
  transactions: null
)
```

