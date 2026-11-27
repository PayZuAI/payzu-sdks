# GetUserPixKeys200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PixKey** | **string** | Chave Pix de recebimento da conta. | 
**AccountName** | **string** | Titular da conta da chave. | 
**AccountDocument** | **string** | CPF ou CNPJ do titular da conta da chave. | 
**InstitutionName** | **string** | Instituição da conta da chave. | 

## Methods

### NewGetUserPixKeys200Response

`func NewGetUserPixKeys200Response(pixKey string, accountName string, accountDocument string, institutionName string, ) *GetUserPixKeys200Response`

NewGetUserPixKeys200Response instantiates a new GetUserPixKeys200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserPixKeys200ResponseWithDefaults

`func NewGetUserPixKeys200ResponseWithDefaults() *GetUserPixKeys200Response`

NewGetUserPixKeys200ResponseWithDefaults instantiates a new GetUserPixKeys200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPixKey

`func (o *GetUserPixKeys200Response) GetPixKey() string`

GetPixKey returns the PixKey field if non-nil, zero value otherwise.

### GetPixKeyOk

`func (o *GetUserPixKeys200Response) GetPixKeyOk() (*string, bool)`

GetPixKeyOk returns a tuple with the PixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPixKey

`func (o *GetUserPixKeys200Response) SetPixKey(v string)`

SetPixKey sets PixKey field to given value.


### GetAccountName

`func (o *GetUserPixKeys200Response) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *GetUserPixKeys200Response) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *GetUserPixKeys200Response) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.


### GetAccountDocument

`func (o *GetUserPixKeys200Response) GetAccountDocument() string`

GetAccountDocument returns the AccountDocument field if non-nil, zero value otherwise.

### GetAccountDocumentOk

`func (o *GetUserPixKeys200Response) GetAccountDocumentOk() (*string, bool)`

GetAccountDocumentOk returns a tuple with the AccountDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountDocument

`func (o *GetUserPixKeys200Response) SetAccountDocument(v string)`

SetAccountDocument sets AccountDocument field to given value.


### GetInstitutionName

`func (o *GetUserPixKeys200Response) GetInstitutionName() string`

GetInstitutionName returns the InstitutionName field if non-nil, zero value otherwise.

### GetInstitutionNameOk

`func (o *GetUserPixKeys200Response) GetInstitutionNameOk() (*string, bool)`

GetInstitutionNameOk returns a tuple with the InstitutionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstitutionName

`func (o *GetUserPixKeys200Response) SetInstitutionName(v string)`

SetInstitutionName sets InstitutionName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


