# PayZuPix::InfractionDetailTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **amount** | **Float** | Valor da transação contestada, em reais com casas decimais. | [optional] |
| **payer_name** | **String** | Nome do pagador do Pix, conforme informado pelo provedor. | [optional] |
| **payer_document** | **String** | CPF ou CNPJ do pagador do Pix, conforme informado pelo provedor. | [optional] |
| **receiver_name** | **String** | Nome do recebedor do Pix, conforme informado pelo provedor. | [optional] |
| **receiver_document** | **String** | CPF ou CNPJ do recebedor do Pix, conforme informado pelo provedor. | [optional] |
| **end_to_end_id** | **String** | Identificador fim a fim do Pix, informado pelo provedor na liquidação. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionDetailTransaction.new(
  id: null,
  amount: null,
  payer_name: null,
  payer_document: null,
  receiver_name: null,
  receiver_document: null,
  end_to_end_id: null
)
```

