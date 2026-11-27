

# Refund


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Identificador da devolução. |  [optional] |
|**amount** | **BigDecimal** | Valor devolvido em BRL. |  [optional] |
|**reason** | [**ReasonEnum**](#ReasonEnum) | Motivo da devolução: CUSTOMER_REQUEST (pedida pelo cliente, pela API ou pelo painel), INFRACTION (MED), DENY_COMPANY_DEPOSIT (Pix pago por CNPJ numa conta que não aceita depósito de CNPJ, devolvido sem pedido) ou ADMIN_REQUEST (feita pela PayZu). |  [optional] |
|**description** | **String** | Descrição da devolução. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Status da devolução. |  [optional] |
|**endToEndId** | **String** | End-to-end ID do Pix de devolução. |  [optional] |
|**refundedAt** | **OffsetDateTime** | Quando a devolução foi concluída. |  [optional] |
|**createdAt** | **OffsetDateTime** | Quando a devolução foi pedida. |  [optional] |
|**updatedAt** | **OffsetDateTime** | Última alteração da devolução. |  [optional] |



## Enum: ReasonEnum

| Name | Value |
|---- | -----|
| CUSTOMER_REQUEST | &quot;CUSTOMER_REQUEST&quot; |
| INFRACTION | &quot;INFRACTION&quot; |
| DENY_COMPANY_DEPOSIT | &quot;DENY_COMPANY_DEPOSIT&quot; |
| ADMIN_REQUEST | &quot;ADMIN_REQUEST&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| CANCELED | &quot;CANCELED&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



