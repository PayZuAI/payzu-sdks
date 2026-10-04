

# GetUser200Response


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountNumber** | **String** | Public account identifier (6 digits, unique). Used as destination for internal transfers. |  [optional] |
|**branch** | **String** | Branch number (4 digits). |  [optional] |
|**name** | **String** | Registered name of the account. |  [optional] |
|**role** | [**RoleEnum**](#RoleEnum) | Account role. |  [optional] |
|**balanceAvailable** | **BigDecimal** | Balance free for withdrawals and transfers, in reais. |  [optional] |
|**balanceBlocked** | **BigDecimal** | Part of the balance held, in reais. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Account status. |  [optional] |
|**cashInTicketMin** | **BigDecimal** | Minimum amount accepted in each inbound charge, in reais; below the floor the creation is refused. |  [optional] |
|**cashInTicketMax** | **BigDecimal** | Maximum amount accepted in each inbound charge, in reais; above the cap the creation is refused. |  [optional] |
|**cashOutTicketMin** | **BigDecimal** | Minimum amount per withdrawal or internal transfer, in reais; below the floor the request is refused. |  [optional] |
|**cashOutTicketMax** | **BigDecimal** | Maximum amount per withdrawal or internal transfer, in reais; above the cap the request is refused. |  [optional] |
|**serviceFee** | [**GetUser200ResponseServiceFee**](GetUser200ResponseServiceFee.md) |  |  [optional] |
|**dailyWithdrawLimit** | [**GetUser200ResponseDailyWithdrawLimit**](GetUser200ResponseDailyWithdrawLimit.md) |  |  [optional] |



## Enum: RoleEnum

| Name | Value |
|---- | -----|
| USER | &quot;USER&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| UNKNOWN_DEFAULT_OPEN_API | &quot;unknown_default_open_api&quot; |



