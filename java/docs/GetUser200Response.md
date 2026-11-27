

# GetUser200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountNumber** | **String** | Identificador público da conta. |  [optional] |
|**branch** | **String** | Agência da conta. |  [optional] |
|**name** | **String** | Nome cadastrado da conta. |  [optional] |
|**balanceAvailable** | **BigDecimal** | Saldo livre para saques e transferências, em reais. |  [optional] |
|**balanceBlocked** | **BigDecimal** | Parte do saldo retida, em reais. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Situação da conta. |  [optional] |
|**cashInTicketMin** | **BigDecimal** | Valor mínimo aceito em cada cobrança de entrada, em reais; abaixo do piso a criação é recusada. |  [optional] |
|**cashInTicketMax** | **BigDecimal** | Valor máximo aceito em cada cobrança de entrada, em reais; acima do teto a criação é recusada. |  [optional] |
|**cashOutTicketMin** | **BigDecimal** | Valor mínimo por saque ou transferência interna, em reais; abaixo do piso o pedido é recusado. |  [optional] |
|**cashOutTicketMax** | **BigDecimal** | Valor máximo por saque ou transferência interna, em reais; acima do teto o pedido é recusado. |  [optional] |
|**serviceFee** | [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  |  [optional] |
|**dailyWithdrawLimit** | [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



