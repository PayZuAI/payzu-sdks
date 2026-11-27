# PayZuPix::PostPixRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Float** | Valor da cobrança, em reais, com no máximo 2 casas decimais. |  |
| **callback_url** | **String** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] |
| **generated_name** | **String** | Nome usado para montar a cobrança. | [optional] |
| **generated_email** | **String** | E-mail usado para montar a cobrança. | [optional] |
| **generated_document** | **String** | CPF (11 dígitos) ou CNPJ (14 dígitos) do pagador, sem pontuação e com dígitos verificadores válidos. Obrigatório a partir do valor definido na conta (PZD602). | [optional] |
| **expires_in** | **Integer** | Segundos até o QR Code expirar, em número inteiro. | [optional] |
| **client_reference** | **String** | Referência externa (pedido, fatura etc.). Um clientReference já usado devolve a transação criada com ele. | [optional] |
| **virtual_account** | **String** | Subconta para separar lojas ou filiais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostPixRequest.new(
  amount: 10.9,
  callback_url: https://webhook.cool/,
  generated_name: John Doe,
  generated_email: john.doe@example.com,
  generated_document: 12345678901,
  expires_in: 600,
  client_reference: order_12345,
  virtual_account: loja-centro-01
)
```

