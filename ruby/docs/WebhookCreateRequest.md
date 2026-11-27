# PayZuPix::WebhookCreateRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **url** | **String** | URL que vai receber as notificações: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  |
| **events** | [**Array&lt;WebhookEventType&gt;**](WebhookEventType.md) | Eventos a assinar. | [optional] |
| **generate_secret** | **Boolean** | Gera um segredo de assinatura HMAC para este webhook. | [optional][default to false] |
| **active** | **Boolean** | Se o webhook começa ativo. | [optional][default to true] |

## Example

```ruby
require 'payzu-pix'

instance = PayZuPix::WebhookCreateRequest.new(
  url: https://sualoja.com.br/webhook,
  events: null,
  generate_secret: null,
  active: true
)
```

