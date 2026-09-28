

# PostWithdrawQrcodeRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**qrCode** | **String** | Pix QR Code payload (EMV format). |  |
|**amount** | **BigDecimal** | Amount in BRL, with at most 2 decimal places. Optional: if not provided, uses the QR Code&#39;s embedded value. |  [optional] |
|**callbackUrl** | **URI** | URL for transaction notifications (http or https). |  [optional] |
|**description** | **String** | Optional description for the payment. |  [optional] |
|**clientReference** | **String** | External reference for this withdrawal. Repeating it with the same amount and QR Code returns the existing withdrawal; with different data, the request is rejected with PZC210. |  [optional] |
|**virtualAccount** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. |  [optional] |



