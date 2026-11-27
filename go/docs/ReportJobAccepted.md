# ReportJobAccepted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identificador (UUID) do relatório, gerado no momento da solicitação. | [optional] 
**Status** | Pointer to **string** | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. | [optional] 
**CreatedAt** | Pointer to **time.Time** | Data e hora em que a geração do relatório foi solicitada. | [optional] 
**UpdatedAt** | Pointer to **time.Time** | Data e hora da última alteração no registro do relatório. | [optional] 
**Params** | Pointer to **map[string]interface{}** | Filtros usados na criação do relatório. | [optional] 
**WrittenRows** | Pointer to **NullableInt32** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. | [optional] 
**ExpiresAt** | Pointer to **NullableTime** | Data em que o arquivo do relatório expira. | [optional] 

## Methods

### NewReportJobAccepted

`func NewReportJobAccepted() *ReportJobAccepted`

NewReportJobAccepted instantiates a new ReportJobAccepted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReportJobAcceptedWithDefaults

`func NewReportJobAcceptedWithDefaults() *ReportJobAccepted`

NewReportJobAcceptedWithDefaults instantiates a new ReportJobAccepted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReportJobAccepted) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReportJobAccepted) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReportJobAccepted) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReportJobAccepted) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *ReportJobAccepted) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ReportJobAccepted) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ReportJobAccepted) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ReportJobAccepted) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ReportJobAccepted) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ReportJobAccepted) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ReportJobAccepted) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ReportJobAccepted) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ReportJobAccepted) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ReportJobAccepted) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ReportJobAccepted) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ReportJobAccepted) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetParams

`func (o *ReportJobAccepted) GetParams() map[string]interface{}`

GetParams returns the Params field if non-nil, zero value otherwise.

### GetParamsOk

`func (o *ReportJobAccepted) GetParamsOk() (*map[string]interface{}, bool)`

GetParamsOk returns a tuple with the Params field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParams

`func (o *ReportJobAccepted) SetParams(v map[string]interface{})`

SetParams sets Params field to given value.

### HasParams

`func (o *ReportJobAccepted) HasParams() bool`

HasParams returns a boolean if a field has been set.

### GetWrittenRows

`func (o *ReportJobAccepted) GetWrittenRows() int32`

GetWrittenRows returns the WrittenRows field if non-nil, zero value otherwise.

### GetWrittenRowsOk

`func (o *ReportJobAccepted) GetWrittenRowsOk() (*int32, bool)`

GetWrittenRowsOk returns a tuple with the WrittenRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWrittenRows

`func (o *ReportJobAccepted) SetWrittenRows(v int32)`

SetWrittenRows sets WrittenRows field to given value.

### HasWrittenRows

`func (o *ReportJobAccepted) HasWrittenRows() bool`

HasWrittenRows returns a boolean if a field has been set.

### SetWrittenRowsNil

`func (o *ReportJobAccepted) SetWrittenRowsNil(b bool)`

 SetWrittenRowsNil sets the value for WrittenRows to be an explicit nil

### UnsetWrittenRows
`func (o *ReportJobAccepted) UnsetWrittenRows()`

UnsetWrittenRows ensures that no value is present for WrittenRows, not even an explicit nil
### GetExpiresAt

`func (o *ReportJobAccepted) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *ReportJobAccepted) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *ReportJobAccepted) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *ReportJobAccepted) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *ReportJobAccepted) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *ReportJobAccepted) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


