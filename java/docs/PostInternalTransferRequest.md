

# PostInternalTransferRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**payerAccountNumber** | **String** | Conta do pagador. |  |
|**receiverAccountNumber** | **String** | Conta de destino. |  |
|**amount** | **BigDecimal** | Valor da transferência em BRL, com no máximo 2 casas decimais. |  |
|**description** | **String** | Descrição opcional da transferência. |  [optional] |
|**callbackUrl** | **URI** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  [optional] |
|**clientReference** | **String** | Referência externa para idempotência / reconciliação. |  [optional] |
|**virtualAccount** | **String** | Subconta para separar lojas ou filiais. |  [optional] |



