# PayZuPix::ErrorResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** | Fixed marker of an error response. |  |
| **error** | **String** | Name of the corresponding HTTP status. |  |
| **error_code** | **String** | Stable machine-readable error code, when available. |  |
| **message** | **String** | Human-readable error message. |  |
| **status_code** | **Integer** | HTTP status code. |  |
| **request_id** | **String** | Unique request correlation ID (cuid). Include it when contacting support. |  |
| **details** | [**Array&lt;ApiErrorDetailsInner&gt;**](ApiErrorDetailsInner.md) | Field-level validation errors, when applicable. | [optional] |
| **retry_after_seconds** | **Integer** | Seconds to wait before retrying. Present only on 429 responses. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ErrorResponse.new(
  status: ERROR,
  error: Bad Request,
  error_code: PZV001,
  message: Invalid data. Check the fields provided.,
  status_code: 400,
  request_id: cmbz0f8qk0001js04hp3e2n0f,
  details: null,
  retry_after_seconds: 30
)
```

