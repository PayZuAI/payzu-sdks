

# ReportJobAccepted

Job de relatório recém-enfileirado.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** | Identificador (UUID) do relatório, gerado no momento da solicitação. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. |  [optional] |
|**createdAt** | **OffsetDateTime** | Data e hora em que a geração do relatório foi solicitada. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Data e hora da última alteração no registro do relatório. |  [optional] |
|**params** | **Map&lt;String, Object&gt;** | Filtros usados na criação do relatório. |  [optional] |
|**writtenRows** | **Integer** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. |  [optional] |
|**expiresAt** | **OffsetDateTime** | Data em que o arquivo do relatório expira. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| RUNNING | &quot;RUNNING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| FAILED | &quot;FAILED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



