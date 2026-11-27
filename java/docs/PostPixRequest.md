

# PostPixRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** | Valor da cobrança, em reais, com no máximo 2 casas decimais. |  |
|**callbackUrl** | **URI** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  [optional] |
|**generatedName** | **String** | Nome usado para montar a cobrança. |  [optional] |
|**generatedEmail** | **String** | E-mail usado para montar a cobrança. |  [optional] |
|**generatedDocument** | **String** | CPF (11 dígitos) ou CNPJ (14 dígitos) do pagador, sem pontuação e com dígitos verificadores válidos. Obrigatório a partir do valor definido na conta (PZD602). |  [optional] |
|**expiresIn** | **Integer** | Segundos até o QR Code expirar, em número inteiro. |  [optional] |
|**clientReference** | **String** | Referência externa (pedido, fatura etc.). Um clientReference já usado devolve a transação criada com ele. |  [optional] |
|**virtualAccount** | **String** | Subconta para separar lojas ou filiais. |  [optional] |



