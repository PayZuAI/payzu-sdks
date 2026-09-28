# ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | Fixed marker of an error response. |
**error** | **string** | Name of the corresponding HTTP status. |
**error_code** | **string** | Stable machine-readable error code, when available. |
**message** | **string** | Human-readable error message. |
**status_code** | **int** | HTTP status code. |
**request_id** | **string** | Unique request correlation ID (cuid). Include it when contacting support. |
**details** | [**\PayZu\Pix\Model\ApiErrorDetailsInner[]**](ApiErrorDetailsInner.md) | Field-level validation errors, when applicable. | [optional]
**retry_after_seconds** | **int** | Seconds to wait before retrying. Present only on 429 responses. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
