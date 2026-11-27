

# DefenseListItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da defesa. |  [optional] |
|**defense** | **String** | Texto da defesa |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Status da defesa |  [optional] |
|**infractionId** | **String** | Identifica a contestação a que a defesa pertence. |  [optional] |
|**createdAt** | **OffsetDateTime** | Momento em que a defesa foi registrada na PayZu, gravado junto com o envio dos anexos. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Momento da última alteração da defesa. |  [optional] |
|**files** | [**List&lt;DefenseHistoryEntryFilesInner&gt;**](DefenseHistoryEntryFilesInner.md) | Anexos enviados junto com a defesa, com nome, tipo e tamanho em bytes, sem o link de download. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| DEFENDED | &quot;DEFENDED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



