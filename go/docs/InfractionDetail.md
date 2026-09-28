# InfractionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Identifier of the infraction inside PayZu, used in the query routes and when sending the defense. | [optional] 
**Protocol** | Pointer to **string** | Infraction code at Bacen. | [optional] 
**Status** | Pointer to **string** | Current state of the infraction. | [optional] 
**Type** | Pointer to **string** | Type of the infraction: REFUND_REQUEST, FRAUD or REFUND_CANCELLED. | [optional] 
**ReportedBy** | Pointer to **string** | Side that opened the infraction: DEBITED_PARTICIPANT or CREDITED_PARTICIPANT. | [optional] 
**ReportDetails** | Pointer to **NullableString** | Reason given by whoever opened the infraction, in the text sent by the partner bank. | [optional] 
**AnalysisResult** | Pointer to **NullableString** | Analysis outcome: AGREED or DISAGREED. | [optional] 
**AnalysisDetails** | Pointer to **NullableString** | Additional text about the analysis decision, when the partner bank sends that information. | [optional] 
**ReportedAt** | Pointer to **time.Time** | Moment the infraction was opened. | [optional] 
**ExpiresAt** | Pointer to **NullableTime** | Deadline to send the defense of this infraction. | [optional] 
**Transaction** | Pointer to [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  | [optional] 
**DefenseHistory** | Pointer to [**[]DefenseHistoryEntry**](DefenseHistoryEntry.md) | Defenses already sent for this infraction, each with text, status and files. | [optional] 

## Methods

### NewInfractionDetail

`func NewInfractionDetail() *InfractionDetail`

NewInfractionDetail instantiates a new InfractionDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfractionDetailWithDefaults

`func NewInfractionDetailWithDefaults() *InfractionDetail`

NewInfractionDetailWithDefaults instantiates a new InfractionDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InfractionDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InfractionDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InfractionDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *InfractionDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetProtocol

`func (o *InfractionDetail) GetProtocol() string`

GetProtocol returns the Protocol field if non-nil, zero value otherwise.

### GetProtocolOk

`func (o *InfractionDetail) GetProtocolOk() (*string, bool)`

GetProtocolOk returns a tuple with the Protocol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtocol

`func (o *InfractionDetail) SetProtocol(v string)`

SetProtocol sets Protocol field to given value.

### HasProtocol

`func (o *InfractionDetail) HasProtocol() bool`

HasProtocol returns a boolean if a field has been set.

### GetStatus

`func (o *InfractionDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InfractionDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InfractionDetail) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InfractionDetail) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *InfractionDetail) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InfractionDetail) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InfractionDetail) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *InfractionDetail) HasType() bool`

HasType returns a boolean if a field has been set.

### GetReportedBy

`func (o *InfractionDetail) GetReportedBy() string`

GetReportedBy returns the ReportedBy field if non-nil, zero value otherwise.

### GetReportedByOk

`func (o *InfractionDetail) GetReportedByOk() (*string, bool)`

GetReportedByOk returns a tuple with the ReportedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedBy

`func (o *InfractionDetail) SetReportedBy(v string)`

SetReportedBy sets ReportedBy field to given value.

### HasReportedBy

`func (o *InfractionDetail) HasReportedBy() bool`

HasReportedBy returns a boolean if a field has been set.

### GetReportDetails

`func (o *InfractionDetail) GetReportDetails() string`

GetReportDetails returns the ReportDetails field if non-nil, zero value otherwise.

### GetReportDetailsOk

`func (o *InfractionDetail) GetReportDetailsOk() (*string, bool)`

GetReportDetailsOk returns a tuple with the ReportDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportDetails

`func (o *InfractionDetail) SetReportDetails(v string)`

SetReportDetails sets ReportDetails field to given value.

### HasReportDetails

`func (o *InfractionDetail) HasReportDetails() bool`

HasReportDetails returns a boolean if a field has been set.

### SetReportDetailsNil

`func (o *InfractionDetail) SetReportDetailsNil(b bool)`

 SetReportDetailsNil sets the value for ReportDetails to be an explicit nil

### UnsetReportDetails
`func (o *InfractionDetail) UnsetReportDetails()`

UnsetReportDetails ensures that no value is present for ReportDetails, not even an explicit nil
### GetAnalysisResult

`func (o *InfractionDetail) GetAnalysisResult() string`

GetAnalysisResult returns the AnalysisResult field if non-nil, zero value otherwise.

### GetAnalysisResultOk

`func (o *InfractionDetail) GetAnalysisResultOk() (*string, bool)`

GetAnalysisResultOk returns a tuple with the AnalysisResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisResult

`func (o *InfractionDetail) SetAnalysisResult(v string)`

SetAnalysisResult sets AnalysisResult field to given value.

### HasAnalysisResult

`func (o *InfractionDetail) HasAnalysisResult() bool`

HasAnalysisResult returns a boolean if a field has been set.

### SetAnalysisResultNil

`func (o *InfractionDetail) SetAnalysisResultNil(b bool)`

 SetAnalysisResultNil sets the value for AnalysisResult to be an explicit nil

### UnsetAnalysisResult
`func (o *InfractionDetail) UnsetAnalysisResult()`

UnsetAnalysisResult ensures that no value is present for AnalysisResult, not even an explicit nil
### GetAnalysisDetails

`func (o *InfractionDetail) GetAnalysisDetails() string`

GetAnalysisDetails returns the AnalysisDetails field if non-nil, zero value otherwise.

### GetAnalysisDetailsOk

`func (o *InfractionDetail) GetAnalysisDetailsOk() (*string, bool)`

GetAnalysisDetailsOk returns a tuple with the AnalysisDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnalysisDetails

`func (o *InfractionDetail) SetAnalysisDetails(v string)`

SetAnalysisDetails sets AnalysisDetails field to given value.

### HasAnalysisDetails

`func (o *InfractionDetail) HasAnalysisDetails() bool`

HasAnalysisDetails returns a boolean if a field has been set.

### SetAnalysisDetailsNil

`func (o *InfractionDetail) SetAnalysisDetailsNil(b bool)`

 SetAnalysisDetailsNil sets the value for AnalysisDetails to be an explicit nil

### UnsetAnalysisDetails
`func (o *InfractionDetail) UnsetAnalysisDetails()`

UnsetAnalysisDetails ensures that no value is present for AnalysisDetails, not even an explicit nil
### GetReportedAt

`func (o *InfractionDetail) GetReportedAt() time.Time`

GetReportedAt returns the ReportedAt field if non-nil, zero value otherwise.

### GetReportedAtOk

`func (o *InfractionDetail) GetReportedAtOk() (*time.Time, bool)`

GetReportedAtOk returns a tuple with the ReportedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedAt

`func (o *InfractionDetail) SetReportedAt(v time.Time)`

SetReportedAt sets ReportedAt field to given value.

### HasReportedAt

`func (o *InfractionDetail) HasReportedAt() bool`

HasReportedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *InfractionDetail) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *InfractionDetail) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *InfractionDetail) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *InfractionDetail) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *InfractionDetail) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *InfractionDetail) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil
### GetTransaction

`func (o *InfractionDetail) GetTransaction() InfractionDetailTransaction`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *InfractionDetail) GetTransactionOk() (*InfractionDetailTransaction, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *InfractionDetail) SetTransaction(v InfractionDetailTransaction)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *InfractionDetail) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.

### GetDefenseHistory

`func (o *InfractionDetail) GetDefenseHistory() []DefenseHistoryEntry`

GetDefenseHistory returns the DefenseHistory field if non-nil, zero value otherwise.

### GetDefenseHistoryOk

`func (o *InfractionDetail) GetDefenseHistoryOk() (*[]DefenseHistoryEntry, bool)`

GetDefenseHistoryOk returns a tuple with the DefenseHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefenseHistory

`func (o *InfractionDetail) SetDefenseHistory(v []DefenseHistoryEntry)`

SetDefenseHistory sets DefenseHistory field to given value.

### HasDefenseHistory

`func (o *InfractionDetail) HasDefenseHistory() bool`

HasDefenseHistory returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


