# GetUser200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**AccountNumber** | Pointer to **string** | Public account identifier (6 digits, unique). Used as destination for internal transfers. | [optional] 
**Branch** | Pointer to **string** | Branch number (4 digits). | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Role** | Pointer to **string** |  | [optional] 
**BalanceAvailable** | Pointer to **float32** |  | [optional] 
**BalanceBlocked** | Pointer to **float32** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**AllowWithdraw** | Pointer to **bool** |  | [optional] 
**AllowDeposit** | Pointer to **bool** |  | [optional] 
**AllowInfraction** | Pointer to **bool** |  | [optional] 
**CashInTicketMin** | Pointer to **float32** |  | [optional] 
**CashInTicketMax** | Pointer to **float32** |  | [optional] 
**CashOutTicketMin** | Pointer to **float32** |  | [optional] 
**CashOutTicketMax** | Pointer to **float32** |  | [optional] 
**AutoWithdraw** | Pointer to **map[string]interface{}** |  | [optional] 
**ServiceFee** | Pointer to [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional] 
**DailyWithdrawLimit** | Pointer to [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional] 

## Methods

### NewGetUser200Response

`func NewGetUser200Response() *GetUser200Response`

NewGetUser200Response instantiates a new GetUser200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUser200ResponseWithDefaults

`func NewGetUser200ResponseWithDefaults() *GetUser200Response`

NewGetUser200ResponseWithDefaults instantiates a new GetUser200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GetUser200Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GetUser200Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GetUser200Response) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GetUser200Response) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccountNumber

`func (o *GetUser200Response) GetAccountNumber() string`

GetAccountNumber returns the AccountNumber field if non-nil, zero value otherwise.

### GetAccountNumberOk

`func (o *GetUser200Response) GetAccountNumberOk() (*string, bool)`

GetAccountNumberOk returns a tuple with the AccountNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNumber

`func (o *GetUser200Response) SetAccountNumber(v string)`

SetAccountNumber sets AccountNumber field to given value.

### HasAccountNumber

`func (o *GetUser200Response) HasAccountNumber() bool`

HasAccountNumber returns a boolean if a field has been set.

### GetBranch

`func (o *GetUser200Response) GetBranch() string`

GetBranch returns the Branch field if non-nil, zero value otherwise.

### GetBranchOk

`func (o *GetUser200Response) GetBranchOk() (*string, bool)`

GetBranchOk returns a tuple with the Branch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBranch

`func (o *GetUser200Response) SetBranch(v string)`

SetBranch sets Branch field to given value.

### HasBranch

`func (o *GetUser200Response) HasBranch() bool`

HasBranch returns a boolean if a field has been set.

### GetName

`func (o *GetUser200Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GetUser200Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GetUser200Response) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GetUser200Response) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRole

`func (o *GetUser200Response) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *GetUser200Response) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *GetUser200Response) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *GetUser200Response) HasRole() bool`

HasRole returns a boolean if a field has been set.

### GetBalanceAvailable

`func (o *GetUser200Response) GetBalanceAvailable() float32`

GetBalanceAvailable returns the BalanceAvailable field if non-nil, zero value otherwise.

### GetBalanceAvailableOk

`func (o *GetUser200Response) GetBalanceAvailableOk() (*float32, bool)`

GetBalanceAvailableOk returns a tuple with the BalanceAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceAvailable

`func (o *GetUser200Response) SetBalanceAvailable(v float32)`

SetBalanceAvailable sets BalanceAvailable field to given value.

### HasBalanceAvailable

`func (o *GetUser200Response) HasBalanceAvailable() bool`

HasBalanceAvailable returns a boolean if a field has been set.

### GetBalanceBlocked

`func (o *GetUser200Response) GetBalanceBlocked() float32`

GetBalanceBlocked returns the BalanceBlocked field if non-nil, zero value otherwise.

### GetBalanceBlockedOk

`func (o *GetUser200Response) GetBalanceBlockedOk() (*float32, bool)`

GetBalanceBlockedOk returns a tuple with the BalanceBlocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceBlocked

`func (o *GetUser200Response) SetBalanceBlocked(v float32)`

SetBalanceBlocked sets BalanceBlocked field to given value.

### HasBalanceBlocked

`func (o *GetUser200Response) HasBalanceBlocked() bool`

HasBalanceBlocked returns a boolean if a field has been set.

### GetStatus

`func (o *GetUser200Response) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetUser200Response) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetUser200Response) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetUser200Response) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetAllowWithdraw

`func (o *GetUser200Response) GetAllowWithdraw() bool`

GetAllowWithdraw returns the AllowWithdraw field if non-nil, zero value otherwise.

### GetAllowWithdrawOk

`func (o *GetUser200Response) GetAllowWithdrawOk() (*bool, bool)`

GetAllowWithdrawOk returns a tuple with the AllowWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowWithdraw

`func (o *GetUser200Response) SetAllowWithdraw(v bool)`

SetAllowWithdraw sets AllowWithdraw field to given value.

### HasAllowWithdraw

`func (o *GetUser200Response) HasAllowWithdraw() bool`

HasAllowWithdraw returns a boolean if a field has been set.

### GetAllowDeposit

`func (o *GetUser200Response) GetAllowDeposit() bool`

GetAllowDeposit returns the AllowDeposit field if non-nil, zero value otherwise.

### GetAllowDepositOk

`func (o *GetUser200Response) GetAllowDepositOk() (*bool, bool)`

GetAllowDepositOk returns a tuple with the AllowDeposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDeposit

`func (o *GetUser200Response) SetAllowDeposit(v bool)`

SetAllowDeposit sets AllowDeposit field to given value.

### HasAllowDeposit

`func (o *GetUser200Response) HasAllowDeposit() bool`

HasAllowDeposit returns a boolean if a field has been set.

### GetAllowInfraction

`func (o *GetUser200Response) GetAllowInfraction() bool`

GetAllowInfraction returns the AllowInfraction field if non-nil, zero value otherwise.

### GetAllowInfractionOk

`func (o *GetUser200Response) GetAllowInfractionOk() (*bool, bool)`

GetAllowInfractionOk returns a tuple with the AllowInfraction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowInfraction

`func (o *GetUser200Response) SetAllowInfraction(v bool)`

SetAllowInfraction sets AllowInfraction field to given value.

### HasAllowInfraction

`func (o *GetUser200Response) HasAllowInfraction() bool`

HasAllowInfraction returns a boolean if a field has been set.

### GetCashInTicketMin

`func (o *GetUser200Response) GetCashInTicketMin() float32`

GetCashInTicketMin returns the CashInTicketMin field if non-nil, zero value otherwise.

### GetCashInTicketMinOk

`func (o *GetUser200Response) GetCashInTicketMinOk() (*float32, bool)`

GetCashInTicketMinOk returns a tuple with the CashInTicketMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashInTicketMin

`func (o *GetUser200Response) SetCashInTicketMin(v float32)`

SetCashInTicketMin sets CashInTicketMin field to given value.

### HasCashInTicketMin

`func (o *GetUser200Response) HasCashInTicketMin() bool`

HasCashInTicketMin returns a boolean if a field has been set.

### GetCashInTicketMax

`func (o *GetUser200Response) GetCashInTicketMax() float32`

GetCashInTicketMax returns the CashInTicketMax field if non-nil, zero value otherwise.

### GetCashInTicketMaxOk

`func (o *GetUser200Response) GetCashInTicketMaxOk() (*float32, bool)`

GetCashInTicketMaxOk returns a tuple with the CashInTicketMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashInTicketMax

`func (o *GetUser200Response) SetCashInTicketMax(v float32)`

SetCashInTicketMax sets CashInTicketMax field to given value.

### HasCashInTicketMax

`func (o *GetUser200Response) HasCashInTicketMax() bool`

HasCashInTicketMax returns a boolean if a field has been set.

### GetCashOutTicketMin

`func (o *GetUser200Response) GetCashOutTicketMin() float32`

GetCashOutTicketMin returns the CashOutTicketMin field if non-nil, zero value otherwise.

### GetCashOutTicketMinOk

`func (o *GetUser200Response) GetCashOutTicketMinOk() (*float32, bool)`

GetCashOutTicketMinOk returns a tuple with the CashOutTicketMin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashOutTicketMin

`func (o *GetUser200Response) SetCashOutTicketMin(v float32)`

SetCashOutTicketMin sets CashOutTicketMin field to given value.

### HasCashOutTicketMin

`func (o *GetUser200Response) HasCashOutTicketMin() bool`

HasCashOutTicketMin returns a boolean if a field has been set.

### GetCashOutTicketMax

`func (o *GetUser200Response) GetCashOutTicketMax() float32`

GetCashOutTicketMax returns the CashOutTicketMax field if non-nil, zero value otherwise.

### GetCashOutTicketMaxOk

`func (o *GetUser200Response) GetCashOutTicketMaxOk() (*float32, bool)`

GetCashOutTicketMaxOk returns a tuple with the CashOutTicketMax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashOutTicketMax

`func (o *GetUser200Response) SetCashOutTicketMax(v float32)`

SetCashOutTicketMax sets CashOutTicketMax field to given value.

### HasCashOutTicketMax

`func (o *GetUser200Response) HasCashOutTicketMax() bool`

HasCashOutTicketMax returns a boolean if a field has been set.

### GetAutoWithdraw

`func (o *GetUser200Response) GetAutoWithdraw() map[string]interface{}`

GetAutoWithdraw returns the AutoWithdraw field if non-nil, zero value otherwise.

### GetAutoWithdrawOk

`func (o *GetUser200Response) GetAutoWithdrawOk() (*map[string]interface{}, bool)`

GetAutoWithdrawOk returns a tuple with the AutoWithdraw field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoWithdraw

`func (o *GetUser200Response) SetAutoWithdraw(v map[string]interface{})`

SetAutoWithdraw sets AutoWithdraw field to given value.

### HasAutoWithdraw

`func (o *GetUser200Response) HasAutoWithdraw() bool`

HasAutoWithdraw returns a boolean if a field has been set.

### GetServiceFee

`func (o *GetUser200Response) GetServiceFee() GetUser200ResponseServiceFee`

GetServiceFee returns the ServiceFee field if non-nil, zero value otherwise.

### GetServiceFeeOk

`func (o *GetUser200Response) GetServiceFeeOk() (*GetUser200ResponseServiceFee, bool)`

GetServiceFeeOk returns a tuple with the ServiceFee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceFee

`func (o *GetUser200Response) SetServiceFee(v GetUser200ResponseServiceFee)`

SetServiceFee sets ServiceFee field to given value.

### HasServiceFee

`func (o *GetUser200Response) HasServiceFee() bool`

HasServiceFee returns a boolean if a field has been set.

### GetDailyWithdrawLimit

`func (o *GetUser200Response) GetDailyWithdrawLimit() GetUser200ResponseDailyWithdrawLimit`

GetDailyWithdrawLimit returns the DailyWithdrawLimit field if non-nil, zero value otherwise.

### GetDailyWithdrawLimitOk

`func (o *GetUser200Response) GetDailyWithdrawLimitOk() (*GetUser200ResponseDailyWithdrawLimit, bool)`

GetDailyWithdrawLimitOk returns a tuple with the DailyWithdrawLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyWithdrawLimit

`func (o *GetUser200Response) SetDailyWithdrawLimit(v GetUser200ResponseDailyWithdrawLimit)`

SetDailyWithdrawLimit sets DailyWithdrawLimit field to given value.

### HasDailyWithdrawLimit

`func (o *GetUser200Response) HasDailyWithdrawLimit() bool`

HasDailyWithdrawLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


