# ApiErrorDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Field** | **string** | Path of the field rejected in validation, without the leading slash. | 
**Message** | **string** | Reason that field was rejected, in Portuguese. | 

## Methods

### NewApiErrorDetailsInner

`func NewApiErrorDetailsInner(field string, message string, ) *ApiErrorDetailsInner`

NewApiErrorDetailsInner instantiates a new ApiErrorDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiErrorDetailsInnerWithDefaults

`func NewApiErrorDetailsInnerWithDefaults() *ApiErrorDetailsInner`

NewApiErrorDetailsInnerWithDefaults instantiates a new ApiErrorDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetField

`func (o *ApiErrorDetailsInner) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *ApiErrorDetailsInner) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *ApiErrorDetailsInner) SetField(v string)`

SetField sets Field field to given value.


### GetMessage

`func (o *ApiErrorDetailsInner) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiErrorDetailsInner) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiErrorDetailsInner) SetMessage(v string)`

SetMessage sets Message field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


