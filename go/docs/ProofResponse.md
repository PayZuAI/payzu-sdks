# ProofResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Base64** | Pointer to **string** | PDF receipt as a base64 data URI (&#x60;data:application/pdf;base64,...&#x60;), returned when type&#x3D;base64. | [optional] 

## Methods

### NewProofResponse

`func NewProofResponse() *ProofResponse`

NewProofResponse instantiates a new ProofResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProofResponseWithDefaults

`func NewProofResponseWithDefaults() *ProofResponse`

NewProofResponseWithDefaults instantiates a new ProofResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBase64

`func (o *ProofResponse) GetBase64() string`

GetBase64 returns the Base64 field if non-nil, zero value otherwise.

### GetBase64Ok

`func (o *ProofResponse) GetBase64Ok() (*string, bool)`

GetBase64Ok returns a tuple with the Base64 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBase64

`func (o *ProofResponse) SetBase64(v string)`

SetBase64 sets Base64 field to given value.

### HasBase64

`func (o *ProofResponse) HasBase64() bool`

HasBase64 returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


