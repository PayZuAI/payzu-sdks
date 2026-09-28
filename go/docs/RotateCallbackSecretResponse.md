# RotateCallbackSecretResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** | Pointer to **string** | Callback secret, 43 base64url characters. Store it: there is no route to read it again. | [optional] 

## Methods

### NewRotateCallbackSecretResponse

`func NewRotateCallbackSecretResponse() *RotateCallbackSecretResponse`

NewRotateCallbackSecretResponse instantiates a new RotateCallbackSecretResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotateCallbackSecretResponseWithDefaults

`func NewRotateCallbackSecretResponseWithDefaults() *RotateCallbackSecretResponse`

NewRotateCallbackSecretResponseWithDefaults instantiates a new RotateCallbackSecretResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecret

`func (o *RotateCallbackSecretResponse) GetSecret() string`

GetSecret returns the Secret field if non-nil, zero value otherwise.

### GetSecretOk

`func (o *RotateCallbackSecretResponse) GetSecretOk() (*string, bool)`

GetSecretOk returns a tuple with the Secret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecret

`func (o *RotateCallbackSecretResponse) SetSecret(v string)`

SetSecret sets Secret field to given value.

### HasSecret

`func (o *RotateCallbackSecretResponse) HasSecret() bool`

HasSecret returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


