# Summary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalTransactions** | Pointer to **int32** | Quantidade de transações no período. | [optional] 
**Deposit** | Pointer to [**SummaryBlock**](SummaryBlock.md) | Resumo das entradas da conta no período, ou seja, das transações do tipo DEPOSIT. | [optional] 
**Withdraw** | Pointer to [**SummaryBlock**](SummaryBlock.md) | Resumo das saídas da conta no período, ou seja, das transações do tipo WITHDRAW. | [optional] 
**Commission** | Pointer to [**SummaryBlock**](SummaryBlock.md) | Resumo das comissões creditadas à conta no período (transações do tipo COMMISSION). | [optional] 
**Adjustment** | Pointer to [**SummaryBlock**](SummaryBlock.md) | Resumo dos ajustes no período (transações do tipo ADJUSTMENT). | [optional] 

## Methods

### NewSummary

`func NewSummary() *Summary`

NewSummary instantiates a new Summary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummaryWithDefaults

`func NewSummaryWithDefaults() *Summary`

NewSummaryWithDefaults instantiates a new Summary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalTransactions

`func (o *Summary) GetTotalTransactions() int32`

GetTotalTransactions returns the TotalTransactions field if non-nil, zero value otherwise.

### GetTotalTransactionsOk

`func (o *Summary) GetTotalTransactionsOk() (*int32, bool)`

GetTotalTransactionsOk returns a tuple with the TotalTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalTransactions

`func (o *Summary) SetTotalTransactions(v int32)`

SetTotalTransactions sets TotalTransactions field to given value.

### HasTotalTransactions

`func (o *Summary) HasTotalTransactions() bool`

HasTotalTransactions returns a boolean if a field has been set.

### GetDeposit

`func (o *Summary) GetDeposit() SummaryBlock`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *Summary) GetDepositOk() (*SummaryBlock, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *Summary) SetDeposit(v SummaryBlock)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *Summary) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetWithdraw

`func (o *Summary) GetWithdraw() SummaryBlock`

GetWithdraw returns the Withdraw field if non-nil, zero value otherwise.

### GetWithdrawOk

`func (o *Summary) GetWithdrawOk() (*SummaryBlock, bool)`

GetWithdrawOk returns a tuple with the Withdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithdraw

`func (o *Summary) SetWithdraw(v SummaryBlock)`

SetWithdraw sets Withdraw field to given value.

### HasWithdraw

`func (o *Summary) HasWithdraw() bool`

HasWithdraw returns a boolean if a field has been set.

### GetCommission

`func (o *Summary) GetCommission() SummaryBlock`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *Summary) GetCommissionOk() (*SummaryBlock, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *Summary) SetCommission(v SummaryBlock)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *Summary) HasCommission() bool`

HasCommission returns a boolean if a field has been set.

### GetAdjustment

`func (o *Summary) GetAdjustment() SummaryBlock`

GetAdjustment returns the Adjustment field if non-nil, zero value otherwise.

### GetAdjustmentOk

`func (o *Summary) GetAdjustmentOk() (*SummaryBlock, bool)`

GetAdjustmentOk returns a tuple with the Adjustment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustment

`func (o *Summary) SetAdjustment(v SummaryBlock)`

SetAdjustment sets Adjustment field to given value.

### HasAdjustment

`func (o *Summary) HasAdjustment() bool`

HasAdjustment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


