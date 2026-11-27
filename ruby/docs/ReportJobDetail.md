# PayZuPix::ReportJobDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador (UUID) do relatório, gerado no momento da solicitação. | [optional] |
| **status** | **String** | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. | [optional] |
| **created_at** | **Time** | Data e hora em que a geração do relatório foi solicitada. | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração no registro do relatório. | [optional] |
| **expires_at** | **Time** | Quando o arquivo expira do armazenamento (normalmente 7 dias após a criação) | [optional] |
| **params** | **Hash&lt;String, Object&gt;** | Filtros usados na criação do relatório. | [optional] |
| **written_rows** | **Integer** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ReportJobDetail.new(
  id: null,
  status: null,
  created_at: null,
  updated_at: null,
  expires_at: null,
  params: null,
  written_rows: null
)
```

