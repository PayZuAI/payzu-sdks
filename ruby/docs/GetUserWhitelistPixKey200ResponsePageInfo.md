# PayZuPix::GetUserWhitelistPixKey200ResponsePageInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **next_cursor** | **String** | Cursor da próxima página; não vem na última. | [optional] |
| **has_next_page** | **Boolean** |  |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserWhitelistPixKey200ResponsePageInfo.new(
  next_cursor: cmf0w1t3l0001qk08pixk0001,
  has_next_page: true
)
```

