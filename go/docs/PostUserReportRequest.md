# PostUserReportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateFrom** | **time.Time** | Start of the report period. | 
**DateTo** | **time.Time** | End of the report period. | 
**Status** | Pointer to **[]string** | Transaction statuses included in the file. Empty or omitted: all. | [optional] 
**Type** | Pointer to **[]string** | Transaction types included in the file. Empty or omitted: all. | [optional] 

## Methods

### NewPostUserReportRequest

`func NewPostUserReportRequest(dateFrom time.Time, dateTo time.Time, ) *PostUserReportRequest`

NewPostUserReportRequest instantiates a new PostUserReportRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostUserReportRequestWithDefaults

`func NewPostUserReportRequestWithDefaults() *PostUserReportRequest`

NewPostUserReportRequestWithDefaults instantiates a new PostUserReportRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateFrom

`func (o *PostUserReportRequest) GetDateFrom() time.Time`

GetDateFrom returns the DateFrom field if non-nil, zero value otherwise.

### GetDateFromOk

`func (o *PostUserReportRequest) GetDateFromOk() (*time.Time, bool)`

GetDateFromOk returns a tuple with the DateFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFrom

`func (o *PostUserReportRequest) SetDateFrom(v time.Time)`

SetDateFrom sets DateFrom field to given value.


### GetDateTo

`func (o *PostUserReportRequest) GetDateTo() time.Time`

GetDateTo returns the DateTo field if non-nil, zero value otherwise.

### GetDateToOk

`func (o *PostUserReportRequest) GetDateToOk() (*time.Time, bool)`

GetDateToOk returns a tuple with the DateTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTo

`func (o *PostUserReportRequest) SetDateTo(v time.Time)`

SetDateTo sets DateTo field to given value.


### GetStatus

`func (o *PostUserReportRequest) GetStatus() []string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PostUserReportRequest) GetStatusOk() (*[]string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PostUserReportRequest) SetStatus(v []string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *PostUserReportRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *PostUserReportRequest) GetType() []string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PostUserReportRequest) GetTypeOk() (*[]string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PostUserReportRequest) SetType(v []string)`

SetType sets Type field to given value.

### HasType

`func (o *PostUserReportRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


