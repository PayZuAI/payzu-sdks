# Refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Refund identifier. | [optional] 
**Amount** | Pointer to **float32** | Refunded amount in BRL. | [optional] 
**Reason** | Pointer to **string** | Refund reason. | [optional] 
**Description** | Pointer to **NullableString** | Refund description. | [optional] 
**Status** | Pointer to **string** | Refund status. | [optional] 
**EndToEndId** | Pointer to **NullableString** | End-to-end ID of the refund Pix. | [optional] 
**RefundedAt** | Pointer to **NullableTime** | When the refund was completed. | [optional] 
**CreatedAt** | Pointer to **time.Time** | When the refund was requested. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Last change to the refund. | [optional] 

## Methods

### NewRefund

`func NewRefund() *Refund`

NewRefund instantiates a new Refund object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundWithDefaults

`func NewRefundWithDefaults() *Refund`

NewRefundWithDefaults instantiates a new Refund object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Refund) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Refund) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Refund) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Refund) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAmount

`func (o *Refund) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Refund) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Refund) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *Refund) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetReason

`func (o *Refund) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Refund) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Refund) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Refund) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetDescription

`func (o *Refund) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Refund) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Refund) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Refund) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Refund) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Refund) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetStatus

`func (o *Refund) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Refund) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Refund) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Refund) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetEndToEndId

`func (o *Refund) GetEndToEndId() string`

GetEndToEndId returns the EndToEndId field if non-nil, zero value otherwise.

### GetEndToEndIdOk

`func (o *Refund) GetEndToEndIdOk() (*string, bool)`

GetEndToEndIdOk returns a tuple with the EndToEndId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndToEndId

`func (o *Refund) SetEndToEndId(v string)`

SetEndToEndId sets EndToEndId field to given value.

### HasEndToEndId

`func (o *Refund) HasEndToEndId() bool`

HasEndToEndId returns a boolean if a field has been set.

### SetEndToEndIdNil

`func (o *Refund) SetEndToEndIdNil(b bool)`

 SetEndToEndIdNil sets the value for EndToEndId to be an explicit nil

### UnsetEndToEndId
`func (o *Refund) UnsetEndToEndId()`

UnsetEndToEndId ensures that no value is present for EndToEndId, not even an explicit nil
### GetRefundedAt

`func (o *Refund) GetRefundedAt() time.Time`

GetRefundedAt returns the RefundedAt field if non-nil, zero value otherwise.

### GetRefundedAtOk

`func (o *Refund) GetRefundedAtOk() (*time.Time, bool)`

GetRefundedAtOk returns a tuple with the RefundedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundedAt

`func (o *Refund) SetRefundedAt(v time.Time)`

SetRefundedAt sets RefundedAt field to given value.

### HasRefundedAt

`func (o *Refund) HasRefundedAt() bool`

HasRefundedAt returns a boolean if a field has been set.

### SetRefundedAtNil

`func (o *Refund) SetRefundedAtNil(b bool)`

 SetRefundedAtNil sets the value for RefundedAt to be an explicit nil

### UnsetRefundedAt
`func (o *Refund) UnsetRefundedAt()`

UnsetRefundedAt ensures that no value is present for RefundedAt, not even an explicit nil
### GetCreatedAt

`func (o *Refund) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Refund) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Refund) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Refund) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Refund) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Refund) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Refund) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Refund) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


