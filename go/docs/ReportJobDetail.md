# ReportJobDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Report identifier (UUID), generated when the report is requested. | [optional] 
**Status** | Pointer to **string** | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. | [optional] 
**CreatedAt** | Pointer to **time.Time** | Date and time the report generation was requested. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Date and time of the last change to the report record. | [optional] 
**ExpiresAt** | Pointer to **NullableTime** | When the file expires from storage (usually 7 days after creation) | [optional] 
**Params** | Pointer to **map[string]interface{}** | Filters used when the report was created. | [optional] 
**WrittenRows** | Pointer to **NullableInt32** | Rows written to the file. Null until the report is COMPLETED. | [optional] 

## Methods

### NewReportJobDetail

`func NewReportJobDetail() *ReportJobDetail`

NewReportJobDetail instantiates a new ReportJobDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportJobDetailWithDefaults

`func NewReportJobDetailWithDefaults() *ReportJobDetail`

NewReportJobDetailWithDefaults instantiates a new ReportJobDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReportJobDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReportJobDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReportJobDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReportJobDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *ReportJobDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReportJobDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReportJobDetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ReportJobDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ReportJobDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ReportJobDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ReportJobDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ReportJobDetail) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ReportJobDetail) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ReportJobDetail) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ReportJobDetail) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ReportJobDetail) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *ReportJobDetail) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *ReportJobDetail) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *ReportJobDetail) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *ReportJobDetail) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *ReportJobDetail) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *ReportJobDetail) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil
### GetParams

`func (o *ReportJobDetail) GetParams() map[string]interface{}`

GetParams returns the Params field if non-nil, zero value otherwise.

### GetParamsOk

`func (o *ReportJobDetail) GetParamsOk() (*map[string]interface{}, bool)`

GetParamsOk returns a tuple with the Params field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParams

`func (o *ReportJobDetail) SetParams(v map[string]interface{})`

SetParams sets Params field to given value.

### HasParams

`func (o *ReportJobDetail) HasParams() bool`

HasParams returns a boolean if a field has been set.

### GetWrittenRows

`func (o *ReportJobDetail) GetWrittenRows() int32`

GetWrittenRows returns the WrittenRows field if non-nil, zero value otherwise.

### GetWrittenRowsOk

`func (o *ReportJobDetail) GetWrittenRowsOk() (*int32, bool)`

GetWrittenRowsOk returns a tuple with the WrittenRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWrittenRows

`func (o *ReportJobDetail) SetWrittenRows(v int32)`

SetWrittenRows sets WrittenRows field to given value.

### HasWrittenRows

`func (o *ReportJobDetail) HasWrittenRows() bool`

HasWrittenRows returns a boolean if a field has been set.

### SetWrittenRowsNil

`func (o *ReportJobDetail) SetWrittenRowsNil(b bool)`

 SetWrittenRowsNil sets the value for WrittenRows to be an explicit nil

### UnsetWrittenRows
`func (o *ReportJobDetail) UnsetWrittenRows()`

UnsetWrittenRows ensures that no value is present for WrittenRows, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


