# PayZuPix::DefenseHistoryEntry

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Defense identifier. | [optional] |
| **defense** | **String** | Defense text | [optional] |
| **status** | **String** | Defense status | [optional] |
| **created_at** | **Time** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional] |
| **updated_at** | **Time** | Moment of the last change to the defense. | [optional] |
| **files** | [**Array&lt;DefenseHistoryEntryFilesInner&gt;**](DefenseHistoryEntryFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DefenseHistoryEntry.new(
  id: null,
  defense: null,
  status: null,
  created_at: null,
  updated_at: null,
  files: null
)
```

