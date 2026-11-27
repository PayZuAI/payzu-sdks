# PayZuPix::CallbackSecretResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **message** | **String** | Confirmação do segredo criado. | [optional] |
| **secret** | **String** | Segredo de callback, 43 caracteres base64url. Guarde: não há rota para lê-lo de novo. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackSecretResponse.new(
  message: null,
  secret: Zk8Qk1Yb3nS6xPwT2cVrJ9dLmHgA4eN7uKfR0iXsBqE
)
```

