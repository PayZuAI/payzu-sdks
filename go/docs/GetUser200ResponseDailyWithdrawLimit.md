# GetUser200ResponseDailyWithdrawLimit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Limit** | Pointer to **float32** | Daily outbound cap, in reais, summing withdrawals and internal transfers. | [optional] 
**Used** | Pointer to **float32** | Total of the cap consumed in the day, in reais, by withdrawals and internal transfers. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Date and time of the last change to the daily limit. | [optional] 
**LastReset** | Pointer to **NullableTime** | Moment of the last reset of the daily usage. | [optional] 

## Methods

### NewGetUser200ResponseDailyWithdrawLimit

`func NewGetUser200ResponseDailyWithdrawLimit() *GetUser200ResponseDailyWithdrawLimit`

NewGetUser200ResponseDailyWithdrawLimit instantiates a new GetUser200ResponseDailyWithdrawLimit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUser200ResponseDailyWithdrawLimitWithDefaults

`func NewGetUser200ResponseDailyWithdrawLimitWithDefaults() *GetUser200ResponseDailyWithdrawLimit`

NewGetUser200ResponseDailyWithdrawLimitWithDefaults instantiates a new GetUser200ResponseDailyWithdrawLimit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLimit

`func (o *GetUser200ResponseDailyWithdrawLimit) GetLimit() float32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *GetUser200ResponseDailyWithdrawLimit) GetLimitOk() (*float32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *GetUser200ResponseDailyWithdrawLimit) SetLimit(v float32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *GetUser200ResponseDailyWithdrawLimit) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetUsed

`func (o *GetUser200ResponseDailyWithdrawLimit) GetUsed() float32`

GetUsed returns the Used field if non-nil, zero value otherwise.

### GetUsedOk

`func (o *GetUser200ResponseDailyWithdrawLimit) GetUsedOk() (*float32, bool)`

GetUsedOk returns a tuple with the Used field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsed

`func (o *GetUser200ResponseDailyWithdrawLimit) SetUsed(v float32)`

SetUsed sets Used field to given value.

### HasUsed

`func (o *GetUser200ResponseDailyWithdrawLimit) HasUsed() bool`

HasUsed returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *GetUser200ResponseDailyWithdrawLimit) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *GetUser200ResponseDailyWithdrawLimit) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *GetUser200ResponseDailyWithdrawLimit) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *GetUser200ResponseDailyWithdrawLimit) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetLastReset

`func (o *GetUser200ResponseDailyWithdrawLimit) GetLastReset() time.Time`

GetLastReset returns the LastReset field if non-nil, zero value otherwise.

### GetLastResetOk

`func (o *GetUser200ResponseDailyWithdrawLimit) GetLastResetOk() (*time.Time, bool)`

GetLastResetOk returns a tuple with the LastReset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReset

`func (o *GetUser200ResponseDailyWithdrawLimit) SetLastReset(v time.Time)`

SetLastReset sets LastReset field to given value.

### HasLastReset

`func (o *GetUser200ResponseDailyWithdrawLimit) HasLastReset() bool`

HasLastReset returns a boolean if a field has been set.

### SetLastResetNil

`func (o *GetUser200ResponseDailyWithdrawLimit) SetLastResetNil(b bool)`

 SetLastResetNil sets the value for LastReset to be an explicit nil

### UnsetLastReset
`func (o *GetUser200ResponseDailyWithdrawLimit) UnsetLastReset()`

UnsetLastReset ensures that no value is present for LastReset, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


