# PayZuPix::RotateCallbackSecretResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **secret** | **String** | Segredo de callback, 43 caracteres base64url. Guarde: não há rota para lê-lo de novo. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::RotateCallbackSecretResponse.new(
  secret: Zk8Qk1Yb3nS6xPwT2cVrJ9dLmHgA4eN7uKfR0iXsBqE
)
```

