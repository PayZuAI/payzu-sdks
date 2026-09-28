# PayZuPix::DepositPendingListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page returned in this response. | [optional] |
| **limit** | **Integer** | Maximum number of records per page used in this query. | [optional] |
| **has_next_page** | **Boolean** | Comes back true when there is still a record after this page. | [optional] |
| **data** | [**Array&lt;DepositPending&gt;**](DepositPending.md) | Pending deposits of this page, ordered from the most recent creation to the oldest. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DepositPendingListResponse.new(
  page: null,
  limit: null,
  has_next_page: null,
  data: null
)
```

