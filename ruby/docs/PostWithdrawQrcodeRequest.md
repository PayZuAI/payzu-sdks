# PayZuPix::PostWithdrawQrcodeRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **qr_code** | **String** | Payload do Pix QR Code (formato EMV). |  |
| **amount** | **Float** | Valor em BRL, com no máximo 2 casas decimais. Opcional: sem ele, vale o valor do QR Code. | [optional] |
| **callback_url** | **String** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] |
| **description** | **String** | Descrição opcional para o pagamento. | [optional] |
| **client_reference** | **String** | Referência externa deste saque. Repetida com o mesmo valor e o mesmo QR Code, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional] |
| **virtual_account** | **String** | Subconta para separar lojas ou filiais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostWithdrawQrcodeRequest.new(
  qr_code: 00020101021226780014br.gov.bcb.pix2556api.payzu/pix/qr/v2/013318d6-2d7d-479e-8bb3-b5c7b9da688c5204000053039865802BR5905PAYZU6008SAOPAULO6217051320260118278956304FEFF,
  amount: 20,
  callback_url: https://webhook.cool/,
  description: Pagamento via QR Code,
  client_reference: order-123,
  virtual_account: loja-centro-01
)
```

