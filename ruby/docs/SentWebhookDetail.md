# PayZuPix::SentWebhookDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador desta tentativa de entrega. | [optional] |
| **webhook_id** | **String** | Webhook que originou a entrega. | [optional] |
| **transaction_id** | **String** | Transação Pix cujo evento foi notificado. | [optional] |
| **url** | **String** | Endereço para onde esta entrega foi feita, gravado no momento do disparo. | [optional] |
| **body** | **String** | Corpo enviado no disparo, em JSON serializado. | [optional] |
| **status** | **Integer** | Status HTTP retornado pelo seu endpoint. | [optional] |
| **response_headers** | **String** | Headers da resposta, em JSON serializado. | [optional] |
| **response_body** | **String** | Corpo da resposta recebida. | [optional] |
| **error** | **String** | Mensagem da falha na entrega. | [optional] |
| **response_time** | **Integer** | Tempo de resposta do seu endpoint, em milissegundos. | [optional] |
| **event_type** | **String** | Evento que disparou esta entrega, o mesmo valor enviado no cabeçalho X-Callback-Event. | [optional] |
| **created_at** | **Time** | Momento da tentativa de entrega. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::SentWebhookDetail.new(
  id: null,
  webhook_id: null,
  transaction_id: null,
  url: null,
  body: null,
  status: 200,
  response_headers: null,
  response_body: null,
  error: null,
  response_time: 342,
  event_type: null,
  created_at: null
)
```

