# PayZuPix::WebhookUpdateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url** | **String** | Novo endereço de entrega, que passa a valer nos disparos seguintes: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional] |
| **active** | **Boolean** | Liga ou pausa as entregas do webhook. | [optional] |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Nova lista de eventos assinados, que substitui a anterior por inteiro. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookUpdateRequest.new(
  url: https://sualoja.com.br/webhook,
  active: true,
  events: null
)
```

