# PostWithdrawQrcodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QrCode** | **string** | Pix QR Code payload (EMV format). | 
**Amount** | Pointer to **float32** | Amount in BRL, with at most 2 decimal places. Optional: if not provided, uses the QR Code&#39;s embedded value. | [optional] 
**CallbackUrl** | Pointer to **string** | URL for transaction notifications (http or https). | [optional] 
**Description** | Pointer to **string** | Optional description for the payment. | [optional] 
**ClientReference** | Pointer to **string** | External reference for this withdrawal. Repeating it with the same amount and QR Code returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional] 
**VirtualAccount** | Pointer to **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Methods

### NewPostWithdrawQrcodeRequest

`func NewPostWithdrawQrcodeRequest(qrCode string, ) *PostWithdrawQrcodeRequest`

NewPostWithdrawQrcodeRequest instantiates a new PostWithdrawQrcodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostWithdrawQrcodeRequestWithDefaults

`func NewPostWithdrawQrcodeRequestWithDefaults() *PostWithdrawQrcodeRequest`

NewPostWithdrawQrcodeRequestWithDefaults instantiates a new PostWithdrawQrcodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQrCode

`func (o *PostWithdrawQrcodeRequest) GetQrCode() string`

GetQrCode returns the QrCode field if non-nil, zero value otherwise.

### GetQrCodeOk

`func (o *PostWithdrawQrcodeRequest) GetQrCodeOk() (*string, bool)`

GetQrCodeOk returns a tuple with the QrCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQrCode

`func (o *PostWithdrawQrcodeRequest) SetQrCode(v string)`

SetQrCode sets QrCode field to given value.


### GetAmount

`func (o *PostWithdrawQrcodeRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PostWithdrawQrcodeRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PostWithdrawQrcodeRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PostWithdrawQrcodeRequest) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *PostWithdrawQrcodeRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *PostWithdrawQrcodeRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *PostWithdrawQrcodeRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *PostWithdrawQrcodeRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetDescription

`func (o *PostWithdrawQrcodeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PostWithdrawQrcodeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PostWithdrawQrcodeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PostWithdrawQrcodeRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetClientReference

`func (o *PostWithdrawQrcodeRequest) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *PostWithdrawQrcodeRequest) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *PostWithdrawQrcodeRequest) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *PostWithdrawQrcodeRequest) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### GetVirtualAccount

`func (o *PostWithdrawQrcodeRequest) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *PostWithdrawQrcodeRequest) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *PostWithdrawQrcodeRequest) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *PostWithdrawQrcodeRequest) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


