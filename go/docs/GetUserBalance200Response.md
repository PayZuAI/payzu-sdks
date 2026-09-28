# GetUserBalance200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BalanceAvailable** | Pointer to **float32** | Balance free for withdrawals and transfers, in reais, of the account that owns the token. | [optional] 
**BalanceBlocked** | Pointer to **float32** | Balance held and unavailable, in reais. | [optional] 

## Methods

### NewGetUserBalance200Response

`func NewGetUserBalance200Response() *GetUserBalance200Response`

NewGetUserBalance200Response instantiates a new GetUserBalance200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserBalance200ResponseWithDefaults

`func NewGetUserBalance200ResponseWithDefaults() *GetUserBalance200Response`

NewGetUserBalance200ResponseWithDefaults instantiates a new GetUserBalance200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBalanceAvailable

`func (o *GetUserBalance200Response) GetBalanceAvailable() float32`

GetBalanceAvailable returns the BalanceAvailable field if non-nil, zero value otherwise.

### GetBalanceAvailableOk

`func (o *GetUserBalance200Response) GetBalanceAvailableOk() (*float32, bool)`

GetBalanceAvailableOk returns a tuple with the BalanceAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceAvailable

`func (o *GetUserBalance200Response) SetBalanceAvailable(v float32)`

SetBalanceAvailable sets BalanceAvailable field to given value.

### HasBalanceAvailable

`func (o *GetUserBalance200Response) HasBalanceAvailable() bool`

HasBalanceAvailable returns a boolean if a field has been set.

### GetBalanceBlocked

`func (o *GetUserBalance200Response) GetBalanceBlocked() float32`

GetBalanceBlocked returns the BalanceBlocked field if non-nil, zero value otherwise.

### GetBalanceBlockedOk

`func (o *GetUserBalance200Response) GetBalanceBlockedOk() (*float32, bool)`

GetBalanceBlockedOk returns a tuple with the BalanceBlocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceBlocked

`func (o *GetUserBalance200Response) SetBalanceBlocked(v float32)`

SetBalanceBlocked sets BalanceBlocked field to given value.

### HasBalanceBlocked

`func (o *GetUserBalance200Response) HasBalanceBlocked() bool`

HasBalanceBlocked returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


