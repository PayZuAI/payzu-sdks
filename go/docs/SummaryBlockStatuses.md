# SummaryBlockStatuses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pending** | Pointer to [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**Completed** | Pointer to [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**Canceled** | Pointer to [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**Expired** | Pointer to [**SummaryStatus**](SummaryStatus.md) |  | [optional] 
**Refunded** | Pointer to [**SummaryStatus**](SummaryStatus.md) |  | [optional] 

## Methods

### NewSummaryBlockStatuses

`func NewSummaryBlockStatuses() *SummaryBlockStatuses`

NewSummaryBlockStatuses instantiates a new SummaryBlockStatuses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummaryBlockStatusesWithDefaults

`func NewSummaryBlockStatusesWithDefaults() *SummaryBlockStatuses`

NewSummaryBlockStatusesWithDefaults instantiates a new SummaryBlockStatuses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPending

`func (o *SummaryBlockStatuses) GetPending() SummaryStatus`

GetPending returns the Pending field if non-nil, zero value otherwise.

### GetPendingOk

`func (o *SummaryBlockStatuses) GetPendingOk() (*SummaryStatus, bool)`

GetPendingOk returns a tuple with the Pending field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPending

`func (o *SummaryBlockStatuses) SetPending(v SummaryStatus)`

SetPending sets Pending field to given value.

### HasPending

`func (o *SummaryBlockStatuses) HasPending() bool`

HasPending returns a boolean if a field has been set.

### GetCompleted

`func (o *SummaryBlockStatuses) GetCompleted() SummaryStatus`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *SummaryBlockStatuses) GetCompletedOk() (*SummaryStatus, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *SummaryBlockStatuses) SetCompleted(v SummaryStatus)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *SummaryBlockStatuses) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetCanceled

`func (o *SummaryBlockStatuses) GetCanceled() SummaryStatus`

GetCanceled returns the Canceled field if non-nil, zero value otherwise.

### GetCanceledOk

`func (o *SummaryBlockStatuses) GetCanceledOk() (*SummaryStatus, bool)`

GetCanceledOk returns a tuple with the Canceled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanceled

`func (o *SummaryBlockStatuses) SetCanceled(v SummaryStatus)`

SetCanceled sets Canceled field to given value.

### HasCanceled

`func (o *SummaryBlockStatuses) HasCanceled() bool`

HasCanceled returns a boolean if a field has been set.

### GetExpired

`func (o *SummaryBlockStatuses) GetExpired() SummaryStatus`

GetExpired returns the Expired field if non-nil, zero value otherwise.

### GetExpiredOk

`func (o *SummaryBlockStatuses) GetExpiredOk() (*SummaryStatus, bool)`

GetExpiredOk returns a tuple with the Expired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpired

`func (o *SummaryBlockStatuses) SetExpired(v SummaryStatus)`

SetExpired sets Expired field to given value.

### HasExpired

`func (o *SummaryBlockStatuses) HasExpired() bool`

HasExpired returns a boolean if a field has been set.

### GetRefunded

`func (o *SummaryBlockStatuses) GetRefunded() SummaryStatus`

GetRefunded returns the Refunded field if non-nil, zero value otherwise.

### GetRefundedOk

`func (o *SummaryBlockStatuses) GetRefundedOk() (*SummaryStatus, bool)`

GetRefundedOk returns a tuple with the Refunded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunded

`func (o *SummaryBlockStatuses) SetRefunded(v SummaryStatus)`

SetRefunded sets Refunded field to given value.

### HasRefunded

`func (o *SummaryBlockStatuses) HasRefunded() bool`

HasRefunded returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


