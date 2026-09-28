

# DepositPending


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of the pending deposit. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Deposit status: PENDING, COMPLETED or REJECTED. |  [optional] |
|**amount** | **BigDecimal** | Amount received. |  [optional] |
|**payerDocument** | **String** | CNPJ of the payer of the Pix. |  [optional] |
|**payerName** | **String** | Name of the payer of the Pix. |  [optional] |
|**payerAccountNumber** | **String** | Account number of the payer inside the platform. |  [optional] |
|**payerInstitutionIspb** | **String** | ISPB code of the institution the Pix was sent from. |  [optional] |
|**payerInstitutionName** | **String** | Name of the institution the Pix was sent from. |  [optional] |
|**receiverDocument** | **String** | CPF or CNPJ of the account that received the Pix. |  [optional] |
|**receiverName** | **String** | Name of the account that received the Pix. |  [optional] |
|**receiverAccountNumber** | **String** | Number of your PayZu account that receives the credit if the deposit is approved. |  [optional] |
|**receiverInstitutionIspb** | **String** | ISPB code of the institution that received the Pix. |  [optional] |
|**receiverInstitutionName** | **String** | Name of the institution where the Pix was settled on the receiving side. |  [optional] |
|**endToEndId** | **String** | End-to-end identifier of the Pix. |  [optional] |
|**paidAt** | **OffsetDateTime** | Date and time the Pix was settled. |  [optional] |
|**pixKey** | **String** |  |  [optional] |
|**description** | **String** | Free text that would accompany the Pix. |  [optional] |
|**approvedAt** | **OffsetDateTime** | Date and time the deposit was approved. |  [optional] |
|**rejectedAt** | **OffsetDateTime** | Date and time the deposit was rejected. |  [optional] |
|**rejectionReason** | **String** | Reason the deposit was rejected. |  [optional] |
|**transactionId** | **String** | Deposit transaction created on approval. |  [optional] |
|**createdAt** | **OffsetDateTime** | Moment the received Pix was recorded, before the credit. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Moment of the last change to the record, which changes when the deposit is approved or rejected. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| APPROVED | &quot;APPROVED&quot; |
| REJECTED | &quot;REJECTED&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



