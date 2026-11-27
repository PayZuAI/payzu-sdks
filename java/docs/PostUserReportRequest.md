

# PostUserReportRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**dateFrom** | **OffsetDateTime** | Início do período do relatório. |  |
|**dateTo** | **OffsetDateTime** | Fim do período do relatório. |  |
|**status** | [**List&lt;StatusEnum&gt;**](#List&lt;StatusEnum&gt;) | Status de transação incluídos no arquivo. Vazio ou omitido: todos. |  [optional] |
|**type** | [**List&lt;TypeEnum&gt;**](#List&lt;TypeEnum&gt;) | Tipos de transação incluídos no arquivo. Vazio ou omitido: todos. |  [optional] |



## Enum: List&lt;StatusEnum&gt;

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELED | &quot;CANCELED&quot; |
| WAITING_FOR_REFUND | &quot;WAITING_FOR_REFUND&quot; |
| REFUNDED | &quot;REFUNDED&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| ERROR | &quot;ERROR&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: List&lt;TypeEnum&gt;

| Name | Value |
|---- | -----|
| DEPOSIT | &quot;DEPOSIT&quot; |
| WITHDRAW | &quot;WITHDRAW&quot; |
| COMMISSION | &quot;COMMISSION&quot; |
| LIQUIDATION | &quot;LIQUIDATION&quot; |
| ADJUSTMENT | &quot;ADJUSTMENT&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



