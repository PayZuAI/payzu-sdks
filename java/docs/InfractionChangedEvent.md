

# InfractionChangedEvent

A transação como está no momento do envio. Cada tentativa lê a transação de novo.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da transação na PayZu. |  |
|**type** | [**TypeEnum**](#TypeEnum) | Sempre &#x60;DEPOSIT&#x60;: a infração é aberta sobre um Pix recebido. |  |
|**status** | [**StatusEnum**](#StatusEnum) | Status atual do Pix contestado, em geral &#x60;COMPLETED&#x60; ou &#x60;REFUNDED&#x60;. |  |
|**method** | [**MethodEnum**](#MethodEnum) | Sempre &#x60;PIX&#x60;: a infração MED é sobre um Pix recebido. |  |
|**clientReference** | **String** | O identificador que você enviou na criação. |  |
|**virtualAccount** | **String** | A subconta virtual enviada na criação. |  |
|**qrCodeText** | **String** | Copia e cola da cobrança criada em POST /pix. Nas demais transações vem &#x60;null&#x60;. |  |
|**qrCodeUrl** | **String** | Vem &#x60;null&#x60; no aviso. A rota da imagem sai na criação da cobrança e em GET /pix. |  |
|**generatedName** | **String** | Nome informado para montar a cobrança. |  |
|**generatedDocument** | **String** | CPF ou CNPJ informado para montar a cobrança. |  |
|**generatedEmail** | **String** | E-mail informado para montar a cobrança. |  |
|**payerName** | **String** | Nome do titular da conta de origem, como a instituição informou. |  |
|**payerDocument** | **String** | CPF ou CNPJ do titular da conta de origem. |  |
|**payerAccountNumber** | **String** | Conta PayZu de origem, quando o dinheiro sai de uma conta PayZu. |  |
|**payerInstitutionIspb** | **String** | ISPB da instituição de origem. |  |
|**payerInstitutionName** | **String** | Nome da instituição de origem. |  |
|**receiverName** | **String** | Nome do titular da conta de destino. |  |
|**receiverDocument** | **String** | CPF ou CNPJ do titular da conta de destino. |  |
|**receiverInstitutionIspb** | **String** | ISPB da instituição de destino. |  |
|**receiverInstitutionName** | **String** | Nome da instituição de destino. |  |
|**withdrawPixKey** | **String** | Chave Pix de destino do saque, já normalizada. |  |
|**withdrawPixType** | [**WithdrawPixTypeEnum**](#WithdrawPixTypeEnum) | Tipo da chave de destino. &#x60;evp&#x60; é a chave aleatória. |  |
|**withdrawQrCodeText** | **String** | Copia e cola pago no saque por QR Code. |  |
|**endToEndId** | **String** | Identificador fim a fim do Pix, usado na conciliação. |  |
|**cancellationReason** | **String** | Motivo do cancelamento, em texto pronto para exibir, como &#x60;Chave Pix não encontrada.&#x60; |  |
|**paidAt** | **OffsetDateTime** | Momento da liquidação, informado pela instituição. |  |
|**refundEndToEndId** | **String** | Identificador fim a fim do Pix de devolução. |  |
|**refundAmount** | **String** | Soma devolvida até agora, em reais, como texto decimal (&#x60;\&quot;30.5\&quot;&#x60;). Cada aviso traz o total acumulado: converta em número para comparar, como em GET /pix, onde o campo vem como número. |  |
|**refundStatus** | [**RefundStatusEnum**](#RefundStatusEnum) | Status da devolução: &#x60;PENDING&#x60;, &#x60;COMPLETED&#x60; ou &#x60;CANCELED&#x60;. |  |
|**refundReason** | [**RefundReasonEnum**](#RefundReasonEnum) | Motivo: &#x60;CUSTOMER_REQUEST&#x60;, pedida por você; &#x60;INFRACTION&#x60;, pelo MED; &#x60;DENY_COMPANY_DEPOSIT&#x60;, Pix pago por CNPJ numa conta que não aceita esse depósito; &#x60;ADMIN_REQUEST&#x60;, feita pela PayZu. |  |
|**refundDescription** | **String** | Descrição da devolução. |  |
|**refundedAt** | **OffsetDateTime** | Momento da conclusão da devolução. |  |
|**qrCodeBase64** | **String** | Vem &#x60;null&#x60; no aviso. A imagem sai na criação da cobrança e em GET /pix. |  |
|**createdAt** | **OffsetDateTime** | Criação da transação. |  |
|**updatedAt** | **OffsetDateTime** | Última alteração da transação. Não muda com a infração: para deduplicar e ordenar os avisos de infração, use &#x60;infraction.id&#x60; e &#x60;infraction.updatedAt&#x60;. |  |
|**callbackUrl** | **String** | A URL de aviso enviada na criação da transação. |  |
|**amount** | **BigDecimal** | Valor da transação, em reais. |  |
|**serviceFeeCharged** | **BigDecimal** | Tarifa PayZu, em reais, que pode ter mais de duas casas decimais. Pode não vir, conforme a configuração da conta. |  [optional] |
|**receiverAccountNumber** | **String** | Conta PayZu de destino. Não vem no saque para chave pago como transferência entre contas PayZu. |  [optional] |
|**infraction** | [**InfractionChangedData**](InfractionChangedData.md) | Dados da infração. O reenvio pode vir sem &#x60;infraction&#x60;: consulte a infração em GET /user/infractions, com o &#x60;id&#x60; da transação no filtro &#x60;transactionId&#x60;. |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DEPOSIT | &quot;DEPOSIT&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



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



## Enum: MethodEnum

| Name | Value |
|---- | -----|
| PIX | &quot;PIX&quot; |
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



