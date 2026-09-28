# ResendUserCallbacks200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | Confirmation that the callbacks were queued. | [optional] 
**Total** | Pointer to **int32** | Number of callbacks dispatched | [optional] 

## Methods

### NewResendUserCallbacks200Response

`func NewResendUserCallbacks200Response() *ResendUserCallbacks200Response`

NewResendUserCallbacks200Response instantiates a new ResendUserCallbacks200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResendUserCallbacks200ResponseWithDefaults

`func NewResendUserCallbacks200ResponseWithDefaults() *ResendUserCallbacks200Response`

NewResendUserCallbacks200ResponseWithDefaults instantiates a new ResendUserCallbacks200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ResendUserCallbacks200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ResendUserCallbacks200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ResendUserCallbacks200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ResendUserCallbacks200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetTotal

`func (o *ResendUserCallbacks200Response) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ResendUserCallbacks200Response) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ResendUserCallbacks200Response) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ResendUserCallbacks200Response) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


