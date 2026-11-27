

# WebhookCreateRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**url** | **URI** | URL que vai receber as notificações: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  |
|**events** | **List&lt;WebhookEventType&gt;** | Eventos a assinar. |  [optional] |
|**generateSecret** | **Boolean** | Gera um segredo de assinatura HMAC para este webhook. |  [optional] |
|**active** | **Boolean** | Se o webhook começa ativo. |  [optional] |



