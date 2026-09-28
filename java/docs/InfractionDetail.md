

# InfractionDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of the infraction inside PayZu, used in the query routes and when sending the defense. |  [optional] |
|**protocol** | **String** | Infraction code at Bacen. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Current state of the infraction. |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Type of the infraction: REFUND_REQUEST, FRAUD or REFUND_CANCELLED. |  [optional] |
|**reportedBy** | [**ReportedByEnum**](#ReportedByEnum) | Side that opened the infraction: DEBITED_PARTICIPANT or CREDITED_PARTICIPANT. |  [optional] |
|**reportDetails** | **String** | Reason given by whoever opened the infraction, in the text sent by the partner bank. |  [optional] |
|**analysisResult** | [**AnalysisResultEnum**](#AnalysisResultEnum) | Analysis outcome: AGREED or DISAGREED. |  [optional] |
|**analysisDetails** | **String** | Additional text about the analysis decision, when the partner bank sends that information. |  [optional] |
|**reportedAt** | **OffsetDateTime** | Moment the infraction was opened. |  [optional] |
|**expiresAt** | **OffsetDateTime** | Deadline to send the defense of this infraction. |  [optional] |
|**transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  |  [optional] |
|**defenseHistory** | [**List&lt;DefenseHistoryEntry&gt;**](DefenseHistoryEntry.md) | Defenses already sent for this infraction, each with text, status and files. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| WAITING_PSP | &quot;WAITING_PSP&quot; |
| CLOSED | &quot;CLOSED&quot; |
| OPEN | &quot;OPEN&quot; |
| CANCELLED | &quot;CANCELLED&quot; |
| ACKNOWLEDGED | &quot;ACKNOWLEDGED&quot; |
| DEFENDED | &quot;DEFENDED&quot; |
| ANSWERED | &quot;ANSWERED&quot; |
| WAITING_ADJUSTMENTS | &quot;WAITING_ADJUSTMENTS&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| REFUND_REQUEST | &quot;REFUND_REQUEST&quot; |
| FRAUD | &quot;FRAUD&quot; |
| REFUND_CANCELLED | &quot;REFUND_CANCELLED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: ReportedByEnum

| Name | Value |
|---- | -----|
| DEBITED_PARTICIPANT | &quot;DEBITED_PARTICIPANT&quot; |
| CREDITED_PARTICIPANT | &quot;CREDITED_PARTICIPANT&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: AnalysisResultEnum

| Name | Value |
|---- | -----|
| AGREED | &quot;AGREED&quot; |
| DISAGREED | &quot;DISAGREED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



