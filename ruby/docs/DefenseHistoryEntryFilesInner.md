# PayZuPix::DefenseHistoryEntryFilesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Name of the file sent with the defense. | [optional] |
| **mime_type** | **String** | MIME type of the file, provided on upload, for example application/pdf or image/png. | [optional] |
| **size** | **Integer** | Size of the file in bytes. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseHistoryEntryFilesInner.new(
  name: null,
  mime_type: null,
  size: null
)
```

