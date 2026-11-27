

# InfractionChangedData

A infração como está no momento do envio.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da infração na PayZu. Use em GET /user/infractions/{id} e na defesa. |  |
|**protocol** | **String** | Código da infração no Bacen. |  |
|**status** | [**StatusEnum**](#StatusEnum) | Situação da infração. Só &#x60;OPEN&#x60; aceita defesa, e &#x60;CLOSED&#x60; traz o resultado em &#x60;analysisResult&#x60;. |  |
|**type** | [**TypeEnum**](#TypeEnum) | Tipo informado na abertura. |  |
|**reportDetails** | **String** | Motivo informado por quem abriu a infração. |  |
|**reportedBy** | [**ReportedByEnum**](#ReportedByEnum) | Quem abriu: &#x60;DEBITED_PARTICIPANT&#x60;, a instituição da conta debitada, ou &#x60;CREDITED_PARTICIPANT&#x60;, a da conta creditada. |  |
|**analysisResult** | [**AnalysisResultEnum**](#AnalysisResultEnum) | Resultado da análise: &#x60;AGREED&#x60;, a contestação procede e a devolução ao pagador segue, avisada em &#x60;TRANSACTION_REFUNDED&#x60;; &#x60;DISAGREED&#x60;, a contestação não procede. |  |
|**analysisDetails** | **String** | Texto da decisão, quando a instituição envia. |  |
|**reportedAt** | **OffsetDateTime** | Abertura da infração. |  |
|**expiresAt** | **OffsetDateTime** | Prazo final para enviar a defesa. |  |
|**createdAt** | **OffsetDateTime** | Registro da infração na PayZu. |  |
|**updatedAt** | **OffsetDateTime** | Última mudança da infração. Com &#x60;infraction.id&#x60;, serve para deduplicar e ordenar. |  |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| WAITING_PSP | &quot;WAITING_PSP&quot; |
| OPEN | &quot;OPEN&quot; |
| ACKNOWLEDGED | &quot;ACKNOWLEDGED&quot; |
| DEFENDED | &quot;DEFENDED&quot; |
| ANSWERED | &quot;ANSWERED&quot; |
| WAITING_ADJUSTMENTS | &quot;WAITING_ADJUSTMENTS&quot; |
| CLOSED | &quot;CLOSED&quot; |
| CANCELLED | &quot;CANCELLED&quot; |
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



