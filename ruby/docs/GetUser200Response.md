# PayZuPix::GetUser200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_number** | **String** | Identificador público da conta. | [optional] |
| **branch** | **String** | Agência da conta. | [optional] |
| **name** | **String** | Nome cadastrado da conta. | [optional] |
| **balance_available** | **Float** | Saldo livre para saques e transferências, em reais. | [optional] |
| **balance_blocked** | **Float** | Parte do saldo retida, em reais. | [optional] |
| **status** | **String** | Situação da conta. | [optional] |
| **cash_in_ticket_min** | **Float** | Valor mínimo aceito em cada cobrança de entrada, em reais; abaixo do piso a criação é recusada. | [optional] |
| **cash_in_ticket_max** | **Float** | Valor máximo aceito em cada cobrança de entrada, em reais; acima do teto a criação é recusada. | [optional] |
| **cash_out_ticket_min** | **Float** | Valor mínimo por saque ou transferência interna, em reais; abaixo do piso o pedido é recusado. | [optional] |
| **cash_out_ticket_max** | **Float** | Valor máximo por saque ou transferência interna, em reais; acima do teto o pedido é recusado. | [optional] |
| **service_fee** | [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  | [optional] |
| **daily_withdraw_limit** | [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUser200Response.new(
  account_number: null,
  branch: 0001,
  name: null,
  balance_available: null,
  balance_blocked: null,
  status: null,
  cash_in_ticket_min: null,
  cash_in_ticket_max: null,
  cash_out_ticket_min: null,
  cash_out_ticket_max: null,
  service_fee: null,
  daily_withdraw_limit: null
)
```

