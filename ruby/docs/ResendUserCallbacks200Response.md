# PayZuPix::ResendUserCallbacks200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **message** | **String** | Confirmation that the callbacks were queued. | [optional] |
| **total** | **Integer** | Number of callbacks dispatched | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ResendUserCallbacks200Response.new(
  message: null,
  total: null
)
```

