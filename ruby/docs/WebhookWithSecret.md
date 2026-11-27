# PayZuPix::WebhookWithSecret

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Identificador do webhook. | [optional] |
| **url** | **String** | Endereço que recebe as notificações. | [optional] |
| **active** | **Boolean** | Indica se o webhook já começa recebendo eventos. | [optional] |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Eventos assinados por este webhook. | [optional] |
| **has_secret** | **Boolean** | Indica se o webhook tem segredo de assinatura. | [optional] |
| **created_at** | **Time** |  | [optional] |
| **updated_at** | **Time** | Data e hora da última alteração do webhook. | [optional] |
| **secret** | **String** | Segredo de assinatura HMAC. | [optional] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookWithSecret.new(
  id: cm3w7k1t40000q8f2r5b9x3ad,
  url: https://sualoja.com.br/webhook,
  active: true,
  events: null,
  has_secret: true,
  created_at: null,
  updated_at: null,
  secret: q7Kx2mV9pL4sR8tW1nB6cY3hJ5dF0gZ-aE_uT7iO2kM
)
```

