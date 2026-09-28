

# PostWithdrawRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** | Amount in BRL, with at most 2 decimal places. Must be &gt;&#x3D; 0.01. |  |
|**pixKey** | **String** | Destination Pix key in the format of pixType: CPF or CNPJ with valid check digits and no punctuation, phone as +55 followed by area code and number, email, or random key (EVP). |  |
|**pixType** | [**PixTypeEnum**](#PixTypeEnum) | Pix key type. |  |
|**callbackUrl** | **URI** | URL for transaction notifications (http or https). |  [optional] |
|**clientReference** | **String** | External reference for this withdrawal. Repeating it with the same amount and key returns the existing withdrawal; with different data, the request is rejected with PZC210. |  [optional] |
|**description** | **String** | Optional description. |  [optional] |
|**virtualAccount** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. |  [optional] |



## Enum: PixTypeEnum

| Name | Value |
|---- | -----|
| CPF | &quot;cpf&quot; |
| CNPJ | &quot;cnpj&quot; |
| PHONE | &quot;phone&quot; |
| EMAIL | &quot;email&quot; |
| EVP | &quot;evp&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



