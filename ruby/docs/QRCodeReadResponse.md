# PayZuPix::QRCodeReadResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **qr_code_type** | **String** | Tipo de QR Code. | [optional] |
| **name** | **String** | Nome do recebedor do pagamento. | [optional] |
| **document** | **String** | CPF ou CNPJ do recebedor. | [optional] |
| **amount** | **Float** | Valor a ser pago. | [optional] |
| **original_amount** | **Float** | Valor embutido no QR Code. | [optional] |
| **txid** | **String** | Identificador da transação. | [optional] |
| **additional_info** | **String** | Informações adicionais ou descrição. | [optional] |
| **expires_in** | **Float** | Segundos até o QR Code expirar (0 para QR Codes estáticos). | [optional] |
| **created_at** | **String** | Data de criação do QR Code dinâmico, como veio no QR Code: o horário pode vir sem fuso. | [optional] |
| **amount_editable** | **Boolean** | Indica se o pagador pode alterar o valor. | [optional] |
| **due_date** | **String** | Data de vencimento da cobrança, quando o QR Code tiver. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::QRCodeReadResponse.new(
  qr_code_type: null,
  name: null,
  document: null,
  amount: null,
  original_amount: null,
  txid: null,
  additional_info: null,
  expires_in: null,
  created_at: null,
  amount_editable: null,
  due_date: null
)
```

