# PayZuPix::ReportJobDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Report identifier (UUID), generated when the report is requested. | [optional] |
| **status** | **String** | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. | [optional] |
| **created_at** | **Time** | Date and time the report generation was requested. | [optional] |
| **updated_at** | **Time** | Date and time of the last change to the report record. | [optional] |
| **expires_at** | **Time** | When the file expires from storage (usually 7 days after creation) | [optional] |
| **params** | **Hash&lt;String, Object&gt;** | Filters used when the report was created. | [optional] |
| **written_rows** | **Integer** | Rows written to the file. Null until the report is COMPLETED. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ReportJobDetail.new(
  id: null,
  status: null,
  created_at: null,
  updated_at: null,
  expires_at: null,
  params: null,
  written_rows: null
)
```

