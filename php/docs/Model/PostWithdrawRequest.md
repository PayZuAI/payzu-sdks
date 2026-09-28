# PostWithdrawRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount in BRL, with at most 2 decimal places. Must be &gt;&#x3D; 0.01. |
**pix_key** | **string** | Destination Pix key in the format of pixType: CPF or CNPJ with valid check digits and no punctuation, phone as +55 followed by area code and number, email, or random key (EVP). |
**pix_type** | **string** | Pix key type. |
**callback_url** | **string** | URL for transaction notifications (http or https). | [optional]
**client_reference** | **string** | External reference for this withdrawal. Repeating it with the same amount and key returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional]
**description** | **string** | Optional description. | [optional]
**virtual_account** | **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
