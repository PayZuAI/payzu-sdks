# PayZuPix::DownloadUserReport200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url** | **String** | URL assinada de curta duração para baixar o CSV (validade de 5 min) | [optional] |
| **expires_at** | **Time** | Quando a URL assinada expira | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DownloadUserReport200Response.new(
  url: null,
  expires_at: null
)
```

