

# GetUserTransactionById200ResponseAllOfCallbackLogInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador do registro de envio; há um registro por tentativa de callback da transação. |  [optional] |
|**url** | **String** | Endereço que recebeu o callback: a callbackUrl da transação ou a URL do webhook cadastrado. |  [optional] |
|**status** | **Integer** | Código de status HTTP retornado pelo receptor |  [optional] |
|**responseTime** | **BigDecimal** | Tempo de ida e volta em ms |  [optional] |
|**createdAt** | **OffsetDateTime** | Data e hora em que a tentativa de envio do callback foi registrada. |  [optional] |



