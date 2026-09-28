

# ReportJobAccepted

Report job just queued.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** | Report identifier (UUID), generated when the report is requested. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time the report generation was requested. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the report record. |  [optional] |
|**params** | **Map&lt;String, Object&gt;** | Filters used when the report was created. |  [optional] |
|**writtenRows** | **Integer** | Rows written to the file. Null until the report is COMPLETED. |  [optional] |
|**storageExpiresAt** | **OffsetDateTime** | Date the report file expires. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| RUNNING | &quot;RUNNING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| FAILED | &quot;FAILED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



