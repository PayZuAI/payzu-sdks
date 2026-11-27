# PayZuPix::PostInternalTransferRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payer_account_number** | **String** | Conta do pagador. |  |
| **receiver_account_number** | **String** | Conta de destino. |  |
| **amount** | **Float** | Valor da transferência em BRL, com no máximo 2 casas decimais. |  |
| **description** | **String** | Descrição opcional da transferência. | [optional] |
| **callback_url** | **String** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] |
| **client_reference** | **String** | Referência externa para idempotência / reconciliação. | [optional] |
| **virtual_account** | **String** | Subconta para separar lojas ou filiais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostInternalTransferRequest.new(
  payer_account_number: 000000,
  receiver_account_number: 987654,
  amount: 100.5,
  description: Pagamento referente a fatura #1234,
  callback_url: https://webhook.cool/,
  client_reference: transfer_abc_123,
  virtual_account: loja-centro-01
)
```

