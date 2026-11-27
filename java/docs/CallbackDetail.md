

# CallbackDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | ID único do callback |  [optional] |
|**url** | **String** | URL do webhook que recebeu o callback |  [optional] |
|**status** | **BigDecimal** | Código de status HTTP da resposta |  [optional] |
|**transactionId** | **String** | ID da transação relacionada |  [optional] |
|**createdAt** | **OffsetDateTime** | Data e hora em que o log do callback foi criado |  [optional] |
|**body** | **Object** | Corpo enviado (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. |  [optional] |
|**responseBody** | **String** | Corpo da resposta recebido (string) |  [optional] |
|**responseHeaders** | **Object** | Cabeçalhos da resposta (JSON interpretado). Quando o conteúdo não é JSON válido, vem como &#x60;{ \&quot;raw\&quot;: \&quot;&lt;texto&gt;\&quot; }&#x60;. |  [optional] |
|**responseTime** | **BigDecimal** | Tempo de ida e volta do webhook em milissegundos |  [optional] |



