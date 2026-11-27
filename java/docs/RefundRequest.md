

# RefundRequest

Só aceita amount, description e clientReference; outro campo é recusado com 400.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** | Valor a devolver. |  [optional] |
|**description** | **String** | Descrição livre da devolução. |  [optional] |
|**clientReference** | **String** | Chave de idempotência. |  [optional] |



