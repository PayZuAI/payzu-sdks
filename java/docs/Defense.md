

# Defense


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Defense identifier. |  [optional] |
|**defense** | **String** | Defense text |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Defense status |  [optional] |
|**infractionId** | **String** | Identifies the infraction the defense belongs to. |  [optional] |
|**createdAt** | **OffsetDateTime** | Moment the defense was recorded at PayZu, saved together with the uploaded files. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Moment of the last change to the defense. |  [optional] |
|**files** | [**List&lt;DefenseFilesInner&gt;**](DefenseFilesInner.md) | Files sent with the defense, with name, type and size in bytes. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| DEFENDED | &quot;DEFENDED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



