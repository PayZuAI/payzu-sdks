# PayZuPix::InfractionDetailTransaction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **amount** | **Float** | Amount of the disputed transaction, in reais with decimal places. | [optional] |
| **payer_name** | **String** | Name of the Pix payer, as reported by the provider. | [optional] |
| **payer_document** | **String** | CPF or CNPJ of the Pix payer, as reported by the provider. | [optional] |
| **receiver_name** | **String** | Name of the Pix receiver, as reported by the provider. | [optional] |
| **receiver_document** | **String** | CPF or CNPJ of the Pix receiver, as reported by the provider. | [optional] |
| **end_to_end_id** | **String** | End-to-end identifier of the Pix, reported by the provider at settlement. | [optional] |

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

