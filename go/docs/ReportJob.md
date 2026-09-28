# ReportJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Report identifier (UUID), generated when the report is requested. | [optional] 
**Status** | Pointer to **string** | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. | [optional] 
**CreatedAt** | Pointer to **time.Time** | Date and time the report generation was requested. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Date and time of the last change to the report record. | [optional] 
**ExpiresAt** | Pointer to **NullableTime** | When the file expires from storage (typically 7 days after creation) | [optional] 
**Params** | Pointer to **map[string]interface{}** | Filters used to generate the report. | [optional] 
**WrittenRows** | Pointer to **NullableInt32** | Rows written to the file. Null until the report is COMPLETED. | [optional] 

## Methods

### NewReportJob

`func NewReportJob() *ReportJob`

NewReportJob instantiates a new ReportJob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportJobWithDefaults

`func NewReportJobWithDefaults() *ReportJob`

NewReportJobWithDefaults instantiates a new ReportJob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReportJob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReportJob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReportJob) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReportJob) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *ReportJob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReportJob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReportJob) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ReportJob) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ReportJob) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ReportJob) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ReportJob) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ReportJob) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ReportJob) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ReportJob) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ReportJob) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ReportJob) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *ReportJob) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *ReportJob) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *ReportJob) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *ReportJob) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *ReportJob) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *ReportJob) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil
### GetParams

`func (o *ReportJob) GetParams() map[string]interface{}`

GetParams returns the Params field if non-nil, zero value otherwise.

### GetParamsOk

`func (o *ReportJob) GetParamsOk() (*map[string]interface{}, bool)`

GetParamsOk returns a tuple with the Params field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParams

`func (o *ReportJob) SetParams(v map[string]interface{})`

SetParams sets Params field to given value.

### HasParams

`func (o *ReportJob) HasParams() bool`

HasParams returns a boolean if a field has been set.

### GetWrittenRows

`func (o *ReportJob) GetWrittenRows() int32`

GetWrittenRows returns the WrittenRows field if non-nil, zero value otherwise.

### GetWrittenRowsOk

`func (o *ReportJob) GetWrittenRowsOk() (*int32, bool)`

GetWrittenRowsOk returns a tuple with the WrittenRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWrittenRows

`func (o *ReportJob) SetWrittenRows(v int32)`

SetWrittenRows sets WrittenRows field to given value.

### HasWrittenRows

`func (o *ReportJob) HasWrittenRows() bool`

HasWrittenRows returns a boolean if a field has been set.

### SetWrittenRowsNil

`func (o *ReportJob) SetWrittenRowsNil(b bool)`

 SetWrittenRowsNil sets the value for WrittenRows to be an explicit nil

### UnsetWrittenRows
`func (o *ReportJob) UnsetWrittenRows()`

UnsetWrittenRows ensures that no value is present for WrittenRows, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


