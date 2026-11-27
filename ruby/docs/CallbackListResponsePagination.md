# PayZuPix::CallbackListResponsePagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Página atual | [optional] |
| **limit** | **Integer** | Itens por página | [optional] |
| **has_next_page** | **Boolean** | Indica se há uma próxima página | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackListResponsePagination.new(
  page: null,
  limit: null,
  has_next_page: null
)
```

