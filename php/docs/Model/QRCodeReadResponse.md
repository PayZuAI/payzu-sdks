# QRCodeReadResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code_type** | **string** | Type of QR Code. | [optional]
**name** | **string** | Name of the payment receiver. | [optional]
**document** | **string** | CPF or CNPJ of the receiver. | [optional]
**amount** | **float** | Amount to be paid (may differ from originalAmount for dynamic QR Codes). | [optional]
**original_amount** | **float** | Original amount embedded in the QR Code. | [optional]
**txid** | **string** | Transaction identifier. | [optional]
**additional_info** | **string** | Additional information or description. | [optional]
**expires_in** | **float** | Seconds until QR Code expires (0 for static QR Codes). | [optional]
**created_at** | **\DateTime** | Creation date of the QR Code (for dynamic QR Codes). | [optional]
**amount_editable** | **bool** | Whether the payer can change the amount. | [optional]
**due_date** | **string** | Due date of the charge, when the QR Code has one. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
