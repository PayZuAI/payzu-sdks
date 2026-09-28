# ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | Fixed marker of an error response. | 
**Error** | **string** | Name of the corresponding HTTP status. | 
**ErrorCode** | **string** | Stable machine-readable error code, when available. | 
**Message** | **string** | Human-readable error message. | 
**StatusCode** | **int32** | HTTP status code. | 
**RequestId** | **string** | Unique request correlation ID (cuid). Include it when contacting support. | 
**Details** | Pointer to [**[]ApiErrorDetailsInner**](ApiErrorDetailsInner.md) | Field-level validation errors, when applicable. | [optional] 
**RetryAfterSeconds** | Pointer to **int32** | Seconds to wait before retrying. Present only on 429 responses. | [optional] 

## Methods

### NewApiError

`func NewApiError(status string, error_ string, errorCode string, message string, statusCode int32, requestId string, ) *ApiError`

NewApiError instantiates a new ApiError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiErrorWithDefaults

`func NewApiErrorWithDefaults() *ApiError`

NewApiErrorWithDefaults instantiates a new ApiError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ApiError) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApiError) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApiError) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetError

`func (o *ApiError) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ApiError) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ApiError) SetError(v string)`

SetError sets Error field to given value.


### GetErrorCode

`func (o *ApiError) GetErrorCode() string`

GetErrorCode returns the ErrorCode field if non-nil, zero value otherwise.

### GetErrorCodeOk

`func (o *ApiError) GetErrorCodeOk() (*string, bool)`

GetErrorCodeOk returns a tuple with the ErrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorCode

`func (o *ApiError) SetErrorCode(v string)`

SetErrorCode sets ErrorCode field to given value.


### GetMessage

`func (o *ApiError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiError) SetMessage(v string)`

SetMessage sets Message field to given value.


### GetStatusCode

`func (o *ApiError) GetStatusCode() int32`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *ApiError) GetStatusCodeOk() (*int32, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *ApiError) SetStatusCode(v int32)`

SetStatusCode sets StatusCode field to given value.


### GetRequestId

`func (o *ApiError) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *ApiError) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *ApiError) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetDetails

`func (o *ApiError) GetDetails() []ApiErrorDetailsInner`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *ApiError) GetDetailsOk() (*[]ApiErrorDetailsInner, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *ApiError) SetDetails(v []ApiErrorDetailsInner)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *ApiError) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetRetryAfterSeconds

`func (o *ApiError) GetRetryAfterSeconds() int32`

GetRetryAfterSeconds returns the RetryAfterSeconds field if non-nil, zero value otherwise.

### GetRetryAfterSecondsOk

`func (o *ApiError) GetRetryAfterSecondsOk() (*int32, bool)`

GetRetryAfterSecondsOk returns a tuple with the RetryAfterSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryAfterSeconds

`func (o *ApiError) SetRetryAfterSeconds(v int32)`

SetRetryAfterSeconds sets RetryAfterSeconds field to given value.

### HasRetryAfterSeconds

`func (o *ApiError) HasRetryAfterSeconds() bool`

HasRetryAfterSeconds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


