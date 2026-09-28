# InfractionListResponsePagination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Page** | Pointer to **int32** | Page returned, the same as the page parameter sent in the query; when omitted, it is 1. | [optional] 
**Limit** | Pointer to **int32** | Page size applied in the query; when omitted it is 10 and the maximum accepted is 100. | [optional] 
**TotalItems** | Pointer to **int32** | Number of infractions that match the filters, counted up to 100,000. | [optional] 
**TotalPages** | Pointer to **int32** | Number of pages for the limit provided, taken from totalItems rounded up. | [optional] 

## Methods

### NewInfractionListResponsePagination

`func NewInfractionListResponsePagination() *InfractionListResponsePagination`

NewInfractionListResponsePagination instantiates a new InfractionListResponsePagination object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfractionListResponsePaginationWithDefaults

`func NewInfractionListResponsePaginationWithDefaults() *InfractionListResponsePagination`

NewInfractionListResponsePaginationWithDefaults instantiates a new InfractionListResponsePagination object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPage

`func (o *InfractionListResponsePagination) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *InfractionListResponsePagination) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *InfractionListResponsePagination) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *InfractionListResponsePagination) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetLimit

`func (o *InfractionListResponsePagination) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *InfractionListResponsePagination) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *InfractionListResponsePagination) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *InfractionListResponsePagination) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetTotalItems

`func (o *InfractionListResponsePagination) GetTotalItems() int32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *InfractionListResponsePagination) GetTotalItemsOk() (*int32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *InfractionListResponsePagination) SetTotalItems(v int32)`

SetTotalItems sets TotalItems field to given value.

### HasTotalItems

`func (o *InfractionListResponsePagination) HasTotalItems() bool`

HasTotalItems returns a boolean if a field has been set.

### GetTotalPages

`func (o *InfractionListResponsePagination) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *InfractionListResponsePagination) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *InfractionListResponsePagination) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *InfractionListResponsePagination) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


