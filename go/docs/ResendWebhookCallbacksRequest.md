# ResendWebhookCallbacksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAtFrom** | **time.Time** | Start of the delivery period. At most 30 days ago. | 
**CreatedAtTo** | **time.Time** | End of the delivery period, on or after createdAtFrom. The window cannot exceed 7 days. | 
**WebhookIds** | Pointer to **[]string** | Webhooks to resend. Omitted: all active webhooks of the account. | [optional] 
**TransactionIds** | Pointer to **[]string** | Restrict to specific transaction IDs. | [optional] 
**TransactionTypes** | Pointer to **[]string** | Filter by transaction type. | [optional] 
**TransactionStatus** | Pointer to **[]string** | Filter by the current transaction status. | [optional] 
**TransactionEndToEndIds** | Pointer to **[]string** | Restrict to specific end-to-end IDs. | [optional] 

## Methods

### NewResendWebhookCallbacksRequest

`func NewResendWebhookCallbacksRequest(createdAtFrom time.Time, createdAtTo time.Time, ) *ResendWebhookCallbacksRequest`

NewResendWebhookCallbacksRequest instantiates a new ResendWebhookCallbacksRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResendWebhookCallbacksRequestWithDefaults

`func NewResendWebhookCallbacksRequestWithDefaults() *ResendWebhookCallbacksRequest`

NewResendWebhookCallbacksRequestWithDefaults instantiates a new ResendWebhookCallbacksRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAtFrom

`func (o *ResendWebhookCallbacksRequest) GetCreatedAtFrom() time.Time`

GetCreatedAtFrom returns the CreatedAtFrom field if non-nil, zero value otherwise.

### GetCreatedAtFromOk

`func (o *ResendWebhookCallbacksRequest) GetCreatedAtFromOk() (*time.Time, bool)`

GetCreatedAtFromOk returns a tuple with the CreatedAtFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAtFrom

`func (o *ResendWebhookCallbacksRequest) SetCreatedAtFrom(v time.Time)`

SetCreatedAtFrom sets CreatedAtFrom field to given value.


### GetCreatedAtTo

`func (o *ResendWebhookCallbacksRequest) GetCreatedAtTo() time.Time`

GetCreatedAtTo returns the CreatedAtTo field if non-nil, zero value otherwise.

### GetCreatedAtToOk

`func (o *ResendWebhookCallbacksRequest) GetCreatedAtToOk() (*time.Time, bool)`

GetCreatedAtToOk returns a tuple with the CreatedAtTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAtTo

`func (o *ResendWebhookCallbacksRequest) SetCreatedAtTo(v time.Time)`

SetCreatedAtTo sets CreatedAtTo field to given value.


### GetWebhookIds

`func (o *ResendWebhookCallbacksRequest) GetWebhookIds() []string`

GetWebhookIds returns the WebhookIds field if non-nil, zero value otherwise.

### GetWebhookIdsOk

`func (o *ResendWebhookCallbacksRequest) GetWebhookIdsOk() (*[]string, bool)`

GetWebhookIdsOk returns a tuple with the WebhookIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookIds

`func (o *ResendWebhookCallbacksRequest) SetWebhookIds(v []string)`

SetWebhookIds sets WebhookIds field to given value.

### HasWebhookIds

`func (o *ResendWebhookCallbacksRequest) HasWebhookIds() bool`

HasWebhookIds returns a boolean if a field has been set.

### GetTransactionIds

`func (o *ResendWebhookCallbacksRequest) GetTransactionIds() []string`

GetTransactionIds returns the TransactionIds field if non-nil, zero value otherwise.

### GetTransactionIdsOk

`func (o *ResendWebhookCallbacksRequest) GetTransactionIdsOk() (*[]string, bool)`

GetTransactionIdsOk returns a tuple with the TransactionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionIds

`func (o *ResendWebhookCallbacksRequest) SetTransactionIds(v []string)`

SetTransactionIds sets TransactionIds field to given value.

### HasTransactionIds

`func (o *ResendWebhookCallbacksRequest) HasTransactionIds() bool`

HasTransactionIds returns a boolean if a field has been set.

### GetTransactionTypes

`func (o *ResendWebhookCallbacksRequest) GetTransactionTypes() []string`

GetTransactionTypes returns the TransactionTypes field if non-nil, zero value otherwise.

### GetTransactionTypesOk

`func (o *ResendWebhookCallbacksRequest) GetTransactionTypesOk() (*[]string, bool)`

GetTransactionTypesOk returns a tuple with the TransactionTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionTypes

`func (o *ResendWebhookCallbacksRequest) SetTransactionTypes(v []string)`

SetTransactionTypes sets TransactionTypes field to given value.

### HasTransactionTypes

`func (o *ResendWebhookCallbacksRequest) HasTransactionTypes() bool`

HasTransactionTypes returns a boolean if a field has been set.

### GetTransactionStatus

`func (o *ResendWebhookCallbacksRequest) GetTransactionStatus() []string`

GetTransactionStatus returns the TransactionStatus field if non-nil, zero value otherwise.

### GetTransactionStatusOk

`func (o *ResendWebhookCallbacksRequest) GetTransactionStatusOk() (*[]string, bool)`

GetTransactionStatusOk returns a tuple with the TransactionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionStatus

`func (o *ResendWebhookCallbacksRequest) SetTransactionStatus(v []string)`

SetTransactionStatus sets TransactionStatus field to given value.

### HasTransactionStatus

`func (o *ResendWebhookCallbacksRequest) HasTransactionStatus() bool`

HasTransactionStatus returns a boolean if a field has been set.

### GetTransactionEndToEndIds

`func (o *ResendWebhookCallbacksRequest) GetTransactionEndToEndIds() []string`

GetTransactionEndToEndIds returns the TransactionEndToEndIds field if non-nil, zero value otherwise.

### GetTransactionEndToEndIdsOk

`func (o *ResendWebhookCallbacksRequest) GetTransactionEndToEndIdsOk() (*[]string, bool)`

GetTransactionEndToEndIdsOk returns a tuple with the TransactionEndToEndIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionEndToEndIds

`func (o *ResendWebhookCallbacksRequest) SetTransactionEndToEndIds(v []string)`

SetTransactionEndToEndIds sets TransactionEndToEndIds field to given value.

### HasTransactionEndToEndIds

`func (o *ResendWebhookCallbacksRequest) HasTransactionEndToEndIds() bool`

HasTransactionEndToEndIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


