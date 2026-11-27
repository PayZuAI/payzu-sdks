

# PostWithdrawRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** | Valor em BRL, com no máximo 2 casas decimais. Mínimo de 0,01. |  |
|**pixKey** | **String** | Chave Pix de destino no formato do pixType: CPF ou CNPJ com dígitos verificadores válidos e sem pontuação, celular como +55 seguido de DDD e número, e-mail ou chave aleatória (EVP). |  |
|**pixType** | [**PixTypeEnum**](#PixTypeEnum) | Tipo da chave Pix. |  |
|**callbackUrl** | **URI** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. |  [optional] |
|**clientReference** | **String** | Referência externa deste saque. Repetida com o mesmo valor e a mesma chave, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. |  [optional] |
|**description** | **String** | Descrição opcional. |  [optional] |
|**virtualAccount** | **String** | Subconta para separar lojas ou filiais. |  [optional] |



## Enum: PixTypeEnum

| Name | Value |
|---- | -----|
| CPF | &quot;cpf&quot; |
| CNPJ | &quot;cnpj&quot; |
| PHONE | &quot;phone&quot; |
| EMAIL | &quot;email&quot; |
| EVP | &quot;evp&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



