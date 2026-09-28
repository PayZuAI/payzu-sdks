# PayZuPix::GetUserBalance200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **balance_available** | **Float** | Balance free for withdrawals and transfers, in reais, of the account that owns the token. | [optional] |
| **balance_blocked** | **Float** | Balance held and unavailable, in reais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserBalance200Response.new(
  balance_available: null,
  balance_blocked: null
)
```

