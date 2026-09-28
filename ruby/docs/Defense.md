# PayZuPix::Defense

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Defense identifier. | [optional] |
| **defense** | **String** | Defense text | [optional] |
| **status** | **String** | Defense status | [optional] |
| **infraction_id** | **String** | Identifies the infraction the defense belongs to. | [optional] |
| **created_at** | **Time** | Moment the defense was recorded at PayZu, saved together with the uploaded files. | [optional] |
| **updated_at** | **Time** | Moment of the last change to the defense. | [optional] |
| **files** | [**Array&lt;DefenseFilesInner&gt;**](DefenseFilesInner.md) | Files sent with the defense, with name, type and size in bytes. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Defense.new(
  id: null,
  defense: null,
  status: null,
  infraction_id: null,
  created_at: null,
  updated_at: null,
  files: null
)
```

