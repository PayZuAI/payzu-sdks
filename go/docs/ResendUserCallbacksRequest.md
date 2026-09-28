# ResendUserCallbacksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAtFrom** | **time.Time** | Start of the period. At most 30 days ago. | 
**CreatedAtTo** | **time.Time** | End of the period, on or after createdAtFrom. The window between start and end cannot exceed 7 days. | 
**TransactionIds** | Pointer to **[]string** | Restrict to specific transaction IDs | [optional] 
**TransactionTypes** | Pointer to **[]string** | Filter by transaction type | [optional] 
**TransactionStatus** | Pointer to **[]string** | Filter by transaction status | [optional] 
**TransactionEndToEndIds** | Pointer to **[]string** | Restrict to specific Pix end-to-end IDs | [optional] 

## Methods

### NewResendUserCallbacksRequest

`func NewResendUserCallbacksRequest(createdAtFrom time.Time, createdAtTo time.Time, ) *ResendUserCallbacksRequest`

NewResendUserCallbacksRequest instantiates a new ResendUserCallbacksRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResendUserCallbacksRequestWithDefaults

`func NewResendUserCallbacksRequestWithDefaults() *ResendUserCallbacksRequest`

NewResendUserCallbacksRequestWithDefaults instantiates a new ResendUserCallbacksRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAtFrom

`func (o *ResendUserCallbacksRequest) GetCreatedAtFrom() time.Time`

GetCreatedAtFrom returns the CreatedAtFrom field if non-nil, zero value otherwise.

### GetCreatedAtFromOk

`func (o *ResendUserCallbacksRequest) GetCreatedAtFromOk() (*time.Time, bool)`

GetCreatedAtFromOk returns a tuple with the CreatedAtFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAtFrom

`func (o *ResendUserCallbacksRequest) SetCreatedAtFrom(v time.Time)`

SetCreatedAtFrom sets CreatedAtFrom field to given value.


### GetCreatedAtTo

`func (o *ResendUserCallbacksRequest) GetCreatedAtTo() time.Time`

GetCreatedAtTo returns the CreatedAtTo field if non-nil, zero value otherwise.

### GetCreatedAtToOk

`func (o *ResendUserCallbacksRequest) GetCreatedAtToOk() (*time.Time, bool)`

GetCreatedAtToOk returns a tuple with the CreatedAtTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAtTo

`func (o *ResendUserCallbacksRequest) SetCreatedAtTo(v time.Time)`

SetCreatedAtTo sets CreatedAtTo field to given value.


### GetTransactionIds

`func (o *ResendUserCallbacksRequest) GetTransactionIds() []string`

GetTransactionIds returns the TransactionIds field if non-nil, zero value otherwise.

### GetTransactionIdsOk

`func (o *ResendUserCallbacksRequest) GetTransactionIdsOk() (*[]string, bool)`

GetTransactionIdsOk returns a tuple with the TransactionIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionIds

`func (o *ResendUserCallbacksRequest) SetTransactionIds(v []string)`

SetTransactionIds sets TransactionIds field to given value.

### HasTransactionIds

`func (o *ResendUserCallbacksRequest) HasTransactionIds() bool`

HasTransactionIds returns a boolean if a field has been set.

### GetTransactionTypes

`func (o *ResendUserCallbacksRequest) GetTransactionTypes() []string`

GetTransactionTypes returns the TransactionTypes field if non-nil, zero value otherwise.

### GetTransactionTypesOk

`func (o *ResendUserCallbacksRequest) GetTransactionTypesOk() (*[]string, bool)`

GetTransactionTypesOk returns a tuple with the TransactionTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionTypes

`func (o *ResendUserCallbacksRequest) SetTransactionTypes(v []string)`

SetTransactionTypes sets TransactionTypes field to given value.

### HasTransactionTypes

`func (o *ResendUserCallbacksRequest) HasTransactionTypes() bool`

HasTransactionTypes returns a boolean if a field has been set.

### GetTransactionStatus

`func (o *ResendUserCallbacksRequest) GetTransactionStatus() []string`

GetTransactionStatus returns the TransactionStatus field if non-nil, zero value otherwise.

### GetTransactionStatusOk

`func (o *ResendUserCallbacksRequest) GetTransactionStatusOk() (*[]string, bool)`

GetTransactionStatusOk returns a tuple with the TransactionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionStatus

`func (o *ResendUserCallbacksRequest) SetTransactionStatus(v []string)`

SetTransactionStatus sets TransactionStatus field to given value.

### HasTransactionStatus

`func (o *ResendUserCallbacksRequest) HasTransactionStatus() bool`

HasTransactionStatus returns a boolean if a field has been set.

### GetTransactionEndToEndIds

`func (o *ResendUserCallbacksRequest) GetTransactionEndToEndIds() []string`

GetTransactionEndToEndIds returns the TransactionEndToEndIds field if non-nil, zero value otherwise.

### GetTransactionEndToEndIdsOk

`func (o *ResendUserCallbacksRequest) GetTransactionEndToEndIdsOk() (*[]string, bool)`

GetTransactionEndToEndIdsOk returns a tuple with the TransactionEndToEndIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionEndToEndIds

`func (o *ResendUserCallbacksRequest) SetTransactionEndToEndIds(v []string)`

SetTransactionEndToEndIds sets TransactionEndToEndIds field to given value.

### HasTransactionEndToEndIds

`func (o *ResendUserCallbacksRequest) HasTransactionEndToEndIds() bool`

HasTransactionEndToEndIds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


