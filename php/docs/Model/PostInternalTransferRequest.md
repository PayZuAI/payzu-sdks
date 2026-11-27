# PostInternalTransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payer_account_number** | **string** | Conta do pagador. |
**receiver_account_number** | **string** | Conta de destino. |
**amount** | **float** | Valor da transferência em BRL, com no máximo 2 casas decimais. |
**description** | **string** | Descrição opcional da transferência. | [optional]
**callback_url** | **string** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional]
**client_reference** | **string** | Referência externa para idempotência / reconciliação. | [optional]
**virtual_account** | **string** | Subconta para separar lojas ou filiais. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
