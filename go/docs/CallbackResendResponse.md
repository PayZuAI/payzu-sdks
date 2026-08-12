# CallbackResendResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** |  | [optional] 
**Count** | Pointer to **int32** | Number of callbacks queued for resend. | [optional] 

## Methods

### NewCallbackResendResponse

`func NewCallbackResendResponse() *CallbackResendResponse`

NewCallbackResendResponse instantiates a new CallbackResendResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallbackResendResponseWithDefaults

`func NewCallbackResendResponseWithDefaults() *CallbackResendResponse`

NewCallbackResendResponseWithDefaults instantiates a new CallbackResendResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *CallbackResendResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CallbackResendResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CallbackResendResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CallbackResendResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetCount

`func (o *CallbackResendResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *CallbackResendResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *CallbackResendResponse) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *CallbackResendResponse) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


