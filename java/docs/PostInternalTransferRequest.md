

# PostInternalTransferRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**payerAccountNumber** | **String** | Payer account number (6 digits). Must match the authenticated user&#39;s accountNumber. |  |
|**receiverAccountNumber** | **String** | Destination account number (6 digits). |  |
|**amount** | **BigDecimal** | Transfer amount in BRL, with at most 2 decimal places. |  |
|**description** | **String** | Optional transfer description. |  [optional] |
|**callbackUrl** | **URI** | URL for transaction notifications (http or https). |  [optional] |
|**clientReference** | **String** | External reference for idempotency / reconciliation. |  [optional] |
|**virtualAccount** | **String** | Virtual sub-account (up to 50 characters) to correlate stores, branches, marketplaces. Returned in the callback. |  [optional] |



