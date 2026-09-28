

# TransactionWithRefunds


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of the transaction at PayZu. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | PENDING, COMPLETED, CANCELED, WAITING_FOR_REFUND, REFUNDED, EXPIRED, ERROR |  [optional] |
|**amount** | **BigDecimal** | Amount of the transaction, before the fee. |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Transaction type: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION or ADJUSTMENT. |  [optional] |
|**qrCodeText** | **String** | Copy-and-paste Pix code. |  [optional] |
|**qrCodeBase64** | **String** | PNG image of the QR Code in base64, without the data: prefix. |  [optional] |
|**qrCodeUrl** | **String** | Authenticated route that returns the PNG of the QR Code. |  [optional] |
|**generatedName** | **String** | Name used to build the charge. |  [optional] |
|**generatedDocument** | **String** | CPF or CNPJ used as the debtor of the charge. |  [optional] |
|**generatedEmail** | **String** | Email used to build the charge. |  [optional] |
|**payerName** | **String** | Name of the holder of the account that sent the Pix, as reported by the originating institution. |  [optional] |
|**payerDocument** | **String** | CPF or CNPJ of the payer of the Pix, reported by the originating institution. |  [optional] |
|**payerInstitutionIspb** | **String** | ISPB code of the institution the Pix was sent from. |  [optional] |
|**payerInstitutionName** | **String** | Name of the institution the Pix was sent from. |  [optional] |
|**payerAccountNumber** | **String** | Payer&#39;s PayZu account number (6 digits). Present on withdraw, internal-transfer and commission transactions. |  [optional] |
|**serviceFeeCharged** | **BigDecimal** | PayZu fee charged on the operation, in reais. It may carry more than two decimal places — do not round when reconciling. |  [optional] |
|**withdrawPixKey** | **String** | Destination Pix key of the withdrawal, already normalized. |  [optional] |
|**withdrawPixType** | [**WithdrawPixTypeEnum**](#WithdrawPixTypeEnum) | Type of the destination key of the withdrawal, with evp being the random key. |  [optional] |
|**receiverName** | **String** | Name of the holder of the receiving account. |  [optional] |
|**receiverDocument** | **String** | CPF or CNPJ of the receiver. |  [optional] |
|**receiverInstitutionIspb** | **String** | ISPB code of the institution that receives the Pix. |  [optional] |
|**receiverInstitutionName** | **String** | Name of the institution that receives the Pix. |  [optional] |
|**receiverAccountNumber** | **String** | Receiver&#39;s PayZu account number (6 digits). Present on deposit, internal-transfer and commission transactions. |  [optional] |
|**endToEndId** | **String** | Identifier of the Pix in the Bacen arrangement, used to track the settlement and request a return. |  [optional] |
|**createdAt** | **String** | Date and time the transaction was recorded. |  [optional] |
|**updatedAt** | **String** | Date and time of the last change. |  [optional] |
|**paidAt** | **String** | Date and time the Pix was settled, reported by the institution. |  [optional] |
|**clientReference** | **String** | Your identifier of the transaction, returned in queries and callbacks. |  [optional] |
|**refundEndToEndId** | **String** | End-to-end ID of the refund transaction |  [optional] |
|**refundAmount** | **BigDecimal** | Amount refunded |  [optional] |
|**refundStatus** | [**RefundStatusEnum**](#RefundStatusEnum) | Refund status: PENDING, COMPLETED or CANCELED. |  [optional] |
|**refundReason** | [**RefundReasonEnum**](#RefundReasonEnum) | Reason for the refund |  [optional] |
|**refundDescription** | **String** | Description of the refund |  [optional] |
|**refundedAt** | **String** | Date and time when the refund was processed |  [optional] |
|**cancellationReason** | **String** | Reason for cancellation (if cancelled) |  [optional] |
|**virtualAccount** | **String** | Virtual sub-account provided at creation. |  [optional] |
|**method** | [**MethodEnum**](#MethodEnum) | Transaction method/rail. |  [optional] |
|**refunds** | [**List&lt;Refund&gt;**](Refund.md) | Refunds of the transaction, newest first. |  [optional] |



## Enum: StatusEnum

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



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DEPOSIT | &quot;DEPOSIT&quot; |
| WITHDRAW | &quot;WITHDRAW&quot; |
| COMMISSION | &quot;COMMISSION&quot; |
| LIQUIDATION | &quot;LIQUIDATION&quot; |
| ADJUSTMENT | &quot;ADJUSTMENT&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: WithdrawPixTypeEnum

| Name | Value |
|---- | -----|
| CPF | &quot;cpf&quot; |
| CNPJ | &quot;cnpj&quot; |
| EMAIL | &quot;email&quot; |
| PHONE | &quot;phone&quot; |
| EVP | &quot;evp&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: RefundStatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELED | &quot;CANCELED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: RefundReasonEnum

| Name | Value |
|---- | -----|
| CUSTOMER_REQUEST | &quot;CUSTOMER_REQUEST&quot; |
| INFRACTION | &quot;INFRACTION&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: MethodEnum

| Name | Value |
|---- | -----|
| PIX | &quot;PIX&quot; |
| INTERNAL_TRANSFER | &quot;INTERNAL_TRANSFER&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



