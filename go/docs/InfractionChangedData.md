# InfractionChangedData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identificador da infração na PayZu. Use em GET /user/infractions/{id} e na defesa. | 
**Protocol** | **string** | Código da infração no Bacen. | 
**Status** | **string** | Situação da infração. Só &#x60;OPEN&#x60; aceita defesa, e &#x60;CLOSED&#x60; traz o resultado em &#x60;analysisResult&#x60;. | 
**Type** | **string** | Tipo informado na abertura. | 
**ReportDetails** | **NullableString** | Motivo informado por quem abriu a infração. | 
**ReportedBy** | **string** | Quem abriu: &#x60;DEBITED_PARTICIPANT&#x60;, a instituição da conta debitada, ou &#x60;CREDITED_PARTICIPANT&#x60;, a da conta creditada. | 
**AnalysisResult** | **NullableString** | Resultado da análise: &#x60;AGREED&#x60;, a contestação procede e a devolução ao pagador segue, avisada em &#x60;TRANSACTION_REFUNDED&#x60;; &#x60;DISAGREED&#x60;, a contestação não procede. | 
**AnalysisDetails** | **NullableString** | Texto da decisão, quando a instituição envia. | 
**ReportedAt** | **time.Time** | Abertura da infração. | 
**ExpiresAt** | **NullableTime** | Prazo final para enviar a defesa. | 
**CreatedAt** | **time.Time** | Registro da infração na PayZu. | 
**UpdatedAt** | **time.Time** | Última mudança da infração. Com &#x60;infraction.id&#x60;, serve para deduplicar e ordenar. | 

## Methods

### NewInfractionChangedData

`func NewInfractionChangedData(id string, protocol string, status string, type_ string, reportDetails NullableString, reportedBy string, analysisResult NullableString, analysisDetails NullableString, reportedAt time.Time, expiresAt NullableTime, createdAt time.Time, updatedAt time.Time, ) *InfractionChangedData`

NewInfractionChangedData instantiates a new InfractionChangedData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfractionChangedDataWithDefaults

`func NewInfractionChangedDataWithDefaults() *InfractionChangedData`

NewInfractionChangedDataWithDefaults instantiates a new InfractionChangedData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InfractionChangedData) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InfractionChangedData) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InfractionChangedData) SetId(v string)`

SetId sets Id field to given value.


### GetProtocol

`func (o *InfractionChangedData) GetProtocol() string`

GetProtocol returns the Protocol field if non-nil, zero value otherwise.

### GetProtocolOk

`func (o *InfractionChangedData) GetProtocolOk() (*string, bool)`

GetProtocolOk returns a tuple with the Protocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocol

`func (o *InfractionChangedData) SetProtocol(v string)`

SetProtocol sets Protocol field to given value.


### GetStatus

`func (o *InfractionChangedData) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InfractionChangedData) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InfractionChangedData) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *InfractionChangedData) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InfractionChangedData) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InfractionChangedData) SetType(v string)`

SetType sets Type field to given value.


### GetReportDetails

`func (o *InfractionChangedData) GetReportDetails() string`

GetReportDetails returns the ReportDetails field if non-nil, zero value otherwise.

### GetReportDetailsOk

`func (o *InfractionChangedData) GetReportDetailsOk() (*string, bool)`

GetReportDetailsOk returns a tuple with the ReportDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDetails

`func (o *InfractionChangedData) SetReportDetails(v string)`

SetReportDetails sets ReportDetails field to given value.


### SetReportDetailsNil

`func (o *InfractionChangedData) SetReportDetailsNil(b bool)`

 SetReportDetailsNil sets the value for ReportDetails to be an explicit nil

### UnsetReportDetails
`func (o *InfractionChangedData) UnsetReportDetails()`

UnsetReportDetails ensures that no value is present for ReportDetails, not even an explicit nil
### GetReportedBy

`func (o *InfractionChangedData) GetReportedBy() string`

GetReportedBy returns the ReportedBy field if non-nil, zero value otherwise.

### GetReportedByOk

`func (o *InfractionChangedData) GetReportedByOk() (*string, bool)`

GetReportedByOk returns a tuple with the ReportedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedBy

`func (o *InfractionChangedData) SetReportedBy(v string)`

SetReportedBy sets ReportedBy field to given value.


### GetAnalysisResult

`func (o *InfractionChangedData) GetAnalysisResult() string`

GetAnalysisResult returns the AnalysisResult field if non-nil, zero value otherwise.

### GetAnalysisResultOk

`func (o *InfractionChangedData) GetAnalysisResultOk() (*string, bool)`

GetAnalysisResultOk returns a tuple with the AnalysisResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisResult

`func (o *InfractionChangedData) SetAnalysisResult(v string)`

SetAnalysisResult sets AnalysisResult field to given value.


### SetAnalysisResultNil

`func (o *InfractionChangedData) SetAnalysisResultNil(b bool)`

 SetAnalysisResultNil sets the value for AnalysisResult to be an explicit nil

### UnsetAnalysisResult
`func (o *InfractionChangedData) UnsetAnalysisResult()`

UnsetAnalysisResult ensures that no value is present for AnalysisResult, not even an explicit nil
### GetAnalysisDetails

`func (o *InfractionChangedData) GetAnalysisDetails() string`

GetAnalysisDetails returns the AnalysisDetails field if non-nil, zero value otherwise.

### GetAnalysisDetailsOk

`func (o *InfractionChangedData) GetAnalysisDetailsOk() (*string, bool)`

GetAnalysisDetailsOk returns a tuple with the AnalysisDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisDetails

`func (o *InfractionChangedData) SetAnalysisDetails(v string)`

SetAnalysisDetails sets AnalysisDetails field to given value.


### SetAnalysisDetailsNil

`func (o *InfractionChangedData) SetAnalysisDetailsNil(b bool)`

 SetAnalysisDetailsNil sets the value for AnalysisDetails to be an explicit nil

### UnsetAnalysisDetails
`func (o *InfractionChangedData) UnsetAnalysisDetails()`

UnsetAnalysisDetails ensures that no value is present for AnalysisDetails, not even an explicit nil
### GetReportedAt

`func (o *InfractionChangedData) GetReportedAt() time.Time`

GetReportedAt returns the ReportedAt field if non-nil, zero value otherwise.

### GetReportedAtOk

`func (o *InfractionChangedData) GetReportedAtOk() (*time.Time, bool)`

GetReportedAtOk returns a tuple with the ReportedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedAt

`func (o *InfractionChangedData) SetReportedAt(v time.Time)`

SetReportedAt sets ReportedAt field to given value.


### GetExpiresAt

`func (o *InfractionChangedData) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *InfractionChangedData) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *InfractionChangedData) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.


### SetExpiresAtNil

`func (o *InfractionChangedData) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *InfractionChangedData) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil
### GetCreatedAt

`func (o *InfractionChangedData) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *InfractionChangedData) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *InfractionChangedData) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *InfractionChangedData) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *InfractionChangedData) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *InfractionChangedData) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


