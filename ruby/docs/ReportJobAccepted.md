# PayZuPix::ReportJobAccepted

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador (UUID) do relatório, gerado no momento da solicitação. | [optional] |
| **status** | **String** | Andamento da geração: PENDING, RUNNING, COMPLETED ou FAILED. | [optional] |
| **created_at** | **Time** | Data e hora em que a geração do relatório foi solicitada. | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração no registro do relatório. | [optional] |
| **params** | **Hash&lt;String, Object&gt;** | Filtros usados na criação do relatório. | [optional] |
| **written_rows** | **Integer** | Linhas escritas no arquivo. Nulo até o relatório ficar COMPLETED. | [optional] |
| **expires_at** | **Time** | Data em que o arquivo do relatório expira. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::ReportJobAccepted.new(
  id: null,
  status: null,
  created_at: null,
  updated_at: null,
  params: null,
  written_rows: null,
  expires_at: null
)
```

