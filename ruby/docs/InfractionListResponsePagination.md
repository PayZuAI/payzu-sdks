# PayZuPix::InfractionListResponsePagination

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Página devolvida, igual ao parâmetro page enviado na consulta; quando omitido, vale 1. | [optional] |
| **limit** | **Integer** | Tamanho de página aplicado na consulta; quando omitido vale 10 e o máximo aceito é 100. | [optional] |
| **total_items** | **Integer** | Número de infrações que atendem aos filtros, contado até 100.000. | [optional] |
| **total_pages** | **Integer** | Número de páginas para o limit informado, obtido de totalItems arredondado para cima. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::InfractionListResponsePagination.new(
  page: null,
  limit: null,
  total_items: null,
  total_pages: null
)
```

