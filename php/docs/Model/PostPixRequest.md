# PostPixRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL. Must be &gt;&#x3D; 1. |
**callback_url** | **string** | URL for transaction notifications (http or https). | [optional]
**generated_name** | **string** | Payer full name. Letters and spaces only. | [optional]
**generated_email** | **string** | Payer email (optional). | [optional]
**generated_document** | **string** | Payer CPF (11 digits) or CNPJ (14 digits), no punctuation, with valid check digits. | [optional]
**expires_in** | **float** | Seconds until the QR Code expires. | [optional]
**client_reference** | **string** | External reference (order, invoice, etc.). A clientReference already used returns the transaction created with it. | [optional]
**virtual_account** | **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
