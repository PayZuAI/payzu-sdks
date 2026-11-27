

# GetUserTransactionById200ResponseAllOfInfractionInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da infração ligada a esta transação. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Situação atual da infração. |  [optional] |
|**createdAt** | **OffsetDateTime** | Data e hora em que a infração foi registrada na PayZu. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Data e hora da última alteração no registro da infração. |  [optional] |



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



