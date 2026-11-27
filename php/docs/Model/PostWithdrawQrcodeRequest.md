# PostWithdrawQrcodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code** | **string** | Payload do Pix QR Code (formato EMV). |
**amount** | **float** | Valor em BRL, com no máximo 2 casas decimais. Opcional: sem ele, vale o valor do QR Code. | [optional]
**callback_url** | **string** | URL para notificações da transação: http ou https, pública, sem usuário e senha e sem IPv6 literal. | [optional]
**description** | **string** | Descrição opcional para o pagamento. | [optional]
**client_reference** | **string** | Referência externa deste saque. Repetida com o mesmo valor e o mesmo QR Code, devolve o saque já criado; com dados diferentes, a requisição é recusada com PZC210. | [optional]
**virtual_account** | **string** | Subconta para separar lojas ou filiais. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
