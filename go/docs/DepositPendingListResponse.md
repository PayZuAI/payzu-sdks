# DepositPendingListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Page** | Pointer to **int32** |  | [optional] 
**Limit** | Pointer to **int32** |  | [optional] 
**HasNextPage** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**[]DepositPending**](DepositPending.md) |  | [optional] 

## Methods

### NewDepositPendingListResponse

`func NewDepositPendingListResponse() *DepositPendingListResponse`

NewDepositPendingListResponse instantiates a new DepositPendingListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositPendingListResponseWithDefaults

`func NewDepositPendingListResponseWithDefaults() *DepositPendingListResponse`

NewDepositPendingListResponseWithDefaults instantiates a new DepositPendingListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPage

`func (o *DepositPendingListResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *DepositPendingListResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *DepositPendingListResponse) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *DepositPendingListResponse) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetLimit

`func (o *DepositPendingListResponse) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *DepositPendingListResponse) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *DepositPendingListResponse) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *DepositPendingListResponse) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHasNextPage

`func (o *DepositPendingListResponse) GetHasNextPage() bool`

GetHasNextPage returns the HasNextPage field if non-nil, zero value otherwise.

### GetHasNextPageOk

`func (o *DepositPendingListResponse) GetHasNextPageOk() (*bool, bool)`

GetHasNextPageOk returns a tuple with the HasNextPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNextPage

`func (o *DepositPendingListResponse) SetHasNextPage(v bool)`

SetHasNextPage sets HasNextPage field to given value.

### HasHasNextPage

`func (o *DepositPendingListResponse) HasHasNextPage() bool`

HasHasNextPage returns a boolean if a field has been set.

### GetData

`func (o *DepositPendingListResponse) GetData() []DepositPending`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *DepositPendingListResponse) GetDataOk() (*[]DepositPending, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *DepositPendingListResponse) SetData(v []DepositPending)`

SetData sets Data field to given value.

### HasData

`func (o *DepositPendingListResponse) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


