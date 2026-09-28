# PayZuPix::RotateCallbackSecretResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **secret** | **String** | Callback secret, 43 base64url characters. Store it: there is no route to read it again. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::RotateCallbackSecretResponse.new(
  secret: Zk8Qk1Yb3nS6xPwT2cVrJ9dLmHgA4eN7uKfR0iXsBqE
)
```

