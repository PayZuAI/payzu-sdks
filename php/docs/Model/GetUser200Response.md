# GetUser200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **string** | Identificador público da conta. | [optional]
**branch** | **string** | Agência da conta. | [optional]
**name** | **string** | Nome cadastrado da conta. | [optional]
**balance_available** | **float** | Saldo livre para saques e transferências, em reais. | [optional]
**balance_blocked** | **float** | Parte do saldo retida, em reais. | [optional]
**status** | **string** | Situação da conta. | [optional]
**cash_in_ticket_min** | **float** | Valor mínimo aceito em cada cobrança de entrada, em reais; abaixo do piso a criação é recusada. | [optional]
**cash_in_ticket_max** | **float** | Valor máximo aceito em cada cobrança de entrada, em reais; acima do teto a criação é recusada. | [optional]
**cash_out_ticket_min** | **float** | Valor mínimo por saque ou transferência interna, em reais; abaixo do piso o pedido é recusado. | [optional]
**cash_out_ticket_max** | **float** | Valor máximo por saque ou transferência interna, em reais; acima do teto o pedido é recusado. | [optional]
**service_fee** | [**\PayZu\Pix\Model\GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional]
**daily_withdraw_limit** | [**\PayZu\Pix\Model\GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
