# PayZuPix::Refund

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador da devolução. | [optional] |
| **amount** | **Float** | Valor devolvido em BRL. | [optional] |
| **reason** | **String** | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). | [optional] |
| **description** | **String** | Descrição da devolução. | [optional] |
| **status** | **String** | Status da devolução. | [optional] |
| **end_to_end_id** | **String** | End-to-end ID do Pix de devolução. | [optional] |
| **refunded_at** | **Time** | Quando a devolução foi concluída. | [optional] |
| **created_at** | **Time** | Quando a devolução foi pedida. | [optional] |
| **updated_at** | **Time** | Última alteração da devolução. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Refund.new(
  id: null,
  amount: null,
  reason: null,
  description: null,
  status: null,
  end_to_end_id: null,
  refunded_at: null,
  created_at: null,
  updated_at: null
)
```

