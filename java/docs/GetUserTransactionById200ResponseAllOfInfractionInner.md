

# GetUserTransactionById200ResponseAllOfInfractionInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of the infraction linked to this transaction. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Current state of the infraction. |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time the infraction was recorded at PayZu. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the infraction record. |  [optional] |



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



