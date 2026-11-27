# PayZuPix::GetUserBalance200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **balance_available** | **Float** | Saldo livre para saques e transferências, em reais, da conta dona do token. | [optional] |
| **balance_blocked** | **Float** | Saldo retido e indisponível, em reais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserBalance200Response.new(
  balance_available: null,
  balance_blocked: null
)
```

