

# QRCodeReadResponse

Informações decodificadas de um QR Code Pix.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**qrCodeType** | [**QrCodeTypeEnum**](#QrCodeTypeEnum) | Tipo de QR Code. |  [optional] |
|**name** | **String** | Nome do recebedor do pagamento. |  [optional] |
|**document** | **String** | CPF ou CNPJ do recebedor. |  [optional] |
|**amount** | **BigDecimal** | Valor a ser pago. |  [optional] |
|**originalAmount** | **BigDecimal** | Valor embutido no QR Code. |  [optional] |
|**txid** | **String** | Identificador da transação. |  [optional] |
|**additionalInfo** | **String** | Informações adicionais ou descrição. |  [optional] |
|**expiresIn** | **BigDecimal** | Segundos até o QR Code expirar (0 para QR Codes estáticos). |  [optional] |
|**createdAt** | **String** | Data de criação do QR Code dinâmico, como veio no QR Code: o horário pode vir sem fuso. |  [optional] |
|**amountEditable** | **Boolean** | Indica se o pagador pode alterar o valor. |  [optional] |
|**dueDate** | **String** | Data de vencimento da cobrança, quando o QR Code tiver. |  [optional] |



## Enum: QrCodeTypeEnum

| Name | Value |
|---- | -----|
| STATIC | &quot;STATIC&quot; |
| DYNAMIC | &quot;DYNAMIC&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



