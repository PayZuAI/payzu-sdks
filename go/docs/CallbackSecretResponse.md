# CallbackSecretResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** | Confirmation of the created secret. | [optional] 
**Secret** | Pointer to **string** | Callback secret, 43 base64url characters. Store it: there is no route to read it again. | [optional] 

## Methods

### NewCallbackSecretResponse

`func NewCallbackSecretResponse() *CallbackSecretResponse`

NewCallbackSecretResponse instantiates a new CallbackSecretResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallbackSecretResponseWithDefaults

`func NewCallbackSecretResponseWithDefaults() *CallbackSecretResponse`

NewCallbackSecretResponseWithDefaults instantiates a new CallbackSecretResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *CallbackSecretResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CallbackSecretResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CallbackSecretResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CallbackSecretResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetSecret

`func (o *CallbackSecretResponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *CallbackSecretResponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *CallbackSecretResponse) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *CallbackSecretResponse) HasSecret() bool`

HasSecret returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


