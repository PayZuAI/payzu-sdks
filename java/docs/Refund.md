

# Refund


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Refund identifier. |  [optional] |
|**amount** | **BigDecimal** | Refunded amount in BRL. |  [optional] |
|**reason** | [**ReasonEnum**](#ReasonEnum) | Refund reason. |  [optional] |
|**description** | **String** | Refund description. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Refund status. |  [optional] |
|**endToEndId** | **String** | End-to-end ID of the refund Pix. |  [optional] |
|**refundedAt** | **OffsetDateTime** | When the refund was completed. |  [optional] |
|**createdAt** | **OffsetDateTime** | When the refund was requested. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Last change to the refund. |  [optional] |



## Enum: ReasonEnum

| Name | Value |
|---- | -----|
| CUSTOMER_REQUEST | &quot;CUSTOMER_REQUEST&quot; |
| INFRACTION | &quot;INFRACTION&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELED | &quot;CANCELED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



