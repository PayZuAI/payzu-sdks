# PayZuPix::Webhook

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Id do webhook. | [optional] |
| **url** | **String** | Endereço do seu sistema para onde a PayZu envia a notificação do evento. | [optional] |
| **active** | **Boolean** | Somente webhooks ativos recebem entregas. | [optional] |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Eventos assinados. | [optional] |
| **has_secret** | **Boolean** | Indica se o webhook tem segredo de assinatura HMAC. | [optional] |
| **created_at** | **Time** | Data e hora em que o webhook foi cadastrado na conta. | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração do webhook. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::Webhook.new(
  id: cm3w7k1t40000q8f2r5b9x3ad,
  url: https://sualoja.com.br/webhook,
  active: true,
  events: null,
  has_secret: true,
  created_at: null,
  updated_at: null
)
```

