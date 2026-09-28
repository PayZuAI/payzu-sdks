# PayZuPix::DefenseFilesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Name of the file sent with the defense. | [optional] |
| **mime_type** | **String** | MIME type of the file, provided on upload, for example application/pdf or image/png. | [optional] |
| **size** | **Integer** | Size of the file in bytes. | [optional] |
| **url** | **String** | Signed download URL, valid for 9 minutes; null when unavailable. Returned when creating the defense and when fetching a single defense. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseFilesInner.new(
  name: null,
  mime_type: null,
  size: null,
  url: null
)
```

