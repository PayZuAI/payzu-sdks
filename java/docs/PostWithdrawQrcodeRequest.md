

# PostWithdrawQrcodeRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**qrCode** | **String** | Payload do Pix QR Code (formato EMV). |  |
|**amount** | **BigDecimal** | Valor em BRL, com no máximo 2 casas decimais. Opcional: sem ele, vale o valor do QR Code. |  [optional] |
|**callbackUrl** | **URI** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  [optional] |
|**description** | **String** | Descrição opcional para o pagamento. |  [optional] |
|**clientReference** | **String** | Referência externa deste saque. Repetida com o mesmo valor e o mesmo QR Code, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. |  [optional] |
|**virtualAccount** | **String** | Subconta para separar lojas ou filiais. |  [optional] |



