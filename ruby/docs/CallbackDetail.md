# PayZuPix::CallbackDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID único do callback | [optional] |
| **url** | **String** | URL do webhook que recebeu o callback | [optional] |
| **status** | **Float** | Código de status HTTP da resposta | [optional] |
| **transaction_id** | **String** | ID da transação relacionada | [optional] |
| **created_at** | **Time** | Data e hora em que o log do callback foi criado | [optional] |
| **body** | **Object** | Corpo enviado (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. | [optional] |
| **response_body** | **String** | Corpo da resposta recebido (string) | [optional] |
| **response_headers** | **Object** | Cabeçalhos da resposta (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. | [optional] |
| **response_time** | **Float** | Tempo de ida e volta do webhook em milissegundos | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::CallbackDetail.new(
  id: null,
  url: null,
  status: null,
  transaction_id: null,
  created_at: null,
  body: null,
  response_body: null,
  response_headers: null,
  response_time: null
)
```

