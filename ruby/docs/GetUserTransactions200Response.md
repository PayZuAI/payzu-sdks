# PayZuPix::GetUserTransactions200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total** | **Integer** | Quantidade de transações que atendem aos filtros da consulta. | [optional] |
| **pages** | **Integer** | Número de páginas para o limit informado, calculado a partir de total arredondado para cima. | [optional] |
| **transactions** | [**Array&lt;Transaction&gt;**](Transaction.md) | Itens da página pedida, ordenados por sortBy e sortDirection. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::GetUserTransactions200Response.new(
  total: null,
  pages: null,
  transactions: null
)
```

