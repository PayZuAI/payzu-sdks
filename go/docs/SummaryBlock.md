# SummaryBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalAmount** | Pointer to **float32** |  | [optional] 
**TotalTransactions** | Pointer to **int32** |  | [optional] 
**Statuses** | Pointer to [**SummaryBlockStatuses**](SummaryBlockStatuses.md) |  | [optional] 
**Grouped** | Pointer to [**[]SummaryBlockGroupedInner**](SummaryBlockGroupedInner.md) | Present only when grouped&#x3D;true. | [optional] 

## Methods

### NewSummaryBlock

`func NewSummaryBlock() *SummaryBlock`

NewSummaryBlock instantiates a new SummaryBlock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummaryBlockWithDefaults

`func NewSummaryBlockWithDefaults() *SummaryBlock`

NewSummaryBlockWithDefaults instantiates a new SummaryBlock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalAmount

`func (o *SummaryBlock) GetTotalAmount() float32`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *SummaryBlock) GetTotalAmountOk() (*float32, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *SummaryBlock) SetTotalAmount(v float32)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *SummaryBlock) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetTotalTransactions

`func (o *SummaryBlock) GetTotalTransactions() int32`

GetTotalTransactions returns the TotalTransactions field if non-nil, zero value otherwise.

### GetTotalTransactionsOk

`func (o *SummaryBlock) GetTotalTransactionsOk() (*int32, bool)`

GetTotalTransactionsOk returns a tuple with the TotalTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTransactions

`func (o *SummaryBlock) SetTotalTransactions(v int32)`

SetTotalTransactions sets TotalTransactions field to given value.

### HasTotalTransactions

`func (o *SummaryBlock) HasTotalTransactions() bool`

HasTotalTransactions returns a boolean if a field has been set.

### GetStatuses

`func (o *SummaryBlock) GetStatuses() SummaryBlockStatuses`

GetStatuses returns the Statuses field if non-nil, zero value otherwise.

### GetStatusesOk

`func (o *SummaryBlock) GetStatusesOk() (*SummaryBlockStatuses, bool)`

GetStatusesOk returns a tuple with the Statuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatuses

`func (o *SummaryBlock) SetStatuses(v SummaryBlockStatuses)`

SetStatuses sets Statuses field to given value.

### HasStatuses

`func (o *SummaryBlock) HasStatuses() bool`

HasStatuses returns a boolean if a field has been set.

### GetGrouped

`func (o *SummaryBlock) GetGrouped() []SummaryBlockGroupedInner`

GetGrouped returns the Grouped field if non-nil, zero value otherwise.

### GetGroupedOk

`func (o *SummaryBlock) GetGroupedOk() (*[]SummaryBlockGroupedInner, bool)`

GetGroupedOk returns a tuple with the Grouped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrouped

`func (o *SummaryBlock) SetGrouped(v []SummaryBlockGroupedInner)`

SetGrouped sets Grouped field to given value.

### HasGrouped

`func (o *SummaryBlock) HasGrouped() bool`

HasGrouped returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


