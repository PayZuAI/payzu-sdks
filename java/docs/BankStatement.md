

# BankStatement


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identifier of the balance entry. |  [optional] |
|**amount** | **BigDecimal** | Amount of the entry. |  [optional] |
|**operation** | [**OperationEnum**](#OperationEnum) | INCREMENT credits the balance, DECREMENT debits it. |  [optional] |
|**reason** | **String** | Reason for the ledger entry. |  [optional] |
|**balanceType** | [**BalanceTypeEnum**](#BalanceTypeEnum) | Balance moved: AVAILABLE or BLOCKED. |  [optional] |
|**previousBalanceAvailable** | **BigDecimal** | Balance free for use that the account had, in reais, immediately before this entry. |  [optional] |
|**previousBalanceBlocked** | **BigDecimal** | Blocked balance before the entry, in reais. |  [optional] |
|**newBalanceAvailable** | **BigDecimal** | Available balance after the entry, in reais. |  [optional] |
|**newBalanceBlocked** | **BigDecimal** | Blocked balance after the entry, in reais. |  [optional] |
|**transactionId** | **String** | Transaction that originated the entry. |  [optional] |
|**infractionId** | **String** | Infraction related to the entry. |  [optional] |
|**createdAt** | **OffsetDateTime** | Date and time the balance movement was recorded. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Date and time of the last change to the record. |  [optional] |



## Enum: OperationEnum

| Name | Value |
|---- | -----|
| INCREMENT | &quot;INCREMENT&quot; |
| DECREMENT | &quot;DECREMENT&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: BalanceTypeEnum

| Name | Value |
|---- | -----|
| AVAILABLE | &quot;AVAILABLE&quot; |
| BLOCKED | &quot;BLOCKED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



