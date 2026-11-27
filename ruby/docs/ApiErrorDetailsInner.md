# PayZuPix::ApiErrorDetailsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **field** | **String** | Caminho do campo rejeitado na validação, sem a barra inicial. |  |
| **message** | **String** | Motivo da rejeição daquele campo, em português. |  |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ApiErrorDetailsInner.new(
  field: null,
  message: null
)
```

