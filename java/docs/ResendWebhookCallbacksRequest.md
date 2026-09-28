

# ResendWebhookCallbacksRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAtFrom** | **OffsetDateTime** | Start of the delivery period. At most 30 days ago. |  |
|**createdAtTo** | **OffsetDateTime** | End of the delivery period, on or after createdAtFrom. The window cannot exceed 7 days. |  |
|**webhookIds** | **List&lt;String&gt;** | Webhooks to resend. Omitted: all active webhooks of the account. |  [optional] |
|**transactionIds** | **List&lt;String&gt;** | Restrict to specific transaction IDs. |  [optional] |
|**transactionTypes** | [**List&lt;TransactionTypesEnum&gt;**](#List&lt;TransactionTypesEnum&gt;) | Filter by transaction type. |  [optional] |
|**transactionStatus** | [**List&lt;TransactionStatusEnum&gt;**](#List&lt;TransactionStatusEnum&gt;) | Filter by the current transaction status. |  [optional] |
|**transactionEndToEndIds** | **List&lt;String&gt;** | Restrict to specific end-to-end IDs. |  [optional] |



## Enum: List&lt;TransactionTypesEnum&gt;

| Name | Value |
|---- | -----|
| DEPOSIT | &quot;DEPOSIT&quot; |
| WITHDRAW | &quot;WITHDRAW&quot; |
| COMMISSION | &quot;COMMISSION&quot; |
| LIQUIDATION | &quot;LIQUIDATION&quot; |
| ADJUSTMENT | &quot;ADJUSTMENT&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: List&lt;TransactionStatusEnum&gt;

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELED | &quot;CANCELED&quot; |
| WAITING_FOR_REFUND | &quot;WAITING_FOR_REFUND&quot; |
| REFUNDED | &quot;REFUNDED&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| ERROR | &quot;ERROR&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



