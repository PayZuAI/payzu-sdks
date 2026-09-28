# PayZuPix::DownloadUserReport200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url** | **String** | Short-lived signed URL to download the CSV (5 min validity) | [optional] |
| **expires_at** | **Time** | When the signed URL expires | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DownloadUserReport200Response.new(
  url: null,
  expires_at: null
)
```

