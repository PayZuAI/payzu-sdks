

# ReportJob


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** | Report identifier (UUID), generated when the report is requested. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Generation progress: PENDING, RUNNING, COMPLETED or FAILED. |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time the report generation was requested. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the report record. |  [optional] |
|**expiresAt** | **OffsetDateTime** | When the file expires from storage (typically 7 days after creation) |  [optional] |
|**params** | **Object** | Filters used to generate the report. |  [optional] |
|**writtenRows** | **Integer** | Rows written to the file. Null until the report is COMPLETED. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| RUNNING | &quot;RUNNING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| FAILED | &quot;FAILED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



