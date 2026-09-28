# InfractionListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infractions** | Pointer to [**[]InfractionDetail**](InfractionDetail.md) | Infractions of the requested page, each in the same format as the detail. | [optional] 
**Pagination** | Pointer to [**InfractionListResponsePagination**](InfractionListResponsePagination.md) |  | [optional] 

## Methods

### NewInfractionListResponse

`func NewInfractionListResponse() *InfractionListResponse`

NewInfractionListResponse instantiates a new InfractionListResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfractionListResponseWithDefaults

`func NewInfractionListResponseWithDefaults() *InfractionListResponse`

NewInfractionListResponseWithDefaults instantiates a new InfractionListResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfractions

`func (o *InfractionListResponse) GetInfractions() []InfractionDetail`

GetInfractions returns the Infractions field if non-nil, zero value otherwise.

### GetInfractionsOk

`func (o *InfractionListResponse) GetInfractionsOk() (*[]InfractionDetail, bool)`

GetInfractionsOk returns a tuple with the Infractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfractions

`func (o *InfractionListResponse) SetInfractions(v []InfractionDetail)`

SetInfractions sets Infractions field to given value.

### HasInfractions

`func (o *InfractionListResponse) HasInfractions() bool`

HasInfractions returns a boolean if a field has been set.

### GetPagination

`func (o *InfractionListResponse) GetPagination() InfractionListResponsePagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *InfractionListResponse) GetPaginationOk() (*InfractionListResponsePagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *InfractionListResponse) SetPagination(v InfractionListResponsePagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *InfractionListResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


