# PayZuPix::PostUserReportRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_from** | **Time** | Start of the report period. |  |
| **date_to** | **Time** | End of the report period. |  |
| **status** | **Array&lt;String&gt;** | Transaction statuses included in the file. Empty or omitted: all. | [optional] |
| **type** | **Array&lt;String&gt;** | Transaction types included in the file. Empty or omitted: all. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostUserReportRequest.new(
  date_from: 2026-07-01T00:00:00Z,
  date_to: 2026-07-31T23:59:59Z,
  status: null,
  type: null
)
```

