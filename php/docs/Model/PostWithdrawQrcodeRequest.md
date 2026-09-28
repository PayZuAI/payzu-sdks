# PostWithdrawQrcodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code** | **string** | Pix QR Code payload (EMV format). |
**amount** | **float** | Amount in BRL, with at most 2 decimal places. Optional: if not provided, uses the QR Code&#39;s embedded value. | [optional]
**callback_url** | **string** | URL for transaction notifications (http or https). | [optional]
**description** | **string** | Optional description for the payment. | [optional]
**client_reference** | **string** | External reference for this withdrawal. Repeating it with the same amount and QR Code returns the existing withdrawal; with different data, the request is rejected with PZC210. | [optional]
**virtual_account** | **string** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
