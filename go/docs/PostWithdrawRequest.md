# PostWithdrawRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **float32** | Valor em BRL, com no máximo 2 casas decimais. Mínimo de 0,01. | 
**PixKey** | **string** | Chave Pix de destino no formato do pixType: CPF ou CNPJ com dígitos verificadores válidos e sem pontuação, celular como +55 seguido de DDD e número, e-mail ou chave aleatória (EVP). | 
**PixType** | **string** | Tipo da chave Pix. | 
**CallbackUrl** | Pointer to **string** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**ClientReference** | Pointer to **string** | Referência externa deste saque. Repetida com o mesmo valor e a mesma chave, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional] 
**Description** | Pointer to **string** | Descrição opcional. | [optional] 
**VirtualAccount** | Pointer to **string** | Subconta para separar lojas ou filiais. | [optional] 

## Methods

### NewPostWithdrawRequest

`func NewPostWithdrawRequest(amount float32, pixKey string, pixType string, ) *PostWithdrawRequest`

NewPostWithdrawRequest instantiates a new PostWithdrawRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostWithdrawRequestWithDefaults

`func NewPostWithdrawRequestWithDefaults() *PostWithdrawRequest`

NewPostWithdrawRequestWithDefaults instantiates a new PostWithdrawRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PostWithdrawRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PostWithdrawRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PostWithdrawRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetPixKey

`func (o *PostWithdrawRequest) GetPixKey() string`

GetPixKey returns the PixKey field if non-nil, zero value otherwise.

### GetPixKeyOk

`func (o *PostWithdrawRequest) GetPixKeyOk() (*string, bool)`

GetPixKeyOk returns a tuple with the PixKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPixKey

`func (o *PostWithdrawRequest) SetPixKey(v string)`

SetPixKey sets PixKey field to given value.


### GetPixType

`func (o *PostWithdrawRequest) GetPixType() string`

GetPixType returns the PixType field if non-nil, zero value otherwise.

### GetPixTypeOk

`func (o *PostWithdrawRequest) GetPixTypeOk() (*string, bool)`

GetPixTypeOk returns a tuple with the PixType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPixType

`func (o *PostWithdrawRequest) SetPixType(v string)`

SetPixType sets PixType field to given value.


### GetCallbackUrl

`func (o *PostWithdrawRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *PostWithdrawRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *PostWithdrawRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *PostWithdrawRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetClientReference

`func (o *PostWithdrawRequest) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *PostWithdrawRequest) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *PostWithdrawRequest) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *PostWithdrawRequest) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### GetDescription

`func (o *PostWithdrawRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PostWithdrawRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PostWithdrawRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PostWithdrawRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetVirtualAccount

`func (o *PostWithdrawRequest) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *PostWithdrawRequest) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *PostWithdrawRequest) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *PostWithdrawRequest) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


