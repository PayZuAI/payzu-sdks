

# InfractionDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da contestação dentro da PayZu, usado nas rotas de consulta e no envio da defesa. |  [optional] |
|**protocol** | **String** | Código da contestação no Bacen. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Situação atual da contestação. |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Tipo da contestação: REFUND_REQUEST, FRAUD ou REFUND_CANCELLED. |  [optional] |
|**reportedBy** | [**ReportedByEnum**](#ReportedByEnum) | Lado que abriu a contestação: DEBITED_PARTICIPANT ou CREDITED_PARTICIPANT. |  [optional] |
|**reportDetails** | **String** | Motivo informado por quem abriu a contestação, no texto enviado pelo banco parceiro. |  [optional] |
|**analysisResult** | [**AnalysisResultEnum**](#AnalysisResultEnum) | Desfecho da análise: AGREED ou DISAGREED. |  [optional] |
|**analysisDetails** | **String** | Texto complementar sobre a decisão da análise, quando o banco parceiro envia essa informação. |  [optional] |
|**reportedAt** | **OffsetDateTime** | Momento em que a contestação foi aberta. |  [optional] |
|**expiresAt** | **OffsetDateTime** | Prazo final para enviar a defesa desta contestação. |  [optional] |
|**transaction** | [**InfractionDetailTransaction**](InfractionDetailTransaction.md) |  |  [optional] |
|**defenseHistory** | [**List&lt;DefenseHistoryEntry&gt;**](DefenseHistoryEntry.md) | Defesas já enviadas para esta contestação, com texto, status e anexos de cada uma. |  [optional] |



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



