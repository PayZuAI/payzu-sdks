# PayZuPix::BankStatementListResponsePagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. | [optional] |
| **limit** | **Integer** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. | [optional] |
| **has_next_page** | **Boolean** | Indica se existe página seguinte, detectada buscando um item além do limit. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::BankStatementListResponsePagination.new(
  page: null,
  limit: null,
  has_next_page: null
)
```

