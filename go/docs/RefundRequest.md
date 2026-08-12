# RefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | Amount in BRL to refund. Omit to refund the full transaction amount. Partial refunds are allowed up to the original amount. | [optional] 
**Description** | Pointer to **string** | Free-text description for the refund. | [optional] 
**ClientReference** | Pointer to **string** | Idempotency key. Reusing it with the same amount replays the existing refund; reusing it with a different amount is rejected. | [optional] 

## Methods

### NewRefundRequest

`func NewRefundRequest() *RefundRequest`

NewRefundRequest instantiates a new RefundRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundRequestWithDefaults

`func NewRefundRequestWithDefaults() *RefundRequest`

NewRefundRequestWithDefaults instantiates a new RefundRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *RefundRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RefundRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RefundRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *RefundRequest) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetDescription

`func (o *RefundRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RefundRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RefundRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RefundRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetClientReference

`func (o *RefundRequest) GetClientReference() string`

GetClientReference returns the ClientReference field if non-nil, zero value otherwise.

### GetClientReferenceOk

`func (o *RefundRequest) GetClientReferenceOk() (*string, bool)`

GetClientReferenceOk returns a tuple with the ClientReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientReference

`func (o *RefundRequest) SetClientReference(v string)`

SetClientReference sets ClientReference field to given value.

### HasClientReference

`func (o *RefundRequest) HasClientReference() bool`

HasClientReference returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


