# CallbackListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**CallbackListResponsePagination**](CallbackListResponsePagination.md) |  | [optional] 
**Callbacks** | Pointer to [**[]CallbackDetail**](CallbackDetail.md) | Array de logs de callback | [optional] 

## Methods

### NewCallbackListResponse

`func NewCallbackListResponse() *CallbackListResponse`

NewCallbackListResponse instantiates a new CallbackListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallbackListResponseWithDefaults

`func NewCallbackListResponseWithDefaults() *CallbackListResponse`

NewCallbackListResponseWithDefaults instantiates a new CallbackListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *CallbackListResponse) GetPagination() CallbackListResponsePagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *CallbackListResponse) GetPaginationOk() (*CallbackListResponsePagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *CallbackListResponse) SetPagination(v CallbackListResponsePagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *CallbackListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetCallbacks

`func (o *CallbackListResponse) GetCallbacks() []CallbackDetail`

GetCallbacks returns the Callbacks field if non-nil, zero value otherwise.

### GetCallbacksOk

`func (o *CallbackListResponse) GetCallbacksOk() (*[]CallbackDetail, bool)`

GetCallbacksOk returns a tuple with the Callbacks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbacks

`func (o *CallbackListResponse) SetCallbacks(v []CallbackDetail)`

SetCallbacks sets Callbacks field to given value.

### HasCallbacks

`func (o *CallbackListResponse) HasCallbacks() bool`

HasCallbacks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


