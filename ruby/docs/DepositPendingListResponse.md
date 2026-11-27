# PayZuPix::DepositPendingListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Página devolvida nesta resposta. | [optional] |
| **limit** | **Integer** | Quantidade máxima de registros por página usada nesta consulta. | [optional] |
| **has_next_page** | **Boolean** | Vem true quando ainda existe registro depois desta página. | [optional] |
| **data** | [**Array&lt;DepositPending&gt;**](DepositPending.md) | Depósitos pendentes desta página, ordenados da criação mais recente para a mais antiga. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::DepositPendingListResponse.new(
  page: null,
  limit: null,
  has_next_page: null,
  data: null
)
```

