# PostInternalTransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PayerAccountNumber** | **string** | Payer account number (6 digits). Must match the authenticated user&#39;s accountNumber. | 
**ReceiverAccountNumber** | **string** | Destination account number (6 digits). | 
**Amount** | **float32** | Transfer amount in BRL, with at most 2 decimal places. | 
**Description** | Pointer to **string** | Optional transfer description. | [optional] 
**CallbackUrl** | Pointer to **string** | URL for transaction notifications (http or https). | [optional] 
**ClientReference** | Pointer to **string** | External reference for idempotency / reconciliation. | [optional] 
**VirtualAccount** | Pointer to **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional] 

## Methods

### NewPostInternalTransferRequest

`func NewPostInternalTransferRequest(payerAccountNumber string, receiverAccountNumber string, amount float32, ) *PostInternalTransferRequest`

NewPostInternalTransferRequest instantiates a new PostInternalTransferRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostInternalTransferRequestWithDefaults

`func NewPostInternalTransferRequestWithDefaults() *PostInternalTransferRequest`

NewPostInternalTransferRequestWithDefaults instantiates a new PostInternalTransferRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPayerAccountNumber

`func (o *PostInternalTransferRequest) GetPayerAccountNumber() string`

GetPayerAccountNumber returns the PayerAccountNumber field if non-nil, zero value otherwise.

### GetPayerAccountNumberOk

`func (o *PostInternalTransferRequest) GetPayerAccountNumberOk() (*string, bool)`

GetPayerAccountNumberOk returns a tuple with the PayerAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerAccountNumber

`func (o *PostInternalTransferRequest) SetPayerAccountNumber(v string)`

SetPayerAccountNumber sets PayerAccountNumber field to given value.


### GetReceiverAccountNumber

`func (o *PostInternalTransferRequest) GetReceiverAccountNumber() string`

GetReceiverAccountNumber returns the ReceiverAccountNumber field if non-nil, zero value otherwise.

### GetReceiverAccountNumberOk

`func (o *PostInternalTransferRequest) GetReceiverAccountNumberOk() (*string, bool)`

GetReceiverAccountNumberOk returns a tuple with the ReceiverAccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiverAccountNumber

`func (o *PostInternalTransferRequest) SetReceiverAccountNumber(v string)`

SetReceiverAccountNumber sets ReceiverAccountNumber field to given value.


### GetAmount

`func (o *PostInternalTransferRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PostInternalTransferRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PostInternalTransferRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetDescription

`func (o *PostInternalTransferRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PostInternalTransferRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PostInternalTransferRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PostInternalTransferRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCallbackUrl

`func (o *PostInternalTransferRequest) GetCallbackUrl() string`

GetCallbackUrl returns the CallbackUrl field if non-nil, zero value otherwise.

### GetCallbackUrlOk

`func (o *PostInternalTransferRequest) GetCallbackUrlOk() (*string, bool)`

GetCallbackUrlOk returns a tuple with the CallbackUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackUrl

`func (o *PostInternalTransferRequest) SetCallbackUrl(v string)`

SetCallbackUrl sets CallbackUrl field to given value.

### HasCallbackUrl

`func (o *PostInternalTransferRequest) HasCallbackUrl() bool`

HasCallbackUrl returns a boolean if a field has been set.

### GetClientReference

`func (o *PostInternalTransferRequest) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *PostInternalTransferRequest) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *PostInternalTransferRequest) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *PostInternalTransferRequest) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.

### GetVirtualAccount

`func (o *PostInternalTransferRequest) GetVirtualAccount() string`

GetVirtualAccount returns the VirtualAccount field if non-nil, zero value otherwise.

### GetVirtualAccountOk

`func (o *PostInternalTransferRequest) GetVirtualAccountOk() (*string, bool)`

GetVirtualAccountOk returns a tuple with the VirtualAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVirtualAccount

`func (o *PostInternalTransferRequest) SetVirtualAccount(v string)`

SetVirtualAccount sets VirtualAccount field to given value.

### HasVirtualAccount

`func (o *PostInternalTransferRequest) HasVirtualAccount() bool`

HasVirtualAccount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


