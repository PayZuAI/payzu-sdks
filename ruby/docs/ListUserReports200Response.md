# PayZuPix::ListUserReports200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total** | **Integer** | Number of report requests of the user that match the filters. | [optional] |
| **pages** | **Integer** | Number of pages for the limit provided, computed from total rounded up. | [optional] |
| **reports** | [**Array&lt;ReportJob&gt;**](ReportJob.md) | Report requests of the requested page, with id, status and dates. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ListUserReports200Response.new(
  total: null,
  pages: null,
  reports: null
)
```

