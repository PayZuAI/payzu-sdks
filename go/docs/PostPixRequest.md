# PostPixRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **float32** | Amount in BRL. Must be &gt;&#x3D; 1. | 
**CallbackUrl** | Pointer to **string** | URL for transaction notifications (http or https). | [optional] 
**GeneratedName** | Pointer to **string** | Payer full name. Letters and spaces only. | [optional] 
**GeneratedEmail** | Pointer to **string** | Payer email (optional). | [optional] 
**GeneratedDocument** | Pointer to **string** | Payer CPF (11 digits) or CNPJ (14 digits), no punctuation, with valid check digits. | [optional] 
**ExpiresIn** | Pointer to **float32** | Seconds until the QR Code expires. | [optional] 
**ClientReference** | Pointer to **string** | External reference (order, invoice, etc.). A clientReference already used returns the transaction created with it. | [optional] 
**VirtualAccount** | Pointer to **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Methods

### NewPostPixRequest

`func NewPostPixRequest(amount float32, ) *PostPixRequest`

NewPostPixRequest instantiates a new PostPixRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostPixRequestWithDefaults

`func NewPostPixRequestWithDefaults() *PostPixRequest`

NewPostPixRequestWithDefaults instantiates a new PostPixRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PostPixRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PostPixRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PostPixRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetCallbackUrl

`func (o *PostPixRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *PostPixRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *PostPixRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *PostPixRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetGeneratedName

`func (o *PostPixRequest) GetGeneratedName() string`

GetGeneratedName returns the GeneratedName field if non-nil, zero value otherwise.

### GetGeneratedNameOk

`func (o *PostPixRequest) GetGeneratedNameOk() (*string, bool)`

GetGeneratedNameOk returns a tuple with the GeneratedName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedName

`func (o *PostPixRequest) SetGeneratedName(v string)`

SetGeneratedName sets GeneratedName field to given value.

### HasGeneratedName

`func (o *PostPixRequest) HasGeneratedName() bool`

HasGeneratedName returns a boolean if a field has been set.

### GetGeneratedEmail

`func (o *PostPixRequest) GetGeneratedEmail() string`

GetGeneratedEmail returns the GeneratedEmail field if non-nil, zero value otherwise.

### GetGeneratedEmailOk

`func (o *PostPixRequest) GetGeneratedEmailOk() (*string, bool)`

GetGeneratedEmailOk returns a tuple with the GeneratedEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedEmail

`func (o *PostPixRequest) SetGeneratedEmail(v string)`

SetGeneratedEmail sets GeneratedEmail field to given value.

### HasGeneratedEmail

`func (o *PostPixRequest) HasGeneratedEmail() bool`

HasGeneratedEmail returns a boolean if a field has been set.

### GetGeneratedDocument

`func (o *PostPixRequest) GetGeneratedDocument() string`

GetGeneratedDocument returns the GeneratedDocument field if non-nil, zero value otherwise.

### GetGeneratedDocumentOk

`func (o *PostPixRequest) GetGeneratedDocumentOk() (*string, bool)`

GetGeneratedDocumentOk returns a tuple with the GeneratedDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratedDocument

`func (o *PostPixRequest) SetGeneratedDocument(v string)`

SetGeneratedDocument sets GeneratedDocument field to given value.

### HasGeneratedDocument

`func (o *PostPixRequest) HasGeneratedDocument() bool`

HasGeneratedDocument returns a boolean if a field has been set.

### GetExpiresIn

`func (o *PostPixRequest) GetExpiresIn() float32`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *PostPixRequest) GetExpiresInOk() (*float32, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *PostPixRequest) SetExpiresIn(v float32)`

SetExpiresIn sets ExpiresIn field to given value.

### HasExpiresIn

`func (o *PostPixRequest) HasExpiresIn() bool`

HasExpiresIn returns a boolean if a field has been set.

### GetClientReference

`func (o *PostPixRequest) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *PostPixRequest) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *PostPixRequest) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *PostPixRequest) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### GetVirtualAccount

`func (o *PostPixRequest) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *PostPixRequest) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *PostPixRequest) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *PostPixRequest) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


