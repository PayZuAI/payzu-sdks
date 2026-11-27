

# BankStatement


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador do lançamento de saldo. |  [optional] |
|**amount** | **BigDecimal** | Valor do lançamento. |  [optional] |
|**operation** | [**OperationEnum**](#OperationEnum) | INCREMENT credita o saldo, DECREMENT debita. |  [optional] |
|**reason** | **String** | Motivo do lançamento no extrato. |  [optional] |
|**balanceType** | [**BalanceTypeEnum**](#BalanceTypeEnum) | Saldo movimentado: AVAILABLE ou BLOCKED. |  [optional] |
|**previousBalanceAvailable** | **BigDecimal** | Saldo livre para uso que a conta tinha, em reais, imediatamente antes deste lançamento. |  [optional] |
|**previousBalanceBlocked** | **BigDecimal** | Saldo bloqueado antes do lançamento, em reais. |  [optional] |
|**newBalanceAvailable** | **BigDecimal** | Saldo disponível depois do lançamento, em reais. |  [optional] |
|**newBalanceBlocked** | **BigDecimal** | Saldo bloqueado depois do lançamento, em reais. |  [optional] |
|**transactionId** | **String** | Transação que originou o lançamento. |  [optional] |
|**infractionId** | **String** | Infração relacionada ao lançamento. |  [optional] |
|**createdAt** | **OffsetDateTime** | Data e hora em que a movimentação de saldo foi registrada. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Data e hora da última alteração do registro. |  [optional] |



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



