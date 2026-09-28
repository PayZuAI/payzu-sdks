

# ApiError


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**status** | [**StatusEnum**](#StatusEnum) | Fixed marker of an error response. |  |
|**error** | **String** | Name of the corresponding HTTP status. |  |
|**errorCode** | **String** | Stable machine-readable error code, when available. |  |
|**message** | **String** | Human-readable error message. |  |
|**statusCode** | **Integer** | HTTP status code. |  |
|**requestId** | **String** | Unique request correlation ID (cuid). Include it when contacting support. |  |
|**details** | [**List&lt;ApiErrorDetailsInner&gt;**](ApiErrorDetailsInner.md) | Field-level validation errors, when applicable. |  [optional] |
|**retryAfterSeconds** | **Integer** | Seconds to wait before retrying. Present only on 429 responses. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ERROR | &quot;ERROR&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



