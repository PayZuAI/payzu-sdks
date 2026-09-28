# PayZuPix::RotateSecretResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **secret** | **String** | HMAC signing secret. Shown only on creation and on rotate-secret. Store it now. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::RotateSecretResponse.new(
  secret: q7Kx2mV9pL4sR8tW1nB6cY3hJ5dF0gZ-aE_uT7iO2kM
)
```

