# PayZuPix::CallbackSecretResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **message** | **String** | Confirmation of the created secret. | [optional] |
| **secret** | **String** | Callback secret, 43 base64url characters. Store it: there is no route to read it again. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackSecretResponse.new(
  message: null,
  secret: Zk8Qk1Yb3nS6xPwT2cVrJ9dLmHgA4eN7uKfR0iXsBqE
)
```

