# PayZuPix::PostWithdrawRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **amount** | **Float** | Valor em BRL, com no máximo 2 casas decimais. Mínimo de 0,01. |  |
| **pix_key** | **String** | Chave Pix de destino no formato do pixType: CPF ou CNPJ com dígitos verificadores válidos e sem pontuação, celular como +55 seguido de DDD e número, e-mail ou chave aleatória (EVP). |  |
| **pix_type** | **String** | Tipo da chave Pix. |  |
| **callback_url** | **String** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] |
| **client_reference** | **String** | Referência externa deste saque. Repetida com o mesmo valor e a mesma chave, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional] |
| **description** | **String** | Descrição opcional. | [optional] |
| **virtual_account** | **String** | Subconta para separar lojas ou filiais. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostWithdrawRequest.new(
  amount: 2,
  pix_key: teste@teste.com,
  pix_type: email,
  callback_url: https://webhook.cool/,
  client_reference: withdraw_98765,
  description: Weekly payout,
  virtual_account: loja-centro-01
)
```

