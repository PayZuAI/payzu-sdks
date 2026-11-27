

# GetUserTransactionById200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da transação na PayZu. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Status atual da transação. |  [optional] |
|**amount** | **BigDecimal** | Valor da transação, antes da taxa. |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Tipo da transação: DEPOSIT, WITHDRAW, COMMISSION, LIQUIDATION ou ADJUSTMENT. |  [optional] |
|**qrCodeText** | **String** | Código copia e cola do Pix. |  [optional] |
|**qrCodeBase64** | **String** | Imagem PNG do QR Code em base64, sem o prefixo data:. |  [optional] |
|**qrCodeUrl** | **String** | Rota autenticada que devolve o PNG do QR Code. |  [optional] |
|**generatedName** | **String** | Nome usado para montar a cobrança. |  [optional] |
|**generatedDocument** | **String** | CPF ou CNPJ usado como devedor na cobrança. |  [optional] |
|**generatedEmail** | **String** | E-mail usado para montar a cobrança. |  [optional] |
|**payerName** | **String** | Nome do titular da conta que enviou o Pix, como informado pela instituição de origem. |  [optional] |
|**payerDocument** | **String** | CPF ou CNPJ de quem enviou o Pix, informado pela instituição de origem. |  [optional] |
|**payerInstitutionIspb** | **String** | Código ISPB da instituição de onde saiu o Pix. |  [optional] |
|**payerInstitutionName** | **String** | Nome da instituição de onde saiu o Pix. |  [optional] |
|**payerAccountNumber** | **String** | Conta PayZu do pagador. |  [optional] |
|**serviceFeeCharged** | **BigDecimal** | Tarifa PayZu cobrada na operação, em reais. Pode ter mais de duas casas decimais: não arredonde ao conciliar. |  [optional] |
|**withdrawPixKey** | **String** | Chave Pix de destino do saque, já normalizada. |  [optional] |
|**withdrawPixType** | [**WithdrawPixTypeEnum**](#WithdrawPixTypeEnum) | Tipo da chave de destino do saque, sendo evp a chave aleatória. |  [optional] |
|**receiverName** | **String** | Nome do titular da conta que recebe. |  [optional] |
|**receiverDocument** | **String** | CPF ou CNPJ de quem recebe. |  [optional] |
|**receiverInstitutionIspb** | **String** | Código ISPB da instituição que recebe o Pix. |  [optional] |
|**receiverInstitutionName** | **String** | Nome da instituição que recebe o Pix. |  [optional] |
|**receiverAccountNumber** | **String** | Conta PayZu do recebedor. |  [optional] |
|**endToEndId** | **String** | Identificador do Pix no arranjo do Bacen, usado para rastrear a liquidação e pedir devolução. |  [optional] |
|**createdAt** | **String** | Data e hora do registro da transação. |  [optional] |
|**updatedAt** | **String** | Data e hora da última alteração. |  [optional] |
|**paidAt** | **String** | Data e hora da liquidação do Pix, informada pela instituição. |  [optional] |
|**clientReference** | **String** | Seu identificador da transação, devolvido em consultas e callbacks. |  [optional] |
|**refundEndToEndId** | **String** | ID end-to-end do Pix de devolução. |  [optional] |
|**refundAmount** | **BigDecimal** | Valor devolvido. |  [optional] |
|**refundStatus** | [**RefundStatusEnum**](#RefundStatusEnum) | Status da devolução. |  [optional] |
|**refundReason** | [**RefundReasonEnum**](#RefundReasonEnum) | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). |  [optional] |
|**refundDescription** | **String** | Descrição da devolução. |  [optional] |
|**refundedAt** | **String** | Data e hora em que a devolução foi processada. |  [optional] |
|**cancellationReason** | **String** | Motivo do cancelamento (se cancelada) |  [optional] |
|**virtualAccount** | **String** | Subconta virtual informada na criação. |  [optional] |
|**method** | [**MethodEnum**](#MethodEnum) | &#x60;PIX&#x60;, &#x60;INTERNAL_TRANSFER&#x60; (transferência entre contas PayZu), &#x60;BANK_SLIP&#x60; (boleto) ou &#x60;TED&#x60;. |  [optional] |
|**infraction** | [**List&lt;GetUserTransactionById200ResponseAllOfInfractionInner&gt;**](GetUserTransactionById200ResponseAllOfInfractionInner.md) | Histórico completo de infrações desta transação. |  [optional] |
|**callbackLog** | [**List&lt;GetUserTransactionById200ResponseAllOfCallbackLogInner&gt;**](GetUserTransactionById200ResponseAllOfCallbackLogInner.md) | Tentativas de entrega do webhook desta transação (mais recentes primeiro) |  [optional] |



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
| DENY_COMPANY_DEPOSIT | &quot;DENY_COMPANY_DEPOSIT&quot; |
| ADMIN_REQUEST | &quot;ADMIN_REQUEST&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: MethodEnum

| Name | Value |
|---- | -----|
| PIX | &quot;PIX&quot; |
| INTERNAL_TRANSFER | &quot;INTERNAL_TRANSFER&quot; |
| BANK_SLIP | &quot;BANK_SLIP&quot; |
| TED | &quot;TED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



