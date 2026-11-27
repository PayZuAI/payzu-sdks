# PostPixRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **float32** | Valor da cobrança, em reais, com no máximo 2 casas decimais. | 
**CallbackUrl** | Pointer to **string** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] 
**GeneratedName** | Pointer to **string** | Nome usado para montar a cobrança. | [optional] 
**GeneratedEmail** | Pointer to **string** | E-mail usado para montar a cobrança. | [optional] 
**GeneratedDocument** | Pointer to **string** | CPF (11 dígitos) ou CNPJ (14 dígitos) do pagador, sem pontuação e com dígitos verificadores válidos. Obrigatório a partir do valor definido na conta (PZD602). | [optional] 
**ExpiresIn** | Pointer to **int32** | Segundos até o QR Code expirar, em número inteiro. | [optional] 
**ClientReference** | Pointer to **string** | Referência externa (pedido, fatura etc.). Um clientReference já usado devolve a transação criada com ele. | [optional] 
**VirtualAccount** | Pointer to **string** | Subconta para separar lojas ou filiais. | [optional] 

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

`func (o *PostPixRequest) GetExpiresIn() int32`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *PostPixRequest) GetExpiresInOk() (*int32, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *PostPixRequest) SetExpiresIn(v int32)`

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


