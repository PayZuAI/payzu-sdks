# PostPixRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Valor da cobrança, em reais, com no máximo 2 casas decimais. |
**callback_url** | **string** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional]
**generated_name** | **string** | Nome usado para montar a cobrança. | [optional]
**generated_email** | **string** | E-mail usado para montar a cobrança. | [optional]
**generated_document** | **string** | CPF (11 dígitos) ou CNPJ (14 dígitos) do pagador, sem pontuação e com dígitos verificadores válidos. Obrigatório a partir do valor definido na conta (PZD602). | [optional]
**expires_in** | **int** | Segundos até o QR Code expirar, em número inteiro. | [optional]
**client_reference** | **string** | Referência externa (pedido, fatura etc.). Um clientReference já usado devolve a transação criada com ele. | [optional]
**virtual_account** | **string** | Subconta para separar lojas ou filiais. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
