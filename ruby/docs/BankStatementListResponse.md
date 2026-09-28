# PayZuPix::BankStatementListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **pagination** | [**BankStatementListResponsePagination**](BankStatementListResponsePagination.md) |  | [optional] |
| **bank_statements** | [**Array&lt;BankStatement&gt;**](BankStatement.md) | Entries of the queried page. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::BankStatementListResponse.new(
  pagination: null,
  bank_statements: null
)
```

