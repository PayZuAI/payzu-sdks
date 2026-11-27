# PostWithdrawRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Valor em BRL, com no máximo 2 casas decimais. Mínimo de 0,01. |
**pix_key** | **string** | Chave Pix de destino no formato do pixType: CPF ou CNPJ com dígitos verificadores válidos e sem pontuação, celular como +55 seguido de DDD e número, e-mail ou chave aleatória (EVP). |
**pix_type** | **string** | Tipo da chave Pix. |
**callback_url** | **string** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional]
**client_reference** | **string** | Referência externa deste saque. Repetida com o mesmo valor e a mesma chave, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional]
**description** | **string** | Descrição opcional. | [optional]
**virtual_account** | **string** | Subconta para separar lojas ou filiais. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
