# QRCodeReadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code_type** | **string** | Tipo de QR Code. | [optional]
**name** | **string** | Nome do recebedor do pagamento. | [optional]
**document** | **string** | CPF ou CNPJ do recebedor. | [optional]
**amount** | **float** | Valor a ser pago. | [optional]
**original_amount** | **float** | Valor embutido no QR Code. | [optional]
**txid** | **string** | Identificador da transação. | [optional]
**additional_info** | **string** | Informações adicionais ou descrição. | [optional]
**expires_in** | **float** | Segundos até o QR Code expirar (0 para QR Codes estáticos). | [optional]
**created_at** | **string** | Data de criação do QR Code dinâmico, como veio no QR Code: o horário pode vir sem fuso. | [optional]
**amount_editable** | **bool** | Indica se o pagador pode alterar o valor. | [optional]
**due_date** | **string** | Data de vencimento da cobrança, quando o QR Code tiver. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
