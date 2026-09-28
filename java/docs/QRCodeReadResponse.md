

# QRCodeReadResponse

Decoded information from a Pix QR Code.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**qrCodeType** | [**QrCodeTypeEnum**](#QrCodeTypeEnum) | Type of QR Code. |  [optional] |
|**name** | **String** | Name of the payment receiver. |  [optional] |
|**document** | **String** | CPF or CNPJ of the receiver. |  [optional] |
|**amount** | **BigDecimal** | Amount to be paid (may differ from originalAmount for dynamic QR Codes). |  [optional] |
|**originalAmount** | **BigDecimal** | Original amount embedded in the QR Code. |  [optional] |
|**txid** | **String** | Transaction identifier. |  [optional] |
|**additionalInfo** | **String** | Additional information or description. |  [optional] |
|**expiresIn** | **BigDecimal** | Seconds until QR Code expires (0 for static QR Codes). |  [optional] |
|**createdAt** | **OffsetDateTime** | Creation date of the QR Code (for dynamic QR Codes). |  [optional] |
|**amountEditable** | **Boolean** | Whether the payer can change the amount. |  [optional] |
|**dueDate** | **String** | Due date of the charge, when the QR Code has one. |  [optional] |



## Enum: QrCodeTypeEnum

| Name | Value |
|---- | -----|
| STATIC | &quot;STATIC&quot; |
| DYNAMIC | &quot;DYNAMIC&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



