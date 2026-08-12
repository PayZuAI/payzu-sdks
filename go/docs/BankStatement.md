# BankStatement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Amount** | Pointer to **float32** |  | [optional] 
**Operation** | Pointer to **string** | INCREMENT credits the balance, DECREMENT debits it. | [optional] 
**Reason** | Pointer to **string** | Internal reason for the credit/debit. | [optional] 
**BalanceType** | Pointer to **string** |  | [optional] 
**PreviousBalanceAvailable** | Pointer to **float32** |  | [optional] 
**PreviousBalanceBlocked** | Pointer to **float32** |  | [optional] 
**NewBalanceAvailable** | Pointer to **float32** |  | [optional] 
**NewBalanceBlocked** | Pointer to **float32** |  | [optional] 
**TransactionId** | Pointer to **string** |  | [optional] 
**InfractionId** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewBankStatement

`func NewBankStatement() *BankStatement`

NewBankStatement instantiates a new BankStatement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankStatementWithDefaults

`func NewBankStatementWithDefaults() *BankStatement`

NewBankStatementWithDefaults instantiates a new BankStatement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BankStatement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BankStatement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BankStatement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BankStatement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAmount

`func (o *BankStatement) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *BankStatement) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *BankStatement) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *BankStatement) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetOperation

`func (o *BankStatement) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *BankStatement) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *BankStatement) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *BankStatement) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetReason

`func (o *BankStatement) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *BankStatement) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *BankStatement) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *BankStatement) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetBalanceType

`func (o *BankStatement) GetBalanceType() string`

GetBalanceType returns the BalanceType field if non-nil, zero value otherwise.

### GetBalanceTypeOk

`func (o *BankStatement) GetBalanceTypeOk() (*string, bool)`

GetBalanceTypeOk returns a tuple with the BalanceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceType

`func (o *BankStatement) SetBalanceType(v string)`

SetBalanceType sets BalanceType field to given value.

### HasBalanceType

`func (o *BankStatement) HasBalanceType() bool`

HasBalanceType returns a boolean if a field has been set.

### GetPreviousBalanceAvailable

`func (o *BankStatement) GetPreviousBalanceAvailable() float32`

GetPreviousBalanceAvailable returns the PreviousBalanceAvailable field if non-nil, zero value otherwise.

### GetPreviousBalanceAvailableOk

`func (o *BankStatement) GetPreviousBalanceAvailableOk() (*float32, bool)`

GetPreviousBalanceAvailableOk returns a tuple with the PreviousBalanceAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousBalanceAvailable

`func (o *BankStatement) SetPreviousBalanceAvailable(v float32)`

SetPreviousBalanceAvailable sets PreviousBalanceAvailable field to given value.

### HasPreviousBalanceAvailable

`func (o *BankStatement) HasPreviousBalanceAvailable() bool`

HasPreviousBalanceAvailable returns a boolean if a field has been set.

### GetPreviousBalanceBlocked

`func (o *BankStatement) GetPreviousBalanceBlocked() float32`

GetPreviousBalanceBlocked returns the PreviousBalanceBlocked field if non-nil, zero value otherwise.

### GetPreviousBalanceBlockedOk

`func (o *BankStatement) GetPreviousBalanceBlockedOk() (*float32, bool)`

GetPreviousBalanceBlockedOk returns a tuple with the PreviousBalanceBlocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousBalanceBlocked

`func (o *BankStatement) SetPreviousBalanceBlocked(v float32)`

SetPreviousBalanceBlocked sets PreviousBalanceBlocked field to given value.

### HasPreviousBalanceBlocked

`func (o *BankStatement) HasPreviousBalanceBlocked() bool`

HasPreviousBalanceBlocked returns a boolean if a field has been set.

### GetNewBalanceAvailable

`func (o *BankStatement) GetNewBalanceAvailable() float32`

GetNewBalanceAvailable returns the NewBalanceAvailable field if non-nil, zero value otherwise.

### GetNewBalanceAvailableOk

`func (o *BankStatement) GetNewBalanceAvailableOk() (*float32, bool)`

GetNewBalanceAvailableOk returns a tuple with the NewBalanceAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBalanceAvailable

`func (o *BankStatement) SetNewBalanceAvailable(v float32)`

SetNewBalanceAvailable sets NewBalanceAvailable field to given value.

### HasNewBalanceAvailable

`func (o *BankStatement) HasNewBalanceAvailable() bool`

HasNewBalanceAvailable returns a boolean if a field has been set.

### GetNewBalanceBlocked

`func (o *BankStatement) GetNewBalanceBlocked() float32`

GetNewBalanceBlocked returns the NewBalanceBlocked field if non-nil, zero value otherwise.

### GetNewBalanceBlockedOk

`func (o *BankStatement) GetNewBalanceBlockedOk() (*float32, bool)`

GetNewBalanceBlockedOk returns a tuple with the NewBalanceBlocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBalanceBlocked

`func (o *BankStatement) SetNewBalanceBlocked(v float32)`

SetNewBalanceBlocked sets NewBalanceBlocked field to given value.

### HasNewBalanceBlocked

`func (o *BankStatement) HasNewBalanceBlocked() bool`

HasNewBalanceBlocked returns a boolean if a field has been set.

### GetTransactionId

`func (o *BankStatement) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *BankStatement) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *BankStatement) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *BankStatement) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetInfractionId

`func (o *BankStatement) GetInfractionId() string`

GetInfractionId returns the InfractionId field if non-nil, zero value otherwise.

### GetInfractionIdOk

`func (o *BankStatement) GetInfractionIdOk() (*string, bool)`

GetInfractionIdOk returns a tuple with the InfractionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfractionId

`func (o *BankStatement) SetInfractionId(v string)`

SetInfractionId sets InfractionId field to given value.

### HasInfractionId

`func (o *BankStatement) HasInfractionId() bool`

HasInfractionId returns a boolean if a field has been set.

### GetCreatedAt

`func (o *BankStatement) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *BankStatement) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *BankStatement) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *BankStatement) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *BankStatement) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *BankStatement) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *BankStatement) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *BankStatement) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


