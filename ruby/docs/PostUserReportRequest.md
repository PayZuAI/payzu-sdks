# PayZuPix::PostUserReportRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_from** | **Time** | Início do período do relatório. |  |
| **date_to** | **Time** | Fim do período do relatório. |  |
| **status** | **Array&lt;String&gt;** | Status de transação incluídos no arquivo. Vazio ou omitido: todos. | [optional] |
| **type** | **Array&lt;String&gt;** | Tipos de transação incluídos no arquivo. Vazio ou omitido: todos. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::PostUserReportRequest.new(
  date_from: 2026-07-01T00:00:00Z,
  date_to: 2026-07-31T23:59:59Z,
  status: null,
  type: null
)
```

