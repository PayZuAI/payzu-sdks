# SummaryStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | Pointer to **int32** |  | [optional] 
**Amount** | Pointer to **float32** |  | [optional] 
**ServiceFeeCharged** | Pointer to **float32** | Service fee charged (hidden for limited accounts). | [optional] 

## Methods

### NewSummaryStatus

`func NewSummaryStatus() *SummaryStatus`

NewSummaryStatus instantiates a new SummaryStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummaryStatusWithDefaults

`func NewSummaryStatusWithDefaults() *SummaryStatus`

NewSummaryStatusWithDefaults instantiates a new SummaryStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *SummaryStatus) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *SummaryStatus) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *SummaryStatus) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *SummaryStatus) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetAmount

`func (o *SummaryStatus) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SummaryStatus) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SummaryStatus) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *SummaryStatus) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetServiceFeeCharged

`func (o *SummaryStatus) GetServiceFeeCharged() float32`

GetServiceFeeCharged returns the ServiceFeeCharged field if non-nil, zero value otherwise.

### GetServiceFeeChargedOk

`func (o *SummaryStatus) GetServiceFeeChargedOk() (*float32, bool)`

GetServiceFeeChargedOk returns a tuple with the ServiceFeeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFeeCharged

`func (o *SummaryStatus) SetServiceFeeCharged(v float32)`

SetServiceFeeCharged sets ServiceFeeCharged field to given value.

### HasServiceFeeCharged

`func (o *SummaryStatus) HasServiceFeeCharged() bool`

HasServiceFeeCharged returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


