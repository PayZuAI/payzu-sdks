# PayZuPix::ResendUserCallbacks200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **message** | **String** | Confirmação de que os callbacks foram enfileirados. | [optional] |
| **total** | **Integer** | Número de callbacks disparados | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ResendUserCallbacks200Response.new(
  message: null,
  total: null
)
```

