

# DepositPending


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador do depósito pendente. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Situação do depósito: PENDING, COMPLETED ou REJECTED. |  [optional] |
|**amount** | **BigDecimal** | Valor recebido. |  [optional] |
|**payerDocument** | **String** | CNPJ de quem enviou o Pix. |  [optional] |
|**payerName** | **String** | Nome de quem enviou o Pix. |  [optional] |
|**payerAccountNumber** | **String** | Número da conta do pagador dentro da plataforma. |  [optional] |
|**payerInstitutionIspb** | **String** | Código ISPB da instituição de onde saiu o Pix. |  [optional] |
|**payerInstitutionName** | **String** | Nome da instituição de onde o Pix saiu. |  [optional] |
|**receiverDocument** | **String** | CPF ou CNPJ da conta que recebeu o Pix. |  [optional] |
|**receiverName** | **String** | Nome da conta que recebeu o Pix. |  [optional] |
|**receiverAccountNumber** | **String** | Número da sua conta na PayZu que receberá o crédito caso o depósito seja aprovado. |  [optional] |
|**receiverInstitutionIspb** | **String** | Código ISPB da instituição que recebeu o Pix. |  [optional] |
|**receiverInstitutionName** | **String** | Nome da instituição em que o Pix foi liquidado do lado de quem recebeu. |  [optional] |
|**endToEndId** | **String** | Identificador ponta a ponta do Pix. |  [optional] |
|**paidAt** | **OffsetDateTime** | Data e hora da liquidação do Pix. |  [optional] |
|**pixKey** | **String** |  |  [optional] |
|**description** | **String** | Texto livre que acompanharia o Pix. |  [optional] |
|**approvedAt** | **OffsetDateTime** | Data e hora da aprovação do depósito. |  [optional] |
|**rejectedAt** | **OffsetDateTime** | Data e hora da recusa do depósito. |  [optional] |
|**rejectionReason** | **String** | Motivo da recusa do depósito. |  [optional] |
|**transactionId** | **String** | Transação de depósito criada na aprovação. |  [optional] |
|**createdAt** | **OffsetDateTime** | Momento em que o Pix recebido foi registrado, antes do crédito. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Momento da última alteração do registro, que muda quando o depósito é aprovado ou recusado. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| APPROVED | &quot;APPROVED&quot; |
| REJECTED | &quot;REJECTED&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



