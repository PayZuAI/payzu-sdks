

# PostPixRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** | Amount in BRL. Must be &gt;&#x3D; 1. |  |
|**callbackUrl** | **URI** | URL for transaction notifications (http or https). |  [optional] |
|**generatedName** | **String** | Payer full name. Letters and spaces only. |  [optional] |
|**generatedEmail** | **String** | Payer email (optional). |  [optional] |
|**generatedDocument** | **String** | Payer CPF (11 digits) or CNPJ (14 digits), no punctuation, with valid check digits. |  [optional] |
|**expiresIn** | **BigDecimal** | Seconds until the QR Code expires. |  [optional] |
|**clientReference** | **String** | External reference (order, invoice, etc.). A clientReference already used returns the transaction created with it. |  [optional] |
|**virtualAccount** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. |  [optional] |



