

# ResendUserCallbacksRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAtFrom** | **OffsetDateTime** | Início do período. No máximo 30 dias atrás. |  |
|**createdAtTo** | **OffsetDateTime** | Fim do período, igual ou posterior a createdAtFrom. A janela entre início e fim não pode passar de 7 dias. |  |
|**transactionIds** | **List&lt;String&gt;** | Restringe a IDs de transação específicos |  [optional] |
|**transactionTypes** | [**List&lt;TransactionTypesEnum&gt;**](#List&lt;TransactionTypesEnum&gt;) | Filtra por tipo de transação |  [optional] |
|**transactionStatus** | [**List&lt;TransactionStatusEnum&gt;**](#List&lt;TransactionStatusEnum&gt;) | Filtra por status da transação |  [optional] |
|**transactionEndToEndIds** | **List&lt;String&gt;** | Restringe a IDs end-to-end Pix específicos |  [optional] |



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



