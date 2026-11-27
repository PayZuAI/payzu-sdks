

# WebhookUpdateRequest

Informe pelo menos um campo.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**url** | **URI** | Novo endereço de entrega, que passa a valer nos disparos seguintes: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  [optional] |
|**active** | **Boolean** | Liga ou pausa as entregas do webhook. |  [optional] |
|**events** | **List&lt;WebhookEventType&gt;** | Nova lista de eventos assinados, que substitui a anterior por inteiro. |  [optional] |



